import { Building, Wallet, Calculator, FileText, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    icon: Building,
    title: 'Company Formation',
    description: 'Register your company quickly and efficiently across multiple jurisdictions. We handle all legal documentation and compliance requirements.',
    features: [
      'Fast registration process',
      'Legal documentation support',
      'Multi-jurisdiction expertise',
      'Compliance assistance'
    ]
  },
  {
    icon: Wallet,
    title: 'Bank Account Opening',
    description: 'Open business bank accounts with leading international banks. We facilitate the entire process from application to approval.',
    features: [
      'International bank network',
      'Application assistance',
      'Multiple currency accounts',
      'Dedicated support'
    ]
  },
  {
    icon: Calculator,
    title: 'Accounting & Auditing',
    description: 'Professional accounting, auditing, and financial reporting services to keep your business compliant and financially healthy.',
    features: [
      'Monthly bookkeeping',
      'Financial reporting',
      'Tax compliance',
      'Audit preparation'
    ]
  },
  {
    icon: FileText,
    title: 'Tax Filing',
    description: 'Expert tax planning and filing services ensuring compliance with local and international tax regulations.',
    features: [
      'Tax optimization',
      'Filing assistance',
      'Compliance management',
      'Advisory services'
    ]
  }
];

export function Services() {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? services : services.slice(0, 4);
  const hasMore = services.length > 4;

  return (
    <section id="services" className="py-[30px] lg:py-20 bg-gradient-to-br from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-foreground">
            Our Core Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {displayedServices.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border group hover:border-primary relative"
            >
              {/* White gradient overlay on last card when not showing all - Mobile only */}
              {!showAll && hasMore && index === displayedServices.length - 1 && (
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white rounded-xl pointer-events-none md:hidden z-10"></div>
              )}
              
              <div className="bg-primary w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <button className="text-primary font-semibold hover:text-primary/80 transition-colors flex items-center">
                Learn More 
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* View More Text Link - Mobile Only */}
        {hasMore && !showAll && (
          <div className="flex justify-center mt-6 md:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="text-primary hover:text-primary/80 transition-colors font-semibold inline-flex items-center gap-2 group"
            >
              <span>View More</span>
              <ChevronDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}