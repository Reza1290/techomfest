<template>
  <button class="relative focus:translate-x-[0] hover:translate-x-[0] transition-transform group">
    <div
      :class="`${rotate} left-5 -top-5 z-10 group-focus:translate-x-10 group-hover:translate-x-10 group-focus:rotate-[-5deg] group-hover:rotate-[-5deg] absolute bg-white h-64 w-80 rounded-3xl ${gambar} bg-cover bg-center transition-transform`"
    ></div>
    <div
      :class="`${rotate} absolute group-focus:w-96 group-hover:w-96 bg-[#8CFE5C] group-focus:translate-x-[330px] group-focus:rotate-[0deg] group-hover:translate-x-[330px] group-hover:rotate-[0deg] h-64 w-80 rounded-3xl border border-gray-200/20 transition-transform transition-[width]`"
    >
      <div class="hidden group-focus:block group-hover:block p-5 px-14 pl-20">
        <h1 class="font-bold text-2xl line-clamp-1 uppercase">{{nama}}</h1>
        <h4 class="font-medium text-lg line-clamp-1">{{pembacaan}}</h4>
        <p class="line-clamp-[7] text-justify text-sm my-2">{{ penjelasan }}</p>
      </div>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    nama: {
      default : 'KLEPON'
    },
    pembacaan: {
      default: '/kle·pon/'
    },
    penjelasan: {
      default: 'jajanan tradisional Indonesia yang umumnya terbuat dari tepung ketan putih yang dibentuk seperti bola-bola kecil dengan isi gula merah dan ditaburi parutan kelapa'
    },
    gambar:{
      default: "bg-[url('https://cdn.shopify.com/s/files/1/0428/0965/5452/files/pinterest_yog_1.jpg?v=1658941202')]"
    },
    rotate: {
      type: String,
      default: 'rotate-[10deg]'// Default rotation angle if not provided
    }
  }
}
</script>