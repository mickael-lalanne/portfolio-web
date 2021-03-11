import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
      iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    theme: {
        themes: {
            light: {
                primary: '#f9813a',
                secondary: '#956CF0',
                light: '#fcf1f1',
                light2: '#ffd5cd',
                dark: '#1a1c20'
            },
        },
        options: {
            customProperties: true,
        },
    },
});
