<script setup lang="ts">
defineProps<{
  categories: string[];
}>();
const model = defineModel<string>();
</script>

<template>
  <div class="inline-flex space-x-2">
    <button
      v-for="category in categories"
      :key="category"
      @click="model = category"
      class="category-filter px-4 py-2 rounded-full text-sm transition-colors duration-300"
      :class="
        model === category
          ? 'bg-accent/20 text-text-primary'
          : 'bg-secondary/50 text-text-secondary hover:bg-secondary'
      "
    >
      {{ category ? category : $t("projects.all") }}
    </button>
  </div>
</template>
