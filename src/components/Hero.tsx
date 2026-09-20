import React, { useState, useRef } from 'react';
import {
  ArrowRight,
  BedDouble,
  CheckCircle2,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import { SafeImage } from './SafeImage';
import { pgGalleryPhotos } from '../data/singlePgData';

interface HeroProps {
  onScheduleVisit: () => void;
  onViewRoomsClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScheduleVisit, onViewRoomsClick }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = pgGalleryPhotos[currentSlideIndex];

  // Next / Prev slide handlers
  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % pgGalleryPhotos.length);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + pgGalleryPhotos.length) % pgGalleryPhotos.length);
  };

  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-10 md:pb-24 overflow-hidden">
      {/* Subtle ambient lighting circles */}
      <div className="absolute top-0 right-1/4 -z-10 w-96 h-96 bg-[#5B3DF5]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 -z-10 w-80 h-80 bg-[#7B63F7]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Description & Stats */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Verified & Location Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16B979]/10 text-[#16B979] text-xs font-bold w-fit mb-5 border border-[#16B979]/20 shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>✓ Verified Luxury PG in Marathahalli, Bengaluru</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#172033] leading-[1.15] mb-5">
              Live hassle-free at <br className="hidden sm:inline" />
              <span className="text-[#5B3DF5]">UrbanNest PG.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#737D90] max-w-xl leading-relaxed mb-7">
              Bengaluru’s premier PG living for working professionals and students. Fully furnished rooms, 3 fresh home-cooked meals daily, 300 Mbps Wi-Fi, and 24/7 security right behind Prestige Tech Park.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                id="hero-schedule-visit-btn"
                onClick={onScheduleVisit}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#5B3DF5] text-white text-base font-bold hover:bg-[#4d30e3] transition-all shadow-md shadow-[#5B3DF5]/25 hover:shadow-lg hover:shadow-[#5B3DF5]/35 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Schedule a Free Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-view-rooms-btn"
                onClick={onViewRoomsClick}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white text-[#172033] text-base font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all shadow-xs hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Rooms & Rent</span>
              </button>
            </div>

            {/* Real Statistics for this PG */}
            <div className="pt-6 border-t border-gray-200/80 grid grid-cols-3 gap-4 sm:gap-8">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#172033]">4.8★</div>
                <div className="text-xs sm:text-sm font-medium text-[#737D90] mt-1">180+ Resident Reviews</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#172033]">3 Meals</div>
                <div className="text-xs sm:text-sm font-medium text-[#737D90] mt-1">Fresh Home Food Daily</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-[#172033]">₹0</div>
                <div className="text-xs sm:text-sm font-medium text-[#737D90] mt-1">Zero Brokerage</div>
              </div>
            </div>

          </div>

          {/* Right Column: Scrollable PG Photo Showcase Card */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              
              {/* Main Scrollable Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-300/60 border border-white/60 aspect-4/3 sm:aspect-5/4 bg-[#1E2337] group select-none">
                
                {/* Active PG Image with Safe Fallback */}
                <SafeImage
                  key={currentSlide.id}
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  fallbackType="bedroom"
                  className="w-full h-full object-cover object-center transition-all duration-500 transform group-hover:scale-102"
                />

                {/* Dark gradient overlay for typography readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 pointer-events-none" />

                {/* Top Badges Row */}
                <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
                  {/* Category Pill */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#5B3DF5] text-white text-xs font-bold shadow-md shadow-[#5B3DF5]/30">
                    <Sparkles className="w-3 h-3" />
                    <span>{currentSlide.tag}</span>
                  </span>

                  {/* PG Status Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#172033] text-xs font-bold shadow-lg border border-white/40">
                    <span className="w-2 h-2 rounded-full bg-[#16B979] animate-pulse" />
                    <span>Admissions Open</span>
                  </div>
                </div>

                {/* Navigation Chevron Buttons on the image */}
                <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between z-20 pointer-events-none">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous PG photo"
                    className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-[#5B3DF5] text-white backdrop-blur-md transition-all shadow-md active:scale-90 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <button
                    onClick={handleNext}
                    aria-label="Next PG photo"
                    className="pointer-events-auto p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-[#5B3DF5] text-white backdrop-blur-md transition-all shadow-md active:scale-90 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-xl border border-white/60">
                    
                    {/* Slide details */}
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#737D90] block">
                          UrbanNest PG Spaces
                        </span>
                        <h3 className="text-lg sm:text-xl font-extrabold text-[#172033] mt-0.5">
                          {currentSlide.title}
                        </h3>
                      </div>

                      <div className="text-right">
                        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#5B3DF5]/10 text-[#5B3DF5] text-xs font-semibold">
                          <BedDouble className="w-3.5 h-3.5" />
                          <span>Rent from ₹7,000/mo</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-[#737D90] line-clamp-1 border-t border-gray-100 pt-2">
                      {currentSlide.description}
                    </p>

                    {/* Thumbnail dot indicators */}
                    <div className="flex items-center justify-center gap-1.5 pt-3">
                      {pgGalleryPhotos.map((photo, idx) => (
                        <button
                          key={photo.id}
                          onClick={() => setCurrentSlideIndex(idx)}
                          aria-label={`Go to ${photo.title}`}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            idx === currentSlideIndex
                              ? 'w-6 bg-[#5B3DF5]'
                              : 'w-2 bg-gray-300 hover:bg-gray-400'
                          }`}
                        />
                      ))}
                    </div>

                  </div>
                </div>

              </div>

              {/* Scrollable Quick Selection Chips below the Hero Image */}
              <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1 no-scrollbar select-none">
                <span className="text-[11px] font-bold text-[#737D90] uppercase tracking-wider shrink-0 mr-1">
                  PG Tour:
                </span>
                {pgGalleryPhotos.map((photo, idx) => (
                  <button
                    key={photo.id}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`text-xs px-3 py-1.5 rounded-xl font-medium shrink-0 transition-all cursor-pointer ${
                      idx === currentSlideIndex
                        ? 'bg-[#5B3DF5] text-white shadow-xs font-semibold'
                        : 'bg-white text-[#172033] hover:bg-gray-100 border border-gray-200/70'
                    }`}
                  >
                    {photo.title}
                  </button>
                ))}
              </div>

              {/* Decorative side pill - subtle trusted badge */}
              <div className="hidden sm:flex items-center gap-2.5 absolute -bottom-5 -left-5 bg-white py-2.5 px-4 rounded-xl shadow-lg border border-gray-100 z-20">
                <div className="p-1.5 rounded-lg bg-[#16B979]/10 text-[#16B979]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-[#172033]">100% Verified Property</p>
                  <p className="text-[10px] text-[#737D90]">No Hidden Deposit Deductions</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
