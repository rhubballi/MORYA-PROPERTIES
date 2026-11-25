import React, { useState } from 'react';
import { 
  Landmark, Calculator, CheckCircle2, ShieldCheck, 
  ArrowRight, Info, FileText, Phone 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { EMICalculator } from '../components/common/EMICalculator';
import { EnquiryModal } from '../components/common/EnquiryModal';

export const Loans: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Home Loan Guidance');

  return (
    <div className="bg-cream-100 min-h-screen pb-20">
      <SEO
        title="Home Loan Guidance & Loan Assistance in Pune"
        description="Get home loan guidance, EMI calculator, and loan against property assistance with partner banks and NBFCs in Pune through Morya Properties."
        canonical="https://moryapropertiesandmultiservices.com/loans"
      />

      {/* Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              Financial Facilitation & Guidance
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Home Loan Guidance & Assistance
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light">
              Securing competitive interest rates and seamless sanctioning is critical for your dream home purchase. We assist with eligibility assessment, document preparation, and bank comparison with leading financial institutions in Pune.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
              >
                Apply for Loan Guidance
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
        {/* Important Regulatory Disclaimer */}
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950 text-xs flex items-start gap-3 shadow-sm">
          <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="font-bold text-amber-950">Statutory Notice:</strong> Morya Properties and Multi Services is a real estate and documentation facilitation service. We provide loan advisory and application assistance with partner financial institutions and do not directly disburse funds or guarantee credit approval. Loan sanction, tenure, and interest rates remain subject to the sole discretion and underwriting policies of the respective lending bank or NBFC.
          </div>
        </div>

        {/* Interactive EMI Calculator */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600">Plan Your Budget</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Calculate Your Monthly EMI
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <EMICalculator onApplyLoan={() => setModalOpen(true)} />
          </div>
        </div>

        {/* Loan Products We Guide You Through */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600">Assistance Offerings</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Loan Categories Supported
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-luxury space-y-3">
              <Landmark className="w-8 h-8 text-gold-500" />
              <h3 className="font-serif text-lg font-bold text-navy-950">
                1. Home Loans
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For purchase of ready-to-move flats, under-construction apartments, independent bungalows, and home construction.
              </p>
              <ul className="text-xs text-slate-700 space-y-1 pt-2 border-t border-slate-100">
                <li>• Floating & fixed rate comparisons</li>
                <li>• Up to 80% - 90% property valuation</li>
                <li>• Tenures up to 30 years</li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-luxury space-y-3">
              <Landmark className="w-8 h-8 text-gold-500" />
              <h3 className="font-serif text-lg font-bold text-navy-950">
                2. Loan Against Property (LAP)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Unlock equity from your existing residential or commercial property in Pune for business expansion or major capital expenses.
              </p>
              <ul className="text-xs text-slate-700 space-y-1 pt-2 border-t border-slate-100">
                <li>• Lower interest compared to personal loans</li>
                <li>• Flexible collateralized loan structuring</li>
                <li>• Minimal documentation hurdles</li>
              </ul>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-luxury space-y-3">
              <Landmark className="w-8 h-8 text-gold-500" />
              <h3 className="font-serif text-lg font-bold text-navy-950">
                3. Balance Transfer
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transfer your existing home loan to partner banks offering significantly lower interest rates and reduced monthly EMI burden.
              </p>
              <ul className="text-xs text-slate-700 space-y-1 pt-2 border-t border-slate-100">
                <li>• Top-up loan facility alongside transfer</li>
                <li>• Lower processing charges facilitation</li>
                <li>• Substantial lifetime interest savings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Documentation Checklist Grid */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-luxury">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy-950">
              Required Documents For Loan Application
            </h3>
            <p className="text-xs text-slate-500">
              Prepare the following papers for fast eligibility assessment and preliminary sanction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-slate-700">
            {/* Salaried Checklist */}
            <div className="p-6 rounded-2xl bg-cream-50 border border-slate-200/80 space-y-3">
              <h4 className="font-serif text-base font-bold text-navy-950 border-b border-slate-200 pb-2">
                For Salaried Applicants
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>KYC: Aadhaar Card, PAN Card, Passport Photos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>Last 3 months Salary Slips & Company ID</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>Last 6 months Salary Account Bank Statement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>Latest Form 16 / 2 Years ITR</span>
                </li>
              </ul>
            </div>

            {/* Self-Employed Checklist */}
            <div className="p-6 rounded-2xl bg-cream-50 border border-slate-200/80 space-y-3">
              <h4 className="font-serif text-base font-bold text-navy-950 border-b border-slate-200 pb-2">
                For Self-Employed / Business Owners
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>KYC: Aadhaar Card, PAN Card, Business Registration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>Last 2-3 years ITR with computation, Balance Sheet & P&L</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>Last 12 months Current & Savings Bank Statements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>GST Returns (Last 12 months)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setModalOpen(true)}
              className="btn-gold px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
            >
              Request Free Loan Assessment
            </button>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCategory="loans"
        defaultItemTitle={modalTitle}
      />
    </div>
  );
};
