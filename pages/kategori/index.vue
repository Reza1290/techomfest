<template>
  <NavbarDark class="hidden lg:flex"></NavbarDark>
  <NavbarMobileDark class="lg:hidden"></NavbarMobileDark>
  <section class="category">
    <div class="container mx-auto mt-6 mb-20">
      <h1 class="text-4xl font-bold text-center text-primary">Kategori</h1>
      <p class="mt-2 text-base lg:text-xl text-center text-accent">
        Pilih kategori budaya yang ingin anda jelajahi
      </p>
      <div
        class="grid grid-cols-2 lg:grid-cols-4 mt-10 gap-y-10 gap-x-5 lg:gap-x-20"
      >
        <NuxtLink
          v-for="category in category"
          :key="category.nama"
          :to="`/kategori/${category.nama}`"
          class="flex flex-col items-center justify-center transition-all duration-300 rounded-lg cursor-pointer bg-secondary h-64 lg:h-80 gap-y-5 hover:scale-105"
        >
          <img
            :src="`/_nuxt/assets/images/category/${category.icon}.png`"
            :alt="category.nama"
            class="w-[70px] lg:w-[100px]"
          />
          <span class="text-base lg:text-lg font-bold text-primary">{{
            category.nama
          }}</span>
        </NuxtLink>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script>
import category from "~/data/category.json"

export default {
  setup() {
    return {
      category,
    }
  },
}
</script>

<style></style>
