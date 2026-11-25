import React, { useState } from 'react';
import { 
  Layers, CheckCircle2, ShieldCheck, Home, 
  MapPin, Phone, ArrowRight, Building2 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { EnquiryModal } from '../components/common/EnquiryModal';

export const OtherServices: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Property Management & Advisory');

  return (
    <div className="bg-cream-100 min-h-screen pb-20">
      <SEO
        title="Property Management & Valuation in Pune"
        description="Local property valuation reports, NRI property caretaking, and tenant verification services in Dhankawadi and South Pune with Morya Properties."
        canonical="https://moryapropertiesandmultiservices.com/other-services"
      />

      {/* Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              Specialized Property Solutions
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Property Management & Valuation
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light">
              Dependable local caretaking for out-of-town owners and NRIs, comparative localized market valuations, and tenant credential checks across South Pune.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
              >
                Request Management / Valuation
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-luxury space-y-3">
            <Building2 className="w-8 h-8 text-gold-500" />
            <h3 className="font-serif text-lg font-bold text-navy-950">
              NRI Property Caretaking
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              For property owners residing in other cities or overseas, we conduct periodic inspections, supervise maintenance, check utility bills, and ensure security.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
              <li>• Periodic visual photo & video reports</li>
              <li>• Key holding & emergency maintenance</li>
              <li>• Society maintenance bill settlements</li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-luxury space-y-3">
            <Layers className="w-8 h-8 text-gold-500" />
            <h3 className="font-serif text-lg font-bold text-navy-950">
              Comparative Property Valuation
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Accurate realistic valuation analysis for residential flats and commercial shops based on registered transaction rates, amenities, and age of structure.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
              <li>• Realistic pricing benchmarks</li>
              <li>• Family partition assessment advice</li>
              <li>• Pre-purchase valuation checks</li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-luxury space-y-3">
            <ShieldCheck className="w-8 h-8 text-gold-500" />
            <h3 className="font-serif text-lg font-bold text-navy-950">
              Tenant Background Verification
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Protect your rental asset with thorough employer verification, previous landlord references, and local police intimation submission.
            </p>
            <ul className="text-xs text-slate-700 space-y-1.5 pt-2 border-t border-slate-100">
              <li>• Identity & employment verification</li>
              <li>• Digital police verification filing</li>
              <li>• Clear leave & license covenants</li>
            </ul>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-navy-800 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Have an Out-of-Town Property in Pune?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-light">
              Trust Nilesh Ramchandra Tarde and our Dhankawadi team to manage inspections and tenancy renewals with utmost integrity.
            </p>
          </div>

          <button
            onClick={() => setModalOpen(true)}
            className="btn-gold px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-gold-glow flex-shrink-0"
          >
            Connect With Us
          </button>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCategory="consulting"
        defaultItemTitle={modalTitle}
      />
    </div>
  );
};
