import React from 'react';
import { MapPin, Navigation, Compass, Sparkles, Building2, Train, Dumbbell, ExternalLink } from 'lucide-react';
import { pgInfo, nearbyLandmarks } from '../data/singlePgData';

interface LocationSectionProps {
  onScheduleVisit: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onScheduleVisit }) => {
  return (
    <section id="location" className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B3DF5]/10 text-[#5B3DF5] text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Strategic Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#172033] leading-tight">
            Stay close to your workplace.
          </h2>
          <p className="text-sm sm:text-base text-[#737D90] mt-3 leading-relaxed">
            Located in Marathahalli right along the Outer Ring Road IT corridor, with zero commute stress to major tech parks.
          </p>
        </div>

        {/* Map & Landmarks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#F8F9FC] p-6 sm:p-8 lg:p-10 rounded-3xl border border-gray-200/90 shadow-sm">
          
          {/* Left: Stylized Map Card */}
          <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[400px] w-full rounded-2xl bg-[#172033] overflow-hidden shadow-inner border border-gray-800 flex flex-col justify-between p-6">
            
            {/* Grid Pattern Background */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, #5B3DF5 1.5px, transparent 1.5px)',
                backgroundSize: '24px 24px',
              }}
            />

            {/* Stylized Outer Ring Road & Tech Corridor Artery Curves */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* Outer Ring Road (Main Highway) */}
              <path
                d="M 10,85 Q 50,55 90,25"
                fill="none"
                stroke="#5B3DF5"
                strokeWidth="2.5"
              />
              {/* Panathur / Kadubeesanahalli Road */}
              <path
                d="M 30,30 L 50,55 L 70,85"
                fill="none"
                stroke="#16B979"
                strokeWidth="1.5"
                strokeDasharray="2,2"
              />
            </svg>

            {/* Top Map Badging */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20 text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#16B979] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider">Outer Ring Road Corridor</span>
              </div>

              <div className="text-[11px] text-gray-300 bg-black/40 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                Bengaluru 560037
              </div>
            </div>

            {/* Centered Main Pin for UrbanNest PG */}
            <div className="relative z-20 self-center my-auto flex flex-col items-center">
              {/* Concentric distance rings */}
              <div className="absolute w-36 h-36 rounded-full border border-[#5B3DF5]/40 animate-ping pointer-events-none" />
              <div className="absolute w-24 h-24 rounded-full border border-[#16B979]/40 pointer-events-none" />

              <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#5B3DF5] text-white font-extrabold text-sm shadow-2xl ring-4 ring-white/20">
                <MapPin className="w-4 h-4 text-[#16B979] fill-[#16B979]" />
                <span>UrbanNest PG (You are here)</span>
              </div>
              <span className="text-[10px] text-gray-200 mt-1.5 font-medium bg-black/60 px-2 py-0.5 rounded-full">
                Behind Prestige Tech Park
              </span>
            </div>

            {/* Surrounding Tech Park Indicators */}
            <div className="relative z-10 grid grid-cols-2 gap-2 text-[11px] text-gray-300">
              <div className="flex items-center gap-1.5 bg-black/50 px-2.5 py-1.5 rounded-xl border border-white/10">
                <Building2 className="w-3.5 h-3.5 text-[#5B3DF5]" />
                <span>Prestige Tech Park (500m)</span>
              </div>
              <div className="flex items-center gap-1.5 bg-black/50 px-2.5 py-1.5 rounded-xl border border-white/10">
                <Building2 className="w-3.5 h-3.5 text-[#16B979]" />
                <span>Embassy TechVillage (1.2km)</span>
              </div>
            </div>

          </div>

          {/* Right: Address Details & Walking Distances */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-white p-6 sm:p-8 rounded-2xl border border-gray-200/90 shadow-sm">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#5B3DF5] mb-2">
                <Navigation className="w-3.5 h-3.5" />
                <span>Exact PG Address</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#172033] mb-2">
                {pgInfo.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#737D90] leading-relaxed mb-6">
                {pgInfo.fullAddress}
              </p>

              {/* Commute Distances List */}
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#172033] mb-3">
                Walking & Commute Times
              </h4>

              <div className="space-y-2.5 mb-8">
                {nearbyLandmarks.map((lm, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F8F9FC] border border-gray-100 text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 rounded-lg bg-white text-[#5B3DF5] shadow-xs">
                        {lm.iconType === 'transit' ? (
                          <Train className="w-3.5 h-3.5" />
                        ) : lm.iconType === 'health' ? (
                          <Dumbbell className="w-3.5 h-3.5" />
                        ) : (
                          <Building2 className="w-3.5 h-3.5" />
                        )}
                      </div>
                      <span className="font-semibold text-[#172033]">{lm.name}</span>
                    </div>

                    <div className="text-right shrink-0 pl-2">
                      <span className="font-bold text-[#16B979] block">{lm.time}</span>
                      <span className="text-[10px] text-[#737D90]">{lm.distance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule a Visit Button */}
            <button
              onClick={onScheduleVisit}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#5B3DF5] text-white text-sm font-bold hover:bg-[#4d30e3] transition-all shadow-md shadow-[#5B3DF5]/20 cursor-pointer"
            >
              <span>Schedule a Visit to This PG</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
