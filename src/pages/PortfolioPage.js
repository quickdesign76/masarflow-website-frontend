import React from 'react';
import './PortfolioPage.css';

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <div className="portfolio-content">
        <div className="container">
          <div className="coming-soon-section">
            <div className="coming-soon-content">
              <div className="coming-soon-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h2 className="coming-soon-title">قريباً</h2>
              <p className="coming-soon-description">
                نحن نعمل على إضافة مجموعة من مشاريعنا المميزة هنا. 
                ستتمكن قريباً من استكشاف أعمالنا في مجال الذكاء الاصطناعي والأتمتة.
              </p>
              <div className="coming-soon-features">
                <div className="feature-item">
                  <span className="feature-icon">🤖</span>
                  <span className="feature-text">حلول الذكاء الاصطناعي</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">⚡</span>
                  <span className="feature-text">أنظمة الأتمتة الذكية</span>
                </div>
                <div className="feature-item">
                  <span className="feature-icon">💼</span>
                  <span className="feature-text">تطبيقات الأعمال</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage; 