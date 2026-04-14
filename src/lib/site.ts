export const site = {
  name: 'Atenea Designs',
  tagline: 'Estudio de diseño web con alma.',
  description:
    'Diseñamos webs, apps y ecosistemas digitales que enamoran. Dominio, hosting y correos incluidos. Para PYMEs que quieren algo más que una plantilla.',
  url: 'https://ateneadesigns.es',
  locale: 'es-ES',
  email: 'hola@ateneadesigns.es',
  phone: '+34602068307',
  address: { locality: 'León', region: 'Castilla y León', country: 'ES' },
  social: {
    linkedin: 'https://www.linkedin.com/company/atenea-designs',
    instagram: 'https://instagram.com/atenea.designs',
    behance: '',
  },
  sister: {
    name: 'Atenea Ciberseguridad',
    url: 'https://ateneaciberseguridad.es',
    blurb: 'Ciberseguridad para la misma PYME que diseñamos.',
  },
} as const;

export const nav = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios/', label: 'Servicios' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/contacto/', label: 'Contacto' },
] as const;

export const services = [
  {
    slug: 'diseno-web',
    accent: 'purple',
    title: 'Diseño web',
    summary: 'Landings y webs corporativas con identidad propia. Cero plantillas, cero "hecho igual que el anterior".',
    bullets: ['Diseño editorial a medida', 'Rápidas de verdad (Core Web Vitals)', 'SEO técnico desde el día uno'],
  },
  {
    slug: 'apps',
    accent: 'pink',
    title: 'Aplicaciones a medida',
    summary: 'Del MVP validable al producto que escala. Apps web y móvil hechas como las hacen las startups, pagadas como una suscripción.',
    bullets: ['UX research y prototipado Figma', 'Stack moderno: Astro, Next, React Native', 'Integraciones, pagos y panel admin'],
  },
  {
    slug: 'gestion-integral',
    accent: 'orange',
    title: 'Dominio + hosting + correos',
    summary: 'La parte aburrida, resuelta. Tu dominio, tu hosting rápido y tus correos profesionales bajo un mismo paraguas.',
    bullets: ['Dominio .es / .com incluido', 'Hosting en Cloudflare (global, rápido)', 'Correos ilimitados con tu marca'],
  },
  {
    slug: 'redisenos',
    accent: 'green',
    title: 'Rediseños',
    summary: '¿Tienes web pero ya no te representa? La pulimos sin tirar el SEO ni romper lo que ya convierte.',
    bullets: ['Auditoría UX, rendimiento y SEO', 'Migración sin perder posiciones', 'Rediseño iterativo, por fases'],
  },
  {
    slug: 'branding',
    accent: 'blue',
    title: 'Branding digital',
    summary: 'Logo, paleta y voz que funcionan igual de bien en la web, en Instagram y en una factura.',
    bullets: ['Identidad visual completa', 'Manual de marca usable', 'Plantillas para redes y docs'],
  },
] as const;

export interface PricingTier {
  slug: string;
  accent: 'purple' | 'pink' | 'orange' | 'blue' | 'green' | 'yellow';
  name: string;
  price: number;
  originalPrice?: number;
  priceFrom?: boolean;
  caption: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  cta: string;
}

export const pricing: PricingTier[] = [
  {
    slug: 'landing',
    accent: 'purple',
    name: 'Landing',
    price: 49,
    originalPrice: 79,
    caption: 'Una página que vende por ti mientras duermes.',
    features: [
      '1 página independiente',
      'Diseño editorial a medida',
      'Formulario + correo profesional',
      'SEO técnico y analítica',
      'Dominio .es o .com incluido',
      'Hosting global en Cloudflare',
    ],
    badge: '38% lanzamiento',
    cta: 'Empezar landing',
  },
  {
    slug: 'web',
    accent: 'pink',
    name: 'Web esencial',
    price: 89,
    originalPrice: 149,
    caption: 'Tu web corporativa completa, sin letra pequeña.',
    features: [
      'Hasta 6 páginas (Inicio, Servicios, Contacto…)',
      'CMS para que edites tú',
      'Blog opcional',
      '5 correos pro con tu marca',
      'Mantenimiento evolutivo',
      '3 meses gratis de regalo',
    ],
    highlight: true,
    badge: 'Más elegido',
    cta: 'Elegir web esencial',
  },
  {
    slug: 'pro',
    accent: 'orange',
    name: 'Web avanzada',
    price: 179,
    originalPrice: 279,
    caption: 'Tienda, reservas o catálogo. Con pegada.',
    features: [
      'Hasta 15 páginas',
      'Tienda, reservas o catálogo',
      'Pasarela de pago + integraciones',
      'Analítica avanzada',
      'Correos ilimitados',
      'Soporte prioritario',
    ],
    badge: '36% lanzamiento',
    cta: 'Elegir web avanzada',
  },
  {
    slug: 'app',
    accent: 'blue',
    name: 'App a medida',
    price: 349,
    originalPrice: 599,
    priceFrom: true,
    caption: 'Producto digital hecho contigo, iterando cada mes.',
    features: [
      'App web o móvil a medida',
      'Roadmap mensual contigo',
      'Desarrollo iterativo',
      'Panel de administración',
      'Mantenimiento evolutivo',
      'Soporte directo por Slack',
    ],
    badge: '42% lanzamiento',
    cta: 'Hablemos de tu app',
  },
];

export const marketingPlans: PricingTier[] = [
  {
    slug: 'presencia',
    accent: 'yellow',
    name: 'Presencia',
    price: 199,
    originalPrice: 299,
    caption: 'Estás en redes. Y se nota.',
    features: [
      '8 publicaciones al mes (Instagram + LinkedIn)',
      'Diseño gráfico de cada post',
      'SEO on-page continuo',
      'Monitorización y ajustes mensuales',
      'Informe mensual de métricas',
    ],
    badge: '33% lanzamiento',
    cta: 'Empezar con Presencia',
  },
  {
    slug: 'crecimiento',
    accent: 'green',
    name: 'Crecimiento',
    price: 399,
    originalPrice: 649,
    caption: 'Tráfico real. Leads reales. Todo bajo control.',
    features: [
      'Todo lo de Presencia',
      '12 publicaciones al mes + 4 stories/reels',
      'Gestión de Meta Ads y Google Ads',
      'Newsletter mensual con tu base',
      'Copy para campañas',
      'Call mensual de estrategia (30 min)',
    ],
    highlight: true,
    badge: 'Más elegido',
    cta: 'Elegir Crecimiento',
  },
  {
    slug: 'marca360',
    accent: 'pink',
    name: 'Marca 360',
    price: 699,
    originalPrice: 1199,
    caption: 'Tu departamento de marketing externo.',
    features: [
      'Todo lo de Crecimiento',
      'Contenido semanal multicanal',
      'Estrategia trimestral dedicada',
      'CRM + automatizaciones (email, WhatsApp)',
      'Reportes semanales',
      'Call quincenal con el equipo',
    ],
    badge: '42% lanzamiento',
    cta: 'Quiero Marca 360',
  },
];
