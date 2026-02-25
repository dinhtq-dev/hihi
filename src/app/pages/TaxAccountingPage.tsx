import { useNavigate } from 'react-router-dom';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Building2, 
  FileText, 
  DollarSign,
  TrendingUp,
  ArrowRight,
  Briefcase,
  Calculator,
  BarChart3,
  Shield,
  ClipboardCheck,
  Users,
  BookOpen,
  BadgeCheck
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function TaxAccountingPage() {
  const navigate = useNavigate();

  const commonIssues = [
    'Incomplete or inaccurate transaction records',
    'Late or non-compliant financial reporting',
    'Bank requests for financial statements that are unavailable',
    'Failure to meet statutory audit requirements',
    'Risk of penalties, loss of good standing, or operational disruption'
  ];

  const accountingServices = [
    {
      title: 'Bookkeeping',
      description: 'Recording and reconciling financial transactions and bank movements'
    },
    {
      title: 'Financial Statements',
      description: 'Preparation of Balance Sheet, Profit & Loss, and Cash Flow statements'
    },
    {
      title: 'Management Accounts',
      description: 'Internal financial reports to support business decisions'
    },
    {
      title: 'Tax Accounting Support',
      description: 'Preparation of accounting data for tax filings'
    },
    {
      title: 'Accounting Compliance',
      description: 'Ensuring compliance with local accounting standards'
    }
  ];

  const auditingServices = [
    {
      title: 'Statutory Audit',
      description: 'Mandatory audits required by law'
    },
    {
      title: 'Bank-Required Audit',
      description: 'Audits requested by banks to maintain or open accounts'
    },
    {
      title: 'License-Related Audit',
      description: 'Audits required for license application or renewal'
    },
    {
      title: 'Independent Audit',
      description: 'Voluntary audits to enhance credibility with partners or investors'
    }
  ];

  const whoNeeds = [
    'Companies with active bank accounts',
    'Companies generating revenue or conducting transactions',
    'Licensed businesses subject to reporting obligations',
    'Companies engaged in cross-border or international activities',
    'Businesses required to demonstrate financial transparency'
  ];

  const howItWorksSteps = [
    'Our standard accounting and auditing process:',
    'Jurisdiction and compliance assessment',
    'Collection and review of transaction data',
    'Bookkeeping and financial statement preparation',
    'Compliance review and validation',
    'Audit coordination, where required'
  ];

  const feeFactors = [
    'The jurisdiction and applicable accounting standards',
    'The scope of accounting services required',
    'Whether audit or financial review is mandatory',
    'Business activity volume and transaction complexity',
    'Regulatory or bank-specific reporting requirements'
  ];

  const importantNotes = [
    'Accounting standards vary by jurisdiction',
    'Bank balances must reconcile fully with accounting records',
    'Financial statements are commonly required for:',
    'Company renewal',
    'Bank account opening or maintenance',
    'License application or renewal',
    'Audit purposes'
  ];

  const nextSteps = [
    'Company renewal services',
    'Corporate structuring advisory',
    'Banking and trade finance support',
    'Exit, strike-off, or restructuring services'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <section className="py-[30px] lg:py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Image */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-primary)] to-blue-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1762427354051-a9bdb181ae3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" 
                  alt="Accounting & Auditing Services" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 px-4 py-2 rounded-full mb-6 border border-[var(--color-primary)]/20">
                <Calculator className="w-4 h-4 text-[var(--color-primary)]" />
                <span className="text-[var(--color-primary)] font-semibold text-sm">Tax & Compliance Services</span>
              </div>

              <h1 className="text-[#2C2C2C] font-bold text-2xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Professional Accounting & Auditing Services for Global Companies
              </h1>
              
              <div className="flex items-start gap-3 mb-8">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-[#6C757D] text-base lg:text-xl leading-relaxed">
                  Compliant accounting, financial reporting, and audit support to help businesses meet regulatory, banking, and operational requirements across jurisdictions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Consult My Accounting Requirement
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 font-semibold text-lg shadow-lg"
                >
                  Talk to an Accounting Advisor
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Businesses Face Accounting & Auditing Risks */}
      <section className="py-[30px] lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-6 lg:mb-12">
            <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-5xl mb-6">
              Why Businesses Face Accounting & Auditing Risks
            </h2>
            <p className="text-[#6C757D] text-base lg:text-lg max-w-3xl mx-auto mb-8">
              Many companies encounter compliance and operational risks due to improper accounting practices or misunderstood audit obligations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-10">
            <h3 className="text-[#2C2C2C] font-bold text-xl lg:text-2xl mb-6">Common issues include</h3>
            <div className="space-y-4">
              {commonIssues.map((issue, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border border-red-100">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-[#2C2C2C] text-base lg:text-lg">{issue}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <div>
              <p className="text-[#2C2C2C] font-bold text-lg mb-2">Primary CTA</p>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-[var(--color-primary)] text-white px-8 py-3 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold"
              >
                Check Banking Options for Your Jurisdiction
              </button>
            </div>
            <div>
              <p className="text-[#2C2C2C] font-bold text-lg mb-2">Secondary CTA</p>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white text-[var(--color-primary)] px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 font-semibold"
              >
                Talk to our Advisor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What Are Accounting & Auditing Services */}
      <section className="py-[30px] lg:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-6 lg:mb-12">
            <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-5xl mb-6">
              What Are Accounting & Auditing Services?
            </h2>
            <p className="text-[#6C757D] text-base lg:text-lg max-w-4xl mx-auto">
              Accounting and auditing services support businesses in maintaining accurate financial records, preparing compliant financial statements, and meeting audit or regulatory requirements imposed by authorities, banks, or licensing bodies.
            </p>
            <p className="text-[#6C757D] text-base lg:text-lg max-w-4xl mx-auto mt-4">
              These services apply to onshore, offshore, and international companies, depending on jurisdiction and business activity.
            </p>
          </div>

          {/* Accounting Services */}
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-[#2C2C2C] font-bold text-2xl lg:text-3xl mb-6">Accounting Services</h3>
            <p className="text-[#2C2C2C] font-semibold text-lg mb-6">Our accounting services include:</p>
            
            <div className="space-y-6">
              {accountingServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-[var(--color-border)]">
                  <h4 className="text-[#2C2C2C] font-bold text-lg lg:text-xl mb-2">{service.title}</h4>
                  <p className="text-[#6C757D] text-base lg:text-lg">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Auditing Services */}
          <div className="max-w-5xl mx-auto">
            <h3 className="text-[#2C2C2C] font-bold text-2xl lg:text-3xl mb-6">Auditing Services</h3>
            <p className="text-[#2C2C2C] font-semibold text-lg mb-6">Our auditing support includes:</p>
            
            <div className="space-y-6 mb-6">
              {auditingServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-[var(--color-border)]">
                  <h4 className="text-[#2C2C2C] font-bold text-lg lg:text-xl mb-2">{service.title}</h4>
                  <p className="text-[#6C757D] text-base lg:text-lg">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
              <p className="text-[#2C2C2C] text-sm lg:text-base italic">
                *Not all companies are required to undergo auditing. One IBC advises on actual audit obligations to avoid unnecessary costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs Accounting & Auditing Services */}
      <section className="py-[30px] lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-4xl mb-6">
              Who Needs Accounting & Auditing Services?
            </h2>
            <p className="text-[#2C2C2C] text-base lg:text-lg mb-6">
              These services are commonly required for:
            </p>
            <div className="space-y-3">
              {whoNeeds.map((need, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-[#2C2C2C] text-base lg:text-lg">{need}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-[30px] lg:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-4xl mb-8">
              How It Works
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-[var(--color-border)] mb-8">
              <ol className="space-y-4">
                {howItWorksSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <p className="text-[#2C2C2C] text-base lg:text-lg pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="text-center">
              <p className="text-[#2C2C2C] font-bold text-lg mb-4">CTA</p>
              <button 
                onClick={() => navigate('/setup-now')}
                className="bg-[var(--color-primary)] text-white px-10 py-4 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg inline-flex items-center gap-3"
              >
                <Calculator className="w-5 h-5" />
                <span>Start My Accounting Setup</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="py-[30px] lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-4xl mb-6">
              Accounting and auditing service fees
            </h2>
            
            <p className="text-[#6C757D] text-base lg:text-lg mb-6">
              Accounting and auditing service fees may vary depending on:
            </p>

            <div className="space-y-3 mb-8">
              {feeFactors.map((factor, index) => (
                <div key={index} className="flex items-start gap-3">
                  <DollarSign className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                  <p className="text-[#2C2C2C] text-base lg:text-lg">{factor}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-[#2C2C2C] font-bold text-lg mb-4">CTA: Get Exact Quote</p>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-[var(--color-primary)] text-white px-10 py-4 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold text-lg shadow-lg"
              >
                Get Exact Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-[30px] lg:py-20 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-4xl mb-6">
              Important Notes
            </h2>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[var(--color-border)]">
              <ul className="space-y-3">
                {importantNotes.map((note, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[var(--color-primary)] font-bold mt-1">•</span>
                    <p className="text-[#2C2C2C] text-base lg:text-lg">{note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps You May Need */}
      <section className="py-[30px] lg:py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-4xl mb-6">
              Next Steps You May Need
            </h2>
            
            <p className="text-[#6C757D] text-base lg:text-lg mb-6">
              Accounting and auditing are often part of broader corporate compliance.
            </p>

            <div className="space-y-3 mb-6">
              {nextSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border border-blue-100 hover:border-blue-300 transition-all cursor-pointer" onClick={() => navigate('/all-services')}>
                  <ArrowRight className="w-5 h-5 text-[var(--color-primary)]" />
                  <p className="text-[#2C2C2C] text-base lg:text-lg font-medium">{step}</p>
                </div>
              ))}
            </div>

            <p className="text-[#6C757D] text-sm italic">(nhớ trỏ link về dịch vụ tương ứng nhem)</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-[30px] lg:py-24 bg-gradient-to-br from-[var(--color-primary)] via-red-600 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-black/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <BadgeCheck className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-white font-bold text-2xl md:text-5xl lg:text-6xl mb-4">
            Final CTA
          </h2>
          <h3 className="text-white font-bold text-xl md:text-3xl mb-6">
            Build Financial Credibility for Your Business
          </h3>
          
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-[var(--color-primary)] px-12 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-xl shadow-2xl inline-flex items-center gap-3"
          >
            <Calculator className="w-6 h-6" />
            <span>Consult My Accounting Requirement</span>
          </button>
        </div>
      </section>
    </div>
  );
}