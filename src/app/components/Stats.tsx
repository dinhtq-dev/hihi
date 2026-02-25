export function Stats() {
  return (
    <section id="about" className="py-[30px] lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] font-bold text-foreground">
              Get to know us
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a leading international business services provider with a proven track record of helping companies expand globally. Our team of experts delivers comprehensive solutions tailored to your unique business needs.
            </p>
            <p className="text-lg text-muted-foreground">
              With operations spanning multiple continents, we bring local expertise and global insights to every client engagement. Our commitment to excellence and innovation sets us apart in the industry.
            </p>
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold mt-4">
              Learn More About Us
            </button>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="bg-gradient-to-br from-muted to-card p-8 rounded-xl border border-border hover:shadow-lg transition-all">
              <div className="text-5xl font-bold text-primary mb-2">12+</div>
              <div className="text-foreground font-semibold">Countries Served</div>
              <div className="mt-4 text-sm text-muted-foreground">
                Expanding across multiple continents
              </div>
            </div>

            <div className="bg-gradient-to-br from-muted to-card p-8 rounded-xl border border-border hover:shadow-lg transition-all">
              <div className="text-5xl font-bold text-primary mb-2">3K+</div>
              <div className="text-foreground font-semibold">Happy Clients</div>
              <div className="mt-4 text-sm text-muted-foreground">
                Trusted by businesses worldwide
              </div>
            </div>

            <div className="bg-gradient-to-br from-muted to-card p-8 rounded-xl border border-border hover:shadow-lg transition-all">
              <div className="text-5xl font-bold text-primary mb-2">18+</div>
              <div className="text-foreground font-semibold">Service Offerings</div>
              <div className="mt-4 text-sm text-muted-foreground">
                Comprehensive business solutions
              </div>
            </div>

            <div className="bg-gradient-to-br from-muted to-card p-8 rounded-xl border border-border hover:shadow-lg transition-all">
              <div className="text-5xl font-bold text-primary mb-2">95%</div>
              <div className="text-foreground font-semibold">Success Rate</div>
              <div className="mt-4 text-sm text-muted-foreground">
                Delivering exceptional results
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}