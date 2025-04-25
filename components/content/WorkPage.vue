<script setup lang="ts">
import { motion } from "motion-v";

interface WorkExperience {
  id: number;
  period: string;
  company: string;
  position: string;
  description: string[];
}
</script>

<template>
  <div class="">
    <h1 class="text-3xl font-semibold mb-12 text-text-primary">
      {{ $t("work.title") }}
    </h1>

    <div class="space-y-16">
      <slot />
    </div>
  </div>
</template>
