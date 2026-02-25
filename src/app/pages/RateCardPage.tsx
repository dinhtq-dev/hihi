import { Check, Play, FileText, Building2, Users, Globe, Shield, CheckCircle2, ArrowRight, Download, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBanner from 'figma:asset/66068a030bbc195bf565e1ac26d87544046f1c78.png';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { useState } from 'react';
import { Building } from 'lucide-react';

export function RateCardPage() {
  // Company Incorporation Features
  const incorporationFeatures = [
    'Incorporation documents issued by the relevant authority',
    'Corporate constitutional documentation',
    'Registered office and local representation, where applicable',
    'Shareholding and management structure documentation',
    'Initial corporate administration support'
  ];

  // Annual Renewal Features
  const renewalFeatures = [
    'Renewal of registered office and local representation, where applicable',
    'Governmental renewal charges in accordance with local regulations',
    'Ongoing corporate administration support',
    'Compliance monitoring and statutory maintenance (subject to scope and jurisdiction)'
  ];

  // Company Types for Incorporation
  const incorporationPricing = [
    { 
      type: 'Company Limited by Shares',
      recommended: true,
      serviceFeeYear1: 'US$ 1,039',
      serviceFeeYear2Plus: 'US$ 1,048',
      governmentFee: 'US$ 529'
    },
    { 
      type: 'Company Limited by Guarantee',
      recommended: false,
      serviceFeeYear1: 'US$ 1,039',
      serviceFeeYear2Plus: 'US$ 1,048',
      governmentFee: 'US$ 561'
    }
  ];

  // Company Types for Annual Renewal
  const renewalPricing = [
    { 
      type: 'Company Limited by Shares',
      recommended: true,
      serviceFeeYear1: 'US$ 1,308',
      serviceFeeYear2Plus: 'US$ 1,048',
      governmentFee: 'US$ 529'
    },
    { 
      type: 'Company Limited by Guarantee',
      recommended: false,
      serviceFeeYear1: 'US$ 1,340',
      serviceFeeYear2Plus: 'US$ 1,048',
      governmentFee: 'US$ 561'
    }
  ];

  // Bank Account Opening - Flat list of all banks
  const allBanks = [
    'Belize Bank International',
    'Caye International Bank',
    'Airwallex',
    'International Merchant Bank Limited',
    'Currenxie',
    'Statrys',
    'MauBank Ltd',
    'Bank One',
    'AfrAsia Bank Limited',
    'CIM Banque',
    'Pacific Private Bank',
    'Bank of New Innovation Limited',
    'PROVEN Bank',
    'Aspire',
    'WALLEX',
    'CBiBank'
  ];

  // Optional Services
  const optionalServices = [
    { name: 'Account Opening Consultancy', price: 'From US$ 899' },
    { name: 'Accounting and Auditing', price: 'From US$ 899' },
    { name: 'Nominee Director/Shareholder Services', price: 'From US$ 899' },
    { name: 'Serviced Office', price: 'From US$ 899' },
    { name: 'Merchant Account Online', price: 'From US$ 899' },
    { name: 'Hong Kong Trademark Registration', price: 'From US$ 899' }
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <ImageWithFallback
          src={heroBanner}
          alt="Rates for Switzerland Company"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="text-2xl md:text-5xl lg:text-6xl text-white mb-4">
                Rates for Hong Kong Company
              </h1>
              <p className="text-lg lg:text-xl text-white/90 mb-6 lg:mb-8 leading-relaxed">
                To remain competitive while ensuring full transparency across all services
              </p>
              <Link
                to="/setup-now"
                className="inline-flex items-center gap-2 bg-[#C91F26] text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg hover:bg-[#A01820] transition-all duration-300 text-base lg:text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105"
              >
                Register Your Company
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Incorporation & Annual Renewal Section - Side by Side */}
      <section className="py-[30px] lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Features Section - Two Column Layout (Moved to Top) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {/* Company Incorporation Features */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 lg:p-8">
              <h4 className="text-lg lg:text-xl font-semibold text-[#2C2C2C] mb-4 lg:mb-6">
                Company Incorporation Includes
              </h4>
              <div className="space-y-3 mb-6">
                {incorporationFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="text-green-600" size={18} strokeWidth={2} />
                    </div>
                    <p className="text-[#2C2C2C] text-sm leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Incorporation CTA */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/setup-now"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C91F26] text-white rounded-lg hover:bg-[#A01820] transition-all duration-300 text-base font-medium shadow-md hover:shadow-lg"
                >
                  <ArrowRight size={18} />
                  Start Incorporation Now
                </Link>
              </div>
            </div>

            {/* Annual Renewal Features */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 lg:p-8">
              <h4 className="text-lg lg:text-xl font-semibold text-[#2C2C2C] mb-4 lg:mb-6">
                Annual Renewal Includes
              </h4>
              <div className="space-y-3 mb-6">
                {renewalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="text-green-600" size={18} strokeWidth={2} />
                    </div>
                    <p className="text-[#2C2C2C] text-sm leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Renewal CTA */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#C91F26] text-white rounded-lg hover:bg-[#A01820] transition-all duration-300 text-base font-medium shadow-md hover:shadow-lg"
                >
                  <ArrowRight size={18} />
                  Renew Your Company
                </Link>
              </div>
            </div>
          </div>

          {/* Unified Pricing Table */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8 lg:mb-12">
            <div className="p-6 lg:p-8">
              <h3 className="text-xl md:text-2xl lg:text-3xl text-[#2C2C2C] mb-3 lg:mb-4 font-semibold">
                Company Services & Pricing
              </h3>
              <p className="text-sm lg:text-base text-gray-600 mb-6 lg:mb-8 leading-relaxed">
                Complete pricing overview for incorporation and annual renewal services
              </p>

              {/* Desktop Unified Table */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-gray-100 to-gray-50">
                      <th className="text-left p-4 text-sm font-semibold text-[#2C2C2C] border border-gray-200">
                        Type of Company
                      </th>
                      <th className="text-center p-4 text-sm font-semibold text-[#2C2C2C] border border-gray-200">
                        <div>Service Fee</div>
                        <div className="text-xs font-normal text-gray-500 mt-1">(1st Year)</div>
                      </th>
                      <th className="text-center p-4 text-sm font-semibold text-[#2C2C2C] border border-gray-200">
                        <div>Service Fee</div>
                        <div className="text-xs font-normal text-gray-500 mt-1">(Year 2+)</div>
                      </th>
                      <th className="text-center p-4 text-sm font-semibold text-[#2C2C2C] border border-gray-200">
                        Gov. Fee
                      </th>
                      <th className="text-center p-4 text-sm font-semibold text-[#2C2C2C] border border-gray-200">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {incorporationPricing.map((item, index) => (
                      <tr key={index} className="bg-white hover:bg-gray-50 transition-colors">
                        <td className="p-4 border border-gray-200">
                          <div className="font-medium text-[#2C2C2C]">
                            {item.type}
                            {item.recommended && (
                              <span className="ml-2 inline-block px-2.5 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Recommended</span>
                            )}
                          </div>
                        </td>
                        <td className="p-4 text-center border border-gray-200 bg-red-50/30">
                          <div className="font-bold text-[#C91F26] text-base">{item.serviceFeeYear1}</div>
                          <div className="text-xs text-gray-500 mt-1">Incorporation</div>
                        </td>
                        <td className="p-4 text-center border border-gray-200 bg-blue-50/30">
                          <div className="font-bold text-[#C91F26] text-base">{item.serviceFeeYear2Plus}</div>
                          <div className="text-xs text-gray-500 mt-1">Annual Renewal</div>
                        </td>
                        <td className="p-4 text-center border border-gray-200">
                          <span className="font-semibold text-[#2C2C2C]">{item.governmentFee}</span>
                        </td>
                        <td className="p-4 text-center border border-gray-200">
                          <div className="flex flex-col gap-2">
                            <Link
                              to="/setup-now"
                              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#C91F26] text-white rounded-md hover:bg-[#A01820] transition-all duration-300 text-xs font-medium"
                            >
                              <ArrowRight size={14} />
                              Incorporate
                            </Link>
                            <button 
                              className="inline-flex items-center justify-center gap-1.5 px-3 py-2 border border-gray-300 text-gray-700 rounded-md hover:border-[#C91F26] hover:text-[#C91F26] transition-all duration-300 text-xs font-medium"
                            >
                              <Package size={14} />
                              View Kit
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="lg:hidden space-y-6">
                {incorporationPricing.map((item, index) => (
                  <div key={index} className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-[#C91F26] transition-all">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 border-b border-gray-200">
                      <h5 className="font-semibold text-[#2C2C2C] text-base">
                        {item.type}
                      </h5>
                      {item.recommended && (
                        <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Recommended</span>
                      )}
                    </div>
                    
                    {/* Pricing Grid */}
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        {/* Year 1 */}
                        <div className="bg-red-50 rounded-lg p-3 border border-red-100">
                          <p className="text-xs text-gray-600 mb-1 font-medium">Service Fee (1st Year)</p>
                          <p className="font-bold text-[#C91F26] text-lg">{item.serviceFeeYear1}</p>
                          <p className="text-xs text-gray-500 mt-1">Incorporation</p>
                        </div>
                        
                        {/* Year 2+ */}
                        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                          <p className="text-xs text-gray-600 mb-1 font-medium">Service Fee (Year 2+)</p>
                          <p className="font-bold text-[#C91F26] text-lg">{item.serviceFeeYear2Plus}</p>
                          <p className="text-xs text-gray-500 mt-1">Annual Renewal</p>
                        </div>
                      </div>
                      
                      {/* Gov Fee */}
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 mb-4 text-center">
                        <p className="text-xs text-gray-600 mb-1 font-medium">Government Fee</p>
                        <p className="font-bold text-[#2C2C2C] text-base">{item.governmentFee}</p>
                      </div>
                      
                      {/* Actions */}
                      <div className="space-y-2">
                        <Link
                          to="/setup-now"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#C91F26] text-white rounded-lg hover:bg-[#A01820] transition-all duration-300 text-sm font-medium"
                        >
                          <ArrowRight size={16} />
                          Start Incorporation
                        </Link>
                        <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:border-[#C91F26] hover:text-[#C91F26] transition-all duration-300 text-sm font-medium">
                          <Package size={16} />
                          View Company Kit
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hong Kong Main Page CTA */}
          <div className="bg-gradient-to-r from-[#C91F26] to-[#A01820] rounded-2xl overflow-hidden shadow-xl">
            <div className="flex flex-col lg:flex-row items-center justify-between p-6 lg:p-8 gap-6">
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Play className="text-white" size={32} />
                </div>
                <div className="text-left">
                  <h4 className="text-xl lg:text-2xl font-semibold text-white mb-2">
                    Hong Kong Main Page
                  </h4>
                  <p className="text-white/90 text-sm lg:text-base leading-relaxed">
                    Watch our comprehensive video guide for complete details on Hong Kong company setup
                  </p>
                </div>
              </div>
              <button className="flex-shrink-0 bg-white text-[#C91F26] px-6 lg:px-8 py-3 lg:py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 text-base lg:text-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 whitespace-nowrap">
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Account Opening Section */}
      <section className="py-[30px] lg:py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 lg:mb-10">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <CheckCircle2 size={18} />
              Bank Account Opening
            </div>
            <h2 className="text-2xl md:text-5xl lg:text-6xl text-[#2C2C2C] mb-3 lg:mb-4">
              Banking Options Across Jurisdictions
            </h2>
            <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Partner banks available for Hong Kong company account opening
            </p>
          </div>

          {/* Banks Grid - Logo + Name Only */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-5 mb-8 lg:mb-10">
            {allBanks.map((bank, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg p-4 lg:p-5 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center"
              >
                {/* Bank Logo Placeholder */}
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-gray-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#C91F26] transition-colors">
                  <Building className="text-gray-400 group-hover:text-white transition-colors" size={24} />
                </div>
                {/* Bank Name */}
                <p className="text-sm lg:text-base text-[#2C2C2C] font-medium leading-snug">
                  {bank}
                </p>
              </div>
            ))}
          </div>

          {/* Stats Summary */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 p-6 lg:p-8 mb-8 lg:mb-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C91F26] mb-2">
                  {allBanks.length}
                </div>
                <p className="text-sm text-gray-600">Partner Banks</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C91F26] mb-2">
                  100%
                </div>
                <p className="text-sm text-gray-600">Support</p>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C91F26] mb-2">
                  24/7
                </div>
                <p className="text-sm text-gray-600">Assistance</p>
              </div>
            </div>
          </div>

          {/* Important Note */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-5 lg:p-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Shield className="text-amber-600" size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-amber-900 mb-2 text-base lg:text-lg">Important Information</h4>
                  <p className="text-amber-800 text-sm lg:text-base leading-relaxed">
                    Our service covers application preparation and submission. Final approval depends on the bank's due diligence process. We ensure all documentation is properly prepared to maximize approval chances.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Services Section */}
      <section className="py-[30px] lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 lg:mb-12">
            <h2 className="text-2xl md:text-5xl lg:text-6xl text-[#2C2C2C] mb-3 lg:mb-4">
              Optional Services
            </h2>
            <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Additional professional services to support your business operations
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
            {optionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#C91F26] hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-[#2C2C2C] flex-1">
                    {service.name}
                  </h4>
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-[#C91F26] group-hover:text-white transition-colors flex-shrink-0">
                    <FileText size={20} />
                  </div>
                </div>
                <div className="text-xl font-bold text-[#C91F26]">
                  {service.price}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 lg:mt-16 text-center">
            <div className="bg-gradient-to-r from-[#C91F26] to-[#A01820] rounded-2xl p-8 lg:p-12 text-white max-w-4xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-semibold mb-4">
                Need a Custom Solution?
              </h3>
              <p className="text-white/90 text-base lg:text-lg mb-6 lg:mb-8 max-w-2xl mx-auto">
                Our team of experts is ready to help you find the perfect package for your business needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#C91F26] px-6 lg:px-8 py-3 lg:py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 text-base lg:text-lg font-medium shadow-lg hover:shadow-xl"
                >
                  Contact Us
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/setup-now"
                  className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg hover:bg-white hover:text-[#C91F26] transition-all duration-300 text-base lg:text-lg font-medium"
                >
                  Get Started Now
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-[30px] lg:py-20 bg-white">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-10 border border-gray-200">
            <h3 className="text-xl lg:text-2xl font-semibold text-[#2C2C2C] mb-4 lg:mb-6">
              Setting Company and Renewal Fees
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div>
                <h4 className="font-semibold text-[#2C2C2C] mb-3 flex items-center gap-2">
                  <Building2 className="text-[#C91F26]" size={20} />
                  Setting Up a Company
                </h4>
                <ul className="space-y-2 text-gray-600 text-sm lg:text-base">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    <span>Professional business setup services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    <span>Complete documentation package</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    <span>Government registration assistance</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#2C2C2C] mb-3 flex items-center gap-2">
                  <Globe className="text-[#C91F26]" size={20} />
                  Remarks & Fees
                </h4>
                <ul className="space-y-2 text-gray-600 text-sm lg:text-base">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    <span>Transparent pricing structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    <span>No hidden charges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                    <span>Annual renewal support available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}