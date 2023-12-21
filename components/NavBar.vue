<template>
  <nav
    class="flex justify-between items-center px-[100px] py-5 z-20 bg-black/[.2] backdrop-blur-md shadow-xl"
  >
    <NuxtLink to="/" class="flex items-center gap-5 cursor-pointer">
      <img src="~/assets/img/logo_alt.svg" alt="logo" />
      <div>
        <h1 class="text-2xl font-bold text-gray-100">LokaBestari</h1>
      </div>
    </NuxtLink>
    <div class="flex items-center gap-5">
      <div class="flex flex-col items-start gap-5 text-gray-100 md:flex-row">
        <div class="border-b-4 font-bold border-[#8CFE5C]">
          <NuxtLink to="/">Beranda</NuxtLink>
        </div>
        <div><NuxtLink to="/kategori">Kategori</NuxtLink></div>
        <div><NuxtLink to="/eksplorasi">Eksplorasi</NuxtLink></div>
        <div><NuxtLink to="/favorit">Favorit</NuxtLink></div>
      </div>
      <div class="">
        <a
          class="px-4 py-2 text-lg font-bold bg-[#8CFE5C] rounded-2xl text-black/50"
          href=""
          >Mainkan</a
        >
      </div>
    </div>
  </nav>
</template>
