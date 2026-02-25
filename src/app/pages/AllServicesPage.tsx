import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, Building2, Award, CheckCircle2, FolderOpen, Landmark, MapPin, Shield, Scale, Copyright, Calculator, Network, MoreHorizontal } from 'lucide-react';
import ctaOverlay from 'figma:asset/3147bd2f1cbdef76b1b253867b5cc549e39248bf.png';

const jurisdictions = [
  { name: 'Hong Kong', slug: 'hong-kong', region: 'Asia Pacific' },
  { name: 'Singapore', slug: 'singapore', region: 'Asia Pacific' },
  { name: 'Malaysia', slug: 'malaysia', region: 'Asia Pacific' },
  { name: 'Vietnam', slug: 'vietnam', region: 'Asia Pacific' },
  { name: 'Cyprus', slug: 'cyprus', region: 'Europe' },
  { name: 'Gibraltar', slug: 'gibraltar', region: 'Europe' },
  { name: 'Liechtenstein', slug: 'liechtenstein', region: 'Europe' },
  { name: 'Luxembourg', slug: 'luxembourg', region: 'Europe' },
  { name: 'Malta', slug: 'malta', region: 'Europe' },
  { name: 'Netherlands', slug: 'netherlands', region: 'Europe' },
  { name: 'Switzerland', slug: 'switzerland', region: 'Europe' },
  { name: 'United Kingdom', slug: 'uk', region: 'Europe' },
  { name: 'Anguilla', slug: 'anguilla', region: 'Caribbean' },
  { name: 'Bahamas', slug: 'bahamas', region: 'Caribbean' },
  { name: 'Belize', slug: 'belize', region: 'Caribbean' },
  { name: 'British Virgin Islands', slug: 'bvi', region: 'Caribbean' },
  { name: 'Cayman Islands', slug: 'cayman', region: 'Caribbean' },
  { name: 'Panama', slug: 'panama', region: 'Caribbean' },
  { name: 'St. Kitts & Nevis', slug: 'st-kitts', region: 'Caribbean' },
  { name: 'St. Lucia', slug: 'st-lucia', region: 'Caribbean' },
  { name: 'St. Vincent & Grenadines', slug: 'svg', region: 'Caribbean' },
  { name: 'Marshall Islands', slug: 'marshall', region: 'Pacific' },
  { name: 'Samoa', slug: 'samoa', region: 'Pacific' },
  { name: 'Seychelles', slug: 'seychelles', region: 'Africa' },
  { name: 'Vanuatu', slug: 'vanuatu', region: 'Pacific' },
  { name: 'Mauritius', slug: 'mauritius', region: 'Africa' },
  { name: 'United Arab Emirates', slug: 'uae', region: 'Middle East' },
];

export function AllServicesPage() {
  const [selectedJurisdiction, setSelectedJurisdiction] = useState('');

  const groupedJurisdictions = jurisdictions.reduce((acc, jurisdiction) => {
    if (!acc[jurisdiction.region]) {
      acc[jurisdiction.region] = [];
    }
    acc[jurisdiction.region].push(jurisdiction);
    return acc;
  }, {} as Record<string, typeof jurisdictions>);

  const coreServices = [
    { name: 'Incorporation', icon: Building2 },
    { name: 'Nominee Services', icon: Shield },
    { name: 'Certificates', icon: Award },
    { name: 'Certify / Notarize / Apostille', icon: CheckCircle2 },
    { name: 'Other Filings', icon: FolderOpen },
    { name: 'Bank – Setup Support', icon: Landmark },
    { name: 'Virtual / Physical Office', icon: MapPin },
  ];

  const additionalServices = [
    { name: 'Trust & Foundation Service', icon: Scale },
    { name: 'IP / Trademark', icon: Copyright },
    { name: 'Accounting & Auditing', icon: Calculator },
    { name: 'Corporate Structuring & Restructuring', icon: Network },
    { name: 'Other Services', icon: MoreHorizontal },
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#C91F26] via-[#a51920] to-[#8B1419] py-[30px] lg:py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Geometric Patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-32 left-20 w-24 h-24 border-4 border-white rotate-45"></div>
          <div className="absolute top-1/2 right-1/4 w-20 h-20 border-4 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-16 h-16 border-4 border-white rotate-45"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="px-4 lg:px-[311.576px] relative">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="font-['Inter:Bold',sans-serif] font-bold text-white text-2xl md:text-5xl lg:text-[72px] leading-tight lg:leading-[80px]">
              Our Services
            </h1>
          </div>
        </div>
      </div>

      {/* Core Company Services Section */}
      <div className="py-[30px] lg:py-24 bg-white">
        <div className="px-4 lg:px-[311.576px]">
          <div className="text-center mb-6 lg:mb-16">
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[#2C2C2C] text-2xl md:text-5xl lg:text-[40px] leading-tight lg:leading-[48px]">
              Core Company Services
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 max-w-7xl mx-auto">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              const isNomineeService = service.name === 'Nominee Services';
              
              const card = (
                <div
                  key={index}
                  onClick={isNomineeService ? () => navigate('/nominee-services') : undefined}
                  className={`group relative bg-white rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-gray-100 lg:border-2 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden ${isNomineeService ? 'cursor-pointer' : ''}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C91F26] via-[#a51920] to-[#8B1419] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl lg:rounded-2xl -z-10"></div>
                  <div className="absolute inset-[2px] bg-white rounded-xl lg:rounded-2xl -z-5"></div>
                  
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#C91F26] rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  
                  <div className="relative mb-3 lg:mb-6">
                    <div className="w-10 h-10 lg:w-16 lg:h-16 bg-red-50 group-hover:bg-gradient-to-br group-hover:from-[#C91F26] group-hover:to-[#8B1419] rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Icon className="w-5 h-5 lg:w-8 lg:h-8 text-[#C91F26] group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                  
                  <h3 className="font-['Inter:SemiBold',sans-serif] font-semibold text-[#2C2C2C] text-sm lg:text-[20px] leading-snug lg:leading-[30px] group-hover:text-[#C91F26] transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <div className="hidden lg:flex items-center gap-2 text-[#C91F26] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0 mt-2">
                    <span className="text-sm font-['Inter:Medium',sans-serif] font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
              
              return card;
            })}
          </div>
        </div>
      </div>

      {/* Additional Business Services Section */}
      <div className="py-[30px] lg:py-24 bg-gradient-to-br from-gray-50 via-white to-red-50">
        <div className="px-4 lg:px-[311.576px]">
          <div className="text-center mb-6 lg:mb-16">
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[#2C2C2C] text-2xl md:text-5xl lg:text-[40px] leading-tight lg:leading-[48px]">
              Additional Business Services
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 max-w-7xl mx-auto">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-xl lg:rounded-2xl p-4 lg:p-8 border border-gray-100 lg:border-2 hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C91F26] via-[#a51920] to-[#8B1419] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl lg:rounded-2xl -z-10"></div>
                  <div className="absolute inset-[2px] bg-white rounded-xl lg:rounded-2xl -z-5"></div>
                  
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#C91F26] rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  
                  <div className="relative mb-3 lg:mb-6">
                    <div className="w-10 h-10 lg:w-16 lg:h-16 bg-red-50 group-hover:bg-gradient-to-br group-hover:from-[#C91F26] group-hover:to-[#8B1419] rounded-lg lg:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Icon className="w-5 h-5 lg:w-8 lg:h-8 text-[#C91F26] group-hover:text-white transition-colors duration-500" />
                    </div>
                  </div>
                  
                  <h3 className="font-['Inter:SemiBold',sans-serif] font-semibold text-[#2C2C2C] text-sm lg:text-[20px] leading-snug lg:leading-[30px] group-hover:text-[#C91F26] transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <div className="hidden lg:flex items-center gap-2 text-[#C91F26] opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0 mt-2">
                    <span className="text-sm font-['Inter:Medium',sans-serif] font-medium">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-[30px] lg:py-24 bg-gradient-to-br from-[#C91F26] via-[#a51920] to-[#8B2A2F] relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
          style={{ backgroundImage: `url(${ctaOverlay})` }}
        ></div>
        
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>
        
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-white transform rotate-45"></div>
        </div>
        
        <div className="px-4 lg:px-[311.576px] relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6 lg:mb-12">
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-white text-2xl md:text-5xl lg:text-[48px] leading-tight lg:leading-[56px]">
                Get Started
              </h2>
            </div>

            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6 lg:p-10">
              <div className="flex flex-col md:flex-row gap-4 items-stretch">
                <div className="md:flex-[2] relative">
                  <label htmlFor="jurisdiction-select" className="block text-sm font-['Inter:Medium',sans-serif] font-medium text-gray-700 mb-2 uppercase tracking-wide">
                    Select Jurisdiction
                  </label>
                  <select
                    id="jurisdiction-select"
                    value={selectedJurisdiction}
                    onChange={(e) => setSelectedJurisdiction(e.target.value)}
                    className="w-full px-6 py-5 bg-white border-2 border-gray-200 rounded-xl text-gray-900 font-['Inter:Medium',sans-serif] font-medium appearance-none cursor-pointer hover:border-[#C91F26]/30 focus:border-[#C91F26] focus:outline-none focus:ring-2 focus:ring-[#C91F26]/20 transition-all duration-200 shadow-sm"
                  >
                    <option value="">Choose a jurisdiction...</option>
                    {Object.entries(groupedJurisdictions).map(([region, items]) => (
                      <optgroup key={region} label={region}>
                        {items.map((jurisdiction) => (
                          <option key={jurisdiction.slug} value={jurisdiction.slug}>
                            {jurisdiction.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                  </select>
                  <div className="absolute right-5 bottom-5 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div className="md:flex-1 flex flex-col justify-end">
                  <Link
                    to="/setup-now"
                    className="bg-[#C91F26] hover:bg-[#a51920] text-white font-['Inter:Bold',sans-serif] font-bold text-[18px] px-8 py-5 rounded-xl transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-3 group relative overflow-hidden border border-[#C91F26]/50"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                    <span className="relative">Register Now</span>
                    <ArrowRight className="relative w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {!selectedJurisdiction && (
                <p className="text-center text-sm text-gray-500 mt-6">
                  Please select a jurisdiction to continue
                </p>
              )}
            </div>

            <div className="mt-10 text-center">
              <p className="text-white/90 font-['Inter:Regular',sans-serif] text-[16px]">
                Not sure which jurisdiction to choose?{' '}
                <Link to="/compare-jurisdictions" className="text-white hover:underline font-['Inter:Bold',sans-serif] font-bold">
                  Compare jurisdictions
                </Link>
                {' '}or{' '}
                <Link to="/contact" className="text-white hover:underline font-['Inter:Bold',sans-serif] font-bold">
                  speak to an expert
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}