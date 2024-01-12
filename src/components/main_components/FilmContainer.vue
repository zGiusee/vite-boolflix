<script>
import FilmCard from '../main_components/FilmCard.vue';

import { store } from '../../store.js';

export default {
    name: 'FilmContainer',
    components: {
        FilmCard,
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
    <div class="row mt-5">
        <FilmCard v-for="film, index in store.filmsArray" :key="index" :film="film" />
    </div>
</template>
<style lang="scss" scoped>
@use '../../styles/generals.scss' as *;
</style>