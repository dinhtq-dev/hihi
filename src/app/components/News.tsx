import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from 'lucide-react';

type NewsCardProps = {
  image: string;
  date: string;
  title: string;
  author: string;
  category: string;
};

function NewsCard({ image, date, title, author, category }: NewsCardProps) {
  return (
    <div className="relative rounded-3xl group cursor-pointer transition-transform hover:-translate-y-2 w-full">
      <div aria-hidden="true" className="absolute border border-border border-solid inset-0 pointer-events-none rounded-3xl" />
      
      {/* Image wrapper */}
      <div className="relative w-full aspect-[415/356] rounded-3xl overflow-hidden">
        <ImageWithFallback 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
      </div>

      {/* Date label */}
      <div className="absolute bg-white h-9 left-8 -bottom-4 rounded-tl-2xl rounded-tr-2xl px-6 flex items-center justify-center shadow-md z-10">
        <p className="text-[#332A2A] text-xs font-normal uppercase">{date}</p>
      </div>

      {/* Content */}
      <div className="bg-white rounded-b-3xl pt-8 pb-6 px-6">
        {/* Title */}
        <h3 className="font-semibold leading-7 text-foreground text-lg lg:text-xl mb-4 line-clamp-2 min-h-[3.5rem]">
          {title}
        </h3>

        {/* Author and Category */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-muted-foreground text-xs uppercase">{author}</span>
          <div className="border border-border rounded-full px-4 py-1">
            <span className="text-primary text-xs uppercase font-normal whitespace-nowrap">{category}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function News({ showLatest = true, headingVariant = 'offshore' }: { showLatest?: boolean; headingVariant?: 'offshore' | 'hongkong' }) {
  const newsArticles = [
    {
      image: "https://images.unsplash.com/photo-1579532536935-619928decd08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ld3NwYXBlciUyMGFydGljbGV8ZW58MXx8fHwxNzY4Mzg4MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "January 10, 2026",
      title: "Top 5 Jurisdictions for Company Formation in 2026",
      author: "OCC Team",
      category: "Jurisdiction Guide"
    },
    {
      image: "https://images.unsplash.com/photo-1704423846283-f92ff6badea3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjgzMDg3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "January 8, 2026",
      title: "Understanding Annual Compliance Requirements",
      author: "OCC Team",
      category: "Compliance"
    },
    {
      image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBkb2N1bWVudHMlMjBjaGFydHxlbnwxfHx8fDE3NjgzODgzODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "January 5, 2026",
      title: "How to Expand Your Business Internationally",
      author: "OCC Team",
      category: "Global Growth"
    }
  ];

  return (
    <section className="py-[30px] lg:py-24 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-muted-foreground/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Heading */}
        <div className="text-center mb-6 lg:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-foreground leading-tight">
            {headingVariant === 'hongkong' ? (
              <>{showLatest && "Latest "}<span className="text-primary">Hong Kong</span> Publications</>
            ) : (
              <>Latest Offshore <span className="text-primary">Business Insights</span></>
            )}
          </h2>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 lg:mb-12">
          {newsArticles.map((article, index) => (
            <NewsCard key={index} {...article} />
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="bg-primary text-primary-foreground px-8 lg:px-12 py-3 lg:py-4 rounded-xl hover:bg-primary/90 transition-all duration-300 font-medium text-base lg:text-lg inline-flex items-center gap-3 lg:gap-4 hover:gap-5 group shadow-lg relative overflow-hidden border border-primary/50">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></span>
            <span className="relative">View All</span>
            <ArrowRight className="relative group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}