import { Github, ExternalLink } from 'lucide-react'
import { Project } from '@data/projects'

const ProjectItem = ({
  title,
  description,
  technologies,
  image,
  githubUrl,
  liveUrl,
}: Project) => {
  return (
    <div className='bg-white dark:bg-primary-dark/20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
      <div className='h-48 overflow-hidden'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
        />
      </div>
      <div className='p-6'>
        <h3 className='text-xl font-semibold text-primary-dark dark:text-primary-light mb-2'>
          {title}
        </h3>
        <p className='text-primary-dark/80 dark:text-primary-light/80 mb-4'>
          {description}
        </p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {technologies.map((tech, index) => (
            <span
              key={index}
              className='px-3 py-1 text-sm rounded-full bg-primary-accent/10 text-primary-accent font-semibold '
            >
              {tech}
            </span>
          ))}
        </div>
        <div className='flex gap-4'>
          <a
            href={githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1 text-primary-dark hover:text-primary-highlight dark:text-primary-light dark:hover:text-primary-highlight transition-colors'
          >
            <Github size={18} />
            <span>Code</span>
          </a>
          {liveUrl && (
            <a
              href={liveUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-1 text-primary-dark hover:text-primary-highlight dark:text-primary-light dark:hover:text-primary-highlight transition-colors'
            >
              <ExternalLink size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectItem
