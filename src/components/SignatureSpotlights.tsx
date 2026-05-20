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

  // Modern clinical luxury gradient mappings for each showcase
  const gradientMap: Record<string, string> = {
    'btl-exilis': 'bg-gradient-to-br from-emerald-950 via-emerald-900/90 to-[#121b16]',
    'mesotherapy': 'bg-gradient-to-br from-[#4a341b] via-[#614527]/95 to-[#2c1d0c]',
    'coolsculpting': 'bg-gradient-to-br from-[#122238] via-[#1a3354]/95 to-[#0b1424]',
    'massage-services': 'bg-gradient-to-br from-[#3e1b23] via-[#542731]/95 to-[#240c11]'
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
      <div className="py-20 text-center max-w-4xl mx-auto px-6">
        <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-gold-600 mb-3 block">
          SIGNATURE BEAUTY PATHWAYS
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-emerald-950 font-normal leading-tight">
          Our Signature Spotlights
        </h2>
        <p className="text-emerald-900/60 text-sm font-light mt-4 max-w-2xl mx-auto leading-relaxed">
          Explore our premier medical aesthetics and therapeutic skin interventions, meticulously crafted to restore cellular vitality and youthful skin structure.
        </p>
      </div>

      {/* Grid of alternating clinical cards - mirroring the aesthetic of the provided screenshots */}
      <div className="flex flex-col">
        {spotlightTreatments.map((treatment, idx) => {
          const isEven = idx % 2 === 0;
          const imageSrc = imagesMap[treatment.id];
          const bgGradient = gradientMap[treatment.id] || 'bg-gradient-to-br from-emerald-950 to-emerald-900';

          return (
            <div
              key={treatment.id}
              id={`spotlight-${treatment.id}`}
              className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] w-full border-b border-white hover:shadow-2xl transition-all duration-500 group"
            >
              {/* Text Module Side */}
              <div
                className={`flex flex-col justify-center items-start p-12 sm:p-20 relative text-white ${bgGradient} ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                {/* Floating ambient subtle glowing circle in card backdrop */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gold-400/5 blur-3xl pointer-events-none" />

                {/* Visual Ambient Details */}
                <span className="text-[10px] uppercase font-mono tracking-[0.4em] text-gold-300 block mb-3 font-semibold">
                  Chelsea Signature Protocol • {idx + 1}
                </span>
                
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight mb-6">
                  {treatment.name.replace(' Elite™ Skin Tightening', '').replace('® Precision Cryolipolysis', '').replace(' Advanced Cellular ', '')}
                </h3>
                
                <p className="text-white/85 text-xs sm:text-sm font-light leading-relaxed mb-8 max-w-lg">
                  {treatment.description}
                </p>

                {/* Highly structured features in columns */}
                <div className="grid grid-cols-2 gap-6 mb-8 w-full max-w-md border-t border-white/10 pt-6">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-gold-200/60 block mb-1">Clinic Duration</span>
                    <span className="text-xs font-semibold text-white tracking-wider font-mono">{treatment.duration}</span>
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-gold-200/60 block mb-1">Therapeutic Fee</span>
                    <span className="text-xs font-semibold text-white tracking-wider font-mono">{treatment.price}</span>
                  </div>
                </div>

                {/* Clean minimalist button matching screenshots */}
                <button
                  id={`spotlight-book-btn-${treatment.id}`}
                  onClick={() => handleBook(treatment.id)}
                  className="px-8 py-3.5 border border-white/20 hover:border-white text-white/90 hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 rounded bg-white/5 hover:bg-white/10 group-hover:scale-[1.03]"
                >
                  View & Book Treatment
                </button>
              </div>

              {/* Photo Module Side */}
              <div
                className={`relative overflow-hidden h-96 lg:h-auto min-h-[350px] bg-emerald-50 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <img
                  src={imageSrc}
                  alt={treatment.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover abs-center transform scale-100 group-hover:scale-105 transition-transform duration-1000 select-none grayscale-[8%] group-hover:grayscale-0"
                />
                
                {/* Soft gradient treatment overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent mix-blend-multiply opacity-50 z-10 pointer-events-none" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
