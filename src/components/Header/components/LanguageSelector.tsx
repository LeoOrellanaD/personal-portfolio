import { Check } from 'lucide-react'
import Language from '../../../types/Language'

interface Props {
  isOpen: boolean
  currentLanguage: Language
  onLanguageSelect: (code: Language) => void
}

const languages: Language[] = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
]

const LanguageSelector = ({
  isOpen,
  currentLanguage,
  onLanguageSelect,
}: Props) => {
  if (!isOpen) return null

  return (
    <div className='absolute top-full right-0 mt-2 w-48 rounded-md shadow-lg bg-primary-light dark:bg-primary-dark ring-1 ring-black ring-opacity-5'>
      <div className='py-1' role='menu'>
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => onLanguageSelect(language)}
            className='w-full text-left px-4 py-2 text-sm flex items-center justify-between hover:bg-primary-accent/10 text-primary-dark dark:text-primary-light'
            role='menuitem'
          >
            {language.name}
            {currentLanguage.code == language.code && (
              <Check size={16} className='text-primary-accent' />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default LanguageSelector
