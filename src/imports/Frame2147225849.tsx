import svgPaths from "./svg-i61593skvp";

function Group() {
  return (
    <div className="absolute h-[36.624px] left-[72.55px] top-[5.56px] w-[92.444px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.4446 36.6244">
        <g id="Group">
          <path d={svgPaths.p3ed45600} fill="var(--fill-0, #383839)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p2ff0b500} fill="var(--fill-0, #383839)" id="Vector_2" />
            <path d={svgPaths.p1f68900} fill="var(--fill-0, #383839)" id="Vector_3" />
            <path d={svgPaths.p15a38c00} fill="var(--fill-0, #383839)" id="Vector_4" />
            <path d={svgPaths.p329c2500} fill="var(--fill-0, #383839)" id="Vector_5" />
            <path d={svgPaths.p960a100} fill="var(--fill-0, #383839)" id="Vector_6" />
            <path d={svgPaths.p858b800} fill="var(--fill-0, #383839)" id="Vector_7" />
            <path d={svgPaths.p2e9c9000} fill="var(--fill-0, #383839)" id="Vector_8" />
            <path d={svgPaths.p3e6c6000} fill="var(--fill-0, #383839)" id="Vector_9" />
          </g>
          <g id="Group_3">
            <path d={svgPaths.p380d4970} fill="var(--fill-0, #383839)" id="Vector_10" />
            <path d={svgPaths.p248d9200} fill="var(--fill-0, #383839)" id="Vector_11" />
            <path d={svgPaths.p18e00f00} fill="var(--fill-0, #383839)" id="Vector_12" />
            <path d={svgPaths.p15712b00} fill="var(--fill-0, #383839)" id="Vector_13" />
            <path d={svgPaths.p3060f200} fill="var(--fill-0, #383839)" id="Vector_14" />
            <path d={svgPaths.pd2fa280} fill="var(--fill-0, #383839)" id="Vector_15" />
            <path d={svgPaths.pca70500} fill="var(--fill-0, #383839)" id="Vector_16" />
            <path d={svgPaths.p3b50f8f0} fill="var(--fill-0, #383839)" id="Vector_17" />
            <path d={svgPaths.p19d9dcc0} fill="var(--fill-0, #383839)" id="Vector_18" />
            <path d={svgPaths.p1f2f9280} fill="var(--fill-0, #383839)" id="Vector_19" />
            <path d={svgPaths.pa047d00} fill="var(--fill-0, #383839)" id="Vector_20" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute h-[47.763px] left-0 top-0 w-[65.224px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65.2239 47.7629">
        <g id="Group">
          <path d={svgPaths.p2aea2980} fill="var(--fill-0, #CC1F26)" id="Vector" />
          <g id="Group_2">
            <path d={svgPaths.p15926b0} fill="var(--fill-0, #CC1F26)" id="Vector_2" />
            <g id="Group_3">
              <path d={svgPaths.p3695cc00} fill="var(--fill-0, #CC1F26)" id="Vector_3" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Group">
      <Group />
      <Group1 />
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Logo">
      <Group2 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Logo />
    </div>
  );
}