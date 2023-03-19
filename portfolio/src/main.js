import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueParticles from 'vue-particles';

const vue = createApp(App);

vue.use(VueParticles);
vue.use(vuetify);
vue.config.productionTip = false;

vue.mount('#app');