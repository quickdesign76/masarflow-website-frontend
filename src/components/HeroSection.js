import React from 'react';
import './HeroSection.css';
import heroBg from '../assets/hero_bg.png';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section 
      className="hero-section dark-section" 
      style={{ 
        backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(55, 48, 163, 0.8) 50%, rgba(88, 28, 135, 0.8) 100%), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">من عبء المهام... إلى راحة الإنجاز</h1>
          <p className="hero-description">
          </p>
          <p className="hero-subdescription">
            مع مسار فلو، التقنية تعمل لأجلك. أتمتة ذكية، بوتات محادثة، وحلول ذكاء اصطناعي تغير طريقة عملك إلى الأبد
          </p>
          <button
            className="hero-button"
            onClick={() => navigate('/services')}
          >
            اكتشف خدماتنا
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;