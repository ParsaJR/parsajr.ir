// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/color-mode",
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            bg_primary_dark: "#19191c",
            text_primary_dark: "#ffffff",
            text_secondary_dark: "#0470d5",
          },
        },
      },
    },
  },
  routeRules: {
    "/": { prerender: true },
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  colorMode: {
    preference: "dark",
    fallback: "dark",
    storage: "localStorage",
    classSuffix: "",
  },
  compatibilityDate: "2024-09-08",
});
