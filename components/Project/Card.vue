<script setup lang="ts">
defineProps<{
  project: {
    path: string;
    image: string;
    title: string;
    tags: string[];
  };
  index: number;
}>();

const emit = defineEmits(["details"]);

const showDetails = () => {
  emit("details");
};
</script>

<template>
  <div
    class="project-card group relative bg-secondary rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl cursor-pointer"
    @click="showDetails"
    :style="{ animationDelay: `${index * 0.1}s` }"
  >
    <div v-if="project.image" class="relative h-48 overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"
      ></div>
    </div>

    <div class="p-4">
      <h3 class="text-lg font-semibold text-text-primary mb-1">
        {{ project.title }}
      </h3>
      <div class="flex flex-wrap gap-2 text-sm">
        <span
          v-for="(category, idx) in project.tags"
          :key="idx"
          class="text-text-secondary"
        >
          {{ category }}
        </span>
      </div>
    </div>

    <div
      class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <nuxt-link-locale
        :to="project.path"
        class="text-xs px-2 py-1 bg-accent/20 backdrop-blur-sm rounded-full text-text-primary"
      >
        {{ $t("projects.details") }}
      </nuxt-link-locale>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  animation: fadeIn 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
