import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Shield, Users, Award, CheckCircle2, 
  MapPin, Phone, Mail, ArrowRight, HelpCircle 
} from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { EnquiryModal } from '../components/common/EnquiryModal';
import { BUSINESS_INFO, VERIFIED_TEAM } from '../data/mockData';

export const About: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const faqs = [
    {
      q: "What services does Morya Properties and Multi Services provide?",
      a: "We provide residential and commercial property sales, property buying assistance, rentals and leasing, loan assistance with leading banks, insurance consultation, and registered leave & license agreement documentation with doorstep biometric service."
    },
    {
      q: "Which areas in Pune do you specialize in?",
      a: "Our primary expertise centers on South and West Pune, including Dhankawadi, Bibwewadi, Ambegaon BK, Katraj, Taljai, Pune-Satara Road, Sahakar Nagar, Swargate, Dhayari, and surrounding Pune Metropolitan areas."
    },
    {
      q: "Do you help first-time home buyers with legal verification?",
      a: "Yes. We guide first-time buyers through every step of the process, from shortlisting RERA-registered projects to physical inspection, title document search, negotiation, and final sub-registrar registration."
    },
    {
      q: "Can you assist with registered rent agreements without visiting government offices?",
      a: "Yes! We provide government-approved e-registration of leave and license agreements with doorstep biometric fingerprint capture, ensuring complete legal validity within 24 to 48 hours."
    },
    {
      q: "How can I schedule a consultation or property visit?",
      a: "You can call us directly at +91-9763915533, message on WhatsApp, or submit an enquiry form on our website to fix an appointment."
    }
  ];

  return (
    <div className="bg-cream-100 min-h-screen">
      <SEO
        title="About Us | Morya Properties and Multi Services"
        description="Learn about Morya Properties and Multi Services, our verified consultant Nilesh Ramchandra Tarde, our client-first approach, and real estate services in Dhankawadi, Pune."
        canonical="https://moryapropertiesandmultiservices.com/about"
      />

      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 border-b border-navy-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400">
              <Building2 className="w-4 h-4 text-gold-500" />
              <span>Company Profile & Philosophy</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              About Morya Properties <br />
              <span className="text-gold-400">& Multi Services</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-light">
              Founded on the pillars of transparency, reliability, and client satisfaction, we are dedicated to simplifying real estate transactions and essential property services across Pune.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story & Approach */}
      <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                Our Foundation
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950 leading-snug">
                Your Dependable Real Estate Navigator in South Pune
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Navigating property markets often involves dealing with complex title papers, price variations, and cumbersome paperwork. At <strong>Morya Properties and Multi Services</strong>, we bridge this gap by offering a single trusted window for all property requirements.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Located near Panchvati Society in Dhankawadi, Pune, our business has grown through word-of-mouth recommendations from satisfied families, property owners, and commercial retail tenants. We combine granular local knowledge of Pune’s neighbourhoods with strict professional ethics.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-cream-50 border border-slate-200">
                  <div className="font-serif text-2xl font-bold text-navy-950">100%</div>
                  <div className="text-xs text-slate-600 mt-1">Verified Documentation Focus</div>
                </div>
                <div className="p-4 rounded-xl bg-cream-50 border border-slate-200">
                  <div className="font-serif text-2xl font-bold text-navy-950">Zero</div>
                  <div className="text-xs text-slate-600 mt-1">Hidden Charges or Terms</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Pune Real Estate Architecture"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
              Guiding Principles
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-luxury space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center">
                <Shield className="w-6 h-6 text-gold-500" />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-950">
                Absolute Transparency
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We present realistic market rates, clear title histories, and unvarnished facts so our clients make well-informed, prudent decisions.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-luxury space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center">
                <Users className="w-6 h-6 text-gold-500" />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-950">
                Customer-Centric Care
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every client requirement is unique. Whether finding an affordable rental flat or acquiring a commercial shop, we listen closely and deliver personalized service.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-luxury space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center">
                <Award className="w-6 h-6 text-gold-500" />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-950">
                Legal Diligence
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                From government registered agreements to Index-II and title verification, we handle every detail with thorough legal and administrative diligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Team Section */}
      <section className="py-16 lg:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
              Leadership & Consultants
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Meet Our Verified Team
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Dedicated professionals who guide you with local market insight and personal accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VERIFIED_TEAM.map(member => (
              <div
                key={member.id}
                className="bg-cream-50 rounded-2xl border border-slate-200/80 overflow-hidden shadow-luxury p-6 flex flex-col justify-between space-y-5"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center font-serif text-2xl font-bold mb-4 shadow-md">
                    {member.name.charAt(0)}
                  </div>

                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-lg font-bold text-navy-950">
                      {member.name}
                    </h3>
                    {member.isVerified && (
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                        Verified
                      </span>
                    )}
                  </div>

                  <div className="text-xs font-medium text-gold-600 mt-1">
                    {member.role}
                  </div>

                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    Specialization: {member.specialization}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 space-y-2 text-xs">
                  <a
                    href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center gap-2 text-slate-700 hover:text-gold-600 font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-600" />
                    <span>{member.phone}</span>
                  </a>
                  {member.email && (
                    <div className="flex items-center gap-2 text-slate-500">
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      <span>{member.email}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy-950 text-white rounded-3xl p-8 sm:p-12 border border-navy-800 shadow-2xl">
            <div className="max-w-3xl space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
                Local Coverage
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Service Localities in Pune
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We actively facilitate properties, commercial spaces, and registered agreements across prime Pune sectors:
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {BUSINESS_INFO.serviceAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-navy-900 text-xs text-slate-200 border border-navy-800 flex items-center gap-1.5"
                  >
                    <MapPin className="w-3 h-3 text-gold-400" />
                    <span>{area}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
              Clear Answers
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-950">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-cream-50 p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2"
              >
                <h3 className="font-serif text-base font-bold text-navy-950 flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-gold-600 flex-shrink-0 mt-1" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setModalOpen(true)}
              className="btn-gold px-7 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md"
            >
              Have a Specific Question? Contact Us
            </button>
          </div>
        </div>
      </section>

      <EnquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCategory="general"
        defaultItemTitle="General Consultation"
      />
    </div>
  );
};
