<template>
  <NuxtPage />
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (productCategory) => {
    return productCategory ? `${productCategory} - LokaBestari` : "LokaBestari"
  },
})
</script>
