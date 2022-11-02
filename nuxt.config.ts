
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass', 'mdi/css/materialdesignicons.min.css'],
  srcDir: './src',
  build: {
    transpile: ['vuetify']
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    }
  },
  modules: ['@pinia/nuxt']
})
