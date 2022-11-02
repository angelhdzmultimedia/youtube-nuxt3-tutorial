import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const router = useRouter()
  const user = ref({
    isLoggedIn: false,
    email: null,
    firstName: null,
    id: null,
  })

  async function login(): Promise<void> {
    user.value = {
      email: 'angel@nuext.dev',
      id: crypto.randomUUID(),
      firstName: 'Angel',
      isLoggedIn: true,
    }

    router.push('/')
  }

  function logout(): void {
    user.value = {
      isLoggedIn: false,
      email: null,
      firstName: null,
      id: null,
    }

    router.push('/login')
  }

  const welcome = computed(() => {
    return user.value.isLoggedIn ? user.value.firstName : 'guest'
  })

  return {
    user,
    login,
    logout,
    welcome,
  }
})