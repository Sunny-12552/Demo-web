import React, { useEffect } from 'react';
import { X, CalendarCheck, Tag, Info } from 'lucide-react';
import { PgGalleryPhoto } from '../types';
import { SafeImage } from './SafeImage';

interface PhotoModalProps {
  photo: PgGalleryPhoto | null;
  onClose: () => void;
  onBookVisit: () => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({ photo, onClose, onBookVisit }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!photo) return null;

  return (
    <div
      id="photo-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close photo view"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Photo Frame */}
        <div className="relative aspect-16/10 sm:aspect-16/9 bg-black">
          <SafeImage
            src={photo.image}
            alt={photo.title}
            fallbackType="bedroom"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#5B3DF5] text-white shadow-md">
              {photo.tag}
            </span>
          </div>
        </div>

        {/* Content Footer */}
        <div className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 bg-white">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#5B3DF5] uppercase tracking-wider mb-1">
              <Tag className="w-3.5 h-3.5" />
              <span>UrbanNest PG • {photo.category}</span>
            </div>
            <h3 className="text-2xl font-extrabold text-[#172033]">
              {photo.title}
            </h3>
            <p className="text-sm text-[#737D90] mt-2 max-w-xl leading-relaxed">
              {photo.description}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-[#172033] hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookVisit();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#5B3DF5] text-white text-sm font-bold hover:bg-[#4d30e3] shadow-md shadow-[#5B3DF5]/25 transition-all cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Schedule a Visit</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
