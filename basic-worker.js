export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    if (url.pathname === '/test-basic') {
      return new Response('🔥 Basic Worker is working!', {
        headers: { 'Content-Type': 'text/html' }
      });
    }
    
    return new Response('404 - Not Found', { status: 404 });
  }
};