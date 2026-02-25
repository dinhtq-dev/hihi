import svgPaths from "../../imports/svg-614x8wha1f";
import imgImage1463 from "figma:asset/ea32bd55273fa2c0dda4b16a64acb514f948a094.png";
import { imgImage1462 } from "../../imports/svg-0gklt";

function Icon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 size-[23.99px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.99 23.99">
        <g id="Icon">{children}</g>
      </svg>
    </div>
  );
}

type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="absolute h-[27.988px] left-[23.99px] top-[87.98px] w-[235.815px]">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#2c2c2c] text-[18px] text-nowrap top-[-0.78px]">{text}</p>
    </div>
  );
}

export function ClientPortal() {
  return (
    <section className="py-[30px] lg:py-24 bg-gradient-to-b from-[#f9fafb] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-muted-foreground/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center mb-6 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-foreground leading-tight">
            Your Personalized <span className="text-primary">Client Portal</span>
          </h2>
        </div>

        {/* Portal Dashboard Image */}
        <div className="mb-8 lg:mb-16 w-full flex justify-center">
          <div className="relative w-full max-w-[900px] lg:max-w-none lg:w-[1700px]">
            <div className="relative w-full aspect-[1700/472] mask-alpha mask-intersect">
              <img 
                alt="Client Portal Dashboard" 
                className="w-full h-full object-cover object-center rounded-lg" 
                src={imgImage1463} 
              />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {/* Company Overview */}
          <div className="bg-white border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/50">
            <div className="w-12 h-12 bg-gradient-to-b from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6">
              <Icon>
                <path d={svgPaths.p2c2e6b00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99917" />
                <path d={svgPaths.p2e18c000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99917" />
                <path d="M9.99667 8.99625H7.99667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99917" />
                <path d="M15.9933 12.9946H7.99667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99917" />
                <path d="M15.9933 16.9929H7.99667" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99917" />
              </Icon>
            </div>
            <h3 className="text-foreground text-lg font-semibold mb-3">
              Company Overview
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              View all your registered entities, incorporation details, and current status at a glance.
            </p>
          </div>

          {/* Task Management */}
          <div className="bg-white border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/50">
            <div className="w-12 h-12 bg-gradient-to-b from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6">
              <Icon>
                <path d={svgPaths.p2bcc0280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99917" />
                <path d={svgPaths.p2e4b6080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99917" />
              </Icon>
            </div>
            <h3 className="text-foreground text-lg font-semibold mb-3">
              Task Management
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Stay on top of compliance deadlines, renewals, and action items with smart reminders.
            </p>
          </div>

          {/* Notifications Hub */}
          <div className="bg-white border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/50">
            <div className="w-12 h-12 bg-gradient-to-b from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6">
              <Icon>
                <path d={svgPaths.pcd7280} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99917" />
                <path d={svgPaths.p2c7b0e00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99917" />
              </Icon>
            </div>
            <h3 className="text-foreground text-lg font-semibold mb-3">
              Notifications Hub
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Receive instant updates on state filings, mail forwarding, and important business alerts.
            </p>
          </div>

          {/* Service Recommendations */}
          <div className="bg-white border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:border-primary/50">
            <div className="w-12 h-12 bg-gradient-to-b from-primary to-primary/80 rounded-xl flex items-center justify-center mb-6">
              <Icon>
                <path d={svgPaths.p11473a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99917" />
                <path d={svgPaths.p1f1ac5e0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.99917" />
              </Icon>
            </div>
            <h3 className="text-foreground text-lg font-semibold mb-3">
              Service Recommendations
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Get personalized suggestions for services that can add value to your business setup.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <button className="bg-primary text-primary-foreground px-8 lg:px-10 py-4 rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-300 group relative overflow-hidden border border-primary/50 flex items-center gap-3 hover:gap-4">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
            <span className="relative font-semibold text-base lg:text-lg">Get Access After Registration</span>
            <svg className="relative w-5 h-5 shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 20 20">
              <g>
                <path d={svgPaths.p3d2bab00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66597" />
              </g>
            </svg>
          </button>
          <div className="flex items-center gap-1 text-sm">
            <span className="text-muted-foreground">Already have an account?</span>
            <span className="text-primary font-medium cursor-pointer hover:underline">Sign in here</span>
          </div>
        </div>
      </div>
    </section>
  );
}