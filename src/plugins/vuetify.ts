/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Composables
import { createVuetify } from 'vuetify'
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#6B4226',
          secondary: '#8C6239',
          tertiary: '#C9962C',
          accent: '#C9962C',
          background: '#FAF6F0',
          surface: '#FFFFFF',
          error: '#B3261E',
          info: '#3A6EA5',
          success: '#3F7D4C',
          warning: '#B8860B',
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: '#C9962C',
          secondary: '#B98554',
          tertiary: '#6B4226',
          accent: '#C9962C',
          background: '#1C1815',
          surface: '#262019',
          error: '#CF6679',
          info: '#7FA6D6',
          success: '#7FBF8C',
          warning: '#D9A93E',
        },
      },
    },
  },
})
