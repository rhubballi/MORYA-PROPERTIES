import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  MapPin, BedDouble, Square, Shield, CheckCircle2, 
  Phone, MessageCircle, ArrowLeft, Calendar, Share2, 
  Home, Compass, Layers, Info, Send 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { useProperties } from '../context/PropertyContext';
import { BUSINESS_INFO } from '../data/mockData';

export const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getPropertyById, submitEnquiry } = useProperties();

  const property = getPropertyById(id || '');

  // Active gallery image
  const [activeImage, setActiveImage] = useState<string>(
    property?.images?.[0] || property?.featuredImage || ''
  );

  // Quick Inline Enquiry Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!property) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-cream-100 text-center">
        <Home className="w-12 h-12 text-slate-300 mb-4" />
        <h2 className="font-serif text-2xl font-bold text-navy-950 mb-2">Property Not Found</h2>
        <p className="text-xs text-slate-500 mb-6">The requested property listing does not exist or has been removed.</p>
        <Link to="/properties" className="btn-gold px-6 py-2.5 rounded-xl text-xs font-bold uppercase">
          Browse All Properties
        </Link>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Nilesh Tarde, I am interested in scheduling a visit for "${property.title}" in ${property.location} (${property.priceDisplay}). Please share more details.`
  )}`;

  const handleInlineEnquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    const clean = phone.replace(/[^0-9+]/g, '');
    if (clean.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    setSubmitting(true);
    try {
      const res = await submitEnquiry({
        fullName,
        phone,
        serviceCategory: property.listingType === 'sale' ? 'buy' : 'rent',
        interestItemId: property.id,
        interestTitle: property.title,
        preferredLocation: property.location,
        budgetRange: property.priceDisplay,
        message: `Schedule Visit Request for ${property.title}. Preferred Date: ${preferredDate || 'Earliest'}. Notes: ${notes || 'None'}`
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

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this property in ${property.location}: ${property.priceDisplay}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="bg-cream-100 min-h-screen pb-20">
      <SEO
        title={`${property.title} in ${property.location}`}
        description={`${property.description.slice(0, 155)}... Price: ${property.priceDisplay}. Contact Morya Properties.`}
        canonical={`https://moryapropertiesandmultiservices.com/properties/${property.id}`}
      />

      {/* Top Breadcrumb & Action bar */}
      <div className="bg-white border-b border-slate-200/80 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs">
          <Link
            to="/properties"
            className="flex items-center gap-1.5 text-slate-600 hover:text-navy-950 font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Property Listings</span>
          </Link>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-slate-600 hover:text-navy-950 transition-colors"
            title="Share this property"
          >
            <Share2 className="w-3.5 h-3.5 text-gold-600" />
            <span>Share</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Title and Top Highlights */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-4 mb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider ${
                property.listingType === 'sale' 
                  ? 'bg-navy-900 text-gold-400' 
                  : 'bg-emerald-800 text-white'
              }`}>
                {property.listingType === 'sale' ? 'For Sale' : 'For Rent'}
              </span>

              <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-slate-200 text-navy-950">
                {property.propertyType}
              </span>

              {property.isSampleListing && (
                <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-amber-100 text-amber-900 border border-amber-300">
                  Representative Showcase
                </span>
              )}
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-950 leading-tight">
              {property.title}
            </h1>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-600">
              <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <span>{property.address}, {property.location}, {property.city}</span>
            </div>
          </div>

          {/* Price Box */}
          <div className="bg-white p-4.5 rounded-2xl border border-slate-200/90 shadow-luxury text-left lg:text-right flex-shrink-0">
            <div className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">Asking Price</div>
            <div className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 text-gold-600">
              {property.priceDisplay}
            </div>
            {property.priceNegotiable && (
              <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium inline-block mt-0.5">
                Negotiable for genuine buyers
              </span>
            )}
          </div>
        </div>

        {/* Main Grid: Gallery & Details vs Inquiry Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Gallery & Details (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Gallery Container */}
            <div className="bg-white rounded-2xl p-3 border border-slate-200/90 shadow-luxury overflow-hidden">
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 relative">
                <img
                  src={activeImage || property.featuredImage}
                  alt={property.title}
                  className="w-full h-full object-cover transition-all duration-300"
                />
              </div>

              {/* Thumbnails row */}
              {property.images && property.images.length > 1 && (
                <div className="flex gap-2.5 mt-3 overflow-x-auto pb-1">
                  {property.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImage(img)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                        activeImage === img ? 'border-gold-500 scale-105 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Key Specifications Grid */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-luxury space-y-5">
              <h2 className="font-serif text-lg font-bold text-navy-950 border-b border-slate-100 pb-3">
                Overview & Property Specifications
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-cream-50 border border-slate-200/70">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Configuration</span>
                  <span className="font-bold text-navy-950 text-sm mt-0.5 block">
                    {property.bedrooms ? `${property.bedrooms} BHK` : property.propertyType}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-cream-50 border border-slate-200/70">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Carpet Area</span>
                  <span className="font-bold text-navy-950 text-sm mt-0.5 block">
                    {property.carpetArea} sq.ft
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-cream-50 border border-slate-200/70">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Possession</span>
                  <span className="font-bold text-navy-950 text-sm mt-0.5 block">
                    {property.possessionStatus}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-cream-50 border border-slate-200/70">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Furnishing</span>
                  <span className="font-bold text-navy-950 text-sm mt-0.5 block">
                    {property.furnishing}
                  </span>
                </div>

                {property.facing && (
                  <div className="p-3.5 rounded-xl bg-cream-50 border border-slate-200/70">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Facing</span>
                    <span className="font-semibold text-navy-950 text-xs mt-0.5 block">
                      {property.facing}
                    </span>
                  </div>
                )}

                {property.floor && (
                  <div className="p-3.5 rounded-xl bg-cream-50 border border-slate-200/70">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Floor Level</span>
                    <span className="font-semibold text-navy-950 text-xs mt-0.5 block">
                      {property.floor}
                    </span>
                  </div>
                )}

                {property.bathrooms !== undefined && property.bathrooms > 0 && (
                  <div className="p-3.5 rounded-xl bg-cream-50 border border-slate-200/70">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Bathrooms</span>
                    <span className="font-semibold text-navy-950 text-xs mt-0.5 block">
                      {property.bathrooms} Baths
                    </span>
                  </div>
                )}

                {property.balconies !== undefined && property.balconies > 0 && (
                  <div className="p-3.5 rounded-xl bg-cream-50 border border-slate-200/70">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Balconies</span>
                    <span className="font-semibold text-navy-950 text-xs mt-0.5 block">
                      {property.balconies} Balcony
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-luxury space-y-4">
              <h2 className="font-serif text-lg font-bold text-navy-950 border-b border-slate-100 pb-3">
                Property Description
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {property.description}
              </p>
            </div>

            {/* Amenities & Highlights */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-luxury space-y-4">
              <h2 className="font-serif text-lg font-bold text-navy-950 border-b border-slate-100 pb-3">
                Amenities & Features
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-cream-50 border border-slate-200/60 text-xs text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-gold-500 flex-shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Neighborhood */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-luxury space-y-4">
              <h2 className="font-serif text-lg font-bold text-navy-950 border-b border-slate-100 pb-3">
                Location & Neighborhood
              </h2>

              <div className="text-xs text-slate-700 space-y-1">
                <p><strong>Address:</strong> {property.address}</p>
                {property.landmark && <p><strong>Landmark:</strong> {property.landmark}</p>}
                <p><strong>City:</strong> {property.city}, Maharashtra</p>
              </div>

              {/* Static Map Pin Card */}
              <div className="p-4 rounded-xl bg-navy-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-gold-400" />
                  <div>
                    <div className="font-bold text-xs">{property.location}, Pune</div>
                    <div className="text-[10px] text-slate-300">Fast connectivity via Teen Hatti Chowk & Pune-Satara Road</div>
                  </div>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${property.location} Pune`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-navy-800 hover:bg-gold-500 hover:text-navy-950 text-gold-400 text-xs font-semibold transition-all border border-navy-700"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Schedule Visit / Inquiry Form (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Quick Visit Booking Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-luxury space-y-5">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[10px] uppercase font-bold text-gold-600 tracking-wider">Direct Assistance</span>
                <h3 className="font-serif text-lg font-bold text-navy-950 mt-0.5">
                  Schedule a Site Visit
                </h3>
                <p className="text-xs text-slate-500">
                  Accompanied inspection with Nilesh Tarde / Morya team
                </p>
              </div>

              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-50 text-emerald-800 text-xs text-center space-y-2 border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <p className="font-bold">Visit Request Received!</p>
                  <p className="text-slate-600">We will call you at {phone} to confirm the viewing time.</p>
                </div>
              ) : (
                <form onSubmit={handleInlineEnquiry} className="space-y-3.5 text-xs">
                  {errorMsg && (
                    <div className="p-2.5 rounded-lg bg-red-50 text-red-700 text-xs border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Anand Shinde"
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
                    <label className="block font-semibold text-slate-700 mb-1">Preferred Date / Time</label>
                    <input
                      type="text"
                      placeholder="e.g. This Saturday 11 AM"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">Notes / Questions</label>
                    <textarea
                      rows={2}
                      placeholder="Ask about price negotiation, society NOC, loan feasibility..."
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
                    <Calendar className="w-4 h-4 text-gold-400" />
                    <span>{submitting ? 'Submitting...' : 'Request Site Visit'}</span>
                  </button>
                </form>
              )}

              {/* Direct WhatsApp CTA */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${BUSINESS_INFO.phones[0].number}`}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-950 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-gold-600" />
                  <span>Call {BUSINESS_INFO.phones[0].display}</span>
                </a>
              </div>
            </div>

            {/* Consultant Profile Pill */}
            <div className="bg-cream-50 rounded-2xl p-5 border border-slate-200/80 text-xs space-y-2">
              <div className="font-bold text-navy-950 flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-gold-600" />
                <span>Verified Real Estate Agency</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Consultant: <strong>Nilesh Ramchandra Tarde</strong>
                <br />
                Office: Shop No. 23, Sr. No. 11/2, Opp. Panchvati Society, Dhankawadi, Pune.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
