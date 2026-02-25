import { ArrowRight } from 'lucide-react';
import ctaOverlay from 'figma:asset/3147bd2f1cbdef76b1b253867b5cc549e39248bf.png';

interface JurisdictionCTAProps {
  country: string;
  jurisdiction: string;
}

export function JurisdictionCTA({ country, jurisdiction }: JurisdictionCTAProps) {
  return (
    <section className="py-[30px] lg:py-20 bg-gradient-to-br from-[#C91F26] via-[#a51920] to-[#8B2A2F] relative overflow-hidden">
      {/* Cityscape Overlay Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: `url(${ctaOverlay})` }}
      ></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>
      
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-white transform rotate-45"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-primary-foreground mb-6 lg:mb-10 leading-tight">
          Ready To Establish Your
          <span className="block mt-1">{country} Company?</span>
        </h2>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="group bg-white text-[#C91F26] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-3xl hover:scale-105">
            Register My Company Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}