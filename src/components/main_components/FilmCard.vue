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
            stars: [
                1, 2, 3, 4, 5
            ]
        }
    },
    created() {

    },
    computed: {
        // Funzione che mi fa ritornare la bandiera in base alla lingua del film
        // (Con delle condizioni, poiché l'api che utilizzo e l'array dei film hanno iniziali diverse per le nazioni)
        FlagUrl() {
            if (this.film.original_language.toUpperCase() == 'JA') {
                return `https://flagsapi.com/JP/flat/24.png`;
            }
            else if (this.film.original_language.toUpperCase() == 'KO') {
                return `https://flagsapi.com/KR/flat/24.png`;
            }
            else if (this.film.original_language.toUpperCase() == 'EN') {
                return `https://flagsapi.com/GB/flat/24.png`;
            }
            else if (this.film.original_language.toUpperCase() == 'ZH') {
                return `https://flagsapi.com/CN/flat/24.png`;
            }
            else {
                return `https://flagsapi.com/${this.film.original_language.toUpperCase()}/flat/24.png`
            }

        },
        // Funzione che recupera l'url delle immagini provenienti dall'api
        posterUrl() {
            return `${this.store.posterUrl}${this.film.poster_path}`
        },
        // Funzione che trasforma il voto medio in stelline che vanno da 1 a 5
        starRating() {
            let starRating = this.film.vote_average.toFixed() / 2;

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
    <div class="col-2 m-2 card-container">

        <div class="card">

            <!-- Card Front -->
            <div class="card-img-container">
                <img :src="posterUrl" alt="">
            </div>

            <!-- Card retro -->
            <div class="card-retro-container">
                <!-- Titolo della Film -->
                <div>
                    <h4> {{ film.title }}</h4>
                </div>

                <!-- Titolo originale del film -->
                <div>
                    <h5> {{ film.original_title }}</h5>
                </div>

                <!-- Overview del film -->
                <div>
                    <p>{{ film.overview }}</p>
                </div>

                <!-- Lingua del film (in formato bandiera) -->
                <div>
                    <img class="flag-img" :src="FlagUrl" :alt="film.original_language" />
                </div>

                <!-- Voto medio del film numerico e stelline -->
                <div>
                    <p>Recensioni: <i class="bi bi-star-fill" v-for="star, index in stars"></i> {{ starRating }}/5 </p>
                </div>

            </div>

        </div>

    </div>
</template>
<style lang="scss" scoped>
@use '../../styles/generals.scss' as *;
@use '../../styles/partials/mixins' as *;

// STILE DELLE CARDS
@use '../../styles/partials/card' as*;

.bi-star-fill {
    color: white;
    padding: 0px 2px;
}
</style>