<template>
  <NavbarDark></NavbarDark>
  <section class="category">
    <div class="container mt-6 mb-20 mx-auto">
      <h1 class="text-4xl text-center font-bold text-primary">Kategori</h1>
      <p class="text-xl text-accent text-center mt-2">
        Pilih kategori budaya yang ingin anda jelajahi
      </p>
      <div class="grid grid-cols-4 gap-y-10 gap-x-20 mt-10">
        <div
          v-for="category in category"
          :key="category.nama"
          class="bg-secondary h-80 flex flex-col gap-y-5 justify-center items-center rounded-lg"
        >
          <img
            :src="`/_nuxt/assets/images/category/${category.icon}.png`"
            :alt="category.nama"
            class="w-[100px]"
          />
          <span class="text-primary font-bold text-lg">{{
            category.nama
          }}</span>
        </div>
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
