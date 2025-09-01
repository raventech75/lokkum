// Types de base pour le restaurant
export interface Restaurant {
  id: string;
  name: string;
  description: string;
  address: Address;
  contact: Contact;
  hours: OperatingHours[];
  amenities: Amenity[];
  images: ImageGallery;
  socialMedia: SocialMedia;
}

export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface Contact {
  phone: string;
  email: string;
  website: string;
}

export interface OperatingHours {
  day: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
  dayLabel: string;
  lunch?: {
    open: string;
    close: string;
  };
  dinner?: {
    open: string;
    close: string;
  };
  closed?: boolean;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface ImageGallery {
  hero: string[];
  interior: string[];
  exterior: string[];
  food: string[];
  team: string[];
}

export interface SocialMedia {
  instagram?: string;
  facebook?: string;
  tripadvisor?: string;
  google?: string;
}

// Types pour le menu
export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  items: MenuItem[];
  order: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  allergens: string[];
  dietary: DietaryInfo[];
  ingredients: string[];
  cookingStyles?: CookingStyle[];
  popular?: boolean;
  signature?: boolean;
  seasonal?: boolean;
}

export interface DietaryInfo {
  type: 'vegetarian' | 'vegan' | 'gluten-free' | 'dairy-free' | 'halal' | 'organic';
  icon: string;
}

export interface CookingStyle {
  name: 'bleu' | 'saignant' | 'à point' | 'bien cuit';
  description: string;
  temperature: string;
}

// Types pour les réservations
export interface Reservation {
  id: string;
  customerInfo: CustomerInfo;
  reservationDetails: ReservationDetails;
  specialRequests?: SpecialRequest[];
  status: ReservationStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  preferences?: CustomerPreferences;
}

export interface CustomerPreferences {
  dietaryRestrictions: string[];
  seatingPreference: 'indoor' | 'terrace' | 'private' | 'no_preference';
  previousVisits: number;
  favoriteItems: string[];
}

export interface ReservationDetails {
  date: string;
  time: string;
  partySize: number;
  duration: number; // en minutes
  tableType?: 'standard' | 'terrace' | 'private' | 'bar';
  occasion?: Occasion;
}

export interface SpecialRequest {
  type: 'birthday' | 'anniversary' | 'business' | 'dietary' | 'accessibility' | 'other';
  description: string;
  additionalCost?: number;
}

export interface Occasion {
  type: 'birthday' | 'anniversary' | 'business_dinner' | 'date_night' | 'celebration' | 'other';
  details?: string;
}

export type ReservationStatus = 
  | 'pending' 
  | 'confirmed' 
  | 'seated' 
  | 'completed' 
  | 'cancelled' 
  | 'no_show';

// Types pour les avis
export interface Review {
  id: string;
  customerName: string;
  rating: number; // 1-5
  comment: string;
  date: Date;
  verified: boolean;
  response?: RestaurantResponse;
  images?: string[];
  visitType: 'lunch' | 'dinner' | 'takeaway' | 'event';
  recommendations: string[];
}

export interface RestaurantResponse {
  message: string;
  date: Date;
  author: string; // nom du gérant/chef
}

// Types pour les événements et promotions
export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  endDate?: Date;
  type: EventType;
  image?: string;
  price?: number;
  maxCapacity?: number;
  currentBookings: number;
  isRecurring: boolean;
  recurringPattern?: RecurringPattern;
}

export type EventType = 
  | 'wine_tasting'
  | 'cooking_class' 
  | 'live_music'
  | 'private_event'
  | 'holiday_special'
  | 'chef_table';

export interface RecurringPattern {
  frequency: 'weekly' | 'monthly';
  dayOfWeek?: number; // 0-6
  dayOfMonth?: number; // 1-31
}

// Types pour les notifications et chat
export interface ChatMessage {
  id: string;
  type: 'user' | 'bot' | 'staff';
  content: string;
  timestamp: Date;
  attachments?: ChatAttachment[];
  actions?: ChatAction[];
}

export interface ChatAttachment {
  type: 'image' | 'file' | 'menu' | 'reservation';
  url: string;
  title: string;
  description?: string;
}

export interface ChatAction {
  type: 'reservation' | 'menu' | 'call' | 'directions';
  label: string;
  data: any;
}

// Types pour l'analytics et le suivi
export interface Analytics {
  pageViews: number;
  uniqueVisitors: number;
  reservations: ReservationAnalytics;
  popularItems: PopularItem[];
  customerSatisfaction: number;
  busyTimes: BusyTime[];
}

export interface ReservationAnalytics {
  total: number;
  confirmed: number;
  cancelled: number;
  noShows: number;
  averagePartySize: number;
  peakDays: string[];
  peakTimes: string[];
}

export interface PopularItem {
  itemId: string;
  itemName: string;
  orders: number;
  rating: number;
}

export interface BusyTime {
  day: string;
  hour: number;
  occupancy: number; // pourcentage
}

// Types pour les formulaires
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone';
}

export interface NewsletterSubscription {
  email: string;
  preferences: {
    events: boolean;
    promotions: boolean;
    menu_updates: boolean;
    wine_news: boolean;
  };
  subscriptionDate: Date;
}

// Types pour la configuration du site
export interface SiteConfig {
  restaurant: Restaurant;
  menu: MenuCategory[];
  events: Event[];
  features: {
    reservations: boolean;
    chat: boolean;
    newsletter: boolean;
    events: boolean;
    delivery: boolean;
  };
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };
}

// Types utilitaires
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface APIResponse<T> {
  data?: T;
  message: string;
  status: 'success' | 'error';
  code?: number;
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder: 'asc' | 'desc';
}

export interface FilterParams {
  category?: string;
  priceRange?: [number, number];
  dietary?: string[];
  rating?: number;
  date?: string;
}