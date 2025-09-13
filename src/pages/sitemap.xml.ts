import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = async (context) => {
  let articles = [];
  let artworks = [];
  let issues = [];
  let topics = [];

  try {
    articles = await getCollection('articles');
  } catch (error) {
    console.log('No articles found');
  }

  try {
    artworks = await getCollection('artwork');
  } catch (error) {
    console.log('No artwork found');
  }

  try {
    issues = await getCollection('issues');
  } catch (error) {
    console.log('No issues found');
  }

  try {
    topics = await getCollection('topics');
  } catch (error) {
    console.log('No topics found');
  }

  const site = context.site ?? 'https://fromdumpsterfire.com';

  const staticPages = [
    {
      url: '',
      changefreq: 'weekly',
      priority: '1.0',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: 'about',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: '2024-01-01'
    },
    {
      url: 'archive',
      changefreq: 'weekly',
      priority: '0.9',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: 'topics',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: new Date().toISOString().split('T')[0]
    },
    {
      url: 'subscribe',
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: '2024-01-01'
    }
  ];

  // Generate URLs for all content
  const articleUrls = articles.map(article => ({
    url: `articles/${article.slug}`,
    changefreq: 'monthly',
    priority: article.data.featured ? '0.9' : '0.8',
    lastmod: new Date(article.data.foundDate || article.data.publishedDate).toISOString().split('T')[0]
  }));

  const artworkUrls = artworks.map(artwork => ({
    url: `artwork/${artwork.slug}`,
    changefreq: 'monthly',
    priority: artwork.data.featured_on_homepage ? '0.8' : '0.7',
    lastmod: new Date(artwork.data.created_date).toISOString().split('T')[0]
  }));

  const issueUrls = issues.map(issue => ({
    url: `issues/${issue.data.issueNumber}`,
    changefreq: 'yearly',
    priority: '0.8',
    lastmod: new Date(issue.data.publishDate).toISOString().split('T')[0]
  }));

  const topicUrls = topics.map(topic => ({
    url: `topics/${topic.data.slug}`,
    changefreq: 'weekly',
    priority: topic.data.featured ? '0.8' : '0.6',
    lastmod: new Date().toISOString().split('T')[0]
  }));

  const allUrls = [
    ...staticPages,
    ...articleUrls,
    ...artworkUrls,
    ...issueUrls,
    ...topicUrls
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(({ url, changefreq, priority, lastmod }) => `  <url>
    <loc>${new URL(url, site).href}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};