<template>
  <div class="flex items-center justify-center px-6 pt-24 md:pt-0">
    <div class="text-center">
      <h1 class="text-8xl font-bold text-accent mb-4">404</h1>
      <div class="text-6xl font-semibold text-text-primary mb-6">
        見つかりません
      </div>
      <p class="text-text-secondary text-xl mb-8">
        {{ $t("not-found.title") }}
      </p>
      <the-button
        to="/"
        class="inline-flex items-center px-6 py-3 bg-accent/20 text-text-primary rounded-full hover:bg-accent/30 transition-colors"
      >
        {{ $t("not-found.button") }}
      </the-button>
    </div>
  </div>
</template>
