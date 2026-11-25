import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, MessageSquare, AlertCircle, CheckCircle2, 
  Clock, Plus, Download, ArrowRight, ShieldCheck, Database 
} from 'lucide-react';
import { useProperties } from '../../context/PropertyContext';
import { isSupabaseConfigured } from '../../lib/supabase';

export const AdminDashboard: React.FC = () => {
  const { 
    properties, 
    enquiries, 
    services, 
    updateEnquiryStatus, 
    exportEnquiriesCSV, 
    resetToDemoData 
  } = useProperties();

  const totalEnquiries = enquiries.length;
  const newEnquiries = enquiries.filter(e => e.status === 'new').length;
  const inProgressEnquiries = enquiries.filter(e => e.status === 'in_progress').length;
  const activeProperties = properties.filter(p => p.status === 'active').length;
  const sampleProperties = properties.filter(p => p.isSampleListing).length;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Welcome & Actions Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gold-600">
            Control Center
          </span>
          <h1 className="font-serif text-2xl font-bold text-navy-950 mt-0.5">
            Morya Properties & Multi Services Dashboard
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Real-time management for listings, customer inquiries, and documentation requests in Pune.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            to="/admin/properties"
            className="btn-gold px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Add Property</span>
          </Link>

          <button
            onClick={exportEnquiriesCSV}
            className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-950 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Download className="w-4 h-4 text-slate-600" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-xs text-slate-500">
            <span>Total Enquiries</span>
            <MessageSquare className="w-4 h-4 text-navy-600" />
          </div>
          <div className="font-serif text-3xl font-bold text-navy-950">
            {totalEnquiries}
          </div>
          <div className="text-[11px] text-slate-400">
            Generated via website forms
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-xs text-slate-500">
            <span>New / Unread Leads</span>
            <AlertCircle className="w-4 h-4 text-amber-500" />
          </div>
          <div className="font-serif text-3xl font-bold text-amber-600">
            {newEnquiries}
          </div>
          <div className="text-[11px] text-slate-400">
            Require follow-up call
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-xs text-slate-500">
            <span>Active Listings</span>
            <Building2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="font-serif text-3xl font-bold text-navy-950">
            {activeProperties}
          </div>
          <div className="text-[11px] text-slate-400">
            {sampleProperties} representative showcase
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-xs text-slate-500">
            <span>Services Catalog</span>
            <ShieldCheck className="w-4 h-4 text-gold-600" />
          </div>
          <div className="font-serif text-3xl font-bold text-navy-950">
            {services.length}
          </div>
          <div className="text-[11px] text-slate-400">
            Active multi-service categories
          </div>
        </div>
      </div>

      {/* Recent Enquiries Table */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <div>
            <h2 className="font-serif text-lg font-bold text-navy-950">
              Recent Customer Enquiries
            </h2>
            <p className="text-xs text-slate-500">
              Latest leads submitted from website forms
            </p>
          </div>
          <Link
            to="/admin/enquiries"
            className="text-xs font-semibold text-gold-600 hover:text-gold-700 flex items-center gap-1"
          >
            <span>Manage All Enquiries</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase text-[10px] tracking-wider border-b border-slate-100">
              <tr>
                <th className="px-6 py-3">Applicant Name</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Interest Item</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Assigned Staff</th>
                <th className="px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {enquiries.slice(0, 5).map(e => (
                <tr key={e.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-6 py-4 font-semibold text-navy-950">{e.fullName}</td>
                  <td className="px-6 py-4 text-slate-600">
                    <a href={`tel:${e.phone}`} className="hover:text-gold-600 font-medium">
                      {e.phone}
                    </a>
                  </td>
                  <td className="px-6 py-4">
                    <span className="capitalize px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium text-[11px]">
                      {e.serviceCategory}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 max-w-xs truncate">
                    {e.interestTitle || 'General'}
                  </td>
                  <td className="px-6 py-4">
                    <select
                      value={e.status}
                      onChange={(ev) => updateEnquiryStatus(e.id, ev.target.value as any)}
                      className={`text-[11px] font-bold px-2 py-1 rounded-md border focus:outline-none ${
                        e.status === 'new'
                          ? 'bg-amber-50 text-amber-800 border-amber-300'
                          : e.status === 'in_progress'
                          ? 'bg-blue-50 text-blue-800 border-blue-300'
                          : e.status === 'contacted'
                          ? 'bg-purple-50 text-purple-800 border-purple-300'
                          : 'bg-emerald-50 text-emerald-800 border-emerald-300'
                      }`}
                    >
                      <option value="new">New</option>
                      <option value="in_progress">In Progress</option>
                      <option value="contacted">Contacted</option>
                      <option value="closed">Closed</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    {e.assignedTo || 'Unassigned'}
                  </td>
                  <td className="px-6 py-4 text-slate-400 text-[11px]">
                    {new Date(e.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* System Settings & Local Data Card */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="font-serif text-base font-bold text-navy-950">
            Database & Demonstration Mode
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Currently running in <strong>{isSupabaseConfigured ? 'Supabase PostgreSQL' : 'Local-First Storage'}</strong> mode.
          </p>
        </div>

        <button
          onClick={() => {
            if (confirm("Reset local properties and enquiries to default sample records?")) {
              resetToDemoData();
            }
          }}
          className="px-4 py-2 rounded-xl text-xs font-semibold text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 transition-colors"
        >
          Reset Demo Data
        </button>
      </div>
    </div>
  );
};
