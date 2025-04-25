<script setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
});

useSeoMeta({
  title: page.value?.title,
  description: page.value?.seoDescription ?? page.value?.description,
});
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
  <NotFound v-else />
</template>
