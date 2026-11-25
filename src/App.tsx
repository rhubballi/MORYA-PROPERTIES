import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { PropertyProvider } from './context/PropertyContext';
import { AuthProvider } from './context/AuthContext';

import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';

// Public Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Properties } from './pages/Properties';
import { PropertyDetail } from './pages/PropertyDetail';
import { Buy } from './pages/Buy';
import { Sell } from './pages/Sell';
import { Rent } from './pages/Rent';
import { Commercial } from './pages/Commercial';
import { Insurance } from './pages/Insurance';
import { Loans } from './pages/Loans';
import { Documentation } from './pages/Documentation';
import { OtherServices } from './pages/OtherServices';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

// Admin Pages
import { AdminLogin } from './pages/Admin/AdminLogin';
import { AdminLayout } from './pages/Admin/AdminLayout';
import { AdminDashboard } from './pages/Admin/AdminDashboard';
import { AdminProperties } from './pages/Admin/AdminProperties';
import { AdminEnquiries } from './pages/Admin/AdminEnquiries';
import { AdminServices } from './pages/Admin/AdminServices';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Layout for Public Pages
const PublicLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <PropertyProvider>
        <AuthProvider>
          <Routes>
            {/* Public Customer Facing Routes */}
            <Route element={<PublicLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/properties/:id" element={<PropertyDetail />} />
              <Route path="/buy" element={<Buy />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/rent" element={<Rent />} />
              <Route path="/commercial" element={<Commercial />} />
              <Route path="/insurance" element={<Insurance />} />
              <Route path="/loans" element={<Loans />} />
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/other-services" element={<OtherServices />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>

            {/* Admin Management Routes */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="properties" element={<AdminProperties />} />
              <Route path="enquiries" element={<AdminEnquiries />} />
              <Route path="services" element={<AdminServices />} />
            </Route>
          </Routes>
        </AuthProvider>
      </PropertyProvider>
    </Router>
  );
}

export default App;
