import { FileText, Calculator, Users, Building2, ShoppingCart, Award, Briefcase, ArrowRight, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

interface RecommendedServicesProps {
  country: string;
}

const services = [
  {
    icon: FileText,
    title: 'Account Opening Consultancy',
    description: 'Expert guidance for opening international bank accounts',
    link: null
  },
  {
    icon: Calculator,
    title: 'Accounting and Auditing',
    description: 'Professional accounting services and financial audits',
    link: null
  },
  {
    icon: Users,
    title: 'Nominee Director/Shareholder Services',
    description: 'Trusted nominee services for privacy and compliance',
    link: '/nominee-services'
  },
  {
    icon: Building2,
    title: 'Serviced Office',
    description: 'Premium office space and business address solutions',
    link: null
  },
  {
    icon: ShoppingCart,
    title: 'Merchant Account Online',
    description: 'Secure payment processing for your online business',
    link: null
  },
  {
    icon: Award,
    title: 'Hong Kong Trademark Registration',
    description: 'Protect your brand with trademark registration',
    link: null
  },
  {
    icon: Briefcase,
    title: 'Business License in Hong Kong',
    description: 'Complete assistance with business licensing',
    link: null
  }
];

export function RecommendedServices({ country }: RecommendedServicesProps) {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  
  // Mobile only - show 4 items initially
  const mobileDisplayedServices = showAll ? services : services.slice(0, 4);
  const hasMore = services.length > 4;

  return (
    <section className="py-[30px] lg:py-24 bg-gradient-to-b from-muted to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center mb-6 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-foreground leading-tight max-w-4xl mx-auto">
            Recommended Services for Your <span className="text-primary">{country}</span> Company
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Hide items beyond 4 on mobile unless showAll is true
            const isHiddenOnMobile = !showAll && index >= 4;
            
            return (
              <div
                key={index}
                onClick={() => service.link && navigate(service.link)}
                className={`bg-gradient-to-br from-card to-blue-50 p-8 rounded-xl border border-border hover:border-primary transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden group relative ${
                  isHiddenOnMobile ? 'hidden lg:block' : ''
                }`}
              >
                {/* White gradient overlay on last card when not showing all - Mobile only */}
                {!showAll && hasMore && index === 3 && (
                  <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white rounded-xl pointer-events-none lg:hidden z-10"></div>
                )}
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-16 h-16 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Learn More Link */}
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
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