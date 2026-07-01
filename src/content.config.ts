import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Educational articles (the /learn hub).
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['basics', 'design', 'plants', 'regenerative']),
    tags: z.array(z.string()).default([]),
    readingMinutes: z.number().optional(),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

// Real-world food forests & the people stewarding them (the /projects section).
const foodForests = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/food-forests' }),
  schema: z.object({
    name: z.string(),
    location: z.string(),
    country: z.string(),
    region: z.enum(['north-america', 'europe', 'latin-america', 'oceania', 'asia', 'africa']),
    climateZone: z.string().optional(),
    established: z.number().optional(),
    area: z.string().optional(),
    steward: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    website: z.string().url().optional(),
    sources: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    heroImage: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

// The layers of a food forest (the /layers reference).
const layers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/layers' }),
  schema: z.object({
    order: z.number(),
    name: z.string(),
    tagline: z.string(),
    heightRange: z.string(),
    exampleSpecies: z.array(z.string()).default([]),
    icon: z.string().default('leaf'),
    optional: z.boolean().default(false),
  }),
});

export const collections = { articles, foodForests, layers };
