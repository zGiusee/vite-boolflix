import { reactive } from 'vue';

export const store = reactive({
    // EnnPoint  Themoviedb
    endpoint: ' https://api.themoviedb.org/3',

    // Chiavi che mi permettono di ricevere di ricercare le informazioni di film e serieTV
    apiSearchFlim: '/search/movie',
    apiSearchTv: '/search/tv',

    // Chiave che mi permette di avere accesso all'api
    apiKey: '?api_key=16370c316abef77df2df2315289dc9c5',

    // Array delle informazioni dei film
    filmsArray: [],

    // Array delle informazioni delle serie tv
    tvArray: [],

    // Search textbox variable
    search: '',

    // Variabile che indica se la ricerca sia stata effettuata o no
    researched: false,

    // Variabile per l'indirizzo relativo delle immagini
    posterUrl: 'https://image.tmdb.org/t/p/w500'
})