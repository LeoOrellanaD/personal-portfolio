import { useState } from 'react'
import HeaderNav from './components/HeaderNav'
import LanguageDropdown from './components/LanguageDropdown'
import ThemeToggle from './components/ThemeToggle'
import { useTranslation } from 'react-i18next'
import useActiveSection from '@hooks/useActiveSection'
import Language from '../../types/Language'
import '../../utils/i18n'

const Header = () => {
  const { i18n } = useTranslation()
  const [isDark, setIsDark] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<Language>({
    code: 'es',
    name: 'Español',
  })

  const activeSection = useActiveSection([
    'home',
    'experience',
    'projects',
    'about',
  ])
  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }
  const handleLanguageSelect = (language: { code: string; name: string }) => {
    setCurrentLanguage(language)
    i18n.changeLanguage(language.code)
  }

  return (
    <header className='fixed top-0 left-0 right-0 bg-primary-light dark:bg-primary-dark shadow-md z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <h1 className='text-xl font-bold text-primary-dark dark:text-primary-light'>
            Leopoldo Orellana
          </h1>
          <HeaderNav activeSection={activeSection} />
          <div className='flex items-center space-x-4'>
            <LanguageDropdown
              currentLanguage={currentLanguage}
              onLanguageSelect={handleLanguageSelect}
            />
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
