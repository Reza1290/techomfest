<template>
  <div
    class="container min-w-full min-h-[680px] lg:min-h-[890px] -mt-[20%] lg:-mt-[6%] flex justify-center items-center rounded-b-[70px] lg:rounded-b-[100px] bg-[url('~/assets/img/home/hero.png')] bg-cover bg-center px-7 lg:px-0"
  >
    <div class="container flex flex-col items-center">
      <p
        class="font-normal text-[15px] lg:text-[25px] leading-none text-center text-white"
      >
        EKSPLOR KEKAYAAN BUDAYA INDONESIA
      </p>
      <div class="w-[180px] h-[4px] bg-[#8CFE5C] my-[9px]"></div>
      <p
        class="font-medium text-[30px] lg:text-[57.715px] leading-none text-center text-white"
      >
        Selamat Datang di
      </p>
      <p
        class="font-bold text-6xl lg:text-[105px] leading-none text-center bg-clip-text bg-gradient-to-b from-white via-white to-[#8cfe5c] text-transparent"
      >
        LokaBestari
      </p>
      <NuxtLink
        href="#about"
        class="w-[150px] h-[45px] lg:w-[203px] lg:h-[59px] rounded-[13px] bg-[#8CFE5C] flex justify-center items-center mt-5"
      >
        <p class="text-lg lg:text-xl text-[#1F420F] font-medium">Jelajahi</p>
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
</template>

<script setup></script>
