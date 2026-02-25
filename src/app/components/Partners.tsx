import { Building2, Globe, Users, Shield, Award, Briefcase, Star, Target } from 'lucide-react';

const partners = [
  { name: 'Partner 1', icon: Building2 },
  { name: 'Partner 2', icon: Globe },
  { name: 'Partner 3', icon: Users },
  { name: 'Partner 4', icon: Shield },
  { name: 'Partner 5', icon: Award },
  { name: 'Partner 6', icon: Briefcase },
  { name: 'Partner 7', icon: Star },
  { name: 'Partner 8', icon: Target }
];

export function Partners() {
  return (
    <section id="partners" className="py-[30px] lg:py-20 bg-gradient-to-br from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-foreground">
            Our Strategic Partners
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl flex items-center justify-center hover:shadow-lg transition-all border border-border hover:border-primary group"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <partner.icon className="text-primary-foreground" size={32} />
                </div>
                <div className="font-semibold text-foreground text-sm">{partner.name}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary to-primary/80 rounded-xl p-8 text-primary-foreground text-center">
          <h3 className="text-2xl font-bold mb-3">Become a Partner</h3>
          <p className="text-lg mb-6">Join our growing network of strategic partners</p>
          <button className="bg-primary-foreground text-primary px-8 py-3 rounded-lg hover:bg-card transition-colors font-semibold">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}