import svgPaths from "./svg-nr15yjjetc";
import { imgGroup } from "./svg-ja711";

function Group() {
  return (
    <div className="absolute inset-[0.09%_0_0.1%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-0.057px] mask-size-[64px_64px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.0001 63.8787">
        <g id="Group">
          <path d={svgPaths.p7b27800} fill="url(#paint0_linear_53_5450)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p83d6700} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_53_5450" x1="31.8336" x2="32.1588" y1="3.8328" y2="58.4235">
            <stop stopColor="#57D163" />
            <stop offset="1" stopColor="#23B33A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

export default function IconWhatapp() {
  return (
    <div className="relative size-full" data-name="icon-whatapp-1761101872">
      <ClipPathGroup />
    </div>
  );
}