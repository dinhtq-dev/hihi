import imgImage1471 from "figma:asset/5f53d3b44744d1f6edf7bfbb35a94275a38ab782.png";
import imgImage1472 from "figma:asset/a313684c0b751ce85b634ff753f067916126b81c.png";

function Container() {
  return <div className="absolute bg-[rgba(0,0,0,0.1)] blur-3xl filter left-0 rounded-[37170400px] size-[500px] top-[42.86px]" data-name="Container" />;
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-tight lg:leading-[75px] text-2xl md:text-5xl lg:text-[60px] text-white whitespace-pre-wrap">{`Nominee Director & Shareholder Services`}</p>
    </div>
  );
}

function Heading1() {
  return (
    <div className="hidden lg:block h-[40.001px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[36px] text-[rgba(255,255,255,0.9)] top-[-0.22px] whitespace-pre">Protect Your Identity. Stay Fully in Control.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-4 lg:gap-[24px] items-start left-4 lg:left-[343.56px] top-[30px] lg:top-[95.99px] right-4 lg:right-auto lg:w-[895.99px]" data-name="Container">
      <Heading />
      <Heading1 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-gradient-to-b from-[#c91f26] relative size-full to-[#8b1419]" data-name="Section">
      <Container />
      <Container1 />
      <div className="absolute left-[926px] size-[1121px] top-[-243px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1121 1121">
          <circle cx="560.5" cy="560.5" fill="url(#paint0_radial_38_2584)" id="Ellipse 1915" r="560.5" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="translate(560.5 560.5) rotate(90) scale(560.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_38_2584" r="1">
              <stop stopColor="#FFCACA" />
              <stop offset="1" stopColor="#BC1D23" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex h-[726px] items-center justify-center left-[1373px] top-[24px] w-[374px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[726px] relative w-[374px]" data-name="image 1471">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[107.04%] left-[-18.73%] max-w-none top-[-7.04%] w-[118.86%]" src={imgImage1471} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[613px] left-[1167px] top-[64px] w-[412px]" data-name="image 1472">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage1472} />
      </div>
    </div>
  );
}