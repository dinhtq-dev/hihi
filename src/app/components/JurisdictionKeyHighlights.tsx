import { Building2, TrendingUp, Plane, Shield, ArrowRight, FileText, DollarSign, Scale, Users, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface HighlightItem {
  icon: string;
  title: string;
  description: string;
}

interface JurisdictionKeyHighlightsProps {
  country: string;
  highlights: HighlightItem[];
}

// Icon map to convert string icon names to components
const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-7 h-7 text-white" />,
  TrendingUp: <TrendingUp className="w-7 h-7 text-white" />,
  Plane: <Plane className="w-7 h-7 text-white" />,
  Shield: <Shield className="w-7 h-7 text-white" />,
  DollarSign: <DollarSign className="w-7 h-7 text-white" />,
  Scale: <Scale className="w-7 h-7 text-white" />,
  Users: <Users className="w-7 h-7 text-white" />,
};

export function JurisdictionKeyHighlights({ country, highlights }: JurisdictionKeyHighlightsProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedHighlights = showAll ? highlights : highlights.slice(0, 4);
  const hasMore = highlights.length > 4;

  return (
    <section className="py-[30px] lg:py-20 bg-background">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* Section Title */}
        <div className="text-center mb-6 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-foreground leading-tight max-w-4xl mx-auto">
            Key Highlights for <span className="text-primary">{country}</span> Company Formation
          </h2>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-12">
          {displayedHighlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-card to-blue-50 p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-border group hover:border-primary relative"
            >
              {/* White gradient overlay on last card when not showing all - Mobile only */}
              {!showAll && hasMore && index === displayedHighlights.length - 1 && (
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white rounded-xl pointer-events-none md:hidden z-10"></div>
              )}
              
              <div className="bg-primary w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {iconMap[highlight.icon]}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {highlight.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* View More Text Link - Mobile Only */}
        {hasMore && !showAll && (
          <div className="flex justify-center mb-12 md:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="text-primary hover:text-primary/80 transition-colors font-semibold inline-flex items-center gap-2 group"
            >
              <span>View More</span>
              <ChevronDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/company-formation/start">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-lg transition-all duration-300 font-semibold inline-flex items-center gap-3 hover:gap-4 group shadow-lg relative overflow-hidden border border-primary/50 w-full sm:w-auto">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
              <span className="relative whitespace-nowrap">Start My Company Formation</span>
              <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </button>
          </Link>
          <Link to="/rate-card">
            <button className="bg-card border-2 border-primary text-primary hover:bg-muted px-10 py-4 rounded-lg transition-all duration-300 font-semibold inline-flex items-center gap-3 relative overflow-hidden w-full sm:w-auto">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-muted-foreground/10 to-transparent translate-x-[-200%] hover:translate-x-[200%] transition-transform duration-700"></span>
              <FileText className="w-5 h-5 relative flex-shrink-0" />
              <span className="relative whitespace-nowrap">Check Rate Card List</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Default highlights for Hong Kong (can be customized per jurisdiction)
export const defaultHighlights: HighlightItem[] = [
  {
    icon: 'Building2',
    title: 'International financial centre',
    description: 'Leading business and financial hub in Asia.'
  },
  {
    icon: 'DollarSign',
    title: 'Territorial tax system',
    description: 'Only Hong Kong–sourced profits are taxable.'
  },
  {
    icon: 'Scale',
    title: 'Common law legal framework',
    description: 'Based on English common law principles.'
  },
  {
    icon: 'Users',
    title: '100% foreign ownership',
    description: 'There are no local shareholder or director requirements.'
  }
];