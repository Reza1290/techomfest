<template>
  <div class="container mx-auto p-10 grid grid-cols-3 gap-y-10 gap-x-28">
    <div
      v-for="data in data"
      :key="data.id"
      class="w-full rounded-3xl overflow-hidden bg-white shadow-2xl"
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
        <h1 class="text-center text-primary text-3xl font-bold py-2">
          {{ data.nama }}
        </h1>
      </div>
    </div>
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
    const { data, kategori } = props

    return {
      data,
      kategori,
    }
  },
}
</script>

<style></style>
