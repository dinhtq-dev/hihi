import svgPaths from "./svg-59d8mtznx7";

function Vector() {
  return (
    <div className="absolute left-0 size-[48px] top-0" data-name="Vector">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Vector">
          <circle cx="24" cy="24" fill="var(--fill-0, white)" id="Ellipse 46" r="24" />
          <g clipPath="url(#clip0_54_453)" id="X_logo_2023 1">
            <path d={svgPaths.p1a3a3300} fill="var(--fill-0, #2C2C2C)" id="Vector_2" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_54_453">
            <rect fill="white" height="27" transform="translate(9 10.5)" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function SocialsContactUs() {
  return (
    <div className="relative size-full" data-name="Socials, Contact Us">
      <Vector />
    </div>
  );
}