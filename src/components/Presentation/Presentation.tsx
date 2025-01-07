import { Github, Linkedin, Mail } from 'lucide-react'
import { SocialLink } from './components/SocialLink'
import '../../utils/i18n'
import { useTranslation } from 'react-i18next'

export const Presentation = () => {
  const { t } = useTranslation()
  return (
    <section className='flex flex-col md:flex-row items-center justify-center gap-12 pt-32 pb-20 px-4'>
      <div className='w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl'>
        <img src='' alt='Profile' className='w-full h-full object-cover' />
      </div>

      <div className='max-w-xl text center md:text-left'>
        <h2 className='text-2xl font-medium text-primary-accent mb-2'>
          {t('profesion')}
        </h2>
        <h1 className='text-4xl md:text-5xl font-bold text-primary-accent dark:text-primary-light mb-4'>
          Leopoldo Orellana
        </h1>
        <p className='text-lg text-primary-dark/80 dark:text-primary-light/80 mb-8'>
          {t('short_description')}
        </p>
        <div className='flex items-center justify-center md:justify-start gap-6'>
          <SocialLink
            href='https://github.com'
            icon={Github}
            label='GitHub Profile'
          />
          <SocialLink
            href='https://linkedin.com'
            icon={Linkedin}
            label='LinkedIn Profile'
          />
          <SocialLink
            href='mailto:contact@example.com'
            icon={Mail}
            label='Email Contact'
          />
        </div>
      </div>
    </section>
  )
}
