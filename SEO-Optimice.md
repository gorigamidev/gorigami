# 🚀 Gorigami SEO Optimization Guide (Astro.build)

This document provides the technical implementation for **Gorigami S.A.S.** to rank for "Software a la medida en Bogotá" and "Soluciones SaaS" using Astro's component-based structure.

---

## 1. Global SEO Layout (`Layout.astro`)
Since you are using Astro, ensure your base layout accepts these props to avoid hardcoding and to allow page-specific SEO.

```astro
---
// Layout.astro
interface Props {
	title?: string;
	description?: string;
}

const { 
  title = "Gorigami | Software a la Medida en Bogotá y Soluciones SaaS", 
  description = "Expertos en desarrollo de software a la medida en Bogotá. Creamos soluciones SaaS, apps web y sistemas escalables con Vue.js y Node.js." 
} = Astro.props;
---

<!doctype html>
<html lang="es"> <head>
		<meta charset="UTF-8" />
		<meta name="description" content={description} />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
		<title>{title}</title>

		<script type="application/ld+json">
			{
			  "@context": "https://schema.org",
			  "@type": "ProfessionalService",
			  "name": "Gorigami S.A.S.",
			  "image": "https://gorigami.xyz/logo-gorigami.png",
			  "@id": "https://gorigami.xyz",
			  "url": "https://gorigami.xyz",
			  "telephone": "+57 305719012",
			  "address": {
				"@type": "PostalAddress",
				"streetAddress": "Cll 163B 45 32",
				"addressLocality": "Bogotá",
				"addressRegion": "Cundinamarca",
				"postalCode": "111156",
				"addressCountry": "CO"
			  },
			  "geo": {
				"@type": "GeoCoordinates",
				"latitude": 4.745192885672313,
				"longitude": -74.04844711987694
			  },
			  "serviceType": ["Software a la medida", "Soluciones SaaS", "Desarrollo Web"],
			  "areaServed": "Bogotá, Colombia"
			}
		</script>
	</head>
	<body>
		<slot />
	</body>
</html>
```

---

## 2. Component-Level Changes (Keywords)

### **Hero.astro**
The current `Create & Innovate` text is visually appealing but invisible to crawlers.
* **Update:** Use a hidden H1 if you want to keep the "Look & Feel" or wrap the main value proposition.
* **Target:** `Software a la medida en Bogotá`

```astro
<section>
  <h1 class="text-gradient">Software a la medida en Bogotá</h1>
  <p>Soluciones SaaS escalables y sistemas digitales de alto impacto.</p>
</section>
```

### **Product/Project Links**
Since **Korest** is on `korest.site`, use the **Astro `<a href="">`** with descriptive titles to pass "link juice" properly.
* **Anchor Text:** Use "Korest: Software para gestión de costos de manufactura" instead of just "View Project".

---

## 3. Image Optimization (Astro Image)
Don't use standard `<img>` tags. Use the built-in **Astro Image component** to automatically serve WebP/AVIF formats, which helps with the "Speed" factor of SEO.

```astro
---
import { Image } from 'astro:assets';
import myGorillaLogo from '../assets/logo.png';
---
<Image 
  src={myGorillaLogo} 
  alt="Gorigami - Agencia de Desarrollo de Software a la Medida en Bogotá" 
  width={200} 
  height={200} 
/>
```

---

## 4. Content Strategy (The "Boutique" Edge)
Since you are a "Boutique Tecnológica", Google will reward "Expertise".
* **Sitemap:** Add the `@astrojs/sitemap` integration in your `astro.config.mjs`.
* **Robots.txt:** Create a `public/robots.txt` file:
  ```text
  User-agent: *
  Allow: /
  Sitemap: https://gorigami.xyz/sitemap-index.xml
  ```

---

## 5. Technical Goal Checklist
1. **Indexation:** Ensure the site is visible to Google (check for `noindex` tags).
2. **Canonical Tags:** Ensure Astro is generating canonical URLs to avoid duplicate content if you have staging domains.
3. **Internal Linking:** Create a small "Services" section where the keywords "Software a la medida" and "SaaS" are explicitly mentioned at least twice.
