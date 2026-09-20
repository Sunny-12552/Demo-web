import React, { useRef, useState, useMemo } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Maximize2,
  Camera,
  Layers
} from 'lucide-react';
import { PgGalleryPhoto, GalleryCategory } from '../types';
import { SafeImage } from './SafeImage';

interface PgGalleryProps {
  photos: PgGalleryPhoto[];
  onSelectPhoto: (photo: PgGalleryPhoto) => void;
}

const categories: GalleryCategory[] = [
  'All',
  'Rooms',
  'Dining & Mess',
  'Lounge & Chill',
  'Washrooms',
  'Facilities',
];

export const PgGallery: React.FC<PgGalleryProps> = ({ photos, onSelectPhoto }) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'All') return photos;
    return photos.filter((p) => p.category === activeCategory);
  }, [photos, activeCategory]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Mouse Drag to scroll
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#5B3DF5]/10 text-[#5B3DF5] text-xs font-bold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>PG Photo Tour</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight">
              Inside UrbanNest PG
            </h2>
            <p className="text-sm sm:text-base text-[#737D90] mt-2 max-w-xl">
              Take an interactive walkthrough of our furnished rooms, clean cafeteria, co-working lounge, and amenities.
            </p>
          </div>

          {/* Navigation Arrows & Swipe Hint */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <span className="text-xs text-[#737D90] font-medium hidden sm:inline-block">
              Swipe or use arrows to tour
            </span>
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll gallery left"
              className="p-3 rounded-xl border border-gray-200 text-[#172033] hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer active:scale-95 shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll gallery right"
              className="p-3 rounded-xl border border-gray-200 text-[#172033] hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer active:scale-95 shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#5B3DF5] text-white shadow-md shadow-[#5B3DF5]/25'
                  : 'bg-[#F8F9FC] text-[#737D90] hover:text-[#172033] hover:bg-gray-200/60 border border-gray-200/60'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="text-xs text-[#737D90] ml-auto shrink-0 pl-4 font-medium">
            {filteredPhotos.length} {filteredPhotos.length === 1 ? 'photo' : 'photos'}
          </span>
        </div>

        {/* Horizontal Scrollable Gallery Container */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scroll-smooth no-scrollbar select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className="group relative flex-none w-[82vw] sm:w-[380px] md:w-[420px] rounded-3xl overflow-hidden bg-white border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 snap-start flex flex-col cursor-pointer"
            >
              {/* Photo Image Frame */}
              <div className="relative aspect-4/3 overflow-hidden bg-gray-900">
                <SafeImage
                  src={photo.image}
                  alt={photo.title}
                  fallbackType="bedroom"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#5B3DF5] text-white shadow-md">
                    {photo.tag}
                  </span>
                  <div className="p-2 rounded-full bg-white/85 text-[#172033] shadow-md group-hover:bg-white transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Overlay Info on Photo */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gray-300 block">
                    {photo.category}
                  </span>
                  <h3 className="text-lg font-extrabold text-white group-hover:text-[#7B63F7] transition-colors line-clamp-1">
                    {photo.title}
                  </h3>
                </div>
              </div>

              {/* Photo Caption / Description */}
              <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between bg-white">
                <p className="text-xs sm:text-sm text-[#737D90] line-clamp-2 leading-relaxed mb-3">
                  {photo.description}
                </p>
                
                <div className="flex items-center justify-between pt-2 border-t border-gray-100 text-xs text-[#5B3DF5] font-semibold">
                  <span>Click to expand view</span>
                  <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
