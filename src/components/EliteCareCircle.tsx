import React, { useState } from 'react';
import { Mail, CheckCircle, ShieldCheck } from 'lucide-react';

export default function EliteCareCircle() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Please provide your luxury email coordinate.');
      return;
    }
    if (!consent) {
      setError('Your consent is required to process clinical newsletters.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const bgImage = '/src/assets/images/purple_lilacs_1779294420276.png';

  return (
    <section id="elite-newsletter" className="py-24 relative overflow-hidden bg-emerald-950">
      {/* Absolute Beautiful Background of Purple Lilacs with responsive styling */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Lilac therapeutic botanicals background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-35 mix-blend-luminosity scale-100 transform hover:scale-[1.02] transition-transform duration-1000"
        />
        {/* Soft emerald overlay for high-contrast accessibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/95 to-slate-900/90 z-1" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-white/95 backdrop-blur-md p-10 sm:p-14 rounded-3xl shadow-2xl border border-white/20 text-emerald-950">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[10px] font-bold tracking-[0.3em] text-gold-600 uppercase mb-3 block">
              ELITE CARE CIRCLE
            </span>
            <h3 className="font-serif text-2xl sm:text-3.5xl font-normal leading-tight mb-4">
              Join Our Care Circle
            </h3>
            <p className="text-emerald-950/70 text-xs sm:text-sm font-light">
              Receive early invitations to London clinical treatment trials, exclusive aesthetic packages, and seasonal advice directly from Dr. Evelyn Sterling.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-8 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-normal text-emerald-950 mb-3">
                Welcome to the Care Circle, {fullName || 'Beloved Client'}
              </h4>
              <p className="text-emerald-950/70 text-sm font-light max-w-sm mx-auto">
                We have recorded your email coordinate (<strong className="font-semibold text-emerald-950">{email}</strong>). Our next signature release will arrive shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
              
              {/* Optional Error Alert */}
              {error && (
                <div className="p-4 bg-red-50 text-red-800 rounded-md text-xs font-semibold leading-relaxed border border-red-200">
                  {error}
                </div>
              )}

              {/* Full Name & Phone Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="ns-name" className="sr-only">Full Name</label>
                  <input
                    type="text"
                    id="ns-name"
                    placeholder="Enter full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-emerald-50/50 hover:bg-emerald-50 focus:bg-white text-emerald-950 text-xs rounded-lg px-4 py-3.5 border border-emerald-950/10 focus:border-gold-500 focus:outline-none transition-all placeholder:text-emerald-950/50"
                  />
                </div>
                <div>
                  <label htmlFor="ns-number" className="sr-only">Contact Number</label>
                  <input
                    type="tel"
                    id="ns-number"
                    placeholder="Enter contact number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-emerald-50/50 hover:bg-emerald-50 focus:bg-white text-emerald-950 text-xs rounded-lg px-4 py-3.5 border border-emerald-950/10 focus:border-gold-500 focus:outline-none transition-all placeholder:text-emerald-950/50"
                  />
                </div>
              </div>

              {/* Email and send in parallel layout matching image 6 */}
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-grow">
                  <Mail className="w-4 h-4 text-emerald-950/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    id="ns-email"
                    placeholder="Enter Email Address..."
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-emerald-50/50 hover:bg-emerald-50 focus:bg-white text-emerald-950 text-xs rounded-lg pl-10 pr-4 py-3.5 border border-emerald-950/10 focus:border-gold-500 focus:outline-none transition-all placeholder:text-emerald-950/50"
                  />
                </div>
                <button
                  type="submit"
                  id="ns-send-btn"
                  className="px-8 py-3.5 bg-emerald-950 hover:bg-gold-600 text-white rounded-lg text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-md cursor-pointer shrink-0"
                >
                  SEND
                </button>
              </div>

              {/* Professional Consent Checkbox & Label matching Image 6 exactly */}
              <div className="flex items-start gap-3 pt-3 border-t border-emerald-950/5">
                <input
                  type="checkbox"
                  id="ns-consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="w-4 h-4 rounded border-emerald-950/20 text-gold-600 focus:ring-gold-500 transition-all cursor-pointer mt-0.5 shrink-0"
                />
                <label
                  htmlFor="ns-consent"
                  className="text-[10px] text-emerald-950/60 leading-normal font-light select-none cursor-pointer text-left block"
                >
                  I consent to the clinic processing my personal data in order to send personalised marketing material in accordance with the privacy policy.
                </label>
              </div>

              {/* Safety advisory badge */}
              <div className="flex items-center gap-1.5 justify-center text-[10px] text-emerald-950/40 mt-2 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
                <span>GDPR Shielded • Instant Unsubscribe Available</span>
              </div>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}
