<template>
  <div>
    <div
      class="mx-auto container my-7 py-20 bg-[url('~/assets/images/bg_game.png')] bg-cover bg-no-repeat lg:h-[467px] rounded-3xl flex flex-col justify-center items-center"
    >
      <h1 class="text-4xl lg:text-5xl font-bold text-white">Mainkan Gim</h1>
      <p class="mt-3 text-sm lg:text-2xl text-center text-secondary">
        Cari tahu yuk seberapa jauh sih pengetahuanmu
      </p>
      <NuxtLink

        to="/permainan"
        class="px-5 py-3 mt-6 text-base lg:text-xl font-bold bg-secondary rounded-xl hover:scale-110 hover:cursor-pointer transition duration-500"
        >Coba Sekarang 🎮</NuxtLink
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
