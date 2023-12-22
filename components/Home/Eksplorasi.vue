<template>
  <div class="h-[437px] py-[41px] relative overflow-hidden">
    <div class="top-0 w-96 h-96 -right-36 blob"></div>
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        <h1 class="text-6xl text-[#1F420F] font-bold max-sm:text-5xl">
          Eksplorasi
        </h1>
        <p
          class="mt-4 text-[#0F890D] text-2xl font-medium text-center max-sm:px-2 px-4"
        >
          Ini adalah beberapa daerah yang mungkin menarik untuk anda jelajahi
        </p>
      </div>
      <div class="p-4 max-md:overflow-x-auto max-md:w-full">
        <div class="relative flex mt-7 gap-14 snap-x w-max">
          <NuxtLink
            to="/eksplorasi"
            class="absolute z-20 left-[97%] top-[63.5px] cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="63"
              height="63"
              viewBox="0 0 63 63"
              fill="none"
            >
              <circle
                cx="31.5"
                cy="31.5"
                r="31.5"
                fill="#8CFE5C"
                class="hover:shadow-2xl"
              />
              <path
                d="M36.8286 25L43 31.1714L36.8286 37.3428"
                stroke="#1F420F"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M42.8 31.2432H20"
                stroke="#1F420F"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </NuxtLink>
          <!-- CARD START -->
          <NuxtLink
            to="/eksplorasi/13"
            class="flex justify-center rounded-xl h-[203px] w-[337px] bg-cover bg-center bg-[url('~/assets/provinsi/banner/jatim.jpeg')] relative cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div
              class="bg-white rounded-t-xl absolute bottom-0 w-[240px] h-[127px] flex flex-col justify-center items-center p-3 text-primary"
            >
              <div class="h-[63px] w-[50px] flex justify-center item-center">
                <img
                  class="max-w-full max-h-full"
                  src="~/assets/provinsi/logo/jatim.svg"
                  alt="logo"
                />
              </div>
              <h4 class="mt-2 text-xl font-bold text-center">Jawa Timur</h4>
            </div>
          </NuxtLink>
          <!-- CARD END -->
          <!-- CARD START -->
          <NuxtLink
            to="/eksplorasi/15"
            class="flex justify-center rounded-xl h-[203px] w-[337px] bg-cover bg-center bg-[url('~/assets/provinsi/banner/jakarta.jpeg')] relative cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div
              class="bg-white rounded-t-xl absolute bottom-0 w-[240px] h-[127px] flex flex-col justify-center items-center p-3 text-primary"
            >
              <div class="h-[63px] w-[50px] flex justify-center item-center">
                <img
                  class="max-w-full max-h-full"
                  src="~/assets/provinsi/logo/jakarta.svg"
                  alt="logo"
                />
              </div>
              <h4 class="mt-2 text-xl font-bold text-center">DKI Jakarta</h4>
            </div>
          </NuxtLink>
          <!-- CARD END -->
          <!-- CARD START -->
          <NuxtLink
            to="/eksplorasi/19"
            class="flex justify-center rounded-xl h-[203px] w-[337px] bg-cover bg-center bg-[url('~/assets/provinsi/banner/kalbar.jpeg')] relative cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div
              class="bg-white rounded-t-xl absolute bottom-0 w-[240px] h-[127px] flex flex-col justify-center items-center p-3 text-primary"
            >
              <div class="h-[63px] w-[50px] flex justify-center item-center">
                <img
                  class="max-w-full max-h-full"
                  src="~/assets/provinsi/logo/kalbar.svg"
                  alt="logo"
                />
              </div>
              <h4 class="mt-2 text-xl font-bold text-center">
                Kalimantan Barat
              </h4>
            </div>
          </NuxtLink>
          <!-- CARD END -->
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>
