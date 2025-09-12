// @ts-check
import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  site: 'https://fromthedumpsterfire.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
    assets: '_astro'
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro']
          }
        }
      }
    },
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'safari-pinned-tab.svg'],
        manifest: {
          name: 'From the Dumpster Fire',
          short_name: 'Dumpster Fire',
          description: 'Rescuing signal from the algorithmic inferno',
          theme_color: '#ffffff',
          background_color: '#ffffff',
          display: 'standalone',
          scope: '/',
          start_url: '/',
          orientation: 'portrait-primary',
          icons: [
            {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable'
            }
          ]
        },
        workbox: {
          navigateFallback: '/',
          globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}']
        },
        devOptions: {
          enabled: true,
          navigateFallback: '/',
          suppressWarnings: true
        }
      })
    ]
  }
});
