<template>
  <div
    class="container grid min-w-full grid-cols-3 py-10 mx-auto gap-y-10 gap-x-28"
  >
    <NuxtLink
      v-for="data in data"
      :key="data.id"
      :to="`/kategori/hidangan/${data.nama}`"
      class="w-full overflow-hidden bg-white shadow-2xl rounded-3xl"
    >
      <img
        :src="`_nuxt/assets/images/${kategori}/${data.gambar}.jpeg`"
        :alt="data.nama"
        class="h-[277px] w-full rounded-2xl"
      />
      <div class="p-5">
        <h4 class="text-[#469951] text-center font-bold uppercase">
          {{ data.asal }}
        </h4>
        <h1 class="py-2 text-3xl font-bold text-center text-primary">
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
