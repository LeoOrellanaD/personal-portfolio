import HeaderNav from '@components/HeaderNav'
import LanguageDropdown from '@components/LanguageDropdown'
import ThemeToggle from '@components/ThemeToggle'

import useActiveSection from '@hooks/useActiveSection'
import useLanguage from '@hooks/useLanguage'

import '../utils/i18n'

const Header = () => {
  const { currentLanguage, handleLanguageSelect } = useLanguage()
  const activeSection = useActiveSection([
    'home',
    'experience',
    'projects',
    'about',
  ])

  return (
    <header className='fixed top-0 left-0 right-0 bg-primary-light dark:bg-primary-dark shadow-md z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <h1 className='text-lg md:text-xl font-bold text-primary-dark dark:text-primary-light'>
            Leopoldo Orellana
          </h1>
          <HeaderNav activeSection={activeSection} />
          <div className='flex items-center space-x-2 md:space-x-4'>
            <LanguageDropdown
              currentLanguage={currentLanguage}
              onLanguageSelect={handleLanguageSelect}
            />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
