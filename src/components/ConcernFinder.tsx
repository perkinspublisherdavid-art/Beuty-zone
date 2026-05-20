import { useState } from 'react';
import { ChevronRight, Sparkles, Activity, Layers, HeartPulse, RefreshCw } from 'lucide-react';
import { SKIN_CONCERNS, TREATMENTS } from '../data';

interface ConcernFinderProps {
  onSelectBooking: (treatmentId: string) => void;
  skincareImage: string;
}

export default function ConcernFinder({ onSelectBooking, skincareImage }: ConcernFinderProps) {
  const [selectedConcernId, setSelectedConcernId] = useState(SKIN_CONCERNS[0].id);

  const selectedConcern = SKIN_CONCERNS.find((s) => s.id === selectedConcernId) || SKIN_CONCERNS[0];

  const matchedTreatments = TREATMENTS.filter((t) =>
    selectedConcern.suitableTreatments.includes(t.id)
  );

  const concernIcons: Record<string, any> = {
    aging: Activity,
    'acne-text': Layers,
    'dull-dry': Sparkles,
    'redness-spots': HeartPulse,
    'body-jaw': RefreshCw,
  };

  return (
    <section id="concerns" className="py-20 bg-white border-y border-emerald-950/5">
      <div id="concerns-container" className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div id="concerns-title-align" className="max-w-2xl text-left mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-600 mb-3 block">
            BESPOKE INTERACTIVE DIAGNOSIS
          </span>
          <h2 id="concerns-title" className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-emerald-950 font-normal mb-6">
            Assess Your Skin Concerns
          </h2>
          <p id="concerns-subtitle" className="text-emerald-900/70 text-sm font-light leading-relaxed">
            Select an area of focus. Our clinical matcher reveals the specific aesthetic procedures and physiological actions recommended by our team.
          </p>
        </div>

        {/* Diagnostic Dashboard */}
        <div id="concerns-dashboard-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Concern Selection (Span 5) */}
          <div id="dashboard-col-left" className="lg:col-span-5 flex flex-col gap-4">
            <h4 className="text-xs uppercase font-bold tracking-wider text-emerald-950/60 mb-2">
              Select Area of Focus
            </h4>
            
            <div id="concerns-selectors-stack" className="space-y-3">
              {SKIN_CONCERNS.map((concern) => {
                const IconComp = concernIcons[concern.id] || Sparkles;
                const isSelected = concern.id === selectedConcernId;
                
                return (
                  <button
                    key={concern.id}
                    id={`concern-btn-${concern.id}`}
                    onClick={() => setSelectedConcernId(concern.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 group cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-950 border-emerald-950 text-white shadow-md'
                        : 'bg-luxury-cream hover:bg-emerald-50 border-emerald-950/5 text-emerald-950'
                    }`}
                  >
                    <div id={`concern-badge-${concern.id}`} className={`p-2.5 rounded-lg transition-colors shrink-0 ${
                      isSelected ? 'bg-gold-500 text-white' : 'bg-white text-emerald-700 border border-emerald-950/5'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div id={`concern-btn-labels-${concern.id}`} className="flex-1 min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider leading-none">
                        {concern.name.split(' & ')[0]}
                      </p>
                      <p className={`text-[11px] font-light mt-1 truncate ${
                        isSelected ? 'text-gold-200' : 'text-emerald-950/60'
                      }`}>
                        {concern.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Product image side benefit decoration */}
            <div id="skincare-showcase-frame" className="hidden lg:block relative rounded-xl overflow-hidden border border-emerald-950/5 flex-1 min-h-[180px] mt-4">
              <img
                src={skincareImage}
                alt="Luxury medical skincare scientific bottle formulation"
                referrerPolicy="no-referrer"
                id="skincare-luxury-scientific-img"
                className="w-full h-full object-cover select-none absolute inset-0"
              />
              <div id="skincare-img-scrim" className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/40 to-transparent"></div>
              <div id="skincare-img-txt" className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[9px] uppercase tracking-wider text-gold-400 font-bold">Scientific Botanical Extracts</span>
                <p className="font-serif-display text-sm mt-0.5 font-light">Customized medical topical additions are appended to all procedures.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Treatment Prescription Cards (Span 7) */}
          <div id="dashboard-col-right" className="lg:col-span-7 bg-luxury-cream rounded-2xl p-6 md:p-8 border border-emerald-950/5 flex flex-col justify-between">
            
            <div id="prescription-details-container">
              {/* Heading section */}
              <div id="prescription-title-row" className="flex items-center justify-between border-b border-emerald-950/10 pb-5 mb-6">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-gold-600">Prescribed Clinical Route</span>
                  <h3 id="prescription-headline" className="font-serif-display text-2xl text-emerald-950 font-normal mt-1 leading-tight">
                    {selectedConcern.name}
                  </h3>
                </div>
                <div id="clinician-certified" className="bg-emerald-100 hover:bg-emerald-200 px-3 py-1 rounded-full text-[10px] text-emerald-900 font-semibold uppercase tracking-wide">
                  Medically Approved
                </div>
              </div>

              {/* Description */}
              <p id="prescription-full-desc" className="text-emerald-950/85 text-xs md:text-sm font-light leading-relaxed mb-8 bg-white/70 p-4 rounded-xl border border-emerald-950/5">
                {selectedConcern.description}
              </p>

              {/* Prescribed matching treatments list */}
              <div id="clinician-prescribed-stack" className="space-y-4">
                <h4 className="text-[11px] uppercase tracking-wider text-gold-700 font-bold mb-3">
                  Highly Indindicated Clinic Treatments:
                </h4>
                
                {matchedTreatments.map((treatment) => (
                  <div
                    key={treatment.id}
                    id={`matched-item-${treatment.id}`}
                    className="bg-white p-5 rounded-xl border border-emerald-950/5 hover:border-gold-300/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all"
                  >
                    <div>
                      <h5 id={`matched-title-${treatment.id}`} className="font-serif-display text-base text-emerald-950 font-semibold leading-none mb-1.5">
                        {treatment.name}
                      </h5>
                      <p id={`matched-duration-${treatment.id}`} className="text-[11px] text-emerald-950/50">
                        Average session: {treatment.duration} • Investment: {treatment.price}
                      </p>
                    </div>

                    <button
                      id={`matched-cta-${treatment.id}`}
                      onClick={() => onSelectBooking(treatment.id)}
                      className="bg-emerald-50 hover:bg-emerald-950 text-emerald-950 hover:text-gold-100 px-4 py-2 rounded text-[11px] uppercase tracking-wider font-bold transition-all border border-emerald-950/10 hover:border-emerald-950 flex items-center justify-center gap-1 shrink-0 cursor-pointer"
                    >
                      <span>Choose Route</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical disclaimer footer */}
            <div id="diagnostic-footer-ribbon" className="border-t border-emerald-950/10 pt-6 mt-8 text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <span className="text-emerald-950/60 font-light leading-relaxed">
                Want a personalized skin analysis? Book a complimentary virtual diagnostics callback.
              </span>
              <button
                id="diagnostic-complementary-btn"
                onClick={() => onSelectBooking('any')}
                className="text-gold-600 hover:text-gold-700 font-bold uppercase tracking-wider underline whitespace-nowrap cursor-pointer"
              >
                Complimentary Consultation
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
