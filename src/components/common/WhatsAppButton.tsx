import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/mockData';

interface WhatsAppButtonProps {
  customMessage?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ customMessage }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const defaultMsg = customMessage || 
    "Hello Morya Properties, I am interested in exploring property and multi-services options in Pune. Please share more details.";

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(defaultMsg)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      {/* Tooltip bubble on desktop */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-navy-950 text-white text-xs py-2 px-3.5 rounded-xl shadow-2xl border border-navy-800 mr-3 animate-in fade-in slide-in-from-right-3 duration-200">
          <span>Chat directly on WhatsApp with Nilesh Tarde</span>
          <button 
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
        aria-label="Chat on WhatsApp with Morya Properties"
      >
        {/* Pulse ripple */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400/30 animate-ping group-hover:hidden"></span>

        <MessageCircle className="w-7 h-7 relative z-10" />

        {/* Status dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-gold-400 rounded-full border-2 border-emerald-600"></span>
      </a>
    </div>
  );
};
