import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, Building2, FileText, Users, Scale, Shield, TrendingUp, MapPin, Clock, DollarSign, Briefcase, CheckCircle2, Zap, Landmark } from 'lucide-react';
import nextStepsImage from 'figma:asset/b091c335416fd5018d072bb72798c37d3d77fa92.png';
import nomineeFeeTableImage from 'figma:asset/dcf73731225e47e34b5b1cb35586aa768f036d93.png';
import legalityImage from 'figma:asset/20278ebd6a5ba4e5f9cc9261dbd88cdfa801512e.png';
import ctaOverlay from 'figma:asset/3147bd2f1cbdef76b1b253867b5cc549e39248bf.png';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import Section382580 from '@/imports/Section-38-2580';

export function NomineeServicesPage() {
  const navigate = useNavigate();

  const benefits = [
    {
      icon: Check,
      title: 'Clear Compliance Support',
      description: 'Meet statutory requirements with structured and compliant appointments.'
    },
    {
      icon: Shield,
      title: 'Privacy Where Permitted',
      description: 'Reduce public exposure of ownership details, subject to local rules.'
    },
    {
      icon: Users,
      title: 'Ongoing Administrative Support',
      description: 'Professional coordination with authorities, banks, and service providers.'
    }
  ];

  const nomineeTypes = [
    {
      icon: Users,
      title: 'Nominee Director',
      description: 'Appears as a director on statutory records to support governance needs.'
    },
    {
      icon: Briefcase,
      title: 'Nominee Shareholder',
      description: 'Appears on the share register where permitted, without changing beneficial ownership.'
    },
    {
      icon: FileText,
      title: 'Nominee Secretary',
      description: 'Supports jurisdictions where a company secretary is required (e.g., certain structures in Hong Kong and Singapore).'
    }
  ];

  // Jurisdictions data
  const jurisdictions = [
    { name: 'Hong Kong', flag: '🇭🇰', slug: 'hong-kong' },
    { name: 'Labuan, Malaysia', flag: '🇲🇾', slug: 'malaysia' },
    { name: 'Singapore', flag: '🇸🇬', slug: 'singapore' },
    { name: 'United Arab Emirates', flag: '🇦🇪', slug: 'uae' },
    { name: 'Vietnam', flag: '🇻🇳', slug: 'vietnam' },
    { name: 'Cyprus', flag: '🇨🇾', slug: 'cyprus' },
    { name: 'Gibraltar', flag: '🇬🇮', slug: 'gibraltar' },
    { name: 'Liechtenstein', flag: '🇱🇮', slug: 'liechtenstein' },
    { name: 'Luxembourg', flag: '🇱🇺', slug: 'luxembourg' },
    { name: 'Malta', flag: '🇲🇹', slug: 'malta' },
    { name: 'Netherlands', flag: '🇳🇱', slug: 'netherlands' },
    { name: 'Switzerland', flag: '🇨🇭', slug: 'switzerland' },
    { name: 'United Kingdom', flag: '🇬🇧', slug: 'uk' },
    { name: 'Anguilla', flag: '🇦🇮', slug: 'anguilla' },
    { name: 'Bahamas', flag: '🇧🇸', slug: 'bahamas' },
    { name: 'Belize', flag: '🇧🇿', slug: 'belize' },
    { name: 'British Virgin Islands', flag: '🇻🇬', slug: 'bvi' },
    { name: 'Cayman Islands', flag: '🇰🇾', slug: 'cayman' },
    { name: 'Panama', flag: '🇵🇦', slug: 'panama' },
    { name: 'Saint Kitts and Nevis', flag: '🇰🇳', slug: 'saint-kitts' },
    { name: 'Saint Lucia', flag: '🇱🇨', slug: 'saint-lucia' },
    { name: 'Saint Vincent & Grenadines', flag: '🇻🇨', slug: 'saint-vincent' },
    { name: 'Marshall Islands', flag: '🇲🇭', slug: 'marshall-islands' },
    { name: 'Samoa', flag: '🇼🇸', slug: 'samoa' },
    { name: 'Seychelles', flag: '🇸🇨', slug: 'seychelles' },
    { name: 'Vanuatu', flag: '🇻🇺', slug: 'vanuatu' }
  ];

  const legalityPoints = [
    'Nominee services are lawful when properly structured',
    'Beneficial ownership remains transparent',
    'Declaration of Trust is in place',
    'Power of Attorney defines authority',
    'Full compliance with regulatory standards'
  ];

  const steps = [
    {
      number: '1',
      title: 'Select your nominee service',
      description: 'Tell us your jurisdiction and the nominee type you need.'
    },
    {
      number: '2',
      title: 'We prepare the documents',
      description: 'We structure and prepare supporting documentation based on requirements.'
    },
    {
      number: '3',
      title: 'You retain control',
      description: 'Your beneficial ownership and business decisions remain with you.'
    }
  ];

  const nextSteps = [
    {
      icon: Building2,
      title: 'Business Account Support',
      description: 'Guidance for business account and payment setup, where available.'
    },
    {
      icon: MapPin,
      title: 'Document Legalisation',
      description: 'Support for document preparation and formalities for cross-border use.'
    },
    {
      icon: FileText,
      title: 'Compliance and Annual Maintenance',
      description: 'Ongoing support for filings, accounting, and renewal requirements.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="relative w-full aspect-[1920/542] overflow-hidden">
        <Section382580 />
      </section>

      {/* Section 1: Why Use Nominee Services */}
      <section className="py-[30px] lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center mb-6 lg:mb-16">
            <h2 className="text-2xl md:text-5xl lg:text-[40px] font-bold text-[#2C2C2C]">
              Why Use Nominee Services
            </h2>
          </div>

          {/* Key Benefits */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-3xl font-bold text-[#2C2C2C] mb-6 lg:mb-10 text-center">Key Benefits</h3>
            <div className="grid md:grid-cols-3 gap-4 lg:gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border border-[#DEE2E6] hover:border-[#C91F26] transition-all duration-300 hover:shadow-xl group"
                  >
                    <div className="bg-[#C91F26] w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-[#2C2C2C] mb-3">
                      {benefit.title}
                    </h4>
                    <p className="text-[#6C757D] leading-relaxed font-normal">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: CTA */}
      <section className="py-[30px] lg:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => navigate('/jurisdictions')}
              className="bg-[#C91F26] text-white px-10 py-4 rounded-xl hover:bg-[#a51920] transition-all duration-300 font-semibold text-lg inline-flex items-center gap-3 hover:gap-4 group shadow-lg hover:shadow-2xl"
            >
              <span>Check Nominee Requirement for Your Jurisdiction</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white text-[#C91F26] px-10 py-4 rounded-xl border-2 border-[#C91F26] hover:bg-[#C91F26] hover:text-white transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl">
              Talk to a Corporate Advisor
            </button>
          </div>
        </div>
      </section>

      {/* Section 3: Choose the Right Nominee Type */}
      <section className="py-[30px] lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 lg:mb-16">
            <h2 className="text-2xl md:text-5xl font-bold text-[#2C2C2C]">
              Choose the Right Nominee Type
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-4 lg:gap-8 max-w-6xl mx-auto">
            {nomineeTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border border-[#DEE2E6] hover:border-[#C91F26] transition-all duration-300 hover:shadow-xl text-center group"
                >
                  <div className="bg-[#C91F26] w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg lg:text-2xl font-semibold text-[#2C2C2C] mb-4">
                    {type.title}
                  </h3>
                  <p className="text-[#6C757D] leading-relaxed">
                    {type.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <button 
              onClick={() => navigate('/jurisdictions')}
              className="bg-[#C91F26] text-white px-10 py-4 rounded-xl hover:bg-[#a51920] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-2xl"
            >
              <span>Check Nominee Requirement by Jurisdiction</span>
            </button>
          </div>

          {/* Where can I appoint my nominee */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-[#2C2C2C] mb-10 text-center">
              Where can I appoint my nominee director or shareholder?
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-13 gap-6 max-w-7xl mx-auto">
              {jurisdictions.map((jurisdiction, index) => (
                <div
                  key={index}
                  onClick={() => navigate(`/jurisdiction/${jurisdiction.slug}`)}
                  className="flex flex-col items-center gap-2 cursor-pointer group"
                  title={jurisdiction.name}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg border border-[#DEE2E6] hover:border-[#C91F26] transition-all duration-300 hover:shadow-lg group-hover:scale-110">
                    {typeof jurisdiction.flag === 'string' ? (
                      <span className="text-3xl">{jurisdiction.flag}</span>
                    ) : (
                      <div className="scale-[1.4]">{jurisdiction.flag}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Legality and Safety */}
      <section className="py-[30px] lg:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C91F26]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-6 lg:mb-16">
            <h2 className="text-2xl md:text-5xl lg:text-[40px] font-bold text-[#2C2C2C]">
              Legality and Safety
            </h2>
          </div>

          {/* Two Column Layout - Image Left, Content Right on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Image (Hidden on Mobile) */}
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={legalityImage}
                  alt="Legal and Safety Compliance"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Right Column - Points List */}
            <div>
              <div className="space-y-3 lg:space-y-6">
                {legalityPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0">
                      <CheckCircle2 className="text-green-600" size={28} strokeWidth={1.5} />
                    </div>
                    <p className="text-[#2C2C2C] font-medium text-lg leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How It Works */}
      <section className="py-[30px] lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 lg:mb-16">
            <h2 className="text-2xl md:text-5xl lg:text-[40px] font-bold text-[#2C2C2C]">
              How It Works
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-4 lg:gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-[#DEE2E6]"></div>
                  )}
                  
                  <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border border-[#DEE2E6] hover:border-[#C91F26] transition-all duration-300 hover:shadow-xl relative z-10 text-center">
                    <div className="bg-[#C91F26] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-[#2C2C2C] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#6C757D] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="bg-[#C91F26] text-white px-10 py-4 rounded-xl hover:bg-[#a51920] transition-all duration-300 font-semibold text-lg inline-flex items-center gap-3 hover:gap-4 group shadow-lg hover:shadow-2xl">
                <span>Continue Company Setup</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Nominee Services Fee in Hong Kong */}
      <section className="py-[30px] lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C]">
              Nominee Services Fee in Hong Kong
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Desktop Table Version - Hidden on Mobile */}
            <div className="hidden lg:block bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-[#C91F26] to-[#a51920] px-8 py-6">
                <h3 className="text-white text-2xl font-bold">Nominee Services Pricing</h3>
                <p className="text-white/90 text-sm mt-1">Professional nominee services for Hong Kong companies</p>
              </div>

              {/* Table Content */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b-2 border-gray-200">
                      <th className="px-8 py-5 text-left text-sm font-bold text-[#2C2C2C] uppercase tracking-wider">
                        Service Type
                      </th>
                      <th className="px-8 py-5 text-left text-sm font-bold text-[#2C2C2C] uppercase tracking-wider">
                        Description
                      </th>
                      <th className="px-8 py-5 text-right text-sm font-bold text-[#2C2C2C] uppercase tracking-wider">
                        Annual Fee
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {/* Nominee Director Row */}
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200 group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-[#C91F26] transition-colors">
                            <Users className="w-6 h-6 text-[#C91F26] group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <div className="font-bold text-[#2C2C2C] text-lg">Nominee Director</div>
                            <div className="text-xs text-gray-500 mt-0.5">Individual appointment</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-[#6C757D] leading-relaxed">
                          Professional individual appointed as director on statutory records, with full documentation and compliance support.
                        </p>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="text-2xl font-bold text-[#C91F26]">USD 1,200</div>
                        <div className="text-sm text-gray-500 mt-1">per year</div>
                      </td>
                    </tr>

                    {/* Nominee Shareholder Row */}
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200 group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-[#C91F26] transition-colors">
                            <Briefcase className="w-6 h-6 text-[#C91F26] group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <div className="font-bold text-[#2C2C2C] text-lg">Nominee Shareholder</div>
                            <div className="text-xs text-gray-500 mt-0.5">Individual appointment</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-[#6C757D] leading-relaxed">
                          Appointed shareholder on register with Declaration of Trust, maintaining beneficial ownership rights.
                        </p>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="text-2xl font-bold text-[#C91F26]">USD 1,000</div>
                        <div className="text-sm text-gray-500 mt-1">per year</div>
                      </td>
                    </tr>

                    {/* Nominee Secretary Row */}
                    <tr className="hover:bg-blue-50/50 transition-colors duration-200 group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-[#C91F26] transition-colors">
                            <FileText className="w-6 h-6 text-[#C91F26] group-hover:text-white transition-colors" />
                          </div>
                          <div>
                            <div className="font-bold text-[#2C2C2C] text-lg">Nominee Secretary</div>
                            <div className="text-xs text-gray-500 mt-0.5">Corporate appointment</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-[#6C757D] leading-relaxed">
                          Professional company secretary service ensuring compliance with Hong Kong Companies Ordinance requirements.
                        </p>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="text-2xl font-bold text-[#C91F26]">USD 800</div>
                        <div className="text-sm text-gray-500 mt-1">per year</div>
                      </td>
                    </tr>

                    {/* Complete Package Row */}
                    <tr className="bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-colors duration-200 group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C91F26] to-[#a51920] flex items-center justify-center shadow-lg">
                            <CheckCircle2 className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-[#2C2C2C] text-lg flex items-center gap-2">
                              Complete Package
                              <span className="px-2 py-0.5 bg-[#C91F26] text-white text-xs rounded-full font-semibold">BEST VALUE</span>
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5">All nominee services included</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <p className="text-[#6C757D] leading-relaxed font-medium">
                          Full suite including Nominee Director, Nominee Shareholder, and Company Secretary services with comprehensive support.
                        </p>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex flex-col items-end">
                          <div className="text-sm text-gray-400 line-through">USD 3,000</div>
                          <div className="text-3xl font-bold text-[#C91F26]">USD 2,500</div>
                          <div className="text-sm text-green-600 font-semibold mt-1">Save USD 500</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table Footer */}
              <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
                <div className="flex items-start gap-3 text-sm text-[#6C757D]">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-[#2C2C2C] mb-2">All packages include:</p>
                    <ul className="space-y-1 ml-4">
                      <li>• Declaration of Trust and Power of Attorney documentation</li>
                      <li>• Annual compliance support and coordination</li>
                      <li>• Professional correspondence handling</li>
                      <li>• Secure document management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Card Version - Visible on Mobile and Tablet */}
            <div className="lg:hidden space-y-4">
              {/* Header Card */}
              <div className="bg-gradient-to-r from-[#C91F26] to-[#a51920] px-6 py-5 rounded-2xl shadow-lg">
                <h3 className="text-white text-xl font-bold">Nominee Services Pricing</h3>
                <p className="text-white/90 text-sm mt-1">Professional nominee services for Hong Kong companies</p>
              </div>

              {/* Nominee Director Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C91F26] to-[#a51920] flex items-center justify-center shadow-md">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-[#2C2C2C] text-lg">Nominee Director</div>
                        <div className="text-xs text-gray-500">Individual appointment</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#6C757D] text-sm leading-relaxed mb-4">
                    Professional individual appointed as director on statutory records, with full documentation and compliance support.
                  </p>
                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-sm text-gray-600">Annual Fee</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#C91F26]">USD 1,200</div>
                      <div className="text-xs text-gray-500">per year</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nominee Shareholder Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C91F26] to-[#a51920] flex items-center justify-center shadow-md">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-[#2C2C2C] text-lg">Nominee Shareholder</div>
                        <div className="text-xs text-gray-500">Individual appointment</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#6C757D] text-sm leading-relaxed mb-4">
                    Appointed shareholder on register with Declaration of Trust, maintaining beneficial ownership rights.
                  </p>
                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-sm text-gray-600">Annual Fee</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#C91F26]">USD 1,000</div>
                      <div className="text-xs text-gray-500">per year</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nominee Secretary Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C91F26] to-[#a51920] flex items-center justify-center shadow-md">
                        <FileText className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-[#2C2C2C] text-lg">Nominee Secretary</div>
                        <div className="text-xs text-gray-500">Corporate appointment</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#6C757D] text-sm leading-relaxed mb-4">
                    Professional company secretary service ensuring compliance with Hong Kong Companies Ordinance requirements.
                  </p>
                  <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-sm text-gray-600">Annual Fee</span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[#C91F26]">USD 800</div>
                      <div className="text-xs text-gray-500">per year</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Complete Package Card - Featured */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl border-2 border-[#C91F26] overflow-hidden">
                <div className="bg-[#C91F26] px-4 py-2">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">⭐ Best Value</span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C91F26] to-[#a51920] flex items-center justify-center shadow-lg">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-[#2C2C2C] text-lg">Complete Package</div>
                        <div className="text-xs text-gray-500">All nominee services included</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-[#6C757D] text-sm leading-relaxed mb-4 font-medium">
                    Full suite including Nominee Director, Nominee Shareholder, and Company Secretary services with comprehensive support.
                  </p>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Regular Price</span>
                      <span className="text-sm text-gray-400 line-through">USD 3,000</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#2C2C2C]">Special Price</span>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-[#C91F26]">USD 2,500</div>
                        <div className="text-sm text-green-600 font-semibold">Save USD 500</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Included Features Card */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-[#2C2C2C] mb-3 text-sm">All packages include:</p>
                    <ul className="space-y-2 text-sm text-[#6C757D]">
                      <li className="flex items-start gap-2">
                        <span className="text-[#C91F26] font-bold">•</span>
                        <span>Declaration of Trust and Power of Attorney documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C91F26] font-bold">•</span>
                        <span>Annual compliance support and coordination</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C91F26] font-bold">•</span>
                        <span>Professional correspondence handling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#C91F26] font-bold">•</span>
                        <span>Secure document management</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-blue-50 px-4 sm:px-6 py-4 rounded-xl border border-blue-200">
                <Clock className="w-5 h-5 text-[#C91F26] flex-shrink-0" />
                <div>
                  <div className="font-semibold text-[#2C2C2C] text-sm">Setup Time</div>
                  <div className="text-xs sm:text-sm text-[#6C757D]">3-5 business days</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-green-50 px-4 sm:px-6 py-4 rounded-xl border border-green-200">
                <Shield className="w-5 h-5 text-[#C91F26] flex-shrink-0" />
                <div>
                  <div className="font-semibold text-[#2C2C2C] text-sm">Compliance</div>
                  <div className="text-xs sm:text-sm text-[#6C757D]">Fully regulated & licensed</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-purple-50 px-4 sm:px-6 py-4 rounded-xl border border-purple-200 sm:col-span-2 lg:col-span-1">
                <DollarSign className="w-5 h-5 text-[#C91F26] flex-shrink-0" />
                <div>
                  <div className="font-semibold text-[#2C2C2C] text-sm">Payment Terms</div>
                  <div className="text-xs sm:text-sm text-[#6C757D]">Annual billing available</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <button 
                onClick={() => navigate('/setup-now')}
                className="w-full sm:w-auto bg-[#C91F26] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl hover:bg-[#a51920] transition-all duration-300 font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl"
              >
                <span>Get Started with Nominee Services</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Quick Launch & Asset Protection */}
      <section className="py-[30px] lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Launch: Shelf Company */}
          <div className="mb-12 lg:mb-16">
            <div className="text-center mb-6 lg:mb-8">
              <h2 className="text-2xl md:text-5xl font-bold text-[#2C2C2C] mb-4">
                Quick Launch: Shelf Company
              </h2>
              <p className="text-[#6C757D] text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
                Suitable for businesses requiring immediate operational readiness, with reduced setup time and an established company profile.
              </p>
            </div>

            <div className="flex justify-center">
              <button 
                onClick={() => navigate('/setup-now')}
                className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold text-base lg:text-lg inline-flex items-center gap-3 hover:gap-4 group shadow-lg hover:shadow-xl"
              >
                <Zap className="w-5 h-5" />
                <span>View Available Shelf Companies</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[var(--color-border)] my-12 lg:my-16"></div>

          {/* Asset Protection & Long-Term Structuring */}
          <div>
            <div className="text-center mb-6 lg:mb-12">
              <h2 className="text-2xl md:text-5xl font-bold text-[#2C2C2C]">
                Asset Protection & Long-Term Structuring
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mb-8">
              {/* Trust Card */}
              <div className="bg-gradient-to-br from-white to-blue-50 p-6 lg:p-8 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-xl group">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6 lg:w-7 lg:h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#2C2C2C] mb-3">
                  Trust
                </h3>
                <p className="text-[#6C757D] text-base lg:text-lg leading-relaxed">
                  Used for asset protection and succession planning through trustee management.
                </p>
              </div>

              {/* Foundation Card */}
              <div className="bg-gradient-to-br from-white to-blue-50 p-6 lg:p-8 rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-xl group">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Landmark className="w-6 h-6 lg:w-7 lg:h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-[#2C2C2C] mb-3">
                  Foundation
                </h3>
                <p className="text-[#6C757D] text-base lg:text-lg leading-relaxed">
                  An independent legal entity designed for long-term control and governance.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <button 
                onClick={() => navigate('/contact')}
                className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold text-base lg:text-lg inline-flex items-center gap-3 hover:gap-4 group shadow-lg hover:shadow-xl"
              >
                <Shield className="w-5 h-5" />
                <span>Protect My Assets</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Next Steps You May Need */}
      <section className="py-[30px] lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 lg:mb-16">
            <h2 className="text-2xl md:text-5xl lg:text-[40px] font-bold text-[#2C2C2C]">
              Next Steps You May Need
            </h2>
          </div>

          {/* Two Column Layout - Content Left, Image Right on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Steps List */}
            <div>
              <div className="space-y-8">
                {nextSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex gap-5 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-[#FFE8E8] flex items-center justify-center">
                          <Icon className="text-[#C91F26]" size={24} strokeWidth={2} />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-base lg:text-xl font-semibold text-[#2C2C2C] mb-2">
                          {step.title}
                        </h3>
                        <p className="text-[#6C757D] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Image (Hidden on Mobile) */}
            <div className="relative hidden lg:block">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src={nextStepsImage}
                  alt="Business Planning and Next Steps"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Continue Your Company Setup */}
      <section className="py-[30px] lg:py-24 bg-gradient-to-br from-[#C91F26] via-[#a51920] to-[#8B2A2F] text-white relative overflow-hidden">
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-10">
            Continue Your Company Setup
          </h2>
          <button className="bg-white text-[#C91F26] px-8 lg:px-12 py-4 lg:py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg lg:text-xl shadow-2xl">
            Continue Company Setup
          </button>
        </div>
      </section>
    </div>
  );
}