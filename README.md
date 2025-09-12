# 🔥 From the Dumpster Fire

**Rescuing signal from the algorithmic inferno**

A modern newsletter and content curation platform built with Astro, featuring comprehensive SEO, performance optimizations, and rich content management.

## 🚀 Features

### Content Management
- **Rich Article System** - Full articles with curator notes, pull quotes, and metadata
- **Artwork Collections** - Curated visual content with detailed descriptions
- **Issue-Based Publishing** - Newsletter-style issue organization
- **Topic Categorization** - Flexible tagging and categorization system
- **PagesCMS Integration** - Git-based content management

### SEO & Performance
- **Comprehensive SEO** - Open Graph, Twitter Cards, JSON-LD structured data
- **Performance Optimized** - Critical CSS, lazy loading, resource hints
- **PWA Ready** - Service worker, offline support, installable
- **RSS Feed** - Rich RSS with curator notes and formatted content
- **Sitemap Generation** - Dynamic XML sitemap for all content types

### User Experience
- **Full-Text Search** - Client-side search with highlighting and filtering
- **Social Sharing** - Twitter, LinkedIn, email, and copy-to-clipboard
- **Auto Embeds** - YouTube, Spotify, Vimeo, Twitter, CodePen integration
- **Responsive Design** - Mobile-first with elegant typography
- **Dark/Light Support** - Automatic theme detection

### Technical Features
- **Static Site Generation** - Fast, secure, and scalable
- **Modern Architecture** - Built with Astro, TypeScript, and modern web standards
- **Optimized Loading** - Font optimization, image lazy loading, code splitting
- **Accessibility** - WCAG compliant with semantic HTML and ARIA labels

## 🏗️ Project Structure

```text
/
├── public/                   # Static assets
├── src/
│   ├── components/           # Reusable Astro components
│   │   ├── SEO.astro        # SEO meta tags and structured data
│   │   ├── SocialShare.astro # Social media sharing buttons
│   │   ├── AutoEmbed.astro  # Auto-embed for external content
│   │   ├── LazyImage.astro  # Optimized image loading
│   │   └── CriticalCSS.astro # Above-the-fold CSS
│   ├── content/             # Content collections
│   │   ├── articles/        # Main articles
│   │   ├── artwork/         # Visual content
│   │   ├── issues/          # Newsletter issues
│   │   └── topics/          # Topic categories
│   ├── layouts/             # Page layouts
│   │   ├── BaseLayout.astro # Main layout with SEO
│   │   └── ArticleLayout.astro # Article-specific layout
│   ├── pages/               # Routes and API endpoints
│   │   ├── rss.xml.ts       # RSS feed generation
│   │   ├── sitemap.xml.ts   # Sitemap generation
│   │   └── search.astro     # Search functionality
│   └── styles/              # Global styles
│       └── global.css       # Design system and utilities
├── astro.config.mjs         # Astro configuration with PWA
└── pagescms.config.json     # PagesCMS configuration
```

## 🎨 Design System

### Typography
- **Primary Font**: Charter, Bitstream Charter, Sitka Text (serif)
- **Secondary Font**: System sans-serif stack
- **Font Features**: Kerning, ligatures, and responsive sizing

### Color Palette
- **Text**: Primary (#1a1a1a), Secondary (#525252), Tertiary (#737373)
- **Backgrounds**: Primary (#ffffff), Secondary (#f8f9fa)
- **Accents**: Pastel blue, sage, coral, and yellow variants
- **Borders**: Light gray (#e5e7eb) for subtle separation

### Layout
- **Container**: Max-width 1200px with responsive padding
- **Typography Scale**: Consistent sizing from 0.65rem to 2.2rem
- **Spacing**: 4px base unit with consistent gaps and margins

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start development server at `localhost:4321`    |
| `npm run build`           | Build production site to `./dist/`              |
| `npm run preview`         | Preview build locally                            |
| `npm run astro ...`       | Run Astro CLI commands                           |

## 📝 Content Management

### Adding Articles
1. Create new `.md` file in `src/content/articles/`
2. Include frontmatter with required fields:
   ```yaml
   ---
   title: "Article Title"
   subtitle: "Optional subtitle"
   excerpt: "Brief description"
   author: "Author Name"
   source: "Original Source"
   originalUrl: "https://example.com"
   publishedDate: "2024-01-01"
   foundDate: "2024-01-02"
   readingTime: 5
   topics: ["tag1", "tag2"]
   featured: false
   curatorNotes: "Why this article matters"
   pullQuote: "Highlight quote from article"
   ---
   ```

### Auto Embeds
Simply paste URLs from supported platforms on their own line:
- **YouTube**: `https://www.youtube.com/watch?v=...` or `https://youtu.be/...`
- **Spotify**: `https://open.spotify.com/track/...` (works with tracks, albums, playlists)
- **Vimeo**: `https://vimeo.com/...`
- **Twitter**: `https://twitter.com/user/status/...` or `https://x.com/user/status/...`
- **CodePen**: `https://codepen.io/user/pen/...`
- **SoundCloud**: `https://soundcloud.com/...`

### Search Configuration
The search system indexes:
- Article titles, excerpts, and content
- Author names and sources
- Topics and tags
- Artwork titles and descriptions

## 🚀 Performance Optimizations

### Critical Rendering Path
- **Critical CSS**: Above-the-fold styles inlined in `<head>`
- **Font Loading**: System fonts with display: swap
- **Resource Hints**: DNS prefetch and preconnect for external services

### Image Optimization
- **Lazy Loading**: Native lazy loading with shimmer animation
- **Responsive Images**: Automatic srcset generation
- **Proper Sizing**: Width/height attributes prevent layout shift

### JavaScript Optimization
- **Code Splitting**: Vendor chunks separated from application code
- **Module Preloading**: Critical scripts preloaded
- **Service Worker**: PWA caching for offline support

### Build Optimization
- **HTML Compression**: Minified HTML output
- **CSS Minification**: Optimized CSS with esbuild
- **Asset Optimization**: Automatic asset fingerprinting

## 🔍 SEO Features

### Meta Tags
- **Open Graph**: Rich social media previews
- **Twitter Cards**: Optimized Twitter sharing
- **Canonical URLs**: Prevent duplicate content issues
- **Meta Robots**: Search engine indexing control

### Structured Data
- **JSON-LD**: Article and organization schema markup
- **Breadcrumbs**: Navigation hierarchy
- **Author Information**: Rich author data

### Content Features
- **RSS Feed**: Full content with formatting preserved
- **XML Sitemap**: Dynamic generation for all content types
- **Social Sharing**: Built-in sharing for all major platforms

## 🌐 Deployment

The site is configured for static deployment to any hosting provider:
- **Netlify**: Deploy from Git with automatic builds
- **Vercel**: Zero-config deployments
- **GitHub Pages**: Static site hosting
- **Cloudflare Pages**: Fast global CDN

### Environment Variables
```bash
SITE_URL=https://yourdomain.com  # For canonical URLs and sitemaps
```

## 📊 Analytics Integration

Ready for analytics integration:
- **Google Analytics 4**: Add tracking code to BaseLayout
- **Plausible**: Privacy-focused analytics
- **Umami**: Self-hosted analytics option

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project as a foundation for your own newsletter or content curation site.

---

Built with ❤️ using [Astro](https://astro.build) • Deployed with [PagesCMS](https://pagescms.org)