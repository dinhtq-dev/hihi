import { Calendar, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import ctaOverlay from 'figma:asset/3147bd2f1cbdef76b1b253867b5cc549e39248bf.png';

export function CTA() {
  return (
    <section className="py-[30px] lg:py-20 bg-gradient-to-br from-primary via-[#a51920] to-[#8B2A2F] relative overflow-hidden">
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-white leading-tight mb-8 lg:mb-12 max-w-5xl mx-auto">
            Ready to Form Your Offshore Company? Let Our Experts Help.
          </h2>

          {/* CTA Button */}
          <button className="bg-white text-primary px-12 py-5 rounded-lg hover:bg-card transition-all duration-300 font-semibold text-lg inline-flex items-center gap-4 hover:gap-5 group shadow-lg relative overflow-hidden border border-white/50 whitespace-nowrap">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200/50 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
            <Calendar className="relative" size={22} />
            <span className="relative">Book a Free Consultation</span>
            <ArrowRight className="relative group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}