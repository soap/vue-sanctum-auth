<template>
  <div>
    <header class="w-full h-full bg-green-200 header" />
    <AppLayoutLinks />
    <slot />
  </div>
</template>

<script lang="ts">
import AppLayoutLinks from './layouts/AppLayoutLinks.vue'
export default {
  name: "AppLayoutHome",
  components: {
    AppLayoutLinks
  }
}
</script>