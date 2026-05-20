import { useState } from 'react';
import { Search, Sparkles, Wand2, ShieldPlus } from 'lucide-react';
import { TREATMENTS } from '../data';
import TreatmentCard from './TreatmentCard';

interface TreatmentExplorerProps {
  onSelectBooking: (treatmentId: string) => void;
}

type TabType = 'all' | 'injectables' | 'skin' | 'wellness';

export default function TreatmentExplorer({ onSelectBooking }: TreatmentExplorerProps) {
  const [activeTab, setActiveTab] = useState<TabType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTreatments = TREATMENTS.filter((t) => {
    const matchesTab = activeTab === 'all' || t.category === activeTab;
    const matchesSearch =
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.benefits.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase())) ||
      t.recommendedFor.some((rf) => rf.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTab && matchesSearch;
  });

  const tabConfigs = [
    { type: 'all' as TabType, label: 'All Therapies', icon: Sparkles },
    { type: 'injectables' as TabType, label: 'Medical Injectables', icon: Wand2 },
    { type: 'skin' as TabType, label: 'Clinical Skin Care', icon: ShieldPlus },
    { type: 'wellness' as TabType, label: 'Cellular Wellness', icon: Sparkles }
  ];

  return (
    <section id="treatments" className="py-20 bg-luxury-cream">
      <div id="treatments-header-container" className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div id="treatments-title-align" className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-600 mb-3 block">
            OUR PRESCRIBING SPECIALTIES
          </span>
          <h2 id="treatments-title" className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-emerald-950 font-normal mb-6">
            Our Selected Treatment Menu
          </h2>
          <p id="treatments-subtitle" className="text-emerald-900/70 text-sm font-light leading-relaxed">
            All protocols at Beauty Zone are overseen by UK registered medical professionals and tailored with therapeutic concentrations to respect your distinct facial architecture.
          </p>
        </div>

        {/* Search and Navigation Bar Panel combined */}
        <div id="treatments-filter-toolbar" className="flex flex-col lg:flex-row gap-6 justify-between items-center mb-12 bg-white p-4 rounded-xl border border-emerald-950/5 shadow-sm">
          
          {/* Tabs */}
          <div id="treatments-tabs-frame" className="flex flex-wrap gap-2 w-full lg:w-auto">
            {tabConfigs.map((tab) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.type;
              return (
                <button
                  key={tab.type}
                  id={`tab-btn-${tab.type}`}
                  onClick={() => setActiveTab(tab.type)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-950 text-gold-100 shadow-md border border-emerald-950'
                      : 'bg-transparent text-emerald-950/70 hover:bg-emerald-50 hover:text-emerald-950 border border-transparent'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Quick Search and Match Input */}
          <div id="search-input-frame" className="relative w-full lg:w-80">
            <Search className="w-4 h-4 text-emerald-950/40 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="treatments-search"
              placeholder="Search treatments, concerns..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-emerald-50/50 hover:bg-emerald-50 focus:bg-white text-emerald-950 text-xs rounded-md pl-10 pr-4 py-3 border border-emerald-950/10 focus:border-gold-400 focus:outline-none transition-all placeholder:text-emerald-950/40"
            />
          </div>
        </div>

        {/* Results Info Grid */}
        {filteredTreatments.length === 0 ? (
          <div id="treatments-empty-state" className="text-center py-20 bg-white rounded-xl border border-dashed border-emerald-950/10 max-w-md mx-auto">
            <p className="text-sm font-light text-emerald-950/60 mb-2">No treatments match your search criteria.</p>
            <button
              id="clear-filters-btn"
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="text-xs text-gold-600 hover:text-gold-700 font-semibold uppercase tracking-wider underline transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div id="treatments-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment) => (
              <TreatmentCard
                key={treatment.id}
                treatment={treatment}
                onSelectBooking={onSelectBooking}
              />
            ))}
          </div>
        )}

        {/* Subtle advisory footer note */}
        <div id="treatments-disclaimer-note" className="mt-12 text-center text-[11px] text-emerald-950/50 font-light flex flex-col sm:flex-row items-center justify-center gap-1.5 leading-relaxed">
          <span>* Exact pricing is confirmed by Dr. Sterling during your clinical consultation based on treatment dosage.</span>
          <span className="hidden sm:inline">•</span>
          <button onClick={() => onSelectBooking('any')} id="book-consultation-link" className="text-gold-600 font-semibold hover:underline cursor-pointer">
            Read about medical safe guidelines
          </button>
        </div>

      </div>
    </section>
  );
}
