import React, { useState } from 'react';
import { 
  Building2, Shield, Landmark, FileText, 
  Layers, CheckCircle2, ArrowRight, Info 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { ServiceCard } from '../components/common/ServiceCard';
import { EnquiryModal } from '../components/common/EnquiryModal';
import { useProperties } from '../context/PropertyContext';
import { ServiceItem, ServiceCategory } from '../types';

export const Services: React.FC = () => {
  const { services } = useProperties();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalCategory, setModalCategory] = useState('general');

  const filteredServices = services.filter(service => {
    if (selectedCategory === 'all') return true;
    return service.category === selectedCategory;
  });

  const handleEnquiry = (service: ServiceItem) => {
    setModalTitle(service.title);
    setModalCategory(service.category);
    setModalOpen(true);
  };

  return (
    <div className="bg-cream-100 min-h-screen pb-20">
      <SEO
        title="Real Estate & Essential Multi-Services in Pune"
        description="Comprehensive real estate buying, selling, leasing, home loan guidance, insurance consultation, and registered rent agreement documentation in Dhankawadi, Pune."
        canonical="https://moryapropertiesandmultiservices.com/services"
      />

      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              One-Stop Real Estate & Documentation Hub
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Our Professional Services
            </h1>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed font-light">
              From residential property buying and commercial lease structuring to government registered rent agreements and home loan assistance, we provide verified guidance at every step.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200">
          {[
            { id: 'all', label: 'All Services' },
            { id: 'real_estate', label: 'Real Estate' },
            { id: 'commercial', label: 'Commercial' },
            { id: 'loans', label: 'Loan Assistance' },
            { id: 'insurance', label: 'Insurance Consultation' },
            { id: 'documentation', label: 'Documentation' },
            { id: 'consulting', label: 'Valuation & Advisory' },
          ].map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-navy-900 text-gold-400 shadow-md font-bold'
                  : 'bg-white text-slate-600 hover:text-navy-950 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, idx) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={idx}
              onEnquire={handleEnquiry}
            />
          ))}
        </div>

        {/* Advisory / Disclaimer Notice Box */}
        <div className="mt-16 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-luxury space-y-3">
          <div className="flex items-center gap-2 text-navy-900 font-bold text-sm">
            <Info className="w-5 h-5 text-gold-600 flex-shrink-0" />
            <span>Statutory Guidance & Transparency Notice</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Morya Properties and Multi Services provides professional property consultancy and documentation coordination. For <strong>Loan Assistance</strong>, guidance is provided in conjunction with accredited public and private lending institutions; credit approval is determined exclusively by the respective bank or NBFC. For <strong>Insurance Consultation</strong>, we assist in identifying suitable risk coverage policies from IRDAI-registered insurance providers.
          </p>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-navy-800 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Need Assistance With a Specialized Property Requirement?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-light">
              Connect with Nilesh Ramchandra Tarde and our documentation desk in Dhankawadi for personalized consultation.
            </p>
          </div>

          <button
            onClick={() => { setModalTitle('General Services Consultation'); setModalCategory('general'); setModalOpen(true); }}
            className="btn-gold px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-gold-glow flex-shrink-0"
          >
            Request Consultation
          </button>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCategory={modalCategory}
        defaultItemTitle={modalTitle}
      />
    </div>
  );
};
