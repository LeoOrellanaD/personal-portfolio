import { LucideIcon } from 'lucide-react'

interface SocialLinkProps {
  href: string
  icon: LucideIcon
  label: string
}

export const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={label}
      className='relative p-3 rounded-full bg-primary-dark/5 hover:bg-primary-highlight/20 dark:bg-primary-light/5 dark:hover:bg-primary-accent/20 
    group transition-all duration-300 transform hover:scale-110'
    >
      <Icon
        size={24}
        className='text-primary-dark group-hover:text-primary-highlight dark:text-primary-light dark:group-hover:text-primary-accent 
      transition-colors duration-300'
      />

      
      <span
        className='absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 dark:bg-primary-dark text-primary-light px-3 py-1.5 rounded-md 
        text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg whitespace-nowrap
        after:content-[""] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent 
        after:border-t-gray-800 dark:after:border-t-primary-dark'
      >
        {label}
      </span>
    </a>
  )
}
