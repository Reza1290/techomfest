<script></script>

<template>
  <NuxtLayout>
    <Hero />
    <About />
    <Kategori />
    <Eksplorasi />
    <section class="px-20 mt-20 mb-10">
      <div
        class="bg-[url('~/assets/img/home/game.png')] rounded-3xl w-full h-[467px] bg-black flex flex-col justify-between items-center backdrop-blur-lg"
      >
        <div class="flex flex-col items-center">
          <h1 class="text-gray-100 text-[65px] font-bold">Mainkan Gim</h1>
          <p class="text-[32px] font-medium">
            Cari tahu yuk seberapa jauh sih pengetahuanmu
          </p>
        </div>
        <div>Mainkan Gim</div>
      </div>
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
