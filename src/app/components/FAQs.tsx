import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// FAQItem Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-foreground pr-4 group-hover:text-primary transition-colors">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 pb-5 pt-2">
          <p className="text-muted-foreground leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQs() {
  const [showAll, setShowAll] = useState(false);
  
  const faqs = [
    {
      question: "How to set up an offshore company?",
      answer: "Setting up an offshore company involves selecting the right jurisdiction, preparing required documentation, registering with local authorities, and ensuring compliance with regulations. Our experts guide you through each step to ensure a smooth incorporation process."
    },
    {
      question: "What is the difference between a holding company and an investment company?",
      answer: "A holding company primarily owns shares in other companies and manages those investments, while an investment company actively invests in securities, real estate, or other assets for profit. The structure you choose depends on your business objectives and tax planning strategy."
    },
    {
      question: "What is a corporate service provider?",
      answer: "A corporate service provider (CSP) offers professional services to help businesses with company formation, regulatory compliance, accounting, tax planning, and ongoing corporate administration. CSPs ensure your company meets all legal requirements in your chosen jurisdiction."
    },
    {
      question: "What are the 4 key steps in developing a business plan?",
      answer: "The four key steps are: 1) Define your business goals and objectives, 2) Conduct market research and competitive analysis, 3) Develop financial projections and budgets, 4) Create an operational plan with clear milestones. A solid business plan is essential for offshore company success."
    },
    {
      question: "Why do you need to hire a corporate service provider for your business?",
      answer: "A corporate service provider ensures compliance with local regulations, handles complex paperwork, provides local expertise, maintains corporate records, and helps navigate tax obligations. This allows you to focus on growing your business while experts handle the administrative complexities."
    },
    {
      question: "When do you need to engage a corporate service provider?",
      answer: "You should engage a corporate service provider during the initial company formation process and maintain the relationship for ongoing compliance. It's especially important when expanding internationally, dealing with complex tax structures, or ensuring regulatory compliance in multiple jurisdictions."
    },
    {
      question: "How does a corporate services provider help you?",
      answer: "Corporate service providers assist with company registration, nominee services, registered office provision, compliance management, accounting and bookkeeping, tax filing, annual renewals, and strategic business consulting. They act as your local partner in foreign jurisdictions."
    },
    {
      question: "Why is business consulting important?",
      answer: "Business consulting provides expert insights into market opportunities, operational efficiency, risk management, and growth strategies. For offshore companies, consulting is crucial for understanding complex regulations, optimizing tax structures, and making informed decisions about jurisdiction selection."
    }
  ];

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 6);
  const hasMore = faqs.length > 6;

  return (
    <section className="py-[30px] lg:py-20 bg-gradient-to-br from-muted to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#f9fafb', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#e2e8f0', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#gradient)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
        </div>

        {/* Single Column Layout */}
        <div className="space-y-4">
          {displayedFaqs.map((faq, index) => {
            // Hide items beyond 6 on mobile unless showAll is true
            const isHiddenOnMobile = !showAll && index >= 6;
            
            return (
              <div 
                key={index} 
                className={`relative ${isHiddenOnMobile ? 'hidden lg:block' : ''}`}
              >
                {/* White gradient overlay on last FAQ when not showing all - Mobile only */}
                {!showAll && hasMore && index === 5 && (
                  <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-white rounded-xl pointer-events-none lg:hidden z-10"></div>
                )}
                <FAQItem question={faq.question} answer={faq.answer} />
              </div>
            );
          })}
        </div>

        {/* View More Text Link - Mobile Only */}
        {hasMore && !showAll && (
          <div className="flex justify-center mt-6 lg:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="text-primary hover:text-primary/80 transition-colors font-semibold inline-flex items-center gap-2 group"
            >
              <span>View More</span>
              <ChevronDown size={20} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}