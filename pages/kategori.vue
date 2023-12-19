<template>
  <NavbarDark></NavbarDark>
  <section class="category">
    <div class="container mt-6 mb-20 mx-auto">
      <h1 class="text-4xl text-center font-bold text-primary">Kategori</h1>
      <p class="text-xl text-accent text-center mt-2">
        Pilih kategori budaya yang ingin anda jelajahi
      </p>
      <div class="grid grid-cols-4 gap-y-10 gap-x-20 mt-10">
        <div
          v-for="category in category"
          :key="category.nama"
          class="bg-secondary h-80 flex flex-col gap-y-5 justify-center items-center rounded-lg"
        >
          <img :src="category.icon" :alt="category.nama" class="w-[100px]" />
          <span class="text-primary font-bold text-lg">{{
            category.nama
          }}</span>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script>
import AgamaIcon from "~/assets/images/category/agama.png"
import KesenianIcon from "~/assets/images/category/kesenian.png"
import RumahIcon from "~/assets/images/category/rumah_adat.png"
import SitusIcon from "~/assets/images/category/situs_bersejarah.png"
import PakaianIcon from "~/assets/images/category/pakaian_adat.png"
import HidanganIcon from "~/assets/images/category/hidangan.png"
import UpacaraIcon from "~/assets/images/category/upacara_adat.png"
import SenjataIcon from "~/assets/images/category/senajata_tradisional.png"

export default {
  setup() {
    const category = [
      {
        nama: "Hidangan",
        icon: HidanganIcon,
      },
      {
        nama: "Kesenian",
        icon: KesenianIcon,
      },
      {
        nama: "Rumah Adat",
        icon: RumahIcon,
      },
      {
        nama: "Situs Bersejarah",
        icon: SitusIcon,
      },
      {
        nama: "Pakaian Adat",
        icon: PakaianIcon,
      },
      {
        nama: "Agama",
        icon: AgamaIcon,
      },
      {
        nama: "Upacara Adat",
        icon: UpacaraIcon,
      },
      {
        nama: "Senjata Tradisional",
        icon: SenjataIcon,
      },
    ]

    return {
      category,
    }
  },
}
</script>

<style></style>
