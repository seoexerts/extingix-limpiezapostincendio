// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// PUBLIC_SITE_URL se configura en el dashboard de Vercel/Netlify/Cloudflare.
// Si no está definida, se usa el fallback hardcodeado.
const siteUrl = process.env.PUBLIC_SITE_URL || 'https://extinguix-limpieza-post-incendio.pages.dev';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: siteUrl,
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
});
