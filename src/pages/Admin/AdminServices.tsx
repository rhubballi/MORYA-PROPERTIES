import React from 'react';
import { Layers, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProperties } from '../../context/PropertyContext';

export const AdminServices: React.FC = () => {
  const { services } = useProperties();

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
        <div>
          <h1 className="font-serif text-2xl font-bold text-navy-950">
            Multi-Services Catalogue
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Overview of real estate, loans, insurance, and documentation services presented across the website.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map(s => (
          <div key={s.id} className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-14 h-14 object-cover rounded-xl"
                />
                <div>
                  <h3 className="font-serif text-base font-bold text-navy-950">{s.title}</h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold-600 bg-gold-50 px-2 py-0.5 rounded">
                    {s.category}
                  </span>
                </div>
              </div>

              <Link
                to={`/services/${s.slug}`}
                target="_blank"
                className="p-1.5 text-slate-400 hover:text-navy-950"
                title="Preview Service Page"
              >
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {s.shortDescription}
            </p>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400">Features count: {s.features.length}</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700">
                Active on Website
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
