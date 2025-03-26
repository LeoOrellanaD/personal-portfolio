import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Language from '../types/Language'

const useLanguage = () => {
  const { i18n } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState<Language>({
    code: 'es',
    name: 'Español',
  })

  const handleLanguageSelect = (language: Language) => {
    setCurrentLanguage(language)
    i18n.changeLanguage(language.code)
  }

  return { currentLanguage, handleLanguageSelect }
}

export default useLanguage
