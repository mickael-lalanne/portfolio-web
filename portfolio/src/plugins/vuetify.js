import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import 'vuetify/styles';

// Your own translation file
import en from '@/locales/en';
import fr from '@/locales/fr';

export default createVuetify({
    locale: {
        locale: 'fr',
        messages: { fr, en }
    },
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
