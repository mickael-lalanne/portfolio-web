import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
          primary: '#CC5803',
          secondary: '#F7934C',
          tertiary: '#F7B05B',
          lighter: '#FFC15E',
          darker: '#332817'
        },
      },
      options: {
        customProperties: true,
      },
    },
});
