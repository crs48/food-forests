// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeBaseUrl } from './src/lib/rehype-base-url.mjs';

// Project page served from https://crs48.github.io/food-forests/
// `site` + `base` must match the GitHub Pages URL; build links with
// import.meta.env.BASE_URL (see src/lib/url.ts) so the base never breaks.
//
// Tailwind v4 runs via PostCSS (postcss.config.mjs) rather than the
// @tailwindcss/vite plugin — Astro 6 ships rolldown-vite, which the Vite
// plugin (4.3.x) isn't compatible with yet. Same CSS-first @theme setup.
const base = '/food-forests';

export default defineConfig({
  site: 'https://crs48.github.io',
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [[rehypeBaseUrl, { base }]],
  },
});
