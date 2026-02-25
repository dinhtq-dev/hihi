import { ArrowRight } from 'lucide-react';
import { GlobalFeatures } from './GlobalFeatures';
import { Link } from 'react-router-dom';

export function ResearchHub() {
  return (
    <section className="py-[30px] lg:py-16 bg-gradient-to-br from-[#1a1a1a] via-[#2d2424] to-[#1a1a1a] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center mb-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-white leading-tight max-w-4xl mx-auto">
            Top Jurisdictions for{' '}
            <span className="text-primary">Offshore Company Formation</span>
          </h2>
        </div>

        {/* Global Features Component */}
        <div className="mb-4">
          <GlobalFeatures />
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link to="/compare-jurisdictions">
            <button className="bg-primary text-primary-foreground px-12 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium text-lg inline-flex items-center gap-4 hover:gap-5 group shadow-lg relative overflow-hidden border border-primary/50">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
              <span className="relative">Compare Jurisdictions</span>
              <ArrowRight className="relative group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}