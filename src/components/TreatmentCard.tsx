import { Clock, Check, ChevronRight, PoundSterling } from 'lucide-react';
import { Treatment } from '../types';

interface TreatmentCardProps {
  key?: string | number;
  treatment: Treatment;
  onSelectBooking: (treatmentId: string) => void;
}

export default function TreatmentCard({ treatment, onSelectBooking }: TreatmentCardProps) {
  return (
    <div
      id={`treatment-card-${treatment.id}`}
      className="bg-white rounded-2xl border border-emerald-950/5 hover:border-gold-300/60 flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 overflow-hidden group relative"
    >
      {/* Top Graphic Border & Subtle Royal Glow Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-gold-400 to-emerald-900 opacity-60 group-hover:opacity-100 transition-opacity" />

      {/* Modern High-End Feature Image Cover */}
      {treatment.imageUrl && (
        <div className="relative h-48 w-full overflow-hidden bg-emerald-50 border-b border-emerald-950/5">
          {/* Subtle gold overlay on hover */}
          <div className="absolute inset-0 bg-gold-900/10 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-all duration-500 z-10" />
          
          <img
            src={treatment.imageUrl}
            alt={treatment.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 select-none grayscale-[5%] group-hover:grayscale-0"
          />
          
          {/* Tag & Category Overlay */}
          <div className="absolute top-3 left-3 z-20">
            <span
              id={`treatment-badge-${treatment.id}`}
              className="text-[9px] uppercase tracking-widest text-emerald-950 font-bold bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-sm shadow-sm border border-gold-300/20"
            >
              {treatment.category === 'injectables'
                ? 'Aesthetic Injectable'
                : treatment.category === 'skin'
                ? 'Clinical Skin'
                : 'Cellular Wellness'}
            </span>
          </div>
        </div>
      )}

      {/* Main Card Text Grid */}
      <div id={`treatment-card-content-${treatment.id}`} className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
        <div>
          {/* Price Tag with Premium Amber Highlight */}
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-950/40">Chelsea Sanctuary</span>
            <div id={`treatment-price-container-${treatment.id}`} className="flex items-center text-gold-700 font-serif-display text-base font-semibold bg-gold-50/50 border border-gold-200/30 px-3 py-1 rounded-md gap-0.5 whitespace-nowrap group-hover:bg-gold-100 transition-colors">
              <PoundSterling className="w-3.5 h-3.5 text-gold-600" />
              <span>{treatment.price.replace('From £', '')}</span>
            </div>
          </div>

          {/* Majestic Name and Details */}
          <h3 id={`treatment-title-${treatment.id}`} className="font-serif text-xl sm:text-2xl text-emerald-950 font-normal leading-snug tracking-wide mb-3 group-hover:text-gold-600 transition-all duration-300">
            {treatment.name}
          </h3>
          
          <p id={`treatment-description-${treatment.id}`} className="text-emerald-900/70 text-xs sm:text-sm font-light leading-relaxed mb-6">
            {treatment.description}
          </p>

          {/* Key Medical Benefits checklist */}
          <div id={`treatment-benefits-frame-${treatment.id}`} className="border-t border-emerald-950/5 pt-5 mb-6">
            <h4 id={`benefits-title-${treatment.id}`} className="text-[9px] uppercase tracking-[0.15em] text-emerald-950/50 font-bold mb-3">
              Clinical Indications &amp; Goals
            </h4>
            <ul id={`benefits-list-${treatment.id}`} className="space-y-2">
              {treatment.benefits.slice(0, 3).map((benefit, idx) => (
                <li key={idx} id={`benefit-item-${treatment.id}-${idx}`} className="flex items-start gap-2.5 text-xs text-emerald-950/80 font-light z-10 leading-normal">
                  <Check className="w-3.5 h-3.5 text-gold-600 mt-0.5 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Card Footer: Duration & CTA */}
        <div id={`treatment-card-footer-${treatment.id}`} className="border-t border-emerald-950/5 pt-4 flex items-center justify-between gap-4 mt-auto">
          <div id={`duration-container-${treatment.id}`} className="flex items-center gap-1.5 text-xs text-emerald-950/60 font-medium">
            <Clock className="w-3.5 h-3.5 text-emerald-600" />
            <span>{treatment.duration}</span>
          </div>
          
          <button
            id={`select-treatment-btn-${treatment.id}`}
            onClick={() => onSelectBooking(treatment.id)}
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-[0.15em] text-emerald-950 hover:text-gold-600 transition-colors group/btn cursor-pointer py-1"
          >
            <span>Reserve Slot</span>
            <ChevronRight className="w-3.5 h-3.5 text-gold-500 group-hover/btn:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
