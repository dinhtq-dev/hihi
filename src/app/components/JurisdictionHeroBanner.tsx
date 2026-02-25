import svgPaths from "@/imports/svg-xwnahppnxc";
import imgBannerBackground from "figma:asset/e7a76f8bacd9df8ddbfb338bdf389a6ff8e547f4.png";
import imgBenefitsBanner from "figma:asset/789afab0d90c0ec92dfef6e6785e7e38b0630536.png";
import { ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface JurisdictionHeroBannerProps {
  country: string;
  description: string;
  pricing: string;
  backgroundImage?: string;
  benefits?: string[];
}

export function JurisdictionHeroBanner({ 
  country, 
  description, 
  pricing,
  backgroundImage,
  benefits = [
    'Zero corporate tax',
    'Tax-free offshore jurisdiction',
    'Common law legal system',
    'No minimum capital requirements'
  ]
}: JurisdictionHeroBannerProps) {
  const navigate = useNavigate();
  
  return (
    <section className="relative w-full overflow-hidden bg-gray-100" data-name="Section">
      {/* Main Banner */}
      <div className="relative w-full h-[450px] lg:h-[380px]">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            alt="" 
            className="w-full h-full object-cover object-center pointer-events-none" 
            src={imgBannerBackground} 
          />
          <div className="absolute inset-0 bg-white/60"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative h-full max-w-[1600px] mx-auto px-4 lg:px-16 flex flex-col justify-center pt-12 lg:pt-12">
          {/* Back Button */}
          <button
            onClick={() => navigate('/jurisdictions')}
            className="absolute top-8 lg:top-16 left-4 lg:left-16 text-gray-600 hover:text-[#C91F26] inline-flex items-center gap-2 text-xs lg:text-sm font-semibold uppercase tracking-wider transition-colors z-10"
          >
            ← BACK TO JURISDICTIONS
          </button>
          
          {/* Main Content */}
          <div className="max-w-[950px] flex flex-col gap-5 lg:gap-[30px] mt-2 lg:mt-20 pb-4">
            {/* Title & Description */}
            <div className="flex flex-col gap-3 lg:gap-[16px]">
              <h1 className="font-bold text-[24px] md:text-[40px] lg:text-[48px] tracking-[1.2px] uppercase leading-tight">
                <span className="text-[#c91f26]">{country} </span>
                <span className="text-[#2c2c2c]">Company Formation</span>
              </h1>
              <p className="text-[#2c2c2c] text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed max-w-[800px]">
                {description}
              </p>
            </div>
            
            {/* Pricing & CTA */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-[16px] items-start sm:items-center">
              {/* Pricing */}
              <div className="flex gap-[8px] items-center">
                <p className="text-[#2c2c2c] text-[14px]">Start at</p>
                <p className="text-[#c91f26] text-[24px] lg:text-[30px] font-bold">US$ {pricing}</p>
              </div>
              
              {/* CTA Button */}
              <button className="bg-[#c91f26] hover:bg-[#a51920] transition-all duration-300 rounded-[8px] shadow-lg px-6 py-3 lg:px-8 lg:py-4 flex gap-3 items-center group">
                <span className="text-white text-[14px] lg:text-[16px] font-semibold">Set Up Your Company</span>
                <ArrowRight className="text-white w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}