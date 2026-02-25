import svgPaths from "./svg-dfp29ked4i";
import { imgContainer } from "./svg-f4wek";

function Wrapper({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

function Helper1() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          {[...Array(4).keys()].map((_, i) => (
            <Wrapper>
              <path d={svgPaths.p1a9f3b00} fill="var(--fill-0, #FFB300)" id="Vector" />
            </Wrapper>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]" />
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]" />
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]" />
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Wrapper>
            <path d={svgPaths.p3f4cb000} fill="var(--fill-0, #FFB300)" id="Vector" />
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
type HelperProps = {
  text: string;
  text1: string;
};

function Helper({ text, text1 }: HelperProps) {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Roboto:Light',sans-serif] font-light grow items-start leading-[0] min-h-px min-w-px relative shrink-0">
      <div className="flex flex-col justify-center relative shrink-0 text-[#0f1e4c] text-[24px] tracking-[-0.48px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[34px]">{text}</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[#6c757d] text-[16px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26px]">{text1}</p>
      </div>
    </div>
  );
}

function BackgroundHorizontalBorderShadow() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[30px] items-start p-[30px] relative rounded-[12px] shrink-0 w-[400px]" data-name="Background+HorizontalBorder+Shadow">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(1,81,202,0.15)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
        <div className="overflow-clip relative rounded-[70px] shrink-0 size-[70px]" data-name="Container">
          <div className="absolute left-0 size-[70px] top-0" data-name="Image" />
        </div>
        <Helper text="Minh Thư" text1="Nhân viên văn phòng" />
      </div>
      <p className="-webkit-box font-['Roboto:Light',sans-serif] font-light leading-[28px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#444] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sau muôn vàn sự bất lực vì điều trị mụn nhiều nơi mà không khỏi, tưởng chừng phải sống chung với mụn cả đời thì vô tình được bạn bè giới thiệu đến MYSS. Cảm ơn các Bác sĩ và các bạn KTV luôn chu đáo và tận tâm trong suốt quá trình mình điều trị
      </p>
      <Helper1 />
    </div>
  );
}

function BackgroundHorizontalBorderShadow1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[30px] items-start p-[30px] relative rounded-[12px] shrink-0 w-[400px]" data-name="Background+HorizontalBorder+Shadow">
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(1,81,202,0.15)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.05)]" />
      <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
        <div className="overflow-clip relative rounded-[70px] shrink-0 size-[70px]" data-name="Container">
          <div className="absolute left-0 size-[70px] top-0" data-name="Image" />
        </div>
        <Helper text="Khánh Linh" text1="Nhân viên văn phòng" />
      </div>
      <p className="-webkit-box font-['Roboto:Light',sans-serif] font-light leading-[28px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#444] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Nám mình thuộc dạng nám mảng, sau sinh tình trạng càng trầm trọng hơn. Được bạn bè giới thiệu đến Bác sĩ Vân Anh, sau một liệu trình tình trạng nám của mình đã giảm đến 90%, hiện tại mình chỉ phải duy trì chăm sóc da định kì để bảo dưỡng thôi. Rất yên tâm khi gửi gắm làn da của mình tại MYSS.
      </p>
      <Helper1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full">
      <div className="h-[318px] relative shrink-0 w-full" data-name="Mask Group">
        <div className="absolute content-stretch flex gap-[40px] items-center left-[calc(50%+0.38px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1720px_378px] top-0 translate-x-[-50%]" data-name="Container" style={{ maskImage: `url('${imgContainer}')` }}>
          <BackgroundHorizontalBorderShadow />
          <div className="bg-white content-stretch flex flex-col gap-[30px] items-start p-[30px] relative rounded-[12px] shrink-0 w-[400px]" data-name="Background+HorizontalBorder+Shadow">
            <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(1,81,202,0.15)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.05)]" />
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
              <div className="overflow-clip relative rounded-[70px] shrink-0 size-[70px]" data-name="Container">
                <div className="absolute left-0 size-[70px] top-0" data-name="Image" />
              </div>
              <Helper text="Khánh Linh" text1="Nhân viên văn phòng" />
            </div>
            <p className="-webkit-box font-['Roboto:Light',sans-serif] font-light leading-[28px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#444] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Nám mình thuộc dạng nám mảng, sau sinh tình trạng càng trầm trọng hơn. Được bạn bè giới thiệu đến Bác sĩ Vân Anh, sau một liệu trình tình trạng nám của mình đã giảm đến 90%, hiện tại mình chỉ phải duy trì chăm sóc da định kì để bảo dưỡng thôi. Rất yên tâm khi gửi gắm làn da của mình tại MYSS.
            </p>
            <Helper1 />
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[30px] items-start p-[30px] relative rounded-[12px] shrink-0 w-[400px]" data-name="Background+HorizontalBorder+Shadow">
            <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(1,81,202,0.15)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.05)]" />
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
              <div className="overflow-clip relative rounded-[70px] shrink-0 size-[70px]" data-name="Container">
                <div className="absolute left-0 size-[70px] top-0" data-name="Image" />
              </div>
              <Helper text="Hồng Ngọc" text1="Nhân viên văn phòng" />
            </div>
            <p className="-webkit-box font-['Roboto:Light',sans-serif] font-light leading-[28px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#444] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Trang thiết bị và máy móc Phòng khám rất hiện đại, tư vấn liệu trình rõ ràng đúng nhu cầu, sản phẩm có nguồn gốc minh bạch. Chính vì vậy ngay từ lần đầu tiên mình đã cực kì yên tâm khi điều trị tại Myss, và bạn bè mình giới thiệu cũng rất hài lòng về dịch vụ ở đây.
            </p>
            <Helper1 />
          </div>
          <BackgroundHorizontalBorderShadow />
        </div>
      </div>
      <div className="h-[318px] relative shrink-0 w-full" data-name="Mask Group">
        <div className="absolute content-stretch flex gap-[40px] items-center left-[calc(50%+0.19px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1720px_378px] top-0 translate-x-[-50%]" data-name="Container" style={{ maskImage: `url('${imgContainer}')` }}>
          <BackgroundHorizontalBorderShadow1 />
          <div className="bg-white content-stretch flex flex-col gap-[30px] items-start p-[30px] relative rounded-[12px] shrink-0 w-[400px]" data-name="Background+HorizontalBorder+Shadow">
            <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(1,81,202,0.15)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.05)]" />
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
              <div className="overflow-clip relative rounded-[70px] shrink-0 size-[70px]" data-name="Container">
                <div className="absolute left-0 size-[70px] top-0" data-name="Image" />
              </div>
              <Helper text="Hồng Ngọc" text1="Nhân viên văn phòng" />
            </div>
            <p className="-webkit-box font-['Roboto:Light',sans-serif] font-light leading-[28px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#444] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Trang thiết bị và máy móc Phòng khám rất hiện đại, tư vấn liệu trình rõ ràng đúng nhu cầu, sản phẩm có nguồn gốc minh bạch. Chính vì vậy ngay từ lần đầu tiên mình đã cực kì yên tâm khi điều trị tại Myss, và bạn bè mình giới thiệu cũng rất hài lòng về dịch vụ ở đây.
            </p>
            <Helper1 />
          </div>
          <div className="bg-white content-stretch flex flex-col gap-[30px] items-start p-[30px] relative rounded-[12px] shrink-0 w-[400px]" data-name="Background+HorizontalBorder+Shadow">
            <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(1,81,202,0.15)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.05)]" />
            <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full">
              <div className="overflow-clip relative rounded-[70px] shrink-0 size-[70px]" data-name="Container">
                <div className="absolute left-0 size-[70px] top-0" data-name="Image" />
              </div>
              <Helper text="Minh Thư" text1="Nhân viên văn phòng" />
            </div>
            <p className="-webkit-box font-['Roboto:Light',sans-serif] font-light leading-[28px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#444] text-[16px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Sau muôn vàn sự bất lực vì điều trị mụn nhiều nơi mà không khỏi, tưởng chừng phải sống chung với mụn cả đời thì vô tình được bạn bè giới thiệu đến MYSS. Cảm ơn các Bác sĩ và các bạn KTV luôn chu đáo và tận tâm trong suốt quá trình mình điều trị
            </p>
            <Helper1 />
          </div>
          <BackgroundHorizontalBorderShadow1 />
        </div>
      </div>
    </div>
  );
}