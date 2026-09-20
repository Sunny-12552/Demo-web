import React from 'react';
import {
  Wifi,
  Utensils,
  Sparkles,
  ShieldCheck,
  Flame,
  Shirt,
  HeartHandshake,
  Tv,
  Zap,
  Droplets
} from 'lucide-react';
import { AmenityItem } from '../types';

interface AmenitiesProps {
  amenities: AmenityItem[];
}

export const Amenities: React.FC<AmenitiesProps> = ({ amenities }) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi':
        return <Wifi className="w-6 h-6" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'Tv':
        return <Tv className="w-6 h-6" />;
      case 'Shirt':
        return <Shirt className="w-6 h-6" />;
      case 'Power':
      case 'Zap':
        return <Zap className="w-6 h-6" />;
      case 'Droplets':
      case 'Flame':
        return <Droplets className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section id="amenities" className="py-16 md:py-24 bg-[#F8F9FC] border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B3DF5]/10 text-[#5B3DF5] text-xs font-bold uppercase tracking-wider mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>All-Inclusive Living</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#172033] leading-tight">
            Everything Included in Your Rent
          </h2>
          <p className="text-sm sm:text-base text-[#737D90] mt-3">
            No surprise utility bills or extra maintenance charges. All essential amenities are covered in your monthly rent.
          </p>
        </div>

        {/* Amenity Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item) => (
            <div
              key={item.id}
              id={`amenity-card-${item.id}`}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-xs hover:shadow-lg hover:border-[#5B3DF5]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#5B3DF5]/10 text-[#5B3DF5] group-hover:bg-[#5B3DF5] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-5 shadow-xs">
                  {renderIcon(item.iconName)}
                </div>
                <h3 className="text-base font-bold text-[#172033] group-hover:text-[#5B3DF5] transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#737D90] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] font-semibold text-[#16B979]">
                <span>100% Free with Rent</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#16B979]" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
