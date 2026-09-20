import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, ShieldCheck } from 'lucide-react';
import { pgReviews } from '../data/singlePgData';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B3DF5]/10 text-[#5B3DF5] text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-[#5B3DF5]" />
            <span>Resident Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#172033]">
            What our residents say about living here
          </h2>
          <p className="text-sm sm:text-base text-[#737D90] mt-3">
            Real feedback from tech professionals and students currently staying at UrbanNest PG.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pgReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#F8F9FC] rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Rating & Company */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#5B3DF5] bg-[#5B3DF5]/10 px-2.5 py-1 rounded-lg">
                    {review.company}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#172033]/85 leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              {/* Resident Info */}
              <div className="pt-4 border-t border-gray-200/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#172033] flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle className="w-3.5 h-3.5 text-[#16B979]" />
                  </h4>
                  <p className="text-[11px] text-[#737D90]">{review.roomType}</p>
                </div>
                <span className="text-[11px] text-gray-400">{review.stayDuration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Community Trust Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#5B3DF5]/5 via-white to-[#16B979]/5 rounded-2xl p-4 sm:p-6 border border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#5B3DF5] text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#172033]">Zero Security Hassles & Friendly Community</h4>
              <p className="text-xs text-[#737D90]">Biometric access, 24/7 CCTV surveillance, and verified resident directory.</p>
            </div>
          </div>
          <div className="text-xs font-bold text-[#5B3DF5] shrink-0">
            Average Stay: 14+ Months
          </div>
        </div>

      </div>
    </section>
  );
};
