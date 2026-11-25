import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Building2, Lock, Mail, ArrowRight, ShieldCheck, KeyRound } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { SEO } from '../../components/common/SEO';

export const AdminLogin: React.FC = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const [email, setEmail] = useState('admin@morya.com');
  const [password, setPassword] = useState('morya2026');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // If already logged in, redirect
  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const res = await login(email, password);
      if (res.success) {
        navigate('/admin/dashboard');
      } else {
        setErrorMsg(res.error || 'Invalid credentials');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Login error');
    } finally {
      setLoading(false);
    }
  };

  const fillDemoCreds = () => {
    setEmail('admin@morya.com');
    setPassword('morya2026');
    setErrorMsg('');
  };

  return (
    <div className="min-h-screen bg-navy-950 flex flex-col justify-center items-center p-4">
      <SEO
        title="Admin Portal Login"
        description="Administrative management dashboard for Morya Properties and Multi Services."
      />

      <div className="w-full max-w-md space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-navy-950 shadow-gold-glow mx-auto mb-3">
            <Building2 className="w-8 h-8" />
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Morya Properties
          </h1>
          <p className="text-xs text-gold-400 uppercase tracking-widest font-semibold">
            Administrative Management Portal
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-navy-900 rounded-3xl p-8 border border-navy-800 shadow-2xl text-white space-y-6">
          <div className="flex items-center justify-between border-b border-navy-800 pb-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>Staff Authentication</span>
            </div>

            <button
              type="button"
              onClick={fillDemoCreds}
              className="text-[11px] text-gold-400 hover:text-gold-300 underline font-medium"
            >
              Fill Default Credentials
            </button>
          </div>

          {errorMsg && (
            <div className="p-3 rounded-xl bg-red-900/40 text-red-300 text-xs border border-red-800">
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Administrative Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-white focus:ring-2 focus:ring-gold-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-white focus:ring-2 focus:ring-gold-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
            >
              <KeyRound className="w-4 h-4" />
              <span>{loading ? 'Authenticating...' : 'Sign In to Dashboard'}</span>
            </button>
          </form>

          {/* Quick Credential Hint */}
          <div className="p-3 rounded-xl bg-navy-950/80 border border-navy-800 text-[11px] text-slate-400 space-y-1">
            <span className="text-gold-400 font-semibold block">Default Admin Credentials:</span>
            <div>Email: <code className="text-white">admin@morya.com</code></div>
            <div>Password: <code className="text-white">morya2026</code></div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/" className="text-xs text-slate-400 hover:text-white transition-colors">
            ← Return to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
};
