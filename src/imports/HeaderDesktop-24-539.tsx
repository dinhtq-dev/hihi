import svgPaths from "./svg-dubu2i6hl3";
import { CompanyFormationPopup } from "@/app/components/CompanyFormationPopup";
import { AllServicesPopup } from "@/app/components/AllServicesPopup";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Bell, User } from "lucide-react";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center px-[10px] py-0 relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px]">{children}</p>
      </div>
      <Polygon />
    </div>
  );
}

function Helper() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="flex-none rotate-[180deg]">
        <div className="h-[6.998px] relative w-[9px]" data-name="Polygon">
          <div className="absolute bottom-1/4 left-[6.7%] right-[6.7%] top-0">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.79423 5.24863">
              <path d={svgPaths.p2d0a3200} fill="var(--fill-0, #2C2C2C)" id="Polygon" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Polygon() {
  return (
    <div className="h-[6px] relative shrink-0 w-[9px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
        <path d="M4.5 6L0 0L9 0L4.5 6Z" fill="var(--fill-0, white)" id="Polygon" />
      </svg>
    </div>
  );
}
type TextProps = {
  text: string;
};

function Text({ text }: TextProps) {
  return <Wrapper>{text}</Wrapper>;
}

export default function HeaderDesktop() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAllServicesPopupOpen, setIsAllServicesPopupOpen] = useState(false);

  const handleCompanyFormationMouseEnter = () => {
    setIsPopupOpen(true);
    setIsAllServicesPopupOpen(false);
  };

  const handleCompanyFormationMouseLeave = () => {
    setIsPopupOpen(false);
  };

  const handleAllServicesMouseEnter = () => {
    setIsAllServicesPopupOpen(true);
    setIsPopupOpen(false);
  };

  const handleAllServicesMouseLeave = () => {
    setIsAllServicesPopupOpen(false);
  };

  return (
    <div className="backdrop-blur-[15px] backdrop-filter bg-[rgba(255,255,255,0.9)] relative shadow-[0px_4px_16px_0px_rgba(180,180,180,0.16)] size-full" data-name="Header Desktop">
      {/* Popups at top level */}
      <div 
        onMouseEnter={handleCompanyFormationMouseEnter}
        onMouseLeave={handleCompanyFormationMouseLeave}
      >
        {isPopupOpen && <CompanyFormationPopup onClose={() => setIsPopupOpen(false)} />}
      </div>
      <div 
        onMouseEnter={handleAllServicesMouseEnter}
        onMouseLeave={handleAllServicesMouseLeave}
      >
        {isAllServicesPopupOpen && <AllServicesPopup onClose={() => setIsAllServicesPopupOpen(false)} />}
      </div>
      
      <div className="absolute bottom-0 h-[63px] right-0 w-[1559px]">
        <div className="absolute flex h-[63px] items-center justify-center left-0 top-0 w-[1559px]">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <div className="h-[63px] relative w-[1559px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1559 63">
                <path d={svgPaths.p17320780} fill="var(--fill-0, #7D1316)" id="Rectangle 9087" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex h-[63px] items-center justify-between left-[42px] top-1/2 translate-y-[-50%] w-[1337px]">
          <div className="content-stretch flex gap-[16px] h-full items-center relative shrink-0" data-name="Menu">
            {/* Company Formation with Popup */}
            <div 
              onMouseEnter={handleCompanyFormationMouseEnter}
              onMouseLeave={handleCompanyFormationMouseLeave}
              className="content-stretch flex gap-[8px] h-full items-center px-[10px] py-0 relative shrink-0 cursor-pointer group transition-all"
            >
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                <p className="leading-[24px]">Company Formation</p>
              </div>
              <Polygon />
              {/* White line at bottom of red bar */}
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white w-0 transition-all duration-300 ease-out group-hover:w-full"></span>
            </div>
            
            <Wrapper>{` Account Opening Consultancy`}</Wrapper>
            
            {/* All Services with Popup */}
            <div 
              onMouseEnter={handleAllServicesMouseEnter}
              onMouseLeave={handleAllServicesMouseLeave}
              className="content-stretch flex gap-[8px] h-full items-center px-[10px] py-0 relative shrink-0 cursor-pointer group transition-all"
            >
              <Link to="/all-services" className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white hover:text-white">
                <p className="leading-[24px]">All Services</p>
              </Link>
              <Polygon />
              {/* White line at bottom of red bar */}
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white w-0 transition-all duration-300 ease-out group-hover:w-full"></span>
            </div>
            <div className="content-stretch flex gap-[8px] h-full items-center px-[10px] py-0 relative shrink-0">
              <div className="bg-[#c91f26] content-stretch flex items-center justify-center px-[6px] py-[4px] relative rounded-[4px] shrink-0">
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
                  <p className="leading-[normal]">NEW</p>
                </div>
              </div>
              <div className="font-medium grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 text-nowrap text-white">
                <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Medium',sans-serif] justify-center ml-0 mt-[12px] not-italic relative text-[16px] translate-y-[-50%]">
                  <p className="leading-[24px]">One IBC Club</p>
                </div>
                <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Medium',sans-serif] justify-center ml-[102px] mt-[9px] relative text-[10px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[normal]">TM</p>
                </div>
              </div>
              <Polygon />
            </div>
            <div className="content-stretch flex gap-[8px] h-full items-center px-[10px] py-0 relative shrink-0">
              <div className="content-stretch flex font-medium gap-[5px] items-start leading-[0] relative shrink-0 text-nowrap text-white">
                <div className="flex flex-col font-['Inter:Medium',sans-serif] justify-center not-italic relative shrink-0 text-[16px]">
                  <p className="leading-[24px]">One IBC</p>
                </div>
                <div className="flex flex-col font-['Roboto:Medium',sans-serif] justify-center relative shrink-0 text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[normal]">TM</p>
                </div>
              </div>
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                <p className="leading-[24px]">Digital App</p>
              </div>
              <Polygon />
            </div>
            <Text text="More" />
          </div>
          {/* Set Up Now Button - Using Get Started Style */}
          <Link to="/setup-now" className="shrink-0">
            <button className="bg-[#C91F26] hover:bg-[#A01820] text-white text-[16px] font-semibold py-2 px-6 rounded-[8px] flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:shadow-[#C91F26]/30 group whitespace-nowrap relative overflow-hidden border border-[#C91F26]/50 hover:gap-3">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
              <span className="relative font-['Inter:Medium',sans-serif] font-medium">Set Up Now</span>
              <ArrowRight className="relative group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute h-[48px] left-[calc(50%-697.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[165px]">
        <Link to="/" className="absolute contents left-0 top-0 cursor-pointer" data-name="Logo">
          <div className="absolute contents left-0 top-0" data-name="Group">
            <div className="absolute h-[36.624px] left-[72.55px] top-[5.56px] w-[92.444px]" data-name="Group">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.4446 36.6244">
                <g id="Group">
                  <path d={svgPaths.p3ed45600} fill="var(--fill-0, #383839)" id="Vector" />
                  <g id="Group_2">
                    <path d={svgPaths.p2ff0b500} fill="var(--fill-0, #383839)" id="Vector_2" />
                    <path d={svgPaths.p1f68900} fill="var(--fill-0, #383839)" id="Vector_3" />
                    <path d={svgPaths.p15a38c00} fill="var(--fill-0, #383839)" id="Vector_4" />
                    <path d={svgPaths.p329c2500} fill="var(--fill-0, #383839)" id="Vector_5" />
                    <path d={svgPaths.p960a100} fill="var(--fill-0, #383839)" id="Vector_6" />
                    <path d={svgPaths.p858b800} fill="var(--fill-0, #383839)" id="Vector_7" />
                    <path d={svgPaths.p2e9c9000} fill="var(--fill-0, #383839)" id="Vector_8" />
                    <path d={svgPaths.p3e6c6000} fill="var(--fill-0, #383839)" id="Vector_9" />
                  </g>
                  <g id="Group_3">
                    <path d={svgPaths.p380d4970} fill="var(--fill-0, #383839)" id="Vector_10" />
                    <path d={svgPaths.p248d9200} fill="var(--fill-0, #383839)" id="Vector_11" />
                    <path d={svgPaths.p18e00f00} fill="var(--fill-0, #383839)" id="Vector_12" />
                    <path d={svgPaths.p15712b00} fill="var(--fill-0, #383839)" id="Vector_13" />
                    <path d={svgPaths.p3060f200} fill="var(--fill-0, #383839)" id="Vector_14" />
                    <path d={svgPaths.pd2fa280} fill="var(--fill-0, #383839)" id="Vector_15" />
                    <path d={svgPaths.pca70500} fill="var(--fill-0, #383839)" id="Vector_16" />
                    <path d={svgPaths.p3b50f8f0} fill="var(--fill-0, #383839)" id="Vector_17" />
                    <path d={svgPaths.p19d9dcc0} fill="var(--fill-0, #383839)" id="Vector_18" />
                    <path d={svgPaths.p1f2f9280} fill="var(--fill-0, #383839)" id="Vector_19" />
                    <path d={svgPaths.pa047d00} fill="var(--fill-0, #383839)" id="Vector_20" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="absolute h-[47.763px] left-0 top-0 w-[65.224px]" data-name="Group">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.2239 47.7629">
                <g id="Group">
                  <path d={svgPaths.p2aea2980} fill="var(--fill-0, #CC1F26)" id="Vector" />
                  <g id="Group_2">
                    <path d={svgPaths.p15926b0} fill="var(--fill-0, #CC1F26)" id="Vector_2" />
                    <g id="Group_3">
                      <path d={svgPaths.p3695cc00} fill="var(--fill-0, #CC1F26)" id="Vector_3" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </Link>
      </div>
      <div className="absolute content-stretch flex flex-col items-start pl-0 pr-[180px] py-0 right-0 top-0 w-[1559px]">
        <div className="h-[47px] relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pl-[52px] pr-0 py-0 relative size-full">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Left Block">
                <div className="relative shrink-0 size-[24px]" data-name="Hotline">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g clipPath="url(#clip0_24_574)" id="Hotline">
                      <path d={svgPaths.p6058e80} fill="var(--fill-0, #2C2C2C)" id="Vector" />
                    </g>
                    <defs>
                      <clipPath id="clip0_24_574">
                        <rect fill="white" height="24" width="24" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2c2c] text-[0px] text-nowrap">
                  <p className="leading-[24px] text-[16px]">
                    <span>{`Consultant & Support (Toll free):`}</span>
                    <span className="text-[#c91f26]">{` +852 3702 1796`}</span>
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
                  <div className="relative shrink-0 size-[16px]" data-name="Continent">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <g clipPath="url(#clip0_24_559)" id="All Jurisdictions">
                        <mask height="16" id="mask0_24_559" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                          <path d={svgPaths.p30769300} fill="var(--fill-0, #4693D3)" id="Vector" />
                        </mask>
                        <g mask="url(#mask0_24_559)">
                          <g id="Group">
                            <path d={svgPaths.p30769300} fill="var(--fill-0, #4693D3)" id="Vector_2" />
                            <path d={svgPaths.p30769300} data-figma-bg-blur-radius="4" fill="var(--fill-0, #4693D3)" fillOpacity="0.3" id="Vector_3" />
                            <g filter="url(#filter1_d_24_559)" id="Group_2">
                              <path d={svgPaths.p236dc100} fill="var(--fill-0, #9EE562)" id="Vector_4" />
                              <path d={svgPaths.p393fc180} fill="var(--fill-0, #9EE562)" id="Vector_5" />
                              <path d={svgPaths.p3d037770} fill="var(--fill-0, #9EE562)" id="Vector_6" />
                              <path d={svgPaths.p3471000} fill="var(--fill-0, #9EE562)" id="Vector_7" />
                            </g>
                            <path d={svgPaths.p2af82400} fill="var(--fill-0, #232323)" fillOpacity="0.8" id="Vector_8" opacity="0.3" />
                          </g>
                        </g>
                      </g>
                      <defs>
                        <clipPath id="bgblur_1_24_559_clip_path" transform="translate(4 4)">
                          <path d={svgPaths.p30769300} />
                        </clipPath>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="16.04" id="filter1_d_24_559" width="19.5806" x="-0.940593" y="0.92">
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                          <feOffset dx="1" dy="1" />
                          <feGaussianBlur stdDeviation="1" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                          <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_24_559" />
                          <feBlend in="SourceGraphic" in2="effect1_dropShadow_24_559" mode="normal" result="shape" />
                        </filter>
                        <clipPath id="clip0_24_559">
                          <rect fill="white" height="16" width="16" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2c2c] text-[16px] text-nowrap">
                    <p className="leading-[24px]">Global</p>
                  </div>
                  <Helper />
                </div>
                <div className="bg-[#ced4da] h-[16px] shrink-0 w-px" />
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Frame">
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2c2c] text-[16px] text-center text-nowrap">
                    <p className="leading-[24px]">English</p>
                  </div>
                  <Helper />
                </div>
                <div className="bg-[#ced4da] h-[16px] shrink-0 w-px" />
                <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0">
                  <div className="h-[18px] overflow-clip relative shrink-0 w-[27px]" data-name="Icons / Flag / United States">
                    <div className="absolute h-[15.724px] left-[calc(50%+0.5px)] top-[calc(50%+0.36px)] translate-x-[-50%] translate-y-[-50%] w-[24px]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 15.7241">
                        <g id="Group 56333">
                          <path d={svgPaths.p1306240} fill="var(--fill-0, #F5F5F5)" id="Vector" />
                          <g id="Group">
                            <path d={svgPaths.p30191100} fill="var(--fill-0, #FF4B55)" id="Vector_2" />
                            <path d={svgPaths.p298e0900} fill="var(--fill-0, #FF4B55)" id="Vector_3" />
                            <path d={svgPaths.p211b9200} fill="var(--fill-0, #FF4B55)" id="Vector_4" />
                            <path d={svgPaths.p3b6fab00} fill="var(--fill-0, #FF4B55)" id="Vector_5" />
                            <path d={svgPaths.p2f457aa0} fill="var(--fill-0, #FF4B55)" id="Vector_6" />
                            <path d={svgPaths.p3730080} fill="var(--fill-0, #FF4B55)" id="Vector_7" />
                            <path d={svgPaths.p1594c580} fill="var(--fill-0, #FF4B55)" id="Vector_8" />
                          </g>
                          <path d={svgPaths.p1ea89600} fill="var(--fill-0, #41479B)" id="Vector_9" />
                          <g id="Group_2">
                            <path d={svgPaths.p25da1780} fill="var(--fill-0, #F5F5F5)" id="Vector_10" />
                            <path d={svgPaths.p250b7b00} fill="var(--fill-0, #F5F5F5)" id="Vector_11" />
                            <path d={svgPaths.p35ca15f0} fill="var(--fill-0, #F5F5F5)" id="Vector_12" />
                            <path d={svgPaths.p28ced100} fill="var(--fill-0, #F5F5F5)" id="Vector_13" />
                            <path d={svgPaths.p37f4fa00} fill="var(--fill-0, #F5F5F5)" id="Vector_14" />
                            <path d={svgPaths.p21c261f0} fill="var(--fill-0, #F5F5F5)" id="Vector_15" />
                            <path d={svgPaths.p14476132} fill="var(--fill-0, #F5F5F5)" id="Vector_16" />
                            <path d={svgPaths.p320e9000} fill="var(--fill-0, #F5F5F5)" id="Vector_17" />
                            <path d={svgPaths.p1ac9c580} fill="var(--fill-0, #F5F5F5)" id="Vector_18" />
                            <path d={svgPaths.pec3e800} fill="var(--fill-0, #F5F5F5)" id="Vector_19" />
                            <path d={svgPaths.p3bf37600} fill="var(--fill-0, #F5F5F5)" id="Vector_20" />
                            <path d={svgPaths.p2edf2630} fill="var(--fill-0, #F5F5F5)" id="Vector_21" />
                            <path d={svgPaths.p71b9500} fill="var(--fill-0, #F5F5F5)" id="Vector_22" />
                            <path d={svgPaths.p3e2faf00} fill="var(--fill-0, #F5F5F5)" id="Vector_23" />
                            <path d={svgPaths.pae9e100} fill="var(--fill-0, #F5F5F5)" id="Vector_24" />
                            <path d={svgPaths.p19f44d80} fill="var(--fill-0, #F5F5F5)" id="Vector_25" />
                            <path d={svgPaths.p2bf6dc00} fill="var(--fill-0, #F5F5F5)" id="Vector_26" />
                            <path d={svgPaths.pb03fd00} fill="var(--fill-0, #F5F5F5)" id="Vector_27" />
                            <path d={svgPaths.p12640400} fill="var(--fill-0, #F5F5F5)" id="Vector_28" />
                            <path d={svgPaths.p391cac00} fill="var(--fill-0, #F5F5F5)" id="Vector_29" />
                            <path d={svgPaths.p167ae980} fill="var(--fill-0, #F5F5F5)" id="Vector_30" />
                            <path d={svgPaths.p21bddd00} fill="var(--fill-0, #F5F5F5)" id="Vector_31" />
                            <path d={svgPaths.p1e228400} fill="var(--fill-0, #F5F5F5)" id="Vector_32" />
                            <path d={svgPaths.p6250f80} fill="var(--fill-0, #F5F5F5)" id="Vector_33" />
                            <path d={svgPaths.p6066680} fill="var(--fill-0, #F5F5F5)" id="Vector_34" />
                            <path d={svgPaths.p1e71b400} fill="var(--fill-0, #F5F5F5)" id="Vector_35" />
                            <path d={svgPaths.p1e574300} fill="var(--fill-0, #F5F5F5)" id="Vector_36" />
                            <path d={svgPaths.p7355380} fill="var(--fill-0, #F5F5F5)" id="Vector_37" />
                            <path d={svgPaths.p2e32ab00} fill="var(--fill-0, #F5F5F5)" id="Vector_38" />
                            <path d={svgPaths.p9c4680} fill="var(--fill-0, #F5F5F5)" id="Vector_39" />
                            <path d={svgPaths.p19765440} fill="var(--fill-0, #F5F5F5)" id="Vector_40" />
                            <path d={svgPaths.p3be4e080} fill="var(--fill-0, #F5F5F5)" id="Vector_41" />
                            <path d={svgPaths.p343c9f80} fill="var(--fill-0, #F5F5F5)" id="Vector_42" />
                            <path d={svgPaths.p20ae3a00} fill="var(--fill-0, #F5F5F5)" id="Vector_43" />
                            <path d={svgPaths.p25cdd000} fill="var(--fill-0, #F5F5F5)" id="Vector_44" />
                            <path d={svgPaths.padc2ab0} fill="var(--fill-0, #F5F5F5)" id="Vector_45" />
                            <path d={svgPaths.p32965e00} fill="var(--fill-0, #F5F5F5)" id="Vector_46" />
                            <path d={svgPaths.p3439fc10} fill="var(--fill-0, #F5F5F5)" id="Vector_47" />
                            <path d={svgPaths.pfa39370} fill="var(--fill-0, #F5F5F5)" id="Vector_48" />
                            <path d={svgPaths.p6c10e00} fill="var(--fill-0, #F5F5F5)" id="Vector_49" />
                            <path d={svgPaths.p207c4e80} fill="var(--fill-0, #F5F5F5)" id="Vector_50" />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2c2c] text-[16px] text-nowrap">
                    <p className="leading-[24px]">USD</p>
                  </div>
                  <Helper />
                </div>

                <div className="bg-[#ced4da] h-[16px] shrink-0 w-px" />

                {/* Notification Icon */}
                <button className="relative shrink-0 p-2 rounded-full hover:bg-gray-100 transition-all duration-200 group">
                  <Bell className="w-5 h-5 text-[#2C2C2C] group-hover:text-[#C91F26] transition-colors" />
                  {/* Notification Badge */}
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C91F26] rounded-full border-2 border-white"></span>
                </button>

                {/* Account Icon */}
                <Link to="/sign-in">
                  <button className="relative shrink-0 p-2 rounded-full hover:bg-gray-100 transition-all duration-200 group">
                    <User className="w-5 h-5 text-[#2C2C2C] group-hover:text-[#C91F26] transition-colors" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}