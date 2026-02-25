import { useNavigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  Building2, 
  Mail, 
  FileText, 
  DollarSign,
  ArrowRight,
  Shield,
  ClipboardCheck,
  TrendingUp,
  BadgeCheck,
  MapPin
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function ServicedOfficePage() {
  const navigate = useNavigate();

  const whyNeeds = [
    'Establishing a company without physical presence in the jurisdiction',
    'Legal requirements for a registered office address',
    'Bank requests for a verifiable legal business address',
    'Maintaining compliance without the cost of a physical office',
    'Offshore companies or startups operating remotely.'
  ];

  const virtualOfficeBenefits = [
    'Register and maintain a company address',
    'Receive and manage official correspondence',
    'Meet banking and regulatory address requirements'
  ];

  const comparisonTable = [
    {
      criteria: 'Physical workspace',
      virtualOffice: 'Not included',
      physicalOffice: 'Included'
    },
    {
      criteria: 'Address only',
      virtualOffice: 'Yes',
      physicalOffice: 'Yes'
    },
    {
      criteria: 'Use for incorporation',
      virtualOffice: 'Yes',
      physicalOffice: 'Yes'
    },
    {
      criteria: 'Use for banking & compliance',
      virtualOffice: 'Yes',
      physicalOffice: 'Yes'
    },
    {
      criteria: 'Cost structure',
      virtualOffice: 'Lower, predictable',
      physicalOffice: 'Higher, ongoing'
    },
    {
      criteria: 'Operational flexibility',
      virtualOffice: 'High',
      physicalOffice: 'Limited'
    },
    {
      criteria: 'Suitable for',
      virtualOffice: 'Remote businesses, offshore companies, startups',
      physicalOffice: 'Local operations, on-site teams'
    }
  ];

  const whatsIncluded = [
    'Registered business address for legal and administrative purposes',
    'Mail handling and notification services (receipt and forwarding alerts)',
    'Official company registration confirmation',
    'Use of address for banking and compliance verification',
    'Annual renewal (12-month service term)'
  ];

  const lifecycleStages = [
    {
      stage: 'Incorporation',
      purpose: 'Registering a legal company address'
    },
    {
      stage: 'Banking',
      purpose: 'Verifying business address for account opening'
    },
    {
      stage: 'Compliance',
      purpose: 'Receiving official notices and correspondence'
    },
    {
      stage: 'Renewal',
      purpose: 'Maintaining an active legal presence'
    }
  ];

  const processSteps = [
    {
      title: 'Step 1 — Jurisdiction Advisory',
      description: 'Assess suitable jurisdictions based on business activity and address requirements.'
    },
    {
      title: 'Step 2 — Usage Confirmation',
      description: 'Confirm the intended use of the Virtual Office (incorporation, banking, compliance).'
    },
    {
      title: 'Step 3 — Service Agreement',
      description: ''
    }
  ];

  const pricingPlans = [
    {
      duration: '3 Months',
      features: {
        address: '✓ Included',
        mail: '✓ Included',
        compliance: '✓ Limited term',
        authority: '✓ Case-based',
        renewal: '-',
        bestFor: 'Short-term setup',
        action: 'Request Quote'
      }
    },
    {
      duration: '6 Months',
      features: {
        address: '✓ Included',
        mail: '✓ Included',
        compliance: '✓ Standard',
        authority: '✓ Accepted',
        renewal: '✓ Moderate',
        bestFor: 'Mid-term operations',
        action: 'Request Quote'
      }
    },
    {
      duration: '12 Months',
      features: {
        address: '✓ Included',
        mail: '✓ Included',
        compliance: '✓ Full term',
        authority: '✓ Fully accepted',
        renewal: '✓ High',
        bestFor: 'Long-term presence & stability',
        action: 'Request Quote'
      }
    }
  ];

  const nextSteps = [
    {
      title: 'Missing legal documents',
      service: 'Certificates & Legalization'
    },
    {
      title: 'Post-incorporation obligations',
      service: 'Other Filings (ES, EIN, TIN)'
    },
    {
      title: 'Financial management',
      service: 'Accounting & Auditing'
    },
    {
      title: 'Business expansion or restructuring',
      service: 'Corporate Structuring'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="py-[30px] lg:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Image */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-primary)] to-blue-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1674981208693-de5a9c4c4f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                  alt="Virtual Office Services" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 px-4 py-2 rounded-full mb-6 border border-[var(--color-primary)]/20">
                <Building2 className="w-4 h-4 text-[var(--color-primary)]" />
                <span className="text-[var(--color-primary)] font-semibold text-sm">Virtual Office Services</span>
              </div>

              <h1 className="text-[#2C2C2C] font-bold text-2xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Get a Legal Business Address Without a Physical Office
              </h1>
              
              <p className="text-[#6C757D] text-base lg:text-xl leading-relaxed mb-8">
                Our Virtual Office services provide a compliant registered address for company incorporation, banking and ongoing legal requirements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Consult My Virtual Office Setup
                </button>
                <button 
                  onClick={() => navigate('/jurisdictions')}
                  className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 font-semibold text-lg shadow-lg"
                >
                  Check Jurisdiction Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Point - Why Do Businesses Need a Virtual Office */}
      <section className="py-[30px] lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1674981208693-de5a9c4c4f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                alt="Why Virtual Office" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-4xl mb-6">
                Why Do Businesses Need a Virtual Office?
              </h2>
              
              <div className="space-y-3">
                {whyNeeds.map((need, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-[var(--color-primary)] mt-1">-</span>
                    <p className="text-[#2C2C2C] text-base lg:text-lg">{need}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Virtual Office */}
      <section className="py-[30px] lg:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-4xl mb-6">
            What is a Virtual Office?
          </h2>
          
          <p className="text-[#2C2C2C] text-base lg:text-lg mb-6 max-w-4xl">
            A Virtual Office provides a legitimate business address that enables companies to meet legal, banking, and regulatory requirements without maintaining a physical office.
          </p>

          <div className="mb-8">
            <p className="text-[#2C2C2C] font-semibold text-lg mb-4">
              A Virtual Office allows businesses to:
            </p>
            <div className="space-y-3">
              {virtualOfficeBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)] mt-1">-</span>
                  <p className="text-[#2C2C2C] text-base lg:text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200 mb-12">
            <p className="text-[#2C2C2C] font-semibold text-base lg:text-lg">
              Note:
            </p>
            <p className="text-[#2C2C2C] text-base lg:text-lg">
              A Virtual Office does not include physical office space or on-site operations.
            </p>
          </div>

          {/* VIRTUAL OFFICE vs PHYSICAL OFFICE Table */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[#2C2C2C] font-bold text-xl lg:text-2xl">
                VIRTUAL OFFICE vs PHYSICAL OFFICE
              </h3>
              <div className="text-sm text-[#6C757D]">K4 bảng</div>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
              <div className="bg-white rounded-2xl shadow-lg border border-[var(--color-border)] overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[var(--color-primary)] to-orange-500">
                      <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase">Criteria</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase">Virtual Office</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase">Physical Office</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonTable.map((row, index) => (
                      <tr key={index} className="hover:bg-blue-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-[#2C2C2C] text-base">{row.criteria}</td>
                        <td className="px-6 py-4 text-[#2C2C2C] text-base">{row.virtualOffice}</td>
                        <td className="px-6 py-4 text-[#2C2C2C] text-base">{row.physicalOffice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
              {comparisonTable.map((row, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-[var(--color-border)]">
                  <h4 className="font-bold text-[#2C2C2C] text-lg mb-4">{row.criteria}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-[#6C757D] mb-1">Virtual Office:</p>
                      <p className="text-[#2C2C2C] text-base">{row.virtualOffice}</p>
                    </div>
                    <div>
                      <p className="text-sm text-[#6C757D] mb-1">Physical Office:</p>
                      <p className="text-[#2C2C2C] text-base">{row.physicalOffice}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-[30px] lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <ImageWithFallback 
                src="figma:asset/e908ef0a99137e019917389c38ccca2f1c5b57ac.png" 
                alt="Using an EIN" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <p className="text-sm text-[#6C757D] mt-2">Using an EIN</p>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-4xl mb-6">
                Virtual Office Services
              </h2>
              
              <p className="text-[#6C757D] text-base lg:text-lg mb-6">
                Our Virtual Office service provides a legitimate business address to support company incorporation, banking, and ongoing compliance requirements.
              </p>

              <h3 className="text-[#2C2C2C] font-bold text-xl lg:text-2xl mb-4">
                What's Included:
              </h3>

              <div className="space-y-3">
                {whatsIncluded.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-[var(--color-primary)] mt-1">-</span>
                    <p className="text-[#2C2C2C] text-base lg:text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where Can Your Business Set Up a Virtual Office */}
      <section className="py-[30px] lg:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-4xl mb-6 text-center">
            Where Can Your Business Set Up a Virtual Office?
          </h2>
          
          <div className="max-w-4xl mx-auto">
            {/* Placeholder for chart - you can add actual chart data here */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[var(--color-border)] text-center">
              <p className="text-[#6C757D] text-lg">[Chart showing jurisdiction availability]</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Supports Incorporation & Banking */}
      <section className="py-[30px] lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-4xl">
              HOW IT SUPPORTS INCORPORATION & BANKING
            </h2>
            <div className="text-sm text-[#6C757D]">K8 bảng</div>
          </div>

          <p className="text-[#2C2C2C] text-base lg:text-lg mb-8">
            A Virtual Office is commonly used across key stages of a company's lifecycle:
          </p>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-8">
            <div className="bg-white rounded-2xl shadow-lg border border-[var(--color-border)] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[var(--color-primary)] to-orange-500">
                    <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase">Stage</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {lifecycleStages.map((stage, index) => (
                    <tr key={index} className="hover:bg-blue-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-[#2C2C2C] text-base lg:text-lg">{stage.stage}</td>
                      <td className="px-6 py-4 text-[#2C2C2C] text-base lg:text-lg">{stage.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {lifecycleStages.map((stage, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-[var(--color-border)]">
                <h4 className="font-bold text-[#2C2C2C] text-lg mb-2">{stage.stage}</h4>
                <p className="text-[#2C2C2C] text-base">{stage.purpose}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - How It Works */}
      <section className="py-[30px] lg:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <ImageWithFallback 
                src="figma:asset/e908ef0a99137e019917389c38ccca2f1c5b57ac.png" 
                alt="Process" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-4xl mb-6">
                How It Works
              </h2>
              
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-[var(--color-border)]">
                    <h3 className="text-[#2C2C2C] font-bold text-lg lg:text-xl mb-2">
                      {step.title}
                    </h3>
                    {step.description && (
                      <p className="text-[#6C757D] text-base lg:text-lg">
                        {step.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-[30px] lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-4xl mb-6">
              Important Notes
            </h2>
            
            <div className="bg-yellow-50 rounded-xl p-8 shadow-lg border-2 border-yellow-200">
              <p className="text-[#2C2C2C] text-base lg:text-lg mb-4">
                A Virtual Office does not replace actual business operations where physical presence is legally required.
              </p>
              
              <p className="text-[#2C2C2C] text-base lg:text-lg mb-2">
                Certain banks may request additional elements, such as:
              </p>
              
              <div className="space-y-2 ml-4">
                <div className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)] mt-1">-</span>
                  <p className="text-[#2C2C2C] text-base lg:text-lg">Nominee services</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[var(--color-primary)] mt-1">-</span>
                  <p className="text-[#2C2C2C] text-base lg:text-lg">Economic Substance or local presence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fees - Virtual Office Service Fees */}
      <section className="py-[30px] lg:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-6 lg:mb-12">
            <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-5xl mb-4">
              Virtual Office Service Fees
            </h2>
            <p className="text-[#6C757D] text-base lg:text-lg max-w-3xl mx-auto">
              Choose a service duration that fits your operating timeline and compliance needs.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto mb-8">
            <div className="bg-white rounded-2xl shadow-lg border border-[var(--color-border)] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-[var(--color-primary)] to-orange-500">
                    <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase">Service Scope</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase">3 Months</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase">6 Months</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-white uppercase">12 Months</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#2C2C2C] text-base">Registered Business Address</td>
                    <td className="px-6 py-4 text-green-600 text-base">✓ Included</td>
                    <td className="px-6 py-4 text-green-600 text-base">✓ Included</td>
                    <td className="px-6 py-4 text-green-600 text-base">✓ Included</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#2C2C2C] text-base">Mail Handling & Notification</td>
                    <td className="px-6 py-4 text-green-600 text-base">✓ Included</td>
                    <td className="px-6 py-4 text-green-600 text-base">✓ Included</td>
                    <td className="px-6 py-4 text-green-600 text-base">✓ Included</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#2C2C2C] text-base">Compliance Use Eligibility</td>
                    <td className="px-6 py-4 text-[#2C2C2C] text-base">✓ Limited term</td>
                    <td className="px-6 py-4 text-[#2C2C2C] text-base">✓ Standard</td>
                    <td className="px-6 py-4 text-green-600 text-base">✓ Full term</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#2C2C2C] text-base">Authority / Regality Acceptance</td>
                    <td className="px-6 py-4 text-[#2C2C2C] text-base">✓ Case-based</td>
                    <td className="px-6 py-4 text-green-600 text-base">✓ Accepted</td>
                    <td className="px-6 py-4 text-green-600 text-base">✓ Fully accepted</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#2C2C2C] text-base">Renewal Predictability</td>
                    <td className="px-6 py-4 text-[#6C757D] text-base">-</td>
                    <td className="px-6 py-4 text-[#2C2C2C] text-base">✓ Moderate</td>
                    <td className="px-6 py-4 text-green-600 text-base">✓ High</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-[#2C2C2C] text-base">Best For</td>
                    <td className="px-6 py-4 text-[#2C2C2C] text-base">Short-term setup</td>
                    <td className="px-6 py-4 text-[#2C2C2C] text-base">Mid-term operations</td>
                    <td className="px-6 py-4 text-[#2C2C2C] text-base">Long-term presence & stability</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-semibold text-[#2C2C2C] text-base">Action</td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => navigate('/contact')}
                        className="text-[var(--color-primary)] font-semibold hover:underline"
                      >
                        Request Quote
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => navigate('/contact')}
                        className="text-[var(--color-primary)] font-semibold hover:underline"
                      >
                        Request Quote
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button 
                        onClick={() => navigate('/contact')}
                        className="text-[var(--color-primary)] font-semibold hover:underline"
                      >
                        Request Quote
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6 mb-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-[var(--color-border)]">
                <h3 className="text-[#2C2C2C] font-bold text-xl mb-4">{plan.duration}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#6C757D]">Registered Business Address:</span>
                    <span className="text-green-600 font-semibold">{plan.features.address}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6C757D]">Mail Handling & Notification:</span>
                    <span className="text-green-600 font-semibold">{plan.features.mail}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6C757D]">Compliance Use Eligibility:</span>
                    <span className="text-[#2C2C2C] font-semibold">{plan.features.compliance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6C757D]">Authority / Regality Acceptance:</span>
                    <span className="text-[#2C2C2C] font-semibold">{plan.features.authority}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#6C757D]">Renewal Predictability:</span>
                    <span className="text-[#2C2C2C] font-semibold">{plan.features.renewal}</span>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-[#6C757D] text-sm mb-1">Best For:</p>
                    <p className="text-[#2C2C2C] font-semibold">{plan.features.bestFor}</p>
                  </div>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="w-full bg-[var(--color-primary)] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
                  >
                    {plan.features.action}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-[var(--color-primary)] text-white px-10 py-4 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg"
            >
              Get Virtual Office Pricing (cho chọn Jun's)
            </button>
          </div>
        </div>
      </section>

      {/* Cross-Sell Flow - What's Next */}
      <section className="py-[30px] lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Image */}
            <div className="relative">
              <ImageWithFallback 
                src="figma:asset/db05ad49ac97f0023769098466e0677555e3c0ac.png" 
                alt="Why File With IBrxer" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <p className="text-sm text-[#6C757D] mt-2">Why File With IBrxer?</p>
            </div>

            {/* Right: Content */}
            <div>
              <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-4xl mb-6">
                What's Next After Virtual Office Setup?
              </h2>
              
              <p className="text-[#6C757D] text-base lg:text-lg mb-6">
                Depending on your business needs, you may consider the following next steps:
              </p>

              <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 mb-6">
                <p className="text-[#2C2C2C] text-sm">
                  Note UI: CTA (trỏ sang page dịch vụ tương ứng)
                </p>
              </div>

              <div className="space-y-4">
                {nextSteps.map((step, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border border-blue-100 hover:border-blue-300 transition-all cursor-pointer"
                    onClick={() => navigate('/all-services')}
                  >
                    <ArrowRight className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[#2C2C2C] font-semibold text-base lg:text-lg">
                        {step.title} → {step.service}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-[30px] lg:py-24 bg-gradient-to-br from-[var(--color-primary)] via-red-600 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Building2 className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-white font-bold text-xl md:text-3xl mb-6">
            Get compliant without overhead costs
          </h2>
          
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-[var(--color-primary)] px-12 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-xl shadow-2xl inline-flex items-center gap-3"
          >
            <Building2 className="w-6 h-6" />
            <span>Consult My Virtual Office Requirement</span>
          </button>
        </div>
      </section>
    </div>
  );
}