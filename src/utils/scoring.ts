/**
 * Scoring Engine for Data Maturity Assessment
 * Pure utility — no DOM dependencies.
 *
 * Formulas (from spec):
 *   Dimension Score (Dn) = (AvgQualitative × 0.65) + ((AvgBinary × 4) + 1) × 0.35
 *   Global Score (M_global) = D1×0.25 + D2×0.20 + D3×0.25 + D4×0.15 + D5×0.15
 */

import type { GlobalLevel, BenchmarkRange, DimensionBenchmark } from '../data/ResultsDataQA';

// ── Interfaces ──────────────────────────────────────────────

export interface DataQARow {
  ID: string;
  D_Block: string;
  QA_Type: string;
  QA: string;
  Opciones?: string[];
}

export interface GroupedQuestions {
  [dimension: string]: DataQARow[];
}

// ── Dimension weights ───────────────────────────────────────

const DIMENSION_WEIGHTS: Record<string, number> = {
  D1: 0.25,
  D2: 0.20,
  D3: 0.25,
  D4: 0.15,
  D5: 0.15,
};

// ── Core formulas ───────────────────────────────────────────

/**
 * Calculate a single dimension score.
 * @param qualitativeAvg  Average of Likert (1-5) answers
 * @param binaryAvg       Average of binary (0 or 1) answers
 */
export function calcDimensionScore(qualitativeAvg: number, binaryAvg: number): number {
  const score = (qualitativeAvg * 0.65) + ((binaryAvg * 4 + 1) * 0.35);
  return Math.round(score * 100) / 100; // 2 decimal places
}

/**
 * Calculate the global maturity score from all five dimension scores.
 */
export function calcGlobalScore(dimensionScores: Record<string, number>): number {
  let total = 0;
  for (const [dim, weight] of Object.entries(DIMENSION_WEIGHTS)) {
    total += (dimensionScores[dim] ?? 0) * weight;
  }
  return Math.round(total * 100) / 100;
}

// ── Lookup helpers ──────────────────────────────────────────

/**
 * Find the matching global maturity level for a given score.
 */
export function getGlobalLevel(score: number, globalLevels: GlobalLevel[]): GlobalLevel | null {
  for (const level of globalLevels) {
    const [lo, hi] = level.range;
    if (score >= lo && score <= hi) {
      return level;
    }
  }
  // Edge case: if score rounds to exactly 5 but range is [5,5]
  if (score >= 5) return globalLevels[globalLevels.length - 1] ?? null;
  return null;
}

/**
 * Get the benchmark feedback (low/mid/high) for a specific dimension.
 */
export function getDimensionBenchmark(
  dimKey: string,
  score: number,
  benchmarks: Record<string, DimensionBenchmark>
): { type: string; message: string; name: string } | null {
  const dim = benchmarks[dimKey];
  if (!dim) return null;

  for (const range of dim.ranges) {
    const [lo, hi] = range.score_range;
    if (score >= lo && score <= hi) {
      return { type: range.type, message: range.message, name: dim.name };
    }
  }
  return null;
}

// ── Data grouping ───────────────────────────────────────────

/**
 * Group flat question array into { D1: [...], D2: [...], … }
 */
export function groupByDimension(questions: DataQARow[]): GroupedQuestions {
  const groups: GroupedQuestions = {};
  for (const q of questions) {
    if (!groups[q.D_Block]) {
      groups[q.D_Block] = [];
    }
    groups[q.D_Block].push(q);
  }
  return groups;
}

// ── Dimension metadata ──────────────────────────────────────

export const DIMENSION_META: Record<string, { title: string; subtitle: string }> = {
  D1: {
    title: 'Estrategia y Visión',
    subtitle: 'Midiendo cómo tu información se alinea con los objetivos del negocio.',
  },
  D2: {
    title: 'Procesos y Flujos de Datos',
    subtitle: 'Evaluando cómo fluye y se cuida la información en la organización.',
  },
  D3: {
    title: 'Personas y Cultura de Datos',
    subtitle: 'Analizando la capacidad y disposición del equipo para usar datos.',
  },
  D4: {
    title: 'Calidad y Gobernanza',
    subtitle: 'Midiendo la confianza y calidad de la información disponible.',
  },
  D5: {
    title: 'Tecnología e Infraestructura',
    subtitle: 'Evaluando las herramientas y conexión de los sistemas actuales.',
  },
};
