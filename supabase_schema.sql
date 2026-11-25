-- ====================================================================
-- SUPABASE / POSTGRESQL SCHEMA FOR MORYA PROPERTIES AND MULTISERVICES
-- ====================================================================

-- Enable UUID extension if not enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. USERS / ADMIN PROFILES TABLE
CREATE TABLE IF NOT EXISTS public.users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'staff' CHECK (role IN ('admin', 'staff', 'manager')),
    phone TEXT,
    avatar_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. LOCATIONS TABLE (Pune & Metropolitan Service Areas)
CREATE TABLE IF NOT EXISTS public.locations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    pincode TEXT,
    city TEXT NOT NULL DEFAULT 'Pune',
    state TEXT NOT NULL DEFAULT 'Maharashtra',
    is_popular BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. PROPERTY CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS public.property_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    category_type TEXT NOT NULL CHECK (category_type IN ('residential', 'commercial', 'land', 'other')),
    description TEXT,
    icon_name TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 4. PROPERTIES TABLE
CREATE TABLE IF NOT EXISTS public.properties (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT NOT NULL,
    listing_type TEXT NOT NULL CHECK (listing_type IN ('sale', 'rent')),
    property_type TEXT NOT NULL, -- e.g. 'Apartment', 'Villa', 'Office', 'Shop', 'Plot'
    category_id UUID REFERENCES public.property_categories(id) ON DELETE SET NULL,
    price NUMERIC(14, 2) NOT NULL,
    price_negotiable BOOLEAN DEFAULT false,
    carpet_area NUMERIC(10, 2) NOT NULL, -- in sq.ft
    super_builtup_area NUMERIC(10, 2),
    bedrooms INTEGER DEFAULT 0,
    bathrooms INTEGER DEFAULT 0,
    balconies INTEGER DEFAULT 0,
    furnishing TEXT DEFAULT 'Unfurnished' CHECK (furnishing IN ('Unfurnished', 'Semi-Furnished', 'Fully Furnished')),
    facing TEXT, -- e.g., 'East', 'North-East', etc.
    floor_number INTEGER,
    total_floors INTEGER,
    possession_status TEXT DEFAULT 'Ready to Move' CHECK (possession_status IN ('Ready to Move', 'Under Construction', 'Immediate')),
    location_id UUID REFERENCES public.locations(id) ON DELETE SET NULL,
    address TEXT NOT NULL,
    landmark TEXT,
    pincode TEXT,
    city TEXT NOT NULL DEFAULT 'Pune',
    featured BOOLEAN DEFAULT false,
    is_sample_listing BOOLEAN DEFAULT false, -- Clearly mark demo/showcase properties
    status TEXT NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'under_negotiation', 'sold', 'rented', 'inactive')),
    amenities TEXT[] DEFAULT ARRAY[]::TEXT[],
    featured_image TEXT NOT NULL,
    latitude DOUBLE PRECISION,
    longitude DOUBLE PRECISION,
    created_by UUID REFERENCES public.users(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. PROPERTY IMAGES TABLE
CREATE TABLE IF NOT EXISTS public.property_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    property_id UUID NOT NULL REFERENCES public.properties(id) ON DELETE CASCADE,
    image_url TEXT NOT NULL,
    caption TEXT,
    display_order INTEGER DEFAULT 0,
    is_cover BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 6. SERVICES TABLE (Multi-services Catalog)
CREATE TABLE IF NOT EXISTS public.services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    category TEXT NOT NULL CHECK (category IN ('real_estate', 'loans', 'insurance', 'documentation', 'consulting')),
    short_description TEXT NOT NULL,
    full_description TEXT NOT NULL,
    icon_name TEXT NOT NULL,
    features TEXT[] DEFAULT ARRAY[]::TEXT[],
    required_documents TEXT[] DEFAULT ARRAY[]::TEXT[],
    process_steps TEXT[] DEFAULT ARRAY[]::TEXT[],
    disclaimer TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. ENQUIRIES TABLE (Unified Lead & Contact Management)
CREATE TABLE IF NOT EXISTS public.enquiries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    service_category TEXT NOT NULL, -- e.g. 'buy', 'sell', 'rent', 'commercial', 'loans', 'insurance', 'documentation', 'general'
    interest_item_id UUID, -- Optional property_id or service_id
    interest_title TEXT, -- Name of property or service
    preferred_location TEXT,
    budget_range TEXT,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'contacted', 'closed', 'cancelled')),
    assigned_to UUID REFERENCES public.users(id) ON DELETE SET NULL,
    internal_notes TEXT,
    ip_address TEXT,
    source TEXT DEFAULT 'website',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 8. SERVICE REQUESTS TABLE (Specific tailored service applications)
CREATE TABLE IF NOT EXISTS public.service_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    enquiry_id UUID REFERENCES public.enquiries(id) ON DELETE SET NULL,
    service_id UUID REFERENCES public.services(id) ON DELETE SET NULL,
    applicant_name TEXT NOT NULL,
    applicant_phone TEXT NOT NULL,
    applicant_email TEXT,
    request_type TEXT NOT NULL, -- e.g. 'home_loan_guidance', 'rent_agreement', 'insurance_consultation'
    additional_data JSONB DEFAULT '{}'::JSONB,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'under_review', 'action_taken', 'completed', 'rejected')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ====================================================================
-- INDEXES FOR OPTIMAL QUERY PERFORMANCE
-- ====================================================================
CREATE INDEX IF NOT EXISTS idx_properties_status ON public.properties(status);
CREATE INDEX IF NOT EXISTS idx_properties_listing_type ON public.properties(listing_type);
CREATE INDEX IF NOT EXISTS idx_properties_property_type ON public.properties(property_type);
CREATE INDEX IF NOT EXISTS idx_properties_location_id ON public.properties(location_id);
CREATE INDEX IF NOT EXISTS idx_properties_price ON public.properties(price);
CREATE INDEX IF NOT EXISTS idx_properties_featured ON public.properties(featured);
CREATE INDEX IF NOT EXISTS idx_enquiries_status ON public.enquiries(status);
CREATE INDEX IF NOT EXISTS idx_enquiries_service_category ON public.enquiries(service_category);
CREATE INDEX IF NOT EXISTS idx_enquiries_created_at ON public.enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_services_category ON public.services(category);

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.property_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.property_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_requests ENABLE ROW LEVEL SECURITY;

-- Public can read active properties, images, services, locations, categories
CREATE POLICY "Public can view active properties" ON public.properties
    FOR SELECT USING (status = 'active');

CREATE POLICY "Public can view property images" ON public.property_images
    FOR SELECT USING (true);

CREATE POLICY "Public can view active services" ON public.services
    FOR SELECT USING (is_active = true);

CREATE POLICY "Public can view locations" ON public.locations
    FOR SELECT USING (true);

CREATE POLICY "Public can view categories" ON public.property_categories
    FOR SELECT USING (true);

-- Public can submit enquiries and service requests
CREATE POLICY "Public can insert enquiries" ON public.enquiries
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can insert service requests" ON public.service_requests
    FOR INSERT WITH CHECK (true);

-- Authenticated staff/admins have full access
CREATE POLICY "Admins full access properties" ON public.properties
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admins full access property images" ON public.property_images
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admins full access services" ON public.services
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admins full access enquiries" ON public.enquiries
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "Admins full access service requests" ON public.service_requests
    FOR ALL TO authenticated USING (true) WITH CHECK (true);
