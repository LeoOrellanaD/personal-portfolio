import NavLink from './NavLink'
import { Home, Briefcase, FolderGit2, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const HeaderNav = ({ activeSection }: { activeSection: string }) => {
  const { t } = useTranslation()
  return (
    <nav className='hidden md:flex items-center space-x-8'>
      <NavLink
        icon={<Home size={18} />}
        text={t('home')}
        href='home'
        isActive={activeSection === 'home'}
      />
      <NavLink
        icon={<Briefcase size={18} />}
        text={t('experience')}
        href='experience'
        isActive={activeSection === 'experience'}
      />
      <NavLink
        icon={<FolderGit2 size={18} />}
        text={t('projects')}
        href='projects'
        isActive={activeSection === 'projects'}
      />
      <NavLink
        icon={<User size={18} />}
        text={t('about')}
        href='about'
        isActive={activeSection === 'about'}
      />
    </nav>
  )
}

export default HeaderNav
