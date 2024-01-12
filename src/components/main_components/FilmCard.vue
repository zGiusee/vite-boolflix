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
    computed: {
        // Funzione che mi fa ritornare la bandiera in base alla lingua del film
        // (Con delle condizioni, poiché l'api che utilizzo e l'array dei film hanno iniziali diverse per le nazioni)
        FlagUrl() {
            if (this.film.original_language.toUpperCase() == 'JA') {
                return `https://flagsapi.com/JP/shiny/24.png`;
            }
            else if (this.film.original_language.toUpperCase() == 'KO') {
                return `https://flagsapi.com/KR/shiny/24.png`;
            }
            else if (this.film.original_language.toUpperCase() == 'EN') {
                return `https://flagsapi.com/GB/shiny/24.png`;
            }
            else if (this.film.original_language.toUpperCase() == 'ZH') {
                return `https://flagsapi.com/CN/shiny/24.png`;
            }
            else {
                return `https://flagsapi.com/${this.film.original_language.toUpperCase()}/shiny/24.png`
            }

        }
    },
}
</script>
<template>
    <!-- Contenitore della card -->
    <div class="col-3 my-3">

        <!-- Card -->
        <div>
            <!-- Titolo della Film -->
            <p> {{ film.title }}</p>

            <!-- Titolo originale del film -->
            <p> {{ film.original_title }}</p>

            <!-- Lingua del film (in formato bandiera) -->
            <img :src="FlagUrl" :alt="film.original_language" />

            <!-- Voto del film medio  -->
            <p> {{ film.vote_average }} </p>
        </div>

    </div>
</template>
<style lang="scss" scoped>
@use '../../styles/generals.scss' as *;
</style>