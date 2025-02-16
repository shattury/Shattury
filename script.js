(function() {
  "use strict";

  // منع القائمة السياقية (النقر بزر الماوس الأيمن)
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);

  // منع المفاتيح التي تفتح أدوات المطور (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U)
  document.addEventListener("keydown", function(e) {
    // F12
    if (e.keyCode === 123) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+I أو Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
      e.preventDefault();
      return false;
    }
    // Ctrl+U
    if (e.ctrlKey && e.keyCode === 85) {
      e.preventDefault();
      return false;
    }
  }, false);

  // منع تحديد النصوص والنسخ
  document.addEventListener("selectstart", function(e) {
    e.preventDefault();
  }, false);

  document.addEventListener("copy", function(e) {
    e.preventDefault();
  }, false);

  // محاولة اكتشاف فتح أدوات المطور من خلال تغيير حجم النافذة
  setInterval(function() {
    const threshold = 160; // قيمة افتراضية
    if (window.outerWidth - window.innerWidth > threshold || window.outerHeight - window.innerHeight > threshold) {
      document.body.innerHTML = "<h1 style='text-align:center;color:red;margin-top:20%;'>🚨 تم الكشف عن محاولة فتح أدوات المطور! 🚨</h1>";
    }
  }, 1000);

  // رسالة تحذيرية في Console
  console.log("%c تحذير: استخدام أدوات المطور قد يكشف عن الكود الخاص بك! ", "color: red; font-size: 16px; font-weight: bold;");
})();
