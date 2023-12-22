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
          Tarian adat di Indonesia bukan sekadar pertunjukan, melainkan cerminan
          kehidupan sehari-hari. Dalam setiap gerakan, kita menemukan harmoni
          antara manusia dan alam, antara tradisi dan modernitas. Pakaian adat
          yang memukau menjadi simbol keindahan tekstil Indonesia yang
          memesona.Pentingnya tarian adat tidak hanya terletak pada keindahan
          visualnya, tetapi juga dalam makna filosofis yang terkandung di setiap
          langkah.
        </p>
        <img
          src="~/assets/images/categoriespage/tarian-adat/image1.png"
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
          src="~/assets/images/categoriespage/tarian-adat/image2.png"
          alt=""
          class="w-[70%] md:w-[50%] self-start lg:self-auto lg:w-auto hover:scale-105 transition-all duration-500 hover:shadow-2xl"
        />
        <p
          class="md:w-1/2 lg:px-0 pr-4 pl-3 lg:py-0 py-5 mx-auto text-sm md:text-left text-left lg:text-xl font-medium"
        >
          Dengan lebih dari 300 suku bangsa, Indonesia menjadi panggung bagi
          ragam tarian adat yang merefleksikan kekayaan sejarah, mitos, dan alam
          yang mempesona. Setiap gerakan adalah sebuah cerita yang diceritakan
          melalui elegansi dan keindahan yang menggetarkan jiwa. Indonesia,
          dengan 17.000 pulau yang memeluk lautan dan daratan, menciptakan
          keunikan budaya maritim yang tercermin dalam setiap gerakan tarian.
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
import HeroTarian from "~/components/categories/tarian-adat/Hero.vue"
import InfoCard from "~/components/categories/tarian-adat/InfoCard.vue"
import CarouselCategories from "~/components/categories/tarian-adat/CarouselCategories.vue"

export default {
  components: { HeroTarian, InfoCard, CarouselCategories },
}
</script>

<style></style>
