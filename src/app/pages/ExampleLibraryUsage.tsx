// ===================================
// VÍ DỤ SỬ DỤNG COMPONENT LIBRARY
// ===================================

import { 
  SectionContainer, 
  SectionHeading, 
  PrimaryButton,
  GradientCard,
  Badge,
  IconBox,
  LoadingSpinner,
  EmptyState
} from '@/app/components';

import { Building2, Globe, Shield, TrendingUp, Inbox } from 'lucide-react';

export function ExampleLibraryUsage() {
  return (
    <div>
      {/* ============ EXAMPLE 1: Simple Section ============ */}
      <SectionContainer background="white">
        <SectionHeading 
          subtitle="GETTING STARTED"
          title="Welcome to Our Platform"
          description="Discover how easy it is to set up your offshore company"
          align="center"
        />
        
        <div className="flex justify-center gap-4">
          <PrimaryButton variant="primary" size="lg">
            Get Started Now
          </PrimaryButton>
          <PrimaryButton variant="outline" size="lg" icon={false}>
            Learn More
          </PrimaryButton>
        </div>
      </SectionContainer>

      {/* ============ EXAMPLE 2: Cards with Icons ============ */}
      <SectionContainer background="gray">
        <SectionHeading 
          title="Our Services"
          subtitle="WHAT WE OFFER"
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Building2 />, title: 'Company Formation', badge: 'Popular' },
            { icon: <Globe />, title: 'International Services', badge: 'New' },
            { icon: <Shield />, title: 'Asset Protection', badge: '' },
            { icon: <TrendingUp />, title: 'Business Growth', badge: 'Hot' }
          ].map((service, idx) => (
            <GradientCard key={idx} variant="light" padding="md">
              <div className="flex flex-col items-center text-center gap-4">
                <IconBox icon={service.icon} variant="primary" size="lg" />
                <div>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h3 className="font-bold text-lg text-[#2C2C2C]">
                      {service.title}
                    </h3>
                    {service.badge && (
                      <Badge variant="primary" size="sm">{service.badge}</Badge>
                    )}
                  </div>
                  <p className="text-[#6C757D] text-sm">
                    Professional service description goes here
                  </p>
                </div>
                <PrimaryButton variant="outline" size="sm">
                  Learn More
                </PrimaryButton>
              </div>
            </GradientCard>
          ))}
        </div>
      </SectionContainer>

      {/* ============ EXAMPLE 3: Gradient Variations ============ */}
      <SectionContainer background="white">
        <SectionHeading 
          title="Card Variants"
          description="Different gradient styles for different purposes"
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GradientCard variant="light" padding="lg">
            <h3 className="font-bold text-xl mb-2">Light Variant</h3>
            <p className="text-[#6C757D]">Perfect for content cards</p>
          </GradientCard>
          
          <GradientCard variant="dark" padding="lg">
            <h3 className="font-bold text-xl mb-2 text-white">Dark Variant</h3>
            <p className="text-gray-300">Great for contrasting sections</p>
          </GradientCard>
          
          <GradientCard variant="red" padding="lg">
            <h3 className="font-bold text-xl mb-2 text-white">Red Variant</h3>
            <p className="text-white/90">Emphasize important CTAs</p>
          </GradientCard>
        </div>
      </SectionContainer>

      {/* ============ EXAMPLE 4: Loading State ============ */}
      <SectionContainer background="gray">
        <SectionHeading 
          title="Loading States"
          align="center"
        />
        
        <div className="flex justify-center gap-8 items-center">
          <div className="text-center">
            <LoadingSpinner size="sm" color="primary" />
            <p className="mt-2 text-sm text-[#6C757D]">Small</p>
          </div>
          <div className="text-center">
            <LoadingSpinner size="md" color="primary" />
            <p className="mt-2 text-sm text-[#6C757D]">Medium</p>
          </div>
          <div className="text-center">
            <LoadingSpinner size="lg" color="primary" />
            <p className="mt-2 text-sm text-[#6C757D]">Large</p>
          </div>
        </div>
      </SectionContainer>

      {/* ============ EXAMPLE 5: Empty State ============ */}
      <SectionContainer background="white">
        <GradientCard variant="light" padding="lg">
          <EmptyState
            icon={<Inbox size={64} />}
            title="No items found"
            description="We couldn't find any items matching your criteria. Try adjusting your filters or search terms."
            actionLabel="Reset Filters"
            onAction={() => alert('Filters reset!')}
          />
        </GradientCard>
      </SectionContainer>

      {/* ============ EXAMPLE 6: Badges ============ */}
      <SectionContainer background="gray">
        <SectionHeading 
          title="Status Badges"
          align="center"
        />
        
        <div className="flex flex-wrap justify-center gap-3">
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <Badge variant="primary" size="sm">Small</Badge>
          <Badge variant="primary" size="md">Medium</Badge>
          <Badge variant="primary" size="lg">Large</Badge>
        </div>
      </SectionContainer>

      {/* ============ EXAMPLE 7: Full Page Layout ============ */}
      <SectionContainer background="gradient" noPadding>
        <div className="py-20">
          <SectionHeading 
            subtitle="READY TO START?"
            title="Let's Build Your Business Together"
            description="Join thousands of satisfied clients who trust us with their offshore company setup"
            align="center"
            badge={<Badge variant="success">Trusted by 10,000+ Companies</Badge>}
          />
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <PrimaryButton variant="primary" size="lg">
              Start Your Journey
            </PrimaryButton>
            <PrimaryButton variant="secondary" size="lg">
              Book a Consultation
            </PrimaryButton>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
