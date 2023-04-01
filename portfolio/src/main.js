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
    routes,
    scrollBehavior (to) {
        // Scroll to a section part if anchor is present in the url
        if (to.hash) {
            console.log(to.hash);
            return {
                el: to.hash,
                behavior: 'smooth'
            }
        }
    }
});

vue.use(VueParticles);
vue.use(vuetify);
vue.use(router);
vue.config.productionTip = false;

vue.mount('#app');