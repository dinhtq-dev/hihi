import { ReactNode } from 'react';

interface SectionContainerProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'gradient' | 'dark';
  noPadding?: boolean;
}

export function SectionContainer({ 
  children, 
  id, 
  className = '', 
  background = 'white',
  noPadding = false
}: SectionContainerProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-gray-50 to-white',
    dark: 'bg-[#332A2A]'
  };

  const paddingClass = noPadding ? '' : 'py-[30px] lg:py-20';

  return (
    <section 
      id={id} 
      className={`${bgClasses[background]} ${paddingClass} ${className}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}