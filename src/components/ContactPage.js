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
      // محاكاة إرسال النموذج
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
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
              >
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
                    ❌ حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى.
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