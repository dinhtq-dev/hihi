import svgPaths from "./svg-3fyplmphl8";

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
          <path d={svgPaths.p13676770} fill="var(--fill-0, #016FD0)" id="path3052" />
          <path d={svgPaths.p3514d140} fill="var(--fill-0, #016FD0)" id="path3054" />
          <path d={svgPaths.p43f3200} fill="var(--fill-0, #016FD0)" id="path3056" />
          <path d={svgPaths.p2b346f0} fill="var(--fill-0, #016FD0)" id="path3058" />
          <path d={svgPaths.p12ed0300} fill="var(--fill-0, #016FD0)" id="path3060" />
          <path d={svgPaths.p1e2fd200} fill="var(--fill-0, #016FD0)" id="path3062" />
          <path d={svgPaths.p211f0500} fill="var(--fill-0, #016FD0)" id="path3064" />
          <path d={svgPaths.p3efcd880} fill="var(--fill-0, #016FD0)" id="path3066" />
          <path d={svgPaths.p16d3a180} fill="var(--fill-0, #016FD0)" id="path3068" />
          <path d={svgPaths.p122b4b00} fill="var(--fill-0, #016FD0)" id="path3072" />
          <path d={svgPaths.p3c792100} fill="var(--fill-0, #016FD0)" id="path3074" />
          <path d={svgPaths.p33160480} fill="var(--fill-0, #016FD0)" id="path3076" />
        </g>
      </svg>
    </div>
  );
}

function PaymentMethod() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Payment Method">
      <div className="absolute bg-white border border-[#d4d8da] border-solid inset-0 rounded-[6px]" data-name="BG" />
      <LogoAmericanExpress />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="List">
      <PaymentMethod />
    </div>
  );
}

export default function CardsPaymentMethod() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[10px] items-center justify-center px-[6px] py-[18px] relative rounded-[8px] size-full" data-name="Cards / Payment Method">
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <List />
      <p className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#858486] text-[13px] text-center w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Credit or Debit Card
      </p>
    </div>
  );
}