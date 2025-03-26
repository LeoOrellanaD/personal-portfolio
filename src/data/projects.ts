import javaProject from '../assets/projects/javaProject.webp'
import loanProject from '../assets/projects/loanProject.webp'
import washProject from '../assets/projects/washProject.webp'
import veganProject from '../assets/projects/veganProject.webp'
import pokemonProject from '../assets/projects/pokemonProject.webp'
import backend from '../assets/projects/backend.webp'

export interface Project {
  titleKey: string
  descriptionKey: string
  technologies: string[]
  image: string
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    titleKey: 'MyProjects.javaAplication.title',
    descriptionKey: 'MyProjects.javaAplication.description',
    technologies: ['Java', 'JavaSwing'],
    image: javaProject,
  },
  {
    titleKey: 'MyProjects.LabAplication.title',
    descriptionKey: 'MyProjects.LabAplication.description',
    technologies: [
      'Next.js',
      'Material UI',
      'Node.js',
      'Express',
      'PostgreSQL',
    ],
    image: loanProject,
  },
  {
    titleKey: 'MyProjects.LaundryAplication.title',
    descriptionKey: 'MyProjects.LaundryAplication.description',
    technologies: ['Next.js', 'Chakra UI', 'Node.js', 'Express', 'PostgreSQL'],
    image: washProject,
    githubUrl: 'https://github.com/LeoOrellanaD/Ingenieria-software',
  },

  {
    titleKey: 'MyProjects.VeganAplication.title',
    descriptionKey: 'MyProjects.VeganAplication.description',
    technologies: [
      'Next.js',
      'Material UI',
      'Node.js',
      'Express',
      'PostgreSQL',
    ],
    image: veganProject,
    githubUrl: 'https://github.com/RobArrCon/GPS-Group2',
  },

  {
    titleKey: 'MyProjects.PokedexAplication.title',
    descriptionKey: 'MyProjects.PokedexAplication.description',
    technologies: ['Angular', 'PokéAPI'],
    image: pokemonProject,
    githubUrl: 'https://github.com/LeoOrellanaD/Pokedex4gen-Angular',
  },
  {
    titleKey: 'MyProjects.LibrosAplication.title',
    descriptionKey: 'MyProjects.LibrosAplication.description',
    technologies: [
      'Java',
      'SpringBoot',
      'Hibernate',
      'PostgreSQL',
      'Gutendex-API',
    ],
    image: backend,
    githubUrl: 'https://github.com/LeoOrellanaD/Libros-Api-Challenge-One',
  },
  {
    titleKey: 'MyProjects.ForoAplication.title',
    descriptionKey: 'MyProjects.ForoAplication.description',
    technologies: [
      'Java',
      'SpringBoot',
      'Spring Security',
      'JWT ',
      'Hibernate',
      'MySQL',
    ],
    image: backend,
    githubUrl: 'https://github.com/LeoOrellanaD/Foro-ApiRest-Challenge-One',
  },
]
