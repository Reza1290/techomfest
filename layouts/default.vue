<template>
  <main class="relative">
    <NavBar class="hidden lg:flex" />
    <NavbarMobile class="lg:hidden"></NavbarMobile>
    <slot />
    <Footer class="mt-20"></Footer>
  </main>
</template>
