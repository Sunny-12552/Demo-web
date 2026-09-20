import React, { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PgGallery } from './components/PgGallery';
import { PhotoModal } from './components/PhotoModal';
import { RoomSection } from './components/RoomSection';
import { FoodMenuSection } from './components/FoodMenuSection';
import { Amenities } from './components/Amenities';
import { LocationSection } from './components/LocationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { BookingModal } from './components/BookingModal';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import {
  pgInfo,
  pgRooms,
  pgGalleryPhotos,
  pgAmenities,
} from './data/singlePgData';
import { PgRoom, PgGalleryPhoto, ToastNotification } from './types';

export default function App() {
  // Active photo for the full-screen photo modal
  const [selectedPhoto, setSelectedPhoto] = useState<PgGalleryPhoto | null>(null);

  // Booking modal state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [bookingPreselectedRoom, setBookingPreselectedRoom] = useState<string>('Premium Double Sharing');

  // Toasts notification system
  const [toasts, setToasts] = useState<ToastNotification[]>([]);

  const addToast = useCallback((message: string, type: 'success' | 'info' = 'success') => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenBooking = (roomName?: string) => {
    if (roomName) {
      setBookingPreselectedRoom(roomName);
    }
    setIsBookingModalOpen(true);
  };

  const handleEnquireRoom = (room: PgRoom) => {
    setBookingPreselectedRoom(room.name);
    setIsBookingModalOpen(true);
  };

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#172033] flex flex-col selection:bg-[#5B3DF5] selection:text-white">
      {/* Sticky Responsive Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Layout */}
      <main className="flex-grow">
        {/* 1. Hero Showcase with Scrollable Pictures */}
        <Hero
          onScheduleVisit={() => handleOpenBooking()}
          onViewRoomsClick={() => scrollToSection('#rooms')}
        />

        {/* 2. Room Sharing Options & Pricing */}
        <RoomSection
          rooms={pgRooms}
          onEnquireRoom={handleEnquireRoom}
        />

        {/* 3. Dedicated Horizontal Scrollable PG Photo Gallery */}
        <PgGallery
          photos={pgGalleryPhotos}
          onSelectPhoto={(photo) => setSelectedPhoto(photo)}
        />

        {/* 4. Weekly Food & Mess Menu Section */}
        <FoodMenuSection />

        {/* 5. All-Inclusive Amenities */}
        <Amenities amenities={pgAmenities} />

        {/* 6. Strategic Location & Tech Park Commute Map */}
        <LocationSection
          onScheduleVisit={() => handleOpenBooking()}
        />

        {/* 7. Resident Reviews & Community Testimonials */}
        <ReviewsSection />

        {/* 8. Call to Action */}
        <CTA
          onBookVisit={() => handleOpenBooking()}
          onExploreGallery={() => scrollToSection('#gallery')}
        />
      </main>

      {/* Footer */}
      <Footer onNavClick={scrollToSection} />

      {/* Full Photo Lightbox Modal */}
      <PhotoModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onBookVisit={() => handleOpenBooking()}
      />

      {/* Schedule a Visit Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        preselectedRoomType={bookingPreselectedRoom}
        rooms={pgRooms}
        onSubmitSuccess={(msg) => addToast(msg, 'success')}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <FloatingWhatsApp onClick={() => handleOpenBooking()} />

      {/* Toast Notifications */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
