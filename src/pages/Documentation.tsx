import React, { useState } from 'react';
import { 
  FileText, CheckCircle2, ShieldCheck, Clock, 
  MapPin, Phone, MessageCircle, Send, Fingerprint 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { EnquiryModal } from '../components/common/EnquiryModal';
import { useProperties } from '../context/PropertyContext';
import { BUSINESS_INFO, VERIFIED_TEAM } from '../data/mockData';

export const Documentation: React.FC = () => {
  const { submitEnquiry } = useProperties();

  const [applicantName, setApplicantName] = useState('');
  const [phone, setPhone] = useState('');
  const [docType, setDocType] = useState('Registered Rent Agreement (Biometric)');
  const [propertyLocation, setPropertyLocation] = useState('Dhankawadi');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!applicantName.trim()) {
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
        fullName: applicantName,
        phone,
        serviceCategory: 'documentation',
        interestTitle: docType,
        preferredLocation: propertyLocation,
        message: `Documentation Service Request: ${docType} in ${propertyLocation}. Preferred Appointment: ${preferredDate || 'Earliest'}. Details: ${notes || 'None'}`
      });

      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(res.message);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Error booking appointment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-cream-100 min-h-screen pb-20">
      <SEO
        title="Registered Rent Agreement & Documentation in Pune"
        description="Doorstep biometric online registered leave and license agreement, Index-II search, and property legal documentation in Dhankawadi, Pune."
        canonical="https://moryapropertiesandmultiservices.com/documentation"
      />

      {/* Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              Government-Approved Real Estate Documentation
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Registered Rent Agreements & Legal Documentation
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light">
              Doorstep biometric verification for online leave & license agreements, Index-II certified copy search, and stamp duty assistance across Dhankawadi, Katraj, Bibwewadi, and Pune.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
              >
                Book Doorstep Biometric Slot
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Services vs Appointment Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Services & Highlights */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                Doorstep Convenience
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
                Government-Recognized Biometric E-Registration
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Under Maharashtra government registration rules, registering leave & license agreements is mandatory. We provide hassle-free doorstep biometric fingerprint scanning and UIDAI Aadhaar verification so you never need to stand in sub-registrar queues.
              </p>
            </div>

            {/* Documentation Offerings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-luxury space-y-2">
                <Fingerprint className="w-7 h-7 text-gold-500" />
                <h3 className="font-serif text-base font-bold text-navy-950">
                  Online Rent Agreement
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Doorstep biometric registration for landlords and tenants. Government approved PDF delivered within 24–48 hours.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-luxury space-y-2">
                <FileText className="w-7 h-7 text-gold-500" />
                <h3 className="font-serif text-base font-bold text-navy-950">
                  Index-II & Search Reports
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Procuring certified Index-II copies and past 15-30 year revenue title search reports from the sub-registrar archives.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-luxury space-y-2">
                <ShieldCheck className="w-7 h-7 text-gold-500" />
                <h3 className="font-serif text-base font-bold text-navy-950">
                  Police Verification Intimation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Filing mandatory online tenant police intimation with local police stations across Pune.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-luxury space-y-2">
                <Clock className="w-7 h-7 text-gold-500" />
                <h3 className="font-serif text-base font-bold text-navy-950">
                  Stamp Duty Guidance
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Accurate government stamp duty and registration fee calculations to prevent overpayment or compliance penalties.
                </p>
              </div>
            </div>

            {/* Required Checklist for Rent Agreement */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/80 shadow-luxury space-y-4">
              <h3 className="font-serif text-lg font-bold text-navy-950 border-b border-slate-100 pb-3">
                Required Documents for Biometric E-Registration
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="space-y-2">
                  <span className="font-bold text-navy-950 block">Landlord & Tenant:</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <span>Aadhaar Cards linked with mobile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <span>PAN Cards of both parties</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <span>Property Electricity Bill or Index-II</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="font-bold text-navy-950 block">Two Identifiers / Witnesses:</span>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <span>Aadhaar Card of Witness 1</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <span>Aadhaar Card of Witness 2</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <span>Witnesses present for fingerprint verification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Fast Appointment Booking */}
          <div className="lg:col-span-5 bg-white p-7 rounded-2xl border border-slate-200/90 shadow-luxury lg:sticky lg:top-24">
            <div className="border-b border-slate-100 pb-4 mb-5">
              <span className="text-[10px] uppercase font-bold text-gold-600 tracking-wider">Fast Service</span>
              <h3 className="font-serif text-xl font-bold text-navy-950 mt-1">
                Book Documentation Service
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Coordinated by <strong>Bhagyashri / Nilesh Tarde</strong> (Documentation Desk).
              </p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-navy-950">Appointment Slot Requested!</h4>
                <p className="text-xs text-slate-600">
                  Thank you, <strong>{applicantName}</strong>. Our documentation team will call you at <strong>{phone}</strong> to confirm the biometric visit slot.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-navy-900 text-white rounded-xl text-xs font-semibold"
                >
                  Book Another Appointment
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                {errorMsg && (
                  <div className="p-2.5 rounded-lg bg-red-50 text-red-700 text-xs border border-red-200">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Bhagyashri / Client Name"
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Mobile Number (WhatsApp) *</label>
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
                  <label className="block font-semibold text-slate-700 mb-1">Service Required *</label>
                  <select
                    value={docType}
                    onChange={(e) => setDocType(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none bg-white font-medium"
                  >
                    <option value="Registered Rent Agreement (Biometric)">Registered Rent Agreement (Doorstep Biometric)</option>
                    <option value="Index-II Certified Search">Index-II Certified Search / IGR Copy</option>
                    <option value="Police Verification Intimation">Online Police Verification Intimation</option>
                    <option value="Stamp Duty & Legal Title Search">Stamp Duty & Legal Title Search</option>
                    <option value="Society NOC & Transfer">Society NOC & Transfer Guidance</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Property Locality *</label>
                    <input
                      type="text"
                      placeholder="e.g. Dhankawadi, Katraj"
                      value={propertyLocation}
                      onChange={(e) => setPropertyLocation(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Preferred Time / Slot</label>
                    <input
                      type="text"
                      placeholder="e.g. Tomorrow 3 PM"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Additional Notes</label>
                  <textarea
                    rows={2}
                    placeholder="Tenancy tenure, urgent requirement, landlord living out of town..."
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
                  <span>{loading ? 'Booking Slot...' : 'Confirm Documentation Request'}</span>
                </button>

                <div className="pt-2 text-center">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Bhagyashri / Nilesh Tarde, I need urgent doorstep biometric registered rent agreement assistance in Pune.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Quick WhatsApp Booking: +91 97639 15533</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCategory="documentation"
        defaultItemTitle="Registered Rent Agreement (Doorstep Biometric)"
      />
    </div>
  );
};
