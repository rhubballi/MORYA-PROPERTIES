import React, { useState } from 'react';
import { 
  Building2, CheckCircle2, TrendingUp, Users, 
  ShieldCheck, ArrowRight, IndianRupee, Phone, Send 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { useProperties } from '../context/PropertyContext';
import { BUSINESS_INFO } from '../data/mockData';

export const Sell: React.FC = () => {
  const { submitEnquiry } = useProperties();

  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState('Apartment');
  const [locality, setLocality] = useState('Dhankawadi');
  const [carpetArea, setCarpetArea] = useState('');
  const [expectedPrice, setExpectedPrice] = useState('');
  const [notes, setNotes] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSellSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!ownerName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setLoading(true);
    try {
      const res = await submitEnquiry({
        fullName: ownerName,
        phone,
        email,
        serviceCategory: 'sell',
        interestTitle: `Property Sale: ${propertyType} in ${locality}`,
        preferredLocation: locality,
        budgetRange: expectedPrice,
        message: `Property Listing Request: ${propertyType}, Area: ${carpetArea || 'Not specified'} sq.ft, Expected Price: ${expectedPrice || 'Open for valuation'}. Owner Notes: ${notes || 'None'}`
      });

      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(res.message);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Error submitting property.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-cream-100 min-h-screen pb-20">
      <SEO
        title="Sell Your Property in Pune | Morya Properties"
        description="Sell your flat, apartment, shop, or commercial property in Dhankawadi, Bibwewadi, and Pune with accurate valuation, verified buyer matching, and complete paperwork support."
        canonical="https://moryapropertiesandmultiservices.com/sell"
      />

      {/* Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              Property Seller Consultation & Valuation
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Sell Your Property at Optimum Value
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light">
              We connect your property with pre-screened, financially verified buyers across Pune. Benefit from accurate market valuation, professional viewings, and transparent transaction paperwork.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Benefits vs Submit Listing Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Seller Benefits & Process */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                Why List With Us
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                A Seamless Selling Experience From Valuation to Registry
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Selling a property can feel overwhelming with repeated calls, unqualified viewers, and legal uncertainties. Morya Properties streamlines the entire process so you don't waste time.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-luxury space-y-2">
                <TrendingUp className="w-6 h-6 text-gold-500" />
                <h3 className="font-serif text-base font-bold text-navy-950">Accurate Market Pricing</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Avoid underpricing or languishing on the market. We evaluate recent registered deals in your specific society.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-luxury space-y-2">
                <Users className="w-6 h-6 text-gold-500" />
                <h3 className="font-serif text-base font-bold text-navy-950">Pre-Qualified Buyers</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We pre-screen prospects for fund readiness and pre-approved home loans before bringing them to your doorstep.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-luxury space-y-2">
                <ShieldCheck className="w-6 h-6 text-gold-500" />
                <h3 className="font-serif text-base font-bold text-navy-950">Accompanied Viewings</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our consultants accompany every visit, showcasing highlights and handling queries professionally.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-luxury space-y-2">
                <Building2 className="w-6 h-6 text-gold-500" />
                <h3 className="font-serif text-base font-bold text-navy-950">Complete Legal Drafting</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Token agreements, sale deeds, society transfer paperwork, and sub-registrar registration handled seamlessly.
                </p>
              </div>
            </div>

            {/* Step-by-Step Selling Process */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-luxury space-y-4">
              <h3 className="font-serif text-lg font-bold text-navy-950 border-b border-slate-100 pb-3">
                The 5-Step Selling Journey
              </h3>
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold-500 text-navy-950 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">1</span>
                  <div><strong>Free Valuation & Inspection:</strong> We inspect your property and provide realistic pricing benchmarks.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold-500 text-navy-950 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">2</span>
                  <div><strong>Active Network Outreach:</strong> Presenting your property to verified active buyers and investors.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold-500 text-navy-950 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">3</span>
                  <div><strong>Offer Negotiation:</strong> Securing the highest possible market price with clear payment schedules.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold-500 text-navy-950 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">4</span>
                  <div><strong>Agreement to Sale & Token:</strong> Legally binding documentation protecting your interests.</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-gold-500 text-navy-950 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">5</span>
                  <div><strong>Final Sub-Registrar Registration:</strong> Overseeing deed execution and smooth fund transfers.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Listing Submission Form */}
          <div className="lg:col-span-5 bg-white p-7 rounded-2xl border border-slate-200/90 shadow-luxury lg:sticky lg:top-24">
            <div className="border-b border-slate-100 pb-4 mb-5">
              <span className="text-[10px] uppercase font-bold text-gold-600 tracking-wider">Start Here</span>
              <h3 className="font-serif text-xl font-bold text-navy-950 mt-1">
                List Your Property / Free Valuation
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill details below. Our team will contact you to schedule an initial inspection.
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-navy-950">Property Details Submitted!</h4>
                <p className="text-xs text-slate-600">
                  Thank you, <strong>{ownerName}</strong>. Nilesh Tarde / Morya team will contact you at <strong>{phone}</strong> to coordinate valuation.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-navy-900 text-white rounded-xl text-xs font-semibold"
                >
                  Submit Another Property
                </button>
              </div>
            ) : (
              <form onSubmit={handleSellSubmit} className="space-y-3.5 text-xs">
                {errorMsg && (
                  <div className="p-2.5 rounded-lg bg-red-50 text-red-700 text-xs border border-red-200">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Full Name (Owner) *</label>
                  <input
                    type="text"
                    placeholder="e.g. Suresh Kadam"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      placeholder="10-digit number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Property Type *</label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none bg-white"
                    >
                      <option value="Apartment">Apartment / Flat</option>
                      <option value="Villa">Villa / Row House</option>
                      <option value="Shop">Retail Shop</option>
                      <option value="Office Space">Commercial Office</option>
                      <option value="Plot">Plot / Land</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Pune Locality *</label>
                    <input
                      type="text"
                      placeholder="e.g. Dhankawadi, Bibwewadi"
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Carpet Area (sq.ft)</label>
                    <input
                      type="text"
                      placeholder="e.g. 850"
                      value={carpetArea}
                      onChange={(e) => setCarpetArea(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Expected Price (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. ₹70 Lakh (or leave blank for valuation)"
                    value={expectedPrice}
                    onChange={(e) => setExpectedPrice(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Property Society / Notes</label>
                  <textarea
                    rows={2}
                    placeholder="Society name, floor, parking availability, current occupancy..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-navy-900 hover:bg-navy-800 text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md disabled:opacity-70"
                >
                  <Send className="w-4 h-4 text-gold-400" />
                  <span>{loading ? 'Submitting...' : 'Submit For Valuation'}</span>
                </button>

                <p className="text-[10px] text-slate-400 text-center">
                  Direct consultation with Nilesh Ramchandra Tarde (Dhankawadi, Pune).
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
