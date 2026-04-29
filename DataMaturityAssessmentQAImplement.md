# Technical Design Document: Data Maturity Assessment Tool (Astro Implementation)

## 1. Project Overview
Development of an interactive, multi-step Data Maturity Assessment form for **gorigami.xyz**. The system will use a provided JSON dataset to render questions, calculate scores in real-time, and present a professional diagnostic dashboard.

**Core Requirements:**
- **Framework:** Astro (using Components/Layouts).
- **Styling:** Tailwind CSS (GORIGAMI design system: Minimalist, Industrial, Dark/Light contrast).
- **Strategy:** Mobile-First, Server-Side Rendering (SSR) for initial load, Client-side hydration for form logic.

---

## 2. Onboarding & Identity (Phase 0)
Before the survey starts, a "Pre-flight" module captures user context.
* **Target Data:**
    * `full_name` (text), `email` (email/required).
    * `company_name` (text), `industry` (Select: Tech, Services, Manufacturing, Finance, Retail, Other).
    * `job_role` (text), `company_size` (Select: 1-50, 51-200, 201-1000, 1000+).

---

## 3. Component Architecture (The "Modular" Approach)

### A. Form Components (`/components/form/`)
- `FormStep.astro`: Wrapper for each Dimension (D1-D5). Includes a progress bar and navigation buttons (Next/Back).
- `LikertScale.svelte/vue`: 1-5 radio-style scale with high-contrast touch targets.
- `BinaryToggle.svelte/vue`: Large card-style selection for "Yes/No" (Binary logic: 1/0).
- `MultiSelect.svelte/vue`: Checkbox-list rendered as selectable tiles for descriptive data.
- `TextArea.astro`: Standard styled input for open-ended questions.

### B. Logic Engine (`/utils/scoring.js`)
Implementation of the weighted average logic:
1.  **Dimension Score ($D_n$):** $$D_n = (\text{AvgQualitative} \times 0.65) + ((\text{AvgBinary} \times 4) + 1) \times 0.35$$
2.  **Global Score ($M_{global}$):**
    $$(D_1 \times 0.25) + (D_2 \times 0.20) + (D_3 \times 0.25) + (D_4 \times 0.15) + (D_5 \times 0.15)$$

---

## 4. Multi-Step UX Design

- **Progression:** One Dimension per view.
- **Sticky Progress Bar:** Fixed at the top, showing the current D-Block title and percentage completed.
- **Micro-copy:** Brief benchmark descriptions displayed as subtitles for each block:
    - *Example (D1):* "Measuring how your information aligns with your business goals."
- **Interactive State:** Buttons must have clear `:active` and `disabled` states to prevent skipping required questions.

---

## 5. Result Visualization Dashboard

When the last "Next" is clicked, transition to the results view:

- **Primary Metric:** Large, bold Typography displaying the 1.0 to 5.0 score.
- **Dynamic Labeling:** Fetching the "Name" and "Diagnosis" from the results JSON based on the range.
- **Dimension Radar Chart:** Visual comparison of D1-D5 performance.
- **Benchmark Feedback Cards:**
    - Render 5 cards (one per D).
    - Logic: Use `dimension_benchmarks` JSON to display the `low`, `mid`, or `high` message according to the specific $D_n$ score.
    - **Visual Indicator:** Color coded (Low: #ef4444, Mid: #f59e0b, High: #10b981).

---

## 6. Technical Implementation Guidelines

- **MobileFirst:** Single column layout for all inputs on mobile. Grid only for desktop results.
- **Islands Architecture:** Use `client:load` only for the interactive form and charts to keep the rest of the page static.
- **JSON Integration:** The form must be mapped from the `assessment.json` file. Any changes in the JSON should automatically update the UI (Modular Inputs).
- **Data Persistence:** Use `sessionStorage` or a state store to keep data if the page refreshes during the multi-step process.

---

### UI Design Reference (Mobile)


### Scoring Summary for Developer:
- **Weights:** D1(25%), D2(20%), D3(25%), D4(15%), D5(15%).
- **Range Mapping:** - 1-1.9: Level 1
  - 2-2.9: Level 2
  - 3-3.9: Level 3
  - 4-4.9: Level 4
  - 5.0: Level 5