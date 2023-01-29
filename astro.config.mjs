import { defineConfig } from 'astro/config';
import { fileURLToPath, URL } from 'node:url';
import vue from "@astrojs/vue";
import netlify from "@astrojs/netlify/functions";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/components/variables.scss";',
        },
      },
    },
  },
  output: "server",
  adapter: netlify(),
  integrations: [vue({
    appEntrypoint: '/src/plugins/vue.ts'
  })],
});
