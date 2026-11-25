export type ListingType = 'sale' | 'rent';

export type PropertyCategoryType = 'residential' | 'commercial' | 'land' | 'other';

export type PropertyType = 
  | 'Apartment' 
  | 'Villa' 
  | 'Row House' 
  | 'Penthouse' 
  | 'Studio' 
  | 'Office Space' 
  | 'Shop' 
  | 'Showroom' 
  | 'Commercial Land' 
  | 'Plot';

export interface Property {
  id: string;
  title: string;
  slug: string;
  description: string;
  listingType: ListingType;
  propertyType: PropertyType;
  category: PropertyCategoryType;
  price: number; // in INR
  priceDisplay: string; // e.g. "₹ 65 Lakh" or "₹ 25,000 / month"
  priceNegotiable?: boolean;
  carpetArea: number; // in sq ft
  superBuiltupArea?: number; // in sq ft
  bedrooms?: number;
  bathrooms?: number;
  balconies?: number;
  furnishing: 'Unfurnished' | 'Semi-Furnished' | 'Fully Furnished';
  facing?: string;
  floor?: string;
  possessionStatus: 'Ready to Move' | 'Under Construction' | 'Immediate';
  location: string;
  address: string;
  landmark?: string;
  city: string;
  featured: boolean;
  isSampleListing: boolean; // Flag to indicate demo/showcase properties vs verified client listings
  status: 'active' | 'under_negotiation' | 'sold' | 'rented';
  amenities: string[];
  images: string[];
  featuredImage: string;
  createdAt: string;
  updatedAt?: string;
}

export type ServiceCategory = 
  | 'real_estate' 
  | 'commercial'
  | 'loans' 
  | 'insurance' 
  | 'documentation' 
  | 'consulting' 
  | 'other';

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  category: ServiceCategory;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  features: string[];
  requiredDocuments?: string[];
  processSteps: {
    step: number;
    title: string;
    description: string;
  }[];
  disclaimer?: string;
  isActive: boolean;
}

export type EnquiryStatus = 'new' | 'in_progress' | 'contacted' | 'closed' | 'cancelled';

export interface Enquiry {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  serviceCategory: string; // 'buy' | 'sell' | 'rent' | 'commercial' | 'loan' | 'insurance' | 'documentation' | 'general'
  interestItemId?: string; // Property ID or Service ID
  interestTitle?: string; // e.g. "2 BHK Apartment in Dhankawadi"
  preferredLocation?: string;
  budgetRange?: string;
  message: string;
  status: EnquiryStatus;
  assignedTo?: string; // Staff name (e.g. "Nilesh Tarde")
  internalNotes?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  rating: number;
  comment: string;
  date: string;
  serviceType: string;
  isVerified: boolean; // Flag for verified vs placeholder testimonials
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  phone: string;
  email?: string;
  specialization: string;
  isVerified: boolean;
}

export interface FilterState {
  searchQuery: string;
  listingType: 'all' | 'sale' | 'rent';
  category: 'all' | 'residential' | 'commercial' | 'land';
  propertyType: string;
  location: string;
  minPrice: number;
  maxPrice: number;
  bedrooms: string;
  sortBy: 'price-asc' | 'price-desc' | 'newest' | 'area-desc';
}
