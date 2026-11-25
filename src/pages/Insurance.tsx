import React, { useState } from 'react';
import { 
  ShieldCheck, CheckCircle2, AlertCircle, 
  Home, Building2, Info, ArrowRight 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { EnquiryModal } from '../components/common/EnquiryModal';

export const Insurance: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Property Insurance Consultation');

  return (
    <div className="bg-cream-100 min-h-screen pb-20">
      <SEO
        title="Property Insurance Consultation in Pune"
        description="Consultation for property risk protection, home structure, and shopkeeper insurance with IRDAI-registered providers through Morya Properties Pune."
        canonical="https://moryapropertiesandmultiservices.com/insurance"
      />

      {/* Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              Asset Protection & Risk Advisory
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Property Insurance Consultation
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light">
              Protecting your high-value real estate asset from fire, natural calamities, and third-party liabilities is essential. We offer impartial consultation to identify optimal coverage through accredited insurance providers.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
              >
                Request Insurance Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Mandatory Statutory Disclaimer */}
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs flex items-start gap-3 shadow-sm">
          <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="font-bold text-amber-950">Statutory Notice:</strong> Morya Properties and Multi Services acts strictly as a property and multi-services consultancy. We do not underwrite, sell, or issue insurance policies directly. All insurance products, underwriting decisions, and claim settlements are administered exclusively by IRDAI-registered insurance companies. Our role is limited to advisory facilitation and documentation coordination.
          </div>
        </div>

        {/* Insurance Consultation Pillars */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Coverage Solutions We Guide You Through
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Helping property owners evaluate risk parameters before policy enrollment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-luxury space-y-3">
              <Home className="w-8 h-8 text-gold-500" />
              <h3 className="font-serif text-lg font-bold text-navy-950">
                Home Structure & Reconstruction
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Covers physical damage to the residential building structure caused by fire, earthquake, lightning, explosion, floods, and storms.
              </p>
              <ul className="text-xs text-slate-700 space-y-1 pt-2 border-t border-slate-100">
                <li>• Reinstatement value calculations</li>
                <li>• Permanent fixtures & fittings</li>
                <li>• Society building common areas</li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-luxury space-y-3">
              <ShieldCheck className="w-8 h-8 text-gold-500" />
              <h3 className="font-serif text-lg font-bold text-navy-950">
                Home Contents & Electronics
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Protection for electrical appliances, furniture, expensive gadgets, and valuable household belongings against burglary and breakdown.
              </p>
              <ul className="text-xs text-slate-700 space-y-1 pt-2 border-t border-slate-100">
                <li>• Burglary & theft coverage</li>
                <li>• Mechanical/electrical breakdown</li>
                <li>• Valuable inventory declaration assistance</li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-luxury space-y-3">
              <Building2 className="w-8 h-8 text-gold-500" />
              <h3 className="font-serif text-lg font-bold text-navy-950">
                Shopkeeper & Commercial Risk
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Comprehensive multi-risk coverage designed for retail shops, offices, and commercial establishments in Pune.
              </p>
              <ul className="text-xs text-slate-700 space-y-1 pt-2 border-t border-slate-100">
                <li>• Stock-in-trade & inventory protection</li>
                <li>• Plate glass & neon sign damage</li>
                <li>• Public liability & cash-in-transit</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4-Step Consultation Process */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-luxury space-y-6">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950 border-b border-slate-100 pb-3">
            Our Consultation Process
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-slate-700">
            <div className="space-y-1.5">
              <span className="font-bold text-gold-600 text-sm">Step 01</span>
              <h4 className="font-serif text-sm font-bold text-navy-950">Asset Valuation</h4>
              <p className="text-slate-600">Assessing carpet area, construction cost, and replacement value of your property.</p>
            </div>

            <div className="space-y-1.5">
              <span className="font-bold text-gold-600 text-sm">Step 02</span>
              <h4 className="font-serif text-sm font-bold text-navy-950">Policy Comparison</h4>
              <p className="text-slate-600">Reviewing coverage options and premium schedules from accredited insurers.</p>
            </div>

            <div className="space-y-1.5">
              <span className="font-bold text-gold-600 text-sm">Step 03</span>
              <h4 className="font-serif text-sm font-bold text-navy-950">Document Submission</h4>
              <p className="text-slate-600">Submitting Index-II ownership documents and scheduling inspection if required.</p>
            </div>

            <div className="space-y-1.5">
              <span className="font-bold text-gold-600 text-sm">Step 04</span>
              <h4 className="font-serif text-sm font-bold text-navy-950">Policy Receipt</h4>
              <p className="text-slate-600">Assisting in policy delivery and explaining claim procedures in plain terms.</p>
            </div>
          </div>

          <div className="pt-4 text-center">
            <button
              onClick={() => setModalOpen(true)}
              className="btn-gold px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
            >
              Get Free Insurance Guidance
            </button>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCategory="insurance"
        defaultItemTitle={modalTitle}
      />
    </div>
  );
};
