<script>

import { store } from '../store.js';

export default {
    name: 'UserSelection',
    components: {
    },
    data() {
        return {
            store,

        }
    },
    created() {

    },
    methods: {
        selectedUser() {
            store.selectedUser = false;
        }

    },
}
</script>
<template>
    <!-- Container selezione profili -->
    <div class="container d-flex align-items-center  vh-100 ">

        <div class="row align-items-center justify-content-center  ">

            <!-- Titolo -->
            <div class="text-center my-4">
                <h1>Chi vuole guardare Netflix?</h1>
            </div>

            <!-- Profili -->
            <div class="col-2 text-center user" v-for="user, index in store.usersInfo" :key="index" @click="selectedUser()">
                <img :src="user.image" :alt="user.name">
                <h4 class="mt-3">{{ user.name }}</h4>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
@use '../styles/partials/variable' as *;

.user {
    cursor: pointer;

    img {
        height: 156px;
        width: 156px;
        border: 3px solid transparent;
        transition: all 0.1s;


        &:hover {
            border: 3px solid white;
        }
    }

}

h1,
h4 {
    color: #fff;
}
</style>