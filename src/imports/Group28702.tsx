import svgPaths from "./svg-2l502dfmkc";

function Group() {
  return (
    <div className="absolute inset-[16.35%_8.74%_66.45%_28.58%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68.9539 6.1916">
        <g id="Group">
          <path d={svgPaths.p18ce8e00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1d7da580} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p4c6d2f0} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p38a1a700} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p3e5fec80} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p18ba0700} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p3fe8c600} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3bc8eb80} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p31945500} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p8848e00} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p3166fa80} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p38b5c100} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.p1d7f79e0} fill="var(--fill-0, white)" id="Vector_13" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[50.57%_17.56%_16.38%_28.29%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59.5638 11.8982">
        <g id="Group">
          <path d={svgPaths.pf489e00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.pf37bd00} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p193ac0f0} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p282da00} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pfd51500} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p2f3d2700} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p117fca00} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p2bc948c0} fill="var(--fill-0, white)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents inset-[16.35%_8.74%_16.38%_28.29%]" data-name="Group">
      <Group />
      <Group1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[22.84%_78.48%_22.87%_7.18%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.7734 19.544">
        <g id="Group">
          <path d={svgPaths.p27ffca00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p14e20e00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

export default function Group4() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[36px] left-0 top-0 w-[110px]" data-name="Vector">
        <div className="absolute inset-[-0.97%_-0.32%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110.702 36.7018">
            <path d={svgPaths.pb14ca00} id="Vector" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.70185" />
          </svg>
        </div>
      </div>
      <Group2 />
      <Group3 />
    </div>
  );
}