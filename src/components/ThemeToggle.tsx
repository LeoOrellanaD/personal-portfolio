import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches
    setIsDarkMode(prefersDarkMode)

    if (prefersDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const onToggle = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }
  return (
    <button
      onClick={onToggle}
      className='p-2 rounded-full hover:bg-primary-accent/10 transition-colors'
      aria-label='Toggle theme'
    >
      {isDarkMode ? (
        <Sun className='h-5 w-5 text-primary-accent' />
      ) : (
        <Moon className='h-5 w-5 text-primary-dark' />
      )}
    </button>
  )
}

export default ThemeToggle
