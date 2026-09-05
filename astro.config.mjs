// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// Patterns + Patina — server output so the /api/enquiry endpoint runs on Railway.
// Every content page is prerendered (see `export const prerender = true` in each page);
// only the enquiry endpoint is rendered on demand. The Node standalone adapter reads
// HOST/PORT from the environment, which is how Railway assigns the public port.
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  image: {
    // Optimised at build time to WebP; large source PNGs never ship to the browser.
    responsiveStyles: true,
  },
  server: {
    host: true,
  },
});
