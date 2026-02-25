import { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  badge?: ReactNode;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  description, 
  align = 'center',
  className = '',
  badge
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  
  return (
    <div className={`mb-6 lg:mb-12 max-w-3xl ${alignClass} ${className}`}>
      {badge && (
        <div className="mb-4">
          {badge}
        </div>
      )}
      
      {subtitle && (
        <p className="text-[#C91F26] font-semibold text-sm lg:text-base mb-2 uppercase tracking-wide">
          {subtitle}
        </p>
      )}
      
      <h2 className="text-[#2C2C2C] font-bold text-2xl lg:text-5xl mb-4">
        {title}
      </h2>
    </div>
  );
}