<template>
  <div>
    <Navbar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/Navbar.vue";

export default defineComponent({
  components: { Navbar },
  // components: { Navigation },
  setup() {
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
    return {

    };
  },
});
</script>
