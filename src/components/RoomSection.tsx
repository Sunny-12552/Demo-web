import React from 'react';
import { BedDouble, Sparkles, CheckCircle2 } from 'lucide-react';
import { PgRoom } from '../types';
import { RoomCard } from './RoomCard';

interface RoomSectionProps {
  rooms: PgRoom[];
  onEnquireRoom: (room: PgRoom) => void;
}

export const RoomSection: React.FC<RoomSectionProps> = ({ rooms, onEnquireRoom }) => {
  return (
    <section id="rooms" className="py-16 md:py-24 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#5B3DF5]/10 text-[#5B3DF5] text-xs font-bold uppercase tracking-wider mb-3">
            <BedDouble className="w-3.5 h-3.5" />
            <span>Room Options & Rent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#172033]">
            Choose Your Room in UrbanNest PG
          </h2>
          <p className="text-sm sm:text-base text-[#737D90] mt-3 leading-relaxed">
            All rooms are fully furnished with attached washrooms, high-speed fiber Wi-Fi, and 3 fresh daily meals included in rent. Zero brokerage!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-5 text-xs font-semibold text-gray-700">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#16B979]" />
              <span>Zero Brokerage</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#16B979]" />
              <span>1 Month Refundable Deposit</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#16B979]" />
              <span>30 Days Notice Period</span>
            </span>
          </div>
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onEnquire={onEnquireRoom}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
