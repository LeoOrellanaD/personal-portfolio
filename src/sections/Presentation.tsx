import { Github, Linkedin, Mail } from 'lucide-react'
import { SocialLink } from '@components/SocialLink'
import { useTranslation } from 'react-i18next'
import '../utils/i18n'
import personal_image from '../assets/personal_image.webp'

export const Presentation = () => {
  const { t } = useTranslation()
  return (
    <section
      className='flex flex-col md:flex-row items-center justify-center gap-12 pt-32 pb-20 px-4'
      id='home'
    >
      <div className='w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl'>
        <img
          src={personal_image}
          alt='Profile'
          className='w-full h-full object-cover bg-white/10'
        />
      </div>

      <div className='max-w-xl text center md:text-left'>
        <h2 className='text-2xl font-medium text-primary-accent mb-2'>
          {t('profesion')}
        </h2>
        <h1 className='text-4xl md:text-5xl font-bold mb-4 inline-block bg-gradient-to-r from-primary-accent to-primary-highlight bg-clip-text text-transparent animate-gradient'>
          Leopoldo Orellana
        </h1>

        <p className='text-lg text-primary-dark/80 dark:text-primary-light/80 mb-8'>
          {t('short_description')}
        </p>
        <div className='flex items-center justify-center md:justify-start gap-6'>
          <SocialLink
            href='https://github.com/LeoOrellanaD'
            icon={Github}
            label='GitHub'
          />
          <SocialLink
            href='https://www.linkedin.com/in/leopoldo-orellana-díaz-3a5134259'
            icon={Linkedin}
            label='LinkedIn'
          />
          <SocialLink
            href='mailto:leo.orellana2502@gmail.com'
            icon={Mail}
            label='Email'
          />
        </div>
      </div>
    </section>
  )
}
