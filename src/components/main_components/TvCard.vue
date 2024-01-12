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
        }
    },
    created() {

    },
    computed: {
        // Funzione che mi fa ritornare la bandiera in base alla lingua della serieTv
        // (Con delle condizioni, poiché l'api che utilizzo e l'array delle serieTv hanno iniziali diverse per le nazioni)
        FlagUrl() {
            if (this.tv.original_language.toUpperCase() == 'JA') {
                return `https://flagsapi.com/JP/shiny/24.png`;
            }
            else if (this.tv.original_language.toUpperCase() == 'KO') {
                return `https://flagsapi.com/KR/shiny/24.png`;
            }
            else if (this.tv.original_language.toUpperCase() == 'EN') {
                return `https://flagsapi.com/GB/shiny/24.png`;
            }
            else if (this.tv.original_language.toUpperCase() == 'ZH') {
                return `https://flagsapi.com/CN/shiny/24.png`;
            }
            else {
                return `https://flagsapi.com/${this.tv.original_language.toUpperCase()}/shiny/24.png`
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
            <!-- titolo della serieTv -->
            <p> {{ tv.name }}</p>

            <!-- titolo originale della serieTv -->
            <p> {{ tv.original_name }}</p>

            <!-- Lingua della serieTv (in formato bandiera) -->
            <img :src="FlagUrl" :alt="tv.original_language" />

            <!-- Voto medio della serieTv -->
            <p> {{ tv.vote_average }} </p>
        </div>

    </div>
</template>
<style lang="scss" scoped>
@use '../../styles/generals.scss' as *;
</style>