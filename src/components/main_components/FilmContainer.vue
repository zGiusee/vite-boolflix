<script>
import FilmCard from '../main_components/FilmCard.vue';
import TvCard from '../main_components/TvCard.vue';

import { store } from '../../store.js';

export default {
    name: 'FilmContainer',
    components: {
        FilmCard,
        TvCard
    },
    data() {
        return {
            store,
        }
    },
    created() {

    },
    methods: {

    },
}
</script>
<template>
    <!-- Cards container -->

    <!-- Titolo e cards dei film -->
    <h2 class="pt-5 " v-if="store.filmsArray != 0 ? true : false">Film</h2>
    <div class="my-row-film-tv">
        <FilmCard v-for="film, index in store.filmsArray" :key="index" :film="film" />
    </div>


    <!-- Titolo e cards delle serie tv -->
    <h2 class="pt-5 " v-if="store.tvArray != 0 ? true : false">Serie Tv</h2>
    <div class="my-row-film-tv">
        <TvCard v-for="tv, index in store.tvArray" :key="index" :tv="tv" />
    </div>
</template>
<style lang="scss" scoped>
@use '../../styles/generals.scss' as *;

h2 {
    color: #fff;
    font-weight: bold;
    font-size: 50px;
    margin: 0px 25px;
}

.my-row-film-tv {
    height: 550px;
    overflow-x: scroll;
    align-items: center;
    flex-wrap: nowrap;
    overflow-y: hidden;
    display: flex;
    margin: 0px 25px;
}
</style>