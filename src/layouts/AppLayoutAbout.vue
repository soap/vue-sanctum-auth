<template>
  <div>
    <header class="bg-blue-200 header" />
    <AppLayoutLinks />
    <slot />
  </div>
</template>

<script>
import AppLayoutLinks from '@/layouts/AppLayoutLinks'
export default {
  name: "AppLayoutAbout",
  components: {AppLayoutLinks}
}
</script>
