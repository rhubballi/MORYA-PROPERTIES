import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Home, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center p-6 bg-cream-100">
      <SEO
        title="Page Not Found"
        description="The requested page could not be found on Morya Properties and Multi Services."
      />

      <div className="w-16 h-16 rounded-2xl bg-navy-900 text-gold-400 flex items-center justify-center mx-auto mb-4 shadow-luxury">
        <Building2 className="w-8 h-8" />
      </div>

      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-950 mb-2">404</h1>
      <h2 className="font-serif text-xl font-bold text-slate-800 mb-2">Page Not Found</h2>
      <p className="text-xs sm:text-sm text-slate-500 max-w-md mb-8 leading-relaxed">
        The page you are looking for may have been moved, renamed, or is temporarily unavailable.
      </p>

      <div className="flex gap-3">
        <Link
          to="/"
          className="btn-gold px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md"
        >
          <Home className="w-4 h-4" />
          <span>Go to Homepage</span>
        </Link>

        <Link
          to="/properties"
          className="px-6 py-2.5 rounded-xl bg-white border border-slate-300 text-navy-950 text-xs font-semibold hover:bg-slate-50 transition-colors"
        >
          Explore Properties
        </Link>
      </div>
    </div>
  );
};
