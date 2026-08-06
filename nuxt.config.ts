export default defineNuxtConfig({
  css: ['~/assets/styles/main.scss'],
  modules: ['@nuxt/eslint'],
  ssr: true,
  typescript: {
    typeCheck: true,
  },
})
