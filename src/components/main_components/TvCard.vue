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
            stars: [
                1, 2, 3, 4, 5
            ]
        }
    },
    created() {

    },
    computed: {
        // Funzione che mi fa ritornare la bandiera in base alla lingua della serieTv
        // (Con delle condizioni, poiché l'api che utilizzo e l'array delle serieTv hanno iniziali diverse per le nazioni)
        FlagUrl() {
            if (this.tv.original_language.toUpperCase() == 'JA') {
                return `https://flagsapi.com/JP/flat/24.png`;
            }
            else if (this.tv.original_language.toUpperCase() == 'KO') {
                return `https://flagsapi.com/KR/flat/24.png`;
            }
            else if (this.tv.original_language.toUpperCase() == 'EN') {
                return `https://flagsapi.com/GB/flat/24.png`;
            }
            else if (this.tv.original_language.toUpperCase() == 'ZH') {
                return `https://flagsapi.com/CN/flat/24.png`;
            }
            else {
                return `https://flagsapi.com/${this.tv.original_language.toUpperCase()}/flat/24.png`
            }

        },
        // Funzione che recupera l'url delle immagini provenienti dall'api
        posterUrl() {
            return `${this.store.posterUrl}${this.tv.poster_path}`
        },
        // Funzione che trasforma il voto medio in stelline che vanno da 1 a 5
        starRating() {
            let starRating = this.tv.vote_average.toFixed() / 2;

            // Arrotondo per eccesso partendo dal valore della varibile
            starRating = Math.ceil(starRating);

            this.stars.splice(starRating, 5);

            return starRating

        },

    },
}
</script>
<template>
    <!-- Contenitore della card -->
    <div class="col-2 my-4 ">

        <div class="card-img-container">
            <img :src="posterUrl" alt="">
        </div>

        <!-- Card -->
        <div class="card_container">
            <!-- titolo della serieTv -->
            <h4> {{ tv.name }}</h4>

            <!-- titolo originale della serieTv -->
            <h5> {{ tv.original_name }}</h5>

            <div>
                <!-- Lingua della serieTv (in formato bandiera) -->
                <img class="flag-img" :src="FlagUrl" :alt="tv.original_language" />
            </div>

            <div>
                <!-- Voto medio della serieTv numerico e stelline-->
                <p>Recensioni: <i class="bi bi-star-fill" v-for="star, index in stars"></i> {{ starRating }}/5 </p>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
@use '../../styles/generals.scss' as *;
@use '../../styles/partials/mixins' as *;


.card_container {
    @include card_properties;
}

.card-img-container {
    @include card_poster_properties;
}

.bi-star-fill {
    color: white;
    padding: 0px 2px;
}
</style>