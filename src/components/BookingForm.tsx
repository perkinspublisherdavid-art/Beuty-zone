import React, { useState, useEffect } from 'react';
import { Calendar, User, Mail, Phone, Calculator, Check, ShoppingBag, MapPin, ReceiptText, RefreshCw, Send, CheckCircle2 } from 'lucide-react';
import { TREATMENTS } from '../data';
import { Treatment } from '../types';

interface BookingFormProps {
  selectedTreatmentIdFromProps: string; // Enables selecting a treatment via click elsewhere on the site
  onResetSelectedId: () => void;
}

export default function BookingForm({ selectedTreatmentIdFromProps, onResetSelectedId }: BookingFormProps) {
  // Booking Form Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('morning'); // morning, afternoon, late
  const [consultationType, setConsultationType] = useState<'in-clinic' | 'virtual'>('in-clinic');
  const [additionalNotes, setAdditionalNotes] = useState('');
  
  // Selected Treatments for Custom Fee Calculator
  const [selectedTreatmentIds, setSelectedTreatmentIds] = useState<string[]>([]);
  
  // Submission Outcome States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedVoucher, setSubmittedVoucher] = useState<{
    id: string;
    fullName: string;
    phone: string;
    email: string;
    date: string;
    time: string;
    type: 'in-clinic' | 'virtual';
    items: Treatment[];
    totalEstimated: string;
    nextSteps: string[];
  } | null>(null);

  // Synchronize when a treatment is selected elsewhere (e.g. from service menu or diagnosis engine)
  useEffect(() => {
    if (selectedTreatmentIdFromProps && selectedTreatmentIdFromProps !== 'any') {
      // Toggle or set selected
      if (!selectedTreatmentIds.includes(selectedTreatmentIdFromProps)) {
        setSelectedTreatmentIds((prev) => [...prev, selectedTreatmentIdFromProps]);
      }
      
      // Smooth Scroll straight down to booking section
      const bookingSection = document.getElementById('booking');
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: 'smooth' });
      }
      
      // Clean up the parent hook so it can be re-triggered
      onResetSelectedId();
    }
  }, [selectedTreatmentIdFromProps, selectedTreatmentIdFromProps]);

  // Handle Multi-treatment selections
  const handleToggleTreatment = (id: string) => {
    if (selectedTreatmentIds.includes(id)) {
      setSelectedTreatmentIds(selectedTreatmentIds.filter((tId) => tId !== id));
    } else {
      setSelectedTreatmentIds([...selectedTreatmentIds, id]);
    }
  };

  const handleSelectAll = () => {
    setSelectedTreatmentIds(TREATMENTS.map((t) => t.id));
  };

  const handleClearAll = () => {
    setSelectedTreatmentIds([]);
  };

  // Evaluate Pricing Ranges dynamically
  const calculateEstimatedTotals = () => {
    if (selectedTreatmentIds.length === 0) return '£0 (Consultation Only)';
    
    // Parse prices
    let totalMin = 0;
    selectedTreatmentIds.forEach((tId) => {
      const treatment = TREATMENTS.find((t) => t.id === tId);
      if (treatment) {
        // extracts number from string of type "From £240"
        const num = parseInt(treatment.price.replace(/[^0-9]/g, ''), 10);
        if (!isNaN(num)) {
          totalMin += num;
        }
      }
    });

    return `£${totalMin} - £${Math.round(totalMin * 1.25)}`;
  };

  // Submit Treatment Form Planner
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email || !preferredDate) return;

    setIsSubmitting(true);
    
    // Simulate premium healthcare routing
    setTimeout(() => {
      const uniqueVoucherId = `BZ-${Math.floor(1000 + Math.random() * 9000)}-UK`;
      const chosenTreatments = TREATMENTS.filter((t) => selectedTreatmentIds.includes(t.id));
      
      const guidelines = [
        'Avoid blood thinners (aspirin, anti-inflammatories) 48 hours before injectables.',
        'Arrive makeup-free for advanced chemical peels or facials.',
        consultationType === 'in-clinic'
          ? 'Chelsea Clinic Address: Ground Floor, 42 King’s Road, Chelsea, SW3 4UD.'
          : 'Virtual Consultation Link: A secure Zoom invite is sent to your registered email 20 mins prior.',
        'A Beauty Zone patient coordinator will telephone your number to verify medical prerequisites.'
      ];

      setSubmittedVoucher({
        id: uniqueVoucherId,
        fullName,
        phone,
        email,
        date: preferredDate,
        time: preferredTime,
        type: consultationType,
        items: chosenTreatments,
        totalEstimated: calculateEstimatedTotals(),
        nextSteps: guidelines
      });
      
      setIsSubmitting(false);
      
      // Scroll to voucher summary
      const element = document.getElementById('booking-voucher-focus');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 1200);
  };

  const handleBookAnother = () => {
    setSubmittedVoucher(null);
    setFullName('');
    setPhone('');
    setEmail('');
    setPreferredDate('');
    setPreferredTime('morning');
    setConsultationType('in-clinic');
    setSelectedTreatmentIds([]);
    setAdditionalNotes('');
  };

  return (
    <section id="booking" className="py-20 bg-luxury-cream border-t border-emerald-950/5">
      <div id="booking-container" className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div id="booking-heading-align" className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-gold-600 mb-3 block">
            INDIVIDUAL PATIENT PLANNER
          </span>
          <h2 id="booking-title" className="font-serif-display text-3xl sm:text-4xl lg:text-5xl text-emerald-950 font-normal mb-6">
            Bespoke Treatment Request
          </h2>
          <p id="booking-subtitle" className="text-emerald-900/70 text-sm font-light leading-relaxed">
            Construct your customized clinical treatment profile below. Configure your selected sessions to receive a transparent price guide and medical preparation voucher instantly.
          </p>
        </div>

        {submittedVoucher ? (
          /* Submission Outcome Voucher Screen */
          <div
            id="booking-voucher-focus"
            className="max-w-2xl mx-auto bg-white rounded-3xl border border-gold-300/40 shadow-2xl p-6 md:p-10 animate-fade-in"
          >
            {/* Confirmation Sign */}
            <div id="voucher-header" className="text-center pb-8 border-b border-dashed border-emerald-950/15">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-gold-600 block">
                INQUIRY REGISTERED SUCCESSFULLY
              </span>
              <h3 id="voucher-ref" className="font-serif-display text-2xl text-emerald-950 font-normal mt-1">
                Reference ID: <span className="font-bold text-emerald-800">{submittedVoucher.id}</span>
              </h3>
              <p id="voucher-date" className="text-emerald-950/50 text-[11px] mt-1.5 font-light">
                Registered On: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>
            </div>

            {/* Invoicing Breakdown */}
            <div id="voucher-breakdown" className="py-8 space-y-6">
              
              <div id="voucher-summary" className="bg-emerald-50 rounded-2xl p-6 border border-emerald-950/5">
                <h4 className="text-[11px] uppercase tracking-wider text-emerald-950/60 font-bold mb-4 flex items-center gap-1.5">
                  <ReceiptText className="w-4 h-4 text-gold-600"/>
                  Estimated Treatment Summary
                </h4>
                
                {submittedVoucher.items.length === 0 ? (
                  <p className="text-xs text-emerald-950/80 italic font-light">Complementary Aesthetic &amp; Skin Diagnostics Consultation</p>
                ) : (
                  <ul className="space-y-3">
                    {submittedVoucher.items.map((item) => (
                      <li key={item.id} className="flex justify-between items-center text-xs text-emerald-950 font-medium">
                        <span>{item.name}</span>
                        <span className="text-gold-700">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="border-t border-emerald-950/10 mt-5 pt-4 flex justify-between items-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-950">Estimated Range (*):</span>
                  <span className="text-base font-serif-display font-bold text-emerald-800 bg-white px-3 py-1 rounded border border-emerald-950/10">
                    {submittedVoucher.totalEstimated}
                  </span>
                </div>
              </div>

              {/* Patient Booking Specs Grid */}
              <div id="voucher-patient-specs" className="grid grid-cols-2 gap-6 text-xs text-emerald-950">
                <div id="spec-patient">
                  <p className="text-[10px] uppercase tracking-wider text-emerald-950/50 font-bold">Patient Name</p>
                  <p className="font-semibold mt-1">{submittedVoucher.fullName}</p>
                </div>
                <div id="spec-contact">
                  <p className="text-[10px] uppercase tracking-wider text-emerald-950/50 font-bold">UK Contact</p>
                  <p className="font-semibold mt-1">{submittedVoucher.phone}</p>
                </div>
                <div id="spec-date">
                  <p className="text-[10px] uppercase tracking-wider text-emerald-950/50 font-bold">Appointment date</p>
                  <p className="font-semibold mt-1">
                    {new Date(submittedVoucher.date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short' })}
                  </p>
                </div>
                <div id="spec-slot">
                  <p className="text-[10px] uppercase tracking-wider text-emerald-950/50 font-bold">Preferred Block</p>
                  <p className="font-semibold mt-1 uppercase text-emerald-700 tracking-wider">
                    {submittedVoucher.time === 'morning' ? 'Morning (09am - 12pm)' : submittedVoucher.time === 'afternoon' ? 'Afternoon (1pm - 4pm)' : 'Late Clinic (5pm - 7pm)'}
                  </p>
                </div>
              </div>

              {/* Preparing Guidelines Bullet Points */}
              <div id="voucher-guidelines" className="border-t border-emerald-950/5 pt-6">
                <h4 className="text-[11px] uppercase tracking-wider text-gold-700 font-bold mb-3">
                  Pre-Consultation Instructions
                </h4>
                <ul className="space-y-2">
                  {submittedVoucher.nextSteps.map((step, idx) => (
                    <li key={idx} className="flex gap-2.5 items-start text-[11px] text-emerald-950/70 font-light leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 shrink-0"></span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Clear and start another request */}
            <div id="voucher-actions" className="flex flex-col gap-3">
              <button
                id="print-booking-voucher-btn"
                onClick={() => window.print()}
                className="w-full bg-emerald-950 hover:bg-emerald-900 text-gold-100 py-3.5 rounded text-xs font-bold uppercase tracking-widest transition-all cursor-pointer text-center flex items-center justify-center gap-2"
              >
                Print Voucher Slip
              </button>
              <button
                id="reset-form-btn"
                onClick={handleBookAnother}
                className="w-full bg-transparent hover:bg-emerald-50 text-emerald-950 border border-emerald-950/20 py-3 rounded text-xs font-semibold uppercase tracking-widest transition-colors cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Plan Another Concept
              </button>
            </div>

          </div>
        ) : (
          /* Normal Interactive Inquiry Builder Screen */
          <div id="booking-builder-board" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Frame: Interactive Treatment Customizer Panel (Span 7) */}
            <div id="planner-left" className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-emerald-950/5 shadow-md">
              <div id="calculator-header-row" className="flex justify-between items-center border-b border-emerald-950/10 pb-5 mb-6">
                <div className="flex items-center gap-2.5">
                  <Calculator className="w-5 h-5 text-gold-600" />
                  <h3 className="font-serif-display text-lg text-emerald-950 font-semibold uppercase tracking-wider">
                    1. Treatment Fee Calculator
                  </h3>
                </div>
                <div id="planner-bulk-actions" className="space-x-3">
                  <button
                    type="button"
                    onClick={handleSelectAll}
                    id="select-all-btn"
                    className="text-[10px] text-gold-700 hover:text-gold-900 font-bold uppercase cursor-pointer"
                  >
                    Select All
                  </button>
                  <span className="text-emerald-950/20">|</span>
                  <button
                    type="button"
                    onClick={handleClearAll}
                    id="clear-all-btn"
                    className="text-[10px] text-emerald-950/50 hover:text-emerald-950 font-bold uppercase cursor-pointer"
                  >
                    Clear All
                  </button>
                </div>
              </div>

              {/* Treatments Multiselect Block Grid */}
              <div id="treatments-multiselect-grid" className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {TREATMENTS.map((treatment) => {
                  const isChecked = selectedTreatmentIds.includes(treatment.id);
                  return (
                    <button
                      key={treatment.id}
                      type="button"
                      id={`calc-checkbox-${treatment.id}`}
                      onClick={() => handleToggleTreatment(treatment.id)}
                      className={`text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 cursor-pointer ${
                        isChecked
                          ? 'bg-emerald-50/50 border-gold-300'
                          : 'bg-luxury-cream/50 hover:bg-luxury-cream border-emerald-950/5'
                      }`}
                    >
                      <div id={`checkbox-bullet-${treatment.id}`} className={`w-4 h-4 rounded border mt-0.5 flex items-center justify-center shrink-0 transition-all ${
                        isChecked ? 'bg-gold-500 border-gold-500 text-white' : 'border-emerald-950/20 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>

                      <div id={`checkbox-labels-${treatment.id}`} className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-emerald-950 truncate leading-tight">
                          {treatment.name}
                        </p>
                        <p className="text-[10px] text-gold-700 font-bold mt-1">
                          {treatment.price}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Calculator Summary Drawer */}
              <div id="calculator-drawer" className="mt-8 bg-luxury-cream rounded-xl p-5 border border-emerald-950/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <div id="drawer-counts" className="flex items-center gap-3">
                  <div className="p-3 bg-white text-gold-600 rounded-lg shrink-0">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-950">
                      Selected Sessions
                    </h5>
                    <p className="text-[11px] text-emerald-950/60 font-light mt-0.5">
                      {selectedTreatmentIds.length} treatments are queued in active calculations.
                    </p>
                  </div>
                </div>

                <div id="drawer-sum" className="text-center md:text-right">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gold-700 block mb-0.5">
                    Total Estimated Fees
                  </span>
                  <span className="font-serif-display text-xl md:text-2xl font-bold text-emerald-950 bg-white px-4 py-1.5 rounded-lg border border-emerald-900/5 select-none shrink-0 inline-block">
                    {calculateEstimatedTotals()}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Frame: Consultation Contact Form Panel (Span 5) */}
            <form
              id="planner-right"
              onSubmit={handleSubmit}
              className="lg:col-span-5 bg-gradient-to-br from-emerald-950 via-[#122219] to-emerald-900 p-8 rounded-3xl border border-gold-300/20 text-gold-200 shadow-2xl flex flex-col justify-between lg:sticky lg:top-28"
            >
              <div id="form-header" className="border-b border-gold-300/15 pb-5 mb-6">
                <h3 className="font-serif-display text-lg text-white font-normal uppercase tracking-wider">
                  2. Patient Credentials
                </h3>
              </div>

              {/* Form Input fields */}
              <div id="form-inputs-stack" className="space-y-4">
                
                {/* Full name input */}
                <div id="field-name-block">
                  <label htmlFor="fullName" className="text-[10px] uppercase tracking-wider text-gold-300 font-bold">
                    Full Name
                  </label>
                  <div className="relative mt-1 focus-within:text-white text-gold-300/60">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                    <input
                      type="text"
                      id="fullName"
                      required
                      placeholder="e.g. Eleanor Pemberton"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-emerald-900/30 hover:bg-emerald-900/50 focus:bg-emerald-900/80 text-white placeholder:text-gold-200/30 text-xs rounded pl-10 pr-4 py-3.5 border border-gold-300/15 focus:border-gold-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div id="field-email-block">
                  <label htmlFor="email" className="text-[10px] uppercase tracking-wider text-gold-300 font-bold">
                    Email Address
                  </label>
                  <div className="relative mt-1 focus-within:text-white text-gold-300/60">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="eleanor@example.co.uk"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-emerald-900/30 hover:bg-emerald-900/50 focus:bg-emerald-900/80 text-white placeholder:text-gold-200/30 text-xs rounded pl-10 pr-4 py-3.5 border border-gold-300/15 focus:border-gold-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* UK Phone Number */}
                <div id="field-phone-block">
                  <label htmlFor="phone" className="text-[10px] uppercase tracking-wider text-gold-300 font-bold">
                    UK Telephone Number
                  </label>
                  <div className="relative mt-1 focus-within:text-white text-gold-300/60">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                    <input
                      type="tel"
                      id="phone"
                      required
                      placeholder="+44 7700 900077"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-emerald-900/30 hover:bg-emerald-900/50 focus:bg-emerald-900/80 text-white placeholder:text-gold-200/30 text-xs rounded pl-10 pr-4 py-3.5 border border-gold-300/15 focus:border-gold-400 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Row: Date Picker & Preferred Time Block */}
                <div id="field-date-time-row" className="grid grid-cols-2 gap-4">
                  <div id="field-date-sub">
                    <label htmlFor="preferredDate" className="text-[10px] uppercase tracking-wider text-gold-300 font-bold">
                      Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      required
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full mt-1 bg-emerald-900/30 hover:bg-emerald-900/50 focus:bg-emerald-900/80 text-white text-xs rounded px-3 py-3.5 border border-gold-300/15 focus:border-gold-400 focus:outline-none transition-all"
                    />
                  </div>

                  <div id="field-time-sub">
                    <label htmlFor="preferredTime" className="text-[10px] uppercase tracking-wider text-gold-300 font-bold">
                      Preferred Block
                    </label>
                    <select
                      id="preferredTime"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full mt-1 bg-emerald-900/20 hover:bg-emerald-900/50 focus:bg-emerald-900/85 text-white text-xs rounded px-3 py-3.5 border border-gold-300/15 focus:border-gold-400 focus:outline-none transition-all"
                    >
                      <option value="morning" className="bg-emerald-950 text-white">Morning (9am-12pm)</option>
                      <option value="afternoon" className="bg-emerald-950 text-white">Afternoon (1pm-4pm)</option>
                      <option value="late" className="bg-emerald-950 text-white">Late Clinic (5pm-7pm)</option>
                    </select>
                  </div>
                </div>

                {/* Consultation Media toggle: In-Clinic vs Virtual */}
                <div id="consultation-media-block">
                  <span className="text-[10px] uppercase tracking-wider text-gold-300 font-bold block mb-1.5">
                    Consultation Type
                  </span>
                  <div id="consultation-media-toggle-buttons" className="grid grid-cols-2 gap-2 bg-emerald-900/40 p-1 rounded-lg border border-gold-300/10">
                    <button
                      type="button"
                      id="con-media-btn-in-clinic"
                      onClick={() => setConsultationType('in-clinic')}
                      className={`py-2 rounded px-3 text-center text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        consultationType === 'in-clinic'
                          ? 'bg-gold-500 text-white shadow-sm'
                          : 'text-gold-200 hover:bg-emerald-900/60'
                      }`}
                    >
                      In-Clinic Chelsea
                    </button>
                    <button
                      type="button"
                      id="con-media-btn-virtual"
                      onClick={() => setConsultationType('virtual')}
                      className={`py-2 rounded px-3 text-center text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                        consultationType === 'virtual'
                          ? 'bg-gold-500 text-white shadow-sm'
                          : 'text-gold-200 hover:bg-emerald-900/60'
                      }`}
                    >
                      Secure Virtual
                    </button>
                  </div>
                </div>

                {/* Additional info instructions text area */}
                <div id="field-notes-block">
                  <label htmlFor="additionalNotes" className="text-[10px] uppercase tracking-wider text-gold-300 font-bold">
                    Medical Prerequisites &amp; Skin Goals
                  </label>
                  <textarea
                    id="additionalNotes"
                    rows={3}
                    placeholder="Enter previous aesthetic treatments, underlying allergies, drug histories, or structural concerns..."
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    className="w-full mt-1 bg-emerald-900/30 hover:bg-emerald-900/50 focus:bg-emerald-900/80 text-white placeholder:text-gold-200/30 text-xs rounded p-3 border border-gold-300/15 focus:border-gold-400 focus:outline-none transition-all"
                  />
                </div>

              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                id="submit-inquiry-btn"
                disabled={isSubmitting}
                className="w-full bg-gold-500 hover:bg-gold-600 border border-gold-400 hover:border-gold-500 text-white text-xs font-bold uppercase tracking-widest py-4 rounded transition-all shadow-md mt-6 flex items-center justify-center gap-2.5 disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Transmitting Profile...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Treatment Profile</span>
                  </>
                )}
              </button>

              <p className="text-[10px] text-gold-300/40 text-center mt-3 font-light leading-snug">
                Your medical data is encrypted locally and handled under strict UK GDPR healthcare requirements.
              </p>
            </form>

          </div>
        )}

      </div>
    </section>
  );
}
