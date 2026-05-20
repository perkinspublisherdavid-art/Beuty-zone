import { useState, useEffect } from 'react';
import { Phone, Calendar, Clock, MapPin, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Welcome' },
    { id: 'treatments', label: 'Treatments' },
    { id: 'concerns', label: 'Concern Matcher' },
    { id: 'practitioners', label: 'Our Specialists' },
    { id: 'testimonials', label: 'Client Care' },
    { id: 'location', label: 'Chelsea Clinic' }
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Professional Banner */}
      <div id="top-banner" className="bg-emerald-950 text-gold-200 text-xs py-2 px-4 border-b border-emerald-900/40 hidden md:block">
        <div id="top-banner-container" className="max-w-7xl mx-auto flex justify-between items-center font-sans tracking-wide">
          <div id="top-banner-left" className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              Chelsea, London, SW3
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400/40"></span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gold-400" />
              Mon - Sat: 09:00 - 19:00
            </span>
          </div>
          <div id="top-banner-right" className="flex items-center gap-4">
            <a href="tel:+442079460192" id="phone-link" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              +44 (0) 20 7946 0192
            </a>
            <span className="bg-emerald-900 px-2 py-0.5 rounded text-[10px] text-emerald-300 font-mono">
              GMC & NMC Registered Clinic
            </span>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Header */}
      <header
        id="main-header"
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-luxury-cream/95 backdrop-blur-md shadow-sm border-b border-emerald-900/5 py-3'
            : 'bg-luxury-cream py-5'
        }`}
      >
        <div id="menu-container" className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Brand Logo & Editorial Typography */}
          <button
            id="brand-logo"
            onClick={() => handleItemClick('home')}
            className="flex flex-col items-start text-left cursor-pointer group"
          >
            <div id="brand-main-text" className="font-serif-display text-2xl tracking-[0.16em] leading-none text-emerald-950 font-bold group-hover:text-gold-600 transition-colors">
              BEAUTY ZONE
            </div>
            <div id="brand-sub-text" className="text-[9px] font-sans tracking-[0.3em] text-gold-600 font-semibold uppercase mt-1 leading-none">
              Clinical Aesthetics &amp; Skin Care • UK
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-item-${item.id}`}
                onClick={() => handleItemClick(item.id)}
                className={`text-xs font-medium tracking-widest uppercase transition-all relative py-1 cursor-pointer ${
                  activeSection === item.id
                    ? 'text-emerald-950 font-semibold'
                    : 'text-emerald-800/70 hover:text-emerald-950'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span id={`active-indicator-${item.id}`} className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-400 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Booking Utility Button */}
          <div id="booking-utility" className="hidden md:flex items-center gap-4">
            <button
              id="header-booking-btn"
              onClick={() => handleItemClick('booking')}
              className="bg-emerald-950 hover:bg-emerald-900 text-gold-100 px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm flex items-center gap-2 border border-gold-300/10 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-gold-400" />
              Book Consultation
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-emerald-950 hover:text-gold-600 transition-colors focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div id="mobile-menu-drawer" className="lg:hidden absolute top-full left-0 right-0 bg-luxury-cream border-b border-emerald-900/10 shadow-lg px-6 py-8 flex flex-col gap-6 animate-fade-in z-50">
            <div id="mobile-nav-items" className="flex flex-col gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  className={`text-sm font-medium tracking-widest uppercase text-left py-2 ${
                    activeSection === item.id
                      ? 'text-gold-600 border-l-2 border-gold-400 pl-3 font-semibold'
                      : 'text-emerald-800/80 pl-3'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            
            <div id="mobile-nav-divider" className="border-t border-emerald-950/10 pt-6 flex flex-col gap-4">
              <a href="tel:+442079460192" id="mobile-phone-link" className="flex items-center gap-3 text-sm text-emerald-950 font-medium">
                <Phone className="w-4 h-4 text-gold-500" />
                +44 (0) 20 7946 0192
              </a>
              <button
                id="mobile-nav-booking-btn"
                onClick={() => handleItemClick('booking')}
                className="w-full bg-emerald-950 text-gold-100 py-3 rounded text-xs font-bold uppercase tracking-widest text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-gold-400" />
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
