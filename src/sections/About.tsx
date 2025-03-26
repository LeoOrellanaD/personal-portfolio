import { useTranslation } from 'react-i18next'
import { User, Code2, Brain, Rocket, GraduationCap } from 'lucide-react'
import pc from '../assets/Hello computer Lo Fi Lofi Retro Animation.jpg'

const About = () => {
  const { t } = useTranslation()
  return (
    <section className='py-20 px-4' id='about'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-primary-dark dark:text-primary-light mb-8 text-center flex items-center justify-center gap-3'>
          <User className='text-primary-accent' size={32} />
          {t('AboutMe_title')}
        </h2>

        <div className='flex justify-center mb-4 md:mb-12 px-4'>
          <div className='relative  max-w-3xl rounded-xl overflow-hidden border-2 border-primary-accent/20 hover:border-primary-accent/40 transition-all duration-300'>
            <img
              src={pc}
              alt='Tecnología y desarrollo'
              className='w-full h-60 object-contain md:h-72 transform hover:scale-102 transition-transform duration-300'
            />
          </div>
        </div>

        <div className='max-w-4xl mx-auto'>
          <div className='bg-white dark:bg-primary-dark/20 p-8 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-all duration-300'>
            <div className='space-y-6'>
              <div className='flex items-center gap-3 text-primary-accent'>
                <GraduationCap size={24} />
                <h3 className='text-xl font-semibold text-primary-dark dark:text-primary-light'>
                  {t('academic_background')}
                </h3>
              </div>
              <p className='text-primary-dark/80 dark:text-primary-light/80'>
                {t('academic_background_body')}
              </p>

              <div className='flex items-center gap-3 text-primary-accent'>
                <Brain size={24} />
                <h3 className='text-xl font-semibold text-primary-dark dark:text-primary-light'>
                  {t('passion')}
                </h3>
              </div>
              <p className='text-primary-dark/80 dark:text-primary-light/80'>
                {t('passion_body')}
              </p>

              <div className='flex items-center gap-3 text-primary-accent'>
                <Code2 size={24} />
                <h3 className='text-xl font-semibold text-primary-dark dark:text-primary-light'>
                  {t('focus')}
                </h3>
              </div>
              <p className='text-primary-dark/80 dark:text-primary-light/80'>
                {t('focus_body')}
              </p>
            </div>

            <div className='mt-8 p-6 bg-primary-accent/10 rounded-xl border border-primary-accent/20'>
              <div className='flex items-center gap-3 mb-4'>
                <Rocket className='text-primary-accent' size={24} />
                <h3 className='text-xl font-semibold text-primary-dark dark:text-primary-light'>
                  {t('profesional_objectives')}
                </h3>
              </div>
              <p className='text-primary-dark/80 dark:text-primary-light/80'>
                {t('profesional_objectives_body')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
