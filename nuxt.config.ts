// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
  plugins : ['~/plugins/directive.client.js'],
  postcss: {
    plugins: {
      tailwindcss: {
      },
      autoprefixer: {},
    },
  },
  css: ["~/assets/css/main.css"],
  googleFonts: {
    preload: true,
    display: "swap",
    families: {
      Poppins: {
        wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
})