import React from 'react';
import { CalendarCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface CTAProps {
  onBookVisit: () => void;
  onExploreGallery: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onBookVisit, onExploreGallery }) => {
  return (
    <section className="py-16 md:py-20 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#172033] to-[#25324D] overflow-hidden p-8 sm:p-12 lg:p-16 text-white shadow-xl">
          
          {/* Decorative glowing backdrops */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-[#5B3DF5]/30 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-80 h-80 rounded-full bg-[#7B63F7]/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[#16B979] text-xs font-bold uppercase tracking-wider mb-5 border border-white/10">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions Open • Immediate Move-In</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5">
              Ready to experience comfortable living at UrbanNest PG?
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              Schedule a free visit today to tour our furnished rooms, sample our home-cooked food, and lock in your bed before it’s occupied.
            </p>

            {/* Inclusions checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10 text-xs font-medium text-gray-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16B979] shrink-0" />
                <span>Zero Brokerage</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16B979] shrink-0" />
                <span>Instant Move-In</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16B979] shrink-0" />
                <span>300 Mbps Fiber WiFi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16B979] shrink-0" />
                <span>3 Homely Meals/Day</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="cta-book-visit-btn"
                onClick={onBookVisit}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#5B3DF5] text-white text-base font-bold hover:bg-[#4d30e3] transition-all shadow-lg shadow-[#5B3DF5]/30 hover:scale-102 cursor-pointer"
              >
                <CalendarCheck className="w-5 h-5" />
                <span>Schedule a Free Visit</span>
              </button>

              <button
                id="cta-tour-gallery-btn"
                onClick={onExploreGallery}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-base font-semibold border border-white/20 transition-all backdrop-blur-md cursor-pointer"
              >
                <span>View Full Photo Tour</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
