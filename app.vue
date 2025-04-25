<template>
  <div class="min-h-screen flex flex-col text-lg">
    <TheHeader />
    <NuxtLayout :name="isMainPage ? 'main' : 'default'">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const isMainPage = computed(() => {
  return route.path === "/" || route.path === "/en";
});
</script>
