import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, Building2, MessageSquare, Layers, 
  LogOut, ExternalLink, ShieldCheck, Database, User 
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { isSupabaseConfigured } from '../../lib/supabase';

export const AdminLayout: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/admin');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) return null;

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  const navItems = [
    {
      label: 'Overview',
      path: '/admin/dashboard',
      icon: <LayoutDashboard className="w-4 h-4" />
    },
    {
      label: 'Properties',
      path: '/admin/properties',
      icon: <Building2 className="w-4 h-4" />
    },
    {
      label: 'Enquiries & Leads',
      path: '/admin/enquiries',
      icon: <MessageSquare className="w-4 h-4" />
    },
    {
      label: 'Services Catalogue',
      path: '/admin/services',
      icon: <Layers className="w-4 h-4" />
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-navy-950 text-white flex-shrink-0 flex flex-col justify-between border-r border-navy-900">
        <div>
          {/* Brand header */}
          <div className="p-6 border-b border-navy-900 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-950 shadow-gold-glow flex-shrink-0">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-serif font-bold text-sm tracking-tight text-white">MORYA ADMIN</div>
              <div className="text-[10px] text-gold-400 font-medium tracking-wider uppercase">Portal Management</div>
            </div>
          </div>

          {/* Nav links */}
          <nav className="p-4 space-y-1 text-xs">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all font-medium ${
                  isActive(item.path)
                    ? 'bg-gold-500 text-navy-950 font-bold shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-navy-900'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom user & quick action */}
        <div className="p-4 border-t border-navy-900 space-y-3 text-xs">
          {/* Storage Mode Status */}
          <div className="px-3 py-2 rounded-xl bg-navy-900/80 border border-navy-800 text-[11px] flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Database className="w-3.5 h-3.5 text-gold-400" />
              <span>Storage:</span>
            </div>
            <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
              isSupabaseConfigured 
                ? 'bg-emerald-900/60 text-emerald-400 border border-emerald-700' 
                : 'bg-gold-950 text-gold-400 border border-gold-800'
            }`}>
              {isSupabaseConfigured ? 'Supabase DB' : 'Local-First'}
            </span>
          </div>

          {/* Logged in user info */}
          <div className="flex items-center gap-2.5 px-3 py-2 bg-navy-900/50 rounded-xl">
            <div className="w-7 h-7 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center font-bold text-xs flex-shrink-0">
              {user?.name.charAt(0) || 'A'}
            </div>
            <div className="overflow-hidden">
              <div className="font-semibold text-white truncate text-xs">{user?.name}</div>
              <div className="text-[10px] text-slate-400 capitalize">{user?.role}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <Link
              to="/"
              target="_blank"
              className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 bg-navy-900 hover:bg-navy-850 text-slate-300 rounded-lg text-[11px] transition-colors"
            >
              <ExternalLink className="w-3 h-3 text-gold-400" />
              <span>Visit Site</span>
            </Link>

            <button
              onClick={handleLogout}
              className="py-2 px-3 bg-red-950/60 hover:bg-red-900 text-red-300 rounded-lg text-[11px] transition-colors flex items-center justify-center gap-1"
              title="Sign Out"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-8 lg:p-10 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};
