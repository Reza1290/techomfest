<template>
    <div
      :class="`absolute z-1 min-w-full min-h-[500px] -mt-[6%] flex justify-center items-center bg-[url('~/assets/img/home/hero.png')] bg-cover bg-center `"
      style="
        mask-image: linear-gradient(white, transparent);
        -webkit-mask-image: linear-gradient(white, transparent);
      "
    ></div>
    <NuxtLayout>
      <div
        class="flex flex-col justify-end items-center p-20 min-h-[450px] leading-tight"
      >
        <h1 class="text-[#1F420F] font-bold uppercase text-[64px]">
          DAERAH ISTIMEWA YOGYAKARTA
        </h1>
        <p class="text-start text-[36px] font-semibold">YOGYAKARTA</p>
      </div>
      <div class="container">
        <h1 class="text-4xl font-bold">HIDANGAN</h1>
      </div>
      <div class="flex p-20 justify-center relative w-full min-h-[600px]">
        <div class="">
          <HidanganExploreCard 
            class="translate-x-[-200px] transition-transform"
            gambar="bg-[url('https://cdn.shopify.com/s/files/1/0428/0965/5452/files/pinterest_yog_1.jpg?v=1658941202')]"
            rotate="rotate-[10deg]"
          />
        </div>
        <div class="">
          <HidanganExploreCard
            class="translate-x-[-400px]"
            gambar=""
            rotate="rotate-[-20deg]"
          />
        </div>
        <div class="">
          <HidanganExploreCard
            class="translate-x-[-600px]"
            gambar=""
            rotate="rotate-[5deg]"
          />
        </div>
      </div>
      <div class="mb-[500px]">
        
          <TarianExploreCard/>
        
      </div>
      <div class="container">
        <TriviaExploreCard/>
      </div>
      <Eksplorasi />
    </NuxtLayout>
  </template>
  
  <script setup>
  import Eksplorasi from "~/components/Home/Eksplorasi.vue";
  
  </script>