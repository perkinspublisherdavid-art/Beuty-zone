import { Calendar, Shield, BadgeCheck, MapPin } from 'lucide-react';

interface HeroProps {
  onExplore: (sectionId: string) => void;
  clinicImage: string;
}

export default function Hero({ onExplore, clinicImage }: HeroProps) {
  return (
    <section id="hero-section" className="relative bg-luxury-cream overflow-hidden py-16 lg:py-24 border-b border-emerald-950/5">
      {/* Absolute Decorative Background Elements */}
      <div id="hero-background-circle-1" className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold-100/30 blur-3xl -z-10 translate-x-1/2 -translate-y-1/4"></div>
      <div id="hero-background-circle-2" className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-100/20 blur-3xl -z-10 -translate-x-1/3"></div>

      <div id="hero-container" className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copywriting & Value Propositions */}
        <div id="hero-left" className="lg:col-span-6 flex flex-col items-start text-left">
          {/* Tagline Badge */}
          <div id="hero-badge" className="inline-flex items-center gap-2 bg-emerald-100/50 border border-emerald-950/5 text-emerald-900 px-3.5 py-1.5 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-6">
            <MapPin className="w-3.5 h-3.5 text-gold-600" />
            Premier Medical Aesthetic Clinic • Chelsea, London
          </div>

          {/* Majestic Hero Header */}
          <h1 id="hero-title" className="font-serif-display text-4xl sm:text-5xl lg:text-6xl text-emerald-950 font-normal leading-[1.1] tracking-tight mb-6">
            Clinical Excellence.<br />
            <span className="italic font-light text-gold-600">Bespoke Wellness.</span>
          </h1>

          {/* Under-title description */}
          <p id="hero-description" className="text-emerald-950/80 text-base md:text-lg leading-relaxed max-w-xl mb-8 font-light">
            Beauty Zone unites state-of-the-art non-surgical facial aesthetics, medical-grade skin therapies, and physician-supervised intravenous wellness inside our state-of-the-art Chelsea sanctuary. Experience transformative outcomes designed to preserve your natural character.
          </p>

          {/* Action Call to Actions */}
          <div id="hero-actions" className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
            <button
              id="hero-book-btn"
              onClick={() => onExplore('booking')}
              className="bg-emerald-950 hover:bg-emerald-900 border border-emerald-950 text-gold-100 px-8 py-4 rounded text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-3 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-gold-400" />
              Book Clinical Assessment
            </button>
            <button
              id="hero-treatments-btn"
              onClick={() => onExplore('treatments')}
              className="bg-transparent hover:bg-emerald-50 text-emerald-950 border border-emerald-950/20 hover:border-emerald-950/50 px-8 py-4 rounded text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              Explore Services
            </button>
          </div>

          {/* Trust Value Ribbons */}
          <div id="hero-trust-ribbon" className="grid grid-cols-2 gap-6 w-full pt-6 border-t border-emerald-950/10">
            <div id="trust-point-gmc" className="flex items-start gap-3">
              <div id="trust-icon-gmc" className="p-1.5 bg-gold-100 text-gold-700 rounded-sm">
                <BadgeCheck className="w-5 h-5" />
              </div>
              <div id="trust-text-gmc">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-950">GMC-Registered</h4>
                <p className="text-[11px] text-emerald-950/60 leading-tight">Medically prescribed formulations</p>
              </div>
            </div>
            <div id="trust-point-nmc" className="flex items-start gap-3">
              <div id="trust-icon-nmc" className="p-1.5 bg-gold-100 text-gold-700 rounded-sm">
                <Shield className="w-5 h-5" />
              </div>
              <div id="trust-text-nmc">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-950">Safe Prescribing</h4>
                <p className="text-[11px] text-emerald-950/60 leading-tight">Advanced clinical care standards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: High-End Hero Graphic (Generated Clinic Interior) */}
        <div id="hero-right" className="lg:col-span-6 relative">
          <div id="hero-image-frame" className="relative rounded overflow-hidden shadow-2xl border border-gold-300/10 group aspect-[4/3] lg:aspect-[16:9] h-[320px] sm:h-[400px] lg:h-auto">
            {/* Elegant luxury overlay shading */}
            <div id="hero-image-overlay" className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent mix-blend-multiply opacity-40"></div>
            <img
              src={clinicImage}
              alt="Beauty Zone London Sanctuary Room"
              referrerPolicy="no-referrer"
              id="hero-clinic-img"
              className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Subtle Float Ribbon */}
          <div id="hero-float-ribbon" className="absolute -bottom-6 -left-4 bg-white p-5 rounded-sm shadow-xl border border-emerald-950/5 flex items-center gap-4 max-w-xs">
            <div id="float-ribbon-bullet" className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gold-600 font-bold leading-none">Status: Operating</p>
              <p className="text-xs font-serif-display text-emerald-950 mt-1">Accepting NHS &amp; Specialist Referrals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
