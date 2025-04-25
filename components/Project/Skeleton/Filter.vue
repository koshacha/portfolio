<template>
  <div class="mb-8 overflow-x-auto whitespace-nowrap pb-2">
    <div class="inline-flex space-x-2">
      <span
        v-for="i in count"
        :key="i"
        class="category-filter px-4 py-2 rounded-full text-sm transition-colors bg-secondary/50 text-text-secondary w-16 h-8"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
const count = 6;
</script>
