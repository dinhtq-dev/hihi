# 🚀 Quick Start - Component Library

## Import nhanh (Copy & Paste)

### 1. Basic Page Template
```tsx
import { SectionContainer, SectionHeading, PrimaryButton } from '@/app/components';

export function MyPage() {
  return (
    <SectionContainer background="white">
      <SectionHeading 
        title="Page Title"
        subtitle="SECTION NAME"
        description="Your description"
      />
      
      <PrimaryButton>Get Started</PrimaryButton>
    </SectionContainer>
  );
}
```

### 2. Service Cards Layout
```tsx
import { 
  SectionContainer, 
  SectionHeading, 
  GradientCard, 
  IconBox,
  Badge
} from '@/app/components';
import { Building2 } from 'lucide-react';

export function ServicesPage() {
  return (
    <SectionContainer background="gray">
      <SectionHeading title="Our Services" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GradientCard variant="light">
          <IconBox icon={<Building2 />} variant="primary" />
          <h3 className="font-bold text-xl mt-4">Service Name</h3>
          <Badge variant="primary">New</Badge>
          <p className="text-[#6C757D] mt-2">Description...</p>
        </GradientCard>
      </div>
    </SectionContainer>
  );
}
```

### 3. CTA Section
```tsx
import { SectionContainer, SectionHeading, PrimaryButton } from '@/app/components';

export function CTASection() {
  return (
    <SectionContainer background="gradient">
      <SectionHeading 
        title="Ready to Get Started?"
        description="Join us today"
        align="center"
      />
      
      <div className="flex justify-center gap-4">
        <PrimaryButton variant="primary" size="lg">
          Get Started
        </PrimaryButton>
        <PrimaryButton variant="outline" size="lg">
          Learn More
        </PrimaryButton>
      </div>
    </SectionContainer>
  );
}
```

### 4. Loading State
```tsx
import { LoadingSpinner } from '@/app/components';

<LoadingSpinner size="md" color="primary" />
```

### 5. Empty State
```tsx
import { EmptyState } from '@/app/components';
import { Inbox } from 'lucide-react';

<EmptyState
  icon={<Inbox size={48} />}
  title="No results"
  description="Try different filters"
  actionLabel="Reset"
  onAction={() => reset()}
/>
```

## Common Patterns

### Hero Section
```tsx
<SectionContainer background="gradient" noPadding>
  <div className="py-20">
    <SectionHeading 
      title="Main Title"
      subtitle="TAGLINE"
      align="center"
    />
    <PrimaryButton variant="primary" size="lg">CTA</PrimaryButton>
  </div>
</SectionContainer>
```

### Feature Grid
```tsx
<SectionContainer>
  <SectionHeading title="Features" />
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {features.map(f => (
      <GradientCard key={f.id}>
        <IconBox icon={f.icon} />
        <h3>{f.title}</h3>
        <p>{f.desc}</p>
      </GradientCard>
    ))}
  </div>
</SectionContainer>
```

## Props Cheat Sheet

| Component | Key Props | Example |
|-----------|-----------|---------|
| SectionContainer | `background`, `noPadding` | `<SectionContainer background="gray">` |
| SectionHeading | `title`, `subtitle`, `align` | `<SectionHeading title="Hello" align="center">` |
| PrimaryButton | `variant`, `size`, `icon` | `<PrimaryButton variant="primary" size="lg">` |
| GradientCard | `variant`, `padding`, `hover` | `<GradientCard variant="light" padding="md">` |
| Badge | `variant`, `size` | `<Badge variant="success" size="sm">` |
| IconBox | `icon`, `variant`, `size` | `<IconBox icon={<Icon />} variant="primary">` |
| LoadingSpinner | `size`, `color` | `<LoadingSpinner size="md" color="primary">` |
