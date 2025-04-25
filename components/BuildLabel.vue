<script setup lang="ts">
import { useDateFormat, useNow } from "@vueuse/core";

const buildDate = useDateFormat(useNow(), "D.M.YYYY");
</script>

<template>
  <p>{{ $t("footer.updated") }}: {{ buildDate }}</p>
</template>
