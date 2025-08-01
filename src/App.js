import React, { useState, useEffect } from 'react'; 
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'; 
import Header from './components/Header'; 
import HeroSection from './components/HeroSection'; 
import WhyUsSection from './components/WhyUsSection'; 
import AboutUsSection from './components/AboutUsSection'; 
import ServicesSection from './components/ServicesSection'; 
import TestimonialsSection from './components/TestimonialsSection'; 
import ContactSection from './components/ContactSection'; 
import ContactPage from './components/ContactPage'; 
import ServicesPage from './pages/ServicesPage'; 
import PortfolioPage from './pages/PortfolioPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import NotFoundPage from './pages/NotFoundPage';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer'; 

function App() { 
  const location = useLocation();

  // التمرير إلى أعلى الصفحة عند تغيير المسار
  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, [location.pathname]); 

  // الصفحة الرئيسية
  const HomePage = () => (
    <div className="App">
      <Header />
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );

  // صفحة من نحن
  const AboutPage = () => (
    <div className="App">
      <Header />
      <AboutUsSection />
      <Footer />
    </div>
  );

  // صفحة الخدمات
  const ServicesPageWrapper = () => (
    <div className="App">
      <Header />
      <ServicesPage />
      <Footer />
    </div>
  );

  // صفحة التواصل
  const ContactPageWrapper = () => (
    <div className="App">
      <Header />
      <ContactPage />
      <Footer />
    </div>
  );

  // صفحة الأعمال
  const PortfolioPageWrapper = () => (
    <div className="App">
      <Header />
      <PortfolioPage />
      <Footer />
    </div>
  );

  // صفحة سياسة الخصوصية
  const PrivacyPolicyPageWrapper = () => (
    <div className="App">
      <Header />
      <PrivacyPolicyPage />
      <Footer />
    </div>
  );

  // صفحة شروط الاستخدام
  const TermsOfServicePageWrapper = () => (
    <div className="App">
      <Header />
      <TermsOfServicePage />
      <Footer />
    </div>
  );

  // صفحة 404
  const NotFoundPageWrapper = () => (
    <div className="App">
      <Header />
      <NotFoundPage />
      <Footer />
    </div>
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPageWrapper />} />
        <Route path="/portfolio" element={<PortfolioPageWrapper />} />
        <Route path="/contact" element={<ContactPageWrapper />} />
        <Route path="/privacy" element={<PrivacyPolicyPageWrapper />} />
        <Route path="/terms" element={<TermsOfServicePageWrapper />} />
        <Route path="*" element={<NotFoundPageWrapper />} />
      </Routes>
      <ScrollToTop />
    </>
  );
} 

export default App;