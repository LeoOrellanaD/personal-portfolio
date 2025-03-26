import { useState } from 'react'
import { Languages } from 'lucide-react'
import LanguageSelector from './LanguageSelector'

const LanguageDropdown = ({
  currentLanguage,
  onLanguageSelect,
}: {
  currentLanguage: { code: string; name: string }
  onLanguageSelect: (language: { code: string; name: string }) => void
}) => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)

  return (
    <div className='relative'>
      <button
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        className='flex items-center space-x-1 text-primary-dark hover:text-primary-highlight dark:text-primary-light dark:hover:text-primary-accent transition-colors'
      >
        <Languages size={18} />
        <span>{currentLanguage.code.toUpperCase()}</span>
      </button>
      <LanguageSelector
        isOpen={isLanguageOpen}
        currentLanguage={currentLanguage}
        onLanguageSelect={(language) => {
          onLanguageSelect(language)
          setIsLanguageOpen(false)
        }}
      />
    </div>
  )
}

export default LanguageDropdown
