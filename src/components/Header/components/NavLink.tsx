import React from 'react'

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
      className={`flex items-center space-x-1 transition-all duration-300 ${
        isActive
          ? 'text-primary-highlight scale-105 font-medium'
          : 'text-primary-dark hover:text-primary-highlight dark:text-primary-light dark:hover:text-primary-highlight'
      }`}
    >
      {icon}
      <span>{text}</span>
      {isActive && (
        <div className='absolute bottom-0 left-0 w-full h-0.5 bg-primary-highlight transform scale-x-100 transition-transform duration-300' />
      )}
    </a>
  )
}

export default NavLink
