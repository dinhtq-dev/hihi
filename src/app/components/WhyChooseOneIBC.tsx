import { Building2, Globe2, TrendingUp, Award } from 'lucide-react';

export function WhyChooseOneIBC() {
  return (
    <section className="py-[30px] lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-5xl lg:text-6xl">
            Why Businesses Choose One IBC
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Stat 1: Companies Incorporated */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6 lg:w-7 lg:h-7 text-[var(--color-primary)]" />
              </div>
              <div>
                <div className="text-[var(--color-primary)] font-bold text-3xl lg:text-4xl mb-2">
                  7,000+
                </div>
                <p className="text-[#6C757D] text-base lg:text-lg leading-relaxed">
                  Companies incorporated across multiple jurisdictions
                </p>
              </div>
            </div>
          </div>

          {/* Stat 2: Top Jurisdictions */}
          <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg border border-[var(--color-border)] hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6 lg:w-7 lg:h-7 text-[var(--color-primary)]" />
              </div>
              <div>
                <div className="text-[var(--color-primary)] font-bold text-lg lg:text-xl mb-2">
                  Top Jurisdictions 2024–2025
                </div>
                <div className="flex flex-wrap gap-2">
                  {['BVI', 'Hong Kong', 'Seychelles', 'Singapore', 'Belize'].map((jurisdiction, index) => (
                    <span 
                      key={index}
                      className="inline-block px-3 py-1 bg-gray-100 text-[#2C2C2C] text-sm lg:text-base rounded-full font-medium"
                    >
                      {jurisdiction}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
