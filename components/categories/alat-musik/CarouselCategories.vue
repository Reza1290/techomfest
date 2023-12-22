<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold text-center text-primary mb-9">
      Cari tahu kategori lainnya yuk!
    </h1>
    <div class="w-3/4 mx-auto">
      <swiper
        space-between="50"
        :modules="modules"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }"
        class="mySwiper"
      >
        <swiper-slide
          v-for="item in categoryNow"
          :key="item.nama"
          class="mb-10"
        >
          <NuxtLink :to="`/kategori/${item.slug}`">
            <div
              class="flex flex-col items-center justify-center rounded-lg bg-secondary h-80 gap-y-5 hover:scale-110 hover:cursor-pointer transition duration-500"
            >
              <img
                :src="`/images/category/${item.icon}.png`"
                alt=""
              />
              <span
                class="text-lg font-bold text-primary text-center hover-text"
                >{{ item.nama }}</span
              >
            </div>
          </NuxtLink>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"

import "swiper/css/pagination"
import "swiper/css/navigation"

import { Pagination, Navigation, Autoplay } from "swiper/modules"
import category from "~/data/category.json"

export default {
  props: {
    now: {
      type: String,
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    const categoryNow = ref([])
    onMounted(() => {
      categoryNow.value = category.filter(
        (data) => data.nama.toLowerCase() != props.now.toLowerCase()
      )
    })
    return {
      modules: [Autoplay, Pagination, Navigation],
      category,
      categoryNow,
    }
  },
}
</script>

<style></style>
