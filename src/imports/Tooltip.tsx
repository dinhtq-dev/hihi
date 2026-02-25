import svgPaths from "./svg-2ako6znfm9";
import imgCard from "figma:asset/e5dc959abfe0fc5e5cf755456a312c154711ccab.png";

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start leading-[20px] relative shrink-0 text-[#3b3a3c] text-[14px] w-full whitespace-pre-wrap">
      <p className="font-['Roboto:Bold',sans-serif] font-bold relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        What is a Credit card Verification Value number (CVV/CVC)?
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        The Credit card Verification Value is a security feature which appears on every credit card. This number is used in order to ascertain the identity and to prevent fraud. It is located on the back panel of your card.
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[20px] min-w-full relative shrink-0 text-[#3b3a3c] text-[14px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Where can I find the Credit card Verification Value number (CVV/CVC)?
      </p>
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#3b3a3c] text-[14px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`They are the last 3 digits in the signature box on the card"s back panel.`}</p>
      <div className="h-[144px] relative shrink-0 w-[230px]" data-name="Card">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCard} />
      </div>
    </div>
  );
}

function Tooltip() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-[20px] rounded-[10px] top-[20px] w-[274px]" data-name="Tooltip">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#3b3a3c] text-[16px] text-center w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        CVV
      </p>
      <Frame />
      <Frame1 />
    </div>
  );
}

export default function Tooltip1() {
  return (
    <div className="relative size-full" data-name="Tooltip">
      <div className="absolute h-[482.394px] left-0 top-0 w-[314px]" data-name="Union">
        <div className="absolute inset-[-1.24%_-2.55%_-2.07%_-2.55%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 330 498.394">
            <g filter="url(#filter0_d_34_3217)" id="Union">
              <path d={svgPaths.p25cfa300} fill="var(--fill-0, white)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="498.394" id="filter0_d_34_3217" width="330" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.356863 0 0 0 0 0.356863 0 0 0 0 0.356863 0 0 0 0.2 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_34_3217" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_34_3217" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <Tooltip />
    </div>
  );
}