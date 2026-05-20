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
      className="bg-white rounded-lg border border-emerald-950/5 hover:border-gold-300/40 p-6 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group"
    >
      <div id={`treatment-card-content-${treatment.id}`}>
        {/* Category Badge & Pricing */}
        <div id={`treatment-header-${treatment.id}`} className="flex justify-between items-start gap-4 mb-4">
          <span
            id={`treatment-badge-${treatment.id}`}
            className="text-[10px] uppercase tracking-widest text-gold-600 font-bold bg-gold-50 px-2.5 py-1 rounded"
          >
            {treatment.category === 'injectables'
              ? 'Facial Aesthetic Injectables'
              : treatment.category === 'skin'
              ? 'Medical-Grade Skincare'
              : 'Cellular Wellness & Body'}
          </span>
          <div id={`treatment-price-container-${treatment.id}`} className="flex items-center text-emerald-950 font-serif-display text-lg font-semibold bg-emerald-50 px-3 py-1 rounded-sm gap-0.5 whitespace-nowrap">
            <PoundSterling className="w-4 h-4 text-gold-600" />
            <span>{treatment.price.replace('From £', '')}</span>
          </div>
        </div>

        {/* Name and Explanation */}
        <h3 id={`treatment-title-${treatment.id}`} className="font-serif-display text-xl md:text-2xl text-emerald-950 font-medium tracking-tight mb-3 group-hover:text-gold-600 transition-colors">
          {treatment.name}
        </h3>
        <p id={`treatment-description-${treatment.id}`} className="text-emerald-900/75 text-xs md:text-sm font-light leading-relaxed mb-6">
          {treatment.description}
        </p>

        {/* Key Medical Benefits checklist */}
        <div id={`treatment-benefits-frame-${treatment.id}`} className="border-t border-emerald-950/5 pt-5 mb-6">
          <h4 id={`benefits-title-${treatment.id}`} className="text-[11px] uppercase tracking-wider text-emerald-950/60 font-bold mb-3">
            Anatomical Benefits &amp; Outcomes
          </h4>
          <ul id={`benefits-list-${treatment.id}`} className="space-y-2.5">
            {treatment.benefits.map((benefit, idx) => (
              <li key={idx} id={`benefit-item-${treatment.id}-${idx}`} className="flex items-start gap-2 text-xs text-emerald-950/80 font-light">
                <Check className="w-3.5 h-3.5 text-gold-500 mt-0.5 shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer: Duration & CTA */}
      <div id={`treatment-card-footer-${treatment.id}`} className="border-t border-emerald-950/5 pt-5 flex items-center justify-between gap-4 mt-auto">
        <div id={`duration-container-${treatment.id}`} className="flex items-center gap-1.5 text-xs text-emerald-950/60">
          <Clock className="w-4 h-4 text-emerald-600" />
          <span>{treatment.duration}</span>
        </div>
        
        <button
          id={`select-treatment-btn-${treatment.id}`}
          onClick={() => onSelectBooking(treatment.id)}
          className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-emerald-950 hover:text-gold-600 transition-colors group/btn cursor-pointer"
        >
          <span>Select Treatment</span>
          <ChevronRight className="w-4 h-4 text-gold-500 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
