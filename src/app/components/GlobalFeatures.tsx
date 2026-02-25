import { useState } from 'react';
import { Link } from 'react-router-dom';
import imgGlobe from 'figma:asset/76ee650d7c04153e55ca675647b1bfba98e36b52.png';

// Jurisdictions data grouped by region
const jurisdictionsByRegion = {
  'Asia Pacific': [
    { name: 'Hong Kong', slug: 'hong-kong' },
    { name: 'Labuan, Malaysia', slug: 'malaysia' },
    { name: 'Singapore', slug: 'singapore' },
    { name: 'Vietnam', slug: 'vietnam' },
    { name: 'Marshall Islands', slug: 'marshall' },
    { name: 'Samoa', slug: 'samoa' },
    { name: 'Seychelles', slug: 'seychelles' },
    { name: 'Vanuatu', slug: 'vanuatu' }
  ],
  'Europe': [
    { name: 'Cyprus', slug: 'cyprus' },
    { name: 'Gibraltar', slug: 'gibraltar' },
    { name: 'Liechtenstein', slug: 'liechtenstein' },
    { name: 'Luxembourg', slug: 'luxembourg' },
    { name: 'Malta', slug: 'malta' },
    { name: 'Netherlands', slug: 'netherlands' },
    { name: 'Switzerland', slug: 'switzerland' },
    { name: 'United Kingdom', slug: 'uk' }
  ],
  'Caribbean': [
    { name: 'Anguilla', slug: 'anguilla' },
    { name: 'Bahamas', slug: 'bahamas' },
    { name: 'Belize', slug: 'belize' },
    { name: 'British Virgin Islands', slug: 'bvi' },
    { name: 'Cayman Islands', slug: 'cayman' },
    { name: 'Saint Kitts and Nevis', slug: 'st-kitts' },
    { name: 'Saint Lucia', slug: 'st-lucia' },
    { name: 'Saint Vincent & Grenadines', slug: 'svg' }
  ],
  'Middle East': [
    { name: 'United Arab Emirates', slug: 'uae' }
  ],
  'Africa': [
    { name: 'Mauritius', slug: 'mauritius' }
  ],
  'America': [
    { name: 'Panama', slug: 'panama' }
  ]
};

const regions = [
  { name: 'Asia Pacific', top: '45%', left: '75%' },
  { name: 'Europe', top: '30%', left: '52%' },
  { name: 'Caribbean', top: '48%', left: '25%' },
  { name: 'Middle East', top: '50%', left: '60%' },
  { name: 'Africa', top: '60%', left: '52%' },
  { name: 'America', top: '40%', left: '20%' }
];

export function GlobalFeatures() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-[1000px] mx-auto flex items-center justify-center">
      {/* Globe Container with Dots */}
      <div className="relative w-full max-w-[700px] h-[450px] flex items-center justify-center">
        {/* Globe Image */}
        <img 
          src={imgGlobe} 
          alt="Global Network" 
          className="w-full h-full object-contain"
        />
        
        {/* Region Dots */}
        {regions.map((region, index) => (
          <div
            key={index}
            className="absolute group cursor-pointer z-10"
            style={{ top: region.top, left: region.left }}
            onMouseEnter={() => setHoveredRegion(region.name)}
            onMouseLeave={() => setHoveredRegion(null)}
          >
            {/* Animated Pulse Ring */}
            <div className="absolute inset-0 -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-[#C91F26] rounded-full opacity-20 animate-ping"></div>
            </div>
            
            {/* Main Dot */}
            <div className="relative w-4 h-4 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 bg-[#C91F26] rounded-full shadow-lg shadow-[#C91F26]/50"></div>
              <div className="absolute inset-1 bg-white rounded-full"></div>
            </div>
            
            {/* Jurisdictions Popup */}
            {hoveredRegion === region.name && (
              <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap z-50 pointer-events-auto">
                <div className="bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden min-w-[280px] max-w-[320px]">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[#C91F26] to-[#8b151a] px-4 py-3">
                    <h3 className="text-white font-bold text-base">{region.name}</h3>
                  </div>
                  
                  {/* Jurisdictions List */}
                  <div className="max-h-[400px] overflow-y-auto">
                    {jurisdictionsByRegion[region.name as keyof typeof jurisdictionsByRegion]?.map((jurisdiction, idx) => (
                      <Link
                        key={idx}
                        to={`/jurisdiction/${jurisdiction.slug}`}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[#2C2C2C] font-medium text-sm group-hover:text-[#C91F26] transition-colors">
                            {jurisdiction.name}
                          </span>
                          <svg 
                            className="w-4 h-4 text-gray-400 group-hover:text-[#C91F26] transition-all transform group-hover:translate-x-1" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
                {/* Arrow pointer */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 rotate-45"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}