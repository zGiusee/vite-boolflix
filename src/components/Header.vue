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

                <!-- Left Header side -->
                <div class="col-6">

                    <div>
                        <img class="mx-3" src="../img/BoolflixImg.png" alt="Boolflix Logo">
                    </div>

                </div>

                <!-- Right Header side -->
                <div class="col-6">

                    <div class="right-header-side">

                        <!-- Searchbox and reasearch button -->
                        <input type="text" class="my_src" placeholder="Effettua una ricerca" v-model="store.search">
                        <button type="button" @click="$emit('perform_search')" class="my-btn mx-4 ">Search</button>
                    </div>

                </div>

            </div>
        </div>

    </header>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variable' as*;
@use '../styles/partials/mixins' as *;

header {
    background-color: $my_black;

    img {
        width: 150px;
    }

    .right-header-side {
        display: flex;
        align-items: center;
        justify-content: end;
        height: 100%;


        .my-btn {
            @include my_small_btn_red_white;
            padding: 9px 15px;
        }

        .my_src {
            height: 30px;
            width: 250px;
            padding: 20px 15px;
            margin-right: 20px;

            @include my_searchbox_red_white;
        }

        // ul {
        //     margin-bottom: 0;
        //     list-style-type: none;
        //     display: flex;
        // }
    }
}
</style>