<script></script>

<template>
  <NuxtLayout>
    <Hero />
    <About />
    <Kategori />
    <Eksplorasi />
    <section class="px-20 mt-20 mb-44">
      <GameCard></GameCard>
    </section>
    <Footer></Footer>
  </NuxtLayout>
</template>

<script setup>
import Hero from "~/components/Home/Hero.vue"
import About from "~/components/Home/About.vue"
import Kategori from "~/components/Home/Kategori.vue"
import Eksplorasi from "~/components/Home/Eksplorasi.vue"
</script>

<style scoped></style>
