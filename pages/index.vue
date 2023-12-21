<template>
  <NuxtLayout>
    <Hero />
    <About />
    <Kategori />
    <Eksplorasi />
    <GameCard />
    <Footer></Footer>
  </NuxtLayout>
</template>

<script setup>
import Hero from "~/components/Home/Hero.vue";
import About from "~/components/Home/About.vue";
import Kategori from "~/components/Home/Kategori.vue";
import Eksplorasi from "~/components/Home/Eksplorasi.vue";
import GameCard from "~/components/GameCard.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped></style>
