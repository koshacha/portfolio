<script setup lang="ts">
import { ref } from "vue";

const { locale } = useI18n();

const { data: projects, status: projectsStatus } = await useLazyFetch(
  "/api/posts",
  {
    query: {
      locale: locale.value,
    },
  }
);
const { data: categories, status: categoriesStatus } = useLazyFetch<string[]>(
  "/api/postCategories"
);

const activeCategory = ref("");

const filteredProjects = computed(() => {
  if (!projects.value) return [];
  if (activeCategory.value === "") return projects.value;
  return projects.value.filter((project) => {
    if ("tags" in project && Array.isArray(project?.tags)) {
      return project.tags.includes(activeCategory.value);
    }

    return false;
  });
});
</script>

<template>
  <div v-if="categoriesStatus === 'success' && projectsStatus === 'success'">
    <div class="mb-8 overflow-x-auto whitespace-nowrap pb-2">
      <project-filter :categories="categories" v-model="activeCategory" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <project-card
        v-for="(project, index) in filteredProjects"
        :key="project.id"
        :project="project"
        :index="index"
      />
    </div>
  </div>
  <div v-else class="animate-pulse" role="status">
    <span class="sr-only">Loading...</span>
    <project-skeleton-filter />
    <project-skeleton-cards />
  </div>
</template>
