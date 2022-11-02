import { createVuetify } from 'vuetify'
import { NuxtApp } from 'nuxt/app'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp: NuxtApp): void => {
  nuxtApp.vueApp.use(createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
    },
    ssr: true,
  }))
})