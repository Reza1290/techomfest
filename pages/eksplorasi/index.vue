<template>
  <NavbarDark></NavbarDark>
  <main id="main-content" class="py-10 pb-36 px-[10px] md:px-[101px]">
    <h1 class="text-5xl font-bold text-center text-primary">
      Eksplorasi budaya tiap provinsi
    </h1>
    <div class="flex justify-end w-full mx-auto mt-8">
      <div class="relative text-gray-600">
        <input
          type="search"
          name="serch"
          placeholder="Search"
          class="bg-white h-10 px-5 pr-10 rounded-2xl border-2 border-[#1F420F] text-sm focus:outline-none"
        />
        <button type="submit" class="absolute top-0 right-0 mt-3 mr-4">
          <svg
            class="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style="enable-background: new 0 0 56.966 56.966"
            xml:space="preserve"
            width="512px"
            height="512px"
          >
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
            />
          </svg>
        </button>
      </div>
    </div>
    <section id="card-provinsi">
      <CardList :datas="provinsi" :kategori="`provinsi`"></CardList>
    </section>
  </main>
  <Footer></Footer>
</template>

<script>
import explore from '~/data/explore.json';
import CardList from '../../components/eksplorasi/CardList.vue';

const provinsi = explore.data

export default {
  setup() {
    return {
      provinsi,
    };
  },
  components: { CardList },
};
</script>

<style></style>
