<script>
import { store } from '../store.js';

export default {
    name: 'Header',
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
    <header>
        <div class="container-fluid">
            <div class="row py-3">
                <div class="col-6">
                    <div>
                        <h1>BOOLFLIX</h1>
                    </div>
                </div>
                <div class="col-6">
                    <div class="right-header-side">
                        <input type="text" class="mx-3" v-model="store.search">
                        <button type="button" @click="" class="btn btn-sm btn-danger ">Search</button>
                    </div>
                </div>
            </div>
        </div>

    </header>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variable' as*;

header {
    background-color: $my_black;

    h1 {
        color: rgb(255, 0, 0);
    }

    .right-header-side {
        display: flex;
        align-items: center;
        justify-content: end;
        height: 100%;

        // ul {
        //     margin-bottom: 0;
        //     list-style-type: none;
        //     display: flex;
        // }
    }
}
</style>