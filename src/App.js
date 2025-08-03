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
import SEOHead from './components/SEOHead';
import StructuredData from './components/StructuredData';
import siteConfig from './config/seoConfig'; 

function App() { 
  const location = useLocation();

  // التمرير إلى أعلى الصفحة عند تغيير المسار
  useEffect(() => { 
    window.scrollTo(0, 0); 
  }, [location.pathname]); 

  // الصفحة الرئيسية
  const HomePage = () => (
    <div className="App">
      <SEOHead 
        title={siteConfig.pages.home.title}
        description={siteConfig.pages.home.description}
        keywords={siteConfig.pages.home.keywords}
        url={siteConfig.siteUrl + siteConfig.pages.home.url}
      />
      <StructuredData type="website" />
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
      <SEOHead 
        title={siteConfig.pages.about.title}
        description={siteConfig.pages.about.description}
        keywords={siteConfig.pages.about.keywords}
        url={siteConfig.siteUrl + siteConfig.pages.about.url}
      />
      <Header />
      <AboutUsSection />
      <Footer />
    </div>
  );

  // صفحة الخدمات
  const ServicesPageWrapper = () => (
    <div className="App">
      <SEOHead 
        title={siteConfig.pages.services.title}
        description={siteConfig.pages.services.description}
        keywords={siteConfig.pages.services.keywords}
        url={siteConfig.siteUrl + siteConfig.pages.services.url}
      />
      <StructuredData type="services" />
      <Header />
      <ServicesPage />
      <Footer />
    </div>
  );

  // صفحة التواصل
  const ContactPageWrapper = () => (
    <div className="App">
      <SEOHead 
        title={siteConfig.pages.contact.title}
        description={siteConfig.pages.contact.description}
        keywords={siteConfig.pages.contact.keywords}
        url={siteConfig.siteUrl + siteConfig.pages.contact.url}
      />
      <StructuredData type="contact" />
      <Header />
      <ContactPage />
      <Footer />
    </div>
  );



  // صفحة الأعمال
  const PortfolioPageWrapper = () => (
    <div className="App">
      <SEOHead 
        title={siteConfig.pages.portfolio.title}
        description={siteConfig.pages.portfolio.description}
        keywords={siteConfig.pages.portfolio.keywords}
        url={siteConfig.siteUrl + siteConfig.pages.portfolio.url}
      />
      <Header />
      <PortfolioPage />
      <Footer />
    </div>
  );

  // صفحة سياسة الخصوصية
  const PrivacyPolicyPageWrapper = () => (
    <div className="App">
      <SEOHead 
        title={siteConfig.pages.privacy.title}
        description={siteConfig.pages.privacy.description}
        keywords={siteConfig.pages.privacy.keywords}
        url={siteConfig.siteUrl + siteConfig.pages.privacy.url}
      />
      <Header />
      <PrivacyPolicyPage />
      <Footer />
    </div>
  );

  // صفحة شروط الاستخدام
  const TermsOfServicePageWrapper = () => (
    <div className="App">
      <SEOHead 
        title={siteConfig.pages.terms.title}
        description={siteConfig.pages.terms.description}
        keywords={siteConfig.pages.terms.keywords}
        url={siteConfig.siteUrl + siteConfig.pages.terms.url}
      />
      <Header />
      <TermsOfServicePage />
      <Footer />
    </div>
  );

  // صفحة 404
  const NotFoundPageWrapper = () => (
    <div className="App">
      <SEOHead 
        title="الصفحة غير موجودة - مسار فلو | 404"
        description="عذراً، الصفحة التي تبحث عنها غير موجودة. تصفح موقع مسار فلو للعثور على الحلول التقنية والخدمات التي تحتاجها."
        keywords="صفحة غير موجودة, 404, مسار فلو, خطأ"
        url={siteConfig.siteUrl + location.pathname}
      />
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