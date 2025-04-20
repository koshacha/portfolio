<template>
  <div class="min-h-[640px] flex flex-col">
    <sidebar />
    <the-main>
      <page-header />
      <div class="prose-styles prose-a:text-[var(--project-color)]">
        <slot />
      </div>
    </the-main>
  </div>
</template>

<script setup lang="ts">
const { page } = useContent();

onMounted(() => {});
</script>

<style scoped></style>
