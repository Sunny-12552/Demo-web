import React, { useState } from 'react';
import { Utensils, Coffee, Sun, Moon, Sparkles, CheckCircle2 } from 'lucide-react';
import { weeklyFoodMenu } from '../data/singlePgData';

export const FoodMenuSection: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<string>('Monday');
  const activeMenu = weeklyFoodMenu.find((m) => m.day === selectedDay) || weeklyFoodMenu[0];

  return (
    <section id="food" className="py-16 md:py-24 bg-[#F8F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16B979]/10 text-[#16B979] text-xs font-bold uppercase tracking-wider mb-3">
            <Utensils className="w-3.5 h-3.5" />
            <span>3 Times Homely Meals Included</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight">
            Fresh, Hygienic PG Mess Menu
          </h2>
          <p className="text-sm sm:text-base text-[#737D90] mt-3">
            Enjoy nutritious, chef-prepared North & South Indian meals cooked fresh in our hygienic in-house kitchen every day.
          </p>
        </div>

        {/* Days of Week Selector */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {weeklyFoodMenu.map((item) => (
            <button
              key={item.day}
              onClick={() => setSelectedDay(item.day)}
              className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedDay === item.day
                  ? 'bg-[#5B3DF5] text-white shadow-md shadow-[#5B3DF5]/30 scale-102'
                  : 'bg-white text-[#172033] hover:bg-gray-100 border border-gray-200/80'
              }`}
            >
              {item.day}
            </button>
          ))}
        </div>

        {/* Selected Day Meals Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-200/90 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-8">
            <div>
              <span className="text-xs font-bold text-[#5B3DF5] uppercase tracking-wider block">
                Daily Menu Schedule
              </span>
              <h3 className="text-2xl font-extrabold text-[#172033] mt-1">
                {activeMenu.day}’s Meal Plan
              </h3>
            </div>
            {activeMenu.highlight && (
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200 self-start sm:self-auto">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>{activeMenu.highlight}</span>
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Breakfast */}
            <div className="bg-[#F8F9FC] rounded-2xl p-5 border border-gray-100 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-amber-100 text-amber-800">
                  <Coffee className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#172033]">Breakfast</h4>
                  <span className="text-[11px] text-[#737D90]">7:30 AM – 10:00 AM</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#172033]/85 leading-relaxed flex-grow">
                {activeMenu.breakfast}
              </p>
            </div>

            {/* Lunch */}
            <div className="bg-[#F8F9FC] rounded-2xl p-5 border border-gray-100 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-orange-100 text-orange-800">
                  <Sun className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#172033]">Lunch</h4>
                  <span className="text-[11px] text-[#737D90]">12:30 PM – 2:30 PM</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#172033]/85 leading-relaxed flex-grow">
                {activeMenu.lunch}
              </p>
              <span className="text-[10px] text-gray-500 mt-2 font-medium">
                *Tiffin packing available for office
              </span>
            </div>

            {/* Dinner */}
            <div className="bg-[#F8F9FC] rounded-2xl p-5 border border-gray-100 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-[#5B3DF5]/10 text-[#5B3DF5]">
                  <Moon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#172033]">Dinner</h4>
                  <span className="text-[11px] text-[#737D90]">7:30 PM – 10:30 PM</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#172033]/85 leading-relaxed flex-grow">
                {activeMenu.dinner}
              </p>
            </div>

          </div>

          {/* Kitchen standards guarantee */}
          <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-semibold text-gray-700">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16B979] shrink-0" />
              <span>RO Purified Cooking</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16B979] shrink-0" />
              <span>Unlimited Buffet</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16B979] shrink-0" />
              <span>Veg & Non-Veg Days</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#16B979] shrink-0" />
              <span>FSSAI Certified Hygiene</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
