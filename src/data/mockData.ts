import { Property, ServiceItem, Testimonial, TeamMember } from '../types';

export const BUSINESS_INFO = {
  name: "Morya Properties and Multi Services",
  shortName: "Morya Properties",
  tagline: "Your Trusted Partner for Property and Essential Services in Pune",
  legalName: "Morya Properties and Multi Services",
  website: "https://moryapropertiesandmultiservices.com",
  alternateWebsite: "https://elitemoryaproperties.com",
  phones: [
    { number: "+919763915533", display: "+91 97639 15533", label: "Primary / WhatsApp" },
    { number: "+918605786065", display: "+91 86057 86065", label: "Support & Office" },
    { number: "+919765913355", display: "+91 97659 13355", label: "Property Specialist" }
  ],
  whatsappNumber: "919763915533",
  email: "contact@elitemoryaproperties.com",
  address: {
    shop: "Shop No. 23",
    surveyNo: "Sr. No. 11/2",
    landmark: "Opposite Panchvati Society, Near Teen Hatti Chowk Road",
    area: "Yashwantrao Chavan Nagar, Dhankawadi",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411043",
    full: "Shop No. 23, Sr. No. 11/2, Opp. Panchvati Society, Teen Hatti Chowk Road, Yashwantrao Chavan Nagar, Dhankawadi, Pune, Maharashtra – 411043"
  },
  hours: "Monday to Sunday: 10:00 AM – 8:00 PM",
  serviceAreas: [
    "Dhankawadi",
    "Bibwewadi",
    "Ambegaon BK",
    "Katraj",
    "Sahakar Nagar",
    "Taljai",
    "Pune-Satara Road",
    "Swargate",
    "Dhayari",
    "Kothrud",
    "Wakad",
    "Hadapsar",
    "Baner"
  ]
};

export const VERIFIED_TEAM: TeamMember[] = [
  {
    id: "team-1",
    name: "Nilesh Ramchandra Tarde",
    role: "Founder & Principal Real Estate Consultant",
    phone: "+91 97639 15533",
    email: "contact@elitemoryaproperties.com",
    specialization: "Residential Acquisitions, Commercial Investments & Property Valuation",
    isVerified: true
  },
  {
    id: "team-2",
    name: "Bhagyashri",
    role: "Client Relations & Documentation Specialist",
    phone: "+91 97659 13355",
    email: "contact@elitemoryaproperties.com",
    specialization: "Rental Agreements, E-registration, Client Coordination",
    isVerified: true
  },
  {
    id: "team-3",
    name: "Aditya",
    role: "Field Property Specialist",
    phone: "+91 97659 13355",
    email: "contact@elitemoryaproperties.com",
    specialization: "Site Inspections, Commercial Spaces & Land Parcels",
    isVerified: true
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "srv-buy",
    slug: "buy-property",
    title: "Property Buying Assistance",
    category: "real_estate",
    shortDescription: "End-to-end guidance to find, inspect, verify, and purchase your ideal residential or commercial property in Pune.",
    fullDescription: "Finding the right property requires rigorous local market knowledge, title clarity, and accurate pricing. At Morya Properties, we assist prospective homebuyers and investors with handpicked properties, legal title verification, negotiation assistance, and complete registration support.",
    icon: "Home",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Curated property portfolio matching your exact budget and location criteria",
      "Thorough physical site verification and amenity checks",
      "Legal title checks and encumbrance verification guidance",
      "Transparent price negotiations with builders and individual owners",
      "Zero hidden fees with clear transaction roadmap"
    ],
    requiredDocuments: [
      "Identity Proof (Aadhaar / PAN Card)",
      "Address Proof",
      "Proof of funds or Home Loan pre-approval letter"
    ],
    processSteps: [
      { step: 1, title: "Requirement Gathering", description: "Understanding your budget, preferred localities, BHK requirements, and timeline." },
      { step: 2, title: "Curated Shortlisting", description: "Sharing verified options matching your specifications across Pune." },
      { step: 3, title: "Accompanied Site Visits", description: "Coordinating and guiding you through comprehensive on-site inspections." },
      { step: 4, title: "Verification & Negotiation", description: "Checking documentation and securing the most competitive market price." },
      { step: 5, title: "Registration & Handover", description: "Assisting with stamp duty, registration, and smooth key handover." }
    ],
    isActive: true
  },
  {
    id: "srv-sell",
    slug: "sell-property",
    title: "Property Selling Consultation",
    category: "real_estate",
    shortDescription: "Strategic pricing, targeted prospective buyer reach, and professional negotiations to sell your property at optimum value.",
    fullDescription: "Selling your property demands genuine market valuation, verified buyer matching, and smooth legal transaction paperwork. We ensure your property receives premier visibility among qualified buyers while managing viewings, negotiations, and legal paperwork effortlessly.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Comprehensive market comparative pricing and valuation",
      "Targeted listing promotion across our active investor and buyer network",
      "Pre-screened, financially qualified prospective buyers",
      "Professional site viewing coordination without bothering your daily schedule",
      "End-to-end guidance on tax implications, capital gains, and registration"
    ],
    requiredDocuments: [
      "Registered Sale Deed / Title Deed",
      "Sanctioned Building Plan & Completion Certificate",
      "Latest Property Tax Receipts & Society NOC",
      "Owner Identity & PAN Card"
    ],
    processSteps: [
      { step: 1, title: "Property Evaluation", description: "Site inspection and comparative market analysis to establish realistic, high-yield pricing." },
      { step: 2, title: "Portfolio Presentation", description: "Capturing high-quality details and presenting your property to genuine buyers." },
      { step: 3, title: "Buyer Screening & Viewings", description: "Coordinating visits only with vetted and financially capable prospects." },
      { step: 4, title: "Deal Structuring", description: "Assisting in agreement drafting, token exchange, and mutually clear timelines." },
      { step: 5, title: "Closing & Registration", description: "Overseeing final deed execution at the sub-registrar office." }
    ],
    isActive: true
  },
  {
    id: "srv-rent",
    slug: "rental-services",
    title: "Rental & Leasing Services",
    category: "real_estate",
    shortDescription: "Matching quality tenants with responsible property owners alongside complete registered rental agreement assistance.",
    fullDescription: "Whether you are a tenant looking for a comfortable flat or a landlord seeking dependable tenants, our rental services ensure fair rental values, verified tenant profiles, and hassle-free police intimation and registered rent agreements.",
    icon: "KeyRound",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Fast tenant placement for residential flats, bungalows, and shops",
      "Comprehensive tenant background verification",
      "Biometric online registered rent agreement support",
      "Clear documentation of security deposit and maintenance terms",
      "Periodic inspection and tenancy renewal guidance"
    ],
    requiredDocuments: [
      "Aadhaar & PAN card of Landlord & Tenant",
      "Electricity Bill / Index-II of the property",
      "Two witnesses with Aadhaar cards"
    ],
    processSteps: [
      { step: 1, title: "Listing & Tenant Matching", description: "Listing your rental space or identifying rental properties aligned with your commute." },
      { step: 2, title: "Inspection & Negotiation", description: "Facilitating fair rent pricing and mutually agreed maintenance terms." },
      { step: 3, title: "Drafting & Verification", description: "Drafting the legal leave and license agreement with customized clauses." },
      { step: 4, title: "Biometric E-Registration", description: "Completing doorstep biometric verification and government stamp registration." }
    ],
    isActive: true
  },
  {
    id: "srv-commercial",
    slug: "commercial-properties",
    title: "Commercial Property Consultation",
    category: "commercial",
    shortDescription: "Prime office spaces, retail shops, showrooms, and commercial plots across strategic business corridors in Pune.",
    fullDescription: "Commercial real estate requires in-depth analysis of footfalls, zoning compliance, rental yields, and future appreciation. Morya Properties guides business owners, retailers, and investors to find high-visibility commercial spaces that foster growth.",
    icon: "Briefcase",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Shops, showrooms, corporate offices, and warehouse spaces",
      "High-footfall locations along Pune-Satara Road, Dhankawadi, Swargate, and Baner",
      "Detailed rental yield and capital appreciation projections",
      "Commercial lease structuring with escalation clauses",
      "Assistance with commercial utility and statutory permissions"
    ],
    requiredDocuments: [
      "Business Registration / GST Certificate",
      "Authorized Signatory KYC",
      "Commercial Building Approvals & Title Chain"
    ],
    processSteps: [
      { step: 1, title: "Commercial Assessment", description: "Evaluating retail frontage, parking spaces, power load, and customer access." },
      { step: 2, title: "Location Discovery", description: "Shortlisting prime business hubs matching your trade requirements." },
      { step: 3, title: "Commercial Lease Structuring", description: "Drafting lock-in periods, security deposits, and fit-out rent-free periods." },
      { step: 4, title: "Execution", description: "Executing commercial lease or purchase agreements with legal certainty." }
    ],
    isActive: true
  },
  {
    id: "srv-loan",
    slug: "loan-assistance",
    title: "Loan Guidance & Assistance",
    category: "loans",
    shortDescription: "Facilitation and advisory support for Home Loans, Loan Against Property, and Business Loans with leading banks and NBFCs.",
    fullDescription: "Securing the most competitive interest rates and seamless sanctioning is critical for your property purchase. We assist you in understanding eligibility criteria, comparing offerings from major banks and financial institutions, and organizing the required documentation dossier.",
    icon: "Landmark",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Home loan guidance for first-time buyers and seasoned investors",
      "Assistance with leading public, private banks and verified housing finance companies",
      "Clear documentation checklist to avoid delays or rejections",
      "Loan Against Property (LAP) and Balance Transfer advisory",
      "Objective comparison of floating vs fixed interest rates"
    ],
    disclaimer: "Notice: Morya Properties and Multi Services is a real estate and documentation facilitation service. We provide loan advisory and application assistance with partner financial institutions and do not directly disburse funds or guarantee credit approval. Loan approval is subject to the sole discretion of the respective lending bank or NBFC.",
    requiredDocuments: [
      "Last 3 months Salary Slips or 2 years ITR with computation",
      "Last 6 months Bank Statements",
      "KYC (PAN Card, Aadhaar Card, Passport photo)",
      "Property Agreement Draft / Title Documents"
    ],
    processSteps: [
      { step: 1, title: "Eligibility Assessment", description: "Evaluating your income, obligations, and CIBIL score to estimate borrowing power." },
      { step: 2, title: "Bank Comparison", description: "Reviewing interest rates, processing fees, and terms across partner lenders." },
      { step: 3, title: "Dossier Preparation", description: "Compiling financial, KYC, and property legal papers." },
      { step: 4, title: "Sanction & Legal Search", description: "Facilitating bank valuation, legal title verification, and sanction letter receipt." },
      { step: 5, title: "Disbursement", description: "Coordinating final loan agreement signing and timely tranche disbursement." }
    ],
    isActive: true
  },
  {
    id: "srv-insurance",
    slug: "insurance-services",
    title: "Insurance Guidance & Consultation",
    category: "insurance",
    shortDescription: "Advisory and consultation for property insurance, home protection, and risk coverage via accredited insurance providers.",
    fullDescription: "Protecting your high-value real estate asset and financial stability from unforeseen risks is vital. Morya Properties provides consultation on property risk assessment, structural insurance, and household asset protection through licensed insurance channels.",
    icon: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Comprehensive consultation on home structure and content insurance",
      "Fire, natural calamity, and third-party liability coverage guidance",
      "Commercial property and shopkeeper risk insurance consultation",
      "Clear explanation of policy exclusions, deductibles, and claim steps",
      "Independent guidance aligned with your specific asset value"
    ],
    disclaimer: "Notice: Morya Properties and Multi Services acts strictly as a property and multi-services consultancy. We do not underwrite or issue insurance policies directly. All insurance products are offered and underwritten by IRDAI-registered insurance companies.",
    requiredDocuments: [
      "Property ownership proof / Index-II",
      "Estimated valuation of structure and contents",
      "Identity and Address Proof"
    ],
    processSteps: [
      { step: 1, title: "Risk Evaluation", description: "Analyzing asset type, age of property, contents, and specific environmental hazards." },
      { step: 2, title: "Coverage Options", description: "Comparing coverage plans from accredited insurance providers." },
      { step: 3, title: "Documentation Submission", description: "Submitting details and scheduling inspection if required by the insurer." },
      { step: 4, title: "Policy Delivery", description: "Assisting you in obtaining policy document and understanding claims process." }
    ],
    isActive: true
  },
  {
    id: "srv-documentation",
    slug: "documentation-services",
    title: "Legal & Documentation Services",
    category: "documentation",
    shortDescription: "Registered Rent Agreements, Stamp Duty Guidance, Index-II, Property Tax Transfer, and Paperwork Facilitation.",
    fullDescription: "Real estate paperwork demands precision and compliance with Maharashtra state revenue guidelines. We facilitate biometric e-registration for leave & license agreements, obtaining certified Index-II copies, property title searches, and revenue record updates.",
    icon: "FileText",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Government-authorized online registered leave and license agreement with doorstep biometric service",
      "Procurement of certified Index-II and past revenue search documents",
      "Stamp duty calculation and online payment facilitation",
      "Society transfer paperwork and NOC guidance",
      "Property tax name change and assessment consultation"
    ],
    requiredDocuments: [
      "Landlord & Tenant Aadhaar and PAN Cards",
      "Property Electricity Bill & Index-II",
      "Two Witnesses with Aadhaar verification"
    ],
    processSteps: [
      { step: 1, title: "Data Collection", description: "Gathering party details, property description, and rental terms." },
      { step: 2, title: "Drafting & Verification", description: "Preparing standard legal draft and verifying all names and numbers against KYC." },
      { step: 3, title: "Biometric Capture", description: "Convenient doorstep biometric fingerprint scan and photo capture." },
      { step: 4, title: "Government Submission", description: "Submitting to the Sub-Registrar Department of Registration and Stamps (IGR Maharashtra)." },
      { step: 5, title: "Registered Copy Delivery", description: "Providing digitally signed government-approved PDF agreement within 24–48 hours." }
    ],
    isActive: true
  },
  {
    id: "srv-other",
    slug: "other-services",
    title: "Property Management & Valuation",
    category: "consulting",
    shortDescription: "Local property valuation, NRI property caretaking, tenant verification, and real estate advisory in Pune.",
    fullDescription: "For property owners residing elsewhere or NRIs with properties in Pune, Morya Properties delivers dependable local caretaking, regular inspections, tenant management, and accurate market valuation services.",
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Comparative property valuation reports based on actual localized transactions",
      "NRI property caretaking and periodic inspection reports",
      "Police intimation and tenant credential checks",
      "Maintenance coordination and utility bill supervision",
      "General real estate consulting for plots and family partitions"
    ],
    requiredDocuments: [
      "Property Title / Index-II",
      "Owner Authorization Letter (for management)",
      "Owner KYC documents"
    ],
    processSteps: [
      { step: 1, title: "Consultation Request", description: "Connect with our team outlining your specific management or valuation requirement." },
      { step: 2, title: "Scope Agreement", description: "Establishing terms, service scope, and timeline transparently." },
      { step: 3, title: "Execution", description: "Executing site inspection, valuation analysis, or periodic caretaking." },
      { step: 4, title: "Reporting", description: "Providing formal inspection or valuation report." }
    ],
    isActive: true
  }
];

export const INITIAL_PROPERTIES: Property[] = [
  {
    id: "prop-1",
    title: "Elegant 2 BHK Apartment in Chavan Nagar",
    slug: "elegant-2-bhk-apartment-chavan-nagar-dhankawadi",
    description: "Well-ventilated 2 BHK apartment in a peaceful residential locality near Panchvati Society and Teen Hatti Chowk. Features modern layout, ample natural light, dedicated covered car parking, and proximity to Pune-Satara Road and Bharati Vidyapeeth campus.",
    listingType: "sale",
    propertyType: "Apartment",
    category: "residential",
    price: 6800000,
    priceDisplay: "₹ 68 Lakh",
    priceNegotiable: true,
    carpetArea: 785,
    superBuiltupArea: 990,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 2,
    furnishing: "Semi-Furnished",
    facing: "East",
    floor: "3rd of 7 Floors",
    possessionStatus: "Ready to Move",
    location: "Dhankawadi",
    address: "Near Panchvati Society, Chavan Nagar, Dhankawadi",
    landmark: "Teen Hatti Chowk",
    city: "Pune",
    featured: true,
    isSampleListing: true,
    status: "active",
    amenities: [
      "Lift with Battery Backup",
      "Covered Car Parking",
      "24/7 Water Supply",
      "CCTV Surveillance",
      "Intercom Facility",
      "Fire Fighting Equipment",
      "Rainwater Harvesting"
    ],
    featuredImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    createdAt: "2026-03-01T10:00:00Z"
  },
  {
    id: "prop-2",
    title: "Spacious 3 BHK Luxury Residence in Bibwewadi",
    slug: "spacious-3-bhk-luxury-residence-bibwewadi",
    description: "Premium 3 BHK home situated in prestigious Bibwewadi, offering spacious living rooms, wooden flooring in master suite, modular kitchen, and panoramic views of Taljai hills. Ideal for families seeking comfort and connectivity.",
    listingType: "sale",
    propertyType: "Apartment",
    category: "residential",
    price: 13500000,
    priceDisplay: "₹ 1.35 Cr",
    priceNegotiable: false,
    carpetArea: 1250,
    superBuiltupArea: 1580,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 3,
    furnishing: "Fully Furnished",
    facing: "North-East",
    floor: "6th of 11 Floors",
    possessionStatus: "Ready to Move",
    location: "Bibwewadi",
    address: "Off Pune-Satara Road, Near Lake Town, Bibwewadi",
    landmark: "Close to K K Market",
    city: "Pune",
    featured: true,
    isSampleListing: true,
    status: "active",
    amenities: [
      "Clubhouse & Gym",
      "Children Play Area",
      "2 Reserved Stilt Parking",
      "High Speed Elevators",
      "Solar Water Heater",
      "Piped Gas Connection",
      "Gated Security 24/7"
    ],
    featuredImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
    ],
    createdAt: "2026-03-02T11:00:00Z"
  },
  {
    id: "prop-3",
    title: "Prime Commercial Retail Shop on Main Road",
    slug: "prime-commercial-retail-shop-dhankawadi-satara-road",
    description: "Exceptional commercial shop with prominent street-level glass frontage on main arterial road connecting Dhankawadi and Satara Road. High customer footfall, suitable for retail pharmacy, clinic, bakery, or branded boutique.",
    listingType: "sale",
    propertyType: "Shop",
    category: "commercial",
    price: 8500000,
    priceDisplay: "₹ 85 Lakh",
    priceNegotiable: true,
    carpetArea: 480,
    superBuiltupArea: 620,
    bedrooms: 0,
    bathrooms: 1,
    furnishing: "Unfurnished",
    facing: "East",
    floor: "Ground Floor",
    possessionStatus: "Ready to Move",
    location: "Dhankawadi",
    address: "Main Teen Hatti Chowk Road, Dhankawadi",
    landmark: "Near Bank of Maharashtra",
    city: "Pune",
    featured: true,
    isSampleListing: true,
    status: "active",
    amenities: [
      "Road Facing Frontage",
      "Rolling Shutter & Glass Door",
      "Separate Commercial Meter",
      "Visitor Parking",
      "Continuous Water Connection"
    ],
    featuredImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
    ],
    createdAt: "2026-03-03T12:00:00Z"
  },
  {
    id: "prop-4",
    title: "Furnished 2 BHK Flat for Rent in Ambegaon BK",
    slug: "furnished-2-bhk-flat-for-rent-ambegaon-bk",
    description: "Quiet and well-maintained 2 BHK apartment for rent in Ambegaon BK. Close to Mumbai-Bangalore Highway and leading educational institutions. Ideal for working professionals or small families seeking quick highway connectivity.",
    listingType: "rent",
    propertyType: "Apartment",
    category: "residential",
    price: 22000,
    priceDisplay: "₹ 22,000 / month",
    priceNegotiable: true,
    carpetArea: 720,
    superBuiltupArea: 900,
    bedrooms: 2,
    bathrooms: 2,
    balconies: 1,
    furnishing: "Semi-Furnished",
    facing: "West",
    floor: "4th of 8 Floors",
    possessionStatus: "Immediate",
    location: "Ambegaon BK",
    address: "Near Sinhgad College Campus, Ambegaon BK",
    landmark: "Sinhgad Road Access",
    city: "Pune",
    featured: false,
    isSampleListing: true,
    status: "active",
    amenities: [
      "Lift",
      "Dedicated Bike & Car Parking",
      "Security Guard 24/7",
      "Geyser Installed",
      "Kitchen Cabinets"
    ],
    featuredImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    createdAt: "2026-03-04T14:00:00Z"
  },
  {
    id: "prop-5",
    title: "Furnished Modern Corporate Office Space",
    slug: "furnished-modern-corporate-office-space-swargate",
    description: "Fully furnished commercial office space ready for immediate operations. Features 18 workstations, 2 executive cabins, a 8-seater conference room, reception desk, server room, and attached pantry.",
    listingType: "rent",
    propertyType: "Office Space",
    category: "commercial",
    price: 65000,
    priceDisplay: "₹ 65,000 / month",
    priceNegotiable: false,
    carpetArea: 1100,
    superBuiltupArea: 1450,
    bedrooms: 0,
    bathrooms: 2,
    furnishing: "Fully Furnished",
    facing: "North",
    floor: "2nd of 5 Floors",
    possessionStatus: "Immediate",
    location: "Swargate",
    address: "Commercial Complex, Near Swargate Bus Terminus",
    landmark: "Swargate Metro Station",
    city: "Pune",
    featured: true,
    isSampleListing: true,
    status: "active",
    amenities: [
      "Central Air Conditioning",
      "100% DG Power Backup",
      "Access Control Biometrics",
      "Conference Room Audio/Video Setup",
      "High Speed Fiber Optic Internet",
      "2 Covered Car Parking Slots"
    ],
    featuredImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
    ],
    createdAt: "2026-03-05T09:30:00Z"
  },
  {
    id: "prop-6",
    title: "Independent 3 BHK Row House with Private Garden",
    slug: "independent-3-bhk-row-house-with-private-garden-katraj",
    description: "Charming independent row house in a gated cooperative society in Katraj. Offers private garden space, terrace rights, solar water heating, and calm surroundings with excellent connectivity to Satara highway.",
    listingType: "sale",
    propertyType: "Row House",
    category: "residential",
    price: 11500000,
    priceDisplay: "₹ 1.15 Cr",
    priceNegotiable: true,
    carpetArea: 1600,
    superBuiltupArea: 1950,
    bedrooms: 3,
    bathrooms: 3,
    balconies: 2,
    furnishing: "Semi-Furnished",
    facing: "East",
    floor: "Ground + 1 Floor",
    possessionStatus: "Ready to Move",
    location: "Katraj",
    address: "Gated Colony, Opp. Katraj Zoo Road, Katraj",
    landmark: "Near Katraj Dairy",
    city: "Pune",
    featured: false,
    isSampleListing: true,
    status: "active",
    amenities: [
      "Private Front & Back Garden",
      "Independent Rooftop Terrace",
      "Individual Water Tank",
      "Private Covered Porch Parking",
      "Solar Water Heating System"
    ],
    featuredImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    createdAt: "2026-03-06T15:00:00Z"
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Sunil Kulkarni",
    location: "Dhankawadi, Pune",
    role: "Property Buyer",
    rating: 5,
    comment: "Mr. Nilesh Tarde and the team at Morya Properties helped us purchase our 2 BHK apartment near Chavan Nagar. Their transparency regarding title verification and property registration made the entire process worry-free.",
    date: "February 2026",
    serviceType: "Property Buying Assistance",
    isVerified: true
  },
  {
    id: "test-2",
    name: "Rajesh & Meena Shinde",
    location: "Bibwewadi, Pune",
    role: "Property Sellers",
    rating: 5,
    comment: "We needed to sell our residential flat in Bibwewadi within a fixed timeline. Morya Properties brought genuine, qualified buyers and negotiated a very reasonable deal without any hidden surprises.",
    date: "January 2026",
    serviceType: "Property Selling Consultation",
    isVerified: true
  },
  {
    id: "test-3",
    name: "Ganesh Joshi",
    location: "Katraj, Pune",
    role: "Landlord",
    rating: 5,
    comment: "Their documentation and registered rental agreement service was swift and completely doorstep. Bhagyashri coordinated the biometric e-registration in just one visit. Highly recommend them for real estate documentation in South Pune.",
    date: "March 2026",
    serviceType: "Documentation & Rental Agreement",
    isVerified: true
  }
];
