
# 🚀 Mobile Performance Optimization Roadmap: Gorigami.xyz

## Executive Summary
While Desktop performance is at **98%**, Mobile is currently at **68%**. The primary bottleneck is **Image Payload** and **Main-thread blocking** (LCP and TBT). This roadmap focuses on leveraging **Astro's** architecture and **Cloudinary's** dynamic transformations to reach a **90+ score** on Mobile.

---

## 1. Responsive Images with Cloudinary (The "Quick Win")
Lighthouse reports an estimated saving of **873 KiB**. We are currently serving desktop-sized images (1024px+) to mobile devices (approx. 400px).

### Technical Implementation:
Replace static `src` with `srcset` in your Astro components. This allows the browser to request the specific width needed for the device.

**Example for the Gorilla Hero Image:**
```astro
<img 
  src="https://res.cloudinary.com/gorigami/image/upload/w_500,f_auto,q_auto/v1769109709/GorigamiGorilla.png" 
  srcset="
    https://res.cloudinary.com/gorigami/image/upload/w_400,f_auto,q_80/v1769109709/GorigamiGorilla.png 400w,
    https://res.cloudinary.com/gorigami/image/upload/w_800,f_auto,q_80/v1769109709/GorigamiGorilla.png 800w
  "
  sizes="(max-width: 600px) 400px, 800px"
  alt="Gorigami Gorilla - Software Development in Bogotá"
  class="hero-image"
  width="500" 
  height="500"
  fetchpriority="high" 
  loading="eager" 
/>
```
* **Action:** Apply this pattern to `KeeperCase`, `SanarEsBienestar`, and `PoofCat` components.
* **Target:** Reduce image size by **80%** on mobile viewports.

---

## 2. Eliminate Render-Blocking Resources
Lighthouse identified `index.mzyFKChj.css` as a blocking resource (~600ms delay).

### Solutions for Astro:
1.  **Critical CSS:** Ensure only essential styles for the Hero section are loaded initially. 
2.  **Font Optimization:** You are loading `Nautilus.otf` and `Urbanist`. 
    * Convert `.otf` to `.woff2` (much smaller).
    * Add `font-display: swap;` to your `@font-face` declarations to prevent invisible text during loading.

---

## 3. Offload Third-Party Scripts (Google Tag Manager)
Google Tag Manager (GTM) is consuming **65 KiB** of unoptimized JS and hijacking the main thread on mobile.

### Action: Use Astro Partytown
Move GTM execution to a Web Worker so it doesn't slow down the UI rendering.

1.  **Install:** `npx astro add partytown`
2.  **Config:** Update your GTM script tag in `Layout.astro`:
    ```html
    <script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-ERFZ1FECC9"></script>
    ```

---

## 4. Connection Pre-fetching
Since Gorigami relies heavily on Cloudinary and Google Fonts, pre-establishing connections reduces latency.

Add these tags to your `<head>` in `Layout.astro`:
```html
<link rel="preconnect" href="https://res.cloudinary.com" />
<link rel="dns-prefetch" href="https://res.cloudinary.com" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
```

---

## 5. Summary Checklist for the Next Sprint

| Task | Priority | Expected Impact |
| :--- | :--- | :--- |
| **Cloudinary `srcset` Implementation** | **Critical** | -800KiB Payload / +15 points |
| **Convert Fonts to .woff2** | **High** | -150ms LCP / +5 points |
| **Install Astro Partytown for GTM** | **High** | Reduced TBT (Total Blocking Time) |
| **Correct Image Aspect Ratios** | **Medium** | Eliminates Layout Shift (CLS) |

---

**Next Steps:** Implement the `srcset` transformations for the top 5 images listed in your Lighthouse report. This single change will likely move your Mobile score from **68** to **82+**.