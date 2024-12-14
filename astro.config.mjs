import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';
import db from '@astrojs/db';
import legacy from '@vitejs/plugin-legacy';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    tailwind(),
    db(),
    react(),
    AstroPWA({
      manifest: {
        name: "Wovie",
        short_name: "Wovie",
        description: "Watch Movies and Tv shows!",
        start_url: "/",
        display: "standalone",
        background_color: "#2f68c5",
        theme_color: "#2f68c5",
        icons: [
          {
            src: "/icon.png",
            sizes: "192x192",
            type: "image/png"
          }
        ]
      }
    })
  ],
  vite: {
    plugins: [
      legacy({
        targets: ['Chrome >= 70', 'defaults', 'not IE 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      }),
    ],
  },
});
