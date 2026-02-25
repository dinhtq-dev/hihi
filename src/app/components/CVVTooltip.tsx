import { useState, useRef, useEffect } from 'react';
import { HelpCircle, X } from 'lucide-react';
import imgCard from "figma:asset/e5dc959abfe0fc5e5cf755456a312c154711ccab.png";

type CVVTooltipProps = {
  className?: string;
};

export function CVVTooltip({ className = '' }: CVVTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={`relative ${className}`} ref={tooltipRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center"
      >
        <HelpCircle className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          
          {/* Tooltip Content */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 z-50 w-[314px]">
            <div className="bg-white rounded-[10px] shadow-[0_2px_8px_rgba(91,91,91,0.2)] p-5">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title */}
              <p className="font-bold text-[16px] leading-[24px] text-[#3b3a3c] text-center mb-[10px]">
                CVV
              </p>

              {/* Section 1 */}
              <div className="flex flex-col gap-[6px] mb-[10px]">
                <p className="font-bold text-[14px] leading-[20px] text-[#3b3a3c]">
                  What is a Credit card Verification Value number (CVV/CVC)?
                </p>
                <p className="font-normal text-[14px] leading-[20px] text-[#3b3a3c]">
                  The Credit card Verification Value is a security feature which appears on every credit card. This number is used in order to ascertain the identity and to prevent fraud. It is located on the back panel of your card.
                </p>
              </div>

              {/* Section 2 */}
              <div className="flex flex-col gap-[6px]">
                <p className="font-bold text-[14px] leading-[20px] text-[#3b3a3c]">
                  Where can I find the Credit card Verification Value number (CVV/CVC)?
                </p>
                <p className="font-normal text-[14px] leading-[20px] text-[#3b3a3c] mb-[6px]">
                  They are the last 3 digits in the signature box on the card's back panel.
                </p>
                
                {/* Card Image */}
                <div className="w-[230px] h-[144px]">
                  <img 
                    src={imgCard} 
                    alt="CVV location on card" 
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              </div>

              {/* Arrow pointing down */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px]">
                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-white" 
                     style={{ filter: 'drop-shadow(0 2px 2px rgba(91,91,91,0.1))' }}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
