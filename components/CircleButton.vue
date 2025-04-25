<script setup lang="ts">
import { motion } from "motion-v";

const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click");
};
</script>

<template>
  <motion.div
    role="button"
    :whileHover="{ scale: 1.1 }"
    @click="handleClick"
    class="circle-button bg-accent border border-accent/20 shadow-lg"
    :class="{ 'bg-accent/20': active }"
  >
    <div class="relative w-full h-full">
      <!-- Three dots when inactive, cross when active -->
      <div
        v-if="!active"
        class="absolute inset-0 flex items-center justify-center gap-0.5"
      >
        <div class="w-1 h-1 rounded-full bg-primary"></div>
        <div class="w-1 h-1 rounded-full bg-primary"></div>
        <div class="w-1 h-1 rounded-full bg-primary"></div>
      </div>
      <div v-else class="absolute inset-0 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-accent"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </div>
  </motion.div>
</template>

<style lang="css" scoped>
.circle-button {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
}

.circle-button:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .circle-button {
    width: 25px;
    height: 25px;
  }
}
</style>
