import { Clock, MapPin, Mail, Phone, CalendarCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer id="main-footer" className="bg-emerald-950 text-gold-200 pt-16 pb-8 border-t border-gold-300/10">
      <div id="footer-container" className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Col 1: Bio & Core compliance */}
        <div id="footer-col-bio" className="flex flex-col items-start text-left">
          <div id="footer-brand" className="mb-4">
            <h3 className="font-serif-display text-2xl tracking-[0.16em] leading-none text-white font-bold">
              BEAUTY ZONE
            </h3>
            <span className="text-[9px] font-sans tracking-[0.25em] text-gold-400 font-semibold uppercase mt-1 block">
              Clinical Aesthetics &amp; Skin Care
            </span>
          </div>
          
          <p id="footer-brand-bio" className="text-xs text-gold-300/60 leading-relaxed font-light mb-6">
            A premium United Kingdom sanctuary delivering subtle, safe, non-surgical facial rejuvenation procedures, biological skin bio-remodeling, and holistic nutrient wellness.
          </p>

          <span className="text-[10px] bg-emerald-900 border border-gold-300/10 px-3 py-1.5 rounded text-gold-300 font-mono">
            GMC Clinic ID: 7482910
          </span>
        </div>

        {/* Col 2: Operating hours */}
        <div id="footer-col-hours" className="flex flex-col items-start text-left">
          <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-5 pb-2 border-b border-gold-300/10 w-full">
            Clinic Operating Hours
          </h4>
          <ul className="space-y-3.5 text-xs text-gold-300/70 font-light w-full">
            <li className="flex justify-between items-center">
              <span>Monday</span>
              <span className="text-white">09:00 - 19:00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Tuesday</span>
              <span className="text-white">09:00 - 19:00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Wednesday</span>
              <span className="text-white">09:00 - 19:00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Thursday</span>
              <span className="text-white">09:00 - 21:00 *</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Friday</span>
              <span className="text-white">09:00 - 19:00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Saturday</span>
              <span className="text-white">09:00 - 17:00</span>
            </li>
            <li className="flex justify-between items-center text-gold-400 font-semibold border-t border-gold-300/10 pt-2.5">
              <span>Sunday</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>

        {/* Col 3: Coordinates & contact directions */}
        <div id="footer-col-coords" className="flex flex-col items-start text-left">
          <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-5 pb-2 border-b border-gold-300/10 w-full">
            Chelsea Sanctuary
          </h4>
          
          <div className="space-y-4 text-xs text-gold-300/70 font-light">
            <div className="flex gap-3 items-start">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
              <span>
                Ground Floor, 42 King’s Road,<br />
                Chelsea, London, SW3 4UD<br />
                United Kingdom
              </span>
            </div>
            
            <div className="flex gap-3 items-center">
              <Phone className="w-4 h-4 text-gold-400 shrink-0" />
              <a href="tel:+442079460192" className="hover:text-white transition-colors">
                +44 (0) 20 7946 0192
              </a>
            </div>

            <div className="flex gap-3 items-center">
              <Mail className="w-4 h-4 text-gold-400 shrink-0" />
              <a href="mailto:appointments@beautyzoneclinic.co.uk" className="hover:text-white transition-colors break-all">
                appointments@beautyzoneclinic.co.uk
              </a>
            </div>
          </div>
        </div>

        {/* Col 4: Rapid Navigation links */}
        <div id="footer-col-links" className="flex flex-col items-start text-left">
          <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-5 pb-2 border-b border-gold-300/10 w-full">
            Rapid Navigation Links
          </h4>
          
          <ul className="space-y-2.5 text-xs text-gold-300/70 font-light">
            <li>
              <button onClick={() => onNavigate('treatments')} className="hover:text-white transition-colors cursor-pointer text-left">
                • View Aesthetic Treatments
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('concerns')} className="hover:text-white transition-colors cursor-pointer text-left">
                • Interactive Skin Diagnosis
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('practitioners')} className="hover:text-white transition-colors cursor-pointer text-left">
                • Lead Clinicians GMC/NMC
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('testimonials')} className="hover:text-white transition-colors cursor-pointer text-left">
                • Verified Post-Care Reviews
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('booking')} className="hover:text-white transition-colors cursor-pointer text-left font-semibold text-gold-400">
                • Custom Fee Calculator App
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* Compliance / Regulatory standard notes */}
      <div id="footer-compliance-box" className="max-w-7xl mx-auto px-6 pt-8 border-t border-gold-300/10 text-[10px] text-gold-300/40 font-light leading-relaxed text-center sm:text-left flex flex-col sm:flex-row justify-between gap-6">
        <div id="compliance-text-stack" className="space-y-1 max-w-2xl">
          <p>© {new Date().getFullYear()} Beauty Zone Aesthetics Ltd. Registered in England &amp; Wales under registration number 13948520.</p>
          <p>Important Medical Notice: Non-surgical dermal filler and Botox wrinkle interventions are prescription cosmetic procedures. Clients must qualify physiologically under full face-to-face medical histories evaluated by Dr. Evelyn Sterling.</p>
        </div>

        <div id="footer-compliance-badges" className="flex justify-center sm:justify-start gap-4 uppercase font-bold tracking-widest shrink-0 text-[9px] text-gold-400">
          <span>GDPR Compliant</span>
          <span>•</span>
          <span>SafeCare Accredited</span>
        </div>
      </div>
    </footer>
  );
}
