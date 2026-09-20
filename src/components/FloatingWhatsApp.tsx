import React from 'react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  onClick: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onClick }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Tooltip on hover */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap bg-[#172033] text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-lg border border-gray-700">
        Chat or Book a Visit
        {/* Little arrow */}
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#172033] rotate-45 border-r border-t border-gray-700" />
      </div>

      {/* Floating button */}
      <button
        id="floating-whatsapp-enquiry-btn"
        onClick={onClick}
        aria-label="Enquire via WhatsApp or Book Visit"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#16B979] text-white shadow-xl shadow-[#16B979]/40 hover:bg-[#139e67] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-[#16B979]/40 animate-ping pointer-events-none" />

        {/* WhatsApp-style Speech Bubble Icon */}
        <MessageCircle className="w-7 h-7 relative z-10 fill-white text-white" />
      </button>
    </div>
  );
};
