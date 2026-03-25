import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig, loadEnv, type Plugin} from 'vite';

function generateSitemap(siteUrl: string): Plugin {
  return {
    name: 'generate-sitemap',
    closeBundle() {
      const today = new Date().toISOString().split('T')[0];
      const sections = [
        { path: '/',         changefreq: 'weekly',  priority: '1.0' },
        { path: '/#about',   changefreq: 'monthly', priority: '0.8' },
        { path: '/#sponsors', changefreq: 'monthly', priority: '0.7' },
        { path: '/#judges',  changefreq: 'monthly', priority: '0.7' },
        { path: '/#schedule', changefreq: 'weekly',  priority: '0.8' },
        { path: '/#faq',     changefreq: 'monthly', priority: '0.6' },
      ];

      const urls = sections
        .map(
          (s) => `  <url>
    <loc>${siteUrl}${s.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${s.changefreq}</changefreq>
    <priority>${s.priority}</priority>
  </url>`
        )
        .join('\n');

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

      const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

      const outDir = path.resolve(__dirname, 'dist');
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemap);
      fs.writeFileSync(path.join(outDir, 'robots.txt'), robots);
      console.log(`✅ Sitemap generated for ${siteUrl}`);
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  const siteUrl = env.SITE_URL || 'https://csihacks.com';
  return {
    plugins: [react(), tailwindcss(), generateSitemap(siteUrl)],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      port: 3000,
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
