export type GalleryCategory = 'All' | 'Rooms' | 'Dining & Mess' | 'Lounge & Chill' | 'Washrooms' | 'Facilities';

export interface PgGalleryPhoto {
  id: string;
  title: string;
  category: 'Rooms' | 'Dining & Mess' | 'Lounge & Chill' | 'Washrooms' | 'Facilities';
  image: string;
  tag: string;
  description: string;
}

export interface PgRoom {
  id: string;
  name: string;
  sharing: 'Single' | 'Double' | 'Triple' | 'Four';
  price: number;
  priceDisplay: string;
  deposit: string;
  noticePeriod: string;
  occupancy: string;
  bedsAvailable: string;
  popular?: boolean;
  image: string;
  galleryImages: string[];
  description: string;
  features: string[];
}

export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface NearbyLandmark {
  name: string;
  distance: string;
  time: string;
  iconType: 'work' | 'transit' | 'food' | 'health';
}

export interface FoodMenuItem {
  day: string;
  breakfast: string;
  lunch: string;
  dinner: string;
  highlight?: string;
}

export interface PgReview {
  id: string;
  name: string;
  company: string;
  roomType: string;
  stayDuration: string;
  rating: number;
  comment: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredRoomType: string;
  visitDate: string;
  expectedMoveIn: string;
  message: string;
}

export interface ToastNotification {
  id: string;
  message: string;
  type?: 'success' | 'info';
}
