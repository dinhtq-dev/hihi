import { Globe } from 'lucide-react';

const countries = [
  { name: 'Singapore', code: 'SG', flag: '🇸🇬' },
  { name: 'Hong Kong', code: 'HK', flag: '🇭🇰' },
  { name: 'United States', code: 'US', flag: '🇺🇸' },
  { name: 'United Kingdom', code: 'GB', flag: '🇬🇧' },
  { name: 'Australia', code: 'AU', flag: '🇦🇺' },
  { name: 'Canada', code: 'CA', flag: '🇨🇦' },
  { name: 'United Arab Emirates', code: 'AE', flag: '🇦🇪' },
  { name: 'Germany', code: 'DE', flag: '🇩🇪' },
  { name: 'France', code: 'FR', flag: '🇫🇷' },
  { name: 'Japan', code: 'JP', flag: '🇯🇵' },
  { name: 'South Korea', code: 'KR', flag: '🇰🇷' },
  { name: 'Switzerland', code: 'CH', flag: '🇨🇭' }
];

export function Countries() {
  return (
    <section className="py-[30px] lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-foreground">
            Countries We Serve
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {countries.map((country, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-muted to-card p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-border text-center group cursor-pointer hover:border-primary"
            >
              <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                {country.flag}
              </div>
              <div className="font-semibold text-foreground">{country.name}</div>
              <div className="text-sm text-muted-foreground mt-1">{country.code}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Don't see your country? We're constantly expanding our network.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
            Contact Us for More Information
          </button>
        </div>
      </div>
    </section>
  );
}