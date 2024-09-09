// @ts-check
import { defineConfig } from 'astro/config';

import tailwindIntegration from '@astrojs/tailwind';

import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwindIntegration({
      applyBaseStyles: false
  })],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});