import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SideWidget from './components/SideWidget';
import WhatsAppButton from './components/WhatsAppButton';

import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import AppDevelopment from './pages/AppDevelopment';
import DigitalMarketing from './pages/DigitalMarketing';
import GraphicDesigning from './pages/GraphicDesigning';
import Career from './pages/Career';
import ClientsPage from './pages/ClientsPage';
import ContactPage from './pages/ContactPage';
import RefundPolicy from './pages/RefundPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <div className="App">
      {/* Ashutosh Planet Branding */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/graphic-designing" element={<GraphicDesigning />} />
        <Route path="/career" element={<Career />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Location-based service pages */}
        <Route path="/website-development-in-navi-mumbai" element={<WebsiteDevelopment location="Navi Mumbai" />} />
        <Route path="/website-development-in-mumbai" element={<WebsiteDevelopment location="Mumbai" />} />
        <Route path="/website-development-in-vashi" element={<WebsiteDevelopment location="Vashi" />} />
        {/* Add more location routes as needed */}
      </Routes>
      <Footer />
      <SideWidget />
      <WhatsAppButton />
    </div>
  );
}

export default App;