import svgPaths from "./svg-ozp0d6z9ul";

function Label() {
  return (
    <div className="content-stretch flex font-['Inter',sans-serif] font-semibold gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px] whitespace-pre" data-name="Label">
      <p className="relative shrink-0 text-[#2C2C2C]">{`Email Address `}</p>
      <p className="relative shrink-0 text-[#c91f26]">
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
          <p className="flex-[1_0_0] font-['Inter',sans-serif] font-normal h-full leading-[normal] min-h-px min-w-px relative text-[#646464] text-[16px] whitespace-pre-wrap">
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
    <div className="content-stretch flex font-['Inter',sans-serif] font-semibold gap-[4px] items-center leading-[normal] relative shrink-0 text-[14px] whitespace-pre" data-name="Label">
      <p className="relative shrink-0 text-[#2C2C2C]">
        Password
      </p>
      <p className="relative shrink-0 text-[#c91f26]">
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
          <p className="flex-[1_0_0] font-['Inter',sans-serif] font-normal h-full leading-[normal] min-h-px min-w-px relative text-[#646464] text-[16px] whitespace-pre-wrap">
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
      <div className="flex flex-col font-['Inter',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">
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
      <div className="flex flex-col font-['Inter',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#518ef8] text-[18px] text-center whitespace-nowrap">
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
      <p className="font-['Inter',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2C2C2C] text-[16px] text-center w-full whitespace-pre-wrap">
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
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Inter',sans-serif] font-normal h-[19px] leading-[normal] relative shrink-0 text-[#2C2C2C] text-[16px] text-right underline w-full whitespace-pre-wrap">
        Forgot Password?
      </p>
      <Component />
      <p className="font-['Inter',sans-serif] font-normal h-[19px] leading-[1.2] relative shrink-0 text-[#2C2C2C] text-[16px] text-center w-full whitespace-pre-wrap">
        <span>Not on OffShore CompanyCorp yet? </span>
        <span className="font-semibold text-[#c91f26]">
          Create your account
        </span>
      </p>
    </div>
  );
}

export default function LoginForm() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative size-full" data-name="Login Form">
      <div className="flex flex-col font-['Inter',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-center whitespace-nowrap">
        <p className="leading-[normal] whitespace-pre">
          <span className="text-[#2C2C2C] text-[36px]">
            Sign in to
          </span>
          <span className="text-[36px]">
            {" "}
          </span>
          <span className="text-[#c91f26] text-[48px]">
            OffShore CompanyCorp
          </span>
        </p>
      </div>
      <Form />
    </div>
  );
}