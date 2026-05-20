import { useState } from 'react';
import { Sparkles, Calendar, BookOpen, Clock, Gift, Heart, X } from 'lucide-react';

export default function WellnessJournal() {
  const [selectedArticle, setSelectedArticle] = useState<null | {
    title: string;
    category: string;
    date: string;
    readTime: string;
    summary: string;
    content: string;
  }>(null);

  const articles = [
    {
      id: 'win-beauty-pkg',
      category: 'NEWS',
      date: 'May 18, 2026',
      readTime: '3 min read',
      title: 'Win a Beauty Treatment Package Worth Over £700',
      summary: 'We are offering one lucky client the premium chance to win a bespoke "beauty treatment package" containing multiple non-surgical lifts, targeted microneedling, and homecare serums worth over £700.',
      content: `To celebrate our summer boutique expansion in Chelsea, Beauty Zone is delighted to present our most luxurious giveaway of the year. One chosen client will receive a completely customized aesthetics bundle curated by Dr. Evelyn Sterling.
      
      The prize package includes:
      - 1 x Deluxe Profhilo® Tissue Remodeling Session
      - 1 x Cellular Mesotherapy Nourishing Treatment
      - 1 x Signature Lymphatic Full-Body Massage
      - Premium Medical-Grade Skincare Routine Starter Set
      
      To participate: Simply sign up for our Elite Care Circle newsletter below or share your email upon checkout inside our King's Road sanctuary. The winner will be randomly drawn and announced on June 20, 2026.`
    },
    {
      id: 'winter-holidays',
      category: 'NEWS',
      date: 'May 10, 2026',
      readTime: '5 min read',
      title: 'Winter holidays are quickly arriving and we want you to look fabulous',
      summary: 'With seasonal shifts and cold winds approaching, prepare your skin today. Learn how to optimize deep hydration and counter dry weather tissue damage early with clinical protocols.',
      content: `Winter dry winds can strip the skin of its essential lipid barrier, causing redness, irritation, and cellular dullness. At Beauty Zone, we work closely on medical shielding protocols.
      
      Our top clinical advices for winter resilience:
      1. Hyaluronic Remodeling: Initiate treatments like Profhilo or Mesotherapy early to bind moisture inside dermal layers ahead of seasonal frost.
      2. Optimized Peels: Keep exfoliating using mild Polyhydroxy Acid (PHA) peels which hydrate while eliminating gray, dead surface skin coats.
      3. Intensive Hydration: Layer antioxidants and ceramides daily to block trans-epidermal water loss.
      
      Talk to Nurse Clara Vance during your next session to receive your winter skincare routine analysis.`
    }
  ];

  return (
    <section id="wellness-journal" className="py-24 bg-white border-t border-emerald-950/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-600 mb-2 block">
            BEAUTY ZONE CHRONICLES
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-emerald-950 font-normal">
            Wellness Journal & Clinic News
          </h2>
          <p className="text-emerald-900/60 text-sm font-light mt-4">
            Stay aligned with London's finest aesthetic developments, seasonal skincare insights, and exclusive Chelsea clinical openings.
          </p>
        </div>

        {/* Beautiful Layout Matching Image 5 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Curated stacked News slots (Span 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            {articles.map((article) => (
              <div
                key={article.id}
                className="bg-luxury-cream/40 p-8 rounded-2xl border border-emerald-950/5 hover:border-gold-300 transition-all duration-300 flex flex-col justify-between group h-full"
              >
                <div>
                  {/* Category and Meta */}
                  <div className="flex items-center gap-4 mb-4 text-[10px] font-bold tracking-widest text-gold-600 uppercase">
                    <span>{article.category}</span>
                    <span className="text-emerald-950/20">•</span>
                    <span className="flex items-center gap-1 font-normal text-emerald-950/50">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl sm:text-2xl text-emerald-950 font-normal mb-4 group-hover:text-gold-600 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-emerald-900/70 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {article.summary}
                  </p>
                </div>

                {/* Read More Button */}
                <div>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="text-xs font-bold uppercase tracking-widest text-emerald-950 hover:text-gold-600 transition-colors flex items-center gap-2 group/btn"
                  >
                    <span>Read More</span>
                    <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Block: Large Feature Graphic of Floral Clinic Entrance (Span 5) */}
          <div className="lg:col-span-12 xl:col-span-5 flex flex-col">
            <div className="bg-luxury-cream/40 rounded-2xl border border-emerald-950/5 h-full overflow-hidden flex flex-col">
              {/* Photo Frame */}
              <div className="relative h-72 sm:h-96 lg:h-[320px] xl:h-auto xl:flex-grow overflow-hidden group">
                <img
                  src="/src/assets/images/floral_entrance_1779294148749.png"
                  alt="Beauty Zone London Sanctuary Flower Entrance"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform scale-100 hover:scale-[1.03] transition-transform duration-700"
                />
                
                {/* Micro label */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm shadow-md rounded px-2.5 py-1 text-[9px] uppercase font-bold tracking-widest text-gold-700 border border-gold-400/20">
                  CLINIC NEWS
                </div>
              </div>

              {/* Caption Text Box */}
              <div className="p-6 text-left border-t border-emerald-950/5 bg-white">
                <span className="text-[10px] font-bold tracking-widest text-emerald-950/40 uppercase block mb-1">
                  OUR PORTAL CHAIRS
                </span>
                <h4 className="font-serif text-lg text-emerald-950 font-normal mb-2">
                  No. 89 Chelsea Boutique Welcomes You
                </h4>
                <p className="text-emerald-950/60 text-xs font-light leading-relaxed">
                  Step past our iconic rose archway onto King's Road. We have expanded our clinical therapy suites to host advanced contouring and wellness equipment.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Elegant Luxury Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-emerald-950/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 sm:p-10 relative shadow-2xl border border-gold-300/30 overflow-y-auto max-h-[85vh]">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 text-emerald-950/60 hover:text-emerald-950 p-2 rounded-full hover:bg-emerald-50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[9px] uppercase font-bold tracking-[0.25em] text-gold-600 block mb-3">
              {selectedArticle.category} • {selectedArticle.date}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-emerald-950 font-normal mb-6">
              {selectedArticle.title}
            </h3>

            <div className="border-t border-emerald-950/5 pt-6 text-emerald-900/80 text-xs sm:text-sm font-light leading-relaxed whitespace-pre-line space-y-4">
              {selectedArticle.content}
            </div>

            <div className="border-t border-emerald-950/5 mt-8 pt-6 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2.5 bg-emerald-950 text-white rounded text-xs font-bold uppercase tracking-widest hover:bg-emerald-900 transition-colors"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
