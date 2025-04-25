<script setup lang="ts">
import { onMounted } from "vue";
// import { gsap } from 'gsap';

onMounted(() => {
  // Animation for section elements
  // gsap.from('.section', {
  //   opacity: 0,
  //   y: 20,
  //   stagger: 0.2,
  //   duration: 0.7,
  //   ease: 'power2.out'
  // });
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex-grow">
      <div class="pt-48 pb-16 px-12 md:px-12">
        <div class="max-w-7xl mx-auto">
          <div class="content space-y-16">
            <slot />
          </div>
        </div>
      </div>
    </main>

    <TheFooter />
  </div>
</template>
