import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Briefcase, TrendingUp, CheckCircle2, 
  MapPin, ArrowRight, ShieldCheck, Phone, Send 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PropertyCard } from '../components/common/PropertyCard';
import { EnquiryModal } from '../components/common/EnquiryModal';
import { useProperties } from '../context/PropertyContext';
import { Property } from '../types';

export const Commercial: React.FC = () => {
  const { properties } = useProperties();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Commercial Property Consultation');

  const commercialProps = properties.filter(p => p.category === 'commercial');

  const handleEnquiry = (prop: Property) => {
    setModalTitle(`Commercial Inquiry: ${prop.title}`);
    setModalOpen(true);
  };

  return (
    <div className="bg-cream-100 min-h-screen pb-20">
      <SEO
        title="Commercial Properties & Retail Shops in Pune"
        description="Explore prime commercial retail shops, corporate offices, and showrooms in Dhankawadi, Swargate, Pune-Satara Road, and Bibwewadi with Morya Properties."
        canonical="https://moryapropertiesandmultiservices.com/commercial"
      />

      {/* Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              Retail Spaces, Offices & Investments
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Commercial Real Estate in Pune
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light">
              Discover high-visibility retail shops, corporate office suites, and investment assets across strategic commercial corridors along Teen Hatti Chowk, Dhankawadi, and Swargate.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="btn-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
              >
                Request Commercial Spaces
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Asset Types */}
      <section className="py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Commercial Asset Specializations
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Tailored spaces to match your business footfall, frontage, and power infrastructure needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-cream-50 border border-slate-200/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-serif text-base font-bold text-navy-950">Retail Shops</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ground floor shops with glass frontage suited for pharmacies, apparel, groceries, or clinics in bustling residential markets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream-50 border border-slate-200/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-serif text-base font-bold text-navy-950">Corporate Offices</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Furnished and plug-and-play office suites with meeting cabins, power backup, and high-speed internet provisions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream-50 border border-slate-200/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-serif text-base font-bold text-navy-950">Large Showrooms</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Expansive floor plates along Pune-Satara Road and highway junctions with dedicated customer parking and signages.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream-50 border border-slate-200/80 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="font-serif text-base font-bold text-navy-950">High-Yield Investments</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pre-leased commercial assets offering consistent monthly rental returns and steady capital appreciation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Commercial Listings */}
      <section className="py-16 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-600">Available Portfolio</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 mt-1">
                Commercial Properties in Pune
              </h2>
            </div>
            <Link to="/properties" className="text-xs font-bold text-navy-900 hover:text-gold-600 flex items-center gap-1">
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {commercialProps.map((prop, idx) => (
              <PropertyCard key={prop.id} property={prop} index={idx} onEnquire={handleEnquiry} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Lease Structuring */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Commercial Lease Consulting
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              We assist landlords and commercial tenants with robust legal lease drafting:
            </p>
          </div>

          <div className="bg-cream-50 p-6 rounded-2xl border border-slate-200/80 space-y-3 text-xs sm:text-sm text-slate-700">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
              <span>Lock-in period and lease tenure clauses to ensure revenue predictability</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
              <span>Standard 5% - 15% annual or triennial rent escalation schedules</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
              <span>Fit-out rent-free periods during interior fitment work</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
              <span>Security deposit terms, CAM charges, and utility meter transfers</span>
            </div>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCategory="commercial"
        defaultItemTitle={modalTitle}
      />
    </div>
  );
};
