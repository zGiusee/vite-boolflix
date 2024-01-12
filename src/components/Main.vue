<script>
import FilmContainer from './main_components/FilmContainer.vue';

import { store } from '../store.js';

export default {
    name: 'Main',
    components: {
        FilmContainer
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
    <div>
        <FilmContainer />

    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
</style>