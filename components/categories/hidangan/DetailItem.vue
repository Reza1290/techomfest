<template>
  <div class="px-5 md:px-14 lg:px-[101px] lg:pt-0 pt-10">
    <section id="hero-detail">
      <div
        class="w-full h-[330px] md:h-[380px] lg:h-[480px] flex justify-center"
      >
        <div class="w-full max-h-full cursor-pointer card-detail">
          <div class="card-detail-image">
            <img
              :src="`/_nuxt/assets/images/hidangan/${item.gambar}.png`"
              alt=""
              class="w-full h-full object-cover"
            />
          </div>
          <div
            class="flex items-center justify-center w-full min-h-full backdrop-brightness-[.7]"
          >
            <p
              class="font-bold text-center text-white text-4xl md:text-5xl lg:text-7xl"
            >
              {{ item.nama }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="flex justify-center py-4">
      <div class="w-3/4">
        <h3 class="text-2xl lg:text-4xl font-bold text-primary">
          {{ item.nama }}
        </h3>
        <h5 class="mt-1 text-xl lg:text-2xl font-bold text-[#469951]">
          {{ item.kota }}, {{ item.asal }}
        </h5>
      </div>
      <div class="flex justify-end w-1/4">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="w-[70px] h-[70px] lg:w-[97px] lg:h-[97px]"
        >
          <path
            d="M16 14.0455V11.5488C16 9.40445 16 8.3323 15.4142 7.66615C14.8284 7 13.8856 7 12 7C10.1144 7 9.17157 7 8.58579 7.66615C8 8.3323 8 9.40445 8 11.5488V14.0455C8 15.5937 8 16.3679 8.32627 16.7062C8.48187 16.8675 8.67829 16.9688 8.88752 16.9958C9.32623 17.0522 9.83855 16.5425 10.8632 15.5229C11.3161 15.0722 11.5426 14.8469 11.8046 14.7875C11.9336 14.7583 12.0664 14.7583 12.1954 14.7875C12.4574 14.8469 12.6839 15.0722 13.1368 15.5229C14.1615 16.5425 14.6738 17.0522 15.1125 16.9958C15.3217 16.9688 15.5181 16.8675 15.6737 16.7062C16 16.3679 16 15.5937 16 14.0455Z"
            stroke="#1F420F"
            stroke-width="1.5"
          />
          <path
            opacity="0.5"
            d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="#1F420F"
            stroke-width="1.5"
          />
        </svg>
      </div>
    </section>
    <div class="w-full">
      <svg
        class="w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="3"
        viewBox="0 0 1238 2"
        fill="none"
      >
        <path d="M0 1L1238 0.999892" stroke="#6C6C6C" />
      </svg>
    </div>
    <section id="description" class="py-7 pr-7">
      <p class="text-base lg:text-xl font-medium">
        {{ item.deskripsi[0] }}<br /><br />{{ item.deskripsi[1] }}
        <br /><br />{{ item.deskripsi[2] }}
      </p>
    </section>
  </div>
  <section id="carousel">
    <div class="h-full py-10 lg:py-[120px]">
      <div class="flex flex-col items-center justify-center">
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-3xl lg:text-5xl text-[#1F420F] font-bold">
            Jelajahi Hidangan Lain
          </h1>
        </div>
        <div
          class="relative flex mt-7 gap-3 md:gap-7 lg:gap-14 px-5 md:px-7 lg:px-0"
        >
          <NuxtLink
            class="w-1/3 overflow-hidden transition-all duration-300 bg-white shadow-2xl cursor-pointer rounded-3xl hover:shadow-2xl hover:scale-105"
            v-for="reccomended in reccomended"
            :key="reccomended.id"
            :to="`/kategori/hidangan/${reccomended.id}`"
          >
            <img
              :src="`/_nuxt/assets/images/hidangan/${reccomended.gambar}.png`"
              alt="nama"
              class="md:h-[180px] lg:h-[277px] w-full rounded-2xl"
            />
            <div class="p-5">
              <h4
                class="text-[#469951] text-center font-bold uppercase text-xs md:text-sm lg:text-base"
              >
                {{ reccomended.asal }}
              </h4>
              <h1
                class="py-2 text-sm md:text-2xl lg:text-3xl font-bold text-center text-primary"
              >
                {{ reccomended.nama }}
              </h1>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script setup>
import Footer from "~/components/Footer.vue"
import hidangan from "~/data/hidangan.json"

const item = ref({})
const reccomended = ref([])

const getData = () => {
  item.value = hidangan.filter((data) => data.id == useRoute().params.id)[0]
}
const getReccomended = () => {
  const filteredItem = hidangan.filter(
    (data) => data.id != useRoute().params.id
  )
  reccomended.value = getRandomItems(filteredItem, 3)
}
const getRandomItems = (array, count) => {
  const shuffledArray = array.sort(() => Math.random() - 0.5)
  return shuffledArray.slice(0, count)
}

getData()
getReccomended()
</script>
