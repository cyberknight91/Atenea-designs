export const site = {
  name: 'Atenea Designs',
  tagline: 'Estudio de diseño web y producto digital.',
  description:
    'Diseñamos y desarrollamos webs y aplicaciones a medida para PYMEs y startups. Dominio, hosting y correos incluidos. Todo bajo una cuota mensual, sin inversión inicial.',
  url: 'https://ateneadesigns.es',
  locale: 'es-ES',
  email: 'contacto@ateneadesigns.es',
  phone: '+34602068307',
  phone2: '+34694237553',
  address: { locality: 'León', region: 'Castilla y León', country: 'ES' },
  social: {
    linkedin: 'https://www.linkedin.com/company/atenea-designs',
    instagram: 'https://instagram.com/ateneadesigns_',
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
  oneTime?: number;
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
    oneTime: 590,
    caption: 'Una página que vende por ti mientras duermes.',
    features: [
      '1 página a medida',
      'Diseño editorial propio',
      'Formulario + correo profesional',
      'SEO técnico y analítica',
      'Dominio .es o .com incluido',
      'Hosting global en Cloudflare',
    ],
    cta: 'Empezar landing',
  },
  {
    slug: 'web',
    accent: 'pink',
    name: 'Web esencial',
    price: 89,
    oneTime: 1290,
    caption: 'Tu web corporativa completa, sin letra pequeña.',
    features: [
      'Hasta 6 páginas (Inicio, Servicios, Contacto…)',
      'CMS para que edites tú',
      'Blog opcional',
      '5 correos pro con tu marca',
      'Mantenimiento y actualizaciones',
      'Soporte por email y WhatsApp',
    ],
    highlight: true,
    badge: 'Más elegido',
    cta: 'Elegir web esencial',
  },
  {
    slug: 'pro',
    accent: 'orange',
    name: 'Web avanzada',
    price: 149,
    oneTime: 2490,
    caption: 'Tienda, reservas o catálogo con pegada.',
    features: [
      'Hasta 15 páginas',
      'Tienda, reservas o catálogo',
      'Pasarela de pago + integraciones',
      'Analítica avanzada y eventos',
      'Correos ilimitados',
      'Soporte prioritario',
    ],
    cta: 'Elegir web avanzada',
  },
  {
    slug: 'app',
    accent: 'blue',
    name: 'App a medida',
    price: 299,
    priceFrom: true,
    caption: 'Producto digital hecho contigo, iterando cada mes.',
    features: [
      'App web o móvil a medida',
      'Discovery + prototipo Figma',
      'Desarrollo iterativo por sprints',
      'Panel de administración',
      'Mantenimiento evolutivo',
      'Soporte directo por Slack',
    ],
    cta: 'Hablemos de tu app',
  },
];

export const marketingPlans: PricingTier[] = [
  {
    slug: 'presencia',
    accent: 'yellow',
    name: 'Presencia',
    price: 249,
    caption: 'Estás en redes. Y se nota.',
    features: [
      '8 publicaciones al mes (Instagram + LinkedIn)',
      'Diseño gráfico de cada post',
      'SEO on-page continuo',
      'Monitorización y ajustes mensuales',
      'Informe mensual de métricas',
    ],
    cta: 'Empezar con Presencia',
  },
  {
    slug: 'crecimiento',
    accent: 'green',
    name: 'Crecimiento',
    price: 449,
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
    price: 899,
    caption: 'Tu departamento de marketing externo.',
    features: [
      'Todo lo de Crecimiento',
      'Contenido semanal multicanal',
      'Estrategia trimestral dedicada',
      'CRM + automatizaciones (email, WhatsApp)',
      'Reportes semanales',
      'Call quincenal con el equipo',
    ],
    cta: 'Quiero Marca 360',
  },
];

export interface FaqItem { q: string; a: string }
export const faqs: FaqItem[] = [
  {
    q: '¿La cuota mensual es para siempre o tiene permanencia?',
    a: 'Sin permanencia. Puedes pausar o cancelar con 30 días de aviso. Si cancelas, te damos los archivos fuente y podemos migrarte el dominio y los correos.',
  },
  {
    q: '¿Qué incluye la cuota mensual exactamente?',
    a: 'Dominio, hosting, correos profesionales, copias de seguridad, actualizaciones técnicas, soporte y pequeños cambios de contenido (textos, imágenes, nuevas secciones) dentro del alcance de tu plan.',
  },
  {
    q: '¿Puedo pagar el proyecto de una vez en lugar de mensualmente?',
    a: 'Sí. Cada plan tiene un equivalente en pago único (desde 590€ para una landing). En ese caso hosting, dominio y mantenimiento se facturan aparte desde 19€/mes.',
  },
  {
    q: '¿Cuánto tarda en estar online?',
    a: 'Una landing: 2-3 semanas. Una web esencial: 4-5 semanas. Web avanzada o app: lo definimos en la primera llamada, normalmente 6-12 semanas.',
  },
  {
    q: '¿Trabajáis con clientes de fuera de León?',
    a: 'Trabajamos con PYMEs de toda España en remoto. Para proyectos grandes podemos viajar a tu oficina para el arranque.',
  },
  {
    q: '¿Qué pasa si ya tengo una web hecha?',
    a: 'Podemos auditarla y proponerte un rediseño por fases sin perder SEO. También podemos sólo encargarnos del mantenimiento desde 29€/mes.',
  },
];
