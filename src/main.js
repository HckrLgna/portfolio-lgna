import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import i18n from './dictionary';

// Añade todos los iconos sólidos a la biblioteca
library.add(fas);

const app = createApp(App);

// Registra el componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(store)
    .use(router)
    .use(i18n)
    .mount('#app')
