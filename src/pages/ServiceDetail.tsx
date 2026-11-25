import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Building2, ArrowLeft, CheckCircle2, ShieldAlert, 
  FileText, Clock, Send, Phone, MessageCircle 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { useProperties } from '../context/PropertyContext';
import { BUSINESS_INFO } from '../data/mockData';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { services, submitEnquiry } = useProperties();

  const service = services.find(s => s.slug === slug);

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('Dhankawadi');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-cream-100 text-center">
        <Building2 className="w-12 h-12 text-slate-300 mb-4" />
        <h2 className="font-serif text-2xl font-bold text-navy-950 mb-2">Service Not Found</h2>
        <p className="text-xs text-slate-500 mb-6">The requested service could not be found.</p>
        <Link to="/services" className="btn-gold px-6 py-2.5 rounded-xl text-xs font-bold uppercase">
          Browse All Services
        </Link>
      </div>
    );
  }

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

    setSubmitting(true);
    try {
      const res = await submitEnquiry({
        fullName,
        phone,
        serviceCategory: service.category,
        interestTitle: service.title,
        preferredLocation: location,
        message: `Inquiry for ${service.title}: ${notes || 'Requested details'}`
      });

      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(res.message);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Error sending request.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-cream-100 min-h-screen pb-20">
      <SEO
        title={`${service.title} in Pune`}
        description={service.shortDescription}
        canonical={`https://moryapropertiesandmultiservices.com/services/${service.slug}`}
      />

      {/* Top Breadcrumb */}
      <div className="bg-white border-b border-slate-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-navy-950 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>
      </div>

      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-14 lg:py-18 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              Morya Multi-Services
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              {service.title}
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details vs Enquiry Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Details */}
          <div className="lg:col-span-8 space-y-8">
            {/* Full Image */}
            <div className="rounded-3xl overflow-hidden shadow-luxury border-4 border-white max-h-[360px]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-luxury space-y-4">
              <h2 className="font-serif text-xl font-bold text-navy-950 border-b border-slate-100 pb-3">
                Service Overview
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {service.fullDescription}
              </p>
            </div>

            {/* Features */}
            <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-luxury space-y-4">
              <h3 className="font-serif text-lg font-bold text-navy-950 border-b border-slate-100 pb-3">
                Key Benefits & Service Deliverables
              </h3>
              <div className="space-y-2.5">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Steps */}
            {service.processSteps && service.processSteps.length > 0 && (
              <div className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-luxury space-y-5">
                <h3 className="font-serif text-lg font-bold text-navy-950 border-b border-slate-100 pb-3">
                  Step-by-Step Procedure
                </h3>
                <div className="space-y-4">
                  {service.processSteps.map((step) => (
                    <div key={step.step} className="flex items-start gap-3.5 text-xs">
                      <span className="w-6 h-6 rounded-full bg-navy-900 text-gold-400 font-bold flex items-center justify-center flex-shrink-0 text-xs">
                        {step.step}
                      </span>
                      <div>
                        <h4 className="font-bold text-navy-950 text-sm">{step.title}</h4>
                        <p className="text-slate-600 mt-0.5 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Required Documents */}
            {service.requiredDocuments && service.requiredDocuments.length > 0 && (
              <div className="bg-cream-50 p-7 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
                <h3 className="font-serif text-lg font-bold text-navy-950 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-gold-600" />
                  <span>Required Documents Checklist</span>
                </h3>
                <div className="space-y-2 text-xs text-slate-700">
                  {service.requiredDocuments.map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Disclaimer if present */}
            {service.disclaimer && (
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs leading-relaxed flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <span>{service.disclaimer}</span>
              </div>
            )}
          </div>

          {/* Right Column: Fast Form */}
          <div className="lg:col-span-4 bg-white p-7 rounded-2xl border border-slate-200/90 shadow-luxury lg:sticky lg:top-24 space-y-5">
            <div className="border-b border-slate-100 pb-3">
              <span className="text-[10px] uppercase font-bold text-gold-600 tracking-wider">Fast Response</span>
              <h3 className="font-serif text-lg font-bold text-navy-950 mt-0.5">
                Enquire for {service.title}
              </h3>
              <p className="text-xs text-slate-500">
                Direct coordination with Morya Properties team
              </p>
            </div>

            {submitted ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-serif font-bold text-navy-950">Enquiry Received!</h4>
                <p className="text-xs text-slate-600">We will call you at {phone} to proceed.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                {errorMsg && (
                  <div className="p-2.5 rounded-lg bg-red-50 text-red-700 border border-red-200">
                    {errorMsg}
                  </div>
                )}

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Ramesh Patil"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                    required
                  />
                </div>

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
                  <label className="block font-semibold text-slate-700 mb-1">Pune Locality</label>
                  <input
                    type="text"
                    placeholder="Dhankawadi, Katraj, Bibwewadi..."
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Specific Questions</label>
                  <textarea
                    rows={2}
                    placeholder="Any specific questions regarding timing, fee, or document requirements..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-navy-900 hover:bg-navy-800 text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md disabled:opacity-70"
                >
                  <Send className="w-4 h-4 text-gold-400" />
                  <span>{submitting ? 'Submitting...' : 'Submit Service Enquiry'}</span>
                </button>
              </form>
            )}

            <div className="pt-2 border-t border-slate-100">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hello Nilesh Tarde, I am interested in: ${service.title}. Please provide more information.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
