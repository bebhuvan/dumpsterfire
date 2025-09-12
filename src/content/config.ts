import { z, defineCollection } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    originalUrl: z.string().url().optional(),
    source: z.string(),
    author: z.string().optional(),
    publishedDate: z.coerce.date(),
    foundDate: z.coerce.date().optional(),
    readingTime: z.number(),
    articleType: z.enum(['essay', 'podcast', 'video', 'newsletter', 'paper', 'thread', 'book']),
    topics: z.array(z.string()),
    issueNumber: z.number().optional(),
    featured: z.boolean().default(false),
    curatorNotes: z.string(),
    excerpt: z.string(),
    pullQuote: z.string().optional(),
  }),
});

const issues = defineCollection({
  type: 'content',
  schema: z.object({
    issueNumber: z.number(),
    publishDate: z.coerce.date(),
    title: z.string(),
    theme: z.string().optional(),
    openingNote: z.string().optional(),
    closingThought: z.string().optional(),
  }),
});

const topics = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    icon: z.string(),
    color: z.enum(['coral', 'blue', 'mint', 'lavender', 'peach', 'sage', 'yellow']),
    featured: z.boolean().default(false),
  }),
});

const artwork = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    artist: z.string(),
    year: z.string().optional(),
    medium: z.string().optional(),
    dimensions: z.string().optional(),
    image: z.string(),
    source_institution: z.string().optional(),
    source_url: z.string().url().optional(),
    description: z.string().optional(),
    why_featured: z.string().optional(),
    featured_on_homepage: z.boolean().default(false),
    created_date: z.coerce.date(),
    seo: z.object({
      meta_title: z.string().optional(),
      meta_description: z.string().optional(),
      og_image: z.string().optional(),
    }).optional(),
  }),
});

const editorial = defineCollection({
  type: 'data',
  schema: z.object({
    note: z.string(),
    type: z.enum(['curator', 'margin', 'standalone']),
    issue_number: z.number().optional(),
    created_date: z.coerce.date(),
    featured: z.boolean().default(false),
    position: z.enum(['top', 'middle', 'bottom']).default('middle'),
  }),
});

export const collections = {
  articles,
  issues,
  topics,
  artwork,
  editorial,
};