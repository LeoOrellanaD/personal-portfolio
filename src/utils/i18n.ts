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
      exp_tittle1: 'Desarrollador de Software',
      exp_company1: 'CIM UBB',
      exp_period1: 'Mayo 2021 - Agosto 2021',
      exp_description1: `Desarrollo de una aplicación de escritorio en Java para la gestión
                   de máquinas y centralización de cálculos probabilísticos.|Desarrollo de lógica cliente-servidor con comunicación TCP/IP
                   para registrar equipos, realizar cálculos y almacenarlos.`,

      exp_tittle2: 'Desarrollador Full Stack',
      exp_company2: 'FACE UBB',
      exp_period2: 'Abril 2023 - Septiembre 2023',
      exp_description2: `Desarrollo de una aplicación web para gestionar el préstamo de equipos del laboratorio, abarcando todo el proceso desde la
                         solicitud hasta la entrega, además de la administración de usuarios, equipos e historiales.| La aplicación fue creada desde 
                         cero utilizando Next.js, Material UI, Node.js, Express y PostgreSQL. Se implementó control de versiones con Git para garantizar 
                         un desarrollo organizado y colaborativo.`,
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
      exp_tittle1: 'Software Developer',
      exp_company1: 'CIM UBB',
      exp_period1: 'May 2021 - August 2021',
      exp_description1: `Developed a desktop application in Java for machine management and centralization of probabilistic calculations.|Developed client-server logic with TCP/IP communication to register equipment, perform calculations, and store them.`,
      exp_tittle2: 'Full Stack Developer',
      exp_company2: 'FACE UBB',
      exp_period2: 'April 2023 - September 2023',
      exp_description2: `Developed a web application to manage the loan of laboratory equipment, covering the entire process from request to delivery, as well as user, equipment, and history management.|The application was created from scratch using Next.js, Material UI, Node.js, Express, and PostgreSQL. Version control was implemented with Git to ensure organized and collaborative development.`,
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
