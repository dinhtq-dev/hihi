import { ReactNode } from 'react';

interface GradientCardProps {
  children: ReactNode;
  variant?: 'light' | 'dark' | 'red';
  hover?: boolean;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
}

export function GradientCard({
  children,
  variant = 'light',
  hover = true,
  className = '',
  padding = 'md'
}: GradientCardProps) {
  const gradients = {
    light: 'linear-gradient(142.281deg, rgb(255, 255, 255) 30.06%, rgb(235, 235, 235) 71.783%)',
    dark: 'linear-gradient(135deg, #332A2A 0%, #2C2C2C 100%)',
    red: 'linear-gradient(135deg, #C91F26 0%, #A01820 100%)'
  };

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  const hoverClass = hover ? 'hover:shadow-xl hover:scale-[1.02]' : '';

  return (
    <div
      className={`rounded-2xl shadow-lg transition-all duration-300 ${paddingClasses[padding]} ${hoverClass} ${className}`}
      style={{ backgroundImage: gradients[variant] }}
    >
      {children}
    </div>
  );
}
