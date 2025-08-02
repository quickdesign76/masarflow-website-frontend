import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/masarflow_logo.jpg';

const Footer = () => {
  return (
    <footer className="professional-footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Company Brand Section */}
          <div className="footer-brand">
            <div className="brand-content">
              <img src={logo} alt="MasarFlow" className="brand-logo" />
              <p className="brand-tagline">
                نحو مستقبل رقمي متطور
              </p>
              <p className="brand-description">
                مسار فلو تقدم حلول الذكاء الاصطناعي والأتمتة المتقدمة لتمكين الشركات من تحقيق التميز والنمو المستدام.
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-section">
            <h3 className="section-title">التنقل</h3>
            <ul className="footer-links">
              <li><Link to="/">الرئيسية</Link></li>
              <li><Link to="/about">من نحن</Link></li>
              <li><Link to="/services">خدماتنا</Link></li>
              <li><Link to="/portfolio">أعمالنا</Link></li>
              <li><Link to="/contact">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="footer-section">
            <h3 className="section-title">الخدمات</h3>
            <ul className="footer-links">
              <li><Link to="/services">الذكاء الاصطناعي</Link></li>
              <li><Link to="/services">الأتمتة الذكية</Link></li>
              <li><Link to="/services">الاستشارات التقنية</Link></li>
              <li><Link to="/services">التطوير المخصص</Link></li>
              <li><Link to="/services">الدعم التقني</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-section">
            <h3 className="section-title">تواصل مباشر</h3>
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <span className="contact-label">البريد الإلكتروني</span>
                  <a href="mailto:info@masarflow.com" className="contact-value">info@masarflow.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488"/>
                  </svg>
                </div>
                <div className="contact-info">
                  <span className="contact-label">واتساب</span>
                  <a href="https://wa.me/966501234567" className="contact-value" dir="ltr">+966 50 123 4567</a>
                </div>
              </div>


            </div>

            {/* Social Media */}
            <div className="social-media">
              <h4 className="social-title">تابعنا</h4>
              <div className="social-links">
                <a href="https://x.com/masarflow" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UC4Vz79S6jNzA_gZ4nMIcDBw" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/share/1QzpfmPieV/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/masarflow/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>© 2025 مسار فلو. جميع الحقوق محفوظة.</p>
            </div>
            <div className="legal-links">
              <Link to="/privacy">سياسة الخصوصية</Link>
              <Link to="/terms">شروط الاستخدام</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;