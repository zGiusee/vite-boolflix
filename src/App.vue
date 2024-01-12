<script>
import axios from 'axios';

import Main from './components/Main.vue';
import Header from './components/Header.vue';

import { store } from './store.js';

export default {
  name: 'App',
  components: {
    Header,
    Main,
  },
  data() {
    return {
      store,
    }
  },
  created() {

  },
  methods: {
    getFilmsInfo() {

      // Dichiaro la variabile dell api
      let api = store.endpoint;

      // Aggiungo all'api una variabile per fare la ricerca dei film
      api += store.apiSearchFlim;

      // Aggiungo alla chiamata api la chiave per far si che riceva l'accesso e il parametro di ricerca
      api += `${store.apiKey}&query=${store.search}`;

      axios.get(api).then((response) => {
        store.filmsArray = response.data.results
        console.log(response)
      });
    }
  },
}
</script>
<template>
  <div>
    <Header @perform_search="getFilmsInfo" />
    <Main />
  </div>
</template>
<style lang="scss" scoped>
@use './styles/generals.scss' as *;
</style>