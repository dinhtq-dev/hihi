import { useNavigate } from 'react-router-dom';
import { 
  AlertTriangle, 
  Shield, 
  CheckCircle2, 
  Building2, 
  FileText, 
  MapPin, 
  DollarSign,
  Clock,
  Bell,
  CheckSquare,
  CreditCard,
  Upload,
  RefreshCw,
  ArrowRight,
  Globe2,
  Briefcase,
  BadgeCheck,
  Sparkles,
  Target,
  Award,
  TrendingUp
} from 'lucide-react';
import heroImage from 'figma:asset/043a64392dab68d4bfc9f057afa6255e49fb5a0d.png';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function CompanyRenewalPage() {
  const navigate = useNavigate();

  const penalties = [
    {
      text: 'Failure to renew the Registered Agent or Registered Address',
      icon: Building2
    },
    {
      text: 'Late or unpaid annual government renewal fees',
      icon: DollarSign
    },
    {
      text: 'Failure to submit Annual Returns',
      icon: FileText
    },
    {
      text: 'Annual statutory returns filed with loss of legal standing',
      icon: AlertTriangle
    },
    {
      text: 'Strike-off from the company registry',
      icon: Shield
    }
  ];

  const renewalItems = [
    {
      item: 'Registered Agent',
      description: 'Mandatory legal representative',
      required: true,
      icon: BadgeCheck
    },
    {
      item: 'Registered Address',
      description: 'Mandatory registered address',
      required: true,
      icon: MapPin
    },
    {
      item: 'Government Renewal Fee',
      description: 'Statutory annual fee',
      required: true,
      icon: DollarSign
    },
    {
      item: 'Annual Return',
      description: 'Annual statutory filing',
      required: true,
      icon: FileText
    },
    {
      item: 'Annual Fees (if any)',
      description: 'Filing fees (if applicable) for shareholder',
      required: false,
      icon: CreditCard
    },
    {
      item: 'Virtual Office (if any)',
      description: 'Address service renewal',
      required: false,
      icon: Building2
    }
  ];

  const virtualOfficeStages = [
    {
      stage: 'Incorporation',
      purpose: 'Registering a legal company address',
      icon: Sparkles
    },
    {
      stage: 'Banking',
      purpose: 'Verifying business address for account opening',
      icon: CreditCard
    },
    {
      stage: 'Compliance',
      purpose: 'Receiving official notices and correspondence',
      icon: CheckSquare
    },
    {
      stage: 'Renewal',
      purpose: 'Maintaining an active legal presence',
      icon: RefreshCw
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: 'Renewal Monitoring',
      description: 'Renewal deadlines are tracked based on the applicable jurisdiction and regulatory requirements.',
      icon: Bell
    },
    {
      number: 2,
      title: 'Advance Notification',
      description: 'Upcoming renewal obligations are notified in advance to avoid late filings or penalties.',
      icon: Clock
    },
    {
      number: 3,
      title: 'Service Confirmation',
      description: 'Required services and renewal scope are confirmed before proceeding.',
      icon: CheckCircle2
    },
    {
      number: 4,
      title: 'Payment Processing',
      description: 'Renewal fees are settled in accordance with the confirmed services.',
      icon: CreditCard
    },
    {
      number: 5,
      title: 'Filing & Submission',
      description: 'Renewal filings and statutory submissions are completed with the relevant authorities.',
      icon: Upload
    },
    {
      number: 6,
      title: 'Status Update',
      description: 'Company status is updated and confirmed upon successful renewal.',
      icon: BadgeCheck
    }
  ];

  const nextServices = [
    {
      title: 'Tax and bookkeeping obligations',
      service: 'Accounting & Auditing',
      icon: FileText
    },
    {
      title: 'Company information changes',
      service: 'Corporate Structuring',
      icon: Building2
    },
    {
      title: 'Voluntary closure',
      service: 'Strike Off Services',
      icon: AlertTriangle
    }
  ];

  const benefits = [
    {
      title: 'Valid legal status',
      icon: BadgeCheck
    },
    {
      title: 'Good Standing with the registry',
      icon: Award
    },
    {
      title: 'Continued ability to operate bank accounts and sign contracts',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Enhanced Design */}
      <section className="relative py-[30px] lg:py-24 bg-gradient-to-br from-red-50 via-white to-orange-50 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-100/50 to-transparent rounded-full blur-3xl"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left: Image with decorative frame */}
            <div className="relative group order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-br from-[var(--color-primary)] to-orange-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
                <img 
                  src={heroImage} 
                  alt="Annual Renewal Services" 
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 bg-[var(--color-primary)]/10 px-4 py-2 rounded-full mb-6 border border-[var(--color-primary)]/20">
                <Shield className="w-4 h-4 text-[var(--color-primary)]" />
                <span className="text-[var(--color-primary)] font-semibold text-sm">Compliance & Renewal Services</span>
              </div>

              <h1 className="text-[#2C2C2C] font-bold text-2xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                Annual Renewal Services to Keep Your Company <span className="text-[var(--color-primary)]">Active</span>
              </h1>
              <p className="text-[#6C757D] text-base lg:text-xl mb-8 leading-relaxed">
                We manage all mandatory annual renewals to ensure your company remains legally valid, compliant and fully operational.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl inline-flex items-center justify-center gap-3 hover:gap-4 group"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Check My Renewal Obligation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="bg-white text-[var(--color-primary)] px-8 py-4 rounded-xl border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
                >
                  <Briefcase className="w-5 h-5" />
                  <span>Talk to Advisor</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Do Companies Get Penalized - Enhanced Design */}
      <section className="py-[30px] lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-red-50 to-orange-50 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-6 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4 border border-red-200">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span className="text-red-600 font-semibold text-sm">Important Warning</span>
            </div>
            <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-5xl mb-4">
              Why Do Companies Get <span className="text-red-600">Penalized</span> or <span className="text-red-600">Struck Off?</span>
            </h2>
            <p className="text-[#6C757D] text-base lg:text-lg max-w-3xl mx-auto">
              Avoid these common pitfalls that can jeopardize your company's legal status
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {penalties.map((penalty, index) => {
              const Icon = penalty.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-white rounded-xl p-6 shadow-lg border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="absolute top-4 right-4 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                      {index + 1}
                    </div>
                    <p className="text-[#2C2C2C] text-base lg:text-lg leading-relaxed font-medium pt-1">
                      {penalty.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Warning Box */}
          <div className="max-w-4xl mx-auto mt-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl p-8 shadow-2xl text-white">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-bold text-xl lg:text-2xl mb-2">Critical Reminder</h3>
                <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                  Any of these failures can result in significant penalties, loss of good standing, or complete removal from the company registry. Stay compliant to protect your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is a Renewal Service - Enhanced Design */}
      <section className="py-[30px] lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-6 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4 border border-blue-200">
              <RefreshCw className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 font-semibold text-sm">Understanding Renewal</span>
            </div>
            <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-5xl mb-4">
              What is a <span className="text-[var(--color-primary)]">Renewal Service?</span>
            </h2>
            <p className="text-[#6C757D] text-base lg:text-xl max-w-3xl mx-auto leading-relaxed">
              A Renewal Service supports the annual maintenance of a company to ensure it remains legally active and compliant.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Benefits Cards */}
            <div className="mb-8">
              <h3 className="text-[#2C2C2C] font-bold text-xl lg:text-3xl mb-6 text-center">
                This service helps maintain:
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div 
                      key={index}
                      className="group relative bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 lg:p-8 shadow-lg border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-[#2C2C2C] font-bold text-base lg:text-lg leading-relaxed">
                        {benefit.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Info Box with modern design */}
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-8 lg:p-10 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl"></div>
              <div className="relative flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Globe2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg lg:text-xl mb-2">Service Coverage</h4>
                  <p className="text-white/90 text-sm lg:text-base leading-relaxed">
                    Renewal services apply to <strong>offshore companies</strong>, <strong>international entities</strong>, and <strong>selected onshore jurisdictions</strong>, depending on local regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Needs to Be Renewed - Enhanced Design */}
      <section className="py-[30px] lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-blue-50/30 to-transparent pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-6 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4 border border-purple-200">
              <CheckSquare className="w-4 h-4 text-purple-600" />
              <span className="text-purple-600 font-semibold text-sm">Annual Requirements</span>
            </div>
            <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-5xl mb-4">
              What Needs to Be <span className="text-[var(--color-primary)]">Renewed Annually?</span>
            </h2>
            <p className="text-[#6C757D] text-base lg:text-xl max-w-3xl mx-auto leading-relaxed">
              To maintain a company's legal status, several statutory and service-related elements must be renewed on a yearly basis.
            </p>
          </div>

          {/* Beautiful Table Design */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-[var(--color-border)]">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-[var(--color-primary)] to-orange-500">
                      <th className="px-8 py-6 text-left text-sm font-bold text-white uppercase tracking-wider">
                        <div className="flex items-center gap-3">
                          <FileText className="w-5 h-5" />
                          <span>Renewal Item</span>
                        </div>
                      </th>
                      <th className="px-8 py-6 text-left text-sm font-bold text-white uppercase tracking-wider">
                        <div className="flex items-center gap-3">
                          <CheckSquare className="w-5 h-5" />
                          <span>Description</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {renewalItems.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <tr 
                          key={index} 
                          className="group hover:bg-gradient-to-r hover:from-blue-50 hover:to-transparent transition-all duration-300"
                        >
                          <td className="px-8 py-6">
                            <div className="flex items-center gap-4">
                              <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 ${
                                item.required 
                                  ? 'bg-gradient-to-br from-blue-500 to-indigo-500' 
                                  : 'bg-gradient-to-br from-gray-400 to-gray-500'
                              }`}>
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <p className="font-bold text-[#2C2C2C] text-base lg:text-lg">
                                  {item.item}
                                </p>
                                {item.required && (
                                  <span className="inline-block mt-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                                    Required
                                  </span>
                                )}
                                {!item.required && (
                                  <span className="inline-block mt-1 text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                                    Optional
                                  </span>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <p className="text-[#6C757D] text-base lg:text-lg leading-relaxed">
                              {item.description}
                            </p>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden divide-y-2 divide-gray-100">
                {renewalItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={index} 
                      className="p-6 hover:bg-blue-50 transition-all duration-300"
                    >
                      {/* Icon and Badge */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0 ${
                          item.required 
                            ? 'bg-gradient-to-br from-blue-500 to-indigo-500' 
                            : 'bg-gradient-to-br from-gray-400 to-gray-500'
                        }`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-[#2C2C2C] text-lg mb-1">
                            {item.item}
                          </h4>
                          {item.required ? (
                            <span className="inline-block text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded">
                              Required
                            </span>
                          ) : (
                            <span className="inline-block text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                              Optional
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[#6C757D] text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Info Note Below Table */}
            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <CheckSquare className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-[#2C2C2C] text-base lg:text-lg mb-2">
                    Important Note
                  </h4>
                  <p className="text-[#6C757D] text-sm lg:text-base leading-relaxed">
                    Required items are mandatory for maintaining legal status. Optional items depend on your specific business structure and needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renewal Timing - Enhanced Design */}
      <section className="py-[30px] lg:py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-[var(--color-border)]">
              {/* Header */}
              <div className="bg-gradient-to-r from-[var(--color-primary)] to-orange-500 p-8 text-white">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h2 className="font-bold text-2xl md:text-4xl">
                    Renewal Timing
                  </h2>
                </div>
                <p className="text-white/90 text-base lg:text-lg">
                  Renewal deadlines vary by jurisdiction and regulatory framework.
                </p>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-[#2C2C2C] font-bold text-xl lg:text-2xl mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-[var(--color-primary)]" />
                  In practice:
                </h3>
                
                <div className="space-y-4 mb-8">
                  {[
                    { flag: '🇻🇬', text: 'BVI, Seychelles, Belize require annual renewal' },
                    { flag: '🇭🇰', text: 'Hong Kong requires Annual Return and Business Registration renewal' },
                    { flag: '🇸🇬', text: 'Singapore requires Annual Return and Company Secretary renewal' }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-transparent rounded-xl border border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-md"
                    >
                      <span className="text-3xl">{item.flag}</span>
                      <p className="text-[#2C2C2C] font-medium text-base lg:text-lg pt-1">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Warning */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border-2 border-red-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="text-red-900 font-bold text-lg mb-2">⚠️ Important Warning</h4>
                      <p className="text-red-800 font-medium text-base leading-relaxed">
                        Failure to renew on time may lead to penalties, loss of Good Standing, or strike-off from the registry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Office - Enhanced Design */}
      <section className="py-[30px] lg:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-6 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full mb-4 border border-indigo-200">
              <MapPin className="w-4 h-4 text-indigo-600" />
              <span className="text-indigo-600 font-semibold text-sm">Virtual Office Services</span>
            </div>
            <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-5xl mb-4">
              Where Can Your Business Set Up a <span className="text-[var(--color-primary)]">Virtual Office?</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto mb-12">
            <p className="text-[#2C2C2C] font-bold text-xl lg:text-2xl mb-8 text-center">
              A Virtual Office is commonly used across key stages of a company's lifecycle:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {virtualOfficeStages.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="group relative bg-gradient-to-br from-white via-indigo-50 to-purple-50 rounded-2xl p-8 shadow-lg border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                  >
                    <div className="absolute top-4 right-4 text-6xl font-bold text-indigo-100 group-hover:text-indigo-200 transition-colors">
                      0{index + 1}
                    </div>
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h4 className="text-[var(--color-primary)] font-bold text-xl lg:text-2xl mb-3">
                        {item.stage}
                      </h4>
                      <p className="text-[#6C757D] text-base lg:text-lg leading-relaxed">
                        {item.purpose}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => navigate('/contact')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl inline-flex items-center gap-3 hover:gap-4 group"
            >
              <MapPin className="w-6 h-6" />
              <span>Get a Virtual Address</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* How It Works - Enhanced Design */}
      <section className="py-[30px] lg:py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-6 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4 border border-green-200">
              <Target className="w-4 h-4 text-green-600" />
              <span className="text-green-600 font-semibold text-sm">Simple Process</span>
            </div>
            <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-5xl mb-4">
              How It <span className="text-[var(--color-primary)]">Works</span>
            </h2>
            <p className="text-[#6C757D] text-base lg:text-xl max-w-3xl mx-auto">
              Six streamlined steps to keep your company compliant and active
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={index}
                    className="relative group"
                  >
                    {/* Connecting Line (desktop only) */}
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-transparent opacity-30 z-0"></div>
                    )}
                    
                    <div className="relative bg-white rounded-2xl p-6 lg:p-8 shadow-xl border-2 border-transparent hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-full">
                      {/* Step Number Badge */}
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform">
                        {step.number}
                      </div>

                      {/* Icon */}
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="w-8 h-8 text-[var(--color-primary)]" />
                      </div>

                      {/* Content */}
                      <h3 className="text-[#2C2C2C] font-bold text-lg lg:text-xl mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[#6C757D] text-sm lg:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <button 
                onClick={() => navigate('/setup-now')}
                className="bg-gradient-to-r from-[var(--color-primary)] to-orange-500 text-white px-12 py-5 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-xl inline-flex items-center gap-3 hover:gap-5 group shadow-xl"
              >
                <RefreshCw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
                <span>Start My Renewal Process</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What Comes Next - Enhanced Design */}
      <section className="py-[30px] lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-6 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-4 border border-orange-200">
              <TrendingUp className="w-4 h-4 text-orange-600" />
              <span className="text-orange-600 font-semibold text-sm">Additional Services</span>
            </div>
            <h2 className="text-[#2C2C2C] font-bold text-2xl md:text-5xl mb-4">
              What Comes <span className="text-[var(--color-primary)]">Next</span> After Renewal?
            </h2>
            <p className="text-[#6C757D] text-base lg:text-xl max-w-3xl mx-auto">
              Depending on your business needs, the following services may be relevant.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {nextServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-[var(--color-primary)] hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
                  onClick={() => navigate('/all-services')}
                >
                  {/* Decorative circle */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>

                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-orange-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h4 className="text-[#2C2C2C] font-bold text-lg lg:text-xl mb-3">
                      {service.title}
                    </h4>
                    <div className="flex items-center gap-2 text-[var(--color-primary)] font-bold text-base lg:text-lg group-hover:gap-3 transition-all">
                      <ArrowRight className="w-5 h-5" />
                      <span>{service.service}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA - Enhanced Design */}
      <section className="py-[30px] lg:py-32 bg-gradient-to-br from-[var(--color-primary)] via-red-600 to-orange-600 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-black/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative text-center">
          {/* Icon Badge */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-white font-bold text-2xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Don't Risk Your <span className="text-yellow-300">Company Status</span>
          </h2>
          <p className="text-white/90 text-base lg:text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
            Keep your business compliant and active with our professional renewal services. Let us handle the complexity while you focus on growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => navigate('/setup-now')}
              className="group bg-white text-[var(--color-primary)] px-12 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold text-xl shadow-2xl hover:shadow-white/20 inline-flex items-center gap-3 hover:gap-5"
            >
              <RefreshCw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
              <span>Renew Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>

            <button 
              onClick={() => navigate('/contact')}
              className="bg-transparent text-white px-10 py-5 rounded-xl border-2 border-white hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300 font-semibold text-lg inline-flex items-center gap-2"
            >
              <Briefcase className="w-5 h-5" />
              <span>Talk to an Expert</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-yellow-300">7,000+</div>
              <div className="text-white/80 text-sm lg:text-base">Companies Renewed</div>
            </div>
            <div className="text-center border-l border-r border-white/20">
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-yellow-300">100%</div>
              <div className="text-white/80 text-sm lg:text-base">Compliance Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2 text-yellow-300">24/7</div>
              <div className="text-white/80 text-sm lg:text-base">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}