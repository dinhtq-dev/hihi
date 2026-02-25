import svgPaths from "./svg-rxb74h3zdr";

function LogoVisa() {
  return (
    <div className="absolute inset-[26.67%_8%]" data-name="Logo / Visa">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.52 14.9333">
        <g clipPath="url(#clip0_34_3077)" id="Logo / Visa">
          <path d={svgPaths.p28c15c00} fill="var(--fill-0, #1434CB)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_34_3077">
            <rect fill="white" height="14.9333" width="44.52" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PaymentMethod() {
  return (
    <div className="h-[32px] relative shrink-0 w-[53px]" data-name="Payment Method">
      <div className="absolute bg-white border border-[#d4d8da] border-solid inset-0 rounded-[6px]" data-name="BG" />
      <LogoVisa />
    </div>
  );
}

function LogoMastercard() {
  return (
    <div className="absolute inset-[13.33%_22%] overflow-clip" data-name="Logo / Mastercard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.68 23.4667">
        <g id="Vector">
          <g id="Group">
            <path d={svgPaths.pe50ed80} fill="var(--fill-0, #231F20)" id="Vector_2" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.p12977d80} fill="var(--fill-0, #F79410)" id="Vector_3" />
          </g>
          <path d={svgPaths.p13318f80} fill="var(--fill-0, #FF5F00)" id="Vector_4" />
          <g id="Group_3">
            <path d={svgPaths.p17402000} fill="var(--fill-0, #EB001B)" id="Vector_5" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p17db5e00} fill="var(--fill-0, #F79E1B)" id="Vector_6" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PaymentMethod1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[53px]" data-name="Payment Method">
      <div className="absolute bg-white border border-[#d4d8da] border-solid inset-0 rounded-[6px]" data-name="BG" />
      <LogoMastercard />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="List">
      <PaymentMethod />
      <PaymentMethod1 />
    </div>
  );
}

function CardsPaymentMethod() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-center justify-center px-[6px] py-[18px] relative rounded-[8px] shrink-0 w-[210px]" data-name="Cards / Payment Method">
      <div aria-hidden="true" className="absolute border border-[#c91f26] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <List />
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#858486] text-[13px] text-center w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Credit or Debit Card
      </p>
    </div>
  );
}

function LogoAmericanExpress() {
  return (
    <div className="absolute inset-[13.33%] overflow-clip" data-name="Logo / American Express">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.4669 23.4667">
        <g id="Vector">
          <path d={svgPaths.p21685b80} fill="var(--fill-0, #016FD0)" id="path3078" />
          <path d={svgPaths.p2e8f3480} fill="var(--fill-0, white)" id="path3082" />
          <path d={svgPaths.p2d82dc80} fill="var(--fill-0, white)" id="path3080" />
          <path d={svgPaths.p26dd7c00} fill="var(--fill-0, #016FD0)" id="path3046" />
          <path d={svgPaths.p3550b00} fill="var(--fill-0, #016FD0)" id="path3048" />
          <path d={svgPaths.p4e61a00} fill="var(--fill-0, #016FD0)" id="path3050" />
          <path d={svgPaths.p2ce94200} fill="var(--fill-0, #016FD0)" id="path3052" />
          <path d={svgPaths.p3514d140} fill="var(--fill-0, #016FD0)" id="path3054" />
          <path d={svgPaths.p43f3200} fill="var(--fill-0, #016FD0)" id="path3056" />
          <path d={svgPaths.p2b346f0} fill="var(--fill-0, #016FD0)" id="path3058" />
          <path d={svgPaths.p12ed0300} fill="var(--fill-0, #016FD0)" id="path3060" />
          <path d={svgPaths.p1e2fd200} fill="var(--fill-0, #016FD0)" id="path3062" />
          <path d={svgPaths.p211f0500} fill="var(--fill-0, #016FD0)" id="path3064" />
          <path d={svgPaths.p3efcd880} fill="var(--fill-0, #016FD0)" id="path3066" />
          <path d={svgPaths.p16d3a180} fill="var(--fill-0, #016FD0)" id="path3068" />
          <path d={svgPaths.p11481800} fill="var(--fill-0, #016FD0)" id="path3072" />
          <path d={svgPaths.p1f517b00} fill="var(--fill-0, #016FD0)" id="path3074" />
          <path d={svgPaths.p33160480} fill="var(--fill-0, #016FD0)" id="path3076" />
        </g>
      </svg>
    </div>
  );
}

function PaymentMethod2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Payment Method">
      <div className="absolute bg-white border border-[#d4d8da] border-solid inset-0 rounded-[6px]" data-name="BG" />
      <LogoAmericanExpress />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="List">
      <PaymentMethod2 />
    </div>
  );
}

function CardsPaymentMethod1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-center justify-center px-[6px] py-[18px] relative rounded-[8px] shrink-0 w-[210px]" data-name="Cards / Payment Method">
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <List1 />
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#858486] text-[13px] text-center w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Credit or Debit Card
      </p>
    </div>
  );
}

function Vector() {
  return (
    <div className="absolute inset-[13.33%_20%]" data-name="Vector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 23.4667">
        <g id="Vector">
          <g id="Mask group">
            <mask height="24" id="mask0_34_3109" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
              <g id="Group">
                <path d={svgPaths.p2eba2e00} fill="var(--fill-0, #27346A)" id="Vector_2" />
              </g>
            </mask>
            <g mask="url(#mask0_34_3109)">
              <path clipRule="evenodd" d={svgPaths.p3303b80} fill="var(--fill-0, #27346A)" fillRule="evenodd" id="Fill-9" />
            </g>
          </g>
          <path clipRule="evenodd" d={svgPaths.pfa90200} fill="var(--fill-0, #2790C3)" fillRule="evenodd" id="Fill-11" />
          <path clipRule="evenodd" d={svgPaths.p33b73f00} fill="var(--fill-0, #1F264F)" fillRule="evenodd" id="Fill-12" />
        </g>
      </svg>
    </div>
  );
}

function PaymentMethod3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Payment Method">
      <div className="absolute bg-white border border-[#d4d8da] border-solid inset-0 rounded-[6px]" data-name="BG" />
      <Vector />
    </div>
  );
}

function LogoVisa1() {
  return (
    <div className="absolute inset-[26.67%_8%]" data-name="Logo / Visa">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.52 14.9333">
        <g clipPath="url(#clip0_34_3077)" id="Logo / Visa">
          <path d={svgPaths.p28c15c00} fill="var(--fill-0, #1434CB)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_34_3077">
            <rect fill="white" height="14.9333" width="44.52" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function PaymentMethod4() {
  return (
    <div className="h-[32px] relative shrink-0 w-[53px]" data-name="Payment Method">
      <div className="absolute bg-white border border-[#d4d8da] border-solid inset-0 rounded-[6px]" data-name="BG" />
      <LogoVisa1 />
    </div>
  );
}

function LogoMastercard1() {
  return (
    <div className="absolute inset-[13.33%_22%] overflow-clip" data-name="Logo / Mastercard">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.68 23.4667">
        <g id="Vector">
          <g id="Group">
            <path d={svgPaths.pe50ed80} fill="var(--fill-0, #231F20)" id="Vector_2" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.p12977d80} fill="var(--fill-0, #F79410)" id="Vector_3" />
          </g>
          <path d={svgPaths.p13318f80} fill="var(--fill-0, #FF5F00)" id="Vector_4" />
          <g id="Group_3">
            <path d={svgPaths.p17402000} fill="var(--fill-0, #EB001B)" id="Vector_5" />
          </g>
          <g id="Group_4">
            <path d={svgPaths.p17db5e00} fill="var(--fill-0, #F79E1B)" id="Vector_6" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function PaymentMethod5() {
  return (
    <div className="h-[32px] relative shrink-0 w-[53px]" data-name="Payment Method">
      <div className="absolute bg-white border border-[#d4d8da] border-solid inset-0 rounded-[6px]" data-name="BG" />
      <LogoMastercard1 />
    </div>
  );
}

function LogoAmericanExpress1() {
  return (
    <div className="absolute inset-[13.33%] overflow-clip" data-name="Logo / American Express">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.4669 23.4667">
        <g id="Vector">
          <path d={svgPaths.p21685b80} fill="var(--fill-0, #016FD0)" id="path3078" />
          <path d={svgPaths.p2e8f3480} fill="var(--fill-0, white)" id="path3082" />
          <path d={svgPaths.p2d82dc80} fill="var(--fill-0, white)" id="path3080" />
          <path d={svgPaths.p26dd7c00} fill="var(--fill-0, #016FD0)" id="path3046" />
          <path d={svgPaths.p3550b00} fill="var(--fill-0, #016FD0)" id="path3048" />
          <path d={svgPaths.p4e61a00} fill="var(--fill-0, #016FD0)" id="path3050" />
          <path d={svgPaths.p2ce94200} fill="var(--fill-0, #016FD0)" id="path3052" />
          <path d={svgPaths.p3514d140} fill="var(--fill-0, #016FD0)" id="path3054" />
          <path d={svgPaths.p43f3200} fill="var(--fill-0, #016FD0)" id="path3056" />
          <path d={svgPaths.p2b346f0} fill="var(--fill-0, #016FD0)" id="path3058" />
          <path d={svgPaths.p12ed0300} fill="var(--fill-0, #016FD0)" id="path3060" />
          <path d={svgPaths.p1e2fd200} fill="var(--fill-0, #016FD0)" id="path3062" />
          <path d={svgPaths.p211f0500} fill="var(--fill-0, #016FD0)" id="path3064" />
          <path d={svgPaths.p3efcd880} fill="var(--fill-0, #016FD0)" id="path3066" />
          <path d={svgPaths.p16d3a180} fill="var(--fill-0, #016FD0)" id="path3068" />
          <path d={svgPaths.p11481800} fill="var(--fill-0, #016FD0)" id="path3072" />
          <path d={svgPaths.p1f517b00} fill="var(--fill-0, #016FD0)" id="path3074" />
          <path d={svgPaths.p33160480} fill="var(--fill-0, #016FD0)" id="path3076" />
        </g>
      </svg>
    </div>
  );
}

function PaymentMethod6() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Payment Method">
      <div className="absolute bg-white border border-[#d4d8da] border-solid inset-0 rounded-[6px]" data-name="BG" />
      <LogoAmericanExpress1 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="List">
      <PaymentMethod3 />
      <PaymentMethod4 />
      <PaymentMethod5 />
      <PaymentMethod6 />
    </div>
  );
}

function CardsPaymentMethod2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-center justify-center px-[6px] py-[18px] relative rounded-[8px] shrink-0 w-[210px]" data-name="Cards / Payment Method">
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <List2 />
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#858486] text-[13px] text-center w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        PayPal
      </p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start relative size-full">
      <CardsPaymentMethod />
      <CardsPaymentMethod1 />
      <CardsPaymentMethod2 />
    </div>
  );
}