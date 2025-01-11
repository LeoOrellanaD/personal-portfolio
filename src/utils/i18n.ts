import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  es: {
    translation: {
      home: 'Inicio',
      projects: 'Proyectos',
      experience: 'Experiencia',
      about: 'Acerca de Mi',
      profesion: 'Ingeniero Civil en Informática',
      short_description:
        'Desarrollador de Software con experiencia en el desarrollo de aplicaciones web . Apasionado por la tecnología y la programación. Actualmente en busqueda de mi primera oportunidad laboral.',
      experience_tittle: 'Experiencia Laboral ',
    },
  },
  en: {
    translation: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      about: 'About Me',
      profesion: 'Computer Science Engineer',
      short_description:
        'Software Developer with experience in web applications development. Passionate about technology and programming. Currently looking for my first job opportunity.',
      experience_tittle: 'Work Experience',
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



