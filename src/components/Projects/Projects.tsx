import ProjectItem from '../Projects/components/ProjectItem'
import { projects } from '@data/projects'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation()
  return (
    <section className='py-20 px-4' id='projects'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-primary-dark dark:text-primary-light mb-12 text-center'>
        {t('projects_tittle')}
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
