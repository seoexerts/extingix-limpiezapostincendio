/**
 * ╔═══════════════════════════════════════════════════════╗
 * ║  CONFIGURACIÓN CENTRAL DEL SITIO — src/config/site.ts ║
 * ║  Generado por generator.html — edita allí, no aquí   ║
 * ╚═══════════════════════════════════════════════════════╝
 */

export const siteConfig = {

  // ── Identidad del negocio ──────────────────────────────
  businessName:      'Extingix',
  businessNameLegal: 'Extingix',
  cif:   'B00000000',
  logo:  '/logo.png',

  // ── Servicio y área ────────────────────────────────────
  serviceType:  'Limpiezas post incendios',
  area:         'Barcelona y municipios cercanos.',
  mainCity:     'Barcelona',
  comarca:      'Barcelona',
  foundingYear: '2020',

  // ── Contacto ──────────────────────────────────────────
  phone:    '633759649',
  email:    'seoexpertsslu@gmail.com',
  whatsapp: '633759649',
  // import.meta.env.SITE lee el campo `site` de astro.config.mjs,
  // que a su vez lee process.env.PUBLIC_SITE_URL del dashboard de la plataforma.
  // @ts-ignore — import.meta.env requiere node_modules instalados para el IDE
  web: import.meta.env.SITE || 'https://extinguix-limpieza-post-incendio.pages.dev',

  // ── Horario ───────────────────────────────────────────
  horario:      'Mo-Fr 09:00-18:00',
  horarioTexto: 'Lunes a Viernes, 9:00–18:00',
  horarioDias:  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] as string[],
  horarioAbre:  '09:00',
  horarioCierra:'18:00',

  // ── SEO ───────────────────────────────────────────────
  description: 'Descripción del negocio para meta description y Schema.',
  priceRange:  '€€',
  aggregateRating: {
    ratingValue:  5.0,
    reviewCount:  0,
    bestRating:   5,
    worstRating:  1,
  },

  // ── Colores corporativos ──────────────────────────────
  colorPrimary: '#0057ff',
  colorText:    '#0f172a',

  // ── Redes sociales ────────────────────────────────────
  social: {
    facebook:  '',
    instagram: '',
    linkedin:  '',
  },

  // ── Verificación de sitio ─────────────────────────────
  googleVerification: '',
  bingVerification:   '',

} as const;

export type SiteConfig = typeof siteConfig;
