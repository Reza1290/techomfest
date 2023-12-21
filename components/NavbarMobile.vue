<template>
  <div>
    <nav
      class="relative px-4 py-4 flex justify-between items-center bg-black/[.1] backdrop-blur-md shadow-xl"
    >
      <a class="text-3xl font-bold leading-none" href="#">
        <svg class="h-10" alt="logo" viewBox="0 0 10240 10240">
          <!-- SVG Path -->
        </svg>
      </a>
      <div class="lg:hidden">
        <button
          class="navbar-burger flex items-center text-primary p-3"
          @click="toggleMenu"
        >
          <svg
            class="block h-4 w-4 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>
      <ul
        v-show="isMenuOpen"
        class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6"
      >
        <li>
          <a class="text-sm text-gray-400 hover:text-gray-500" href="#">Home</a>
        </li>
        <!-- Menambahkan item menu lainnya sesuai kebutuhan -->
      </ul>
      <a
        class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
        href="#"
        >Sign In</a
      >
      <a
        class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
        href="#"
        >Sign up</a
      >
    </nav>
    <div v-show="isMenuOpen" class="navbar-menu relative z-50">
      <div
        class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
        @click="toggleMenu"
      ></div>
      <nav
        class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
      >
        <!-- Konten menu selengkapnya -->
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>

<style scoped>
/* CSS styling jika diperlukan */
</style>
