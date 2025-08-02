import { useEffect } from 'react';
import siteConfig from '../config/seoConfig';

const SEOHead = ({ 
  title = siteConfig.defaultTitle,
  description = siteConfig.defaultDescription,
  keywords = siteConfig.defaultKeywords,
  ogImage = siteConfig.defaultOgImage,
  url = siteConfig.siteUrl
}) => {
  
  useEffect(() => {
    // تحديث العنوان
    document.title = title;
    
    // تحديث Meta Tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (meta) {
        meta.setAttribute('content', content);
      } else {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        meta.setAttribute('content', content);
        document.head.appendChild(meta);
      }
    };
    
    // تحديث Meta Tags الأساسية
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    
    // تحديث Open Graph Tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:url', url, true);
    
    // تحديث Twitter Card Tags
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    
    // تحديث Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }
    
  }, [title, description, keywords, ogImage, url]);
  
  return null; // هذا المكون لا يعرض أي شيء
};

export default SEOHead;