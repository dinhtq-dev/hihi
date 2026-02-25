import { Link } from 'react-router-dom';
import { CheckCircle2, PlayCircle } from 'lucide-react';
import heroImage from 'figma:asset/3c0f9b86ad8baacf682c29b1fea80d8460c57618.png';

export function FeesPage() {
  const bankAccountServices = [
    { country: 'Hong Kong (Physical presence)', price: '€ 300' },
    { country: 'Singapore', price: '€ 2,500' },
    { country: 'United Arab Emirates', price: '€ 1,000' },
    { country: 'Switzerland', price: '€ 5,000' },
    { country: 'USA LLC', price: '€ 1,500' },
    { country: 'Mauritius', price: '€ 500' },
    { country: 'EURO (Czech / Spain)', price: '€ 1,000' },
    { country: 'EURO (CIM Banque Switzerland)', price: '€ 2,500' },
    { country: 'EURO (Switzerland)', price: '€ 5,000' },
    { country: 'USA EURO (USA international)', price: '€ 3,000' },
    { country: 'Cyprus Bank Account', price: '€ 2,500' },
    { country: 'Europe', price: '€ 3,000' },
  ];

  const optionalServices = [
    { service: 'Company and shareholders\' records, register book, resolution and minutes for extra company', price: '€ 100' },
    { service: 'Founder Share', price: '€ 150' },
    { service: 'SFM Share Certificates supporting you and your clients\' names as holders', price: '€ 200' },
    { service: 'Company and shareholders\' records, register book, resolution and minutes', price: '€ 100' },
    { service: 'Chartered Secretary', price: '€ 500' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#2C2C2C]/70"></div>
        
        <div className="px-[311.576px] relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-['Inter:Bold',sans-serif] font-bold text-white text-[56px] leading-[64px] mb-6">
              RATES FOR<br />
              SWITZERLAND<br />
              COMPANY
            </h1>
            <p className="font-['Inter:Regular',sans-serif] text-white/90 text-[18px] leading-[28px] mb-8">
              Structured rates and transparent pricing for Switzerland company formation and ongoing support services.
            </p>
            <Link
              to="/setup-now"
              className="bg-[#C91F26] hover:bg-[#a51920] text-white font-['Inter:Bold',sans-serif] font-bold text-[16px] px-8 py-4 rounded-full transition-all duration-300 shadow-lg inline-flex items-center gap-2 group"
            >
              REQUEST YOUR COMPANY
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Setting Up & Renewal Section */}
      <section className="py-20 bg-[#0A2D3D]">
        <div className="px-[311.576px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Setting Up a Company */}
            <div>
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-white text-[28px] leading-[36px] mb-6 uppercase">
                SETTING UP A COMPANY
              </h2>
              <p className="font-['Inter:Regular',sans-serif] text-white/80 text-[14px] leading-[22px] mb-6">
                Package and information on the company and tools needed:
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C91F26] mt-0.5 flex-shrink-0" />
                  <p className="font-['Inter:Regular',sans-serif] text-white/90 text-[14px] leading-[22px]">
                    100% satisfaction and confidentiality guaranteed
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C91F26] mt-0.5 flex-shrink-0" />
                  <p className="font-['Inter:Regular',sans-serif] text-white/90 text-[14px] leading-[22px]">
                    Company's support via email
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C91F26] mt-0.5 flex-shrink-0" />
                  <p className="font-['Inter:Regular',sans-serif] text-white/90 text-[14px] leading-[22px]">
                    Unlimited support via email through portal
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C91F26] mt-0.5 flex-shrink-0" />
                  <p className="font-['Inter:Regular',sans-serif] text-white/90 text-[14px] leading-[22px]">
                    Telephone support (business hours)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C91F26] mt-0.5 flex-shrink-0" />
                  <p className="font-['Inter:Regular',sans-serif] text-white/90 text-[14px] leading-[22px]">
                    24-Hour emergency support available
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C91F26] mt-0.5 flex-shrink-0" />
                  <p className="font-['Inter:Regular',sans-serif] text-white/90 text-[14px] leading-[22px]">
                    2x phone
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C91F26] mt-0.5 flex-shrink-0" />
                  <p className="font-['Inter:Regular',sans-serif] text-white/90 text-[14px] leading-[22px]">
                    Live chat plus direct line to bank on customer service
                  </p>
                </div>
              </div>
              <button className="bg-white hover:bg-gray-100 text-[#C91F26] font-['Inter:Bold',sans-serif] font-bold text-[14px] px-6 py-3 rounded-full transition-all duration-300 shadow-md inline-flex items-center gap-2 group w-full justify-center">
                MORE DETAILS & PRICING INFORMATION
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Renewal Fees */}
            <div>
              <h2 className="font-['Inter:Bold',sans-serif] font-bold text-white text-[28px] leading-[36px] mb-6 uppercase">
                RENEWAL FEES
              </h2>
              <p className="font-['Inter:Regular',sans-serif] text-white/80 text-[14px] leading-[22px] mb-6">
                List of services included:
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C91F26] mt-0.5 flex-shrink-0" />
                  <p className="font-['Inter:Regular',sans-serif] text-white/90 text-[14px] leading-[22px]">
                    Renewal of the jurisdiction & renewal of the governmental fees
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C91F26] mt-0.5 flex-shrink-0" />
                  <p className="font-['Inter:Regular',sans-serif] text-white/90 text-[14px] leading-[22px]">
                    Company support via email, portal support
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C91F26] mt-0.5 flex-shrink-0" />
                  <p className="font-['Inter:Regular',sans-serif] text-white/90 text-[14px] leading-[22px]">
                    + EM included with 5% from the service fees/month
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C91F26] mt-0.5 flex-shrink-0" />
                  <p className="font-['Inter:Regular',sans-serif] text-white/90 text-[14px] leading-[22px]">
                    Apostille services when 1000 euro per service/per location
                  </p>
                </div>
              </div>
              <button className="bg-white hover:bg-gray-100 text-[#C91F26] font-['Inter:Bold',sans-serif] font-bold text-[14px] px-6 py-3 rounded-full transition-all duration-300 shadow-md inline-flex items-center gap-2 group w-full justify-center">
                MORE DETAILS & PRICING INFORMATION
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Request Info Button */}
          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-[#C91F26] hover:bg-[#a51920] text-white font-['Inter:Bold',sans-serif] font-bold text-[16px] px-10 py-4 rounded-full transition-all duration-300 shadow-lg inline-flex items-center gap-2 group"
            >
              REQUEST INFO NOW
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="px-[311.576px]">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer">
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Logo and Title Overlay */}
                  <div className="absolute top-8 left-8 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-[#C91F26] rounded-lg flex items-center justify-center">
                        <span className="font-['Inter:Bold',sans-serif] font-bold text-white text-[20px]">SFM</span>
                      </div>
                      <div>
                        <p className="font-['Inter:Bold',sans-serif] font-bold text-[#2C2C2C] text-[16px]">SFM Offshore</p>
                        <p className="font-['Inter:Regular',sans-serif] text-gray-600 text-[12px]">Pricing Policy Registration</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Play Button */}
                  <div className="relative">
                    <div className="w-20 h-20 bg-[#C91F26] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <PlayCircle className="w-12 h-12 text-white" fill="white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Account Opening Assistance */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="px-[311.576px]">
          <div className="text-center mb-12">
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[#2C2C2C] text-[40px] leading-[48px] mb-4">
              BANK ACCOUNT OPENING <span className="text-[#C91F26]">ASSISTANCE</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
              {bankAccountServices.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#C91F26] to-[#a51920] rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-['Inter:Regular',sans-serif] text-[#2C2C2C] text-[15px]">{item.country}</p>
                  </div>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[#C91F26] text-[16px]">{item.price}</p>
                </div>
              ))}
            </div>

            <p className="font-['Inter:Regular',sans-serif] text-gray-600 text-[13px] leading-[20px] mt-8 text-center">
              Notes: For individual access to each banking portal account, the guide fees are valid only for the duration of the license by request.
            </p>
          </div>
        </div>
      </section>

      {/* Optional Services */}
      <section className="py-20 bg-white">
        <div className="px-[311.576px]">
          <div className="text-center mb-12">
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-[#2C2C2C] text-[40px] leading-[48px] mb-4">
              OPTIONAL SERVICES
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {optionalServices.map((item, index) => (
                <div key={index} className="flex items-start justify-between py-5 px-6 border border-gray-200 rounded-xl hover:border-[#C91F26]/30 hover:shadow-md transition-all duration-300 bg-gradient-to-r from-white to-gray-50">
                  <p className="font-['Inter:Regular',sans-serif] text-[#2C2C2C] text-[15px] leading-[24px] flex-1 pr-6">
                    {item.service}
                  </p>
                  <p className="font-['Inter:Bold',sans-serif] font-bold text-[#C91F26] text-[18px] whitespace-nowrap">{item.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Request Button */}
          <div className="text-center mt-12">
            <Link
              to="/setup-now"
              className="bg-[#C91F26] hover:bg-[#a51920] text-white font-['Inter:Bold',sans-serif] font-bold text-[16px] px-10 py-4 rounded-full transition-all duration-300 shadow-lg inline-flex items-center gap-2 group"
            >
              REQUEST YOUR COMPANY
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Company Formation and Business Solutions */}
      <section className="py-16 bg-[#0A2D3D]">
        <div className="px-[311.576px]">
          <div className="text-center mb-12">
            <h2 className="font-['Inter:Bold',sans-serif] font-bold text-white text-[32px] leading-[40px] mb-4 uppercase">
              COMPANY FORMATION<br />AND BUSINESS SOLUTIONS
            </h2>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-16 h-16 bg-[#C91F26] rounded-lg flex items-center justify-center">
                <span className="font-['Inter:Bold',sans-serif] font-bold text-white text-[24px]">SFM</span>
              </div>
            </div>
          </div>

          {/* Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* International Jurisdictions */}
            <div>
              <h3 className="font-['Inter:Bold',sans-serif] font-bold text-white text-[18px] leading-[26px] mb-6 uppercase">
                INTERNATIONAL JURISDICTIONS
              </h3>
              <div className="space-y-3">
                {['Cyprus', 'United Kingdom', 'USA LLC', 'Switzerland', 'United Arab Emirates', 'Luxembourg', 'Costa Rica'].map((item, index) => (
                  <a key={index} href="#" className="block font-['Inter:Regular',sans-serif] text-white/80 text-[14px] hover:text-[#C91F26] hover:translate-x-1 transition-all duration-200">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* United Arab Emirates */}
            <div>
              <h3 className="font-['Inter:Bold',sans-serif] font-bold text-white text-[18px] leading-[26px] mb-6 uppercase">
                UNITED ARAB EMIRATES
              </h3>
              <div className="space-y-3">
                {['Company formation United Arab Emirates', 'LLC Dubai South Free Zone', 'IFZA Dubai', 'ADGM Abu Dhabi', 'RAK Offshore'].map((item, index) => (
                  <a key={index} href="#" className="block font-['Inter:Regular',sans-serif] text-white/80 text-[14px] hover:text-[#C91F26] hover:translate-x-1 transition-all duration-200">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-['Inter:Bold',sans-serif] font-bold text-white text-[18px] leading-[26px] mb-6 uppercase">
                RESOURCES
              </h3>
              <div className="space-y-3">
                {['About Jurisdictions', 'Check Availability', 'FAQs', 'Contact', 'NEWS'].map((item, index) => (
                  <a key={index} href="#" className="block font-['Inter:Regular',sans-serif] text-white/80 text-[14px] hover:text-[#C91F26] hover:translate-x-1 transition-all duration-200">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <p className="font-['Inter:Regular',sans-serif] text-white/60 text-[12px] text-center mb-6">
              WE ACCEPT PAYMENT METHODS
            </p>
            <div className="flex items-center justify-center gap-8">
              <div className="text-white/40 text-[10px] font-['Inter:Bold',sans-serif]">VISA</div>
              <div className="text-white/40 text-[10px] font-['Inter:Bold',sans-serif]">MASTERCARD</div>
              <div className="text-white/40 text-[10px] font-['Inter:Bold',sans-serif]">PAYPAL</div>
              <div className="text-white/40 text-[10px] font-['Inter:Bold',sans-serif]">BANK TRANSFER</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
