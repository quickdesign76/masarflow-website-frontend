import React, { useState } from 'react';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    // Vercel will handle the form submission
    // No preventDefault needed for static forms
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">تواصل معنا</h2>
          <p className="contact-description">
            نحن هنا لمساعدتك في تحقيق أهداف الأتمتة والذكاء الاصطناعي. املأ النموذج أدناه وسنتواصل معك في أقرب وقت.
          </p>
        </div>

        <div className="contact-form-wrapper">
          <form 
            name="contact" 
            method="POST" 
            className="contact-form"
            action="/thank-you"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="form-group">
              <label htmlFor="name">الاسم الكامل</label>
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
              <label htmlFor="email">البريد الإلكتروني</label>
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

            <div className="form-group">
              <label htmlFor="subject">الموضوع</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="موضوع رسالتك"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">رسالتك</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="اكتب رسالتك هنا..."
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;