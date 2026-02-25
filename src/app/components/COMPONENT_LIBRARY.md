# 📚 Component Library - Hướng dẫn sử dụng

## 🎯 Mục đích
Thư viện components tái sử dụng cho OffShore CompanyCorp website, giúp:
- ✅ Tái sử dụng code dễ dàng
- ✅ Đồng nhất design system
- ✅ Tăng tốc development
- ✅ Dễ bảo trì và update

---

## 📁 Cấu trúc thư mục

```
/src/app/components/
├── common/              # Components dùng chung
│   ├── SectionContainer.tsx
│   ├── SectionHeading.tsx
│   ├── PrimaryButton.tsx
│   ├── GradientCard.tsx
│   ├── Badge.tsx
│   ├── IconBox.tsx
│   ├── LoadingSpinner.tsx
│   ├── EmptyState.tsx
│   └── index.ts
├── ui/                  # UI primitives (shadcn/ui)
├── index.ts             # Export barrel - import tập trung
└── COMPONENT_LIBRARY.md # File này
```

---

## 🚀 Cách sử dụng

### ✅ CÁCH 1: Import từ barrel file (KHUYẾN NGHỊ)

```tsx
// Import nhiều components cùng lúc
import { 
  SectionContainer, 
  SectionHeading, 
  PrimaryButton,
  GradientCard,
  Badge
} from '@/app/components';

function MyPage() {
  return (
    <SectionContainer background="gray">
      <SectionHeading 
        title="My Page Title"
        subtitle="SECTION NAME"
        description="This is my page description"
      />
      
      <GradientCard>
        <PrimaryButton onClick={() => alert('Clicked!')}>
          Get Started
        </PrimaryButton>
      </GradientCard>
    </SectionContainer>
  );
}
```

### ✅ CÁCH 2: Import trực tiếp từ file

```tsx
import { SectionContainer } from '@/app/components/common/SectionContainer';
import { PrimaryButton } from '@/app/components/common/PrimaryButton';
```

---

## 📦 Components Library

### 1️⃣ SectionContainer
**Mô tả:** Wrapper cho các sections, tự động thêm padding và container width

**Props:**
- `background`: 'white' | 'gray' | 'gradient' | 'dark'
- `noPadding`: boolean
- `id`: string (cho anchor links)
- `className`: string

**Ví dụ:**
```tsx
<SectionContainer background="gradient" id="about-us">
  <h2>About Us</h2>
  <p>Content here...</p>
</SectionContainer>
```

---

### 2️⃣ SectionHeading
**Mô tả:** Tiêu đề chuẩn cho các sections

**Props:**
- `title`: string (bắt buộc)
- `subtitle`: string (text màu đỏ ở trên)
- `description`: string (mô tả bên dưới)
- `align`: 'left' | 'center'
- `badge`: ReactNode

**Ví dụ:**
```tsx
<SectionHeading 
  subtitle="OUR SERVICES"
  title="What We Offer"
  description="Comprehensive solutions for your business needs"
  align="center"
/>
```

---

### 3️⃣ PrimaryButton
**Mô tả:** Button chính với animation và hover effects

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline'
- `size`: 'sm' | 'md' | 'lg'
- `icon`: boolean (hiện/ẩn arrow icon)
- `fullWidth`: boolean
- `onClick`: () => void
- `href`: string (nếu dùng như link)

**Ví dụ:**
```tsx
<PrimaryButton 
  variant="primary" 
  size="lg"
  onClick={() => console.log('clicked')}
>
  Get Started
</PrimaryButton>

<PrimaryButton 
  variant="outline" 
  href="/contact"
  icon={false}
>
  Learn More
</PrimaryButton>
```

---

### 4️⃣ GradientCard
**Mô tả:** Card với gradient background

**Props:**
- `variant`: 'light' | 'dark' | 'red'
- `hover`: boolean (bật/tắt hover effect)
- `padding`: 'sm' | 'md' | 'lg'
- `className`: string

**Ví dụ:**
```tsx
<GradientCard variant="light" padding="lg" hover>
  <h3>Card Title</h3>
  <p>Card content here...</p>
</GradientCard>
```

---

### 5️⃣ Badge
**Mô tả:** Badge/tag nhỏ để highlight text

**Props:**
- `variant`: 'primary' | 'secondary' | 'success' | 'warning' | 'info'
- `size`: 'sm' | 'md' | 'lg'

**Ví dụ:**
```tsx
<Badge variant="primary" size="md">New</Badge>
<Badge variant="success">Active</Badge>
```

---

### 6️⃣ IconBox
**Mô tả:** Box chứa icon với background

**Props:**
- `icon`: ReactNode (Lucide icon)
- `variant`: 'primary' | 'secondary' | 'white'
- `size`: 'sm' | 'md' | 'lg'

**Ví dụ:**
```tsx
import { Building2 } from 'lucide-react';

<IconBox 
  icon={<Building2 />} 
  variant="primary" 
  size="lg" 
/>
```

---

### 7️⃣ LoadingSpinner
**Mô tả:** Spinner loading animation

**Props:**
- `size`: 'sm' | 'md' | 'lg'
- `color`: 'primary' | 'white' | 'dark'

**Ví dụ:**
```tsx
<LoadingSpinner size="md" color="primary" />
```

---

### 8️⃣ EmptyState
**Mô tả:** Hiển thị khi không có data

**Props:**
- `icon`: ReactNode
- `title`: string
- `description`: string
- `actionLabel`: string
- `onAction`: () => void

**Ví dụ:**
```tsx
import { Inbox } from 'lucide-react';

<EmptyState
  icon={<Inbox size={48} />}
  title="No items found"
  description="Try adjusting your filters"
  actionLabel="Reset Filters"
  onAction={() => resetFilters()}
/>
```

---

## 🎨 Design System Tokens

### Colors:
- Primary: `#C91F26` (red)
- Secondary: `#332A2A` (dark brown)
- Text: `#2C2C2C` (dark gray)
- Muted: `#6C757D` (gray)

### Typography:
- Font Family: Inter
- Headings: Bold
- Body: Regular/Medium

### Spacing:
- Section padding: `py-12 lg:py-20`
- Container max-width: `1400px`
- Horizontal padding: `px-6 lg:px-8`

---

## 💡 Best Practices

### ✅ DO:
```tsx
// Import từ barrel file
import { SectionContainer, SectionHeading } from '@/app/components';

// Sử dụng components có sẵn
<SectionContainer>
  <SectionHeading title="My Title" />
</SectionContainer>
```

### ❌ DON'T:
```tsx
// Tự tạo lại components đã có
<div className="py-12 lg:py-20">  // ❌ Dùng SectionContainer thay thế
  <div className="max-w-[1400px] mx-auto">
    <h2>My Title</h2>  // ❌ Dùng SectionHeading thay thế
  </div>
</div>
```

---

## 🔧 Mở rộng Library

### Thêm component mới:

1. Tạo file trong `/common` hoặc folder phù hợp
2. Export trong `/common/index.ts`
3. Export trong `/components/index.ts`
4. Update file này (COMPONENT_LIBRARY.md)

**Ví dụ:**
```tsx
// 1. Tạo file mới: /common/MyNewComponent.tsx
export function MyNewComponent() { ... }

// 2. Export trong /common/index.ts
export { MyNewComponent } from './MyNewComponent';

// 3. Sử dụng
import { MyNewComponent } from '@/app/components';
```

---

## 📝 Notes

- Tất cả components đã responsive
- Tuân theo design system màu #C91F26 và #332A2A
- Sử dụng Tailwind CSS v4
- Import alias `@` đã được config
