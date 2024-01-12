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

  },
}
</script>
<template>
  <div>
    <Header />
    <Main />
  </div>
</template>
<style lang="scss" scoped>
@use './styles/generals.scss' as *;
</style>