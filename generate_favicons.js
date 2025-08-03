// سكريبت لإنشاء أيقونات شفافة لمسار فلو
// يمكن تشغيله في متصفح أو Node.js

function createTransparentFavicon(size) {
    // إنشاء كانفاس
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    // تحديد الألوان
    const primaryColor = '#1e3a8a'; // الأزرق الرئيسي لمسار فلو
    const secondaryColor = '#3b82f6'; // الأزرق الفاتح
    const accentColor = '#60a5fa'; // الأزرق الأفتح
    
    // حساب الأحجام
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size * 0.4;
    
    // رسم دائرة متدرجة
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
    gradient.addColorStop(0, primaryColor);
    gradient.addColorStop(0.7, secondaryColor);
    gradient.addColorStop(1, accentColor);
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.fill();
    
    // رسم حرف M
    ctx.fillStyle = 'white';
    ctx.font = `bold ${size * 0.5}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 2;
    ctx.shadowOffsetY = 1;
    ctx.fillText('M', centerX, centerY);
    
    // إضافة تأثير لمعان
    ctx.shadowColor = 'transparent';
    const glowGradient = ctx.createRadialGradient(
        centerX, centerY - radius * 0.3, 0, 
        centerX, centerY - radius * 0.3, radius * 0.6
    );
    glowGradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
    glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    
    ctx.fillStyle = glowGradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY - radius * 0.3, radius * 0.6, 0, 2 * Math.PI);
    ctx.fill();
    
    return canvas;
}

function downloadFavicon(canvas, filename) {
    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// إنشاء وتحميل الأيقونات
function generateAllFavicons() {
    const sizes = [16, 32, 48, 64, 128, 192, 512];
    
    sizes.forEach(size => {
        const canvas = createTransparentFavicon(size);
        downloadFavicon(canvas, `favicon-${size}x${size}.png`);
    });
}

// تشغيل الدالة إذا كان في المتصفح
if (typeof window !== 'undefined') {
    console.log('لإنشاء الأيقونات، اكتب: generateAllFavicons()');
}

// تصدير للاستخدام في Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { createTransparentFavicon, generateAllFavicons };
}