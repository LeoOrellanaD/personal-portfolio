import { useState } from 'react'
import { ThemeToggle } from './components/ThemeToggle'
import { NavLink } from './components/NavLink'
import { LanguageSelector } from './components/LanguageSelector'
import { Home, FolderGit2, User, Languages, Briefcase } from 'lucide-react'
import Language from '../../types/Language'
import { useTranslation } from 'react-i18next'
import '../../utils/i18n'

export const Header = () => {
  const [isDark, setIsDark] = useState(false)
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<Language>({
    code: 'es',
    name: 'Español',
  })

  const { t, i18n } = useTranslation()

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  const handleLanguageSelect = (language: Language) => {
    setCurrentLanguage(language)
    setIsLanguageOpen(false)
    i18n.changeLanguage(language.code)
  }

  return (
    <header className='fixed top-0 left-0 right-0 bg-primary-light dark:bg-primary-dark shadow-md z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex-shrink-0'>
            <h1 className='text-xl font-bold text-primary-dark dark:text-primary-light'>
              Leopoldo Orellana
            </h1>
          </div>

          <nav className='hidden md:flex items-center space-x-8'>
            <NavLink icon={<Home size={18} />} text={t('home')} />
            <NavLink icon={<Briefcase size={18} />} text={t('experience')} />
            <NavLink icon={<FolderGit2 size={18} />} text={t('projects')} />
            <NavLink icon={<User size={18} />} text={t('about')} />
            <div className='relative'>
              <button
                onClick={() => setIsLanguageOpen((prev) => !prev)}
                className='flex items-center space-x-1 text-primary-dark hover:text-primary-highlight dark:text-primary-light dark:hover:text-primary-accent transition-colors'
              >
                <Languages size={18} />
                <span>{currentLanguage.code.toUpperCase()}</span>
              </button>
              <LanguageSelector
                isOpen={isLanguageOpen}
                currentLanguage={currentLanguage}
                onLanguageSelect={handleLanguageSelect}
              />
            </div>
          </nav>
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>
      </div>
    </header>
  )
}
