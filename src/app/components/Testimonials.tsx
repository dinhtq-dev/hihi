import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'Mark T.',
    location: 'Singapore',
    content: 'OCC handled our offshore incorporation flawlessly. We opened a BVI company and corporate bank account within weeks.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBlcnNvbnxlbnwxfHx8fDE3NjgxMjA0MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Laura D.',
    location: 'UK',
    content: 'Professional, responsive and extremely knowledgeable about asset protection.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4MTM2MDk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Daniel R.',
    location: 'Australia',
    content: 'The team guided us through every step of our company setup and compliance process. Everything was delivered on time and with absolute clarity.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1568585105565-e372998a195d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRyZXByZW5ldXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjgyMTY4OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    name: 'Sofia M.',
    location: 'Germany',
    content: 'From consultation to banking support, the experience was seamless. Their client portal makes managing our entities extremely easy.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1553484771-4e29a68540f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBleGVjdXRpdmV8ZW58MXx8fHwxNzY4MjE2ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Testimonials() {
  return (
    <section className="py-[30px] lg:py-20 bg-gradient-to-br from-[#1a1a1a] via-[#2d2424] to-[#1a1a1a] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C91F26]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 lg:mb-12">
        <div className="text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-white">
            Trusted by <span className="text-primary">Global Entrepreneurs</span>
          </h2>
        </div>
      </div>

      {/* First Row - Scrolling Left (hidden on mobile) */}
      <div className="relative mb-6 lg:mb-10 hidden lg:block">
        <div className="flex gap-10 animate-scroll-left">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={`row1-${index}`}
              className="bg-white flex flex-col gap-5 pt-8 pr-8 pb-8 pl-8 rounded-[20px] w-[500px] h-[280px] shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] hover:shadow-xl transition-all duration-300 shrink-0"
            >
              <div className="flex gap-5 items-center">
                <div className="overflow-hidden rounded-full shrink-0 w-[70px] h-[70px]">
                  <ImageWithFallback 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-[#0f1e4c] mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-[#6c757d]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              
              <p className="text-[#444] leading-7 flex-1">
                {testimonial.content}
              </p>
              
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-[#FFB300] fill-[#FFB300]" size={16} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Scrolling Right (hidden on mobile) */}
      <div className="relative hidden lg:block">
        <div className="flex gap-10 animate-scroll-right">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div 
              key={`row2-${index}`}
              className="bg-white flex flex-col gap-5 pt-8 pr-8 pb-8 pl-8 rounded-[20px] w-[500px] h-[280px] shadow-[0_4px_20px_0_rgba(0,0,0,0.08)] hover:shadow-xl transition-all duration-300 shrink-0"
            >
              <div className="flex gap-5 items-center">
                <div className="overflow-hidden rounded-full shrink-0 w-[70px] h-[70px]">
                  <ImageWithFallback 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-[#0f1e4c] mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-[#6c757d]">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              
              <p className="text-[#444] leading-7 flex-1">
                {testimonial.content}
              </p>
              
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-[#FFB300] fill-[#FFB300]" size={16} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Static Grid */}
      <div className="lg:hidden grid grid-cols-1 gap-4 px-4">
        {testimonials.map((testimonial, index) => (
          <div 
            key={`mobile-${index}`}
            className="bg-white flex flex-col gap-4 p-6 rounded-2xl shadow-lg"
          >
            <div className="flex gap-4 items-center">
              <div className="overflow-hidden rounded-full shrink-0 w-12 h-12">
                <ImageWithFallback 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#0f1e4c]">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-[#6c757d]">
                  {testimonial.location}
                </p>
              </div>
            </div>
            
            <p className="text-[#444] text-sm leading-relaxed">
              {testimonial.content}
            </p>
            
            <div className="flex gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="text-[#FFB300] fill-[#FFB300]" size={14} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}