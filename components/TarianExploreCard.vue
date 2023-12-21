<template>
  <div class="flex justify-end min-h-[300px] relative group mx-auto">
    <div
      class="flex flex-col items-end justify-start bg-secondary rounded-l-[50px] absolute min-h-[400px] max-w-[45%] px-10 py-7 text-end transition-transform"
    >
      <h1 class="text-[52px] font-bold uppercase">{{ nama }}</h1>
      <p
        class="font-medium line-clamp-6 max-w-[65%] text-justify group-hover:line-clamp-none group-hover:line-clamp-10"
      >{{ penjelasan }}</p>
    </div>
    <img
      :src="mainImage"
      class="group-hover:scale-95 top-[100px] group-hover:right-[26rem] right-[25rem] absolute bg-cover rounded-full transition-transform"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: {
    nama: {
      default: 'TARI SAMAN',
    },
    penjelasan: {
      default:
        'Tari saman adalah tarian tradisional yang dimainkan suku Gayo. Tari saman telah tumbuh dan berkembang di Kabupten Gayo Lues, Aceh Tenggara, Aceh Timur (Kecamantan Serbejadi), Kabupaten Aceh Tamiang (Tamiang Hulu).',
    },
    gambar: {
        default: 'aceh.png'
    }
  },
  data() {
                return {
                    mainImage: String,
                }
            },
            mounted(){
                this.mainImage = "_nuxt/assets/images/tarian/"+this.image
            }
};
</script>
