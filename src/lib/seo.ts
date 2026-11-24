import { profile } from './portfolio';

export function portfolioHead(title: string, description: string, path: string) {
  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${profile.canonical}${path}` },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    links: [{ rel: 'canonical', href: `${profile.canonical}${path}` }],
  };
}