import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueParticles from 'vue-particles';
import { createRouter, createWebHistory } from 'vue-router';

const vue = createApp(App);

// ROUTER
const routes = [
    {
        path: '/',
        component: App,
        queryParameters: {
            lang: {
                name: 'lang',
                values: { fr: 'fr', en: 'en' }
            }
        }
    }
];
const router = createRouter({
    history: createWebHistory('/'),
    routes
});

vue.use(VueParticles);
vue.use(vuetify);
vue.use(router);
vue.config.productionTip = false;

vue.mount('#app');