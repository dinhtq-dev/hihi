import svgPaths from "./svg-ik42b3a8yw";
import imgImage1444 from "figma:asset/3ae8c5e5d8ac15f4c2fc5ee7c2d8e12777cb86c7.png";

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
  return (
    <div className="backdrop-blur-[15px] backdrop-filter bg-[rgba(255,255,255,0.9)] relative shadow-[0px_4px_16px_0px_rgba(180,180,180,0.16)] size-full" data-name="Header Desktop">
      <div className="absolute bottom-0 h-[63px] right-0 w-[1604px]">
        <div className="absolute flex h-[63px] items-center justify-center left-0 top-0 w-[1615px]">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <div className="h-[63px] relative w-[1615px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1615 63">
                <path d={svgPaths.p281f2300} fill="var(--fill-0, #7D1316)" id="Rectangle 9087" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex h-[63px] items-center justify-between left-[42px] top-1/2 translate-y-[-50%] w-[1462px]">
          <div className="content-stretch flex gap-[24px] h-full items-center relative shrink-0" data-name="Menu">
            <Text text="Company Formation" />
            <Wrapper>{` Account Opening Consultancy`}</Wrapper>
            <Text text="All Services" />
            <div className="content-stretch flex gap-[8px] h-full items-center px-[10px] py-0 relative shrink-0">
              <div className="bg-[#c91f26] content-stretch flex items-center justify-center px-[6px] py-[4px] relative rounded-[4px] shrink-0">
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-nowrap text-white">
                  <p className="leading-[normal]">NEW</p>
                </div>
              </div>
              <div className="font-medium grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 text-nowrap text-white">
                <div className="[grid-area:1_/_1] flex flex-col font-['Inter:Medium',sans-serif] justify-center ml-0 mt-[12px] not-italic relative text-[16px] translate-y-[-50%]">
                  <p className="leading-[24px] text-nowrap">One IBC Club</p>
                </div>
                <div className="[grid-area:1_/_1] flex flex-col font-['Roboto:Medium',sans-serif] justify-center ml-[102px] mt-[9px] relative text-[10px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[normal] text-nowrap">TM</p>
                </div>
              </div>
              <Polygon />
            </div>
            <div className="content-stretch flex gap-[8px] h-full items-center px-[10px] py-0 relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-[28px]" data-name="Icon App">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
                  <g id="Vector">
                    <path d={svgPaths.p3da99a00} fill="var(--fill-0, white)" id="BG" />
                    <g id="BG Color">
                      <mask height="26" id="mask0_9_1514" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="26" x="1" y="1">
                        <circle cx="14" cy="14" fill="var(--fill-0, white)" id="Ellipse 1" r="12.3047" />
                      </mask>
                      <g mask="url(#mask0_9_1514)">
                        <rect fill="url(#paint0_linear_9_1514)" height="28" id="Color" width="28" x="1.66893e-06" />
                      </g>
                    </g>
                    <g id="Icon">
                      <path d={svgPaths.p2d58c580} fill="var(--fill-0, white)" id="Vector_2" />
                      <path d={svgPaths.p1f830600} fill="var(--fill-0, white)" id="Vector_3" />
                      <path d={svgPaths.p1aa0d500} fill="var(--fill-0, white)" id="Vector_4" />
                    </g>
                  </g>
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_9_1514" x1="10.2112" x2="18.602" y1="17.6394" y2="9.57896">
                      <stop stopColor="#F21D60" />
                      <stop offset="0.3317" stopColor="#F7393D" />
                      <stop offset="0.7722" stopColor="#FC5915" />
                      <stop offset="1" stopColor="#FE6605" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="content-stretch flex font-medium gap-[5px] items-start leading-[0] relative shrink-0 text-nowrap text-white">
                <div className="flex flex-col font-['Inter:Medium',sans-serif] justify-center not-italic relative shrink-0 text-[16px]">
                  <p className="leading-[24px] text-nowrap">One IBC</p>
                </div>
                <div className="flex flex-col font-['Roboto:Medium',sans-serif] justify-center relative shrink-0 text-[10px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[normal] text-nowrap">TM</p>
                </div>
              </div>
              <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
                <p className="leading-[24px]">Digital App</p>
              </div>
              <Polygon />
            </div>
            <Text text="More" />
          </div>
          <div className="bg-[#c8b07a] content-stretch flex items-center justify-center overflow-clip px-[24px] py-[8px] relative rounded-[8px] shrink-0" data-name="Link">
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">
              <p className="leading-[24px]">Set Up Now</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[57.894px] left-[calc(50%-760px)] top-[26px] translate-x-[-50%] w-[200px]">
        <div className="absolute contents left-0 top-0" data-name="Logo">
          <div className="absolute contents left-0 top-0" data-name="Group">
            <div className="absolute h-[44.393px] left-[87.95px] top-[6.74px] w-[112.054px]" data-name="Group">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112.054 44.3931">
                <g id="Group">
                  <path d={svgPaths.p27d1800} fill="var(--fill-0, #383839)" id="Vector" />
                  <g id="Group_2">
                    <path d={svgPaths.p3bdf8380} fill="var(--fill-0, #383839)" id="Vector_2" />
                    <path d={svgPaths.p22893d80} fill="var(--fill-0, #383839)" id="Vector_3" />
                    <path d={svgPaths.p28867f00} fill="var(--fill-0, #383839)" id="Vector_4" />
                    <path d={svgPaths.p1357e9f0} fill="var(--fill-0, #383839)" id="Vector_5" />
                    <path d={svgPaths.p221c2638} fill="var(--fill-0, #383839)" id="Vector_6" />
                    <path d={svgPaths.p20541400} fill="var(--fill-0, #383839)" id="Vector_7" />
                    <path d={svgPaths.p38f8b980} fill="var(--fill-0, #383839)" id="Vector_8" />
                    <path d={svgPaths.p3556bc00} fill="var(--fill-0, #383839)" id="Vector_9" />
                  </g>
                  <g id="Group_3">
                    <path d={svgPaths.pf76f280} fill="var(--fill-0, #383839)" id="Vector_10" />
                    <path d={svgPaths.p3038fb80} fill="var(--fill-0, #383839)" id="Vector_11" />
                    <path d={svgPaths.p4d88300} fill="var(--fill-0, #383839)" id="Vector_12" />
                    <path d={svgPaths.pbab3200} fill="var(--fill-0, #383839)" id="Vector_13" />
                    <path d={svgPaths.p23c63e00} fill="var(--fill-0, #383839)" id="Vector_14" />
                    <path d={svgPaths.p14d12180} fill="var(--fill-0, #383839)" id="Vector_15" />
                    <path d={svgPaths.p3a560772} fill="var(--fill-0, #383839)" id="Vector_16" />
                    <path d={svgPaths.p1bc55000} fill="var(--fill-0, #383839)" id="Vector_17" />
                    <path d={svgPaths.p338c2700} fill="var(--fill-0, #383839)" id="Vector_18" />
                    <path d={svgPaths.p17d95d30} fill="var(--fill-0, #383839)" id="Vector_19" />
                    <path d={svgPaths.p2bf23e00} fill="var(--fill-0, #383839)" id="Vector_20" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="absolute h-[57.894px] left-0 top-0 w-[79.059px]" data-name="Group">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.0589 57.8944">
                <g id="Group">
                  <path d={svgPaths.p21dfdcf0} fill="var(--fill-0, #CC1F26)" id="Vector" />
                  <g id="Group_2">
                    <path d={svgPaths.p3797cb00} fill="var(--fill-0, #CC1F26)" id="Vector_2" />
                    <g id="Group_3">
                      <path d={svgPaths.pd686200} fill="var(--fill-0, #CC1F26)" id="Vector_3" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute content-stretch flex flex-col items-start pl-0 pr-[100px] py-0 right-0 top-0 w-[1604px]">
        <div className="h-[47px] relative shrink-0 w-full">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex items-center justify-between pl-[52px] pr-0 py-0 relative size-full">
              <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Left Block">
                <div className="relative shrink-0 size-[24px]" data-name="Hotline">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g clipPath="url(#clip0_9_2471)" id="Hotline">
                      <path d={svgPaths.p6058e80} fill="var(--fill-0, #2C2C2C)" id="Vector" />
                    </g>
                    <defs>
                      <clipPath id="clip0_9_2471">
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
                  <div className="h-[18px] overflow-clip relative rounded-[2px] shrink-0 w-[27px]">
                    <div className="absolute h-[19px] left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-[29px]" data-name="image 1444">
                      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1444} />
                    </div>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2c2c2c] text-[16px] text-nowrap">
                    <p className="leading-[24px]">Hong Kong</p>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}