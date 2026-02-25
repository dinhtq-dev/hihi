import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building2, Globe, Users, FileText, Shield, TrendingUp } from 'lucide-react';

export function SetupNowPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Building2,
      title: 'Fast Company Formation',
      description: 'Get your company registered in as little as 24 hours in select jurisdictions.'
    },
    {
      icon: Globe,
      title: 'Global Jurisdictions',
      description: 'Choose from 100+ jurisdictions worldwide to find the perfect fit for your business.'
    },
    {
      icon: Users,
      title: 'Nominee Services',
      description: 'Professional nominee director and shareholder services for enhanced privacy.'
    },
    {
      icon: FileText,
      title: 'Full Documentation',
      description: 'Complete preparation of all required documents and certificates.'
    },
    {
      icon: Shield,
      title: 'Compliance Support',
      description: 'Ongoing compliance assistance to keep your company in good standing.'
    },
    {
      icon: TrendingUp,
      title: 'Business Services',
      description: 'Additional services including banking, accounting, and tax advisory.'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Choose Your Jurisdiction',
      description: 'Select from our extensive list of jurisdictions based on your business needs.'
    },
    {
      number: '2',
      title: 'Select Your Services',
      description: 'Pick the services you need - company formation, nominee services, banking support, etc.'
    },
    {
      number: '3',
      title: 'Complete Your Application',
      description: 'Fill out our simple online form with your company details and requirements.'
    },
    {
      number: '4',
      title: 'We Handle Everything',
      description: 'Our team processes your application and keeps you updated every step of the way.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#C91F26] via-[#a51920] to-[#8B2A2F] text-white py-20 lg:py-32 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-black/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Set Up Your Company Today
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
              Fast, reliable, and professional company formation services with full compliance support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/jurisdictions')}
                className="bg-white text-[#C91F26] px-10 py-5 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center gap-3 hover:gap-4 group shadow-2xl"
              >
                <span>Browse Jurisdictions</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-[#C91F26] transition-all duration-300 font-semibold text-lg shadow-2xl"
              >
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4">
              Why Choose OffShore CompanyCorp?
            </h2>
            <p className="text-xl text-[#6C757D] max-w-3xl mx-auto">
              We provide comprehensive company formation and business services worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl border border-[#DEE2E6] hover:border-[#C91F26] transition-all duration-300 hover:shadow-xl group"
                >
                  <div className="bg-[#C91F26] w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-[#2C2C2C] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#6C757D] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4">
              How It Works
            </h2>
            <p className="text-xl text-[#6C757D]">
              Get your company up and running in 4 simple steps.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white p-8 rounded-2xl border border-[#DEE2E6] hover:border-[#C91F26] transition-all duration-300 hover:shadow-xl">
                    <div className="bg-[#C91F26] w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-[#2C2C2C] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[#6C757D] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 lg:p-16 border-2 border-[#C91F26] text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-[#6C757D] mb-10 max-w-2xl mx-auto">
              Join thousands of businesses that trust us with their company formation needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={() => navigate('/jurisdictions')}
                className="bg-[#C91F26] text-white px-10 py-5 rounded-xl hover:bg-[#a51920] transition-all duration-300 font-semibold text-lg inline-flex items-center justify-center gap-3 hover:gap-4 group shadow-xl hover:shadow-2xl"
              >
                <span>Choose Your Jurisdiction</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/all-services')}
                className="bg-white text-[#C91F26] px-10 py-5 rounded-xl border-2 border-[#C91F26] hover:bg-[#C91F26] hover:text-white transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl"
              >
                View All Services
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#6C757D]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Fast Processing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Full Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
