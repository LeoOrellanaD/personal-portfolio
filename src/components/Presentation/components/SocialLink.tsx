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
      className='p-3 rounded-full bg-primary-dark/5 hover:bg-primary-highlight/20 dark:bg-primary-light/5 dark:hover:bg-primary-accent/20 
    group transition-all duration-300 transform hover:scale-110'
    >
      <Icon
        size={24}
        className='text-primary-dark group-hover:text-primary-highlight dark:text-primary-light dark:group-hover:text-primary-accent 
      transition-colors duration-300'
      />
    </a>
  )
}
