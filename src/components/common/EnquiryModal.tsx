import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Phone, User, Mail, MapPin, IndianRupee } from 'lucide-react';
import { useProperties } from '../../context/PropertyContext';
import { BUSINESS_INFO } from '../../data/mockData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
  defaultItemTitle?: string;
  defaultItemId?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = 'buy',
  defaultItemTitle = '',
  defaultItemId = '',
}) => {
  const { submitEnquiry } = useProperties();

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceCategory, setServiceCategory] = useState(defaultCategory);
  const [interestTitle, setInterestTitle] = useState(defaultItemTitle);
  const [preferredLocation, setPreferredLocation] = useState('');
  const [budgetRange, setBudgetRange] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (isOpen) {
      setServiceCategory(defaultCategory);
      setInterestTitle(defaultItemTitle);
      setErrorMsg('');
      setSubmitted(false);
    }
  }, [isOpen, defaultCategory, defaultItemTitle]);

  if (!isOpen) return null;

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
        interestItemId: defaultItemId || undefined,
        interestTitle: interestTitle || undefined,
        preferredLocation,
        budgetRange,
        message: message || `Enquiry for ${serviceCategory} - ${interestTitle || 'Services'}`
      });

      if (res.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(res.message);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Something went wrong. Please call us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-navy-900 px-6 py-5 text-white flex justify-between items-center border-b border-navy-800">
          <div>
            <h3 className="font-serif text-lg font-bold text-white">
              Connect With Morya Properties
            </h3>
            <p className="text-xs text-gold-400 mt-0.5">
              Personalized property guidance & essential multi-services in Pune
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-serif text-xl font-bold text-navy-950">
                Enquiry Successfully Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{fullName}</strong>. Our consultant (Nilesh Tarde / team) will review your requirements and reach out to you at <strong>{phone}</strong> promptly.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-navy-900 text-white rounded-xl text-xs font-semibold hover:bg-navy-800 transition-colors"
                >
                  Close Window
                </button>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(`Hi Nilesh Tarde, I just submitted an inquiry for: ${interestTitle || serviceCategory}. My name is ${fullName}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200">
                  {errorMsg}
                </div>
              )}

              {interestTitle && (
                <div className="p-3 rounded-xl bg-gold-50/70 border border-gold-200/80 text-xs text-navy-900 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-gold-800 block text-[11px] uppercase">Selected Item</span>
                    <span className="font-medium text-slate-800">{interestTitle}</span>
                  </div>
                </div>
              )}

              {/* Service Category */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Service Category <span className="text-red-500">*</span>
                </label>
                <select
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none bg-slate-50/50"
                  required
                >
                  <option value="buy">Property Buying (Residential / Plots)</option>
                  <option value="sell">Property Selling & Valuation</option>
                  <option value="rent">Property Rental & Tenant Matching</option>
                  <option value="commercial">Commercial Property (Office / Shop / Showroom)</option>
                  <option value="loans">Loan Assistance & EMI Guidance</option>
                  <option value="insurance">Insurance Guidance & Consultation</option>
                  <option value="documentation">Registered Rent Agreement & Documentation</option>
                  <option value="general">General Real Estate Consulting</option>
                </select>
              </div>

              {/* Two Column Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Ramesh Patil"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      placeholder="10-digit number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Email & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Location in Pune
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Dhankawadi, Katraj, Bibwewadi..."
                      value={preferredLocation}
                      onChange={(e) => setPreferredLocation(e.target.value)}
                      className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Budget / Timeline
                </label>
                <div className="relative">
                  <IndianRupee className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="e.g. ₹50L - ₹75L or Ready to move in 1 month"
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full pl-9 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Requirements / Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Share any specific requirements (e.g. 2 BHK facing East, urgent biometric appointment, shop required for pharmacy...)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-navy-900 hover:bg-navy-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70"
              >
                {loading ? (
                  <span>Submitting Securely...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-gold-400" />
                    <span>Submit Enquiry</span>
                  </>
                )}
              </button>

              <p className="text-[10px] text-slate-400 text-center">
                We value your privacy. Your details are used strictly for genuine consultation by Morya Properties.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
