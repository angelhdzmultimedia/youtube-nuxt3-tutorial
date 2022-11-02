<script setup lang="ts">
import { useAuthStore } from '../stores/auth.store'

definePageMeta({
  requiresAuth: true,
})

const authStore = useAuthStore()
</script>

<template>
  <h1>Profile</h1>
    <span>First Name: {{authStore.user.firstName}}</span>
    <span>Email: {{authStore.user.email}}</span>
    <span>ID: {{authStore.user.id}}</span>
    <v-btn color="blue">Click</v-btn>
</template>

<style scoped>

</style>