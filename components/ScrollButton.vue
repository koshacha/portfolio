<template>
  <motion.div
    v-show="y > 0"
    :initial="{ opacity: 0, scale: 0 }"
    :animate="{ opacity: 1, scale: 1 }"
    :exit="{ opacity: 0, scale: 0 }"
  >
    <the-button class="max-md:hidden" @click="y = 0">{{
      $t("footer.back-to-top")
    }}</the-button>
  </motion.div>
</template>
<script lang="ts" setup>
import { motion } from "motion-v";
import { useWindowScroll } from "@vueuse/core";

const { y } = useWindowScroll({ behavior: "smooth" });
</script>
