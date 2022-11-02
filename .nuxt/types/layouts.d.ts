import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Users/AngelHdz/Documents/Programming/TypeScript/projects/youtube-nuxt3-tutorial/nuxt-app/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}