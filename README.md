# Morya Properties and Multi Services

> Premium, modern, responsive, and fully functional business website for **Morya Properties and Multi Services**, Pune, Maharashtra.

Reference Domain: [moryapropertiesandmultiservices.com](https://moryapropertiesandmultiservices.com/) / [elitemoryaproperties.com](https://elitemoryaproperties.com/)

---

## 🏢 Business Overview

- **Business Name:** Morya Properties and Multi Services (Elite Morya Properties)
- **Principal Consultant:** Nilesh Ramchandra Tarde
- **Team:** Nilesh Ramchandra Tarde (Founder & Lead Consultant), Bhagyashri (Client Relations & Documentation), Aditya (Field Property Specialist)
- **Office Address:** Shop No. 23, Sr. No. 11/2, Opp. Panchvati Society, Teen Hatti Chowk Road, Yashwantrao Chavan Nagar, Dhankawadi, Pune, Maharashtra – 411043
- **Primary Phone & WhatsApp:** `+91-9763915533`
- **Support Numbers:** `+91-8605786065`, `+91-9765913355`
- **Email:** `contact@elitemoryaproperties.com`
- **Business Hours:** Monday – Sunday: 10:00 AM – 8:00 PM
- **Key Service Areas:** Dhankawadi, Bibwewadi, Ambegaon BK, Katraj, Taljai, Pune-Satara Road, Sahakar Nagar, Swargate, Dhayari, Wakad, Pune Metropolitan Area.

---

## 🚀 Technology Stack

- **Frontend:** React 19 + TypeScript + Vite 6
- **Styling:** Tailwind CSS + Custom Luxury Shadows + KaTeX typography
- **Routing:** React Router v7
- **Icons:** Lucide React
- **Animations:** Smooth transitions & interactive modals
- **Backend / Database:** Supabase PostgreSQL ready (`supabase_schema.sql`) with autonomous Local-First / LocalStorage persistence fallback for instant 100% functionality without setup.

---

## 📄 Website Pages & Features

1. **Home (`/`)**: Hero section, quick property search filter, company introduction, services grid, featured properties with tabs, why choose Morya, 4-step process timeline, verified customer testimonials, and contact CTA.
2. **About Us (`/about`)**: Company background, philosophy, mission, vision, verified consultant team, service areas, and FAQs.
3. **Properties Catalog (`/properties`)**: Filterable discovery catalog with filters for Buy/Rent, Residential/Commercial, Property Type, BHK, Price, and Locality.
4. **Property Details (`/properties/:id`)**: Comprehensive image gallery, specifications, amenities list, location details, inline visit schedule form, and WhatsApp CTA.
5. **Real Estate Services (`/services`)**: Directory of all property and multi-services with categorization.
6. **Service Details (`/services/:slug`)**: In-depth service breakdown, process steps, required documents, and inquiry form.
7. **Buy Property (`/buy`)**: Specialized flow for residential buying and title verification checklist.
8. **Sell Property (`/sell`)**: Seller valuation request form and 5-step selling process.
9. **Rent Property (`/rent`)**: Rental property listings, landlord support, and tenant matching.
10. **Commercial Properties (`/commercial`)**: Offices, retail shops, showrooms, and commercial lease structuring.
11. **Loan Assistance (`/loans`)**: Home loan guidance, interactive **EMI Calculator**, document checklist, and statutory banking disclaimer.
12. **Insurance Services (`/insurance`)**: Property and shopkeeper insurance consultation with statutory IRDAI notice.
13. **Documentation Services (`/documentation`)**: Doorstep biometric online registered leave & license agreements, Index-II search, and stamp duty guidance.
14. **Other Services (`/other-services`)**: Property valuation reports and NRI caretaking.
15. **Contact Us (`/contact`)**: Verified office address, phones, business hours, Google Maps embed, and inquiry form.
16. **Admin Portal (`/admin`)**:
    - **Dashboard (`/admin/dashboard`)**: Metric cards, total leads, active properties, recent enquiries.
    - **Properties CRUD (`/admin/properties`)**: Add, edit, delete properties, manage prices, representative showcase toggles, image URLs.
    - **Enquiries Management (`/admin/enquiries`)**: Pipeline status updater (New, In Progress, Contacted, Closed), assign staff, internal notes, and CSV export.
    - **Services Management (`/admin/services`)**: Active catalog management.

---

## 🔐 Admin Credentials

- **URL:** `/admin`
- **Default Email:** `admin@morya.com` (or `nilesh@morya.com`)
- **Default Password:** `morya2026`
*(Includes 1-click credential prefill on login screen)*

---

## 🗄️ Supabase PostgreSQL Setup

The project includes `supabase_schema.sql` defining:
- `users`, `properties`, `property_images`, `property_categories`, `services`, `enquiries`, `service_requests`, `locations`
- Indexes on status, price, category, and timestamps
- Row Level Security (RLS) policies for public submissions and authenticated staff management

### Enabling Live Supabase:
1. Create a project at [supabase.com](https://supabase.com).
2. Go to the SQL Editor and execute `supabase_schema.sql`.
3. Copy your Project URL and Anon Public Key to `.env`:
   ```bash
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```
4. If left unconfigured, the application gracefully operates in **Local-First autonomous mode**, persisting all submissions and property edits in the browser!

---

## 🛠️ Local Development & Build

```bash
# Install dependencies
pnpm install

# Run development server
npm run dev

# Run type check and production build
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deployment (Vercel & Netlify)

### Vercel:
- Build Command: `npm run build`
- Output Directory: `dist`
- Framework Preset: `Vite`

### Netlify:
- Build Command: `npm run build`
- Publish Directory: `dist`
- Single Page App Redirects: Create `public/_redirects` with `/* /index.html 200`
