import React, { useState } from 'react';
import { 
  Building2, Search, Filter, RotateCcw, 
  MapPin, SlidersHorizontal, Info, PlusCircle 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PropertyCard } from '../components/common/PropertyCard';
import { EnquiryModal } from '../components/common/EnquiryModal';
import { useProperties } from '../context/PropertyContext';
import { Property } from '../types';
import { BUSINESS_INFO } from '../data/mockData';

export const Properties: React.FC = () => {
  const { filters, setFilters, resetFilters, filteredProperties } = useProperties();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalCategory, setModalCategory] = useState('buy');
  const [modalId, setModalId] = useState('');

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const handleEnquiry = (property: Property) => {
    setModalCategory(property.listingType === 'sale' ? 'buy' : 'rent');
    setModalTitle(property.title);
    setModalId(property.id);
    setModalOpen(true);
  };

  return (
    <div className="bg-cream-100 min-h-screen pb-20">
      <SEO
        title="Properties for Sale and Rent in Pune"
        description="Browse apartments, flats, commercial shops, office spaces, and row houses in Dhankawadi, Bibwewadi, Katraj, and Pune with Morya Properties and Multi Services."
        canonical="https://moryapropertiesandmultiservices.com/properties"
      />

      {/* Page Header */}
      <section className="bg-navy-950 text-white py-12 lg:py-16 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
              Pune Real Estate Catalog
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Discover Available Properties
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
              Find verified residential apartments, independent homes, retail shops, and commercial offices across Dhankawadi and South Pune.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content & Filter Engine */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Notice Banner regarding Sample / Representative Listings */}
        <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3 shadow-sm">
          <Info className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="font-semibold text-amber-950">Notice to Visitors:</strong> Listings tagged with{' '}
            <span className="px-1.5 py-0.5 rounded bg-amber-200 text-amber-900 font-medium">Representative Showcase</span> are sample profiles demonstrating available configurations in Dhankawadi and Pune. To submit a new verified property for sale or rent, or to request custom matches, click the{' '}
            <button onClick={() => { setModalTitle('Submit My Property / Custom Requirement'); setModalOpen(true); }} className="underline font-bold text-navy-950">
              Submit Requirement
            </button>{' '}
            button.
          </div>
        </div>

        {/* Desktop Filter Toolbar */}
        <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-luxury mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-slate-100 pb-5 mb-5">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-gold-600" />
              <span className="font-serif font-bold text-navy-950 text-base">Filter & Search</span>
              <span className="text-xs text-slate-500 ml-2">
                Showing <strong>{filteredProperties.length}</strong> matching properties
              </span>
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
              {/* Sort Dropdown */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-slate-500 hidden sm:inline">Sort by:</span>
                <select
                  value={filters.sortBy}
                  onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value as any }))}
                  className="px-3 py-1.5 rounded-lg border border-slate-300 text-xs bg-slate-50 font-medium focus:ring-1 focus:ring-gold-500 focus:outline-none"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="area-desc">Area: Largest First</option>
                </select>
              </div>

              <button
                onClick={resetFilters}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-navy-950 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Filter Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {/* Search Query */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Keywords or locality..."
                value={filters.searchQuery}
                onChange={(e) => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
                className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none"
              />
            </div>

            {/* Listing Type (Buy / Rent) */}
            <div>
              <select
                value={filters.listingType}
                onChange={(e) => setFilters(prev => ({ ...prev, listingType: e.target.value as any }))}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none bg-white font-medium"
              >
                <option value="all">All Status (Sale & Rent)</option>
                <option value="sale">For Sale (Buy)</option>
                <option value="rent">For Rent</option>
              </select>
            </div>

            {/* Category (Residential / Commercial) */}
            <div>
              <select
                value={filters.category}
                onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value as any }))}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none bg-white"
              >
                <option value="all">All Categories</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
              </select>
            </div>

            {/* Property Type */}
            <div>
              <select
                value={filters.propertyType}
                onChange={(e) => setFilters(prev => ({ ...prev, propertyType: e.target.value }))}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none bg-white"
              >
                <option value="">All Property Types</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa / Row House</option>
                <option value="Shop">Retail Shop</option>
                <option value="Office Space">Commercial Office</option>
                <option value="Plot">Plot / Land</option>
              </select>
            </div>

            {/* Bedrooms (BHK) */}
            <div>
              <select
                value={filters.bedrooms}
                onChange={(e) => setFilters(prev => ({ ...prev, bedrooms: e.target.value }))}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none bg-white"
              >
                <option value="">Any Bedrooms</option>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4+ BHK</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, idx) => (
              <PropertyCard
                key={property.id}
                property={property}
                index={idx}
                onEnquire={handleEnquiry}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200/90 shadow-sm max-w-lg mx-auto space-y-4">
            <Building2 className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-serif text-lg font-bold text-navy-950">
              No matching properties found
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We couldn't find any property matching your current filter selections. Try resetting filters or tell us what you're looking for.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={resetFilters}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-semibold text-navy-950 transition-colors"
              >
                Reset All Filters
              </button>
              <button
                onClick={() => { setModalTitle('Custom Property Requirement'); setModalOpen(true); }}
                className="btn-gold px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                Submit Requirement
              </button>
            </div>
          </div>
        )}

        {/* Unlisted Requirement Box */}
        <div className="mt-16 bg-navy-950 text-white rounded-3xl p-8 sm:p-10 border border-navy-800 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Can't Find What You Are Looking For?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-light">
              We have off-market client properties and upcoming residential listings across Dhankawadi, Katraj, and Bibwewadi. Tell us your exact requirement.
            </p>
          </div>

          <button
            onClick={() => { setModalTitle('Off-Market & Custom Property Search'); setModalOpen(true); }}
            className="btn-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-gold-glow flex-shrink-0"
          >
            Submit Custom Requirement
          </button>
        </div>
      </div>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCategory={modalCategory}
        defaultItemTitle={modalTitle}
        defaultItemId={modalId}
      />
    </div>
  );
};
