import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site } from '../lib/site.ts';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export async function GET(context) {
  const articles = (await getCollection('articles'))
    .filter((a) => !a.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: `${site.name} — Learn`,
    description: 'Friendly, practical guides to food forests, permaculture, and regenerative growing.',
    site: context.site,
    items: articles.map((a) => ({
      title: a.data.title,
      description: a.data.description,
      pubDate: a.data.pubDate,
      categories: a.data.tags,
      link: `${base}/learn/${a.id}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
