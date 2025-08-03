import React, { useEffect } from 'react';

const StructuredData = ({ type = 'website', data = {} }) => {
  
  // البيانات الأساسية للشركة
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "مسار فلو",
    "alternateName": "MasarFlow",
    "url": "https://masarflow.com",
    "logo": "https://masarflow.com/logo512.jpg",
    "description": "مسار فلو - شركة تقنية رائدة تقدم حلولًا ذكية ومؤتمتة مدعومة بالذكاء الاصطناعي للشركات والمؤسسات",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "SA",
      "addressRegion": "الرياض"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Arabic", "English"]
    },
    "sameAs": [
      "https://masarflow.com"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Saudi Arabia"
    },
    "knowsAbout": [
      "الذكاء الاصطناعي",
      "أتمتة الأعمال", 
      "بوتات المحادثة",
      "تطوير المواقع",
      "الحلول التقنية"
    ]
  };

  // بيانات الموقع الإلكتروني
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "مسار فلو",
    "alternateName": "MasarFlow",
    "url": "https://masarflow.com",
    "description": "نُبسط لك التقنية. مسار فلو تقدم حلولًا ذكية ومؤتمتة تساعدك على العمل بكفاءة أكبر",
    "inLanguage": "ar",
    "publisher": {
      "@type": "Organization",
      "name": "مسار فلو",
      "logo": "https://masarflow.com/logo512.jpg"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://masarflow.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  // بيانات الخدمات
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "حلول الأتمتة والذكاء الاصطناعي",
    "description": "نقدم خدمات متكاملة تشمل تطوير الأنظمة المؤتمتة، بناء بوتات محادثة احترافية، تصميم حلول رقمية",
    "provider": {
      "@type": "Organization",
      "name": "مسار فلو",
      "url": "https://masarflow.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Saudi Arabia"
    },
    "serviceType": [
      "أتمتة الأعمال",
      "بوتات المحادثة", 
      "تطوير المواقع",
      "الذكاء الاصطناعي",
      "الحلول التقنية"
    ]
  };

  // بيانات صفحة الاتصال
  const contactData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "اتصل بنا - مسار فلو",
    "description": "تواصل مع فريق مسار فلو للحصول على استشارة مجانية حول الحلول التقنية الذكية",
    "url": "https://masarflow.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "مسار فلو",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": ["Arabic", "English"]
      }
    }
  };

  // اختيار البيانات المناسبة حسب نوع الصفحة
  let structuredData = organizationData;
  
  switch(type) {
    case 'website':
      structuredData = [organizationData, websiteData];
      break;
    case 'services':
      structuredData = [organizationData, serviceData];
      break;
    case 'contact':
      structuredData = [organizationData, contactData];
      break;
    case 'organization':
      structuredData = organizationData;
      break;
    default:
      structuredData = [organizationData, websiteData];
  }

  // دمج البيانات المخصصة إذا تم تمريرها
  if (Object.keys(data).length > 0) {
    if (Array.isArray(structuredData)) {
      structuredData.push(data);
    } else {
      structuredData = [structuredData, data];
    }
  }

  useEffect(() => {
    // إزالة البيانات المنظمة السابقة
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // إضافة البيانات المنظمة الجديدة
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // تنظيف البيانات عند إلغاء تحميل المكون
    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [structuredData]);

  return null; // هذا المكون لا يعرض أي شيء
};

export default StructuredData;