import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface PrimaryButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: boolean;
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
}

export function PrimaryButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  icon = true,
  fullWidth = false,
  className = '',
  disabled = false
}: PrimaryButtonProps) {
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 group relative overflow-hidden";
  
  const variantClasses = {
    primary: "bg-[#C91F26] hover:bg-[#A01820] text-white border border-[#C91F26]/50 shadow-lg hover:shadow-xl",
    secondary: "bg-[#332A2A] hover:bg-[#2C2C2C] text-white border border-[#332A2A]/50 shadow-lg hover:shadow-xl",
    outline: "bg-transparent hover:bg-[#C91F26] text-[#C91F26] hover:text-white border-2 border-[#C91F26]"
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  const content = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
      <span className="relative">{children}</span>
      {icon && <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
}
