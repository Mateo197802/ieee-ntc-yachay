import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

function customSitemapIntegration() {
  return {
    name: 'custom-sitemap-generator',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const siteUrl = 'https://ieee-ntc-ec.github.io';
        const basePath = process.env.NODE_ENV === 'production' ? '/ieee-ntc-yachay' : '';
        const pages = [
          '/',
          '/about/',
          '/advisor/',
          '/directive/',
          '/events/',
          '/projects/',
          '/opportunities/',
          '/nanonews/',
          '/gallery/',
          '/news/',
          '/contact/'
        ];

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${siteUrl}${basePath}${p}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

        const outDir = fileURLToPath(dir);
        const targetPath = path.join(outDir, 'sitemap.xml');
        fs.writeFileSync(targetPath, xml, 'utf-8');
        console.log(`[sitemap] Successfully generated sitemap.xml at ${targetPath}`);
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://ieee-ntc-ec.github.io',
  base: '/ieee-ntc-yachay',
  trailingSlash: 'always',
  integrations: [customSitemapIntegration()],
  output: 'static',
  build: {
    format: 'directory'
  }
});
