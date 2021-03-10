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
                primary: '#f0f5f9',
                secondary: '#c9d6df',
                tertiary: '#52616b',
                lighter: '#EEF5DB',
                darker: '#4F6367',
                // primary: '#CC5803',
                // secondary: '#F7934C',
                // tertiary: '#F7B05B',
                // lighter: '#FFC15E',
                // darker: '#332817',
                //  -  -  -  -  

                background: 'f0f5f9'
            },
        },
        options: {
            customProperties: true,
        },
    },
});
