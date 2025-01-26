// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
	  head: {
		  htmlAttrs: {
			lang: 'en'
		  }
	  }
  },
  modules: [
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxthq/studio",
  ],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            bg_primary_dark: "#19191c",
            text_primary_dark: "#ffffff",
            text_secondary_dark: "#0470d5",
            bg_primary_light: "#ffffff",
            text_primary_light: "#19191c"
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
