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
    <!-- Card container -->
    <div class="row mt-5">

        <!-- Titolo e card dei film -->
        <h2 class="mt-5 " v-if="store.researched">Film</h2>
        <FilmCard v-for="film, index in store.filmsArray" :key="index" :film="film" />

        <!-- Titolo e card delle serie tv -->
        <h2 class="mt-5 " v-if="store.researched">Serie Tv</h2>
        <TvCard v-for="tv, index in store.tvArray" :key="index" :tv="tv" />
    </div>
</template>
<style lang="scss" scoped>
@use '../../styles/generals.scss' as *;
</style>