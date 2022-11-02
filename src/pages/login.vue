<script setup lang="ts">
import { useAuthStore } from '../stores/auth.store'


const authStore = useAuthStore()
</script>

<template>
  <div>
    <h1>Login</h1>
    <v-btn color="blue" @click="authStore.login">Login</v-btn>
  </div>
</template>

<style scoped>

</style>