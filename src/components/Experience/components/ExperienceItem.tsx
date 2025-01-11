import { Briefcase, Building2, Calendar } from 'lucide-react'

import ExperienceProps from '../../../types/Experience'

export const ExperienceItem = ({
  title,
  company,
  period,
  description,
}: ExperienceProps) => {
  return (
    <div className='relative pl-20'>
      {/* Timeline dot */}
      <div className='absolute left-[29px] top-0 w-4 h-4 rounded-full bg-primary-accent border-4 border-primary-light dark:border-primary-dark' />

      <div className='bg-white dark:bg-primary-dark/20 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow'>
        <div className='flex flex-wrap items-center gap-4 mb-4'>
          <h3 className='text-xl font-semibold text-primary-dark dark:text-primary-light flex items-center gap-2'>
            <Briefcase className='text-primary-accent' size={20} />
            {title}
          </h3>
          <div className='flex items-center gap-4 text-sm text-primary-dark/70 dark:text-primary-light/70'>
            <span className='flex items-center gap-1'>
              <Building2 size={16} />
              {company}
            </span>
            <span className='flex items-center gap-1'>
              <Calendar size={16} />
              {period}
            </span>
          </div>
        </div>
        <p className='text-primary-dark/80 dark:text-primary-light/80'>
          {description}
        </p>
      </div>
    </div>
  )
}
