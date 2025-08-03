import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics 4 (GA4) - يجب استبدال GA_MEASUREMENT_ID بالمعرف الحقيقي
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // استبدل هذا بمعرف Google Analytics الخاص بك
    
    // تحميل Google Analytics
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'custom_parameter_1': 'arabic_website'
        }
      });
    `;
    document.head.appendChild(script2);

    // تنظيف عند إلغاء تحميل المكون
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  // تتبع تغيير الصفحات
  useEffect(() => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
};

export default Analytics;