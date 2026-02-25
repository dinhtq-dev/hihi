import { ReactNode } from 'react';
import { PrimaryButton } from './PrimaryButton';

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  className = ''
}: EmptyStateProps) {
  return (
    <div className={`flex flex-col items-center justify-center py-12 px-4 text-center ${className}`}>
      {icon && (
        <div className="mb-4 text-[#C91F26] opacity-50">
          {icon}
        </div>
      )}
      
      <h3 className="text-[#2C2C2C] font-bold text-xl mb-2">
        {title}
      </h3>
      
      {description && (
        <p className="text-[#6C757D] text-base mb-6 max-w-md">
          {description}
        </p>
      )}
      
      {actionLabel && onAction && (
        <PrimaryButton onClick={onAction}>
          {actionLabel}
        </PrimaryButton>
      )}
    </div>
  );
}
