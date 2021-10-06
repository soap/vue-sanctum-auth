<template>
  <div>
    <header class="bg-red-300 header" />
    <AppLayoutLinks />
    <slot />
  </div>
</template>

<script>
import AppLayoutLinks from '@/layouts/AppLayoutLinks'
export default {
  name: "AppLayoutContacts",
  components: {
    AppLayoutLinks
  }
}
</script>
