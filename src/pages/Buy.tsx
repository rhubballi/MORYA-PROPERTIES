import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, CheckCircle2, ShieldCheck, ArrowRight, 
  MapPin, Phone, MessageCircle, Search, HelpCircle 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PropertyCard } from '../components/common/PropertyCard';
import { EnquiryModal } from '../components/common/EnquiryModal';
import { useProperties } from '../context/PropertyContext';
import { BUSINESS_INFO } from '../data/mockData';
import { Property } from '../types';

export const Buy: React.FC = () => {
  const { properties } = useProperties();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Property Buying Assistance');

  const saleProperties = properties.filter(p => p.listingType === 'sale').slice(0, 6);

  const handleEnquiry = (prop: Property) => {
    setModalTitle(`Buying Inquiry: ${prop.title}`);
    setModalOpen(true);
  };

  return (
    <div className="bg-cream-100 min-h-screen pb-20">
      <SEO
        title="Buy Residential & Commercial Property in Pune"
        description="Explore verified flats, apartments, villas, and commercial properties for sale in Dhankawadi, Bibwewadi, Katraj, and Pune with Morya Properties."
        canonical="https://moryapropertiesandmultiservices.com/buy"
      />

      {/* Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              Residential & Commercial Acquisitions
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Buy Your Ideal Property in Pune
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light">
              Comprehensive guidance to discover, verify, negotiate, and purchase title-clear properties in Dhankawadi, Bibwewadi, and Pune with complete confidence.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
              >
                Submit Buyer Requirements
              </button>
              <Link
                to="/properties"
                className="px-6 py-3 rounded-xl text-xs font-semibold bg-navy-800 hover:bg-navy-700 text-white border border-navy-700 transition-colors"
              >
                Browse Listings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Support Pillars */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              How We Protect Home Buyers
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Transparent advisory minimizing purchase risks and saving you time and money.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-cream-50 border border-slate-200/80 space-y-3">
              <ShieldCheck className="w-8 h-8 text-gold-500" />
              <h3 className="font-serif text-base font-bold text-navy-950">
                1. Legal Title Verification
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We review Index-II records, sanctioned layout plans, RERA registration numbers, and encumbrance certificates to guarantee clear ownership.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream-50 border border-slate-200/80 space-y-3">
              <Building2 className="w-8 h-8 text-gold-500" />
              <h3 className="font-serif text-base font-bold text-navy-950">
                2. Market Comparative Pricing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Avoid paying inflated rates. We evaluate recent comparable transactions in Dhankawadi and nearby areas to negotiate fair pricing.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream-50 border border-slate-200/80 space-y-3">
              <CheckCircle2 className="w-8 h-8 text-gold-500" />
              <h3 className="font-serif text-base font-bold text-navy-950">
                3. End-to-End Registration Support
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                From agreement drafting and stamp duty calculation to scheduling at the sub-registrar office, we assist until keys are handed over.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties for Sale */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-600">Active Listings</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-1">
                Featured Properties For Sale
              </h2>
            </div>
            <Link to="/properties" className="text-xs font-bold text-navy-900 hover:text-gold-600 flex items-center gap-1">
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saleProperties.map((prop, idx) => (
              <PropertyCard key={prop.id} property={prop} index={idx} onEnquire={handleEnquiry} />
            ))}
          </div>
        </div>
      </section>

      {/* Buying Checklist */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Home Buyer's Checklist
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Essential documents and verifications required before finalizing any property purchase in Maharashtra.
            </p>
          </div>

          <div className="bg-cream-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4 text-xs sm:text-sm text-slate-700">
            {[
              "Verified Sale Deed & Complete Chain of Title Documents (Past 30 Years)",
              "Sanctioned Building Plan & Commencement Certificate (CC)",
              "Occupancy Certificate (OC) or Completion Certificate from PMC / PCMC",
              "RERA Registration Certificate & Project Details for under-construction projects",
              "Latest Property Tax Paid Receipts and Society NOC",
              "Encumbrance Certificate confirming absence of prior mortgage liens"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => setModalOpen(true)}
              className="btn-gold px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
            >
              Get Free Buying Guidance
            </button>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCategory="buy"
        defaultItemTitle={modalTitle}
      />
    </div>
  );
};
