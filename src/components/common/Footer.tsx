import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Phone, Mail, MapPin, Clock, 
  ChevronRight, Shield, Award, ArrowUp 
} from 'lucide-react';
import { BUSINESS_INFO } from '../../data/mockData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-8 border-t-2 border-gold-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-navy-800">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-950 shadow-gold-glow flex-shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white block leading-tight">
                  MORYA PROPERTIES
                </span>
                <span className="text-[10px] text-gold-400 font-medium uppercase tracking-wider block">
                  & Multi Services • Pune
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Committed to delivering reliable property solutions, transparent consulting, and essential property-related documentation services across Dhankawadi, Bibwewadi, and Pune metropolitan region.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-gold-400">
              <Shield className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>Transparent • Reliable • Professional</span>
            </div>

            <div className="flex items-center gap-2 pt-1 text-xs text-slate-400">
              <Award className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>Lead Consultant: Nilesh Ramchandra Tarde</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-white font-semibold text-base border-b border-navy-800 pb-2">
              Real Estate Options
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/properties" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>All Properties in Pune</span>
                </Link>
              </li>
              <li>
                <Link to="/buy" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Buy Residential Properties</span>
                </Link>
              </li>
              <li>
                <Link to="/sell" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Sell Your Property with Us</span>
                </Link>
              </li>
              <li>
                <Link to="/rent" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Rentals & Flat Leasing</span>
                </Link>
              </li>
              <li>
                <Link to="/commercial" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Commercial Shops & Offices</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>About Our Company & Team</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Multi-Services */}
          <div className="space-y-4">
            <h3 className="font-serif text-white font-semibold text-base border-b border-navy-800 pb-2">
              Essential Multi-Services
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/loans" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Home Loan Guidance & EMI</span>
                </Link>
              </li>
              <li>
                <Link to="/insurance" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Property Insurance Consultation</span>
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Registered Rent Agreement (Biometric)</span>
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Index-II & Stamp Duty Search</span>
                </Link>
              </li>
              <li>
                <Link to="/other-services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Property Valuation & Caretaking</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
                  <span>Complete Service Catalogue</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="space-y-4">
            <h3 className="font-serif text-white font-semibold text-base border-b border-navy-800 pb-2">
              Office & Contact
            </h3>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-snug">
                  {BUSINESS_INFO.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${BUSINESS_INFO.phones[0].number}`} className="hover:text-gold-400 transition-colors font-medium">
                    {BUSINESS_INFO.phones[0].display}
                  </a>
                  <a href={`tel:${BUSINESS_INFO.phones[1].number}`} className="hover:text-gold-400 transition-colors text-slate-400">
                    {BUSINESS_INFO.phones[1].display}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-gold-400 transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>{BUSINESS_INFO.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory & Advisory Disclaimer */}
        <div className="py-6 border-b border-navy-800 text-[11px] text-slate-400 leading-relaxed">
          <p>
            <strong className="text-slate-300">Important Advisory & Statutory Disclaimer:</strong> Morya Properties and Multi Services operates as a professional real estate consultancy, documentation facilitator, and property solutions coordinator in Pune, Maharashtra. We provide loan assistance through authorized banking and NBFC partners; all credit sanctions and disbursements remain under the sole discretion of the respective lending institution. For insurance services, we provide guidance and facilitation; policy issuance and underwriting are handled exclusively by IRDAI-registered insurance providers. Sample property listings are marked as representative showcases for initial client discovery and are updated dynamically as verified inventory changes.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Morya Properties and Multi Services. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-gold-400 transition-colors">Dhankawadi, Pune 411043</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gold-400 hover:text-gold-300 transition-colors"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
