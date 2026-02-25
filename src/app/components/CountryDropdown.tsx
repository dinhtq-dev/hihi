import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

type Country = {
  code: string;
  name: string;
};

type CountryDropdownProps = {
  value: string;
  onChange: (value: string) => void;
  countries: Country[];
};

export function CountryDropdown({ value, onChange, countries }: CountryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry = countries.find(c => c.code === value);

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
        <span className={`text-sm flex-1 min-w-0 ${!selectedCountry ? 'text-gray-400' : 'text-gray-700'}`}>
          {selectedCountry ? selectedCountry.name : 'Please select'}
        </span>
        <ChevronDown 
          className={`w-4 h-4 text-gray-500 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg max-h-60 overflow-auto">
          {countries.map((country) => (
            <button
              key={country.code}
              type="button"
              onClick={() => {
                onChange(country.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2 transition-colors ${
                country.code === value ? 'bg-[#FFF5F5]' : ''
              }`}
            >
              <span className="text-sm text-gray-700">{country.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
