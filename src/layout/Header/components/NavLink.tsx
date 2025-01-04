interface Props {
  icon: React.ReactNode
  text: string
}

export const NavLink = ({ icon, text }: Props) => (
  <a
    href='#'
    className='flex items-center space-x-1 text-primary-dark hover:text-primary-highlight dark:text-primary-light dark:hover:text-primary-accent transition-colors'
  >
    {icon}
    <span>{text}</span>
  </a>
)
