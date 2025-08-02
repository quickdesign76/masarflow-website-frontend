import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './ServicesPage.css';
// استيراد الصور
import chatbotImage from '../assets/chatbot_service.jpg';
import marketingImage from '../assets/marketing_automation.jpg';
import socialMediaImage from '../assets/social_media_automation.jpg';
import aiContentImage from '../assets/ai_content_creation.jpg';
import servicesHeroImage from '../assets/services_hero.png';

const ServicesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const serviceRefs = useRef({});

  const handleContactClick = () => {
    navigate('/contact');
  };

  useEffect(() => {
    if (location.state?.scrollToService) {
      const serviceId = location.state.scrollToService;
      const serviceElement = serviceRefs.current[serviceId];
      if (serviceElement) {
        setTimeout(() => {
          serviceElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }, 100);
      }
    }
  }, [location.state]);

  const services = [
    {
      id: 1,
      image: chatbotImage,
      title: 'بوتات المحادثة الذكية',
      shortDescription: 'بناء بوتات محادثة ذكية لخدمة العملاء على مختلف المنصات',
      fullDescription: 'نقوم ببناء بوتات محادثة متطورة باستخدام أحدث تقنيات الذكاء الاصطناعي لتوفير خدمة عملاء متميزة على مدار الساعة. تشمل خدماتنا بناء بوتات على واتساب، تليجرام، ومواقع الويب مع إمكانيات متقدمة للفهم والرد الذكي.',
      features: [
        'دعم متعدد المنصات (واتساب، تليجرام، مواقع الويب)',
        'فهم طبيعي للغة العربية والإنجليزية',
        'تكامل مع قواعد البيانات وأنظمة CRM',
        'تحليلات مفصلة لتفاعل العملاء',
        'إمكانية التعلم المستمر وتحسين الأداء'
      ],
      benefits: [
        'خدمة عملاء 24/7 بدون انقطاع',
        'تقليل تكاليف خدمة العملاء بنسبة تصل إلى 70%',
        'زيادة رضا العملاء وسرعة الاستجابة',
        'تحرير فريق العمل للتركيز على المهام الأكثر أهمية'
      ]
    },
    {
      id: 2,
      image: marketingImage,
      title: 'أنظمة التسويق التلقائي بالذكاء الاصطناعي',
      shortDescription: 'حلول تسويق تلقائي ذكية لزيادة المبيعات والتفاعل',
      fullDescription: 'نصمم أنظمة تسويق تلقائي متطورة تستخدم الذكاء الاصطناعي لتحليل سلوك العملاء وإرسال رسائل تسويقية مخصصة في الوقت المناسب. تشمل خدماتنا التسويق عبر البريد الإلكتروني، الرسائل النصية، ووسائل التواصل الاجتماعي.',
      features: [
        'تحليل سلوك العملاء باستخدام الذكاء الاصطناعي',
        'إرسال رسائل مخصصة بناءً على اهتمامات العملاء',
        'أتمتة رحلة العميل من الاكتشاف إلى الشراء',
        'تتبع وتحليل أداء الحملات التسويقية',
        'تكامل مع منصات التجارة الإلكترونية'
      ],
      benefits: [
        'زيادة معدل التحويل بنسبة تصل إلى 300%',
        'توفير الوقت والجهد في إدارة الحملات',
        'تحسين عائد الاستثمار التسويقي',
        'بناء علاقات أقوى مع العملاء'
      ]
    },
    {
      id: 3,
      image: socialMediaImage,
      title: 'أتمتة النشر على وسائل التواصل الاجتماعي',
      shortDescription: 'أتمتة ذكية لإدارة حساباتك على وسائل التواصل الاجتماعي',
      fullDescription: 'نطور أنظمة متطورة لأتمتة النشر والتفاعل على وسائل التواصل الاجتماعي باستخدام الذكاء الاصطناعي. تشمل خدماتنا جدولة المحتوى، التفاعل التلقائي، وتحليل الأداء عبر جميع المنصات.',
      features: [
        'جدولة ونشر تلقائي للمحتوى',
        'تحليل أفضل أوقات النشر لجمهورك',
        'إنشاء محتوى تلقائي باستخدام الذكاء الاصطناعي',
        'مراقبة وتحليل التفاعل والمشاركات',
        'إدارة متعددة المنصات من لوحة تحكم واحدة'
      ],
      benefits: [
        'زيادة التفاعل والوصول بنسبة تصل إلى 250%',
        'توفير ساعات من العمل اليومي',
        'ضمان الاستمرارية في النشر',
        'تحسين جودة المحتوى وتوقيت النشر'
      ]
    },
    {
      id: 4,
      image: aiContentImage,
      title: 'صناعة المحتوى بالذكاء الاصطناعي',
      shortDescription: 'إنتاج محتوى عالي الجودة باستخدام أحدث تقنيات الذكاء الاصطناعي',
      fullDescription: 'نبني أنظمة متكاملة لإنتاج المحتوى عالي الجودة باستخدام أحدث تقنيات الذكاء الاصطناعي. تشمل خدماتنا إنتاج المقالات، المحتوى التسويقي، الصور، والفيديوهات بجودة احترافية.',
      features: [
        'إنتاج مقالات ومحتوى نصي متخصص',
        'إنشاء صور ورسوم بيانية تلقائياً',
        'إنتاج فيديوهات تسويقية قصيرة',
        'تحسين المحتوى لمحركات البحث (SEO)',
        'تخصيص المحتوى حسب الجمهور المستهدف'
      ],
      benefits: [
        'تقليل تكلفة إنتاج المحتوى بنسبة تصل إلى 80%',
        'زيادة سرعة الإنتاج بشكل كبير',
        'ضمان جودة واتساق المحتوى',
        'إمكانية الإنتاج بلغات متعددة'
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section للخدمات */}
      <section className="services-hero" style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(55, 48, 163, 0.8) 50%, rgba(88, 28, 135, 0.8) 100%), url(${servicesHeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="services-hero-content">
          <h1 className="services-hero-title">خدماتنا المتميزة</h1>
          <p className="services-hero-description">
            نقدم مجموعة شاملة من حلول الأتمتة والذكاء الاصطناعي المصممة خصيصاً لتحويل أعمالك وزيادة كفاءتها. 
            من بوتات المحادثة الذكية إلى أنظمة التسويق التلقائي، نحن هنا لنجعل التقنية تعمل لصالحك.
          </p>
        </div>
      </section>

      {/* قسم الخدمات المفصل */}
      <section className="detailed-services">
        <div className="services-container">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              ref={el => serviceRefs.current[service.id] = el}
              className={`service-detail ${index % 2 === 1 ? 'reverse' : ''}`}
            >
              <div className="service-detail-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-detail-content">
                <h2 className="service-detail-title">{service.title}</h2>
                <p className="service-detail-description">{service.fullDescription}</p>
                
                <div className="service-features">
                  <h3>المميزات الرئيسية:</h3>
                  <ul>
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="service-benefits">
                  <h3>الفوائد:</h3>
                  <ul>
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <button className="service-cta-button" onClick={handleContactClick}>
                  احصل على استشارة مجانية
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* قسم الدعوة للعمل */}
      <section className="services-cta light-section">
        <div className="services-cta-content">
          <h2>هل أنت مستعد لتحويل أعمالك؟</h2>
          <p>تواصل معنا اليوم واحصل على استشارة مجانية لتحديد أفضل الحلول لاحتياجاتك</p>
          <div className="cta-buttons">
            <button className="cta-primary" onClick={handleContactClick}>تواصل معنا الآن</button>
            <button className="cta-secondary" onClick={handleContactClick}>احجز استشارة مجانية</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
