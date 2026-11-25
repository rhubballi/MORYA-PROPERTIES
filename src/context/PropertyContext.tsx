import React, { createContext, useContext, useState, useEffect } from 'react';
import { Property, Enquiry, ServiceItem, FilterState, EnquiryStatus } from '../types';
import { INITIAL_PROPERTIES, SERVICES_DATA } from '../data/mockData';
import { STORAGE_KEYS, isSupabaseConfigured, supabase } from '../lib/supabase';

interface PropertyContextType {
  properties: Property[];
  enquiries: Enquiry[];
  services: ServiceItem[];
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  resetFilters: () => void;
  filteredProperties: Property[];
  addProperty: (newProp: Omit<Property, 'id' | 'createdAt'>) => Promise<Property>;
  updateProperty: (id: string, updated: Partial<Property>) => Promise<void>;
  deleteProperty: (id: string) => Promise<void>;
  getPropertyBySlug: (slug: string) => Property | undefined;
  getPropertyById: (id: string) => Property | undefined;
  submitEnquiry: (enquiryData: {
    fullName: string;
    phone: string;
    email?: string;
    serviceCategory: string;
    interestItemId?: string;
    interestTitle?: string;
    preferredLocation?: string;
    budgetRange?: string;
    message: string;
  }) => Promise<{ success: boolean; message: string }>;
  updateEnquiryStatus: (id: string, status: EnquiryStatus, internalNotes?: string, assignedTo?: string) => Promise<void>;
  deleteEnquiry: (id: string) => Promise<void>;
  exportEnquiriesCSV: () => void;
  resetToDemoData: () => void;
}

const defaultFilters: FilterState = {
  searchQuery: '',
  listingType: 'all',
  category: 'all',
  propertyType: '',
  location: '',
  minPrice: 0,
  maxPrice: 20000000,
  bedrooms: '',
  sortBy: 'newest',
};

const initialSampleEnquiries: Enquiry[] = [
  {
    id: "enq-101",
    fullName: "Mahesh Deshmukh",
    phone: "+91 98220 11223",
    email: "mahesh.d@gmail.com",
    serviceCategory: "buy",
    interestTitle: "Elegant 2 BHK Apartment in Chavan Nagar",
    preferredLocation: "Dhankawadi",
    budgetRange: "₹65 Lakh - ₹75 Lakh",
    message: "Interested in scheduling a site visit this coming Saturday for the 2 BHK apartment.",
    status: "new",
    assignedTo: "Nilesh Ramchandra Tarde",
    internalNotes: "Prefers morning 11 AM inspection. Verified contact.",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
  },
  {
    id: "enq-102",
    fullName: "Pooja Patil",
    phone: "+91 94230 45678",
    email: "pooja.patil@outlook.com",
    serviceCategory: "documentation",
    interestTitle: "Registered Rent Agreement",
    preferredLocation: "Katraj",
    budgetRange: "Standard",
    message: "Need doorstep biometric registration for our rental flat in Katraj.",
    status: "in_progress",
    assignedTo: "Bhagyashri",
    internalNotes: "Biometric slot scheduled for tomorrow 3 PM.",
    createdAt: new Date(Date.now() - 3600000 * 26).toISOString()
  },
  {
    id: "enq-103",
    fullName: "Amitabh K.",
    phone: "+91 99700 88990",
    email: "amitabh.k@techcorp.com",
    serviceCategory: "commercial",
    interestTitle: "Furnished Modern Corporate Office Space",
    preferredLocation: "Swargate",
    budgetRange: "₹60,000 - ₹70,000 / mo",
    message: "Looking for an office space for our 15-member team. Ready to move immediately.",
    status: "contacted",
    assignedTo: "Aditya",
    internalNotes: "Shared commercial lease draft and parking details.",
    createdAt: new Date(Date.now() - 3600000 * 48).toISOString()
  }
];

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export const PropertyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 1. Properties State
  const [properties, setProperties] = useState<Property[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.PROPERTIES);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved properties", e);
      }
    }
    return INITIAL_PROPERTIES;
  });

  // 2. Enquiries State
  const [enquiries, setEnquiries] = useState<Enquiry[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error("Failed to parse saved enquiries", e);
      }
    }
    return initialSampleEnquiries;
  });

  // 3. Services State
  const [services] = useState<ServiceItem[]>(SERVICES_DATA);

  // 4. Filters State
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  // Save properties to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROPERTIES, JSON.stringify(properties));
  }, [properties]);

  // Save enquiries to local storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(enquiries));
  }, [enquiries]);

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  // Add Property
  const addProperty = async (newPropData: Omit<Property, 'id' | 'createdAt'>): Promise<Property> => {
    const id = `prop-${Date.now()}`;
    const newProperty: Property = {
      ...newPropData,
      id,
      createdAt: new Date().toISOString()
    };

    setProperties(prev => [newProperty, ...prev]);

    // If Supabase is connected, attempt sync
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('properties').insert([{
          title: newProperty.title,
          slug: newProperty.slug,
          description: newProperty.description,
          listing_type: newProperty.listingType,
          property_type: newProperty.propertyType,
          price: newProperty.price,
          carpet_area: newProperty.carpetArea,
          super_builtup_area: newProperty.superBuiltupArea,
          bedrooms: newProperty.bedrooms,
          bathrooms: newProperty.bathrooms,
          furnishing: newProperty.furnishing,
          address: newProperty.address,
          city: newProperty.city,
          featured: newProperty.featured,
          is_sample_listing: newProperty.isSampleListing,
          status: newProperty.status,
          amenities: newProperty.amenities,
          featured_image: newProperty.featuredImage,
        }]);
      } catch (err) {
        console.error("Supabase sync failed (saved in local store):", err);
      }
    }

    return newProperty;
  };

  // Update Property
  const updateProperty = async (id: string, updated: Partial<Property>): Promise<void> => {
    setProperties(prev =>
      prev.map(p => (p.id === id ? { ...p, ...updated, updatedAt: new Date().toISOString() } : p))
    );

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('properties').update({
          ...updated,
          updated_at: new Date().toISOString()
        }).eq('id', id);
      } catch (err) {
        console.error("Supabase update error:", err);
      }
    }
  };

  // Delete Property
  const deleteProperty = async (id: string): Promise<void> => {
    setProperties(prev => prev.filter(p => p.id !== id));

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('properties').delete().eq('id', id);
      } catch (err) {
        console.error("Supabase delete error:", err);
      }
    }
  };

  // Helper lookups
  const getPropertyBySlug = (slug: string) => properties.find(p => p.slug === slug);
  const getPropertyById = (id: string) => properties.find(p => p.id === id);

  // Submit Enquiry
  const submitEnquiry = async (data: {
    fullName: string;
    phone: string;
    email?: string;
    serviceCategory: string;
    interestItemId?: string;
    interestTitle?: string;
    preferredLocation?: string;
    budgetRange?: string;
    message: string;
  }): Promise<{ success: boolean; message: string }> => {
    // Basic phone validation
    const cleanPhone = data.phone.replace(/[^0-9+]/g, '');
    if (cleanPhone.length < 10) {
      return { success: false, message: "Please provide a valid 10-digit mobile number." };
    }

    const newEnquiry: Enquiry = {
      id: `enq-${Date.now()}`,
      fullName: data.fullName.trim(),
      phone: data.phone.trim(),
      email: data.email?.trim() || undefined,
      serviceCategory: data.serviceCategory,
      interestItemId: data.interestItemId,
      interestTitle: data.interestTitle,
      preferredLocation: data.preferredLocation,
      budgetRange: data.budgetRange,
      message: data.message.trim(),
      status: 'new',
      createdAt: new Date().toISOString()
    };

    setEnquiries(prev => [newEnquiry, ...prev]);

    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from('enquiries').insert([{
          full_name: newEnquiry.fullName,
          phone: newEnquiry.phone,
          email: newEnquiry.email,
          service_category: newEnquiry.serviceCategory,
          interest_title: newEnquiry.interestTitle,
          preferred_location: newEnquiry.preferredLocation,
          budget_range: newEnquiry.budgetRange,
          message: newEnquiry.message,
          status: newEnquiry.status
        }]);
      } catch (err) {
        console.warn("Supabase enquiry sync failed (stored in local store):", err);
      }
    }

    return { 
      success: true, 
      message: "Thank you! Your enquiry has been received. Our team will contact you shortly." 
    };
  };

  // Update Enquiry Status
  const updateEnquiryStatus = async (
    id: string,
    status: EnquiryStatus,
    internalNotes?: string,
    assignedTo?: string
  ): Promise<void> => {
    setEnquiries(prev =>
      prev.map(e => {
        if (e.id === id) {
          return {
            ...e,
            status,
            internalNotes: internalNotes !== undefined ? internalNotes : e.internalNotes,
            assignedTo: assignedTo !== undefined ? assignedTo : e.assignedTo,
            updatedAt: new Date().toISOString()
          };
        }
        return e;
      })
    );
  };

  // Delete Enquiry
  const deleteEnquiry = async (id: string): Promise<void> => {
    setEnquiries(prev => prev.filter(e => e.id !== id));
  };

  // Export Enquiries as CSV
  const exportEnquiriesCSV = () => {
    if (enquiries.length === 0) {
      alert("No enquiries to export.");
      return;
    }

    const headers = ["ID", "Full Name", "Phone", "Email", "Service Category", "Interest Item", "Location", "Budget", "Message", "Status", "Assigned To", "Date"];
    const rows = enquiries.map(e => [
      `"${e.id}"`,
      `"${e.fullName.replace(/"/g, '""')}"`,
      `"${e.phone}"`,
      `"${e.email || ''}"`,
      `"${e.serviceCategory}"`,
      `"${(e.interestTitle || '').replace(/"/g, '""')}"`,
      `"${(e.preferredLocation || '').replace(/"/g, '""')}"`,
      `"${(e.budgetRange || '').replace(/"/g, '""')}"`,
      `"${(e.message || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
      `"${e.status}"`,
      `"${(e.assignedTo || '').replace(/"/g, '""')}"`,
      `"${new Date(e.createdAt).toLocaleDateString()}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `morya_enquiries_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Reset to Demo Data
  const resetToDemoData = () => {
    setProperties(INITIAL_PROPERTIES);
    setEnquiries(initialSampleEnquiries);
    localStorage.removeItem(STORAGE_KEYS.PROPERTIES);
    localStorage.removeItem(STORAGE_KEYS.ENQUIRIES);
  };

  // Computed Filtered Properties
  const filteredProperties = properties.filter(prop => {
    // Search query
    if (filters.searchQuery) {
      const q = filters.searchQuery.toLowerCase();
      const match = 
        prop.title.toLowerCase().includes(q) ||
        prop.location.toLowerCase().includes(q) ||
        prop.address.toLowerCase().includes(q) ||
        prop.propertyType.toLowerCase().includes(q);
      if (!match) return false;
    }

    // Listing Type (sale / rent)
    if (filters.listingType !== 'all' && prop.listingType !== filters.listingType) {
      return false;
    }

    // Category (residential / commercial / land)
    if (filters.category !== 'all' && prop.category !== filters.category) {
      return false;
    }

    // Property Type
    if (filters.propertyType && prop.propertyType.toLowerCase() !== filters.propertyType.toLowerCase()) {
      return false;
    }

    // Location
    if (filters.location && !prop.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }

    // Bedrooms
    if (filters.bedrooms) {
      const bhk = parseInt(filters.bedrooms, 10);
      if (bhk === 4) {
        if (!prop.bedrooms || prop.bedrooms < 4) return false;
      } else {
        if (prop.bedrooms !== bhk) return false;
      }
    }

    // Price
    if (filters.minPrice > 0 && prop.price < filters.minPrice) return false;
    if (filters.maxPrice > 0 && prop.price > filters.maxPrice) return false;

    return true;
  }).sort((a, b) => {
    if (filters.sortBy === 'price-asc') return a.price - b.price;
    if (filters.sortBy === 'price-desc') return b.price - a.price;
    if (filters.sortBy === 'area-desc') return b.carpetArea - a.carpetArea;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <PropertyContext.Provider
      value={{
        properties,
        enquiries,
        services,
        filters,
        setFilters,
        resetFilters,
        filteredProperties,
        addProperty,
        updateProperty,
        deleteProperty,
        getPropertyBySlug,
        getPropertyById,
        submitEnquiry,
        updateEnquiryStatus,
        deleteEnquiry,
        exportEnquiriesCSV,
        resetToDemoData,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};

export const useProperties = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('useProperties must be used within a PropertyProvider');
  }
  return context;
};
