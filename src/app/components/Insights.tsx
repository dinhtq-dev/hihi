import { Building, Users, Award, Landmark, MapPin, Shield, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const insights = [
  {
    icon: Building,
    title: 'Company Incorporation',
    description: 'Offshore company registration in 70+ jurisdictions with full legal documentation.'
  },
  {
    icon: Users,
    title: 'Nominee Services',
    description: 'Protect your identity with professional nominee directors & shareholders.'
  },
  {
    icon: Award,
    title: 'Certificates & Legalization',
    description: 'Certificate of Incumbency, Good Standing, Apostille & notarization services.'
  },
  {
    icon: Landmark,
    title: 'Business Account Facilitation',
    description: 'Seamless Remote Business Account Opening with multi-currency solutions.'
  },
  {
    icon: MapPin,
    title: 'Virtual Office',
    description: 'Local business address, mail handling & telephone answering.'
  },
  {
    icon: Shield,
    title: 'Ongoing Compliance',
    description: 'Annual renewals, filings, tax support & regulatory reminders.'
  }
];

export function Insights() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-[30px] lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-foreground">
            Company Formation & Business Support Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {insights.map((insight, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-card to-blue-50 p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-border group hover:border-primary relative ${
                // Hide last 2 items on mobile when showAll is false
                index >= 4 && !showAll ? 'hidden md:block' : ''
              }`}
            >
              {/* White gradient overlay on last visible card when not showing all - Mobile only */}
              {!showAll && index === 3 && (
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white rounded-xl pointer-events-none md:hidden z-10"></div>
              )}
              
              <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <insight.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-3">
                {insight.title}
              </h3>
              <p className="text-muted-foreground">
                {insight.description}
              </p>
            </div>
          ))}
        </div>

        {/* View More Text Link - Mobile Only */}
        {!showAll && (
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