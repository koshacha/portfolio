<template>
  <footer class="py-6 px-6 md:px-12 text-text-secondary">
    <div class="container mx-auto">
      <div class="flex flex-row justify-between items-center">
        <build-label hydrate-never />

        <scroll-button variant="secondary">{{
          $t("footer.back-to-top")
        }}</scroll-button>

        <lazy-contacts>
          <the-button variant="secondary">{{
            $t("footer.contact")
          }}</the-button>
        </lazy-contacts>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>
