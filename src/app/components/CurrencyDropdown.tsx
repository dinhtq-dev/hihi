import { useState, useRef, useEffect } from 'react';
import { FlagIcon } from './FlagIcon';
import { ChevronDown } from 'lucide-react';

type Currency = {
  code: string;
  name: string;
};

type CurrencyDropdownProps = {
  value: string;
  onChange: (value: string) => void;
  currencies: Currency[];
};

export function CurrencyDropdown({ value, onChange, currencies }: CurrencyDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCurrency = currencies.find(c => c.code === value) || currencies[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-[42px] px-3 pr-2 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C91F26] focus:border-transparent bg-white text-left flex items-center justify-between gap-2"
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <FlagIcon currency={selectedCurrency.code} />
          <span className="text-sm text-gray-700">{selectedCurrency.name}</span>
        </div>
        <ChevronDown 
          className={`w-4 h-4 text-gray-500 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
          {currencies.map((currency) => (
            <button
              key={currency.code}
              type="button"
              onClick={() => {
                onChange(currency.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2 transition-colors ${
                currency.code === value ? 'bg-[#FFF5F5]' : ''
              }`}
            >
              <FlagIcon currency={currency.code} />
              <span className="text-sm text-gray-700">{currency.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}