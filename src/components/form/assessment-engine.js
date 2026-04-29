/**
 * Assessment client-side state machine.
 * Manages step navigation, answer collection, scoring, persistence, and results rendering.
 */

const STORAGE_KEY = 'gorigami-assessment';
const TOTAL_STEPS = 7; // 0=onboard, 1-5=dimensions, 6=results

// ── State ───────────────────────────────────────────────────
let currentStep = 0;
let answers = {};
let onboardData = {};

// ── Persistence ─────────────────────────────────────────────
function saveState() {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ currentStep, answers, onboardData }));
}
function loadState() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (raw) {
      const s = JSON.parse(raw);
      currentStep = s.currentStep || 0;
      answers = s.answers || {};
      onboardData = s.onboardData || {};
      return true;
    }
  } catch (_) {}
  return false;
}

// ── Navigation ──────────────────────────────────────────────
function showStep(idx) {
  document.querySelectorAll('.step').forEach(el => el.classList.remove('active'));
  const target = document.querySelector(`.step[data-step="${idx}"]`);
  if (target) target.classList.add('active');
  currentStep = idx;
  updateProgress();
  saveState();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateProgress() {
  const dots = document.querySelectorAll('.progress-dot');
  dots.forEach((dot, i) => {
    dot.classList.remove('active', 'completed');
    if (i < currentStep) dot.classList.add('completed');
    else if (i === currentStep) dot.classList.add('active');
  });
  const pct = Math.round((currentStep / (TOTAL_STEPS - 1)) * 100);
  const pctEl = document.getElementById('progress-pct');
  if (pctEl) pctEl.textContent = `${pct}%`;
  const labelEl = document.getElementById('progress-label');
  if (labelEl) {
    const labels = ['Identificación', 'D1: Estrategia', 'D2: Procesos', 'D3: Personas', 'D4: Calidad', 'D5: Tecnología', 'Resultados'];
    labelEl.textContent = labels[currentStep] || '';
  }
}

// ── Answer Collection ───────────────────────────────────────
function collectAnswers() {
  // Likert + Binary
  document.querySelectorAll('input[type="radio"]:checked').forEach(inp => {
    answers[inp.name] = parseFloat(inp.value);
  });
  // MultiSelect
  document.querySelectorAll('.multi-select').forEach(ms => {
    const qid = ms.dataset.qid;
    const checked = ms.querySelectorAll('input:checked');
    answers[qid] = Array.from(checked).map(c => c.value);
  });
  // Open text
  document.querySelectorAll('.open-textarea').forEach(ta => {
    if (ta.value.trim()) answers[ta.dataset.qid] = ta.value.trim();
  });
  console.log('Current State of Answers:', answers);
}

function collectOnboard() {
  ['full_name','email','company_name','industry','job_role','company_size'].forEach(f => {
    const el = document.getElementById('onboard-' + f);
    if (el) onboardData[f] = el.value;
  });
}

import { calcDimensionScore, calcGlobalScore } from '../../utils/scoring';

// ── Scoring ─────────────────────────────────────────────────
const DIM_WEIGHTS = { D1: 0.25, D2: 0.20, D3: 0.25, D4: 0.15, D5: 0.15 };

function calcScores(questionsData) {
  const dims = {};
  console.group('Assessment Scoring Debug');
  
  // Output raw numerical answers for audit
  const numericalAnswers = {};
  for (const [qid, val] of Object.entries(answers)) {
    if (typeof val === 'number') numericalAnswers[qid] = val;
  }
  console.log('NUMERICAL SCORES JSON:', JSON.stringify(numericalAnswers, null, 2));

  for (let d = 1; d <= 5; d++) {
    const dKey = 'D' + d;
    
    const dimQuestions = questionsData.filter(q => q.D_Block === dKey);
    const qualScores = dimQuestions
      .filter(q => q.QA_Type.includes('Cualitativa'))
      .map(q => answers[q.ID])
      .filter(v => typeof v === 'number');

    const binScores = dimQuestions
      .filter(q => q.QA_Type === 'Si/No')
      .map(q => answers[q.ID])
      .filter(v => typeof v === 'number');

    console.log(`${dKey} Raw Arrays:`, { qualScores, binScores });

    const avgQual = qualScores.length ? qualScores.reduce((a, b) => a + b, 0) / qualScores.length : 3;
    const rawBinAvg = binScores.length ? binScores.reduce((a, b) => a + b, 0) / binScores.length : 0.5;

    // Use centralized utility for dimension score
    const dimScore = calcDimensionScore(avgQual, rawBinAvg);
    dims[dKey] = dimScore;

    console.log(`${dKey}: AvgQual=${avgQual.toFixed(2)}, RawBinAvg=${rawBinAvg.toFixed(2)} -> Dn=${dimScore}`);
  }
  
  // Use centralized utility for global score
  const global = calcGlobalScore(dims);
  
  console.log('FINAL GLOBAL MATURITY SCORE:', global);
  console.groupEnd();
  
  return { dims, global };
}

// ── Radar Chart (SVG) ───────────────────────────────────────
function renderRadar(dims) {
  const container = document.getElementById('radar-container');
  if (!container) return;
  const size = 320, cx = size / 2, cy = size / 2, maxR = 120;
  const labels = ['D1', 'D2', 'D3', 'D4', 'D5'];
  const angles = labels.map((_, i) => (Math.PI * 2 * i / 5) - Math.PI / 2);

  function polar(angle, r) {
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
  }

  let svg = `<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">`;
  // Grid rings
  for (let ring = 1; ring <= 5; ring++) {
    const r = maxR * ring / 5;
    const pts = angles.map(a => polar(a, r).join(',')).join(' ');
    svg += `<polygon points="${pts}" fill="none" stroke="#e0e0df" stroke-width="1"/>`;
  }
  // Axes
  angles.forEach(a => {
    const [ex, ey] = polar(a, maxR);
    svg += `<line x1="${cx}" y1="${cy}" x2="${ex}" y2="${ey}" stroke="#e0e0df" stroke-width="1"/>`;
  });
  // Data polygon
  const dataPts = labels.map((l, i) => {
    const val = Math.min(5, Math.max(0, dims[l] || 0));
    const r = maxR * val / 5;
    return polar(angles[i], r).join(',');
  }).join(' ');
  svg += `<polygon points="${dataPts}" fill="rgba(255,164,84,0.2)" stroke="#ffa454" stroke-width="2.5"/>`;
  // Data dots + labels
  labels.forEach((l, i) => {
    const val = Math.min(5, Math.max(0, dims[l] || 0));
    const r = maxR * val / 5;
    const [dx, dy] = polar(angles[i], r);
    svg += `<circle cx="${dx}" cy="${dy}" r="4" fill="#ffa454"/>`;
    const [lx, ly] = polar(angles[i], maxR + 20);
    svg += `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="middle" font-size="12" font-weight="600" fill="#16091d">${l}</text>`;
    svg += `<text x="${lx}" y="${ly + 14}" text-anchor="middle" font-size="9" fill="#6b6b6b">${val.toFixed(1)}</text>`;
  });
  svg += '</svg>';
  container.innerHTML = svg;
}

// ── Results Rendering ───────────────────────────────────────
function renderResults(resultsData, questionsData) {
  collectAnswers();
  const { dims, global } = calcScores(questionsData);

  // Score color
  const scoreEl = document.getElementById('result-score');
  if (scoreEl) {
    scoreEl.textContent = global.toFixed(1);
    if (global < 2) scoreEl.style.color = '#ef4444';
    else if (global < 4) scoreEl.style.color = '#f59e0b';
    else scoreEl.style.color = '#10b981';
  }

  // Level info
  const data = resultsData;
  const levels = data.global_levels;
  let level = levels[0];
  for (const l of levels) {
    if (global >= l.range[0] && global <= l.range[1]) { level = l; break; }
  }
  if (global >= 5) level = levels[levels.length - 1];

  const nameEl = document.getElementById('result-level-name');
  if (nameEl) nameEl.textContent = `Nivel ${level.level}: ${level.name}`;
  const diagEl = document.getElementById('result-diagnosis');
  if (diagEl) diagEl.textContent = level.diagnosis;
  const statusEl = document.getElementById('result-status');
  if (statusEl) statusEl.textContent = level.status;

  // Radar
  renderRadar(dims);

  // Benchmark cards
  const cardsEl = document.getElementById('benchmark-cards');
  if (cardsEl) {
    const benchmarks = data.dimension_benchmarks;
    let html = '';
    for (let d = 1; d <= 5; d++) {
      const key = 'D' + d;
      const dim = benchmarks[key];
      if (!dim) continue;
      const score = dims[key] || 0;
      let match = dim.ranges[0];
      for (const r of dim.ranges) {
        if (score >= r.score_range[0] && score <= r.score_range[1]) { match = r; break; }
      }
      const statusLabels = { low: 'Inicial', mid: 'En Desarrollo', high: 'Líder' };
      const statusLabel = statusLabels[match.type] || '';
      
      html += `<div class="benchmark-card ${match.type}">
        <div class="benchmark-dim">${key}</div>
        <div class="benchmark-header">
          <div class="benchmark-title">${dim.name}</div>
          <div class="status-badge ${match.type}">${statusLabel}</div>
        </div>
        <div class="benchmark-score-row">
          <div class="benchmark-score-val">${score.toFixed(1)} <span>/ 5.0</span></div>
        </div>
        <div class="benchmark-divider"></div>
        <div class="benchmark-msg">${match.message}</div>
      </div>`;
    }
    cardsEl.innerHTML = html;
  }
}

// ── Restore UI from saved answers ───────────────────────────
function restoreUI() {
  for (const [name, val] of Object.entries(answers)) {
    if (typeof val === 'number') {
      const radio = document.querySelector(`input[name="${name}"][value="${val}"]`);
      if (radio) radio.checked = true;
    } else if (Array.isArray(val)) {
      val.forEach(v => {
        const cb = document.querySelector(`.multi-select[data-qid="${name}"] input[value="${v}"]`);
        if (cb) cb.checked = true;
      });
    } else if (typeof val === 'string') {
      const ta = document.querySelector(`.open-textarea[data-qid="${name}"]`);
      if (ta) ta.value = val;
    }
  }
  for (const [field, val] of Object.entries(onboardData)) {
    const el = document.getElementById('onboard-' + field);
    if (el) el.value = val;
  }
}

// ── Init ────────────────────────────────────────────────────
export function initAssessment(resultsData, questionsData) {
  const restored = loadState();
  if (restored) restoreUI();

  // Use a data-attribute to avoid double-wiring on View Transitions
  const shell = document.querySelector('.assessment-shell');
  if (shell && !shell.dataset.wired) {
    shell.dataset.wired = 'true';
    console.log('Wiring assessment event delegation');
    
    shell.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-nav');
      if (!btn) return;

      if (btn.classList.contains('btn-next')) {
        if (currentStep === 0) {
          collectOnboard();
          const email = document.getElementById('onboard-email');
          if (email && !email.value.trim()) { email.focus(); return; }
        }

        // Validation for Dimensions (Steps 1-5)
        if (currentStep >= 1 && currentStep <= 5) {
          const stepEl = document.querySelector(`.step[data-step="${currentStep}"]`);
          const radioGroups = new Set();
          // Find all radio groups in this step
          stepEl.querySelectorAll('input[type="radio"]').forEach(r => radioGroups.add(r.name));
          
          let firstMissing = null;
          for (const group of radioGroups) {
            const isChecked = stepEl.querySelector(`input[name="${group}"]:checked`);
            const card = document.querySelector(`input[name="${group}"]`).closest('.question-card');
            
            if (!isChecked) {
              if (!firstMissing) firstMissing = card;
              card.classList.add('error-pulse');
              card.style.border = '2px solid #ef4444';
            } else {
              card.classList.remove('error-pulse');
              card.style.border = '1px solid var(--light-gray)'; // Reset to original
            }
          }

          if (firstMissing) {
            firstMissing.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return; // Stop navigation
          }
        }

        collectAnswers();
        
        const next = currentStep + 1;
        console.log(`Navigating Next: ${currentStep} -> ${next}`);
        
        if (next === TOTAL_STEPS - 1) renderResults(resultsData, questionsData);
        showStep(next);
      }
      
      else if (btn.classList.contains('btn-back')) {
        collectAnswers();
        const prev = Math.max(0, currentStep - 1);
        console.log(`Navigating Back: ${currentStep} -> ${prev}`);
        showStep(prev);
      }
    });

    // Reset Modal Logic
    const resetBtn = document.getElementById('btn-reset');
    const modal = document.getElementById('reset-modal');
    const modalCancel = document.getElementById('modal-cancel');
    const modalConfirm = document.getElementById('modal-confirm');

    if (resetBtn && modal && modalCancel && modalConfirm) {
      resetBtn.addEventListener('click', () => {
        modal.classList.add('active');
      });

      modalCancel.addEventListener('click', () => {
        modal.classList.remove('active');
      });

      modalConfirm.addEventListener('click', () => {
        sessionStorage.removeItem(STORAGE_KEY);
        location.reload();
      });

      // Close on backdrop click
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
    }
  }

  // Auto-save on change
  const container = document.getElementById('assessment');
  if (container) {
    container.addEventListener('change', () => {
      collectAnswers();
      saveState();
    });
  }

  // Show correct step
  if (restored && currentStep === TOTAL_STEPS - 1) {
    renderResults(resultsData, questionsData);
  }
  showStep(restored ? currentStep : 0);
}
