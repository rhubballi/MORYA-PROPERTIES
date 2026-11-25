import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  KeyRound, CheckCircle2, ShieldCheck, Users, 
  ArrowRight, FileText, Phone, MessageCircle 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PropertyCard } from '../components/common/PropertyCard';
import { EnquiryModal } from '../components/common/EnquiryModal';
import { useProperties } from '../context/PropertyContext';
import { Property } from '../types';

export const Rent: React.FC = () => {
  const { properties } = useProperties();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Rental Property Assistance');

  const rentProperties = properties.filter(p => p.listingType === 'rent');

  const handleEnquiry = (prop: Property) => {
    setModalTitle(`Rental Inquiry: ${prop.title}`);
    setModalOpen(true);
  };

  return (
    <div className="bg-cream-100 min-h-screen pb-20">
      <SEO
        title="Flats and Commercial Properties for Rent in Pune"
        description="Find residential flats and commercial spaces for rent in Dhankawadi, Katraj, Bibwewadi, and Pune. Registered rent agreement with biometric verification."
        canonical="https://moryapropertiesandmultiservices.com/rent"
      />

      {/* Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              Residential & Commercial Leasing
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Rent & Lease Properties in Pune
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light">
              We connect responsible tenants with verified property owners across Dhankawadi and South Pune, providing complete registered rent agreement and police intimation support.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
              >
                Find a Rental Flat
              </button>
              <Link
                to="/documentation"
                className="px-6 py-3 rounded-xl text-xs font-semibold bg-navy-800 hover:bg-navy-700 text-white border border-navy-700 transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-gold-400" />
                <span>Need Rent Agreement Only?</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dual Pathway: For Landlords vs Tenants */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Landlords */}
            <div className="bg-cream-50 p-8 rounded-3xl border border-slate-200/80 space-y-4 shadow-luxury">
              <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-950">
                For Property Landlords
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Looking to rent your flat, bungalow, or commercial shop without dealing with endless inquiries and unverified tenants?
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-500" />
                  <span>Pre-screened salaried or business tenants</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-500" />
                  <span>Doorstep biometric registered rent agreement</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-500" />
                  <span>Standardized deposit & maintenance covenants</span>
                </li>
              </ul>
              <button
                onClick={() => { setModalTitle('List My Property for Rent (Landlord)'); setModalOpen(true); }}
                className="btn-gold px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider mt-2"
              >
                List Property for Rent
              </button>
            </div>

            {/* For Tenants */}
            <div className="bg-cream-50 p-8 rounded-3xl border border-slate-200/80 space-y-4 shadow-luxury">
              <div className="w-12 h-12 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center">
                <KeyRound className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-950">
                For Prospective Tenants
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Searching for a comfortable 1 BHK, 2 BHK, or 3 BHK flat near educational hubs or highway connectivity in South Pune?
              </p>
              <ul className="space-y-2 text-xs text-slate-700 pt-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-500" />
                  <span>Verified owner titles with no subletting disputes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-500" />
                  <span>Transparent security deposit terms</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-500" />
                  <span>Fast move-in with valid legal agreement copy</span>
                </li>
              </ul>
              <button
                onClick={() => { setModalTitle('Tenant Requirement Request'); setModalOpen(true); }}
                className="px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-gold-400 text-xs font-bold uppercase tracking-wider mt-2 transition-colors"
              >
                Submit Tenant Requirement
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rental Properties */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-600">Leasing Options</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-1">
                Available Rental Properties
              </h2>
            </div>
            <Link to="/properties" className="text-xs font-bold text-navy-900 hover:text-gold-600 flex items-center gap-1">
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentProperties.map((prop, idx) => (
              <PropertyCard key={prop.id} property={prop} index={idx} onEnquire={handleEnquiry} />
            ))}
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCategory="rent"
        defaultItemTitle={modalTitle}
      />
    </div>
  );
};
