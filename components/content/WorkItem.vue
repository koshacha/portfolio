<script setup lang="ts">
import { motion } from "motion-v";

interface WorkExperience {
  id: number;
  period: string;
  company: string;
  position: string;
  description: string[];
}

defineProps<WorkExperience>();
</script>

<template>
  <motion.div
    :key="id"
    class="relative"
    :initial="{ opacity: 0, y: 20 }"
    :animate="{ opacity: 1, y: 0 }"
    :delay="id * 1000"
  >
    <div class="mb-4">
      <span class="text-accent font-medium">{{ period }}</span>
    </div>

    <h2 class="text-2xl font-semibold mb-2 text-text-primary">
      {{ company }}
    </h2>
    <h3 class="text-xl text-text-secondary mb-4">
      {{ position }}
    </h3>

    <ul class="space-y-2">
      <li
        v-for="(item, index) in description"
        :key="index"
        class="text-text-secondary"
      >
        {{ item }}
      </li>
    </ul>
  </motion.div>
</template>
