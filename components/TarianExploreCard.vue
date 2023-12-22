<template>
  <div class="flex justify-end min-h-[300px] relative group mx-auto">
    <div
      class="flex flex-col items-end justify-start bg-secondary rounded-l-[50px] absolute sm:min-h-[400px] max-sm:h-max max-w-[45%] w-full max-xl:max-w-[80%]  px-10 py-7 text-end transition-transform"
    >
      <h1 class="text-[52px] font-bold uppercase max-md:text-[30px]">{{ nama }}</h1>
      <p
        class="font-medium line-clamp-6 max-w-[65%] max-sm:max-w-full text-justify group-hover:line-clamp-none group-hover:line-clamp-10"
      >{{ penjelasan }}</p>
    </div>
    <img
      :src="mainImage"
      class="group-hover:scale-95  max-sm:group-hover:max-md:mt-[400px]  mt-[200px] mr-[200px] max-sm:mr-0 group-hover:left-20 max-sm:group-hover:left-0  max-md:right-0 absolute max-sm: bg-cover rounded-full transition-transform"
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
    image: {
        default: 'aceh.png'
    }
  },
  data() {
                return {
                    mainImage: String,
                }
            },
            mounted(){
                this.mainImage = "/images/tarian/"+this.image
            }
};
</script>
