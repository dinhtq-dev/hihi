import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ctaOverlay from 'figma:asset/3147bd2f1cbdef76b1b253867b5cc549e39248bf.png';

interface Jurisdiction {
  name: string;
  slug: string;
  region: string;
}

const jurisdictions: Jurisdiction[] = [
  // Asia Pacific
  { name: 'Hong Kong', slug: 'hong-kong', region: 'Asia Pacific' },
  { name: 'Singapore', slug: 'singapore', region: 'Asia Pacific' },
  { name: 'Malaysia', slug: 'malaysia', region: 'Asia Pacific' },
  { name: 'Vietnam', slug: 'vietnam', region: 'Asia Pacific' },
  // Europe
  { name: 'Cyprus', slug: 'cyprus', region: 'Europe' },
  { name: 'Gibraltar', slug: 'gibraltar', region: 'Europe' },
  { name: 'Liechtenstein', slug: 'liechtenstein', region: 'Europe' },
  { name: 'Luxembourg', slug: 'luxembourg', region: 'Europe' },
  { name: 'Malta', slug: 'malta', region: 'Europe' },
  { name: 'Netherlands', slug: 'netherlands', region: 'Europe' },
  { name: 'Switzerland', slug: 'switzerland', region: 'Europe' },
  { name: 'United Kingdom', slug: 'uk', region: 'Europe' },
  // Caribbean
  { name: 'Anguilla', slug: 'anguilla', region: 'Caribbean' },
  { name: 'Bahamas', slug: 'bahamas', region: 'Caribbean' },
  { name: 'Belize', slug: 'belize', region: 'Caribbean' },
  { name: 'British Virgin Islands', slug: 'bvi', region: 'Caribbean' },
  { name: 'Cayman Islands', slug: 'cayman', region: 'Caribbean' },
  { name: 'Panama', slug: 'panama', region: 'Caribbean' },
  { name: 'St. Kitts & Nevis', slug: 'st-kitts', region: 'Caribbean' },
  { name: 'St. Lucia', slug: 'st-lucia', region: 'Caribbean' },
  { name: 'St. Vincent & Grenadines', slug: 'svg', region: 'Caribbean' },
  // Others
  { name: 'Marshall Islands', slug: 'marshall', region: 'Pacific' },
  { name: 'Samoa', slug: 'samoa', region: 'Pacific' },
  { name: 'Seychelles', slug: 'seychelles', region: 'Africa' },
  { name: 'Vanuatu', slug: 'vanuatu', region: 'Pacific' },
  { name: 'Mauritius', slug: 'mauritius', region: 'Africa' },
  { name: 'United Arab Emirates', slug: 'uae', region: 'Middle East' },
];

interface JurisdictionGetStartedProps {
  currentJurisdiction?: string;
}

export function JurisdictionGetStarted({ currentJurisdiction }: JurisdictionGetStartedProps) {
  const [selectedJurisdiction, setSelectedJurisdiction] = useState(currentJurisdiction || '');
  const navigate = useNavigate();

  const handleOrderCompany = () => {
    if (selectedJurisdiction) {
      // Navigate to the selected jurisdiction page or order form
      const selected = jurisdictions.find(j => j.slug === selectedJurisdiction);
      if (selected) {
        navigate(`/jurisdiction/${selected.slug}`);
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Group jurisdictions by region
  const groupedJurisdictions = jurisdictions.reduce((acc, jurisdiction) => {
    if (!acc[jurisdiction.region]) {
      acc[jurisdiction.region] = [];
    }
    acc[jurisdiction.region].push(jurisdiction);
    return acc;
  }, {} as Record<string, Jurisdiction[]>);

  return (
    <section className="py-[30px] lg:py-24 bg-gradient-to-br from-[#C91F26] via-[#a51920] to-[#8B2A2F] relative overflow-hidden">
      {/* Cityscape Overlay Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: `url(${ctaOverlay})` }}
      ></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>
      
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-white transform rotate-45"></div>
      </div>
      
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16 relative">
        <div className="max-w-5xl mx-auto relative z-20 text-center px-4 sm:px-6 lg:px-8">
          {/* Title */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-white text-center mb-6 lg:mb-12">
            GET <span className="text-white drop-shadow-lg">STARTED</span>
          </h2>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-white/20 p-8">
            {/* Flex container for Jurisdiction Dropdown and Button */}
            <div className="flex flex-col md:flex-row gap-4 items-stretch">
              {/* Jurisdiction Dropdown */}
              <div className="md:flex-[2] relative">
                <select
                  id="jurisdiction-select"
                  value={selectedJurisdiction}
                  onChange={(e) => setSelectedJurisdiction(e.target.value)}
                  className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 font-medium appearance-none cursor-pointer hover:border-[#C91F26]/30 focus:border-[#C91F26] focus:outline-none focus:ring-2 focus:ring-[#C91F26]/20 transition-all duration-200 h-full"
                >
                  <option value="" className="text-gray-500">Select a Jurisdiction</option>
                  {Object.entries(groupedJurisdictions).map(([region, items]) => (
                    <optgroup key={region} label={region} className="font-semibold text-gray-700">
                      {items.map((jurisdiction) => (
                        <option key={jurisdiction.slug} value={jurisdiction.slug} className="font-normal">
                          {jurisdiction.name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                {/* Custom dropdown arrow */}
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Order Button */}
              <button
                onClick={handleOrderCompany}
                disabled={!selectedJurisdiction}
                className="bg-[#C91F26] hover:bg-[#a51920] disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center gap-3 group shadow-lg relative overflow-hidden border border-[#C91F26]/50 disabled:border-gray-300 whitespace-nowrap"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                <span className="relative">Order Your Company</span>
                <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Helper Text */}
            {!selectedJurisdiction && (
              <p className="text-center text-sm text-gray-500 mt-4">
                Please select a jurisdiction to continue
              </p>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-white/90">
              Not sure which jurisdiction to choose?{' '}
              <a href="/compare-jurisdictions" className="text-white hover:underline font-semibold">
                Compare jurisdictions
              </a>
              {' '}or{' '}
              <a href="/contact" className="text-white hover:underline font-semibold">
                speak to an expert
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}