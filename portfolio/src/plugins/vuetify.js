import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import 'vuetify/styles';

export default createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
    theme: {
        variations: {
            colors: ['primary', 'secondary'],
        },
        defaultTheme: 'portfolioTheme',
        themes: {
            portfolioTheme: {
                colors: {
                    primary: '#f9813a',
                    secondary: '#956CF0',
                    secondaryHover: '#4F00FF',
                    light: '#fcf1f1',
                    light2: '#ffd5cd',
                    dark: '#1a1c20'
                }
            }
        }
    }
});
