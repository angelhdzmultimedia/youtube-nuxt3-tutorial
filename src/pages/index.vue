<script setup lang="ts">
import { useAuthStore } from '../stores/auth.store'

const authStore = useAuthStore()

</script>

<template>

    <h2>Welcome, {{authStore.welcome}}!</h2>
 
</template>

<style scoped>

</style>