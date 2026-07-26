<template>
  <v-app-bar color="surface" elevation="1">
    <v-app-bar-nav-icon
      class="d-flex d-md-none"
      @click="drawer = !drawer"
    />

    <v-toolbar-title class="flex-0-0">
      <router-link class="brand" to="/">
        <span class="brand-name">Ocampos</span>
        <span class="brand-name brand-name--accent">Framing</span>
      </router-link>
    </v-toolbar-title>

    <v-spacer />

    <div class="d-none d-md-flex align-center">
      <v-btn
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        variant="text"
      >
        {{ link.label }}
      </v-btn>

      <v-btn class="ml-2" color="primary" to="/contact" variant="flat">
        Get a Quote
      </v-btn>
    </div>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list nav>
      <v-list-item
        v-for="link in links"
        :key="link.to"
        :title="link.label"
        :to="link.to"
        @click="drawer = false"
      />

      <v-divider class="my-2" />
      <v-list-item title="Get a Quote" to="/contact" @click="drawer = false" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const drawer = ref(false)

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ]
</script>

<style scoped>
.brand {
  text-decoration: none;
  color: inherit;
  font-weight: 700;
  letter-spacing: 0.02em;
  font-size: 1.25rem;
}

.brand-name--accent {
  color: rgb(var(--v-theme-primary));
  margin-left: 0.35rem;
}
</style>
