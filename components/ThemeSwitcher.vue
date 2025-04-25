<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "html",
  attribute: "class",
  valueDark: "",
  valueLight: "light-theme",
});
const toggleDark = useToggle(isDark);
// const toggleTheme = () => {
//   isDark.value = !isDark.value;
//   document.documentElement.classList.toggle("light-theme");
// };
</script>

<template>
  <button
    @click="toggleDark()"
    class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300"
    :class="isDark ? 'bg-accent/20' : 'bg-accent'"
  >
    <span class="sr-only">Toggle theme</span>
    <span
      class="inline-block h-4 w-4 transform rounded-full bg-text-primary transition-transform duration-300"
      :class="isDark ? 'translate-x-1' : 'translate-x-6'"
    />
  </button>
</template>
