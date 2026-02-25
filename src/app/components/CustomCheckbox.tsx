import { Check } from 'lucide-react';

type CustomCheckboxProps = {
  checked: boolean;
  onChange: () => void;
  label: string | React.ReactNode;
  className?: string;
};

export function CustomCheckbox({ checked, onChange, label, className = '' }: CustomCheckboxProps) {
  return (
    <label className={`flex items-center gap-3 cursor-pointer group ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center ${
            checked
              ? 'bg-[#C91F26] border-[#C91F26]'
              : 'bg-white border-gray-300 group-hover:border-[#C91F26]'
          }`}
        >
          {checked && (
            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
          )}
        </div>
      </div>
      <span className="text-sm text-gray-700 select-none">{label}</span>
    </label>
  );
}
