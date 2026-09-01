# Design — Gorigami

Locked design system. Future Hallmark runs read this file first; pages defer
to it. Amend intentionally — the file is the rule.

## System
- Genre · modern-minimal
- Macrostructure families:
  - **Marketing** (home, `madurez-de-datos`) · **Split Studio** — alternating
    text/proof diptych, direction flips per block (the site already does this
    between `Hero` and `Process`; this makes it the deliberate rule, not an
    accident).
  - **App** (the data-maturity assessment tool) · no marketing macrostructure
    applies — it's the product's actual UI, not a page about the product.
    Inherits the token system directly; layout stays dictated by its own
    interaction pattern (progress → step cards → results dashboard).
  - **Content** (case studies, terms, 404) · **Long Document** — single
    column, generous measure, typographic rhythm over cards.
- Theme · custom (vibe: "midnight violet studio, warm amber signal, quiet
  confidence") — tuned from the existing brand, not a catalog swap.
- Axes · light paper-band / geometric-sans display / warm accent hue (~60°)

## Tokens (canonical · `tokens.css` is the source of truth)
```css
:root {
  --color-paper:      oklch(100% 0 0);        /* pure white — genre-permitted */
  --color-paper-2:    oklch(95.5% 0.001 106); /* smoke */
  --color-paper-3:    oklch(96.6% 0.017 290); /* lavender-mist, decorative tint */
  --color-ink:        oklch(17.1% 0.044 313); /* midnight-violet */
  --color-ink-2:      oklch(52.8% 0 0);       /* mid-gray body/muted */
  --color-rule:       oklch(90.6% 0.001 106); /* light-gray */
  --color-accent:     oklch(79.5% 0.144 60);  /* sandy-brown */
  --color-accent-2:   oklch(76.5% 0.160 55);  /* sandy-brown hover, more saturated */
  --color-focus:      var(--color-accent);

  --color-success: #10b981;
  --color-warning: #f59e0b;
  --color-danger:  #ef4444;

  --font-display: "Urbanist Variable", system-ui, sans-serif;
  --font-body:    "Inter Variable", system-ui, sans-serif;
  --font-wordmark: "Nautilus", serif;  /* logo only — never body/heading text */

  --space-3xs: 0.25rem; --space-2xs: 0.5rem; --space-xs: 0.75rem;
  --space-sm:  1rem;    --space-md:  1.5rem; --space-lg: 2rem;
  --space-xl:  3rem;    --space-2xl: 4rem;   --space-3xl: 6rem; --space-4xl: 8rem;

  --text-xs: 0.75rem;  --text-sm: 0.875rem; --text-md: 1rem;
  --text-lg: 1.25rem;  --text-xl: 1.5rem;   --text-2xl: 2rem;
  --text-3xl: 2.5rem;  --text-display: clamp(2.5rem, 4vw + 1.5rem, 5rem);

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --dur-fast: 180ms; --dur-base: 240ms; --dur-slow: 320ms;

  --radius-card: 0px;    /* the brand stays hard-edged — cards, buttons, nav */
  --radius-input: 0px;
  --radius-badge: 2px;   /* small pills only: status badges, lang toggle, toast */
}
```

No pill-radius token. The WhatsApp launcher is the one deliberate exception —
a literal circle (`50%`), because it's an icon-badge (like an avatar), not a
card or a nav. Its tooltip callout uses `--radius-badge`, same as everything
else that isn't an icon.

## CTA voice
- Primary · filled `--color-ink`, `--radius-card` (square), border
  `1px solid var(--color-ink)`, arrow-prefixed label (`→ Send`), hover shifts
  to `--color-accent-2` fill + `translateX(4px)`.
- Secondary · transparent fill, `--color-ink` border and text, same hover
  slide, background tints to `--color-paper-2` on hover.
- **Deliberately not** the genre's default pill CTA — the hard-edged
  rectangle is already the site's distinctive, consistent voice; keep it.

## Nav & footer
- Nav · **N5 Floating** (de-pilled) — detached, content-sized, `--space-md`
  from top, `color-mix` blur backdrop, `--radius-card` (hard-edged, not the
  archetype's default pill — matches the brand's cards/buttons instead). 3
  destinations only (Build / Team / Contact) + language switch, so it never
  needs to fall back to a wider archetype. Mobile keeps the existing bottom
  bar, same hard-edged treatment.
- Footer · **Ft2 Inline single line** — wordmark + 2 links + tagline, one
  hairline rule above, no columns.

## Motion stance
- Motion-cut: hover-only, no scroll-triggered reveals. `--ease-out` /
  `--ease-in-out` are the only easings anywhere in the codebase.
- Reduced-motion fallback: ≤150ms opacity crossfade, no spatial motion.

## Per-page allowances
- Marketing pages may keep real photographic/illustration assets already in
  use (hero illustration, team portraits, project screenshots) — no
  generated art.
- App page (assessment tool) ships **zero** decorative enrichment. The form
  and results dashboard carry the page on their own.
- Content pages: typography only, no card chrome.

## What pages MUST share
- The `gorigami` wordmark, set in Nautilus — untouched by this redesign.
- The accent (`--color-accent`) — used only as: focus rings, active nav
  state, CTA border/fill, a small accent mark beside a heading. Never a
  section-covering fill.
- The CTA voice above.
- The N5 nav / Ft2 footer.

## Exports
`tokens.css` (project root) is the source of truth for this system.
