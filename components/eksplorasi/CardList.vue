<template>
  <div
    class="container grid min-w-full grid-cols min-[850px]:grid-cols-2 min-[1400px]:grid-cols-3 min-[1700px]:grid-cols-4 py-10 gap-y-10 sm:gap-x-28 justify-center"
  >
    <!-- CARD START -->
    <NuxtLink
      v-for="(data, index) in datas"
      :key="data.id"
      :to="'eksplorasi/' + index"
      class="flex justify-center rounded-xl h-[203px] w-[337px] bg-cover bg-center relative cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
      :style="`background-image: url('/images/provinsi/banner/${data.image.banner}')`"
    >
      <div
        class="bg-white rounded-t-xl absolute bottom-0 w-[240px] h-[127px] flex flex-col justify-center items-center p-3 text-primary"
      >
        <div class="h-[63px] w-[50px] flex justify-center item-center">
          <NuxtImg
            class="object-contain max-w-full max-h-full"
            :src="`/images/provinsi/logo/${data.image.icon}`"
            alt="logo"
            loading="lazy"
          />
        </div>
        <h4 class="mt-2 text-xl font-bold text-center">{{ data.nama }}</h4>
      </div>
    </NuxtLink>
    <!-- CARD END -->
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Array,
      default: () => [],
    },
    kategori: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { datas, kategori } = props;

    return {
      datas,
      kategori,
    };
  },
};
</script>

<style></style>
