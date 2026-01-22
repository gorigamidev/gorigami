import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  // adapter: netlify(),
  // output: 'static'
  site: 'https://gorigami.xyz',

  integrations: [sitemap()]
});