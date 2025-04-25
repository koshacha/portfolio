<template>
  <div class="relative" @mouseover="visible = true" @mouseleave="resume()">
    <slot />
    <motion.div
      @mouseover="pause()"
      @mouseleave="visible = false"
      v-show="visible"
      class="absolute bottom-full mb-2 right-0 w-64 bg-secondary rounded-lg shadow-lg p-4 border border-accent/10"
    >
      <div class="space-y-4">
        <div>
          <div class="text-text-secondary mb-1 text-sm">Email</div>
          <a
            href="mailto:qbub@proton.me"
            class="text-text-primary hover:text-accent transition-colors"
          >
            qbub@proton.me
          </a>
        </div>
        <div>
          <div class="text-text-secondary mb-1 text-sm">
            {{ $t("contacts.elsewhere") }}
          </div>
          <div class="grid grid-cols-2 gap-2">
            <a
              v-for="contact in contacts"
              :href="contact.href"
              class="text-text-primary hover:text-accent transition-colors"
              >{{ contact.name }}</a
            >
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
import { useTimeoutPoll } from "@vueuse/core";

const visible = ref(false);

async function hideElement() {
  visible.value = false;
  pause();
}

const { pause, resume } = useTimeoutPoll(hideElement, 500, {
  immediate: false,
});

const contacts: {
  name: string;
  href: string;
}[] = [
  {
    name: "Telegram",
    href: "https://t.me/Koshacha",
  },
  {
    name: "GitHub",
    href: "https://github.com/Koshacha",
  },
  {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~01355186bd65b2bf29",
  },
  {
    name: "LinkenIn",
    href: "https://www.linkedin.com/in/koshacha",
  },
];
</script>
