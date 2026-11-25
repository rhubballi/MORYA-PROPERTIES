import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, ChevronDown, 
  Building2, Home, KeyRound, ShieldCheck, 
  FileText, Landmark, UserCheck, Briefcase
} from 'lucide-react';
import { BUSINESS_INFO } from '../../data/mockData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [propertiesDropdown, setPropertiesDropdown] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setPropertiesDropdown(false);
    setServicesDropdown(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isPropertySectionActive = 
    isActive('/properties') || 
    isActive('/buy') || 
    isActive('/sell') || 
    isActive('/rent') || 
    isActive('/commercial');

  const isServiceSectionActive = 
    isActive('/services') || 
    isActive('/loans') || 
    isActive('/insurance') || 
    isActive('/documentation') || 
    isActive('/other-services');

  return (
    <>
      {/* Top Bar - Clean & Minimal */}
      <div className="bg-navy-950 text-slate-300 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-navy-800/80">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="text-slate-300">Dhankawadi, Pune – 411043</span>
            <span className="hidden sm:inline text-navy-600">•</span>
            <span className="hidden sm:inline text-gold-400/90 font-medium">Real Estate & Essential Multi-Services</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-slate-400 hidden md:inline">Hours: 10:00 AM – 8:00 PM</span>
            <span className="hidden md:inline text-navy-600">|</span>
            <Link 
              to="/admin" 
              className="text-slate-400 hover:text-gold-400 transition-colors flex items-center gap-1.5 text-[11px]"
            >
              <UserCheck className="w-3 h-3 text-gold-500" />
              <span>Staff Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled 
            ? 'bg-navy-900/98 backdrop-blur-md shadow-lg py-3 border-b border-navy-800' 
            : 'bg-navy-900 py-3.5 border-b border-navy-800/70'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Brand Identity */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 flex items-center justify-center text-navy-950 shadow-gold-glow group-hover:scale-105 transition-transform">
                <Building2 className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-lg font-bold tracking-tight text-white leading-tight">
                  MORYA <span className="text-gold-400">PROPERTIES</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-sans font-medium uppercase tracking-widest text-slate-300">
                  & Multi Services • Pune
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links - Spacious & Clean */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <Link
                to="/"
                className={`text-sm font-medium transition-colors hover:text-gold-400 ${
                  isActive('/') && location.pathname === '/'
                    ? 'text-gold-400 font-semibold'
                    : 'text-slate-200'
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`text-sm font-medium transition-colors hover:text-gold-400 ${
                  isActive('/about')
                    ? 'text-gold-400 font-semibold'
                    : 'text-slate-200'
                }`}
              >
                About Us
              </Link>

              {/* Properties Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setPropertiesDropdown(true)}
                onMouseLeave={() => setPropertiesDropdown(false)}
              >
                <Link
                  to="/properties"
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-gold-400 py-1 ${
                    isPropertySectionActive
                      ? 'text-gold-400 font-semibold'
                      : 'text-slate-200'
                  }`}
                >
                  <span>Properties</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${propertiesDropdown ? 'rotate-180 text-gold-400' : ''}`} />
                </Link>

                {propertiesDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-64 rounded-xl bg-navy-950 border border-navy-800 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <Link to="/properties" className="flex items-center gap-2.5 px-4 py-2 text-xs text-slate-200 hover:bg-navy-900 hover:text-gold-400 transition-colors">
                      <Building2 className="w-3.5 h-3.5 text-gold-400" />
                      <div>
                        <div className="font-semibold">All Properties in Pune</div>
                        <div className="text-[10px] text-slate-400">Browse complete property listings</div>
                      </div>
                    </Link>
                    <Link to="/buy" className="flex items-center gap-2.5 px-4 py-2 text-xs text-slate-200 hover:bg-navy-900 hover:text-gold-400 transition-colors">
                      <Home className="w-3.5 h-3.5 text-gold-400" />
                      <div>
                        <div className="font-semibold">Buy Property</div>
                        <div className="text-[10px] text-slate-400">Residential flats, apartments & plots</div>
                      </div>
                    </Link>
                    <Link to="/sell" className="flex items-center gap-2.5 px-4 py-2 text-xs text-slate-200 hover:bg-navy-900 hover:text-gold-400 transition-colors">
                      <KeyRound className="w-3.5 h-3.5 text-gold-400" />
                      <div>
                        <div className="font-semibold">Sell Property</div>
                        <div className="text-[10px] text-slate-400">List your property & free valuation</div>
                      </div>
                    </Link>
                    <Link to="/rent" className="flex items-center gap-2.5 px-4 py-2 text-xs text-slate-200 hover:bg-navy-900 hover:text-gold-400 transition-colors">
                      <Home className="w-3.5 h-3.5 text-gold-400" />
                      <div>
                        <div className="font-semibold">Rent Property</div>
                        <div className="text-[10px] text-slate-400">Flats & tenant placement</div>
                      </div>
                    </Link>
                    <Link to="/commercial" className="flex items-center gap-2.5 px-4 py-2 text-xs text-slate-200 hover:bg-navy-900 hover:text-gold-400 transition-colors">
                      <Briefcase className="w-3.5 h-3.5 text-gold-400" />
                      <div>
                        <div className="font-semibold">Commercial Spaces</div>
                        <div className="text-[10px] text-slate-400">Shops, offices & showrooms</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* Multi-Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setServicesDropdown(true)}
                onMouseLeave={() => setServicesDropdown(false)}
              >
                <Link
                  to="/services"
                  className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-gold-400 py-1 ${
                    isServiceSectionActive
                      ? 'text-gold-400 font-semibold'
                      : 'text-slate-200'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-gold-400' : ''}`} />
                </Link>

                {servicesDropdown && (
                  <div className="absolute top-full left-0 mt-1 w-64 rounded-xl bg-navy-950 border border-navy-800 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <Link to="/services" className="flex items-center gap-2.5 px-4 py-2 text-xs text-slate-200 hover:bg-navy-900 hover:text-gold-400 transition-colors">
                      <Building2 className="w-3.5 h-3.5 text-gold-400" />
                      <div>
                        <div className="font-semibold">All Services Catalogue</div>
                        <div className="text-[10px] text-slate-400">Real estate & multi-services overview</div>
                      </div>
                    </Link>
                    <Link to="/loans" className="flex items-center gap-2.5 px-4 py-2 text-xs text-slate-200 hover:bg-navy-900 hover:text-gold-400 transition-colors">
                      <Landmark className="w-3.5 h-3.5 text-gold-400" />
                      <div>
                        <div className="font-semibold">Loan Assistance & EMI</div>
                        <div className="text-[10px] text-slate-400">Home loan guidance with partner banks</div>
                      </div>
                    </Link>
                    <Link to="/insurance" className="flex items-center gap-2.5 px-4 py-2 text-xs text-slate-200 hover:bg-navy-900 hover:text-gold-400 transition-colors">
                      <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
                      <div>
                        <div className="font-semibold">Insurance Consultation</div>
                        <div className="text-[10px] text-slate-400">Property & risk advisory</div>
                      </div>
                    </Link>
                    <Link to="/documentation" className="flex items-center gap-2.5 px-4 py-2 text-xs text-slate-200 hover:bg-navy-900 hover:text-gold-400 transition-colors">
                      <FileText className="w-3.5 h-3.5 text-gold-400" />
                      <div>
                        <div className="font-semibold">Registered Rent Agreement</div>
                        <div className="text-[10px] text-slate-400">Doorstep biometric e-registration</div>
                      </div>
                    </Link>
                    <Link to="/other-services" className="flex items-center gap-2.5 px-4 py-2 text-xs text-slate-200 hover:bg-navy-900 hover:text-gold-400 transition-colors">
                      <Home className="w-3.5 h-3.5 text-gold-400" />
                      <div>
                        <div className="font-semibold">Property Valuation & Care</div>
                        <div className="text-[10px] text-slate-400">NRI caretaking & valuation reports</div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className={`text-sm font-medium transition-colors hover:text-gold-400 ${
                  isActive('/contact')
                    ? 'text-gold-400 font-semibold'
                    : 'text-slate-200'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right Action: Single Clean Phone Pill (No Get In Touch button) */}
            <div className="hidden lg:flex items-center">
              <a
                href={`tel:${BUSINESS_INFO.phones[0].number}`}
                className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-navy-800/80 hover:bg-navy-800 text-slate-200 hover:text-gold-400 border border-navy-700/80 text-xs transition-all group"
                title="Call our Pune property desk"
              >
                <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <span className="font-bold text-white tracking-wide">{BUSINESS_INFO.phones[0].display}</span>
                </div>
              </a>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phones[0].number}`}
                className="w-9 h-9 rounded-lg bg-navy-800 flex items-center justify-center text-gold-400 border border-navy-700"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-navy-800 text-slate-200 hover:text-white border border-navy-700 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-950 border-b border-navy-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                location.pathname === '/' ? 'bg-navy-800 text-gold-400 font-bold' : 'text-slate-200'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                isActive('/about') ? 'bg-navy-800 text-gold-400 font-bold' : 'text-slate-200'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/properties"
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                isActive('/properties') ? 'bg-navy-800 text-gold-400 font-bold' : 'text-slate-200'
              }`}
            >
              Properties
            </Link>

            <div className="pt-2 pb-1 border-t border-navy-800/60">
              <div className="text-[11px] font-semibold text-gold-400 uppercase tracking-wider px-3 mb-1">
                Real Estate
              </div>
              <div className="grid grid-cols-2 gap-1.5 px-2">
                <Link to="/buy" className="py-1.5 px-2 bg-navy-900 rounded text-xs text-slate-300 hover:text-gold-400">
                  • Buy Property
                </Link>
                <Link to="/sell" className="py-1.5 px-2 bg-navy-900 rounded text-xs text-slate-300 hover:text-gold-400">
                  • Sell Property
                </Link>
                <Link to="/rent" className="py-1.5 px-2 bg-navy-900 rounded text-xs text-slate-300 hover:text-gold-400">
                  • Rent Property
                </Link>
                <Link to="/commercial" className="py-1.5 px-2 bg-navy-900 rounded text-xs text-slate-300 hover:text-gold-400">
                  • Commercial
                </Link>
              </div>
            </div>

            <div className="pt-2 pb-1 border-t border-navy-800/60">
              <div className="text-[11px] font-semibold text-gold-400 uppercase tracking-wider px-3 mb-1">
                Multi-Services
              </div>
              <Link to="/services" className="block px-3 py-1.5 text-xs text-slate-300 hover:text-gold-400">
                • All Services Overview
              </Link>
              <Link to="/loans" className="block px-3 py-1.5 text-xs text-slate-300 hover:text-gold-400">
                • Loan Assistance & EMI Calculator
              </Link>
              <Link to="/insurance" className="block px-3 py-1.5 text-xs text-slate-300 hover:text-gold-400">
                • Insurance Consultation
              </Link>
              <Link to="/documentation" className="block px-3 py-1.5 text-xs text-slate-300 hover:text-gold-400">
                • Registered Rent Agreement (Biometric)
              </Link>
              <Link to="/other-services" className="block px-3 py-1.5 text-xs text-slate-300 hover:text-gold-400">
                • Property Management & Valuation
              </Link>
            </div>

            <div className="pt-2 border-t border-navy-800/60">
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive('/contact') ? 'bg-navy-800 text-gold-400 font-bold' : 'text-slate-200'
                }`}
              >
                Contact Us
              </Link>
            </div>

            <div className="pt-2">
              <a
                href={`tel:${BUSINESS_INFO.phones[0].number}`}
                className="w-full py-2.5 px-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-gold-400 text-xs font-semibold flex items-center justify-center gap-2 border border-navy-700"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {BUSINESS_INFO.phones[0].display}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
