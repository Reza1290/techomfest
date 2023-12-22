<template>
  <div
    :class="`absolute z-1 min-w-full min-h-[500px] -mt-[6%] flex justify-center items-center bg-cover bg-center `"
    :style="`
      mask-image: linear-gradient(white, transparent);
      -webkit-mask-image: linear-gradient(white, transparent);
      background-image: url('/images/provinsi/banner/${prov.image.banner}');
    `"
  ></div>
  <NuxtLayout>
    <div
      class="flex flex-col justify-end items-center py-20 min-h-[450px] leading-tight"
    >
      <h1 class="text-[#1F420F] font-bold uppercase text-[64px] max-md:text-[40px] text-center">
        {{ prov.nama }}
      </h1>
      <p class="text-start text-[36px] max-md:text-[30px] font-semibold">{{ prov.ibukota }}</p>
    </div>
    <div class="container">
      <h1 class="text-4xl font-bold max-md:text-3xl max-md:text-center">HIDANGAN</h1>
    </div>
    <div class="flex p-20 justify-center relative w-full min-h-[600px] max-md:min-h-[1000px] max-md:overflow-x-hidden overflow-x-hidden">
      <div class="w-96 h-96 -right-36 top-0 blob "></div>
      <div class="">
        <HidanganExploreCard
          class="translate-x-[-200px] max-xl:translate-x-[-100px] max-md:translate-x-[-150px] max-md:translate-y-[0px] on-transform"
          :rotate="`rotate-[10deg]`"
          :nama="prov.makanan[0].nama"
          :pembacaan="prov.makanan[0].noun"
          :penjelasan="prov.makanan[0].penjelasan"
          :gambar="prov.image.makanan[0]"
        />
      </div>
      <div class="">
        <HidanganExploreCard
          class="translate-x-[-400px] max-xl:translate-x-[-200px]  max-md:translate-x-[-150px] max-md:translate-y-[150px] tansition-transform"
          :gambar="prov.image.makanan[1]"
          rotate="rotate-[-20deg]"
          :nama="prov.makanan[1].nama"
          :pembacaan="prov.makanan[1].noun"
          :penjelasan="prov.makanan[1].penjelasan"
        />
      </div>
      <div class="">
        <HidanganExploreCard
          class="translate-x-[-600px] max-xl:translate-x-[-300px] max-md:translate-x-[-150px] max-md:translate-y-[250px] transition-transform"
          :gambar="prov.image.makanan[2]"
          rotate="rotate-[5deg]"
          :nama="prov.makanan[2].nama"
          :pembacaan="prov.makanan[2].noun"
          :penjelasan="prov.makanan[2].penjelasan"
        />
      </div>
    </div>
    <div class="mb-[500px]">
      
      <TarianExploreCard
        :nama="prov.tarian.nama"
        :penjelasan="prov.tarian.penjelasan"
        :image="prov.image.tarian"
      />
    </div>
    <div class="container">
      <div class="w-96 h-96 -left-36 blob"></div>

      <TriviaExploreCard :nama="prov.nama" :quiz="prov.quiz" />
    </div>
    <Eksplorasi />
  </NuxtLayout>
</template>

<script setup>
import Eksplorasi from "~/components/Home/Eksplorasi.vue"
import arrayquiz from "~/data/arrayquiz.json"
import explore from "~/data/explore.json"

const route = useRoute()

var quiz = null
var prov = null

const getDataQuiz = (id) => {
  quiz = arrayquiz.data[id]
  prov = explore.data[id]
}

getDataQuiz(route.params.id)

if (quiz == undefined || prov == undefined) {
}

// if(quiz == null){ this.$router.push('../')}
</script>

<script>
export default {
  mounted() {},
}
</script>
