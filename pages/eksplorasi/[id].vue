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
      class="flex flex-col justify-end items-center p-20 min-h-[450px] leading-tight"
    >
      <h1 class="text-[#1F420F] font-bold uppercase text-[64px]">
        {{ prov.nama }}
      </h1>
      <p class="text-start text-[36px] font-semibold">{{ prov.ibukota }}</p>
    </div>
    <div class="container">
      <h1 class="text-4xl font-bold">HIDANGAN</h1>
    </div>
    <div class="flex p-20 justify-center relative w-full min-h-[600px]">
      <div class="">
        <HidanganExploreCard
          class="translate-x-[-200px] transition-transform"
          :rotate="`rotate-[10deg]`"
          :nama="prov.makanan[0].nama"
          :pembacaan="prov.makanan[0].noun"
          :penjelasan="prov.makanan[0].penjelasan"
          :gambar="prov.image.makanan[0]"
        />
      </div>
      <div class="">
        <HidanganExploreCard
          class="translate-x-[-400px]"
          :gambar="prov.image.makanan[1]"
          rotate="rotate-[-20deg]"
          :nama="prov.makanan[1].nama"
          :pembacaan="prov.makanan[1].noun"
          :penjelasan="prov.makanan[1].penjelasan"
        />
      </div>
      <div class="">
        <HidanganExploreCard
          class="translate-x-[-600px]"
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
      <TriviaExploreCard :nama="prov.nama" :quiz="prov.quiz" />
    </div>
    <Eksplorasi />
  </NuxtLayout>
</template>

<script setup>
import Eksplorasi from '~/components/Home/Eksplorasi.vue';
import arrayquiz from '~/data/arrayquiz.json';
import explore from '~/data/explore.json';

console.log(arrayquiz);
const route = useRoute();

var quiz = null;
var prov = null;

const getDataQuiz = (id) => {
  quiz = arrayquiz.data[id];
  prov = explore.data[id];
};

getDataQuiz(route.params.id);

if (quiz == undefined || prov == undefined) {
}
console.log(quiz);

// if(quiz == null){ this.$router.push('../')}
</script>

<script>
export default {
  mounted() {},
};
</script>
