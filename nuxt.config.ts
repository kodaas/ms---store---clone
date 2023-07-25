// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  css: ["~/assets/css/main.css"],

  modules: ["nuxt-icon", "@vueuse/nuxt"],

  spaLoadingTemplate: false,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: {
    typeCheck: true,
  },
});