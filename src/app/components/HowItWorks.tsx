import { Search, FileEdit, CreditCard, Rocket } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Preparation',
      icon: Search,
      description: [
        'Request a company name check and eligibility review.'
      ]
    },
    {
      number: 2,
      title: 'Company Details',
      icon: FileEdit,
      description: [
        'Submit company, director, and shareholder information.'
      ]
    },
    {
      number: 3,
      title: 'Payment',
      icon: CreditCard,
      description: [
        'Complete payment using your preferred method.'
      ]
    },
    {
      number: 4,
      title: 'Company Kit Delivery',
      icon: Rocket,
      description: [
        'Receive official incorporation documents and optional banking support.'
      ]
    }
  ];

  return (
    <section className="py-[30px] lg:py-24 bg-gradient-to-br from-muted via-background to-muted/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-muted-foreground/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Title */}
        <div className="text-center mb-6 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-foreground leading-tight max-w-4xl mx-auto">
            How It <span className="text-primary">Works</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="bg-card backdrop-blur-md border border-border rounded-xl p-8 hover:bg-muted transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 group relative"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-primary-foreground" size={28} />
                </div>

                {/* Title with Number */}
                <h3 className="text-foreground text-xl font-bold mb-4">
                  {step.number}. {step.title}
                </h3>

                {/* Description */}
                <ul className="space-y-3">
                  {step.description.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Step indicator line (except for last item) */}
                {step.number < 4 && (
                  <div className="hidden lg:block absolute top-1/3 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}