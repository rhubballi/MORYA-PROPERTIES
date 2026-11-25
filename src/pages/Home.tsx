import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Search, ArrowRight, ShieldCheck, 
  Users, CheckCircle2, Phone, Star, MapPin, 
  Calendar, Sparkles, Award, TrendingUp, Check
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { PropertyCard } from '../components/common/PropertyCard';
import { ServiceCard } from '../components/common/ServiceCard';
import { EnquiryModal } from '../components/common/EnquiryModal';
import { useProperties } from '../context/PropertyContext';
import { BUSINESS_INFO, VERIFIED_TEAM, INITIAL_TESTIMONIALS } from '../data/mockData';
import { Property, ServiceItem } from '../types';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { properties, services, setFilters } = useProperties();

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCategory, setModalCategory] = useState('buy');
  const [modalTitle, setModalTitle] = useState('');
  const [modalId, setModalId] = useState('');

  // Hero Quick Search State
  const [heroType, setHeroType] = useState<'sale' | 'rent'>('sale');
  const [heroLocation, setHeroLocation] = useState('');
  const [heroPropType, setHeroPropType] = useState('');

  // Featured Properties active category tab
  const [activePropertyTab, setActivePropertyTab] = useState<'all' | 'residential' | 'commercial' | 'sale' | 'rent'>('all');

  const handleHeroSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setFilters(prev => ({
      ...prev,
      listingType: heroType,
      location: heroLocation,
      propertyType: heroPropType,
    }));
    navigate('/properties');
  };

  const openEnquiry = (category: string, title: string = '', id: string = '') => {
    setModalCategory(category);
    setModalTitle(title);
    setModalId(id);
    setModalOpen(true);
  };

  const handlePropertyEnquiry = (property: Property) => {
    openEnquiry(property.listingType === 'sale' ? 'buy' : 'rent', property.title, property.id);
  };

  const handleServiceEnquiry = (service: ServiceItem) => {
    openEnquiry(service.category, service.title, service.id);
  };

  // Filter properties for featured section
  const featuredProperties = properties.filter(prop => {
    if (activePropertyTab === 'all') return true;
    if (activePropertyTab === 'residential') return prop.category === 'residential';
    if (activePropertyTab === 'commercial') return prop.category === 'commercial';
    if (activePropertyTab === 'sale') return prop.listingType === 'sale';
    if (activePropertyTab === 'rent') return prop.listingType === 'rent';
    return true;
  }).slice(0, 6);

  return (
    <div className="bg-cream-100 min-h-screen overflow-hidden">
      <SEO
        title="Find Your Perfect Property in Pune"
        description="Morya Properties and Multi Services provides trustworthy real estate advisory, residential and commercial properties, loan assistance, insurance consultation, and registered rent agreement documentation in Pune."
        canonical="https://moryapropertiesandmultiservices.com/"
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[640px] lg:min-h-[760px] flex items-center justify-center bg-navy-950 overflow-hidden">
        {/* Architectural Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.12, opacity: 0.7 }}
            animate={{ scale: 1.02, opacity: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
            alt="Luxury Real Estate Pune"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/98 via-navy-950/88 to-navy-900/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/70"></div>

          {/* Ambient Gold Glow Orbs */}
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gold-500/15 blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-navy-500/20 blur-3xl pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-white w-full">
          <div className="max-w-3xl space-y-6">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-gold-500/50 backdrop-blur-md text-gold-300 text-xs font-semibold shadow-gold-glow"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
              <span>Premier Real Estate & Essential Multi-Services • Pune</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.14]"
            >
              Find Your Perfect Property. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500">
                Build Your Future With Us.
              </span>
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-light"
            >
              Your trusted partner for property solutions and multiple services in Pune. We help you make confident decisions with transparent guidance, verified paperwork, and dedicated professional support.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                to="/properties"
                className="btn-gold px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase shadow-gold-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group"
              >
                <span>Explore Properties</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button
                onClick={() => openEnquiry('general', 'General Consultation')}
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-navy-800/80 hover:bg-navy-800 border border-navy-700/80 backdrop-blur-sm transition-all hover:border-gold-500/50 flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <Calendar className="w-4 h-4 text-gold-400" />
                <span>Schedule Consultation</span>
              </button>
            </motion.div>
          </div>

          {/* Quick Search Filtering Box with smooth entrance */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/30 text-navy-950 max-w-4xl"
          >
            {/* Buy / Rent Switch */}
            <div className="flex items-center gap-2 mb-4 border-b border-slate-200 pb-3">
              <button
                type="button"
                onClick={() => setHeroType('sale')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  heroType === 'sale'
                    ? 'bg-navy-900 text-gold-400 shadow-md scale-105'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
                }`}
              >
                Buy Property
              </button>
              <button
                type="button"
                onClick={() => setHeroType('rent')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  heroType === 'rent'
                    ? 'bg-navy-900 text-gold-400 shadow-md scale-105'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-100'
                }`}
              >
                Rent Property
              </button>
            </div>

            {/* Form Inputs */}
            <form onSubmit={handleHeroSearch} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 items-center">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                  Pune Location
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-gold-600 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Dhankawadi, Katraj, Bibwewadi..."
                    value={heroLocation}
                    onChange={(e) => setHeroLocation(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                  Property Type
                </label>
                <select
                  value={heroPropType}
                  onChange={(e) => setHeroPropType(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-gold-500 focus:outline-none bg-white transition-all"
                >
                  <option value="">All Types</option>
                  <option value="Apartment">Apartment / Flat</option>
                  <option value="Villa">Villa / Row House</option>
                  <option value="Shop">Retail Shop</option>
                  <option value="Office Space">Commercial Office</option>
                  <option value="Plot">Plot / Land</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">
                  Service Area
                </label>
                <div className="text-xs text-slate-700 bg-slate-100/90 px-3 py-2.5 rounded-xl border border-slate-200 truncate font-medium">
                  Dhankawadi & South Pune
                </div>
              </div>

              <div className="sm:col-span-3 lg:col-span-1 pt-2 sm:pt-0">
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-navy-900 hover:bg-navy-800 text-gold-400 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-1.5 h-[42px] hover:scale-102 active:scale-98"
                >
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT US SECTION - Smooth Staggered Scroll Movement */}
      <section className="py-20 lg:py-26 bg-white border-b border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
                  alt="Morya Properties Real Estate Consulting"
                  className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent"></div>
              </div>

              {/* Verified Consultant Callout Pill */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="absolute -bottom-6 -right-2 sm:right-6 bg-navy-900 text-white p-5 rounded-2xl shadow-2xl border border-gold-500/40 max-w-xs hover:scale-105 transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold text-base flex-shrink-0">
                    <Award className="w-5 h-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{VERIFIED_TEAM[0].name}</div>
                    <div className="text-[11px] text-gold-400">{VERIFIED_TEAM[0].role}</div>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-navy-800 text-[11px] text-slate-300">
                  Shop No. 23, Sr. No. 11/2, Opp. Panchvati Society, Dhankawadi, Pune
                </div>
              </motion.div>
            </motion.div>

            {/* Text Description Column */}
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 text-gold-600 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-gold-500" />
                <span>About Morya Properties and Multi Services</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy-950 leading-snug">
                Committed to Reliable Guidance, Transparency, and Lasting Trust.
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                At Morya Properties and Multi Services, we are committed to providing reliable property solutions and professional services tailored to our customers' needs. Our focus is on building lasting relationships through transparency, trust, and customer satisfaction.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-cream-50 border border-slate-200/80 hover:border-gold-400/60 transition-colors shadow-sm">
                  <div className="font-serif text-base font-bold text-navy-950 mb-1">Our Mission</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To deliver transparent, client-first real estate facilitation and streamlined essential services that bring complete peace of mind.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-cream-50 border border-slate-200/80 hover:border-gold-400/60 transition-colors shadow-sm">
                  <div className="font-serif text-base font-bold text-navy-950 mb-1">Our Vision</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    To be the most dependable property and multi-services partner in South Pune, known for integrity and personalized client care.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="btn-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={`tel:${BUSINESS_INFO.phones[0].number}`}
                  className="px-5 py-3 rounded-xl text-xs font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-2 hover:scale-105 active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-600" />
                  <span>Call {BUSINESS_INFO.phones[0].display}</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. OUR SERVICES SECTION - Staggered Card Entrance */}
      <section className="py-20 lg:py-26 bg-cream-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto space-y-3 mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
              Comprehensive Real Estate & Multi-Services
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy-950">
              Services Designed For Every Property Need
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              From discovering your dream residential home to registered leave & license agreements and home loan guidance, we facilitate seamless property solutions.
            </p>
          </motion.div>

          {/* Service Cards Grid with index-staggered Framer Motion */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={idx}
                onEnquire={handleServiceEnquiry}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-navy-900 text-gold-400 font-bold text-xs uppercase tracking-wider hover:bg-navy-800 hover:scale-105 active:scale-95 transition-all shadow-lg"
            >
              <span>View Full Services Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURED PROPERTIES SECTION - Filter Transitions & Fluid Cards */}
      <section className="py-20 lg:py-26 bg-white border-y border-slate-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                Property Portfolio in Pune
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy-950">
                Explore Our Featured Properties
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Handpicked residential apartments, row houses, and commercial retail shops across Dhankawadi, Bibwewadi, Katraj, and surrounding Pune localities.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200 shadow-inner">
              {[
                { id: 'all', label: 'All' },
                { id: 'residential', label: 'Residential' },
                { id: 'commercial', label: 'Commercial' },
                { id: 'sale', label: 'For Sale' },
                { id: 'rent', label: 'For Rent' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActivePropertyTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all relative ${
                    activePropertyTab === tab.id
                      ? 'bg-navy-900 text-gold-400 shadow-md scale-102'
                      : 'text-slate-600 hover:text-navy-950 hover:bg-white/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Properties Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {featuredProperties.map((property, idx) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  index={idx}
                  onEnquire={handlePropertyEnquiry}
                />
              ))}
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-gold-400 font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <span>Explore All Property Listings</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 5. WHY CHOOSE US SECTION - Dynamic Staggered Reveal */}
      <section className="py-20 lg:py-26 bg-cream-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto space-y-3 mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
              Our Core Strengths
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy-950">
              Why Choose Morya Properties and Multi Services?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              A transparent, dependable approach to property consulting and documentation that puts your peace of mind first.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Customer-Focused Approach",
                description: "We invest time in understanding your exact requirements, budget limits, and lifestyle preferences before recommending options.",
                icon: Users
              },
              {
                title: "Transparent Communication",
                description: "No hidden charges, ambiguous clauses, or misleading claims. Clear valuation data and honest title verification from day one.",
                icon: ShieldCheck
              },
              {
                title: "Reliable Property Guidance",
                description: "In-depth local knowledge of Dhankawadi, Bibwewadi, Katraj, and Pune market trends to help you buy or sell at genuine value.",
                icon: Building2
              },
              {
                title: "Professional Service",
                description: "Prompt coordination, punctuality for property inspections, and polite, verified representation throughout negotiations.",
                icon: Award
              },
              {
                title: "Personalized Solutions",
                description: "Tailored assistance whether you are a first-time homebuyer, a commercial investor, or seeking rental agreements for your flat.",
                icon: Sparkles
              },
              {
                title: "Commitment to Satisfaction",
                description: "End-to-end support continuing right through registration, stamp duty, index-II issuance, and seamless key handover.",
                icon: CheckCircle2
              }
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
                  className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-luxury hover:shadow-luxury-hover transition-shadow duration-300 flex flex-col space-y-3 group will-change-transform"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-base sm:text-lg font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. HOW WE WORK TIMELINE - Interactive Steps */}
      <section className="py-20 lg:py-26 bg-navy-950 text-white relative overflow-hidden">
        {/* Ambient Back Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-gold-500/10 blur-[130px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto space-y-3 mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
              Clear 4-Step Process
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              How We Work With You
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              A structured roadmap ensuring your real estate journey or documentation service is simple, transparent, and prompt.
            </p>
          </motion.div>

          {/* Timeline Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Understand Requirements",
                description: "We discuss your specific needs, budget, preferred Pune locality, and timeline in detail."
              },
              {
                num: "02",
                title: "Explore Suitable Options",
                description: "We curate verified residential or commercial properties matching your exact specifications."
              },
              {
                num: "03",
                title: "Get Expert Assistance",
                description: "Accompanied site viewings, negotiation support, and title paper verification."
              },
              {
                num: "04",
                title: "Move Forward With Confidence",
                description: "Complete legal documentation, biometric agreement registration, and smooth transaction closure."
              }
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="bg-navy-900/90 border border-navy-800 p-6 rounded-2xl relative flex flex-col justify-between space-y-4 shadow-xl hover:border-gold-500/60 transition-all group will-change-transform"
              >
                <div>
                  <span className="font-serif text-3xl font-bold text-gold-400/80 block mb-2 group-hover:scale-110 group-hover:text-gold-300 transition-all origin-left">
                    {step.num}
                  </span>
                  <h3 className="font-serif text-base font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
                <div className="w-8 h-1 bg-gold-500 rounded group-hover:w-16 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS - Animated Cards */}
      <section className="py-20 lg:py-26 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto space-y-3 mb-14"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
              Verified Client Experiences
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-navy-950">
              What Our Customers Say
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Genuine feedback from home buyers, sellers, and landlords who trusted our real estate and documentation assistance in Pune.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INITIAL_TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -7, transition: { duration: 0.25 } }}
                className="bg-cream-50 p-7 rounded-2xl border border-slate-200/80 shadow-luxury hover:shadow-luxury-hover transition-shadow duration-300 flex flex-col justify-between space-y-4 will-change-transform"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-gold-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/70 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-navy-950">{t.name}</div>
                    <div className="text-[11px] text-slate-500">{t.location} • {t.serviceType}</div>
                  </div>
                  {t.isVerified && (
                    <span className="text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-medium">
                      Verified Client
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT & ENQUIRY SECTION - Zoom In Reveal */}
      <section className="py-20 lg:py-26 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-navy-900 rounded-3xl overflow-hidden shadow-2xl border border-navy-800 text-white p-8 sm:p-12 lg:p-16 relative"
          >
            {/* Ambient Corner Flare */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Left Column: Direct Info */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
                  Ready To Assist You
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white leading-snug">
                  Let's Find The Right Property Solution For You
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl font-light">
                  Whether you are planning to purchase an apartment, sell a commercial space, rent a flat, or require swift registered leave & license agreement documentation, we are here to assist.
                </p>

                <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <span>{BUSINESS_INFO.address.full}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                    <div className="flex gap-2">
                      <a href={`tel:${BUSINESS_INFO.phones[0].number}`} className="hover:text-gold-400 underline font-semibold">
                        {BUSINESS_INFO.phones[0].display}
                      </a>
                      <span>/</span>
                      <a href={`tel:${BUSINESS_INFO.phones[1].number}`} className="hover:text-gold-400">
                        {BUSINESS_INFO.phones[1].display}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <button
                    onClick={() => openEnquiry('general', 'Direct Inquiry from Homepage')}
                    className="btn-gold px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 active:scale-95 transition-all"
                  >
                    Send Direct Enquiry
                  </button>

                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Nilesh Tarde, I would like to consult regarding property services in Pune.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white transition-all hover:scale-105 active:scale-95 shadow-sm"
                  >
                    Quick WhatsApp Chat
                  </a>
                </div>
              </div>

              {/* Right Column: Office Callout Box */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25 }}
                className="lg:col-span-5 bg-navy-950 p-6 sm:p-8 rounded-2xl border border-navy-800 text-center space-y-4 shadow-xl"
              >
                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 text-gold-400 flex items-center justify-center mx-auto">
                  <Building2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white">
                  Visit Our Dhankawadi Office
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-light">
                  Conveniently located near Panchvati Society and Teen Hatti Chowk Road, Pune.
                </p>
                <div className="text-xs text-gold-400 font-semibold">
                  {BUSINESS_INFO.hours}
                </div>
                <Link
                  to="/contact"
                  className="w-full inline-block py-2.5 px-4 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-semibold transition-colors"
                >
                  View Map & Directions
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Unified Enquiry Modal */}
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
