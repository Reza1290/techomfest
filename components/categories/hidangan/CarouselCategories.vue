<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold text-center text-primary mb-9">
      Cari tahu kategori lainnya yuk!
    </h1>
    <div class="w-3/4 mx-auto">
      <swiper
        :slidesPerView="3"
        space-between="50"
        :modules="modules"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        class="mySwiper"
      >
        <swiper-slide v-for="item in category" :key="item.nama" class="mb-10">
          <div
            class="flex flex-col items-center justify-center rounded-lg bg-secondary h-80 gap-y-5"
          >
            <img
              :src="`/_nuxt/assets/images/category/${item.icon}.png`"
              alt=""
            />
            <span class="text-lg font-bold text-primary">{{ item.nama }}</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import category from "~/data/category.json";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
      category,
    };
  },
};
</script>

<style></style>
