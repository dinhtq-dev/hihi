import imgHeroBackground from "figma:asset/1fb5ca2617c33f37d9b565acdd08b41133035f1b.png";
import svgPaths from "@/imports/svg-adjx69n3kj";
import { JurisdictionSelector } from "@/app/components/JurisdictionSelector";
import { useState } from "react";

export function Hero() {
  const [showJurisdictionSelector, setShowJurisdictionSelector] = useState(false);

  return (
    <section id="home" className="relative min-h-[280px] lg:h-[580px] bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover object-center lg:object-[center_40%]" 
          src={imgHeroBackground} 
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[280px] lg:h-[580px] px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Main Heading */}
        <div className="text-center mb-5 lg:mb-6 max-w-6xl">
          <h1 className="font-bold text-[#2C2C2C] text-2xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight">
            <span>Global Company Formation & </span>
            <span className="text-[#C91F26]">Asset Protection Solutions</span>
          </h1>
        </div>

        {/* CTA Card */}
        <div 
          className="rounded-2xl p-4 sm:p-5 lg:p-7 w-full max-w-[790px]"
          style={{ backgroundImage: "linear-gradient(142.281deg, rgb(255, 255, 255) 30.06%, rgb(235, 235, 235) 71.783%)" }}
        >
          {/* Card Content */}
          <div className="flex flex-col gap-3 lg:gap-5">
            {/* Text Section - Hidden on Mobile */}
            <div className="hidden sm:block text-center space-y-1.5">
              <h2 className="font-medium text-[#2C2C2C] text-lg sm:text-xl lg:text-2xl leading-relaxed">
                Have a business vision in mind? Let's turn it into reality!
              </h2>
              <p className="font-normal text-[#6C757D] text-sm sm:text-base">
                Choose a unique name and bring your company to life with OffShore CompanyCorp
              </p>
            </div>

            {/* Form Section */}
            <div className="flex flex-col sm:flex-row gap-3 items-stretch">
              {/* Jurisdiction Selector */}
              <div className="relative flex-1">
                <button
                  onClick={() => setShowJurisdictionSelector(!showJurisdictionSelector)}
                  className="bg-white border border-[#DEE2E6] rounded-lg p-3 sm:p-4 w-full flex items-center justify-between hover:border-[#C91F26] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {/* Location Icon */}
                    <div className="w-5 h-5 shrink-0">
                      <svg className="block size-full" fill="none" viewBox="0 0 19 18.5185">
                        <g>
                          <path d={svgPaths.p3c9ab700} fill="#C91F26" />
                          <path d={svgPaths.p6f30500} fill="#C91F26" opacity="0.4" />
                          <path d={svgPaths.p13ce5600} fill="#C91F26" />
                        </g>
                      </svg>
                    </div>
                    <span className="text-[#343A40] text-sm sm:text-base">Select a Jurisdiction</span>
                  </div>
                  {/* Dropdown Arrow */}
                  <svg 
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${showJurisdictionSelector ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#343A40" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Dropdown */}
                {showJurisdictionSelector && (
                  <>
                    <div 
                      className="fixed inset-0 z-[100]" 
                      onClick={() => setShowJurisdictionSelector(false)}
                    />
                    <div className="absolute top-full mt-2 left-0 right-0 z-[101]">
                      <JurisdictionSelector />
                    </div>
                  </>
                )}
              </div>

              {/* Set Up Now Button */}
              <button 
                className="bg-[#C91F26] hover:bg-[#A01820] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 shadow-lg border border-[#C91F26]/50 group relative overflow-hidden whitespace-nowrap"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                <span className="relative">Set up Now</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}