<template>
  <NuxtLayout>
    <HeroTarian></HeroTarian>
    <InfoCard></InfoCard>
    <section id="content1" class="relative py-14 lg:py-20">
      <div class="w-96 h-96 -left-48 top-56 blob"></div>
      <div
        class="flex flex-col-reverse md:flex-row md:gap-x-4 lg:gap-0 items-center justify-between w-full"
      >
        <p
          class="md:w-1/2 lg:px-0 pl-4 pr-3 lg:py-0 py-5 mx-auto text-sm md:text-left text-right lg:text-xl font-medium"
        >
          Selamat datang di dunia yang dipenuhi dengan harmoni dan ritme, di
          mana setiap denting alat musik adalah nyanyian dari keanekaragaman
          budaya. Selamat datang di Indonesia, negeri di mana alat musik bukan
          hanya instrumen, tetapi penjalin kisah yang menghubungkan generasi dan
          menggambarkan keindahan warisan suara kita. Dari gemerincing angklung
          Sunda hingga getaran kendang Minangkabau, Indonesia memiliki lanskap
          alat musik yang penuh warna.
        </p>
        <img
          src="~/assets/images/categoriespage/alat-musik/image1.png"
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
          src="~/assets/images/categoriespage/alat-musik/image2.png"
          alt=""
          class="w-[70%] md:w-[50%] self-start lg:self-auto lg:w-auto hover:scale-105 transition-all duration-500 hover:shadow-2xl"
        />
        <p
          class="md:w-1/2 lg:px-0 pr-4 pl-3 lg:py-0 py-5 mx-auto text-sm md:text-left text-left lg:text-xl font-medium"
        >
          Setiap suku bangsa membawa ciri khasnya sendiri, menciptakan orkestra
          bunyi yang memukau dan mencerminkan kekayaan budaya yang luar biasa.
          Gamelan Jawa yang megah, suling Bali yang merdu, atau talempong dari
          Sumatera yang membawa semangat keberanian, setiap alat musik adalah
          pintu gerbang ke dalam cerita dan nilai-nilai kehidupan masyarakat
          Indonesia. Mereka bukan hanya benda mati; mereka adalah bahasa yang
          mendalam yang mengungkapkan emosi, merayakan peristiwa penting, dan
          menyampaikan pesan-pesan spiritual.
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
import HeroTarian from "~/components/categories/alat-musik/Hero.vue"
import InfoCard from "~/components/categories/alat-musik/InfoCard.vue"
import CarouselCategories from "~/components/categories/alat-musik/CarouselCategories.vue"

export default {
  components: { HeroTarian, InfoCard, CarouselCategories },
}
</script>

<style></style>
