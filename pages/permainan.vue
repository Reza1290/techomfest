<template>
  <NavbarDark class="hidden lg:flex"></NavbarDark>
  <NavbarMobileDark class="lg:hidden"></NavbarMobileDark>
    <div class="container">
      <TriviaExploreCard
        :nama="prov ? prov.nama : ''"
        :quiz="prov ? prov.quiz : ''"
      />
    </div>
  <Footer></Footer>
</template>

<script>
import explore from '~/data/explore.json';

export default {
  props: {},
  data() {
    return {
      prov: null,
    };
  },
  methods: {
    getDataQuiz(id) {
      this.prov = explore.data[id];
    },
  },
  mounted() {
    this.getDataQuiz(Math.floor(Math.random() * 37));
  },
};
</script>
