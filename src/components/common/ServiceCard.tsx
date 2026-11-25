import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, Building2, KeyRound, Landmark, ShieldCheck, 
  FileText, Layers, ArrowRight, CheckCircle2 
} from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
  onEnquire?: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0, onEnquire }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-6 h-6 text-gold-500" />;
      case 'Building2': return <Building2 className="w-6 h-6 text-gold-500" />;
      case 'KeyRound': return <KeyRound className="w-6 h-6 text-gold-500" />;
      case 'Landmark': return <Landmark className="w-6 h-6 text-gold-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-gold-500" />;
      case 'FileText': return <FileText className="w-6 h-6 text-gold-500" />;
      case 'Layers': return <Layers className="w-6 h-6 text-gold-500" />;
      default: return <Building2 className="w-6 h-6 text-gold-500" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.55, 
        delay: (index % 4) * 0.1, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      whileHover={{ y: -7, transition: { duration: 0.25, ease: 'easeOut' } }}
      className="bg-white rounded-2xl border border-slate-200/90 shadow-luxury hover:shadow-luxury-hover transition-shadow duration-300 flex flex-col justify-between overflow-hidden group will-change-transform"
    >
      {/* Top Banner / Image thumbnail */}
      <div className="h-44 overflow-hidden relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent"></div>
        <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-navy-900/90 backdrop-blur-md border border-navy-700/80 shadow-md group-hover:scale-110 transition-transform duration-300">
          {getIcon(service.icon)}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h3 className="font-serif text-lg font-bold text-navy-950 group-hover:text-gold-600 transition-colors leading-snug">
            {service.title}
          </h3>

          <p className="text-xs text-slate-600 mt-2 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Key Bullet Features */}
          <div className="mt-4 space-y-2 border-t border-slate-100 pt-3">
            {service.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
          <Link
            to={`/services/${service.slug}`}
            className="text-xs font-semibold text-navy-900 hover:text-gold-600 flex items-center gap-1 transition-colors group/link"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 text-gold-500 group-hover/link:translate-x-1 transition-transform" />
          </Link>

          {onEnquire && (
            <button
              onClick={() => onEnquire(service)}
              className="px-3.5 py-1.5 rounded-lg bg-gold-50 text-gold-800 hover:bg-gold-500 hover:text-white border border-gold-200 text-xs font-semibold transition-all hover:scale-105 active:scale-95"
            >
              Enquire
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};
