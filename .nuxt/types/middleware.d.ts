import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/AngelHdz/Documents/Programming/TypeScript/projects/youtube-nuxt3-tutorial/nuxt-app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}