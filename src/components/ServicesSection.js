import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServicesSection.css';
// استيراد الصور
import chatbotImage from '../assets/chatbot_service.png';
import marketingImage from '../assets/marketing_automation.png';
import socialMediaImage from '../assets/social_media_automation.png';
import aiContentImage from '../assets/ai_content_creation.png';

const ServicesSection = () => {
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => {
    navigate('/services', { state: { scrollToService: serviceId } });
  };

  const services = [
    {
      id: 1,
      image: chatbotImage,
      title: 'بوتات المحادثة الذكية',
      description: 'بناء بوتات محادثة على واتساب، تليجرام، أو مواقع الشات، لخدمة العملاء والرد على استفساراتهم بذكاء باستخدام تقنيات الذكاء الاصطناعي.',
      link: '#services'
    },
    {
      id: 2,
      image: marketingImage,
      title: 'أنظمة التسويق التلقائي بالذكاء الاصطناعي',
      description: 'تصميم أنظمة تسويق تلقائي فعالة وإرسال رسائل تسويقية عبر البريد الإلكتروني، مدعومة بأحدث تقنيات الذكاء الاصطناعي لزيادة التفاعل.',
      link: '#services'
    },
    {
      id: 3,
      image: socialMediaImage,
      title: 'أتمتة النشر على وسائل التواصل الاجتماعي',
      description: 'تطوير أنظمة نشر محتوى تلقائي ومؤتمت على وسائل التواصل الاجتماعي، باستخدام أدوات الذكاء الاصطناعي لتحقيق أقصى وصول.',
      link: '#services'
    },
    {
      id: 4,
      image: aiContentImage,
      title: 'صناعة المحتوى بالذكاء الاصطناعي',
      description: 'بناء أنظمة متكاملة لإنتاج المحتوى عالي الجودة بواسطة الذكاء الاصطناعي والأدوات الحديثة، لتوفير الوقت والجهد.',
      link: '#services'
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">أبرز خدماتنا</h2>
          <p className="services-description">
            نقدم مجموعة شاملة من حلول الأتمتة والذكاء الاصطناعي التي تحول أعمالك.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image-container">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="service-image"
                />
              </div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <button 
                  onClick={() => handleServiceClick(service.id)} 
                  className="service-button"
                >
                  اعرف المزيد
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;