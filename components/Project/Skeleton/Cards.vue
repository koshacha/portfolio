<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div
      v-for="i in count"
      :key="i"
      class="project-card group relative bg-secondary rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer w-full h-80"
    ></div>
  </div>
</template>

<script setup lang="ts">
const count = 10;
</script>
