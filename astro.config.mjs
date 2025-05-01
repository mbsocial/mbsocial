// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://mbsocial.github.io',
	base: '/mbsocial/',
	integrations: [mdx(), sitemap()],
});
