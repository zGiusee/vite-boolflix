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
                <div class="col-6 left-header-side">

                    <div class="d-flex align-items-center ">
                        <!-- Logo -->
                        <div>
                            <img class="mx-3" src="../img/BoolflixImg.png" alt="Boolflix Logo">
                        </div>

                        <!-- Section link list -->
                        <div>
                            <ul>
                                <li>Home</li>
                                <li>Serie TV</li>
                                <li>Film</li>
                                <li>Nuovi e popolari</li>
                                <li>La mia lista</li>
                                <li>Sfoglia per lingua</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <!-- Right Header side -->
                <div class="col-6">

                    <div class="right-header-side">

                        <div>
                            <!-- Searchbox and reasearch button -->
                            <i class="bi bi-search "></i>
                            <input type="text" class="my_src" @keyup.enter="$emit('perform_search')"
                                placeholder="Effettua una ricerca" v-model="store.search">
                        </div>
                        <div>
                            <ul>
                                <li>

                                </li>
                            </ul>
                        </div>
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

    .left-header-side {

        ul {
            display: flex;
            margin: 0px;
            list-style-type: none;

            li {
                color: rgba(255, 255, 255, 0.7);
                cursor: pointer;
                padding: 0px 7px;

                &:hover {
                    color: white;

                }
            }
        }



    }

    .right-header-side {
        display: flex;
        align-items: center;
        justify-content: end;
        height: 100%;

        .bi-search {
            color: white;
            margin-right: 15px;
            font-size: 20px
        }


        .my-btn {
            @include my_small_btn_red_white;
            padding: 9px 15px;
        }

        .my_src {
            height: 30px;
            width: 200px;
            padding: 17px 15px;
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