<template>
  <NuxtLayout>
    <HeroSenjata></HeroSenjata>
    <InfoCard></InfoCard>
    <section id="content1" class="relative py-14 lg:py-20">
      <div class="w-96 h-96 -left-48 top-56 blob"></div>
      <div
        class="flex flex-col-reverse md:flex-row md:gap-x-4 lg:gap-0 items-center justify-between w-full"
      >
        <p
          class="md:w-1/2 lg:px-0 pl-4 pr-3 lg:py-0 py-5 mx-auto text-sm md:text-left text-right lg:text-xl font-medium"
        >
          Selamat datang di dunia di mana gagah berani bertemu dengan keindahan
          artistik, di mana setiap bilah pedang dan panah adalah karya seni yang
          menceritakan sejarah panjang keberanian. Selamat datang di Indonesia,
          tanah yang melahirkan senjata tradisional yang bukan hanya instrumen
          pertahanan, tetapi juga warisan kebudayaan yang menggetarkan jiwa.
        </p>
        <img
          src="~/assets/images/categoriespage/senjata-tradisional/image1.png"
          alt=""
          class="w-[70%] md:w-[50%] self-end lg:self-auto lg:w-auto hover:scale-105 transition-all duration-500 hover:shadow-2xl"
        />
      </div>
    </section>
    <section id="content2" class="relative py-10 lg:py-20 overflow-hidden">
      <div class="w-96 h-96 -right-36 top-56 blob"></div>
      <div
        class="flex flex-col md:flex-row md:gap-x-4 lg:gap-0 items-center justify-between w-full"
      >
        <img
          src="~/assets/images/categoriespage/senjata-tradisional/image2.png"
          alt=""
          class="w-[70%] md:w-[50%] self-start lg:self-auto lg:w-auto hover:scale-105 transition-all duration-500 hover:shadow-2xl"
        />
        <p
          class="md:w-1/2 lg:px-0 pr-4 pl-3 lg:py-0 py-5 mx-auto text-sm md:text-left text-left lg:text-xl font-medium"
        >
          Dari kris yang berkilauan hingga tombak yang kokoh, senjata
          tradisional Indonesia adalah karya tangan yang melebur keindahan dan
          fungsi. Setiap ukiran dan pola yang terpahat pada bilahnya adalah
          kisah luhur, mencerminkan kearifan lokal dan teknik pembuatan yang
          diwariskan dari generasi ke generasi. Senjata tradisional di Indonesia
          bukan sekadar alat perang; mereka adalah penjaga nilai-nilai budaya,
          kehormatan, dan identitas suku bangsa.
        </p>
      </div>
    </section>
    <section id="carousel-category" class="relative mt-10 mb-20">
      <div class="w-96 h-96 -left-36 top-36 blob"></div>
      <CarouselCategories now="Tarian Adat"></CarouselCategories>
    </section>
    <section id="game-card" class="mb-20 px-5 lg:px-0">
      <GameCard></GameCard>
    </section>
  </NuxtLayout>
</template>

<script>
import HeroSenjata from "~/components/categories/senjata-tradisional/Hero.vue"
import InfoCard from "~/components/categories/senjata-tradisional/InfoCard.vue"
import CarouselCategories from "~/components/categories/senjata-tradisional/CarouselCategories.vue"

export default {
  components: { HeroSenjata, InfoCard, CarouselCategories },
}
</script>

<style></style>
