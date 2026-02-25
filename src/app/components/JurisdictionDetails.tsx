import { useState } from 'react';
import { ChevronDown, ChevronUp, Lightbulb, FileText, File, Target } from 'lucide-react';
import businessMeetingImage from 'figma:asset/3c0f9b86ad8baacf682c29b1fea80d8460c57618.png';

interface AccordionItem {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  content: React.ReactNode;
}

interface JurisdictionDetailsProps {
  country: string;
  jurisdiction: string;
}

// Content data for Hong Kong
const hongKongData = {
  goodToKnow: `Taxation on Hong Kong Limited Companies is unique in that it's based on source and not on residence. As long as a Hong Kong company does not conduct any business in Hong Kong, and does not generate any income from Hong Kong-based sources, the company will not be taxable in Hong Kong.`,
  
  mainCharacteristics: [
    { label: 'Company type', value: 'Private company limited by shares' },
    { label: 'Governing corporate legislation', value: 'Companies Ordinance, regulated by the Hong Kong Companies Registry' },
    { label: 'Legal system', value: 'Common law (based on English law principles)' },
    { label: 'Information published on company officers', value: 'Names of directors and shareholders are recorded in the public registry' },
    { label: 'Accounting requirement', value: 'Annual financial statements are required; accounts are not publicly accessible' },
    { label: 'Audit requirement', value: 'Statutory audit is required' },
    { label: 'Taxation', value: 'Territorial tax system; only profits sourced in Hong Kong may be subject to local taxation' },
    { label: 'Minimum directors', value: 'Minimum of one director (individual or corporate)' },
    { label: 'Minimum shareholders', value: 'Minimum of one shareholder' },
    { label: 'Company secretary', value: 'Appointment of a company secretary is required' },
    { label: 'Local director requirement', value: 'No local director or shareholder is required' },
    { label: 'Paid-up capital', value: 'No minimum paid-up capital requirement' },
    { label: 'Registered office', value: 'A registered office address in Hong Kong is required' },
    { label: 'Public records', value: 'Certain company information is publicly accessible' },
    { label: 'Renewal and filing', value: 'Annual return and ongoing statutory filings are required' },
    { label: 'Time zone', value: 'GMT +8' },
  ],
  
  documentsRequired: [
    'Passport of each shareholder/beneficial owner and director.',
    'Proof of residential address of each director and shareholder (Must be in English or Chinese. Or certified translation version).',
    'Provide your capital structure with any currency',
  ],
  
  idealFor: [
    'Intellectual property rights',
    'Holding Company',
    'Import/Export Products (Good relationships with China, Singapore, US)',
    'Estate and Succession Planning',
  ],
  
  disclaimers: [
    '* Subject to the constraints of the due diligence procedure.',
    '** Documents must be provided for every person related to the company.',
    'Disclaimer: Nothing on this webpage shall be construed as a contractual commitment or as a warranty. Services conditions are governed by the applicable terms and conditions.',
  ]
};

export function JurisdictionDetails({ country, jurisdiction }: JurisdictionDetailsProps) {
  const [openSections, setOpenSections] = useState<Set<number>>(new Set([0])); // First section open by default

  const toggleSection = (index: number) => {
    const newOpenSections = new Set(openSections);
    if (newOpenSections.has(index)) {
      newOpenSections.delete(index);
    } else {
      newOpenSections.add(index);
    }
    setOpenSections(newOpenSections);
  };

  // Only render for Hong Kong for now
  if (jurisdiction !== 'hong-kong') {
    return null;
  }

  const accordionItems: AccordionItem[] = [
    {
      title: 'Main Characteristics',
      icon: FileText,
      content: (
        <div className="space-y-4">
          {hongKongData.mainCharacteristics.map((item, idx) => (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="font-semibold text-gray-900">{item.label}:</div>
              <div className="md:col-span-2 text-gray-700">{item.value}</div>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: 'Documents Required',
      icon: File,
      content: (
        <ul className="space-y-3">
          {hongKongData.documentsRequired.map((doc, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-[#C91F26] mt-1.5">•</span>
              <span className="text-gray-700 flex-1">{doc}</span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: 'Hong Kong Offshore Company Is Ideal For...',
      icon: Target,
      content: (
        <ul className="space-y-3">
          {hongKongData.idealFor.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-[#C91F26] mt-1.5">✓</span>
              <span className="text-gray-700 flex-1">{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section className="py-[30px] lg:py-16 bg-white">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* Main Title */}
        <div className="mb-6 lg:mb-12 text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-foreground">
            <span className="text-primary">{country}</span>{' '}
            <span className="text-[#2C2C2C]">Offshore Company Formation</span>
          </h2>
        </div>

        {/* Image Left, Content Right Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Image */}
          <div className="relative">
            <img 
              src={businessMeetingImage} 
              alt="Business meeting" 
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right: Accordion Content */}
          <div className="space-y-4">
            {accordionItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#C91F26]" />
                    </div>

                    {/* Title */}
                    <div className="flex-1">
                      <h3 className="text-sm font-bold text-[#C91F26] uppercase tracking-wide">
                        {item.title}
                      </h3>
                      <div className="mt-2 h-px bg-gradient-to-r from-[#C91F26] via-gray-300 to-transparent"></div>
                    </div>

                    {/* Toggle Icon */}
                    <div className="flex-shrink-0">
                      {openSections.has(index) ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {openSections.has(index) && (
                    <div className="px-6 pb-6 pt-2 border-t border-gray-100">
                      <div className="pl-14">
                        {item.content}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}