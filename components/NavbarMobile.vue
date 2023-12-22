<template>
  <div>
    <nav
      class="relative px-4 py-4 flex justify-between items-center bg-black/[.1] backdrop-blur-md shadow-xl"
    >
      <NuxtLink to="/" class="flex items-center gap-5 cursor-pointer">
        <img src="~/assets/img/logo_alt.svg" alt="logo" />
        <div>
          <h1 class="text-2xl font-bold text-gray-100">LokaBestari</h1>
        </div>
      </NuxtLink>
      <div class="lg:hidden">
        <button
          class="navbar-burger flex items-center text-accent p-3"
          @click="toggleMenu"
        >
          <svg
            class="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
    </nav>
    <div v-show="isMenuOpen" class="navbar-menu relative z-50">
      <div
        class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
        @click="toggleMenu"
      ></div>
      <nav
        class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
      >
        <NuxtLink
          class="lg:inline-block py-2 px-6 bg-primary text-sm text-white font-bold rounded-xl transition duration-200"
          to="/"
          >Beranda</NuxtLink
        >
        <NuxtLink
          class="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
          to="/kategori"
          >Kategori</NuxtLink
        >
        <NuxtLink
          class="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
          to="/eksplorasi"
          >Eksplorasi</NuxtLink
        >
        <NuxtLink
          class="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
          to="/favorit"
          >Favorit</NuxtLink
        >
        <NuxtLink
          class="lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
          to="/permainan"
          >Main Game</NuxtLink
        >
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
/* CSS styling jika diperlukan */
</style>
