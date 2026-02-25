import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CompanyFormationPopupProps {
  onClose: () => void;
}

export function CompanyFormationPopup({ onClose }: CompanyFormationPopupProps) {
  const menuItems = [
    { name: 'Featured', link: '/incorporation' },
    { name: 'Jurisdictions', link: '/jurisdictions' },
    { name: 'How to Set up', link: '#' },
    { name: 'Fees', link: '/fees' },
    { name: 'Download & Form', link: '#' },
    { name: 'Nominee', link: '/nominee-services' },
    { name: 'Change Agent', link: '#' },
    { name: 'Company Renewal', link: '/company-renewal' },
    { name: 'FAQs', link: '#' },
  ];

  return (
    <>
      {/* Dropdown Menu Content - positioned under Company Formation */}
      <div 
        className="absolute top-full left-0 w-screen origin-top animate-in slide-in-from-top-2 fade-in duration-200 ease-out"
        style={{ left: '50%', transform: 'translateX(-50%)' }}
      >
        <div className="bg-white shadow-[0px_8px_32px_0px_rgba(0,0,0,0.15)] border-t-2 border-[#C91F26]">
          <div className="px-[311.576px] py-12">
            <div className="grid grid-cols-4 gap-x-8 gap-y-6">
              {menuItems.map((item, index) => (
                item.link.startsWith('/') ? (
                  <Link
                    key={index}
                    to={item.link}
                    onClick={onClose}
                    className="group flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C91F26] mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h3 className="font-['Inter:Medium',sans-serif] font-medium text-[#000000] text-[16px] leading-[24px] group-hover:text-[#C91F26] transition-colors duration-300">
                        {item.name}
                      </h3>
                    </div>
                  </Link>
                ) : (
                  <a
                    key={index}
                    href={item.link}
                    className="group flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#C91F26] mt-2 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <h3 className="font-['Inter:Medium',sans-serif] font-medium text-[#000000] text-[16px] leading-[24px] group-hover:text-[#C91F26] transition-colors duration-300">
                        {item.name}
                      </h3>
                    </div>
                  </a>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}