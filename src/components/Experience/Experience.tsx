import ExperienceProps from '../../types/Experience'
import { ExperienceItem } from './components/ExperienceItem'
import { useTranslation } from 'react-i18next'

const experiences: ExperienceProps[] = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Solutions Inc.',
    period: '2021 - Present',
    description:
      'Led development of enterprise-scale applications using React and Node.js. Managed a team of 5 developers and implemented CI/CD pipelines.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Innovations Co.',
    period: '2019 - 2021',
    description:
      'Developed and maintained multiple client projects. Implemented responsive designs and RESTful APIs.',
  },
]

const Experience = () => {
  const { t } = useTranslation()
  return (
    <section className='py-20 px-4' id='experience'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold text-primary-dark dark:text-primary-light mb-12 text-center'>
        {t('experience_tittle')}
        </h2>

        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-primary-accent/30 dark:bg-primary-accent/20' />

          {/* Experience items */}
          <div className='space-y-12'>
            {experiences.map((experience, index) => (
              <ExperienceItem key={index} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
