<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { animate, motion } from "motion-v";

const { variant = "primary", ...props } = defineProps<{
  variant?: "primary" | "secondary";
  class?: HTMLAttributes["class"];
}>();

const BASE_STYLES =
  "inline-flex items-center px-4 py-2 bg-accent text-primary rounded-full  transition-colors font-medium";

const variableClasses = computed(() => {
  return {
    primary: "bg-accent",
    secondary: "bg-secondary text-text-secondary border-accent/10",
  }[variant];
});

const animations = {
  transition: {
    duration: 0.4,
    scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
  },
  whileHover: { scale: 1.02 },
  whilePress: { scale: 0.95 },
};
</script>

<template>
  <motion.a
    :class="cn(BASE_STYLES, variableClasses, props.class)"
    v-bind="{ ...animations, ...$attrs }"
    v-if="'to' in $attrs"
  >
    <slot />
  </motion.a>
  <motion.button
    :class="cn(BASE_STYLES, variableClasses, props.class)"
    v-bind="{ ...animations, ...$attrs }"
    v-else
  >
    <slot />
  </motion.button>
</template>
