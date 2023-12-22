<template>
  <div
    class="container grid min-w-full grid-cols-2 py-10 mx-auto lg:grid-cols-3 gap-y-10 gap-x-5 lg:gap-x-28"
  >
    <NuxtLink
      v-for="data in data"
      :key="data.id"
      :to="`/kategori/${kategori}/${data.id}`"
      class="w-full overflow-hidden transition-all duration-300 bg-white shadow-2xl rounded-3xl hover:shadow-2xl hover:scale-105"
    >
      <img
        :src="`/_nuxt/assets/images/${kategori}/${data.gambar}.png`"
        :alt="data.nama"
        class="h-[160px] lg:h-[277px] w-full rounded-2xl object-cover"
      />
      <div class="p-5">
        <h4
          class="text-[#469951] text-center font-bold uppercase lg:text-base text-sm"
        >
          {{ data.asal }}
        </h4>
        <h1 class="py-2 text-xl font-bold text-center lg:text-3xl text-primary">
          {{ data.nama }}
        </h1>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    kategori: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { data, kategori } = props;

    return {
      data,
      kategori,
    };
  },
};
</script>

<style></style>
