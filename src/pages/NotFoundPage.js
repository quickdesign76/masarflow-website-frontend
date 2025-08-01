import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-hero">
        <div className="hero-content">
          <div className="error-code">404</div>
          <h1 className="error-title">الصفحة غير موجودة</h1>
          <p className="error-description">
            عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى عنوان آخر
          </p>
          <div className="error-actions">
            <Link to="/" className="home-btn">
              العودة للصفحة الرئيسية
            </Link>
            <Link to="/contact" className="contact-btn">
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>
      
      <div className="not-found-content">
        <div className="container">
          <div className="help-section">
            <h2 className="help-title">هل تحتاج مساعدة؟</h2>
            <div className="help-grid">
              <div className="help-item">
                <div className="help-icon">🏠</div>
                <h3>الصفحة الرئيسية</h3>
                <p>اكتشف خدماتنا ومشاريعنا المميزة</p>
                <Link to="/" className="help-link">اذهب للصفحة الرئيسية</Link>
              </div>
              
              <div className="help-item">
                <div className="help-icon">💼</div>
                <h3>خدماتنا</h3>
                <p>تعرف على خدماتنا المتكاملة في مجال التكنولوجيا</p>
                <Link to="/services" className="help-link">عرض الخدمات</Link>
              </div>
              
              <div className="help-item">
                <div className="help-icon">📞</div>
                <h3>تواصل معنا</h3>
                <p>نحن هنا لمساعدتك في تحقيق أهدافك الرقمية</p>
                <Link to="/contact" className="help-link">تواصل الآن</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage; 