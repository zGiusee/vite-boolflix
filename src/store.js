import { reactive } from 'vue';

export const store = reactive({
    // EnnPoint  Themoviedb
    endpoint: ' https://api.themoviedb.org/3',

    // Chiavi che mi permettono di ricevere di ricercare le informazioni di film e serieTV
    apiSearchFlim: '/search/movie',
    apiSearchTv: '/search/tv',

    // Chiave che mi permette di avere accesso all'api
    apiKey: '?api_key=16370c316abef77df2df2315289dc9c5&language=it-IT',

    // Array delle informazioni dei film
    filmsArray: [],

    // Array delle informazioni delle serie tv
    tvArray: [],

    // Search textbox variable
    search: '',

    // Variabile che indica se l'utente abbia scelto con che profilo entrare
    selectedUser: true,

    usersInfo: [
        {
            name: 'Profilo 1',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117',
        },
        {
            name: 'Profilo 2',
            image: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg',
        },
        {
            name: 'Profilo 3',
            image: 'https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg',
        },
        {
            name: 'Profilo 4',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117',
        }
    ],

    // Variabile per l'indirizzo relativo delle immagini
    posterUrl: 'https://image.tmdb.org/t/p/w500'
})