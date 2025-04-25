<template>
  <div class="min-h-screen flex flex-col">
    <!-- <TheHeader /> -->

    <main class="flex-grow">
      <transition name="page" mode="out-in">
        <div>
          <slot />
        </div>
      </transition>
    </main>

  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
