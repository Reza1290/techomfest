<template>
  <div class="container grid min-w-full grid-cols-4 py-10 gap-y-10 gap-x-28">
    <!-- CARD START -->
    <div
      v-for="data in datas"
      :key="data.id"
      class="flex justify-center rounded-xl h-[203px] w-[337px] bg-cover bg-center bg-[url('~/assets/provinsi/banner/jatim.jpeg')] relative cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <div
        class="bg-white rounded-t-xl absolute bottom-0 w-[240px] h-[127px] flex flex-col justify-center items-center p-3 text-primary"
      >
        <div class="h-[63px] w-[50px] flex justify-center item-center">
          <img
            class="max-w-full max-h-full"
            src="`~/assets/provinsi/logo/jatim.png`"
            alt="logo"
          />
        </div>
        <h4 class="mt-2 text-xl font-bold text-center">{{ data.nama }}</h4>
      </div>
    </div>
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
