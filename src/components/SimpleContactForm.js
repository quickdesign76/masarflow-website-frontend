import React from 'react';

const SimpleContactForm = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>نموذج اختبار Web3Forms</h2>
      <form 
        action="https://api.web3forms.com/submit" 
        method="POST"
        style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
      >
        <div>
          <label htmlFor="name">الاسم:</label>
          <input 
            type="text" 
            name="name" 
            id="name"
            required 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        
        <div>
          <label htmlFor="email">البريد الإلكتروني:</label>
          <input 
            type="email" 
            name="email" 
            id="email"
            required 
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          />
        </div>
        
        <div>
          <label htmlFor="message">الرسالة:</label>
          <textarea 
            name="message" 
            id="message"
            required 
            rows="4"
            style={{ width: '100%', padding: '8px', marginTop: '5px' }}
          ></textarea>
        </div>
        
        {/* حقول مخفية لـ Web3Forms */}
        <input type="hidden" name="access_key" value="965d2fcc-b2aa-4cd1-8dad-2eece4d70f77" />
        <input type="hidden" name="subject" value="رسالة اختبار من موقع مسار فلو" />
        <input type="hidden" name="from_name" value="موقع مسار فلو" />
        
        <button 
          type="submit"
          style={{ 
            padding: '12px 24px', 
            backgroundColor: '#28a745', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          إرسال الرسالة
        </button>
      </form>
    </div>
  );
};

export default SimpleContactForm;