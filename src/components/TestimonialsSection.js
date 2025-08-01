import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: 'حلول MasarFlow غيرت طريقة عملنا! أصبحت عملياتنا أكثر كفاءة وتوفرنا الكثير من الوقت. خدمة ودعم لا يصدق!',
      name: 'أحمد الفهد',
      position: 'مدير العمليات، شركة النجاح التقنية',
      avatar: '👤'
    },
    {
      id: 2,
      quote: 'احترافية عالية ونتائج مذهلة. الأتمتة التي قدموها لنا تجاوزت توقعاتنا وحققت لنا نموًا ملموسًا.',
      name: 'فاطمة الزهراء',
      position: 'رائدة أعمال ومؤسسة شركة ناشئة',
      avatar: '👩'
    },
    {
      id: 3,
      quote: 'مع MasarFlow، أصبح الذكاء الاصطناعي في متناول يدنا. لقد قدموا لنا أدوات قوية وسهلة الاستخدام عززت من إنتاجيتنا.',
      name: 'مؤسسة الرواد للتقنية',
      position: 'شركة رائدة في مجال التكنولوجيا',
      avatar: '🏢'
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">ماذا يقول عملاؤنا عنا؟</h2>
          <p className="testimonials-description">
            قصص نجاح تُلهم من عملائنا الراضين عن حلول MasarFlow الذكية.
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-quote">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;