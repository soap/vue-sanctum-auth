<template>
  <nav class="flex flex-wrap items-center justify-between p-6 bg-green-400">
    <div class="flex items-center mr-6 text-white flex-no-shrink">
      <svg class="w-8 h-8 mr-2 fill-current" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
      <span class="text-xl font-semibold tracking-tight">VueSanctum Auth</span>
    </div>
    <div class="block sm:hidden">
      <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
        <svg class="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div :class="open ? 'block': 'hidden'" class="flex-grow w-full sm:flex sm:items-center sm:w-auto">
      <div class="text-sm sm:flex-grow">
        <a href="#responsive-header" class="block mt-4 mr-4 no-underline sm:inline-block sm:mt-0 text-teal-lighter hover:text-white">
          Docs
        </a>
        <a href="#responsive-header" class="block mt-4 mr-4 no-underline sm:inline-block sm:mt-0 text-teal-lighter hover:text-white">
          Examples
        </a>
        <a href="#responsive-header" class="block mt-4 no-underline sm:inline-block sm:mt-0 text-teal-lighter hover:text-white">
          Blog
        </a>
      </div>
      <div>
        <a href="#" class="inline-block px-4 py-2 mt-4 text-sm leading-none text-white no-underline border border-white rounded hover:border-transparent hover:text-teal hover:bg-white sm:mt-0">Download</a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  
  setup() {
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

    return {
 
    };
  },
  data () {
    {
      return { open: false }
    }
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }  
  }

});
</script>
