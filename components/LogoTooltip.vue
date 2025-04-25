<script setup lang="ts"></script>

<template>
  <transition
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="opacity-0 translate-y-1"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition duration-150 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-1"
  >
    <div
      class="absolute left-0 top-full mt-2 bg-secondary rounded-lg shadow-lg p-4 border border-accent/10"
    >
      <div class="space-y-3">
        <p class="text-text-primary font-semibold">shimesu (示す)</p>
        <p class="text-text-secondary text-sm italic">/ɕiːmeːsuː/</p>
        <div class="space-y-1">
          <p class="text-text-primary text-sm font-semibold">
            {{ $t("logo.verb") }}
          </p>
          <ol
            class="list-decimal list-inside text-text-secondary text-sm space-y-1 ml-1"
          >
            <li>{{ $t("logo.first") }}</li>
            <li>{{ $t("logo.second") }}</li>
          </ol>
        </div>
      </div>
    </div>
  </transition>
</template>
