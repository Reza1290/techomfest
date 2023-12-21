<template>
    <NuxtLayout>
        <div class="container">
            <TriviaExploreCard :nama="prov.nama" :quiz="prov.quiz" />
        </div>
    </NuxtLayout>

</template>


<script>
import explore from '~/data/explore.json';

export default {
    data() {
        return {
            prov: null
        };
    },
    methods: {
        getDataQuiz(id) {
            this.prov = explore.data[id];
        }
    },
    mounted: () => {
        this.getDataQuiz(2);
        console.log(this.prov)
    },
}
</script>

