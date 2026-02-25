import { useState } from 'react';
import svgPaths from '@/imports/svg-4fpgcsgf07';
import { Check, ChevronDown } from 'lucide-react';

type JurisdictionItem = {
  id: string;
  name: string;
  flag: React.ReactNode;
};

function HongKongFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="21" rx="2" fill="#DE2910"/>
      <path d="M14 10.5L15.5 8L17 10.5L15.5 13L14 10.5Z" fill="white"/>
      <path d="M14 10.5L11.5 9L9 10.5L11.5 12L14 10.5Z" fill="white"/>
      <path d="M14 10.5L16.5 12L19 10.5L16.5 9L14 10.5Z" fill="white"/>
      <path d="M14 10.5L12.5 13L11 10.5L12.5 8L14 10.5Z" fill="white"/>
      <path d="M14 10.5L16.5 9L17 7.5L14 10.5Z" fill="white"/>
    </svg>
  );
}

function MalaysiaFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="21" rx="2" fill="#CC0001"/>
      <rect width="28" height="1.5" fill="white"/>
      <rect y="3" width="28" height="1.5" fill="white"/>
      <rect y="6" width="28" height="1.5" fill="white"/>
      <rect y="9" width="28" height="1.5" fill="white"/>
      <rect y="12" width="28" height="1.5" fill="white"/>
      <rect y="15" width="28" height="1.5" fill="white"/>
      <rect y="18" width="28" height="1.5" fill="white"/>
      <rect width="14" height="10.5" rx="1" fill="#010066"/>
      <path d="M7 3L7.5 4.5L9 4.5L7.8 5.3L8.3 6.8L7 6L5.7 6.8L6.2 5.3L5 4.5L6.5 4.5L7 3Z" fill="#FFCC00"/>
      <path d="M10 5C10 6.933 8.433 8.5 6.5 8.5C5.5 8.5 4.6 8.1 4 7.5C4.5 8.6 5.6 9.5 7 9.5C8.933 9.5 10.5 7.933 10.5 6C10.5 5.6 10.4 5.3 10.3 5L10 5Z" fill="#FFCC00"/>
    </svg>
  );
}

function MarshallIslandsFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="21" rx="2" fill="#003893"/>
      <path d="M0 21L28 0V21H0Z" fill="white"/>
      <path d="M0 21L28 2V21H0Z" fill="#DD7500"/>
      <path d="M7 8L7.5 9.5L9 9.5L7.8 10.3L8.3 11.8L7 11L5.7 11.8L6.2 10.3L5 9.5L6.5 9.5L7 8Z" fill="white"/>
    </svg>
  );
}

function SamoaFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="21" rx="2" fill="#CE1126"/>
      <rect width="14" height="10.5" rx="1" fill="#002B7F"/>
      <path d="M6 3L6.3 3.8L7.1 3.8L6.4 4.3L6.7 5.1L6 4.6L5.3 5.1L5.6 4.3L4.9 3.8L5.7 3.8L6 3Z" fill="white"/>
      <path d="M9 4L9.3 4.8L10.1 4.8L9.4 5.3L9.7 6.1L9 5.6L8.3 6.1L8.6 5.3L7.9 4.8L8.7 4.8L9 4Z" fill="white"/>
      <path d="M8 6L8.3 6.8L9.1 6.8L8.4 7.3L8.7 8.1L8 7.6L7.3 8.1L7.6 7.3L6.9 6.8L7.7 6.8L8 6Z" fill="white"/>
      <path d="M6 7L6.3 7.8L7.1 7.8L6.4 8.3L6.7 9.1L6 8.6L5.3 9.1L5.6 8.3L4.9 7.8L5.7 7.8L6 7Z" fill="white"/>
      <path d="M4 6L4.3 6.8L5.1 6.8L4.4 7.3L4.7 8.1L4 7.6L3.3 8.1L3.6 7.3L2.9 6.8L3.7 6.8L4 6Z" fill="white"/>
    </svg>
  );
}

function SingaporeFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="21" rx="2" fill="#EF3340"/>
      <rect y="10.5" width="28" height="10.5" fill="white"/>
      <circle cx="8" cy="6" r="3" fill="white"/>
      <circle cx="9" cy="6" r="2.5" fill="#EF3340"/>
      <path d="M12 4L12.2 4.5L12.8 4.5L12.3 4.9L12.5 5.4L12 5L11.5 5.4L11.7 4.9L11.2 4.5L11.8 4.5L12 4Z" fill="white"/>
      <path d="M13.5 5.5L13.7 6L14.3 6L13.8 6.4L14 6.9L13.5 6.5L13 6.9L13.2 6.4L12.7 6L13.3 6L13.5 5.5Z" fill="white"/>
      <path d="M13.5 7.5L13.7 8L14.3 8L13.8 8.4L14 8.9L13.5 8.5L13 8.9L13.2 8.4L12.7 8L13.3 8L13.5 7.5Z" fill="white"/>
      <path d="M12 9L12.2 9.5L12.8 9.5L12.3 9.9L12.5 10.4L12 10L11.5 10.4L11.7 9.9L11.2 9.5L11.8 9.5L12 9Z" fill="white"/>
      <path d="M10.5 7.5L10.7 8L11.3 8L10.8 8.4L11 8.9L10.5 8.5L10 8.9L10.2 8.4L9.7 8L10.3 8L10.5 7.5Z" fill="white"/>
    </svg>
  );
}

function VanuatuFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="21" rx="2" fill="#009543"/>
      <path d="M0 0L14 10.5L0 21V0Z" fill="#D21034"/>
      <path d="M0 2L12 10.5L0 19V2Z" fill="black"/>
      <path d="M3 10.5L5 9L7 10.5L5 12L3 10.5Z" fill="#FFCE00"/>
      <rect y="9" width="28" height="3" fill="black"/>
      <rect y="10" width="28" height="1" fill="#FFCE00"/>
    </svg>
  );
}

function VietnamFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="21" rx="2" fill="#DA251D"/>
      <path d="M14 6L15.5 9.5H19L16 11.5L17.5 15L14 13L10.5 15L12 11.5L9 9.5H12.5L14 6Z" fill="#FFCD00"/>
    </svg>
  );
}

function CyprusFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="21" rx="2" fill="white"/>
      <ellipse cx="14" cy="12" rx="6" ry="3" fill="#D57800"/>
      <path d="M11 8L12 9L13 8L14 9L15 8L16 9L17 8" stroke="#6D8C3A" strokeWidth="1" fill="none"/>
      <path d="M10 10L11 11L12 10L13 11L14 10L15 11L16 10L17 11L18 10" stroke="#6D8C3A" strokeWidth="1" fill="none"/>
    </svg>
  );
}

function GibraltarFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="21" rx="2" fill="white"/>
      <rect y="14" width="28" height="7" fill="#DA291C"/>
      <rect x="10" y="5" width="8" height="9" fill="#DA291C"/>
      <rect x="11" y="6" width="6" height="7" fill="white"/>
      <path d="M14 4L14.5 5L15.5 5L14.8 5.5L15 6.5L14 6L13 6.5L13.2 5.5L12.5 5L13.5 5L14 4Z" fill="#FFD700"/>
    </svg>
  );
}

function LiechtensteinFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="10.5" rx="2" fill="#002B7F"/>
      <rect y="10.5" width="28" height="10.5" rx="2" fill="#CE1126"/>
      <circle cx="7" cy="5" r="2" fill="#FFD700"/>
    </svg>
  );
}

function LuxembourgFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="7" fill="#ED2939"/>
      <rect y="7" width="28" height="7" fill="white"/>
      <rect y="14" width="28" height="7" fill="#00A1DE"/>
    </svg>
  );
}

function MaltaFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="14" height="21" rx="2" fill="white"/>
      <rect x="14" width="14" height="21" fill="#CE1126"/>
      <rect x="3" y="2" width="5" height="5" fill="#C0C0C0"/>
      <path d="M5.5 3L5.7 3.5L6.2 3.5L5.8 3.8L6 4.3L5.5 4L5 4.3L5.2 3.8L4.8 3.5L5.3 3.5L5.5 3Z" fill="#CE1126"/>
    </svg>
  );
}

function NetherlandsFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="7" fill="#AE1C28"/>
      <rect y="7" width="28" height="7" fill="white"/>
      <rect y="14" width="28" height="7" fill="#21468B"/>
    </svg>
  );
}

function SwissFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="21" rx="2" fill="#DA291C"/>
      <rect x="12" y="6" width="4" height="9" fill="white"/>
      <rect x="9" y="9" width="10" height="3" fill="white"/>
    </svg>
  );
}

function UKFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="21" rx="2" fill="#012169"/>
      <path d="M0 0L28 21M28 0L0 21" stroke="white" strokeWidth="3"/>
      <path d="M0 0L28 21M28 0L0 21" stroke="#C8102E" strokeWidth="2"/>
      <path d="M14 0V21M0 10.5H28" stroke="white" strokeWidth="5"/>
      <path d="M14 0V21M0 10.5H28" stroke="#C8102E" strokeWidth="3"/>
    </svg>
  );
}

function AnguillaFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="21" rx="2" fill="#012169"/>
      <rect x="14" y="2" width="10" height="8" fill="white"/>
      <circle cx="19" cy="6" r="2" fill="#012169"/>
      <path d="M17 7L18 8L19 7L20 8L21 7" stroke="#FF8C00" strokeWidth="0.5"/>
    </svg>
  );
}

function BahamasFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="7" fill="#00ABC9"/>
      <rect y="7" width="28" height="7" fill="#FFC72C"/>
      <rect y="14" width="28" height="7" fill="#00ABC9"/>
      <path d="M0 0L14 10.5L0 21V0Z" fill="black"/>
    </svg>
  );
}

function BelizeFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="21" rx="2" fill="#003F87"/>
      <rect y="2" width="28" height="1" fill="#CE1126"/>
      <rect y="18" width="28" height="1" fill="#CE1126"/>
      <circle cx="14" cy="10.5" r="5" fill="white"/>
      <circle cx="14" cy="10.5" r="3.5" fill="#003F87"/>
    </svg>
  );
}

function MarylandFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="14" height="10.5" fill="#FFC726"/>
      <rect x="14" y="10.5" width="14" height="10.5" fill="#FFC726"/>
      <rect x="14" width="14" height="10.5" fill="white"/>
      <rect y="10.5" width="14" height="10.5" fill="white"/>
      <path d="M0 0L4 4L0 8L4 12L0 16L4 20L8 16L4 12L8 8L4 4L8 0L4 0Z" fill="black"/>
      <path d="M14 0L18 4L14 8L18 12L14 16L18 20L22 16L18 12L22 8L18 4L22 0L18 0Z" fill="#CE1126"/>
    </svg>
  );
}

function CaymanIslandsFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="21" rx="2" fill="#012169"/>
      <rect x="14" y="2" width="10" height="8" fill="#CE1126"/>
      <circle cx="19" cy="6" r="2.5" fill="white"/>
      <path d="M18 6L19 7L20 6" stroke="#00A651" strokeWidth="0.5"/>
    </svg>
  );
}

function PanamaFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="14" height="10.5" fill="white"/>
      <rect x="14" width="14" height="10.5" fill="#DA291C"/>
      <rect y="10.5" width="14" height="10.5" fill="#0033A0"/>
      <rect x="14" y="10.5" width="14" height="10.5" fill="white"/>
      <path d="M7 4L7.5 5.5L9 5.5L7.8 6.3L8.3 7.8L7 7L5.7 7.8L6.2 6.3L5 5.5L6.5 5.5L7 4Z" fill="#0033A0"/>
      <path d="M21 14L21.5 15.5L23 15.5L21.8 16.3L22.3 17.8L21 17L19.7 17.8L20.2 16.3L19 15.5L20.5 15.5L21 14Z" fill="#DA291C"/>
    </svg>
  );
}

function SaintLuciaFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="21" rx="2" fill="#65CFFF"/>
      <path d="M14 6L18 15H10L14 6Z" fill="#FFD100"/>
      <path d="M14 8L17 15H11L14 8Z" fill="black"/>
      <path d="M14 8L16 15H12L14 8Z" fill="white"/>
    </svg>
  );
}

function VincentFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="8" height="21" fill="#0072C6"/>
      <rect x="8" width="12" height="21" fill="#FCD116"/>
      <rect x="20" width="8" height="21" fill="#199B50"/>
      <path d="M12 8L13 9L14 8L15 9L16 8" stroke="#199B50" strokeWidth="1"/>
      <path d="M11 10L12 11L13 10L14 11L15 10L16 11L17 10" stroke="#199B50" strokeWidth="1"/>
      <path d="M12 12L13 13L14 12L15 13L16 12" stroke="#199B50" strokeWidth="1"/>
    </svg>
  );
}

function BVIFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="21" rx="2" fill="#012169"/>
      <rect x="14" y="2" width="10" height="8" fill="white"/>
      <circle cx="19" cy="6" r="2" fill="#00A651"/>
      <path d="M17.5 6L18.5 7L19.5 6L20.5 7" stroke="#FFD700" strokeWidth="0.5"/>
    </svg>
  );
}

function DubaiFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="7" fill="#00732F"/>
      <rect y="7" width="28" height="7" fill="white"/>
      <rect y="14" width="28" height="7" fill="black"/>
      <rect width="8" height="21" fill="#FF0000"/>
    </svg>
  );
}

function RAKFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="7" fill="#00732F"/>
      <rect y="7" width="28" height="7" fill="white"/>
      <rect y="14" width="28" height="7" fill="black"/>
      <rect width="8" height="21" fill="#FF0000"/>
    </svg>
  );
}

function UAEFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="7" fill="#00732F"/>
      <rect y="7" width="28" height="7" fill="white"/>
      <rect y="14" width="28" height="7" fill="black"/>
      <rect width="8" height="21" fill="#FF0000"/>
    </svg>
  );
}

function MauritiusFlag() {
  return (
    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="28" height="5.25" fill="#EA2839"/>
      <rect y="5.25" width="28" height="5.25" fill="#1A206D"/>
      <rect y="10.5" width="28" height="5.25" fill="#FFD500"/>
      <rect y="15.75" width="28" height="5.25" fill="#00A651"/>
    </svg>
  );
}

export function JurisdictionSelector() {
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<string>('hong-kong');
  const [isOpen, setIsOpen] = useState(false);

  const jurisdictions: JurisdictionItem[] = [
    { id: 'hong-kong', name: 'Hong Kong', flag: <HongKongFlag /> },
    { id: 'labuan', name: 'Labuan, Malaysia', flag: <MalaysiaFlag /> },
    { id: 'marshall', name: 'Marshall Islands', flag: <MarshallIslandsFlag /> },
    { id: 'samoa', name: 'Samoa', flag: <SamoaFlag /> },
    { id: 'singapore', name: 'Singapore', flag: <SingaporeFlag /> },
    { id: 'vanuatu', name: 'Vanuatu', flag: <VanuatuFlag /> },
    { id: 'vietnam', name: 'Vietnam', flag: <VietnamFlag /> },
    { id: 'cyprus', name: 'Cyprus', flag: <CyprusFlag /> },
    { id: 'gibraltar', name: 'Gibraltar', flag: <GibraltarFlag /> },
    { id: 'liechtenstein', name: 'Liechtenstein', flag: <LiechtensteinFlag /> },
    { id: 'luxembourg', name: 'Luxembourg', flag: <LuxembourgFlag /> },
    { id: 'malta', name: 'Malta', flag: <MaltaFlag /> },
    { id: 'netherlands', name: 'Netherlands', flag: <NetherlandsFlag /> },
    { id: 'swiss', name: 'Swiss', flag: <SwissFlag /> },
    { id: 'uk', name: 'UK', flag: <UKFlag /> },
    { id: 'anguilla', name: 'Anguilla', flag: <AnguillaFlag /> },
    { id: 'bahamas', name: 'Bahamas', flag: <BahamasFlag /> },
    { id: 'belize', name: 'Belize', flag: <BelizeFlag /> },
    { id: 'maryland', name: 'Maryland', flag: <MarylandFlag /> },
    { id: 'cayman-islands', name: 'Cayman Islands', flag: <CaymanIslandsFlag /> },
    { id: 'panama', name: 'Panama', flag: <PanamaFlag /> },
    { id: 'saint-lucia', name: 'Saint Lucia', flag: <SaintLuciaFlag /> },
    { id: 'vincent', name: 'Vincent', flag: <VincentFlag /> },
    { id: 'bvi', name: 'BVI', flag: <BVIFlag /> },
    { id: 'dubai', name: 'Dubai', flag: <DubaiFlag /> },
    { id: 'rak', name: 'RAK', flag: <RAKFlag /> },
    { id: 'uae', name: 'UAE', flag: <UAEFlag /> },
    { id: 'mauritius', name: 'Mauritius', flag: <MauritiusFlag /> },
  ];

  const selectedItem = jurisdictions.find(j => j.id === selectedJurisdiction) || jurisdictions[0];

  const handleSelect = (id: string) => {
    setSelectedJurisdiction(id);
    setIsOpen(false);
  };

  return (
    <div className="bg-white rounded-[12px] shadow-[3px_4px_4.8px_0px_rgba(212,212,212,0.25)] border border-[#e9ecef] overflow-hidden">
      <div className="flex flex-col gap-[4px] p-[12px] max-h-[320px] overflow-y-auto">
        {jurisdictions.map((jurisdiction) => {
          const isSelected = selectedJurisdiction === jurisdiction.id;
          return (
            <button
              key={jurisdiction.id}
              onClick={() => handleSelect(jurisdiction.id)}
              className={`relative rounded-[8px] w-full transition-all duration-200 ${
                isSelected 
                  ? 'bg-[#edf4ff] border border-[#2f80ed]' 
                  : 'hover:bg-gray-50 border border-transparent'
              }`}
            >
              <div className="flex items-center w-full p-[12px] gap-[12px]">
                {jurisdiction.flag}
                <div className={`flex-1 text-left font-['Roboto:Regular',sans-serif] font-normal text-[16px] leading-[20px] ${
                  isSelected ? 'text-[#2f80ed]' : 'text-[#0d0d0d]'
                }`}>
                  {jurisdiction.name}
                </div>
                {isSelected && (
                  <div className="shrink-0 size-[20px]">
                    <Check size={20} className="text-[#28A745]" strokeWidth={1.65} />
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}