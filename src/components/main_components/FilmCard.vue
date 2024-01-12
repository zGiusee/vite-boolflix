<script>
import { store } from '../../store.js';

export default {
    name: 'FilmCard',
    props: {
        film: Object,
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
    <div class="col-3 my-3">

        <div>
            <p> {{ film.title }}</p>
            <p> {{ film.original_title }}</p>
            <p> {{ film.original_language }}</p>
            <p> {{ film.vote_average }} </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../../styles/generals.scss' as *;
</style>