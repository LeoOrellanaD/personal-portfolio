import { ExperienceItem } from '@components/ExperienceItem'
import ExperienceProps from '../types/Experience'
import { useTranslation } from 'react-i18next'

const Experience = () => {
  const { t } = useTranslation()

  const experiences: ExperienceProps[] = [
    {
      id: 1,
      title: t('exp_tittle1'),
      company: t('exp_company1'),
      period: t('exp_period1'),
      description: t('exp_description1'),
    },
    {
      id: 2,
      title: t('exp_tittle2'),
      company: t('exp_company2'),
      period: t('exp_period2'),
      description: t('exp_description2'),
    },
  ]

  return (
    <section className='py-20 px-4' id='experience'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold text-primary-accent dark:text-primary-light mb-12 text-center'>
          {t('experience_tittle')}
        </h2>

        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-8 top-0 bottom-0 w-0.5 bg-primary-accent/30 dark:bg-primary-accent/20' />

          {/* Experience items */}
          <div className='space-y-12'>
            {experiences.map((experience) => (
              <ExperienceItem key={experience.id} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
