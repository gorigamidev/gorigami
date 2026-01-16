# Landing narrative (one scroll, feels like a full site)

## 1) Hero — “small team, big systems”

**Headline:**
**Create & Innovate.**

**Subhead:**
We’re a focused group of makers crafting **custom digital systems** that scale — from startups to enterprise.

**CTA primary:** Start your project
**CTA secondary:** See how we build

**Visual:** 5–7s silent loop: paper → wireframe → UI snippet → dashboard micro-animation (subtle “origami fold” transition).
**Alt text:** abstract fold turning into an interface.

---

## 2) Why Gorigami (micro-story)

**Section title:** Why we exist
**Copy:**
Great software doesn’t need huge teams — it needs **small, talented groups** with clear ownership. We fold creativity, engineering, and brand into tools that actually move your business.

**Micro-bullets:**

* Small teams, big impact
* Craft over hype
* Partnership > projects

---

## 3) What we build (productized clarity)

**Title:** What we build
**Cards (4):**

1. **Custom Systems** — ERPs, quoting, CRMs, back-office tools
   *“When off-the-shelf isn’t enough.”*
2. **E-commerce & Sites** — storefronts and brand sites that convert
   *“From niche to full retail.”*
3. **APIs & Integrations** — connect what you already use
   *“Automation without chaos.”*
4. **MVPs & Landings** — validate in days, scale later
   *“Start small, think big.”*

**CTA under grid:** Let’s design your system

---

## 4) How we build (process = trust)

**Title:** Our way
**Steps:**

1. **Discover** — listen, map constraints, align goals
2. **Prototype** — fold ideas into interactive flows
3. **Build** — front, back, design, deploy
4. **Evolve** — metrics, iterations, scale

Short, confident. Minimal icons that “fold” in as you scroll.

---

## 5) In-house proof (demos w/ masked data)

**Title:** We build what we believe
**Intro line:** Before building for others, we built for ourselves.

**Grid (video/GIF micro-loops, 5–10s each):**

* **KeeperCase** — “From craftsman to system”
  *Micro-clip:* item builder → cost summary → “Generate quote” hover.
* **Poofcat** — “E-commerce reimagined”
  *Micro-clip:* product card → cart slide-in → checkout step (no real data).
* **Sanares Bienestar** — “Art, wellness & community”
  *Micro-clip:* hero → workshop tile hover → newsletter join.
* **ImportCast** — “Logistics, simplified”
  *Micro-clip:* SKU list → status tags animate → CSV import toast.
* **Abhaco (legacy)** — “Early architecture (deprecated), lessons kept”
  *Micro-clip:* simple dashboard → settings toggle.

**Note:** keep overlays “Demo • No client data”.
**CTA tiny:** Request a private walkthrough

---

## 6) Team (the focused group)

**Title:** Meet the team
**Cards (with compact bios):**

* **Leonardo Bonilla** — Full-Stack Developer
  *“Transforms ideas into crisp product experiences.”* ([gorigami.xyz][1])
* **Nicolás Balaguera** — Data Engineer & Backend Developer
  *“Builds rock-solid backends and data pipelines.”* ([gorigami.xyz][1])
* **Jennifer Concha** — Designer & Marketing Lead
  *“Designs with elegance; ships brand with intent.”* ([gorigami.xyz][1])

**Tagline under grid:** Bogotá, CO — building globally. ([gorigami.xyz][1])

---

## 7) Prooflets (optional slim band)

Logos or simple text badges: *Fast iterations • Clean code • Owner mindset • Privacy first*

---

## 8) Final CTA (conversion)

**Headline:** Let’s build something extraordinary
**Subhead:** No layers. No noise. A small team that listens, thinks, and delivers.
**Form fields:** Name · Email · Company · Project Type · Message
**Buttons:** Send / Book a 20-min intro
**Contact line:** [develop@gorigami.xyz](mailto:develop@gorigami.xyz) · +57 305 7197012 · Bogotá, Colombia

---

## Microcopy pack (ready to paste)

* **Hero CTA (primary):** Start your project
* **Hero CTA (secondary):** See how we build
* **Section labels:** Why / What / How / Demos / Team / Contact
* **Footer line:** Gorigami — Create & Innovate
* **Privacy note near form:** We’ll only use your info to reply to your inquiry.

---

## Visual & asset guidance

* **Palette:** White base, deep violet accents, soft orange highlights (sparingly).
* **Type:** Urbanist/Clash for headings, Inter for body.
* **Motion:** Gentle fold/morph transitions, no flashy parallax.
* **Demo loops:** 1600×900 mp4/webm + GIF fallbacks, 5–10s, muted, no PII.
* **Imagery:** Macro shots of sketches and UI fragments; avoid stocky people photos.

---

## Astro implementation notes (quick + practical)

### **File map**

```text
/src/pages/index.astro
/src/components/Hero.astro
/src/components/Why.astro
/src/components/WhatWeBuild.astro
/src/components/Process.astro
/src/components/InHouseGrid.astro
/src/components/Team.astro
/src/components/CTAContact.astro
/src/data/team.ts
/src/data/demos.ts
/public/demos/*.webm
/public/images/*
```

**Data-first approach**
Keep reusable content in `/src/data` so you can localize or A/B test easily:

```ts
// /src/data/team.ts
export default [
  { name: "Leonardo Bonilla", role: "Full-Stack Developer", blurb: "Transforms ideas into crisp product experiences." },
  { name: "Nicolás Balaguera", role: "Data Engineer & Backend Developer", blurb: "Builds rock-solid backends and data pipelines." },
  { name: "Jennifer Concha", role: "Designer & Marketing Lead", blurb: "Designs with elegance; ships brand with intent." },
];
```

```ts
// /src/data/demos.ts
export default [
  { slug:"keepercase", title:"KeeperCase", tag:"In-house", caption:"From craftsman to system", video:"/demos/keepercase.webm" },
  { slug:"poofcat", title:"Poofcat", caption:"E-commerce reimagined", video:"/demos/poofcat.webm" },
  { slug:"sanares", title:"Sanares Bienestar", caption:"Art, wellness & community", video:"/demos/sanares.webm" },
  { slug:"importcast", title:"ImportCast", caption:"Logistics, simplified", video:"/demos/importcast.webm" },
  { slug:"abhaco", title:"Abhaco (legacy)", caption:"Early architecture, lessons kept", video:"/demos/abhaco.webm" },
];
```

**Performance tips (Astro):**

* Use `<video autoplay muted loop playsinline loading="lazy" poster="/images/demo-poster.jpg">`.
* Ship `webm` first, small bitrates; lazy-load offscreen videos.
* Wrap heavy sections in `client:visible` only if you add interactive JS.
* Use `astro:assets` for images; prefetch critical fonts; set `rel="preload"` for hero video.

**Accessibility:**

* Provide alt text for hero animation and posters.
* Ensure CTAs are keyboard focusable; color contrast AA+.

---

## Why this works 

* **Ambition without bloat:** “small teams, big systems” tells enterprise you can play, without pretending to be an agency.
* **Proof without leaks:** demo loops show capability while protecting IP/client data.
* **Clear paths:** two main CTAs across the page; everything points to contact/book.
* **Credibility:** real team with names/roles (from your site). ([gorigami.xyz][1])

If you want, I can turn this into **ready-to-paste Astro components** next (with the copy already wired to `/src/data/*` and placeholder video slots).

[1]: https://gorigami.xyz/ "Bienvenido a Gorigami"
