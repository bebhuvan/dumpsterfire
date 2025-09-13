import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = async (context) => {
  let articles = [];
  
  try {
    articles = await getCollection('articles');
  } catch (error) {
    // No articles yet - return empty feed
    console.log('No articles found for RSS feed');
  }
  
  // Sort articles by published date, newest first
  const sortedArticles = articles.sort(
    (a, b) => new Date(b.data.publishedDate).getTime() - new Date(a.data.publishedDate).getTime()
  );

  // Take only the most recent 20 articles for the feed
  const recentArticles = sortedArticles.slice(0, 20);

  return rss({
    title: 'From the Dumpster Fire',
    description: 'Rescuing signal from the algorithmic inferno. A curated newsletter of essential reads, rescued from the endless scroll.',
    site: context.site ?? 'https://fromthedumpsterfire.com',
    items: recentArticles.map((article) => ({
      title: article.data.title,
      pubDate: new Date(article.data.publishedDate),
      description: article.data.excerpt,
      author: article.data.author || 'From the Dumpster Fire',
      link: `/articles/${article.slug}/`,
      categories: article.data.topics || [],
      customData: `
        <content:encoded><![CDATA[
          <p><strong>From ${article.data.source}</strong></p>
          ${article.data.subtitle ? `<p><em>${article.data.subtitle}</em></p>` : ''}
          <p>${article.data.excerpt}</p>
          
          ${article.data.curatorNotes ? `
            <div style="background: #f5f5f5; padding: 16px; border-left: 3px solid #007acc; margin: 20px 0;">
              <h4 style="margin: 0 0 8px 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Why I rescued this</h4>
              <p style="margin: 0; font-style: italic;">${article.data.curatorNotes}</p>
            </div>
          ` : ''}

          ${article.data.pullQuote ? `
            <blockquote style="font-size: 18px; line-height: 1.6; font-style: italic; margin: 20px 0; padding: 20px; background: #fafafa; border-left: 3px solid #007acc;">
              ${article.data.pullQuote}
            </blockquote>
          ` : ''}

          <p>Reading time: ${article.data.readingTime} minutes</p>
          
          ${article.data.originalUrl ? `
            <p><a href="${article.data.originalUrl}" target="_blank" rel="noopener">Read the original article →</a></p>
          ` : ''}
        ]]></content:encoded>
      `,
    })),
    customData: `
      <language>en-us</language>
      <copyright>From the Dumpster Fire</copyright>
      <managingEditor>hello@fromthedumpsterfire.com (From the Dumpster Fire)</managingEditor>
      <webMaster>hello@fromthedumpsterfire.com (From the Dumpster Fire)</webMaster>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <ttl>1440</ttl>
      <image>
        <url>https://fromthedumpsterfire.com/images/rss-logo.png</url>
        <title>From the Dumpster Fire</title>
        <link>https://fromthedumpsterfire.com</link>
        <width>144</width>
        <height>144</height>
      </image>
    `,
  });
};