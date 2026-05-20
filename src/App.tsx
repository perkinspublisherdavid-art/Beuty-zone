import { useState, useEffect } from 'react';
import { CalendarCheck, ShieldCheck, Heart, MapPin, Phone, Mail } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import TreatmentExplorer from './components/TreatmentExplorer';
import SignatureSpotlights from './components/SignatureSpotlights';
import ConcernFinder from './components/ConcernFinder';
import Practitioners from './components/Practitioners';
import Reviews from './components/Reviews';
import WellnessJournal from './components/WellnessJournal';
import EliteCareCircle from './components/EliteCareCircle';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedTreatmentId, setSelectedTreatmentId] = useState('any');

  // Intersection Observer to highlight active section on scroll
  useEffect(() => {
    const sections = ['home', 'treatments', 'concerns', 'practitioners', 'testimonials', 'location', 'booking'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle section clicking transitions
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Select treatment elsewhere on the dashboard and deep-link directly to booking
  const handleSelectTreatmentForBooking = (treatmentId: string) => {
    setSelectedTreatmentId(treatmentId);
  };

  // Reset selected trigger back to arbitrary defaults
  const handleResetSelectedId = () => {
    setSelectedTreatmentId('any');
  };

  // Image assets absolute references
  const CLINIC_BG = '/src/assets/images/clinic_interior_1779293308928.png';
  const SKINCARE_BG = '/src/assets/images/skincare_luxury_1779293334169.png';

  return (
    <div id="beauty-zone-root" className="min-h-screen flex flex-col justify-between selection:bg-gold-200 selection:text-emerald-950">
      {/* Premium Navigational Headers */}
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main id="beauty-zone-dashboard" className="flex-grow">
        
        {/* SECTION 1: Welcome/Home (AnchorId: home) */}
        <div id="home">
          <Hero onExplore={handleNavigate} clinicImage={CLINIC_BG} />
        </div>

        {/* SECTION 2: Our Specialty menu (AnchorId: treatments) */}
        <div id="treatments" className="space-y-12">
          <TreatmentExplorer onSelectBooking={handleSelectTreatmentForBooking} />
          <SignatureSpotlights onSelectBooking={handleSelectTreatmentForBooking} />
        </div>

        {/* SECTION 3: Interactive Concerns Matcher (AnchorId: concerns) */}
        <div id="concerns">
          <ConcernFinder onSelectBooking={handleSelectTreatmentForBooking} skincareImage={SKINCARE_BG} />
        </div>

        {/* SECTION 4: Our practitioners credentials (AnchorId: practitioners) */}
        <div id="practitioners">
          <Practitioners />
        </div>

        {/* SECTION 5: Client care testimonies (AnchorId: testimonials) */}
        <div id="testimonials">
          <Reviews />
        </div>

        {/* Wellness Journals and Clinical News Highlights */}
        <WellnessJournal />

        {/* Elite Care Digital Newsletter */}
        <EliteCareCircle />

        {/* SECTION 6: UK physical location maps and opening times (AnchorId: location) */}
        <section id="location" className="py-20 bg-luxury-cream border-t border-b border-emerald-950/5">
          <div id="location-container" className="max-w-7xl mx-auto px-6">
            
            <div id="location-header-align" className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-600 mb-3 block">
                OUR SANCTUARY COORDINATES
              </span>
              <h2 id="location-title" className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-emerald-950 font-normal mb-6">
                Chelsea Aesthetics Sanctuary
              </h2>
              <p id="location-subtitle" className="text-emerald-900/70 text-sm font-light leading-relaxed">
                Beauty Zone operates inside a private state-of-the-art facility situated on the historic King’s Road, Chelsea, facilitating professional medical discretion.
              </p>
            </div>

            <div id="location-details-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
              {/* Info Frame (Span 5) */}
              <div id="location-info-pnl" className="lg:col-span-5 bg-white p-8 rounded-2xl border border-emerald-950/5 shadow-md space-y-8 text-left">
                <div>
                  <span className="text-[9px] uppercase font-bold tracking-widest text-gold-700 bg-gold-50 px-2.5 py-1 rounded">
                    Clinical Location
                  </span>
                  <div className="flex gap-3 items-start mt-4 text-xs text-emerald-950 leading-relaxed font-light">
                    <MapPin className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Beauty Zone Aesthetics</strong><br />
                      Ground Floor, 42 King’s Road,<br />
                      Chelsea, London, SW3 4UD<br />
                      United Kingdom
                    </span>
                  </div>
                </div>

                <div className="border-t border-emerald-950/5 pt-6">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-gold-700 bg-gold-50 px-2.5 py-1 rounded">
                    Direct Appointments desk
                  </span>
                  <div className="mt-4 space-y-3 text-xs text-emerald-950 font-light">
                    <div className="flex gap-3 items-center">
                      <Phone className="w-4 h-4 text-gold-600" />
                      <a href="tel:+442079460192" className="hover:text-gold-700 font-semibold transition-colors">
                        +44 (0) 20 7946 0192
                      </a>
                    </div>
                    <div className="flex gap-3 items-center">
                      <Mail className="w-4 h-4 text-gold-600" />
                      <a href="mailto:appointments@beautyzoneclinic.co.uk" className="hover:text-gold-700 font-semibold transition-colors">
                        appointments@beautyzoneclinic.co.uk
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-emerald-950/5 pt-6 text-[11px] text-emerald-950/60 leading-relaxed font-light">
                  <p><strong>Transit note:</strong> Closest Underground station is Sloane Square (District &amp; Circle lines), situated a brief 4-minute stroll westward.</p>
                </div>
              </div>

              {/* Map Illustration Frame (Span 7) */}
              <div id="location-map-pnl" className="lg:col-span-7 relative h-[380px] rounded-2xl overflow-hidden border border-emerald-950/5 group">
                {/* Visual stylised high-end cosmetic vector map */}
                <div id="mock-map-canvas" className="absolute inset-0 bg-emerald-100 flex items-center justify-center text-center p-8 select-none">
                  <div className="absolute inset-0 bg-luxury-cream opacity-50"></div>
                  
                  {/* Styled minimalist aesthetic London map graphics */}
                  <div id="grid-lines" className="absolute inset-0 opacity-15 bg-[radial-gradient(#122424_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  
                  {/* Decorative map roads and river Thames curve */}
                  <div className="absolute top-[80%] left-[-20%] right-[-20%] h-24 bg-emerald-200/40 rounded-full blur-md transform -rotate-6"></div>
                  <div className="absolute top-[40%] left-[20%] right-[-10%] h-[3px] bg-gold-400/20 transform -rotate-12"></div>
                  <div className="absolute top-0 bottom-0 left-[35%] w-[4px] bg-gold-400/10"></div>
                  
                  {/* Central Landmark Chelsea Pin */}
                  <div className="relative flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-emerald-950 text-gold-400 rounded-full shadow-2xl border-2 border-gold-300 flex items-center justify-center animate-bounce z-10">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div className="w-6 h-2 bg-emerald-950/20 rounded-full blur-sm mt-1"></div>
                    
                    <div className="bg-white/95 backdrop-blur-sm self-center text-left py-2 px-3.5 rounded shadow-xl border border-gold-300/30 mt-3 max-w-xs text-xs animate-fade-in">
                      <h4 className="font-serif-display font-bold text-emerald-950 text-sm">BEAUTY ZONE</h4>
                      <p className="text-[10px] text-gold-700 uppercase font-semibold">42 King’s Road, London</p>
                    </div>
                  </div>

                  {/* Sloane Square and landmarks text coordinates */}
                  <div className="absolute top-[15%] left-[10%] text-[10px] text-emerald-950/50 uppercase font-semibold">Sloane Square Tubestation</div>
                  <div className="absolute top-[60%] right-[15%] text-[10px] text-emerald-950/50 uppercase font-semibold">Duke of York Square</div>
                  <div className="absolute bottom-[10%] left-[15%] text-[10px] text-emerald-950/40 uppercase font-semibold">River Thames</div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 7: Invoicing Booking Form (AnchorId: booking) */}
        <div id="booking">
          <BookingForm
            selectedTreatmentIdFromProps={selectedTreatmentId}
            onResetSelectedId={handleResetSelectedId}
          />
        </div>

      </main>

      {/* Footer Navigation coordinated footnotes */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
