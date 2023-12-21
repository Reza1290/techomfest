<template>
  <main class="relative">
    <NavBar class="hidden md:flex" />
    <NavbarMobile class="md:hidden"></NavbarMobile>
    <slot />
    <Footer class="mt-20"></Footer>
  </main>
</template>
