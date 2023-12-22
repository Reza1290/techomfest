<template>
  <footer
    class="flex flex-col items-center justify-center w-full bg-primary py-14"
  >
    <div class="flex items-center gap-5">
      <img src="~/assets/img/logo_alt.svg" alt="logo" />
      <h1 class="text-2xl font-bold text-gray-100">LokaBestari</h1>
    </div>
    <div id="section-link" class="mt-3 text-secondary">
      <ul class="flex gap-x-2 max-md:flex-col max-md:divide-y md:divide-x justify-center">
        <li class="text-center"><NuxtLink class="mx-2  " to="/">Beranda </NuxtLink> </li>
        <li class="text-center"><NuxtLink class="mx-2  " to="/kategori">Kategori </NuxtLink> </li>
        <li class="text-center"><NuxtLink class="mx-2  " to="/eksplorasi">Eksplorasi</NuxtLink> </li>
        <li class="text-center"><NuxtLink class="mx-2  " to="/favorit">Favorit</NuxtLink> </li>
        <li class="text-center"><NuxtLink class="mx-2  " to="/permainan">Main Game</NuxtLink></li>
      </ul>
    </div>
    <hr class="w-1/2 my-6 border-gray-500" />
    <span class="block text-center max-sm:flex max-sm:flex-col text-sm text-gray-500 sm:text-center dark:text-gray-400 sm:divide-x"
      ><span class="px-2">Copyright © 2023</span> <span class="px-2">LokaBestari - Bismillah Menang Team</span></span
    >
  </footer>
</template>

<script>
export default {}
</script>

<style></style>
