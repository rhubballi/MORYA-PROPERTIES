import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, BedDouble, Square, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { Property } from '../../types';
import { BUSINESS_INFO } from '../../data/mockData';

interface PropertyCardProps {
  property: Property;
  index?: number;
  onEnquire?: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, index = 0, onEnquire }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Nilesh Tarde (Morya Properties), I am inquiring about: ${property.title} in ${property.location} (${property.priceDisplay}). Please share more details.`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.55, 
        delay: (index % 3) * 0.12, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
      className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-luxury hover:shadow-luxury-hover transition-shadow duration-300 flex flex-col group will-change-transform"
    >
      {/* Property Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={property.featuredImage}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80";
          }}
        />

        {/* Listing Type Tag (Sale / Rent) */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-md ${
            property.listingType === 'sale' 
              ? 'bg-navy-900 text-gold-400 border border-gold-500/40' 
              : 'bg-emerald-800 text-white border border-emerald-600'
          }`}>
            {property.listingType === 'sale' ? 'For Sale' : 'For Rent'}
          </span>

          <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/95 text-navy-950 backdrop-blur-sm shadow-sm">
            {property.propertyType}
          </span>
        </div>

        {/* Notice Badge for Demo / Sample Showcase listings */}
        {property.isSampleListing && (
          <div className="absolute top-3 right-3 z-10">
            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500 text-navy-950 font-sans shadow-md border border-amber-600">
              Representative Showcase
            </span>
          </div>
        )}

        {/* Price Overlay Bar */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy-950/90 via-navy-950/50 to-transparent p-4 flex justify-between items-end text-white">
          <div>
            <div className="text-[10px] uppercase font-semibold text-gold-400 tracking-wider">Asking Price</div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
              {property.priceDisplay}
            </div>
          </div>
          <span className="text-[11px] text-slate-300 bg-navy-900/80 px-2 py-0.5 rounded border border-navy-700/60">
            {property.possessionStatus}
          </span>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
            <span className="font-medium text-slate-700 truncate">{property.location}, {property.city}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-base sm:text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors line-clamp-1 leading-snug">
            <Link to={`/properties/${property.id}`}>
              {property.title}
            </Link>
          </h3>

          {/* Key Specs Bar */}
          <div className="grid grid-cols-3 gap-2 py-3 mt-3 border-y border-slate-100 text-slate-600 text-xs">
            {property.bedrooms !== undefined && property.bedrooms > 0 ? (
              <div className="flex items-center gap-1.5">
                <BedDouble className="w-4 h-4 text-slate-400" />
                <span className="font-medium">{property.bedrooms} BHK</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-slate-400" />
                <span className="font-medium">{property.furnishing}</span>
              </div>
            )}

            <div className="flex items-center gap-1.5">
              <Square className="w-4 h-4 text-slate-400" />
              <span className="font-medium">{property.carpetArea} sq.ft</span>
            </div>

            <div className="flex items-center gap-1 text-right justify-end text-slate-500 truncate">
              <span>{property.furnishing}</span>
            </div>
          </div>

          {/* Short snippet */}
          <p className="text-xs text-slate-500 line-clamp-2 mt-2 leading-relaxed">
            {property.description}
          </p>
        </div>

        {/* Card Actions */}
        <div className="pt-2 flex items-center gap-2">
          <Link
            to={`/properties/${property.id}`}
            className="flex-1 py-2.5 px-3 bg-navy-900 hover:bg-navy-800 text-white rounded-xl text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1 group/btn shadow-sm"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-400 group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border border-emerald-200 transition-all hover:scale-105 active:scale-95"
            title="Inquire via WhatsApp"
            aria-label="WhatsApp Inquiry"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
