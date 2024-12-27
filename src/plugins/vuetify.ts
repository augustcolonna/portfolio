import 'vuetify/styles';
import '@/styles/_colors.scss';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#2d3047', // $dark-purple
          secondary: '#e3e7e7', // $platinum
          info: '#3a9ad1', // $celestial-blue
          background: '#2d3047', // $dark-purple
          surface: '#3e404f', // $dark-grey-purple
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});
