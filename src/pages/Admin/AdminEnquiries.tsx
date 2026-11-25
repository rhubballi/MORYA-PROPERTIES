import React, { useState } from 'react';
import { 
  MessageSquare, Download, Filter, Search, 
  Trash2, Edit3, UserCheck, CheckCircle2, Phone, Mail, Clock, X 
} from 'lucide-react';
import { useProperties } from '../../context/PropertyContext';
import { Enquiry, EnquiryStatus } from '../../types';
import { VERIFIED_TEAM } from '../../data/mockData';

export const AdminEnquiries: React.FC = () => {
  const { enquiries, updateEnquiryStatus, deleteEnquiry, exportEnquiriesCSV } = useProperties();

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  // Notes Modal state
  const [activeNotesEnquiry, setActiveNotesEnquiry] = useState<Enquiry | null>(null);
  const [internalNotesText, setInternalNotesText] = useState('');

  const openNotesModal = (e: Enquiry) => {
    setActiveNotesEnquiry(e);
    setInternalNotesText(e.internalNotes || '');
  };

  const handleSaveNotes = async () => {
    if (activeNotesEnquiry) {
      await updateEnquiryStatus(
        activeNotesEnquiry.id,
        activeNotesEnquiry.status,
        internalNotesText,
        activeNotesEnquiry.assignedTo
      );
      setActiveNotesEnquiry(null);
    }
  };

  const handleDelete = async (id: string, name: string) => {
    if (confirm(`Delete enquiry from ${name}?`)) {
      await deleteEnquiry(id);
    }
  };

  // Filter enquiries
  const filtered = enquiries.filter(e => {
    const q = searchTerm.toLowerCase();
    const matchSearch = 
      e.fullName.toLowerCase().includes(q) ||
      e.phone.includes(q) ||
      (e.interestTitle && e.interestTitle.toLowerCase().includes(q)) ||
      (e.preferredLocation && e.preferredLocation.toLowerCase().includes(q));
    if (!matchSearch) return false;

    if (filterCategory !== 'all' && e.serviceCategory !== filterCategory) return false;
    if (filterStatus !== 'all' && e.status !== filterStatus) return false;

    return true;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm">
        <div>
          <h1 className="font-serif text-2xl font-bold text-navy-950">
            Enquiry & Lead Management
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Track customer requests, assign staff consultants, update pipeline status, and add internal notes.
          </p>
        </div>

        <button
          onClick={exportEnquiriesCSV}
          className="btn-gold px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5"
        >
          <Download className="w-4 h-4" />
          <span>Export Enquiries CSV</span>
        </button>
      </div>

      {/* Filters Toolbar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-sm flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search by name, phone, locality..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
          {/* Status Filter */}
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white font-medium focus:outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="new">New / Uncontacted</option>
            <option value="in_progress">In Progress</option>
            <option value="contacted">Contacted</option>
            <option value="closed">Closed / Converted</option>
          </select>

          {/* Category Filter */}
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white font-medium focus:outline-none"
          >
            <option value="all">All Categories</option>
            <option value="buy">Property Buying</option>
            <option value="sell">Property Selling</option>
            <option value="rent">Rental & Leasing</option>
            <option value="commercial">Commercial</option>
            <option value="loans">Home Loans</option>
            <option value="insurance">Insurance</option>
            <option value="documentation">Documentation / Rent Agreement</option>
            <option value="general">General</option>
          </select>
        </div>
      </div>

      {/* Enquiries Table */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-semibold uppercase text-[10px] tracking-wider border-b border-slate-100">
              <tr>
                <th className="px-5 py-3">Applicant / Contact</th>
                <th className="px-5 py-3">Category</th>
                <th className="px-5 py-3">Interest / Locality</th>
                <th className="px-5 py-3">Pipeline Status</th>
                <th className="px-5 py-3">Assigned Consultant</th>
                <th className="px-5 py-3">Notes</th>
                <th className="px-5 py-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(e => (
                <tr key={e.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-5 py-3.5">
                    <div className="font-bold text-navy-950 text-sm">{e.fullName}</div>
                    <div className="flex items-center gap-2 mt-0.5 text-[11px] text-slate-600">
                      <a href={`tel:${e.phone}`} className="hover:text-gold-600 font-medium">
                        {e.phone}
                      </a>
                      {e.email && <span>• {e.email}</span>}
                    </div>
                  </td>

                  <td className="px-5 py-3.5">
                    <span className="capitalize px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium text-[11px]">
                      {e.serviceCategory}
                    </span>
                  </td>

                  <td className="px-5 py-3.5">
                    <div className="font-medium text-slate-800 max-w-xs truncate">
                      {e.interestTitle || 'General Request'}
                    </div>
                    {e.preferredLocation && (
                      <div className="text-[10px] text-slate-500 mt-0.5">
                        Locality: {e.preferredLocation} {e.budgetRange ? `(${e.budgetRange})` : ''}
                      </div>
                    )}
                  </td>

                  <td className="px-5 py-3.5">
                    <select
                      value={e.status}
                      onChange={(ev) => updateEnquiryStatus(e.id, ev.target.value as any, e.internalNotes, e.assignedTo)}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border focus:outline-none ${
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

                  <td className="px-5 py-3.5">
                    <select
                      value={e.assignedTo || ''}
                      onChange={(ev) => updateEnquiryStatus(e.id, e.status, e.internalNotes, ev.target.value)}
                      className="text-xs px-2 py-1 rounded-lg border border-slate-300 bg-white focus:outline-none"
                    >
                      <option value="">Unassigned</option>
                      {VERIFIED_TEAM.map(t => (
                        <option key={t.id} value={t.name}>{t.name}</option>
                      ))}
                    </select>
                  </td>

                  <td className="px-5 py-3.5">
                    <button
                      onClick={() => openNotesModal(e)}
                      className="text-left text-xs text-slate-600 hover:text-gold-600 max-w-xs truncate block"
                      title="Click to view/edit notes"
                    >
                      {e.internalNotes ? (
                        <span className="text-slate-800 font-medium">
                          {e.internalNotes}
                        </span>
                      ) : (
                        <span className="text-slate-400 italic flex items-center gap-1">
                          <Edit3 className="w-3 h-3" />
                          <span>Add note</span>
                        </span>
                      )}
                    </button>
                  </td>

                  <td className="px-5 py-3.5 text-right">
                    <button
                      onClick={() => handleDelete(e.id, e.fullName)}
                      className="p-1.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
                      title="Delete Enquiry"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Internal Notes Modal */}
      {activeNotesEnquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="bg-navy-900 px-6 py-4 text-white flex justify-between items-center border-b border-navy-800">
              <h3 className="font-serif text-base font-bold">
                Internal Notes: {activeNotesEnquiry.fullName}
              </h3>
              <button
                onClick={() => setActiveNotesEnquiry(null)}
                className="p-1 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <div><strong>Applicant Message:</strong> {activeNotesEnquiry.message}</div>
                <div><strong>Category:</strong> {activeNotesEnquiry.serviceCategory} • {activeNotesEnquiry.interestTitle || 'None'}</div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Internal Staff Notes & Follow-up History
                </label>
                <textarea
                  rows={4}
                  value={internalNotesText}
                  onChange={(e) => setInternalNotesText(e.target.value)}
                  placeholder="e.g. Spoke to client on March 2. Interested in East-facing 2 BHK flat near Chavan Nagar. Scheduled site visit on Saturday 11am with Nilesh Tarde."
                  className="w-full p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-gold-500 focus:outline-none"
                ></textarea>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setActiveNotesEnquiry(null)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveNotes}
                  className="btn-gold px-5 py-2 rounded-xl font-bold uppercase tracking-wider"
                >
                  Save Internal Note
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
