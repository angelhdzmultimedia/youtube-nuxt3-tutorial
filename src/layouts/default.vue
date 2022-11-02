<script setup lang="ts">
import { useAuthStore } from '../stores/auth.store'

const authStore = useAuthStore()
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon to="/"></v-app-bar-nav-icon>
      <v-app-bar-title>App</v-app-bar-title>
      <v-menu>
        <template #activator="{props}">
          <v-avatar style="cursor: pointer;"  color="white" v-bind="props"></v-avatar>
        </template>
        <v-list>
          <v-list-item v-if="authStore.user.isLoggedIn">
              <v-btn to="/profile">{{authStore.user.firstName}}</v-btn>
            </v-list-item>
            <v-list-item v-if="authStore.user.isLoggedIn">
              <v-btn @click="authStore.logout">Logout</v-btn>
            </v-list-item>
            <v-list-item v-if="!authStore.user.isLoggedIn">
              <v-btn to="/login">Login</v-btn>
            </v-list-item>
          </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container fluid class="d-flex flex-column fill-height align-center justify-center">
        <NuxtPage :key="$route.path"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>