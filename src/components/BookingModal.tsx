import React, { useState, useEffect } from 'react';
import { X, CalendarCheck, CheckCircle2, User, Phone, Mail, Calendar, MessageSquare, BedDouble, MapPin } from 'lucide-react';
import { BookingFormData, PgRoom } from '../types';
import { pgInfo } from '../data/singlePgData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomType?: string;
  rooms: PgRoom[];
  onSubmitSuccess: (message: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedRoomType = 'Premium Double Sharing',
  rooms,
  onSubmitSuccess,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    preferredRoomType: preselectedRoomType || 'Premium Double Sharing',
    visitDate: '',
    expectedMoveIn: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        preferredRoomType: preselectedRoomType || prev.preferredRoomType || 'Premium Double Sharing',
      }));
      setIsSubmitted(false);
      setErrors({});
    }
  }, [isOpen, preselectedRoomType]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9+ -]{7,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.visitDate) {
      newErrors.visitDate = 'Please select your preferred visit date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      setIsSubmitted(true);
      onSubmitSuccess(`Thank you ${formData.fullName}! Your visit to UrbanNest PG has been scheduled.`);

      setTimeout(() => {
        setFormData({
          fullName: '',
          phone: '',
          email: '',
          preferredRoomType: 'Premium Double Sharing',
          visitDate: '',
          expectedMoveIn: '',
          message: '',
        });
      }, 400);
    }
  };

  return (
    <div
      id="booking-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 md:p-6"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        id="booking-modal-content"
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#5B3DF5] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/15 backdrop-blur-xs">
              <CalendarCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-tight">Schedule a Visit to UrbanNest PG</h2>
              <div className="flex items-center gap-1.5 text-xs text-white/80 mt-0.5">
                <MapPin className="w-3 h-3 text-[#16B979]" />
                <span>Marathahalli, Outer Ring Road, Bengaluru</span>
              </div>
            </div>
          </div>
          <button
            id="booking-modal-close-btn"
            onClick={onClose}
            aria-label="Close"
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-7">
          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#16B979]/15 text-[#16B979] flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-extrabold text-[#172033] mb-2">
                Visit Scheduled Successfully!
              </h3>
              <p className="text-sm text-[#737D90] max-w-xs mx-auto mb-6 leading-relaxed">
                We have received your details. Our PG manager will contact you on WhatsApp/Call to confirm your visit time.
              </p>
              <button
                id="booking-success-done-btn"
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-[#5B3DF5] text-white text-sm font-semibold hover:bg-[#4d30e3] transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-[#172033] uppercase tracking-wider mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    id="booking-fullname-input"
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] transition-colors ${
                      errors.fullName ? 'border-rose-500 bg-rose-50/30' : 'border-gray-200 bg-[#F8F9FC]'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.fullName}</p>
                )}
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#172033] uppercase tracking-wider mb-1">
                    Phone Number (WhatsApp) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="booking-phone-input"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] transition-colors ${
                        errors.phone ? 'border-rose-500 bg-rose-50/30' : 'border-gray-200 bg-[#F8F9FC]'
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#172033] uppercase tracking-wider mb-1">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="booking-email-input"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-gray-200 bg-[#F8F9FC] text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Room Sharing Choice */}
              <div>
                <label className="block text-xs font-bold text-[#172033] uppercase tracking-wider mb-1">
                  Preferred Room Sharing
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <BedDouble className="w-4 h-4" />
                  </div>
                  <select
                    id="booking-room-type-select"
                    value={formData.preferredRoomType}
                    onChange={(e) => setFormData({ ...formData, preferredRoomType: e.target.value })}
                    className="w-full pl-10 pr-8 py-2.5 rounded-xl border border-gray-200 bg-[#F8F9FC] text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] transition-colors appearance-none"
                  >
                    {rooms.map((r) => (
                      <option key={r.id} value={r.name}>
                        {r.name} ({r.priceDisplay})
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-gray-400 text-xs">
                    ▼
                  </div>
                </div>
              </div>

              {/* Visit Date & Expected Move-in */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-[#172033] uppercase tracking-wider mb-1">
                    Visit Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <input
                      id="booking-visit-date-input"
                      type="date"
                      value={formData.visitDate}
                      onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                      className={`w-full pl-10 pr-3.5 py-2.5 rounded-xl border text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] transition-colors ${
                        errors.visitDate ? 'border-rose-500 bg-rose-50/30' : 'border-gray-200 bg-[#F8F9FC]'
                      }`}
                    />
                  </div>
                  {errors.visitDate && (
                    <p className="text-[11px] text-rose-500 mt-1 font-medium">{errors.visitDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#172033] uppercase tracking-wider mb-1">
                    Expected Move-in
                  </label>
                  <input
                    type="date"
                    value={formData.expectedMoveIn}
                    onChange={(e) => setFormData({ ...formData, expectedMoveIn: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 bg-[#F8F9FC] text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] transition-colors"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-[#172033] uppercase tracking-wider mb-1">
                  Questions / Specific Requirements (Optional)
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none text-gray-400">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    id="booking-message-textarea"
                    rows={2}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Need covered bike parking, preferred 2nd floor"
                    className="w-full pl-10 pr-3.5 py-2 rounded-xl border border-gray-200 bg-[#F8F9FC] text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#5B3DF5] transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Form Buttons */}
              <div className="pt-3 flex items-center justify-end gap-3 border-t border-gray-100">
                <button
                  type="button"
                  id="booking-cancel-btn"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl border border-gray-200 text-sm font-semibold text-[#172033] hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  id="booking-submit-btn"
                  className="px-6 py-2.5 rounded-xl bg-[#5B3DF5] text-white text-sm font-bold hover:bg-[#4d30e3] shadow-md shadow-[#5B3DF5]/25 transition-all cursor-pointer"
                >
                  Confirm Free Visit
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
