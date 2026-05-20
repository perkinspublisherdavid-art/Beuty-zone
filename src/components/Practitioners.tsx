import { Award, ShieldCheck, Heart } from 'lucide-react';
import { PRACTITIONERS } from '../data';

export default function Practitioners() {
  return (
    <section id="practitioners" className="py-20 bg-luxury-cream border-b border-emerald-950/5">
      <div id="practitioners-container" className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div id="practitioners-heading-align" className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-600 mb-3 block">
            MEDICAL TRUST &amp; EXPERTISE
          </span>
          <h2 id="practitioners-title" className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-emerald-950 font-normal mb-6">
            Meet Our Specialist Clinicians
          </h2>
          <p id="practitioners-subtitle" className="text-emerald-900/70 text-sm font-light leading-relaxed">
            All aesthetic medical injectables and advanced skin procedures are personally prescribed and administered by specialized, fully-insured UK practitioners registered with the General Medical Council (GMC) and Nursing &amp; Midwifery Council (NMC).
          </p>
        </div>

        {/* Team Grid */}
        <div id="practitioners-team-grid" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch max-w-4xl mx-auto">
          {PRACTITIONERS.map((practitioner, idx) => (
            <div
              key={idx}
              id={`practitioner-card-${idx}`}
              className="bg-white rounded-2xl border border-emerald-950/5 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-gold-300/30 flex flex-col justify-between"
            >
              {/* Photo Frame */}
              <div id={`practitioner-photo-frame-${idx}`} className="relative aspect-[4/5] bg-emerald-50">
                <img
                  src={practitioner.imageUrl}
                  alt={practitioner.name}
                  referrerPolicy="no-referrer"
                  id={`practitioner-img-${idx}`}
                  className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Floating Role Badge */}
                <div id={`practitioner-badge-overlay-${idx}`} className="absolute bottom-4 left-4 right-4 bg-emerald-950/95 backdrop-blur-sm px-4 py-3 rounded border border-gold-300/10 text-white flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-gold-400 font-bold leading-none">
                    {practitioner.role}
                  </span>
                  <span className="text-xs font-serif-display font-light mt-1 text-gold-100 italic truncate">
                    {practitioner.credentials}
                  </span>
                </div>
              </div>

              {/* Bio & Details */}
              <div id={`practitioner-details-${idx}`} className="p-6 md:p-8 flex flex-col justify-between flex-1">
                <div id={`practitioner-bio-stack-${idx}`}>
                  <h3 id={`practitioner-name-${idx}`} className="font-serif-display text-xl md:text-2xl text-emerald-950 font-semibold mb-3">
                    {practitioner.name}
                  </h3>
                  <p id={`practitioner-bio-${idx}`} className="text-emerald-950/80 text-xs md:text-sm font-light leading-relaxed mb-6">
                    {practitioner.bio}
                  </p>
                </div>

                {/* Specialties tag stack */}
                <div id={`practitioner-specialties-container-${idx}`} className="border-t border-emerald-950/5 pt-5">
                  <h4 id={`specialties-heading-${idx}`} className="text-[10px] uppercase tracking-wider text-gold-700 font-bold mb-3 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    Areas of Clinical Excellence
                  </h4>
                  <div id={`specialty-tags-${idx}`} className="flex flex-wrap gap-1.5">
                    {practitioner.specialties.map((spec, specIdx) => (
                      <span
                        key={specIdx}
                        id={`specialty-tag-${idx}-${specIdx}`}
                        className="bg-emerald-50 text-emerald-950 text-[10px] font-semibold tracking-wide px-2.5 py-1 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Integrity Badges */}
        <div id="practitioners-safety-ribbon" className="mt-16 bg-emerald-950 rounded-2xl p-6 md:p-10 border border-gold-300/10 text-gold-200 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div id="safety-cell-insurance" className="flex items-start gap-4">
            <div id="safety-cell-insurance-icon" className="p-2 bg-emerald-900 text-gold-400 rounded-lg shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Full Cosmetic Malpractice Insurance</h4>
              <p className="text-[11px] text-gold-300/70 font-light mt-1 leading-normal">Our team is backed by premium professional indemnity coverage across London.</p>
            </div>
          </div>
          
          <div id="safety-cell-products" className="flex items-start gap-4">
            <div id="safety-cell-products-icon" className="p-2 bg-emerald-900 text-gold-400 rounded-lg shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-bold">CE &amp; FDA Certified Implants</h4>
              <p className="text-[11px] text-gold-300/70 font-light mt-1 leading-normal">We exclusively source original, luxury Allergan, Juvederm, and Teoxane lines.</p>
            </div>
          </div>

          <div id="safety-cell-ethics" className="flex items-start gap-4">
            <div id="safety-cell-ethics-icon" className="p-2 bg-emerald-900 text-gold-400 rounded-lg shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Proportional Aesthetics Policy</h4>
              <p className="text-[11px] text-gold-300/70 font-light mt-1 leading-normal">We champion skin design over volume bloating. We maintain the right to refuse over-done services.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
