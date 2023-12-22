<template>
  <NuxtLayout>
    <HeroTarian></HeroTarian>
    <InfoCard></InfoCard>
    <section id="content1" class="relative py-14 lg:py-20">
      <div class="w-96 h-96 -left-48 top-56 blob"></div>
      <div
        class="flex flex-col-reverse items-center justify-between w-full md:flex-row md:gap-x-4 lg:gap-0"
      >
        <p
          class="py-5 pl-4 pr-3 mx-auto text-sm font-medium text-right md:w-1/2 lg:px-0 lg:py-0 md:text-left lg:text-xl"
        >
          Selamat datang di dunia yang membangun kisah sepanjang waktu, di mana
          tiap atap dan tiap dinding menyimpan sejarah dan kearifan nenek
          moyang. Selamat datang di Indonesia, negeri dengan rumah adat yang
          memikat, mencerminkan keberagaman budaya yang kaya dan keindahan
          arsitektur yang unik. Dari puncak Papua hingga ujung Sumatera, setiap
          daerah di Indonesia memiliki rumah adatnya sendiri, menjadi ciri khas
          yang merefleksikan keanekaragaman etnik dan kehidupan masyarakatnya.
        </p>
        <img
          src="~/assets/images/categoriespage/rumah-adat/image1.png"
          alt=""
          class="w-[70%] md:w-[50%] self-end lg:self-auto lg:w-auto hover:scale-105 transition-all duration-500"
        />
      </div>
    </section>
    <section id="content2" class="relative py-10 overflow-hidden lg:py-20">
      <div class="w-96 h-96 -right-36 top-56 blob"></div>
      <div
        class="flex flex-col items-center justify-between w-full md:flex-row md:gap-x-4 lg:gap-0"
      >
        <img
          src="~/assets/images/categoriespage/rumah-adat/image2.png"
          alt=""
          class="w-[70%] md:w-[50%] self-start lg:self-auto lg:w-auto hover:scale-105 transition-all duration-500"
        />
        <p
          class="py-5 pl-3 pr-4 mx-auto text-sm font-medium text-left md:w-1/2 lg:px-0 lg:py-0 md:text-left lg:text-xl"
        >
          Langit-langit yang tinggi di Rumah Gadang Sumatera Barat, atap yang
          melengkung di Rumah Sumbawa, atau tiang-tiang tinggi di Rumah Toraja
          Sulawesi, setiap elemen arsitektur menyiratkan makna dan cerita.
          Material alami yang digunakan, seperti kayu dan bambu, menjadi saksi
          bisu dari hubungan harmonis dengan alam. Rumah adat di Indonesia bukan
          hanya tempat tinggal; mereka adalah pusat kehidupan sosial dan ritual.
          Dari upacara adat hingga perayaan, tiap sudut rumah adat adalah
          panggung di mana kebudayaan hidup dan diteruskan dari generasi ke
          generasi.
        </p>
      </div>
    </section>
    <section id="carousel-category" class="relative mt-10 mb-20">
      <div class="w-96 h-96 -left-36 top-36 blob"></div>
      <CarouselCategories now="Rumah Adat"></CarouselCategories>
    </section>
    <section id="game-card" class="px-5 mb-20 lg:px-0">
      <GameCard></GameCard>
    </section>
  </NuxtLayout>
</template>

<script>
import HeroTarian from "~/components/categories/rumah-adat/Hero.vue";
import InfoCard from "~/components/categories/rumah-adat/InfoCard.vue";
import CarouselCategories from "~/components/categories/rumah-adat/CarouselCategories.vue";

export default {
  components: { HeroTarian, InfoCard, CarouselCategories },
};
</script>

<style></style>
