import { site } from './site';

export interface MetaInput {
  title?: string;
  description?: string;
  canonical?: string | URL;
  image?: string;
  noindex?: boolean;
  type?: 'website' | 'article';
}

export function buildMeta(input: MetaInput = {}) {
  const title = input.title ? `${input.title} | ${site.name}` : `${site.name} — ${site.tagline}`;
  const description = input.description ?? site.description;
  const canonical = input.canonical ? new URL(input.canonical, site.url).toString() : site.url;
  const image = new URL(input.image ?? '/og-default.jpg', site.url).toString();
  return {
    title,
    description,
    canonical,
    image,
    type: input.type ?? 'website',
    noindex: input.noindex ?? false,
    locale: site.locale,
  };
}
