import React, { useState } from 'react';
import './ContactPage.css';
import contactHeroImage from '../assets/contact_hero.jpg';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // التحقق من البيانات قبل الإرسال
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('يرجى ملء جميع الحقول المطلوبة');
      }

      // إنشاء FormData للإرسال إلى Web3Forms (نفس طريقة نموذج الاختبار الناجح)
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '965d2fcc-b2aa-4cd1-8dad-2eece4d70f77');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone || '');
      formDataToSend.append('company', formData.company || '');
      formDataToSend.append('service', formData.service || '');
      formDataToSend.append('message', formData.message);
      formDataToSend.append('subject', `رسالة جديدة من ${formData.name} - ${formData.service || 'استفسار عام'}`);

      console.log('إرسال البيانات إلى Web3Forms...');
      console.log('Form data being sent:', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        message: formData.message
      });
      
      // إرسال البيانات إلى Web3Forms (نفس طريقة نموذج الاختبار)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();
      console.log('Response status:', response.status);
      console.log('Response result:', result);

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        console.log('✅ تم إرسال الرسالة بنجاح!');
      } else {
        console.error('❌ خطأ من Web3Forms:', result);
        throw new Error(result.message || 'فشل في إرسال النموذج');
      }
    } catch (error) {
      console.error('❌ خطأ في إرسال النموذج:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero dark-section blue-bg" style={{
        backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(55, 48, 163, 0.8) 50%, rgba(88, 28, 135, 0.8) 100%), url(${contactHeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 20%',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="contact-hero-content">
          <h1 className="contact-main-title">اتصل بنا</h1>
          <p className="contact-hero-description">
            نحن هنا لمساعدتك في تحويل أعمالك إلى المستقبل الرقمي من خلال حلول الذكاء الاصطناعي المتطورة
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="contact-content">
        <div className="contact-container">
          {/* Contact Form Section */}
          <div className="contact-form-section">
            <div className="contact-form-header">
              <h2 className="section-title">أرسل لنا رسالة</h2>
              <p className="contact-form-description">
                املأ النموذج أدناه وسنتواصل معك باسرع وقت
              </p>
            </div>

            <div className="contact-form-wrapper">
              <form 
                className="contact-form"
                onSubmit={handleSubmit}
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                {/* حقول مخفية لـ Web3Forms */}
                <input type="hidden" name="access_key" value="965d2fcc-b2aa-4cd1-8dad-2eece4d70f77" />
                <input type="hidden" name="subject" value="رسالة جديدة من موقع مسار فلو" />
                <input type="hidden" name="from_name" value="موقع مسار فلو" />
                <input type="hidden" name="_captcha" value="false" />
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">الاسم الكامل *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">البريد الإلكتروني *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">رقم الهاتف</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+966 50 123 4567"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">اسم الشركة</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="اسم شركتك (اختياري)"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">الخدمة المطلوبة</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="">اختر الخدمة</option>
                    <option value="chatbot">تطوير شات بوت ذكي</option>
                    <option value="automation">أتمتة التسويق</option>
                    <option value="content">إنتاج المحتوى بالذكاء الاصطناعي</option>
                    <option value="social">أتمتة وسائل التواصل الاجتماعي</option>
                    <option value="consultation">استشارة تقنية</option>
                    <option value="other">أخرى</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">رسالتك *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="اكتب رسالتك هنا... أخبرنا عن مشروعك وكيف يمكننا مساعدتك"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                </button>

                {submitStatus === 'success' && (
                  <div className="submit-message success">
                    ✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="submit-message error">
                    ❌ حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;