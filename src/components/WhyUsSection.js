import React from 'react';
import './WhyUsSection.css';

const WhyUsSection = () => {
  const features = [
    {
      id: 1,
      icon: '🔄',
      title: 'نؤتمت مهامك الروتينية',
      description: 'نحلل عملك ونبني أنظمة أتمتة ذكية لتوفير وقتك، تقليل التكاليف، وتحسين الأداء اليومي.',
      color: '#1e3a8a' // أزرق داكن
    },
    {
      id: 2,
      icon: '🤖',
      title: 'نصمم بوتات محادثة لعملائك',
      description: 'نبني لك بوتات تفاعلية تستقبل الاستفسارات، تحجز المواعيد، وتدير محادثات العملاء بشكل احترافي وعلى مدار الساعة.',
      color: '#3730a3' // بنفسجي داكن
    },
    {
      id: 3,
      icon: '🧠',
      title: 'نقدّم حلولًا مدعومة بالذكاء الاصطناعي',
      description: 'ندمج الذكاء الاصطناعي في عملياتك، لتحليل البيانات، تحسين اتخاذ القرار، وتقديم تجربة أفضل لعملائك.',
      color: '#581c87' // بنفسجي أغمق
    },
    {
      id: 4,
      icon: '👥',
      title: 'نوفر لك مجتمعًا وقوالب جاهزة',
      description: 'ندعوك للانضمام إلى مجتمع MasarFlow، حيث تجد قوالب جاهزة، شروحات متقدمة، ودعم مباشر لتطوير مشروعك بفعالية.',
      color: '#1e40af' // أزرق متوسط
    }
  ];

  return (
    <section className="why-us-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">لماذا تختار MasarFlow؟</h2>
          <p className="section-description">
            نقدم لك حلول أتمتة وذكاء اصطناعي تفوق توقعاتك.
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;