import { useAuthStore } from '../stores/auth.store'

export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth && !authStore.user.isLoggedIn && to.path !== '/login') {
    return navigateTo('/login')
  }
})