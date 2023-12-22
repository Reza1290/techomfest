<template>
  <button autofocus class="relative focus:translate-x-[0] transition-transform group focus:z-[100]">
    <div
      :class="`${rotate} group-hover:scale-105 left-5 -top-5 z-10 group-focus:z-[50] group-focus:translate-x-10 max-md:group-focus:translate-x-[-320px] max-md:group-focus:translate-y-[300px] group-focus:rotate-[-5deg]  absolute bg-white h-64 w-80 rounded-3xl bg-cover bg-center transition-transform border-[0.125px] border-black/10`" :style="`background-image: url('/images/hidangan/${gambar}');`"
    ></div>
    <div
      :class="`${rotate} group-hover:scale-105 absolute group-focus:w-96 group-focus:z-[50] bg-[#8CFE5C] group-focus:translate-x-[330px] max-md:group-focus:translate-x-[-150px] max-md:group-focus:translate-y-[0px]  group-focus:rotate-[0deg]  h-64 w-80 rounded-3xl border border-gray-200/20 transition-transform transition-[width]`"
    >
      <div class="hidden group-focus:block p-5 px-14 pl-20">
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
      default: ''
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