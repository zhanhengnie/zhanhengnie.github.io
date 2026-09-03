import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zhanhengnie.github.io',
  build: {
    assets: '_assets'
  },
  integrations: [sitemap()]
});
