interface NavLinkProps {
  icon: React.ReactNode
  text: string
  href: string
  isActive?: boolean
}

const NavLink = ({ icon, text, href, isActive = false }: NavLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <a
      href={`#${href}`}
      onClick={handleClick}
      className={`group relative flex items-center space-x-1 md:space-x-2 transition-all duration-300 ${
        isActive
          ? 'text-primary-highlight scale-105 font-medium'
          : 'text-primary-dark hover:text-primary-highlight dark:text-primary-light dark:hover:text-primary-highlight'
      }`}
    >
      {/* Contenedor del ícono y tooltip */}
      <div className='relative'>
        {icon}
        {/* Tooltip para mobile */}
        <span className='md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10'>
          {text}
          {/* Triángulo del tooltip */}
          <div className='absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 transform rotate-45' />
        </span>
      </div>

      <span className='hidden md:inline'>{text}</span>

      {isActive && (
        <div className='absolute -bottom-2 left-0 w-full h-0.5 bg-primary-highlight transform scale-x-100 transition-transform duration-300' />
      )}
    </a>
  )
}

export default NavLink
