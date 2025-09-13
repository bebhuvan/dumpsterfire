import homepageHtml from './dist/index.html';
import aboutHtml from './dist/about/index.html';
import archiveHtml from './dist/archive/index.html';
import searchHtml from './dist/search/index.html';
import subscribeHtml from './dist/subscribe/index.html';
import topicsHtml from './dist/topics/index.html';
import testHtml from './dist/test/index.html';
import articleHtml from './dist/articles/the-garden-you-plant-for-someone-else/index.html';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    
    console.log(`Request: ${pathname}`);
    
    // Serve prebuilt static HTML pages
    if (pathname === '/' || pathname === '/index.html') {
      return new Response(homepageHtml, {
        headers: { 
          'Content-Type': 'text/html;charset=UTF-8',
          'Cache-Control': 'public, max-age=300'
        }
      });
    }
    
    if (pathname === '/about' || pathname === '/about/') {
      return new Response(aboutHtml, {
        headers: { 
          'Content-Type': 'text/html;charset=UTF-8',
          'Cache-Control': 'public, max-age=300'
        }
      });
    }
    
    if (pathname === '/archive' || pathname === '/archive/') {
      return new Response(archiveHtml, {
        headers: { 
          'Content-Type': 'text/html;charset=UTF-8',
          'Cache-Control': 'public, max-age=300'
        }
      });
    }
    
    if (pathname === '/search' || pathname === '/search/') {
      return new Response(searchHtml, {
        headers: { 
          'Content-Type': 'text/html;charset=UTF-8',
          'Cache-Control': 'public, max-age=300'
        }
      });
    }
    
    if (pathname === '/subscribe' || pathname === '/subscribe/') {
      return new Response(subscribeHtml, {
        headers: { 
          'Content-Type': 'text/html;charset=UTF-8',
          'Cache-Control': 'public, max-age=300'
        }
      });
    }
    
    if (pathname === '/topics' || pathname === '/topics/') {
      return new Response(topicsHtml, {
        headers: { 
          'Content-Type': 'text/html;charset=UTF-8',
          'Cache-Control': 'public, max-age=300'
        }
      });
    }
    
    if (pathname === '/articles/the-garden-you-plant-for-someone-else' || 
        pathname === '/articles/the-garden-you-plant-for-someone-else/') {
      return new Response(articleHtml, {
        headers: { 
          'Content-Type': 'text/html;charset=UTF-8',
          'Cache-Control': 'public, max-age=300'
        }
      });
    }
    
    if (pathname === '/test' || pathname === '/test/') {
      return new Response(testHtml, {
        headers: { 
          'Content-Type': 'text/html;charset=UTF-8',
          'Cache-Control': 'public, max-age=300'
        }
      });
    }
    
    // Simple test endpoint
    if (pathname === '/test-basic') {
      return new Response('🔥 Basic Worker is working!', {
        headers: { 'Content-Type': 'text/html' }
      });
    }
    
    // Static assets (simplified)
    if (pathname === '/favicon.svg') {
      return new Response('🔥', {
        headers: { 'Content-Type': 'image/svg+xml' }
      });
    }
    
    // RSS feed
    if (pathname === '/rss.xml') {
      return new Response('<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>From the Dumpster Fire</title><description>Rescuing signal from the algorithmic inferno</description><link>https://fromthedumpsterfire.com</link></channel></rss>', {
        headers: { 'Content-Type': 'application/rss+xml' }
      });
    }
    
    return new Response('404 - Not Found', { 
      status: 404,
      headers: { 'Content-Type': 'text/html' }
    });
  }
};