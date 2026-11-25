import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, 
  CheckCircle2, MessageCircle, Building2, User 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { useProperties } from '../context/PropertyContext';
import { BUSINESS_INFO, VERIFIED_TEAM } from '../data/mockData';

export const Contact: React.FC = () => {
  const { submitEnquiry } = useProperties();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceCategory, setServiceCategory] = useState('buy');
  const [locationPref, setLocationPref] = useState('Dhankawadi');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
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
        fullName,
        phone,
        email,
        serviceCategory,
        preferredLocation: locationPref,
        message: message || `Contact enquiry regarding ${serviceCategory} services in ${locationPref}`
      });

      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(res.message);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Error submitting enquiry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-cream-100 min-h-screen pb-20">
      <SEO
        title="Contact Us | Morya Properties and Multi Services"
        description="Contact Morya Properties and Multi Services in Dhankawadi, Pune. Call +91-9763915533 for property buying, selling, rent agreements, and loans."
        canonical="https://moryapropertiesandmultiservices.com/contact"
      />

      {/* Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              Get in Touch With Our Pune Desk
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Contact Morya Properties
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light">
              Visit our office in Dhankawadi or connect via call or WhatsApp. We are ready to assist you with verified property solutions and essential documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Map vs Contact Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Verified Office Info & Map */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-luxury space-y-6">
              <h2 className="font-serif text-xl font-bold text-navy-950 border-b border-slate-100 pb-3">
                Verified Office Contact Details
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-950 block mb-0.5">Office Address:</strong>
                    <span className="text-slate-600 leading-relaxed">
                      {BUSINESS_INFO.address.full}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-950 block mb-0.5">Telephone & WhatsApp:</strong>
                    <div className="flex flex-col gap-1 text-xs">
                      <a href={`tel:${BUSINESS_INFO.phones[0].number}`} className="text-navy-900 font-semibold hover:text-gold-600">
                        {BUSINESS_INFO.phones[0].display} (Lead Consultant / WhatsApp)
                      </a>
                      <a href={`tel:${BUSINESS_INFO.phones[1].number}`} className="text-slate-600 hover:text-gold-600">
                        {BUSINESS_INFO.phones[1].display} (Support & Office)
                      </a>
                      <a href={`tel:${BUSINESS_INFO.phones[2].number}`} className="text-slate-600 hover:text-gold-600">
                        {BUSINESS_INFO.phones[2].display} (Documentation & Field Desk)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-950 block mb-0.5">Email:</strong>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-600 hover:text-gold-600">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-950 block mb-0.5">Operating Hours:</strong>
                    <span className="text-slate-600">
                      {BUSINESS_INFO.hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Nilesh Tarde, I would like to schedule an in-person meeting at your Dhankawadi office.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>
            </div>

            {/* Google Maps Location Embed Frame */}
            <div className="bg-white p-3 rounded-3xl border border-slate-200/90 shadow-luxury overflow-hidden">
              <iframe
                title="Morya Properties Location Dhankawadi Pune"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15136.938221666993!2d73.84758535!3d18.46824965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eab5a29b28b7%3A0xe543fa00ecba62d3!2sDhankawadi%2C%20Pune%2C%20Maharashtra%20411043!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-72 rounded-2xl border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="p-3 text-[11px] text-slate-500 text-center">
                Located near Panchvati Society & Teen Hatti Chowk Road, Dhankawadi, Pune – 411043
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-6 bg-white p-7 sm:p-9 rounded-3xl border border-slate-200/90 shadow-luxury">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <span className="text-[10px] uppercase font-bold text-gold-600 tracking-wider">Fast Response</span>
              <h2 className="font-serif text-2xl font-bold text-navy-950 mt-1">
                Send Us an Enquiry
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Leave your details below. Our team typically replies within 2–4 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-950">Message Sent Successfully!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Your enquiry has been received and logged. Nilesh Tarde or a team representative will call you at <strong>{phone}</strong>.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-navy-900 text-white rounded-xl text-xs font-semibold hover:bg-navy-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Deshmukh"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      placeholder="10-digit number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Service Interested In *</label>
                    <select
                      value={serviceCategory}
                      onChange={(e) => setServiceCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none bg-white font-medium"
                    >
                      <option value="buy">Buying Property (Residential/Plots)</option>
                      <option value="sell">Selling Property & Valuation</option>
                      <option value="rent">Rental & Flat Leasing</option>
                      <option value="commercial">Commercial Space / Shop</option>
                      <option value="loans">Home Loan Assistance</option>
                      <option value="insurance">Insurance Consultation</option>
                      <option value="documentation">Registered Rent Agreement (Biometric)</option>
                      <option value="general">General Real Estate Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Preferred Locality</label>
                    <input
                      type="text"
                      placeholder="Dhankawadi, Katraj, Bibwewadi..."
                      value={locationPref}
                      onChange={(e) => setLocationPref(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Requirements / Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us what you're looking for (budget, timing, specific preferences...)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-navy-900 hover:bg-navy-800 text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
                >
                  <Send className="w-4 h-4 text-gold-400" />
                  <span>{loading ? 'Submitting Enquiry...' : 'Submit Enquiry'}</span>
                </button>

                <p className="text-[10px] text-slate-400 text-center">
                  Your information is held in strict confidence and only used to assist your property inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
