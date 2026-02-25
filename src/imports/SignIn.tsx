import svgPaths from "./svg-juk5zinrmz";
import imgRectangle720 from "figma:asset/2fb1adc18ec6fcfd7e36970b9a028db9b0b21e3f.png";
import imgRectangle721 from "figma:asset/8dc73b8a42d3b61b09b23bcbfa87fc4a62d03606.png";
import imgRectangle729 from "figma:asset/3c558e6f6698be9045439bfdd46d63fe4c5ba7b8.png";
import imgRectangle722 from "figma:asset/20278ebd6a5ba4e5f9cc9261dbd88cdfa801512e.png";
import imgRectangle727 from "figma:asset/fddcfaa1d952e4ecedd46bcaaec3b9459c2227ab.png";
import imgRectangle728 from "figma:asset/c5579b11975aaca8c7b41f0a48ac9176b88fb9a8.png";
import imgRectangle724 from "figma:asset/f976f21e239d67ee4892fb6d86eb1570174a2ceb.png";
import imgRectangle726 from "figma:asset/88820a93ae312ae1d15453711eb14321ad3ae329.png";
import imgRectangle725 from "figma:asset/212a132288fe6e2f58ac78a65a0fc239a9c3793b.png";
import imgRectangle723 from "figma:asset/cc09ff0ed7b4369f4d62387b75350164821036a8.png";

function Label() {
  return (
    <div className="content-stretch flex font-['Noto_Sans:SemiBold',sans-serif] font-semibold gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px] whitespace-pre" data-name="Label">
      <p className="relative shrink-0 text-[#3b3a3c]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>{`Email Address `}</p>
      <p className="relative shrink-0 text-[#c91f26]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        *
      </p>
    </div>
  );
}

function Field() {
  return (
    <div className="h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[10px] py-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans:Regular',sans-serif] font-normal h-full leading-[normal] min-h-px min-w-px relative text-[#646464] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            Email Address
          </p>
        </div>
      </div>
    </div>
  );
}

function FormElement() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[79px] items-start relative shrink-0 w-full" data-name="Form Element">
      <Label />
      <Field />
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex font-['Noto_Sans:SemiBold',sans-serif] font-semibold gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px] whitespace-pre" data-name="Label">
      <p className="relative shrink-0 text-[#3b3a3c]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Password
      </p>
      <p className="relative shrink-0 text-[#c91f26]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        *
      </p>
    </div>
  );
}

function NewIconEyeVisibility() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="New/icon/eye-visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="New/icon/eye-visibility">
          <g id="Vector">
            <path d={svgPaths.p37afb00} fill="#555555" />
            <path d={svgPaths.p3c0cbc00} fill="#555555" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Field1() {
  return (
    <div className="h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Field">
      <div aria-hidden="true" className="absolute border border-[#cfcfcf] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[10px] py-[16px] relative size-full">
          <p className="flex-[1_0_0] font-['Noto_Sans:Regular',sans-serif] font-normal h-full leading-[normal] min-h-px min-w-px relative text-[#646464] text-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            Password
          </p>
          <NewIconEyeVisibility />
        </div>
      </div>
    </div>
  );
}

function FormElement1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[79px] items-start relative shrink-0 w-full" data-name="Form Element">
      <Label1 />
      <Field1 />
    </div>
  );
}

function MainButton() {
  return (
    <div className="bg-[#c91f26] content-stretch flex items-center justify-between px-0 py-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Main Button">
      <div className="flex flex-col font-['Noto_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">Sign In</p>
      </div>
    </div>
  );
}

function SocialsContactUs() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Socials, Contact Us">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Vector">
          <path d={svgPaths.p16de2d00} fill="var(--fill-0, #FBBB00)" id="Vector_2" />
          <path d={svgPaths.p2c8d2f00} fill="var(--fill-0, #518EF8)" id="Vector_3" />
          <path d={svgPaths.p34292480} fill="var(--fill-0, #28B446)" id="Vector_4" />
          <path d={svgPaths.pfb100c0} fill="var(--fill-0, #F14336)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-center justify-center left-[20px] right-[20px] top-1/2 translate-y-[-50%]" data-name="Container">
      <SocialsContactUs />
      <div className="flex flex-col font-['Noto_Sans:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#518ef8] text-[18px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        <p className="leading-[normal] whitespace-pre">SIGN IN WITH GOOGLE</p>
      </div>
    </div>
  );
}

function ButtonGoogle() {
  return (
    <div className="h-[52px] relative rounded-[12px] shrink-0 w-full" data-name="Button Google">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border border-[#518ef8] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="1">
      <MainButton />
      <p className="font-['Noto_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#3b3a3c] text-[16px] text-center w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Or
      </p>
      <ButtonGoogle />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-full" data-name="Form">
      <FormElement />
      <FormElement1 />
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Noto_Sans:Regular',sans-serif] font-normal h-[19px] leading-[normal] relative shrink-0 text-[#3b3a3c] text-[16px] text-right underline w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Forgot Password?
      </p>
      <Component />
      <p className="font-['Roboto:Regular',sans-serif] font-normal h-[19px] leading-[1.2] relative shrink-0 text-[#3b3a3c] text-[0px] text-[16px] text-center w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Noto_Sans:Regular',sans-serif]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>{`Not on One IBC yet?? `}</span>
        <span className="font-['Noto_Sans:SemiBold',sans-serif] font-semibold text-[#c91f26]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
          Create your account
        </span>
      </p>
    </div>
  );
}

function LoginForm() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[458px]" data-name="Login Form">
      <div className="flex flex-col font-['Roboto:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[0px] text-black text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="font-['Noto_Sans:Bold',sans-serif] leading-[normal] whitespace-pre">
          <span className="text-[#3b3a3c] text-[36px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            Sign in to
          </span>
          <span className="text-[36px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            {" "}
          </span>
          <span className="text-[#c91f26] text-[48px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
            One IBC
          </span>
        </p>
      </div>
      <Form />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[23.73%_53.13%_23.74%_34.84%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.8413 25.216">
        <g id="Group">
          <path d={svgPaths.p8ab6680} fill="var(--fill-0, #3B3A3C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[24.28%_41.88%_24.36%_47.58%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.7613 24.652">
        <g id="Group">
          <path d={svgPaths.p3dab5900} fill="var(--fill-0, #3B3A3C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[24.28%_33.92%_24.36%_59.36%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.876 24.652">
        <g id="Group">
          <path d={svgPaths.p23c58380} fill="var(--fill-0, #3B3A3C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents inset-[23.73%_33.92%_23.74%_34.84%]" data-name="Group">
      <Group />
      <Group1 />
      <Group2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[24.32%_27.99%_24.32%_69.43%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.31733 24.652">
        <g id="Group">
          <path d="M0 0H5.31733V24.652H0V0Z" fill="var(--fill-0, #CA1F26)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[24.32%_18.33%_24.31%_73.37%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1227 24.6547">
        <g id="Group">
          <path d={svgPaths.p2e5fcb00} fill="var(--fill-0, #CA1F26)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[23.61%_8.8%_23.62%_81.93%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.152 25.3293">
        <g id="Group">
          <path d={svgPaths.p2d5ebf0} fill="var(--fill-0, #CA1F26)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents inset-[23.61%_8.8%_23.62%_69.43%]" data-name="Group">
      <Group4 />
      <Group5 />
      <Group6 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute inset-[3%_68.51%_3%_1.78%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61.3599 45.1218">
        <g id="Group">
          <path d={svgPaths.p894ca80} fill="var(--fill-0, #CA1F26)" id="Vector" />
          <path d={svgPaths.p35e3400} fill="var(--fill-0, #CA1F26)" id="Vector_2" />
          <g id="Group_2">
            <path d={svgPaths.p34de9000} fill="var(--fill-0, #CA1F26)" id="Vector_3" />
            <g id="Group_3">
              <path d={svgPaths.p6da9980} fill="var(--fill-0, #CA1F26)" id="Vector_4" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="absolute contents inset-[3%_8.8%_3%_1.78%]" data-name="Group">
      <Group3 />
      <Group7 />
      <Group8 />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute inset-[8.35%_0.85%_68.3%_94%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6307 11.208">
        <g id="Group">
          <path d={svgPaths.p32a9d580} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function OneIbcLogo() {
  return (
    <div className="absolute h-[48px] left-0 overflow-clip top-0 w-[206.5px]" data-name="one-ibc-logo 1">
      <Group9 />
      <Group10 />
    </div>
  );
}

function LeftSide8Column() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-full items-center justify-center min-h-px min-w-px relative" data-name="Left side 8 Column">
      <LoginForm />
      <OneIbcLogo />
    </div>
  );
}

function Art() {
  return <div className="flex-[1_0_0] h-full min-h-px min-w-px" data-name="Art" />;
}

function MainContainer() {
  return (
    <div className="absolute content-stretch flex gap-[32px] inset-0 items-center justify-center p-[32px]" data-name="Main Container">
      <LeftSide8Column />
      <Art />
    </div>
  );
}

function Component1() {
  return (
    <div className="absolute h-[1140px] overflow-clip right-0 top-0 w-[800px]" data-name="1" style={{ backgroundImage: "linear-gradient(155.732deg, rgb(255, 255, 255) 0.76965%, rgb(227, 227, 227) 89.211%)" }}>
      <div className="absolute flex h-[370.081px] items-center justify-center left-[138.64px] top-[-23px] w-[434.652px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[19.096deg]">
          <div className="h-[264.037px] relative rounded-[23.422px] w-[368.552px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[23.422px] size-full" src={imgRectangle720} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[370.081px] items-center justify-center left-[44.9px] top-[247.9px] w-[434.652px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[19.096deg]">
          <div className="h-[264.037px] relative rounded-[23.422px] w-[368.552px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[23.422px] size-full" src={imgRectangle721} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[370.081px] items-center justify-center left-[796.35px] top-[504.49px] w-[434.652px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[19.096deg]">
          <div className="h-[264.037px] relative rounded-[23.422px] w-[368.552px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[23.422px] size-full" src={imgRectangle729} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[370.081px] items-center justify-center left-[542.89px] top-[25.8px] w-[434.652px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[19.096deg]">
          <div className="h-[264.037px] relative rounded-[23.422px] shadow-[0px_11.842px_178.813px_0px_rgba(153,153,153,0.15)] w-[368.552px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[23.422px] size-full" src={imgRectangle722} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[370.381px] items-center justify-center left-[261.1px] top-[839.56px] w-[435.518px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[19.096deg]">
          <div className="h-[264.037px] relative rounded-[23.422px] shadow-[0px_11.842px_178.813px_0px_rgba(153,153,153,0.15)] w-[369.468px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[23.422px]">
              <img alt="" className="absolute h-[419.28%] left-[-0.21%] max-w-none top-[-0.27%] w-full" src={imgRectangle727} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[370.081px] items-center justify-center left-[354.98px] top-[568.4px] w-[434.652px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[19.096deg]">
          <div className="h-[264.037px] relative rounded-[23.422px] shadow-[0px_11.842px_178.813px_0px_rgba(153,153,153,0.15)] w-[368.552px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[23.422px] size-full" src={imgRectangle728} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[370.081px] items-center justify-center left-[449.01px] top-[296.96px] w-[434.652px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[19.096deg]">
          <div className="h-[264.037px] relative rounded-[23.422px] shadow-[0px_11.842px_178.813px_0px_rgba(153,153,153,0.15)] w-[368.552px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[23.422px] size-full" src={imgRectangle724} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[370.081px] items-center justify-center left-[-48.98px] top-[519.06px] w-[434.652px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[19.096deg]">
          <div className="h-[264.037px] relative rounded-[23.422px] w-[368.552px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[23.422px] size-full" src={imgRectangle726} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[370.081px] items-center justify-center left-[-143px] top-[790.5px] w-[434.652px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[19.096deg]">
          <div className="h-[264.037px] relative rounded-[23.422px] w-[368.552px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[23.422px] size-full" src={imgRectangle725} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[370.081px] items-center justify-center left-[702.35px] top-[780.4px] w-[434.652px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[19.096deg]">
          <div className="h-[264.037px] relative rounded-[23.422px] w-[368.552px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[23.422px] size-full" src={imgRectangle723} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SignIn() {
  return (
    <div className="bg-white relative size-full" data-name="Sign in">
      <MainContainer />
      <Component1 />
    </div>
  );
}