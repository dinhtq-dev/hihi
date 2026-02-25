import svgPaths from "@/imports/svg-rxb74h3zdr";

function LogoVisa() {
  return (
    <div className="absolute inset-[26.67%_8%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.52 14.9333">
        <g clipPath="url(#clip0_34_3077)">
          <path d={svgPaths.p28c15c00} fill="#1434CB" />
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

export function PaymentMethodVisa() {
  return (
    <div className="h-[32px] relative shrink-0 w-[53px]">
      <div className="absolute bg-white border border-[#d4d8da] border-solid inset-0 rounded-[6px]" />
      <LogoVisa />
    </div>
  );
}

function LogoMastercard() {
  return (
    <div className="absolute inset-[13.33%_22%] overflow-clip">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.68 23.4667">
        <g>
          <g>
            <path d={svgPaths.pe50ed80} fill="#231F20" />
          </g>
          <g>
            <path d={svgPaths.p12977d80} fill="#F79410" />
          </g>
          <path d={svgPaths.p13318f80} fill="#FF5F00" />
          <g>
            <path d={svgPaths.p17402000} fill="#EB001B" />
          </g>
          <g>
            <path d={svgPaths.p17db5e00} fill="#F79E1B" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export function PaymentMethodMastercard() {
  return (
    <div className="h-[32px] relative shrink-0 w-[53px]">
      <div className="absolute bg-white border border-[#d4d8da] border-solid inset-0 rounded-[6px]" />
      <LogoMastercard />
    </div>
  );
}

// Inline versions without borders for use in input fields
export function InlineLogoVisa() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40px]">
      <LogoVisa />
    </div>
  );
}

export function InlineLogoMastercard() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40px]">
      <LogoMastercard />
    </div>
  );
}

// Import American Express SVG paths
import svgPathsAmex from "@/imports/svg-3fyplmphl8";

function LogoAmericanExpress() {
  return (
    <div className="absolute inset-[13.33%] overflow-clip">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.4669 23.4667">
        <g>
          <path d={svgPathsAmex.p21685b80} fill="#016FD0" />
          <path d={svgPathsAmex.p2e8f3480} fill="white" />
          <path d={svgPathsAmex.p2d82dc80} fill="white" />
          <path d={svgPathsAmex.p26dd7c00} fill="#016FD0" />
          <path d={svgPathsAmex.p3550b00} fill="#016FD0" />
          <path d={svgPathsAmex.p4e61a00} fill="#016FD0" />
          <path d={svgPathsAmex.p13676770} fill="#016FD0" />
          <path d={svgPathsAmex.p3514d140} fill="#016FD0" />
          <path d={svgPathsAmex.p43f3200} fill="#016FD0" />
          <path d={svgPathsAmex.p2b346f0} fill="#016FD0" />
          <path d={svgPathsAmex.p12ed0300} fill="#016FD0" />
          <path d={svgPathsAmex.p1e2fd200} fill="#016FD0" />
          <path d={svgPathsAmex.p211f0500} fill="#016FD0" />
          <path d={svgPathsAmex.p3efcd880} fill="#016FD0" />
          <path d={svgPathsAmex.p16d3a180} fill="#016FD0" />
          <path d={svgPathsAmex.p122b4b00} fill="#016FD0" />
          <path d={svgPathsAmex.p3c792100} fill="#016FD0" />
          <path d={svgPathsAmex.p33160480} fill="#016FD0" />
        </g>
      </svg>
    </div>
  );
}

export function InlineLogoAmex() {
  return (
    <div className="h-[24px] relative shrink-0 w-[40px]">
      <LogoAmericanExpress />
    </div>
  );
}

function LogoJCB() {
  return (
    <div className="absolute inset-[13.33%_20%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 23.4667">
        <g>
          <g>
            <mask height="24" id="mask0_34_3109" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
              <g>
                <path d={svgPaths.p2eba2e00} fill="#27346A" />
              </g>
            </mask>
            <g mask="url(#mask0_34_3109)">
              <path clipRule="evenodd" d={svgPaths.p3303b80} fill="#27346A" fillRule="evenodd" />
            </g>
          </g>
          <path clipRule="evenodd" d={svgPaths.pfa90200} fill="#2790C3" fillRule="evenodd" />
          <path clipRule="evenodd" d={svgPaths.p33b73f00} fill="#1F264F" fillRule="evenodd" />
        </g>
      </svg>
    </div>
  );
}

function PaymentMethodJCB() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute bg-white border border-[#d4d8da] border-solid inset-0 rounded-[6px]" />
      <LogoJCB />
    </div>
  );
}

type PaymentMethodCardProps = {
  type: 'credit-card' | 'paypal' | 'other';
  selected: boolean;
  onClick: () => void;
};

export function PaymentMethodCard({ type, selected, onClick }: PaymentMethodCardProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white content-stretch flex flex-col gap-[10px] items-center justify-center px-[6px] py-[18px] relative rounded-[8px] shrink-0 w-full transition-all hover:shadow-md"
    >
      <div 
        aria-hidden="true" 
        className={`absolute border-2 border-solid inset-0 pointer-events-none rounded-[8px] transition-colors ${
          selected ? 'border-[#c91f26]' : 'border-[#cfcfcf]'
        }`} 
      />
      
      {type === 'credit-card' && (
        <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0 w-full">
          <PaymentMethodVisa />
          <PaymentMethodMastercard />
        </div>
      )}
      
      {type === 'paypal' && (
        <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0 w-full">
          <PaymentMethodJCB />
          <PaymentMethodVisa />
          <PaymentMethodMastercard />
          <PaymentMethodJCB />
        </div>
      )}
      
      {type === 'other' && (
        <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0 w-full h-[32px]">
          <div className="text-2xl">🏦</div>
        </div>
      )}
      
      <p className="font-semibold leading-[normal] relative shrink-0 text-[#858486] text-[13px] text-center w-full whitespace-pre-wrap">
        {type === 'credit-card' && 'Credit or Debit Card (processed by Global Payments)'}
        {type === 'paypal' && 'PayPal'}
        {type === 'other' && 'Other'}
      </p>
    </button>
  );
}