import svgPaths from "./svg-adjx69n3kj";
import imgImage1445 from "figma:asset/1fb5ca2617c33f37d9b565acdd08b41133035f1b.png";
import { JurisdictionSelector } from "@/app/components/JurisdictionSelector";
import { useState } from "react";

export default function Frame() {
  const [showJurisdictionSelector, setShowJurisdictionSelector] = useState(false);

  return (
    <div className="relative size-full">
      <div className="absolute h-[730px] left-0 top-0 w-[1920px]" data-name="image 1445">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1445} />
      </div>
      <div className="absolute content-stretch flex flex-col gap-[50px] items-center left-[calc(50%+0.5px)] top-[calc(50%-26px)] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex items-center justify-center relative shrink-0 w-full">
          <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
            <div className="content-stretch flex flex-col items-center relative w-full">
              <div className="flex items-center justify-center relative shrink-0 w-full">
                <div className="flex-none rotate-[180deg] scale-y-[-100%] w-full">
                  <p className="capitalize font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative text-[#2c2c2c] text-[60px] text-center w-full">
                    <span>{`Global Company Formation & `}</span>
                    <span className="text-[#c91f26]">Asset Protection Solutions</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative rounded-[20px] shrink-0" style={{ backgroundImage: "linear-gradient(142.281deg, rgb(255, 255, 255) 30.06%, rgb(235, 235, 235) 71.783%)" }}>
          <div className="content-stretch flex flex-col gap-[40px] items-center pb-[40px] pt-[36px] px-[40px] relative rounded-[inherit]">
            <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] not-italic relative shrink-0 text-center w-[710px]">
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#2c2c2c] text-[24px] w-full">
                <p className="leading-[36px]">{`Have a business vision in mind? Let's turn it into reality!`}</p>
              </div>
              <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6c757d] text-[16px] w-full">
                <p className="leading-[24px]">Choose a unique name and bring your company to life with OffShore CompanyCorp</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0">
              <div className="relative w-[600px]">
                <button
                  onClick={() => setShowJurisdictionSelector(!showJurisdictionSelector)}
                  className="bg-white content-stretch flex items-center p-[8px] relative rounded-[8px] shrink-0 w-full"
                  data-name="Background"
                >
                  <div aria-hidden="true" className="absolute border border-[#dee2e6] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center justify-between px-[16px] py-[9px] relative w-full">
                        <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
                          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Huge-icon/interface/bulk/location 02">
                            <div className="absolute h-[18.518px] left-[calc(50%+0.5px)] top-[calc(50%+0.26px)] translate-x-[-50%] translate-y-[-50%] w-[19px]" data-name="location">
                              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 18.5185">
                                <g>
                                  <path d={svgPaths.p3c9ab700} fill="var(--fill-0, #C91F26)" id="Vector 453" />
                                  <path d={svgPaths.p6f30500} fill="var(--fill-0, #C91F26)" id="Ellipse 884" opacity="0.4" />
                                  <path d={svgPaths.p13ce5600} fill="var(--fill-0, #C91F26)" id="Ellipse 117" />
                                </g>
                              </svg>
                            </div>
                          </div>
                          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#343a40] text-[16px] text-nowrap">
                            <p className="leading-[24px]">Select a Jurisdiction</p>
                          </div>
                        </div>
                        <div className="relative shrink-0 size-[20px]" data-name="SVG">
                          <svg 
                            className={`block size-full transition-transform duration-200 ${showJurisdictionSelector ? 'rotate-180' : ''}`} 
                            fill="none" 
                            preserveAspectRatio="none" 
                            viewBox="0 0 20 20"
                          >
                            <g id="SVG">
                              <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, #343A40)" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                
                {/* Dropdown content */}
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
              <div className="bg-[#c91f26] content-stretch flex items-center justify-center overflow-clip px-[40px] py-[8px] relative rounded-[8px] self-stretch shrink-0 hover:bg-[#a51920] transition-all duration-300 shadow-lg border border-[#C91F26]/50 group cursor-pointer" data-name="Button">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
                  <p className="leading-[24px]">Set up Now</p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0)] border-solid inset-0 pointer-events-none rounded-[20px]" />
        </div>
      </div>
    </div>
  );
}