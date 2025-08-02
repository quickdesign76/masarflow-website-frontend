import React from 'react';
import './AboutUsSection.css';
import aboutHeroImage from '../assets/about_hero.jpg';

const AboutUsSection = () => {
  const services = [
    {
      id: 1,
      icon: '⚙️',
      text: 'تصميم وتنفيذ أنظمة أتمتة للمهام الروتينية والمتكررة.'
    },
    {
      id: 2,
      icon: '🤖',
      text: 'تطوير بوتات محادثة احترافية لخدمة العملاء والمبيعات.'
    },
    {
      id: 3,
      icon: '🧠',
      text: 'دمج أدوات الذكاء الاصطناعي في سير العمل اليومي.'
    },
    {
      id: 4,
      icon: '🌐',
      text: 'تقديم حلول تقنية مرنة للشركات الناشئة لدعم التوسع والنمو.'
    },
    {
      id: 5,
      icon: '💡',
      text: 'توفير مجتمع رقمي وقوالب جاهزة وشروحات تطبيقية.'
    }
  ];

  const values = [
    {
      id: 1,
      icon: '✅',
      title: 'الاحترافية',
      description: 'نلتزم بأعلى المعايير في كل مشروع.',
      color: '#1e3a8a'
    },
    {
      id: 2,
      icon: '🚀',
      title: 'الابتكار',
      description: 'لا نقدّم حلولًا جاهزة، بل نبتكر ما يناسبك.',
      color: '#3730a3'
    },
    {
      id: 3,
      icon: '🔍',
      title: 'الشفافية',
      description: 'نعمل معك خطوة بخطوة بوضوح وصدق.',
      color: '#581c87'
    },
    {
      id: 4,
      icon: '🤝',
      title: 'التركيز على العميل',
      description: 'نجاحك هو مقياس نجاحنا.',
      color: '#1e40af'
    }
  ];

  return (
    <section className="about-us-section">
      {/* Hero Section */}
      <div className="about-hero dark-section blue-bg" style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(55, 48, 163, 0.8) 50%, rgba(88, 28, 135, 0.8) 100%), url(${aboutHeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="about-hero-content">
          <h1 className="about-hero-title">من نحن</h1>
          <p className="about-hero-description">
            نحن لا نقدّم حلولًا تقنية فقط، نحن نخلق مسارات ذكية نحو المستقبل
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <div className="about-content">
        <div className="container">
          <div className="content-section">
            <h2 className="section-title">من نحن؟</h2>
            <div className="content-text">
              <p>
                <strong>MasarFlow</strong> انطلقت برؤية واضحة: بناء مسار جديد للشركات والأفراد، 
                يُسخّر فيه الذكاء الاصطناعي والأتمتة لتبسيط الأعمال، وتحقيق نتائج أسرع وأكثر ذكاء.
              </p>
              <p>
                تأسسنا لتقديم خدمات تقنية متقدمة، تجمع بين المرونة، الاحتراف، والمعرفة العملية.
              </p>
              <p className="highlight">
                <strong>هدفنا:</strong> أن نمنحك وقتك… لتنجز أكثر وتتدخل أقل.
              </p>
            </div>
          </div>

          {/* What We Offer */}
          <div className="content-section">
            <h2 className="section-title">ماذا نقدم؟</h2>
            <div className="content-text">
              <p>
                في MasarFlow، لا نقدّم خدمات منفصلة فقط، بل نُطوّر حلولًا تقنية متكاملة تدعم نمو الشركات 
                وتُسرّع من أداء المؤسسات الناشئة، باستخدام الأتمتة والذكاء الاصطناعي.
              </p>
            </div>
            <div className="services-list">
              {services.map((service) => (
                <div key={service.id} className="service-item">
                  <span className="service-icon">{service.icon}</span>
                  <span className="service-text">{service.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vision */}
          <div className="content-section vision-section">
            <h2 className="section-title">رؤيتنا</h2>
            <div className="vision-content">
              <p>
                أن نكون الخيار الأول للأتمتة الذكية في العالم العربي، وأن نُحدث تحولًا حقيقيًا 
                في طريقة عمل الشركات الصغيرة والمتوسطة.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="content-section">
            <h2 className="section-title">قيمنا</h2>
            <div className="values-grid">
              {values.map((value) => (
                <div key={value.id} className="value-card">
                  <div className="value-icon" style={{ color: value.color }}>
                    {value.icon}
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why MasarFlow */}
          <div className="content-section why-section">
            <h2 className="section-title">لماذا MasarFlow؟</h2>
            <div className="why-content">
              <p>
                <strong>لأننا لا نقدّم خدمات فقط… بل نبني لك نظامًا يعمل حتى وأنت نائم.</strong>
              </p>
              <p>
                لأننا نُفكر مكانك، ونُنفذ بأدق التفاصيل، ونقدّم لك حلولًا ذكية تنمو معك.
              </p>
            </div>
          </div>

          {/* Founder Message */}
          <div className="content-section founder-section">
            <div className="founder-message">
              <div className="quote-mark">"</div>
              <p className="founder-quote">
                بدأنا هذه الرحلة بشغف… وسنقودها بشغف أكبر نحو المستقبل.
              </p>
              <div className="founder-info">
                <span className="founder-name">– مشاري الخضير</span>
                <span className="founder-title">مؤسس MasarFlow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;