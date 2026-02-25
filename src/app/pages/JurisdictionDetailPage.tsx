import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ChevronDown, FileText, Download } from 'lucide-react';
import { JurisdictionDetails } from '@/app/components/JurisdictionDetails';
import { WhyChooseUs } from '@/app/components/WhyChooseUs';
import { JurisdictionCTA } from '@/app/components/JurisdictionCTA';
import { JurisdictionHeroBanner } from '@/app/components/JurisdictionHeroBanner';
import { JurisdictionKeyHighlights } from '@/app/components/JurisdictionKeyHighlights';
import { JurisdictionHowItWorks } from '@/app/components/JurisdictionHowItWorks';
import { News } from '@/app/components/News';
import { VideoSection } from '@/app/components/VideoSection';
import { RecommendedServices } from '@/app/components/RecommendedServices';

// Default highlights
const defaultHighlights = [
  {
    icon: 'Building2',
    title: 'International financial centre',
    description: 'Leading business and financial hub in Asia.'
  },
  {
    icon: 'DollarSign',
    title: 'Territorial tax system',
    description: 'Only Hong Kong–sourced profits are taxable.'
  },
  {
    icon: 'Scale',
    title: 'Common law legal framework',
    description: 'Based on English common law principles.'
  },
  {
    icon: 'Users',
    title: '100% foreign ownership',
    description: 'There are no local shareholder or director requirements.'
  }
];

// Map jurisdiction slugs to hero images
const jurisdictionImages: Record<string, string> = {
  'hong-kong': 'https://images.unsplash.com/photo-1708836699494-256de0a5896a?w=1200',
  'singapore': 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200',
  'malaysia': 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200',
  'uae': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200',
  'vietnam': 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200',
  'cyprus': 'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=1200',
  'gibraltar': 'https://images.unsplash.com/photo-1599833975787-5ceb1e91d5f0?w=1200',
  'liechtenstein': 'https://images.unsplash.com/photo-1571609585559-08f60c2af2f8?w=1200',
  'luxembourg': 'https://images.unsplash.com/photo-1549566784-1e774e0e703f?w=1200',
  'malta': 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=1200',
  'netherlands': 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200',
  'switzerland': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
  'uk': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200',
  'anguilla': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200',
  'bahamas': 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200',
  'belize': 'https://images.unsplash.com/photo-1545016479-cc2c9e6f3f3b?w=1200',
  'bvi': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200',
  'cayman': 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=1200',
  'panama': 'https://images.unsplash.com/photo-1580642436197-b570d9912f40?w=1200',
  'st-kitts': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200',
  'st-lucia': 'https://images.unsplash.com/photo-1603608289455-e1c1e99a9dc3?w=1200',
  'svg': 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200',
  'marshall': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200',
  'samoa': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200',
  'seychelles': 'https://images.unsplash.com/photo-1589126168652-bf5c45dc51f8?w=1200',
  'vanuatu': 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200',
  'mauritius': 'https://images.unsplash.com/photo-1550747545-c896b5f89613?w=1200'
};

// Map jurisdiction slugs to pricing
const jurisdictionPricing: Record<string, string> = {
  'hong-kong': '1,039',
  'singapore': '1,199',
  'malaysia': '899',
  'uae': '2,499',
  'vietnam': '1,299',
  'cyprus': '1,599',
  'gibraltar': '1,899',
  'liechtenstein': '2,999',
  'luxembourg': '2,499',
  'malta': '1,799',
  'netherlands': '1,899',
  'switzerland': '2,799',
  'uk': '899',
  'anguilla': '1,299',
  'bahamas': '1,499',
  'belize': '999',
  'bvi': '1,399',
  'cayman': '1,899',
  'panama': '1,199',
  'st-kitts': '1,399',
  'st-lucia': '1,299',
  'svg': '1,199',
  'marshall': '1,099',
  'samoa': '999',
  'seychelles': '1,099',
  'vanuatu': '1,099',
  'mauritius': '1,399'
};

// Map jurisdiction slugs to descriptions
const jurisdictionDescriptions: Record<string, string> = {
  'hong-kong': 'A preferred jurisdiction for international founders seeking a reliable legal system and global market access.',
  'singapore': 'Asia\'s premier business hub offering political stability, world-class infrastructure, and favorable tax policies.',
  'malaysia': 'Strategic Southeast Asian location with competitive setup costs and flexible business regulations.',
  'uae': 'Gateway to Middle East markets with zero tax benefits and state-of-the-art business infrastructure.',
  'vietnam': 'Fast-growing Southeast Asian economy with access to ASEAN markets and manufacturing capabilities.',
  'cyprus': 'EU member state offering robust legal framework and extensive double tax treaty network.',
  'gibraltar': 'British Overseas Territory with EU market access and attractive tax regime for international businesses.',
  'liechtenstein': 'Stable European jurisdiction known for financial services and wealth management excellence.',
  'luxembourg': 'Premier European financial center with sophisticated regulatory environment and investment opportunities.',
  'malta': 'Strategic Mediterranean location combining EU benefits with competitive tax incentives.',
  'netherlands': 'Leading European business hub with extensive tax treaty network and innovation-friendly policies.',
  'switzerland': 'World-renowned for political stability, banking excellence, and business-friendly environment.',
  'uk': 'Global financial center offering prestige, robust legal system, and access to international markets.',
  'anguilla': 'Tax-neutral Caribbean jurisdiction offering privacy and simplified compliance requirements.',
  'bahamas': 'Premier offshore financial center with zero taxation and strong banking infrastructure.',
  'belize': 'Cost-effective Central American jurisdiction with flexible corporate laws and confidentiality.',
  'bvi': 'World\'s leading offshore jurisdiction renowned for flexibility and ease of administration.',
  'cayman': 'Premier global financial center offering zero taxation and sophisticated financial services.',
  'panama': 'Strategic Americas location with territorial tax system and robust asset protection laws.',
  'st-kitts': 'Tax-free Caribbean jurisdiction offering privacy and streamlined incorporation process.',
  'st-lucia': 'Emerging Caribbean offshore center with attractive tax benefits and confidentiality.',
  'svg': 'Flexible Caribbean jurisdiction offering cost-effective solutions and privacy protection.',
  'marshall': 'Pacific jurisdiction offering tax neutrality and maritime corporate services excellence.',
  'samoa': 'Modern offshore jurisdiction with international standards and asset protection features.',
  'seychelles': 'Efficient Indian Ocean jurisdiction combining tax benefits with privacy and flexibility.',
  'vanuatu': 'Pacific jurisdiction offering tax neutrality, privacy, and streamlined administration.',
  'mauritius': 'African gateway jurisdiction with favorable tax treaties and access to emerging markets.'
};

interface JurisdictionData {
  country: string;
  region: string;
  flag: string;
  heroImage: string;
  companyOfficersPublic: string;
  paidUpCapital: string;
  standardShareCapital: string;
  accountingReq: string;
  taxation: string;
  legalSystem: string;
  timeToForm: string;
  minShareholders: string;
  bearerShares: string;
}

// Generate FAQ based on jurisdiction features
function generateFAQs(data: JurisdictionData) {
  const faqs = [];
  
  if (data.taxation === '0%') {
    faqs.push({
      question: `Is there corporate tax in ${data.country}?`,
      answer: `No, ${data.country} operates as a tax-free jurisdiction with 0% corporate tax for offshore companies. This makes it an attractive destination for international business structures.`
    });
  }
  
  if (data.bearerShares === 'Yes') {
    faqs.push({
      question: 'Are bearer shares permitted?',
      answer: `Yes, bearer shares are permitted in ${data.country}, though they must be held by an approved custodian to comply with international transparency standards.`
    });
  }
  
  if (data.companyOfficersPublic === 'No') {
    faqs.push({
      question: 'Are company officers made public?',
      answer: `No, ${data.country} offers privacy protection with company officer information not made publicly available. This provides an additional layer of confidentiality for beneficial owners.`
    });
  }
  
  faqs.push({
    question: 'What is the minimum share capital requirement?',
    answer: `The standard share capital is ${data.standardShareCapital}. ${data.paidUpCapital === 'No requirement' ? 'There is no minimum paid-up capital requirement, providing flexibility in capitalization.' : `The minimum paid-up capital is ${data.paidUpCapital}.`}`
  });
  
  faqs.push({
    question: 'How long does incorporation take?',
    answer: `Company incorporation in ${data.country} typically takes ${data.timeToForm}. This timeframe can vary depending on the completeness of documentation and name availability.`
  });
  
  return faqs;
}

// Generate key benefits based on jurisdiction features
function generateKeyBenefits(data: JurisdictionData): string[] {
  const benefits: string[] = [];
  
  if (data.taxation === '0%') {
    benefits.push('Zero corporate tax');
    benefits.push('Tax-free offshore jurisdiction');
  } else {
    benefits.push(`Competitive tax rate of ${data.taxation}`);
  }
  
  if (data.companyOfficersPublic === 'No') {
    benefits.push('Privacy and confidentiality protection');
    benefits.push('Non-public company records');
  }
  
  if (data.legalSystem === 'Common') {
    benefits.push('Common law legal system');
  } else if (data.legalSystem === 'Civil') {
    benefits.push('Civil law legal system');
  } else {
    benefits.push('Mixed legal system');
  }
  
  if (data.bearerShares === 'Yes') {
    benefits.push('Bearer shares permitted');
  }
  
  if (data.accountingReq === 'No') {
    benefits.push('Minimal accounting requirements');
  }
  
  if (data.paidUpCapital === 'No requirement') {
    benefits.push('No minimum capital requirements');
  }
  
  return benefits;
}

// Generate advantages
function generateAdvantages(data: JurisdictionData): string[] {
  const advantages: string[] = [];
  
  advantages.push(`Strategic location in ${data.region}`);
  
  if (data.taxation === '0%') {
    advantages.push('Complete tax exemption for offshore operations');
    advantages.push('No capital gains tax');
    advantages.push('No withholding tax');
  } else {
    advantages.push(`Favorable tax regime at ${data.taxation}`);
  }
  
  if (data.companyOfficersPublic === 'No') {
    advantages.push('Strong privacy and asset protection');
    advantages.push('Confidential beneficial ownership');
  }
  
  advantages.push('Political and economic stability');
  advantages.push('Reputable international jurisdiction');
  advantages.push('Efficient incorporation process');
  advantages.push('English commonly used for business');
  advantages.push('Access to international banking');
  
  return advantages;
}

export function JurisdictionDetailPage() {
  const { jurisdiction } = useParams<{ jurisdiction: string }>();
  const navigate = useNavigate();
  const [jurisdictionData, setJurisdictionData] = useState<JurisdictionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For now, we'll use the jurisdiction slug to fetch from our data
    const fetchJurisdictionData = async () => {
      try {
        // Simulate API call - in production this would come from your backend/API
        // For now we'll need to import the jurisdictions data
        const response = await import('./JurisdictionsPage');
        // This is a hack - in production you'd have a proper API
        const script = document.createElement('script');
        script.textContent = `window.__JURISDICTION_SLUG__ = "${jurisdiction}"`;
        document.head.appendChild(script);
        
        // For now, just set basic data
        setJurisdictionData({
          country: jurisdiction?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || '',
          region: 'INTERNATIONAL',
          flag: '🌍',
          heroImage: jurisdictionImages[jurisdiction || ''] || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
          companyOfficersPublic: 'Yes',
          paidUpCapital: 'No requirement',
          standardShareCapital: 'USD 10,000',
          accountingReq: 'Yes',
          taxation: '0%',
          legalSystem: 'Common',
          timeToForm: '5-7 days',
          minShareholders: '1/1',
          bearerShares: 'No'
        });
        setLoading(false);
      } catch (error) {
        console.error('Error loading jurisdiction:', error);
        setLoading(false);
      }
    };

    fetchJurisdictionData();
  }, [jurisdiction]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#C91F26]"></div>
          <p className="mt-4 text-gray-600">Loading jurisdiction details...</p>
        </div>
      </div>
    );
  }

  if (!jurisdictionData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Jurisdiction Not Found</h1>
          <Link to="/jurisdictions" className="text-[#C91F26] hover:underline text-lg">
            ← Back to Jurisdictions
          </Link>
        </div>
      </div>
    );
  }

  const faqs = generateFAQs(jurisdictionData);
  const keyBenefits = generateKeyBenefits(jurisdictionData);
  const advantages = generateAdvantages(jurisdictionData);
  
  // Get jurisdiction-specific content
  const pricing = jurisdictionPricing[jurisdiction || ''] || '1,299';
  const description = jurisdictionDescriptions[jurisdiction || ''] || 'A premier offshore jurisdiction offering favorable solutions for international business structures.';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <JurisdictionHeroBanner
        country={jurisdictionData.country}
        description={description}
        pricing={pricing}
        backgroundImage={jurisdictionData.heroImage}
        benefits={keyBenefits.slice(0, 4)}
      />

      {/* Key Highlights Section */}
      <JurisdictionKeyHighlights 
        country={jurisdictionData.country}
        highlights={defaultHighlights}
      />

      {/* How It Works Section */}
      <JurisdictionHowItWorks 
        country={jurisdictionData.country}
      />

      {/* Recommended Services Section */}
      <RecommendedServices country={jurisdictionData.country} />

      {/* Jurisdiction Details Section */}
      <JurisdictionDetails 
        country={jurisdictionData.country}
        jurisdiction={jurisdiction || ''}
      />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* CTA Section */}
      <JurisdictionCTA
        country={jurisdictionData.country}
        jurisdiction={jurisdiction || ''}
      />

      {/* FAQs Section */}
      <section className="py-[30px] lg:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-6 lg:mb-12">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#2C2C2C]">
              Frequently Asked <span className="text-[#C91F26]">Questions</span>
            </h2>
          </div>

          {/* Single Column Layout */}
          <div className="space-y-4">
            {[
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
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* News Section */}
      <News showLatest={false} headingVariant="hongkong" />
    </div>
  );
}

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-[#2C2C2C] pr-4 group-hover:text-[#C91F26] transition-colors">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-[#C91F26] transition-transform duration-300 flex-shrink-0 ${
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
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}