import { SectionContainer } from '@/app/components/common/SectionContainer';
import { SectionHeading } from '@/app/components/common/SectionHeading';
import { PrimaryButton } from '@/app/components/common/PrimaryButton';
import { useNavigate } from 'react-router-dom';
import { 
  Shield, 
  TrendingUp, 
  Users, 
  Lock,
  Building2,
  Banknote,
  FileCheck,
  Clock,
  CheckCircle2,
  Globe2,
  Scale,
  HeartHandshake
} from 'lucide-react';
import heroImage from 'figma:asset/7d73d31a048f329ae83e382070eb6fb800126485.png';
import paintPointImage from 'figma:asset/884a30f2751995f5d4d684071048c0a84fdbb4e7.png';
import processImage from 'figma:asset/1e75e07e654ef9b19359c1d09db1380ac31fecb9.png';

export function IncorporationPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner Section */}
      <SectionContainer background="gradient" noPadding>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-[30px] lg:py-20">
          {/* Left: Image */}
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Company Incorporation" 
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>

          {/* Right: Content */}
          <div>
            <h1 className="text-[#2C2C2C] font-bold text-2xl md:text-5xl lg:text-6xl mb-6">
              Start Your Global Company in the Right Jurisdiction
            </h1>
            <p className="text-[#6C757D] text-base lg:text-lg mb-6 leading-relaxed">
              Protect your assets, optimize tax structure, and expand globally with One IBC
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton onClick={() => navigate('/setup-now')}>
                Get Free Consultation
              </PrimaryButton>
              <PrimaryButton 
                variant="outline" 
                onClick={() => navigate('/jurisdictions')}
              >
                Compare Jurisdictions
              </PrimaryButton>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Common Challenges Businesses Face */}
      <SectionContainer background="white">
        <SectionHeading 
          title="Common Challenges Businesses Face"
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Shield,
              title: "Uncertain about which jurisdiction best fits operational, regulatory, or expansion needs",
              color: "#C91F26"
            },
            {
              icon: Banknote,
              title: "You have faced difficulties or rejections when opening or maintaining a business bank account",
              color: "#2F80ED"
            },
            {
              icon: TrendingUp,
              title: "Your existing structure creates higher tax exposure or increased legal and compliance risk",
              color: "#04BC61"
            },
            {
              icon: Lock,
              title: "You are concerned about personal information disclosure and lack sufficient understanding of local legal requirements",
              color: "#E9AF00"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-all duration-300 group"
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${item.color}15` }}
              >
                <item.icon className="w-6 h-6" style={{ color: item.color }} />
              </div>
              <p className="text-[#2C2C2C] text-sm lg:text-base leading-relaxed">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <div className="relative">
          <img 
            src={paintPointImage} 
            alt="Business Challenges" 
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </SectionContainer>

      {/* Why Use Company Incorporation Services */}
      <SectionContainer background="gray">
        <SectionHeading 
          title="Why Use Company Incorporation Services"
          align="center"
        />

        <p className="text-[#6C757D] text-base lg:text-lg mb-12 text-center max-w-3xl mx-auto">
          Company incorporation services support businesses in establishing a legally compliant entity under an appropriate jurisdiction. Beyond basic registration, incorporation focuses on aligning legal structure, governance, and regulatory requirements with long-term business objectives.
        </p>

        <div className="mb-12">
          <h3 className="text-[#2C2C2C] font-bold text-xl lg:text-3xl mb-6 text-center">
            Key Benefits
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Scale,
                title: "Clear Regulatory Positioning",
                description: "Establish a company structure that meets local legal requirements and reduces compliance exposure."
              },
              {
                icon: Building2,
                title: "Improved Operational & Banking Access",
                description: "A properly aligned structure supports smoother operations and access to financial services."
              },
              {
                icon: Shield,
                title: "Defined Governance & Control",
                description: "Clear ownership, management roles, and decision-making authority under a formal legal framework."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#C91F26]/10 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-[#C91F26]" />
                </div>
                <h4 className="text-[#2C2C2C] font-bold text-lg lg:text-xl mb-3">
                  {item.title}
                </h4>
                <p className="text-[#6C757D] text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Choose Your Company Type */}
      <SectionContainer background="white">
        <SectionHeading 
          title="Part 1: Choose Your Company Type"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: "Limited Liability Company (LLC)",
              description: "Commonly adopted by small to mid-sized enterprises requiring operational flexibility",
              features: [
                "Flexible management structure",
                "Pass-through taxation options",
                "Limited personal liability"
              ]
            },
            {
              title: "Corporation",
              description: "Typically suited for businesses with complex ownership structures, multiple shareholders",
              features: [
                "Separate legal entity",
                "Easier to raise capital",
                "Perpetual existence"
              ]
            }
          ].map((type, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-8 border-2 border-[var(--color-border)] hover:border-[#C91F26] transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-[#2C2C2C] font-bold text-xl lg:text-2xl mb-4">
                {type.title}
              </h3>
              <p className="text-[#6C757D] text-base mb-6 leading-relaxed">
                {type.description}
              </p>
              <ul className="space-y-3">
                {type.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#04BC61] flex-shrink-0 mt-0.5" />
                    <span className="text-[#2C2C2C] text-sm lg:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Choose Your Jurisdiction */}
      <SectionContainer background="gradient">
        <SectionHeading 
          title="Part 2: Choose Your Jurisdiction"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              title: "International Trade & Regional Access",
              jurisdictions: ["Hong Kong", "Singapore"],
              icon: Globe2
            },
            {
              title: "Asset Protection & Privacy",
              jurisdictions: ["BVI", "Cayman Islands", "Seychelles"],
              icon: Shield
            },
            {
              title: "Tax Optimization",
              jurisdictions: ["UAE", "Malta", "Cyprus"],
              icon: TrendingUp
            },
            {
              title: "European Market Entry",
              jurisdictions: ["UK", "Netherlands", "Luxembourg"],
              icon: Building2
            }
          ].map((goal, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#C91F26]"
            >
              <div className="w-12 h-12 bg-[#C91F26]/10 rounded-lg flex items-center justify-center mb-4">
                <goal.icon className="w-6 h-6 text-[#C91F26]" />
              </div>
              <h4 className="text-[#2C2C2C] font-bold text-lg mb-3">
                {goal.title}
              </h4>
              <div className="space-y-2">
                {goal.jurisdictions.map((jurisdiction, idx) => (
                  <div 
                    key={idx}
                    className="text-[#6C757D] text-sm lg:text-base py-1.5 px-3 bg-gray-50 rounded-lg"
                  >
                    {jurisdiction}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <PrimaryButton onClick={() => navigate('/jurisdictions')}>
            View All Jurisdictions
          </PrimaryButton>
        </div>
      </SectionContainer>

      {/* How It Works - Process */}
      <SectionContainer background="white">
        <SectionHeading 
          title="How It Works"
          align="center"
        />

        <p className="text-[#6C757D] text-base lg:text-lg mb-12 text-center max-w-3xl mx-auto">
          A simple four-step incorporation process.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              step: "1",
              title: "Preparation & Name Check",
              description: "Request a company name check and initial eligibility review."
            },
            {
              step: "2",
              title: "Documentation",
              description: "Submit required documents and shareholder information."
            },
            {
              step: "3",
              title: "Filing & Registration",
              description: "We file with the relevant authority and handle formalities."
            },
            {
              step: "4",
              title: "Completion",
              description: "Receive incorporation certificate and company documents."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="relative bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-[var(--color-border)] hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute -top-4 left-6 w-8 h-8 bg-[#C91F26] rounded-full flex items-center justify-center text-white font-bold text-sm">
                {item.step}
              </div>
              <h4 className="text-[#2C2C2C] font-bold text-lg mb-3 mt-4">
                {item.title}
              </h4>
              <p className="text-[#6C757D] text-sm lg:text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Incorporation Services Fee */}
      <SectionContainer background="gray">
        <SectionHeading 
          title="Incorporation Services Fee"
          align="center"
        />

        <p className="text-[#6C757D] text-base lg:text-lg mb-8 text-center max-w-3xl mx-auto">
          Incorporation costs are determined by jurisdictional requirements and the scope of services. Rather than a fixed price, fees are structured to reflect regulatory obligations.
        </p>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Government Fees */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-[#2C2C2C] font-bold text-xl lg:text-2xl mb-4 flex items-center gap-3">
              <FileCheck className="w-6 h-6 text-[#C91F26]" />
              Government Fees
            </h3>
            <p className="text-[#6C757D] text-base mb-4">
              Statutory charges payable to the relevant authority, based on the selected jurisdiction.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-[#2C2C2C] font-semibold">Example: Hong Kong</p>
              <p className="text-[#6C757D] text-sm mt-2">Registration fee: HKD 1,720 (~USD 220)</p>
            </div>
          </div>

          {/* Service Fees */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-[#2C2C2C] font-bold text-xl lg:text-2xl mb-4 flex items-center gap-3">
              <Banknote className="w-6 h-6 text-[#2F80ED]" />
              Service Fees
            </h3>
            <p className="text-[#6C757D] text-base mb-4">
              Professional fees for advisory services, incorporation execution, and administrative support.
            </p>
            <ul className="space-y-2">
              {[
                "Name check and reservation",
                "Document preparation",
                "Filing and registration",
                "First year registered office"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#04BC61] flex-shrink-0 mt-0.5" />
                  <span className="text-[#2C2C2C] text-sm lg:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Services */}
          <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#C91F26]/20">
            <h3 className="text-[#2C2C2C] font-bold text-xl lg:text-2xl mb-4 flex items-center gap-3">
              <HeartHandshake className="w-6 h-6 text-[#04BC61]" />
              Additional Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Nominee Director",
                "Nominee Shareholder",
                "Bank Account Assistance",
                "Virtual Office Package",
                "Compliance Support",
                "Tax Registration"
              ].map((service, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#C91F26] flex-shrink-0" />
                  <span className="text-[#2C2C2C] text-sm lg:text-base">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Quick Launch: Shelf Company */}
      <SectionContainer background="white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-5xl mb-6">
                Quick Launch: Shelf Company
              </h2>
              <p className="text-[#6C757D] text-base lg:text-lg mb-6 leading-relaxed">
                Suitable for businesses requiring immediate operational readiness, with reduced setup time and administrative processes.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: Clock,
                    title: "Immediate Availability",
                    description: "Pre-registered and ready for transfer"
                  },
                  {
                    icon: Shield,
                    title: "Clean History",
                    description: "No prior business activity or liabilities"
                  },
                  {
                    icon: FileCheck,
                    title: "Compliant Structure",
                    description: "All statutory requirements fulfilled"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-[#C91F26]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[#C91F26]" />
                    </div>
                    <div>
                      <h4 className="text-[#2C2C2C] font-bold text-base lg:text-lg mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[#6C757D] text-sm lg:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <PrimaryButton onClick={() => navigate('/setup-now')}>
                View Available Shelf Companies
              </PrimaryButton>
            </div>

            {/* Right: Image placeholder */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl h-[400px] flex items-center justify-center">
              <div className="text-center">
                <Building2 className="w-24 h-24 text-[#C91F26]/30 mx-auto mb-4" />
                <p className="text-[#6C757D] font-medium">Shelf Company Illustration</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Ongoing Support Beyond Incorporation */}
      <SectionContainer background="gradient">
        <SectionHeading 
          title="Ongoing Support Beyond Incorporation"
          align="center"
        />

        <p className="text-[#6C757D] text-base lg:text-lg mb-12 text-center max-w-3xl mx-auto">
          Incorporation is the first step. Ongoing compliance and operational support ensures your entity remains in good standing.
        </p>

        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-[#2C2C2C] font-bold text-xl lg:text-2xl mb-8 text-center">
            Post-Incorporation Support Timeline
          </h3>

          <div className="space-y-6">
            {[
              {
                phase: "Phase 1 – Immediately After Incorporation",
                items: [
                  "Bank account opening assistance",
                  "Business license applications",
                  "Initial tax registration"
                ]
              },
              {
                phase: "Phase 2 – First Year",
                items: [
                  "Annual return filing",
                  "Registered office maintenance",
                  "Compliance calendar management"
                ]
              },
              {
                phase: "Phase 3 – Ongoing",
                items: [
                  "Annual renewals and filings",
                  "Director/shareholder changes",
                  "Accounting and audit support"
                ]
              }
            ].map((phase, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 lg:p-8 shadow-lg"
              >
                <h4 className="text-[#C91F26] font-bold text-lg lg:text-xl mb-4">
                  {phase.phase}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {phase.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#04BC61] flex-shrink-0 mt-0.5" />
                      <span className="text-[#2C2C2C] text-sm lg:text-base">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Social Proof */}
      <SectionContainer background="white">
        <SectionHeading 
          title="Why Businesses Choose One IBC"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              number: "7,000+",
              label: "Companies incorporated across multiple jurisdictions"
            },
            {
              number: "#1",
              label: "Top Jurisdictions 2024-2025: BVI · Hong Kong · Seychelles · Singapore"
            },
            {
              number: "15+",
              label: "Years of experience in international incorporation"
            },
            {
              number: "98%",
              label: "Client satisfaction rate"
            }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-[var(--color-border)] hover:shadow-lg transition-all duration-300"
            >
              <div className="text-[#C91F26] font-bold text-3xl lg:text-4xl mb-2">
                {stat.number}
              </div>
              <p className="text-[#6C757D] text-sm lg:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 lg:p-12 border border-[var(--color-border)]">
          <h3 className="text-[#2C2C2C] font-bold text-xl lg:text-2xl mb-8 text-center">
            What Our Clients Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "One IBC made the incorporation process seamless. Their expertise in Hong Kong regulations saved us months of work.",
                author: "Michael Chen",
                company: "Tech Startup Founder"
              },
              {
                quote: "Professional, efficient, and transparent. They guided us through every step of setting up our BVI structure.",
                author: "Sarah Williams",
                company: "Investment Manager"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="text-[#C91F26] text-4xl mb-4">"</div>
                <p className="text-[#2C2C2C] text-base lg:text-lg mb-6 leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-[#2C2C2C] font-bold">{testimonial.author}</p>
                  <p className="text-[#6C757D] text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Final CTA */}
      <SectionContainer background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-white font-bold text-2xl md:text-5xl lg:text-6xl mb-6">
            Ready to Build Your Global Company?
          </h2>
          <p className="text-gray-300 text-base lg:text-lg mb-8">
            Take the next step with structured guidance and jurisdiction-specific expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryButton onClick={() => navigate('/setup-now')}>
              Book Your Free Strategy Call
            </PrimaryButton>
            <PrimaryButton 
              variant="outline" 
              onClick={() => navigate('/contact')}
              className="!text-white !border-white hover:!bg-white hover:!text-[#332A2A]"
            >
              Contact Our Team
            </PrimaryButton>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
