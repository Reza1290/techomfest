<template>
  <NuxtLayout></NuxtLayout>
  <HeroHidangan></HeroHidangan>
  <InfoCard></InfoCard>
  <section id="content1" class="py-20">
    <div class="w-full flex justify-between items-center">
      <p class="w-1/2 mx-auto font-medium">
        Apa yang dimakan orang Indonesia? Seberapa penting makanan dalam tradisi
        Indonesia? Dari barat ke timur Indonesia, kita akan menemukan banyak
        kebiasaan makan yang unik. Ada 5000 resep tradisional yang tersebar di
        seluruh kepulauan Indonesia.
      </p>
      <img src="~/assets/images/categoriespage/hidangan/image1.png" alt="" />
    </div>
  </section>
  <section id="content2" class="py-20">
    <div class="w-full flex justify-between items-center">
      <img src="~/assets/images/categoriespage/hidangan/image2.png" alt="" />
      <p class="w-1/2 mx-auto font-medium">
        Cerita-cerita dalam Indonesia Food Culture dibuat dari keragaman budaya,
        warisan, upacara ritual, dan hasil lokal di setiap wilayah. Indonesia
        memiliki makanan umum yang dapat ditemukan di sebagian besar wilayah,
        seperti Sambal (pasta cabai) dan Soto (Sup Indonesia). Ada lebih dari
        100 jenis Sambal dan 70 jenis Soto di Indonesia. Proses memasak adalah
        cerita lain yang mungkin menarik untuk dijelajahi.
      </p>
    </div>
  </section>
  <section id="game-card" class="mb-20">
    <GameCard></GameCard>
  </section>
  <Footer></Footer>
</template>

<script>
import HeroHidangan from "~/components/categories/hidangan/Hero.vue"
import InfoCard from "~/components/categories/hidangan/InfoCard.vue"

export default {
  components: { HeroHidangan, InfoCard },
}
</script>

<style></style>
