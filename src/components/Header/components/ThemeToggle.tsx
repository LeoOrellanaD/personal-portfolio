import { Sun, Moon } from 'lucide-react'

interface ThemeProps {
  isDark: boolean
  onToggle: () => void
}

const ThemeToggle = ({ isDark, onToggle }: ThemeProps) => (
  <button
    onClick={onToggle}
    className='p-2 rounded-full hover:bg-primary-accent/10 transition-colors'
    aria-label='Toggle theme'
  >
    {isDark ? (
      <Sun className='h-5 w-5 text-primary-accent' />
    ) : (
      <Moon className='h-5 w-5 text-primary-dark' />
    )}
  </button>
)

export default ThemeToggle
