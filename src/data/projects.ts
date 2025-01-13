import javaProject from '../assets/projects/javaProject.webp'
import loanProject from '../assets/projects/loanProject.webp'
import washProject from '../assets/projects/washProject.webp'
import veganProject from '../assets/projects/veganProject.webp'
import pokemonProject from '../assets/projects/pokemonProject.webp'

export interface Project {
  title: string
  description: string
  technologies: string[]
  image: string
  githubUrl: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description:
      'A full-featured e-commerce platform built with React and Node.js. Includes user authentication, product management, and payment processing.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    image: javaProject,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    image: loanProject,
    githubUrl: 'https://github.com',
  },
  {
    title: 'Weather Dashboard',
    description:
      'A weather dashboard that displays current weather conditions and forecasts for multiple locations using weather API integration.',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
    image: washProject,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },

  {
    title: 'E-commerce Platform',
    description:
      'A full-featured e-commerce platform built with React and Node.js. Includes user authentication, product management, and payment processing.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    image: veganProject,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },

  {
    title: 'E-commerce Platform',
    description:
      'A full-featured e-commerce platform built with React and Node.js. Includes user authentication, product management, and payment processing.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    image: pokemonProject,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
]
