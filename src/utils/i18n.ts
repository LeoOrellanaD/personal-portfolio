import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  es: {
    translation: {
      'home': 'Inicio',
      'projects': 'Proyectos',
      'experience': 'Experiencia',
      'about': 'Acerca de Mi',
    },
  },
  en: {
    translation: {
      'home': 'Home',
      'projects': 'Projects',
      'experience': 'Experience',
      'about': 'About Me',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
