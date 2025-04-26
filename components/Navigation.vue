<script setup lang="ts">
import { motion } from "motion-v";
const { data } = await useAsyncData("navigation", () => {
  return queryCollectionNavigation("content").where("path", "NOT LIKE", "/en%");
});

defineProps<{
  isMobile?: boolean;
}>();

defineEmits<{
  (e: "changed"): void;
}>();
</script>

<template>
  <template v-if="!isMobile">
    <nuxt-link-locale
      v-for="route in data"
      :key="route.path"
      :to="route.path"
      class="px-4 py-1.5 rounded-full transition-all duration-300 relative"
      :class="
        $route.path === route.path || $route.path === `/en${route.path}`
          ? 'text-text-primary'
          : 'text-text-secondary hover:text-text-primary'
      "
    >
      {{ $t(`nav.${route.path === "/" ? "home" : route.path.slice(1)}`) }}
      <motion.div
        v-if="$route.path === route.path || $route.path === `/en${route.path}` || `${$route.path}/` === `/en${route.path}`"
        class="absolute inset-0 bg-accent/20 rounded-full"
        layout-id="background-card"
        id="background-card"
      />
    </nuxt-link-locale>
  </template>
  <template v-else>
    <nuxt-link-locale
      v-for="route in data"
      :key="route.path"
      :to="route.path"
      @click="() => $emit('changed')"
      class="px-4 py-2 rounded-lg transition-colors"
      :class="
        $route.path === route.path || $route.path === `/en${route.path}`
          ? 'bg-accent/20 text-text-primary'
          : 'text-text-secondary hover:text-text-primary'
      "
    >
      {{ $t(`nav.${route.path === "/" ? "home" : route.path.slice(1)}`) }}
    </nuxt-link-locale>
  </template>
</template>
