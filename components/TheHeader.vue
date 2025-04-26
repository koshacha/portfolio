<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { motion } from "motion-v";
import { onClickOutside } from "@vueuse/core";
import { useTemplateRef } from "vue";

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const showLogoTooltip = ref(false);

const target = useTemplateRef<HTMLElement>("target");
onClickOutside(target, () => (isMobileMenuOpen.value = false));
</script>

<template>
  <nav
    :class="[
      'fixed w-full z-50 transition-all duration-300 px-6 md:px-12 py-4',
      isScrolled ? 'bg-primary/95 backdrop-blur-sm' : 'bg-transparent',
    ]"
  >
    <div class="container mx-auto flex items-center justify-between">
      <div
        class="hidden md:flex items-center bg-secondary/50 rounded-full px-1.5 py-1.5 relative"
      >
        <nuxt-link-locale
          to="/"
          class="text-xl font-semibold px-4"
          @mouseenter="showLogoTooltip = true"
          @mouseleave="showLogoTooltip = false"
        >
          <span class="text-text-primary">示す</span>
          <!-- <span class="text-text-secondary ml-2 text-sm">[shimesu]</span> -->
        </nuxt-link-locale>

        <lazy-logo-tooltip v-if="showLogoTooltip" />

        <navigation />
      </div>

      <!-- Mobile Logo -->
      <nuxt-link-locale to="/" class="md:hidden text-xl font-semibold">
        <span class="text-text-primary">示す</span>
        <span class="text-text-secondary ml-2 text-sm">[shimesu]</span>
      </nuxt-link-locale>

      <div class="flex items-center space-x-3">
        <!-- Theme Switch -->
        <!-- <client-only>
          <lazy-theme-switcher />
        </client-only> -->

        <!-- Language Dropdown -->
        <language-swither />

        <the-button class="max-md:hidden" href="/resume.pdf">{{
          $t("nav.resume")
        }}</the-button>

        <!-- Mobile menu button -->
        <the-button
          variant="secondary"
          class="md:hidden p-2"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <span class="sr-only">Menu</span>
          <icon name="lucide:menu" class="size-5" />
        </the-button>
      </div>
    </div>

    <!-- Mobile menu -->
    <motion.div
      v-if="isMobileMenuOpen"
      class="md:hidden fixed inset-0 top-[72px] z-20 bg-black/50 backdrop-blur-sm"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :exit="{ opacity: 0 }"
    >
      <motion.div
        ref="target"
        class="fixed top-0 left-0 w-full bg-primary/95 py-4 border-t border-accent/10 shadow-xl"
        :initial="{ y: -20, opacity: 0 }"
        :animate="{ y: 0, opacity: 1 }"
        :exit="{ y: -20, opacity: 0 }"
      >
        <div class="container mx-auto px-6">
          <div class="flex flex-col space-y-4 mb-2">
            <lazy-navigation
              is-mobile
              @changed="isMobileMenuOpen = false"
              hydrate-on-media-query="(max-width: 768px)"
            />
          </div>
          <the-button class="w-full justify-center" href="/resume.pdf">{{
            $t("nav.resume")
          }}</the-button>
        </div>
      </motion.div>
    </motion.div>
  </nav>
</template>
