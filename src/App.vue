<script>
import axios from 'axios';

import Main from './components/Main.vue';
import Header from './components/Header.vue';
import UserSelection from './components/UserSelection.vue';

import { store } from './store.js';

export default {
  name: 'App',
  components: {
    Header,
    Main,
    UserSelection
  },
  data() {
    return {
      store,
    }
  },
  created() {

  },
  methods: {
    getFilmsAndTvInfo() {

      // ********** CHIAMATA API Film **************
      // Dichiaro la variabile dell apiFilms
      let apiFilms = store.endpoint;

      // Aggiungo all'apiFilms una variabile per fare la ricerca dei film
      apiFilms += store.apiSearchFlim;

      // Aggiungo alla chiamata apiFilms la chiave per far si che riceva l'accesso e il parametro di ricerca
      apiFilms += `${store.apiKey}&query=${store.search}`;

      axios.get(apiFilms).then((response) => {
        store.filmsArray = response.data.results;
        console.log(store.filmsArray)
      });



      // ********** CHIAMATA API SerieTv **************
      // Dichiaro la variabile dell apiTv
      let apiTv = store.endpoint;

      // Aggiungo all'apiTv una variabile per fare la ricerca delle serieTv
      apiTv += store.apiSearchTv;

      // Aggiungo alla chiamata apiTv la chiave per far si che riceva l'accesso e il parametro di ricerca
      apiTv += `${store.apiKey}&query=${store.search}`;

      axios.get(apiTv).then((response) => {
        store.tvArray = response.data.results;
        console.log(store.tvArray)
      });

    },
  },
}
</script>
<template>
  <div>

    <transition name="slide-up">

      <div v-if="store.selectedUser" class="main-style">
        <!-- SELEZIONE UTENTE -->
        <UserSelection></UserSelection>
      </div>

      <div v-else>
        <!-- HEADER -->
        <Header @perform_search="getFilmsAndTvInfo" />

        <!-- MAIN -->
        <div class="main-style">
          <Main />
        </div>
      </div>

    </transition>

  </div>
</template>
<style lang="scss" scoped>
@use './styles/generals.scss' as *;
@use './styles/partials/variable' as*;

.main-style {
  background-color: $my_black_lig;
  min-height: 100vh;

}

// PROPRIETà ANIMAZIONE
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>