import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import compress from 'astro-compress';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://ateneadesigns.es',
  output: 'static',
  adapter: cloudflare({ imageService: 'compile' }),
  integrations: [
    mdx(),
    icon({ include: { lucide: ['*'], ph: ['*'] } }),
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES' } },
    }),
    compress({ HTML: true, CSS: true, JavaScript: true, Image: false, SVG: true }),
  ],
  prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },
  vite: {
    ssr: { external: ['node:buffer', 'node:path', 'node:url'] },
  },
});
