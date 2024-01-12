<script>
import { store } from '../../store.js';

export default {
    name: 'FilmCard',
    props: {
        tv: Object,
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
            <p> {{ tv.name }}</p>
            <p> {{ tv.original_name }}</p>
            <p> {{ tv.original_language }}</p>
            <p> {{ tv.vote_average }} </p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../../styles/generals.scss' as *;
</style>