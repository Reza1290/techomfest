<template>
  <section
    class="bg-black h-[90vh] lg:h-[110vh] -mt-[200px] bg-[url('~/assets/images/categoriespage/senjata-tradisional/hero.png')] bg-center bg-cover"
  >
    <div class="h-full bg-gradient-to-t from-black/50 to-gray-900/10">
      <div class="flex flex-col items-center justify-center h-full mt-20">
        <div
          class="flex flex-col items-center justify-center leading-none text-center"
        >
          <h1 class="text-2xl lg:text-3xl text-white">KATEGORI</h1>
          <div class="border-b-4 my-2 border-[#8CFE5C] w-40"></div>
          <h1 class="mt-1 lg:mt-3 text-5xl lg:text-6xl font-bold text-white">
            Senjata Tradisional
          </h1>
          <h1 class="mt-2 text-xl lg:text-3xl font-light text-white">
            Jelajahi Senjata Tradisional otentik nusantara
          </h1>
        </div>
        <NuxtLink
          href="/kategori/senjata-tradisional/list"
          class="w-[150px] lg:w-[203px] h-[45px] lg:h-[59px] rounded-[13px] bg-[#8CFE5C] flex justify-center items-center mt-5 hover:scale-110 hover:cursor-pointer transition duration-500"
        >
          <p class="text-base lg:text-2xl text-[#1F420F] font-medium">
            Jelajahi
          </p>
          <div class="ml-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="16"
              viewBox="0 0 27 16"
              fill="none"
            >
              <path
                d="M18.8286 2L25 8.17142L18.8286 14.3428"
                stroke="#1F420F"
                stroke-width="2.17143"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24.8 8.24316H2"
                stroke="#1F420F"
                stroke-width="2.17143"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
