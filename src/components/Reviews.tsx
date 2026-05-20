import { Star, MessageSquareCode, BadgeCheck } from 'lucide-react';
import { REVIEWS } from '../data';

export default function Reviews() {
  return (
    <section id="testimonials" className="py-20 bg-white border-b border-emerald-950/5">
      <div id="testimonials-container" className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div id="testimonials-heading-align" className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-600 mb-3 block">
            PATIENT CARE &amp; EXPERIENCES
          </span>
          <h2 id="testimonials-title" className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-emerald-950 font-normal mb-6">
            In Our Patients’ Own Words
          </h2>
          <p id="testimonials-subtitle" className="text-emerald-900/70 text-sm font-light leading-relaxed">
            Read authentic treatment journey reports submitted by our regular visitors. Beauty Zone prides itself on an unmatched clinical retention rate in the United Kingdom.
          </p>
        </div>

        {/* Testimonial Cards Layout */}
        <div id="testimonials-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="bg-luxury-cream p-8 rounded-2xl border border-emerald-950/5 flex flex-col justify-between items-start transition-all duration-300 hover:shadow-lg group"
            >
              {/* Star Rating Bar */}
              <div id={`review-stars-${review.id}`} className="flex flex-col gap-4 w-full">
                <div id={`stars-row-${review.id}`} className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                    ))}
                  </div>
                  <MessageSquareCode className="w-5 h-5 text-emerald-950/20 group-hover:text-gold-500 transition-colors" />
                </div>

                {/* Patient quote comment */}
                <blockquote id={`review-quote-${review.id}`} className="text-emerald-950/80 text-xs md:text-sm font-light italic leading-relaxed my-4 flex-1">
                  “{review.comment}”
                </blockquote>
              </div>

              {/* Patient Author Signature Badge */}
              <div id={`review-author-${review.id}`} className="border-t border-emerald-950/10 pt-4 w-full flex items-center justify-between">
                <div>
                  <h4 id={`author-name-${review.id}`} className="font-serif-display text-sm text-emerald-950 font-bold flex items-center gap-1.5">
                    {review.author}
                    <BadgeCheck className="w-4 h-4 text-emerald-600 fill-emerald-50" />
                  </h4>
                  <p id={`author-treatment-${review.id}`} className="text-[10px] text-gold-700 uppercase tracking-wider font-semibold mt-1">
                    {review.treatment}
                  </p>
                </div>
                
                <span id={`review-date-${review.id}`} className="text-[10px] text-emerald-950/40">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Professional citation/trust stats block */}
        <div id="trust-indicator-bar" className="mt-16 text-center max-w-lg mx-auto bg-gold-50 rounded-xl p-5 border border-gold-200">
          <p className="text-xs text-emerald-950/75 leading-relaxed font-light">
            Beauty Zone maintains an outstanding <strong className="text-emerald-950 font-semibold font-serif-display text-sm">4.9 / 5.0 Rating</strong> across verified digital healthcare platforms in London. Based on over 350+ clinical post-care feedback survey submissions.
          </p>
        </div>

      </div>
    </section>
  );
}
