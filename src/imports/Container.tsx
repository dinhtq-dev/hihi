import svgPaths from "./svg-iilyojo1i0";

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start p-[24px] relative rounded-[12px] size-full" data-name="Container" style={{ backgroundImage: "linear-gradient(152.996deg, rgb(249, 250, 251) 0%, rgb(255, 255, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#dee2e6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="bg-[#c91f26] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[56px]" data-name="Container">
        <div className="relative shrink-0 size-[27.988px]" data-name="Icon">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9883 27.9883">
            <g id="Icon">
              <path d={svgPaths.p28436700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33236" />
              <path d={svgPaths.p5062880} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33236" />
            </g>
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full">
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#2c2c2c] text-[20px] w-full">Company Incorporation</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#6c757d] text-[16px] w-full">Register companies in over 30 jurisdictions with complete legal documentation.</p>
      </div>
    </div>
  );
}