import { ReactNode } from 'react';

interface IconBoxProps {
  icon: ReactNode;
  variant?: 'primary' | 'secondary' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function IconBox({
  icon,
  variant = 'primary',
  size = 'md',
  className = ''
}: IconBoxProps) {
  const variantClasses = {
    primary: 'bg-[#C91F26]/10 text-[#C91F26]',
    secondary: 'bg-[#332A2A]/10 text-[#332A2A]',
    white: 'bg-white text-[#C91F26] shadow-lg'
  };

  const sizeClasses = {
    sm: 'w-10 h-10 text-base',
    md: 'w-12 h-12 text-lg',
    lg: 'w-16 h-16 text-2xl'
  };

  return (
    <div 
      className={`flex items-center justify-center rounded-xl transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {icon}
    </div>
  );
}
