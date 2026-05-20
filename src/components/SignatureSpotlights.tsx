import { TREATMENTS } from '../data';

interface SignatureSpotlightsProps {
  onSelectBooking: (treatmentId: string) => void;
}

export default function SignatureSpotlights({ onSelectBooking }: SignatureSpotlightsProps) {
  // Pull our targeted premium treatments to align with user screenshots
  const targetIds = ['btl-exilis', 'mesotherapy', 'coolsculpting', 'massage-services'];
  const spotlightTreatments = TREATMENTS.filter((t) => targetIds.includes(t.id));

  // Map specialized high-definition generated screenshots perfectly to represent each
  const imagesMap: Record<string, string> = {
    'btl-exilis': '/src/assets/images/btl_exilis_1779294201301.png',
    'mesotherapy': '/src/assets/images/mesotherapy_1779294246050.png',
    'coolsculpting': '/src/assets/images/coolsculpting_1779294222713.png',
    'massage-services': '/src/assets/images/massage_services_1779294268845.png'
  };

  const handleBook = (treatmentId: string) => {
    onSelectBooking(treatmentId);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="signature-spotlights" className="bg-white">
      {/* Visual Section Header */}
      <div className="py-16 text-center max-w-4xl mx-auto px-6">
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gold-600 mb-3 block">
          SIGNATURE BEAUTY PATHWAYS
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-emerald-950 font-normal leading-tight">
          Our Signature Spotlights
        </h2>
        <p className="text-emerald-900/60 text-sm font-light mt-4 max-w-2xl mx-auto">
          Explore our premier medical aesthetics and therapeutic skin interventions, meticulously crafted to restore cellular vitality and youthful skin structure.
        </p>
      </div>

      {/* Grid of alternating clinical cards - mirroring the aesthetic of the provided screenshots */}
      <div className="flex flex-col">
        {spotlightTreatments.map((treatment, idx) => {
          const isEven = idx % 2 === 0;
          const imageSrc = imagesMap[treatment.id];

          return (
            <div
              key={treatment.id}
              id={`spotlight-${treatment.id}`}
              className="grid grid-cols-1 lg:grid-cols-2 min-h-[480px] w-full border-b border-white hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Text Module Side */}
              <div
                className={`flex flex-col justify-center items-start p-12 sm:p-20 relative bg-[#8e9692] text-white ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* Visual Ambient Details */}
                <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-white/70 mb-2">
                  TREATMENT
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-6">
                  {treatment.name.replace(' Elite™ Skin Tightening', '').replace('® Precision Cryolipolysis', '').replace(' Advanced Cellular ', '')}
                </h3>
                
                <p className="text-white/90 text-sm sm:text-base font-light leading-relaxed mb-8 max-w-lg">
                  {treatment.description}
                </p>

                {/* Highly structured features in columns */}
                <div className="grid grid-cols-2 gap-4 mb-8 w-full max-w-md border-t border-white/20 pt-6">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-white/60 block mb-1">Duration</span>
                    <span className="text-xs font-semibold text-white">{treatment.duration}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-white/60 block mb-1">Pricing</span>
                    <span className="text-xs font-semibold text-white">{treatment.price}</span>
                  </div>
                </div>

                {/* Clean minimalist button matching screenshots */}
                <button
                  id={`spotlight-book-btn-${treatment.id}`}
                  onClick={() => handleBook(treatment.id)}
                  className="px-8 py-3.5 border border-white/40 hover:border-white text-white/90 hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded hover:bg-white/10 group-hover:scale-105"
                >
                  View & Book Treatment
                </button>
              </div>

              {/* Photo Module Side */}
              <div
                className={`relative overflow-hidden h-96 lg:h-auto min-h-[350px] bg-slate-100 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <img
                  src={imageSrc}
                  alt={treatment.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover abs-center transform hover:scale-105 transition-transform duration-700 select-none"
                />
                
                {/* Soft gradient treatment overlay */}
                <div className="absolute inset-0 bg-emerald-950/5 mix-blend-multiply transition-opacity duration-300 pointer-events-none group-hover:opacity-20" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
