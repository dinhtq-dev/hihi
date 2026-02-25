function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="absolute aspect-[415.33/355.98] left-px right-px rounded-[20px] top-px">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[20px]">{children}</div>
    </div>
  );
}
type ItemLinkTextProps = {
  text: string;
};

function ItemLinkText({ text }: ItemLinkTextProps) {
  return (
    <div className="absolute h-[17px] left-0 top-[6px] w-[40.88px]">
      <div className="absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight h-[17px] justify-center leading-[0] left-0 not-italic text-[#0f1e4c] text-[12px] top-[8.5px] translate-y-[-50%] uppercase w-[41.08px]">
        <p className="leading-[20px]">{text}</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute bg-white bottom-[182.99px] h-[37px] left-[51px] rounded-tl-[20px] rounded-tr-[20px] w-[188.83px]">
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 h-[40px] left-[-22px] rounded-br-[20px] shadow-[0px_20px_0px_0px_white] w-[22.84px]" data-name="Overlay+Shadow" />
      <div className="absolute h-[19px] left-[24px] top-[11px] w-[140.83px]">
        <div className="absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight h-[19px] justify-center leading-[0] left-0 not-italic text-[#0f1e4c] text-[14px] top-[9.5px] translate-y-[-50%] uppercase w-[141.03px]">
          <p className="leading-[20px]">{"September 12, 2025"}</p>
        </div>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 h-[40px] right-[-22.99px] rounded-bl-[20px] shadow-[0px_20px_0px_0px_white] w-[22.84px]" data-name="Overlay+Shadow" />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative size-full">
      <div className="h-[539.98px] relative rounded-[25px] shrink-0 w-[417.33px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[25px]" />
        <Wrapper>
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src="191d390c3550fa9e8f22ad89bde49709a7360682.png" />
        </Wrapper>
        <List />
        <div className="absolute h-[78px] left-[36px] top-[385.99px] w-[316.41px]" data-name="Heading 4 → Link">
          <div className="absolute capitalize flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight h-[78px] justify-center leading-[38px] left-0 not-italic text-[#0f1e4c] text-[28px] top-[39px] tracking-[-1.12px] translate-y-[-50%] w-[316.61px]">
            <p className="mb-0">Doctor-Approved Ways to</p>
            <p>Stay Healthy</p>
          </div>
        </div>
        <div className="absolute h-[26px] left-[36px] right-[36px] top-[482.99px]" data-name="List">
          <ItemLinkText text="admin" />
          <div className="absolute border border-[#e3e3e2] border-solid h-[33px] left-[59.55px] rounded-[100px] top-[-2px] w-[162.25px]" data-name="Item → Link">
            <div className="absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight h-[17px] justify-center leading-[0] left-[16px] not-italic text-[#0f1e4c] text-[12px] top-[15.5px] translate-y-[-50%] uppercase w-[128.45px]">
              <p className="leading-[20px]">{`Health & Wellness`}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[539.98px] relative rounded-[25px] shrink-0 w-[417.33px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[25px]" />
        <Wrapper>
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src="34b7774f76ca84dd9e3c4f746c1418bbf8655bab.png" />
        </Wrapper>
        <List />
        <div className="absolute h-[78px] left-[36px] top-[385.99px] w-[338.66px]" data-name="Heading 4 → Link">
          <div className="absolute capitalize flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight h-[78px] justify-center leading-[38px] left-0 not-italic text-[#0f1e4c] text-[28px] top-[39px] tracking-[-1.12px] translate-y-[-50%] w-[338.85px]">
            <p className="mb-0">What to Expect During Your</p>
            <p>First Visit to Our Clinic</p>
          </div>
        </div>
        <div className="absolute h-[26px] left-[36px] right-[36px] top-[482.99px]" data-name="List">
          <ItemLinkText text="admin" />
          <div className="absolute border border-[#e3e3e2] border-solid h-[33px] left-[59.55px] rounded-[100px] top-[-2px] w-[120.02px]" data-name="Item → Link">
            <div className="absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight h-[17px] justify-center leading-[0] left-[16px] not-italic text-[#0f1e4c] text-[12px] top-[15.5px] translate-y-[-50%] uppercase w-[86.22px]">
              <p className="leading-[20px]">Patient Care</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[539.98px] relative rounded-[25px] shrink-0 w-[417.33px]" data-name="Border">
        <div aria-hidden="true" className="absolute border border-[#dcdcdc] border-solid inset-0 pointer-events-none rounded-[25px]" />
        <Wrapper>
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src="45e0e85efff32b4a3229382c3648fbf47bddf782.png" />
        </Wrapper>
        <List />
        <div className="absolute h-[78px] left-[36px] top-[385.99px] w-[314.78px]" data-name="Heading 4 → Link">
          <div className="absolute capitalize flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight h-[78px] justify-center leading-[38px] left-0 not-italic text-[#0f1e4c] text-[27.9px] top-[39px] tracking-[-1.12px] translate-y-[-50%] w-[314.98px]">
            <p className="mb-0">Telemedicine or In-Person</p>
            <p>Care: What’s Best?</p>
          </div>
        </div>
        <div className="absolute h-[26px] left-[36px] right-[36px] top-[482.99px]" data-name="List">
          <ItemLinkText text="admin" />
          <div className="absolute border border-[#e3e3e2] border-solid h-[33px] left-[59.54px] rounded-[100px] top-[-2px] w-[122.11px]" data-name="Item → Link">
            <div className="absolute flex flex-col font-['Inter:Extra_Light',sans-serif] font-extralight h-[17px] justify-center leading-[0] left-[16px] not-italic text-[#0f1e4c] text-[12px] top-[15.5px] translate-y-[-50%] uppercase w-[88.31px]">
              <p className="leading-[20px]">Virtual Care</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}