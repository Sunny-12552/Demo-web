import React from 'react';
import { Check, ArrowRight, Sparkles, Shield, Clock } from 'lucide-react';
import { PgRoom } from '../types';
import { SafeImage } from './SafeImage';

interface RoomCardProps {
  room: PgRoom;
  onEnquire: (room: PgRoom) => void;
}

export const RoomCard: React.FC<RoomCardProps> = ({ room, onEnquire }) => {
  return (
    <div
      id={`room-card-${room.id}`}
      className={`group bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col h-full relative ${
        room.popular
          ? 'border-[#5B3DF5] shadow-xl ring-2 ring-[#5B3DF5]/20'
          : 'border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#5B3DF5]/40'
      }`}
    >
      {/* Most Popular Ribbon */}
      {room.popular && (
        <div className="absolute top-0 right-0 z-20">
          <div className="bg-[#5B3DF5] text-white text-[11px] font-extrabold uppercase px-4 py-1 rounded-bl-xl shadow-md flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            <span>Most Popular</span>
          </div>
        </div>
      )}

      {/* Room Image */}
      <div className="relative aspect-16/10 overflow-hidden bg-gray-900">
        <SafeImage
          src={room.image}
          alt={room.name}
          loading="lazy"
          fallbackType="bedroom"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top availability badge */}
        <div className="absolute top-3.5 left-3.5 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/95 backdrop-blur-md text-[#172033] shadow-md flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#16B979] animate-pulse" />
            {room.bedsAvailable}
          </span>
        </div>

        {/* Occupancy pill */}
        <div className="absolute bottom-3 right-3 pointer-events-none">
          <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-black/70 backdrop-blur-md text-white shadow-sm">
            {room.occupancy}
          </span>
        </div>
      </div>

      {/* Room Details */}
      <div className="p-6 sm:p-7 flex flex-col flex-grow">
        
        {/* Price & Title */}
        <div className="mb-3">
          <span className="text-xs uppercase tracking-wider font-bold text-[#737D90] block">
            All-Inclusive Monthly Rent
          </span>
          <div className="text-3xl font-extrabold text-[#172033] group-hover:text-[#5B3DF5] transition-colors mt-0.5">
            {room.priceDisplay}
          </div>
          <h3 className="text-lg font-bold text-[#172033] mt-1.5">
            {room.name}
          </h3>
        </div>

        {/* Deposit & Notice Pill Bar */}
        <div className="grid grid-cols-2 gap-2 bg-[#F8F9FC] p-2.5 rounded-xl text-[11px] text-[#737D90] font-medium mb-4">
          <div>Deposit: <span className="font-bold text-[#172033]">{room.deposit}</span></div>
          <div>Notice: <span className="font-bold text-[#172033]">{room.noticePeriod}</span></div>
        </div>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-[#737D90] leading-relaxed mb-6">
          {room.description}
        </p>

        {/* Features Bullet List */}
        <div className="space-y-2.5 mb-8 flex-grow">
          {room.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-xs text-[#172033]">
              <div className="w-4 h-4 rounded-full bg-[#16B979]/15 text-[#16B979] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5 stroke-[3]" />
              </div>
              <span className="leading-tight">{feature}</span>
            </div>
          ))}
        </div>

        {/* Enquire / Book Room Button */}
        <button
          id={`enquire-btn-${room.id}`}
          onClick={() => onEnquire(room)}
          className={`w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm transition-all shadow-xs group-hover:shadow-md cursor-pointer active:scale-98 ${
            room.popular
              ? 'bg-[#5B3DF5] text-white hover:bg-[#4d30e3]'
              : 'bg-white text-[#5B3DF5] hover:bg-[#5B3DF5] hover:text-white border-2 border-[#5B3DF5]'
          }`}
        >
          <span>Book This Room</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
};
