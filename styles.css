// تفعيل مكتبة AOS لتحريك العناصر عند التمرير
AOS.init({
  duration: 1000,
  once: true
});

// إعداد تأثير الكتابة الآلية باستخدام Typed.js
var typed = new Typed("#typed-text", {
  strings: ["محاسب", "محاسب محترف 💼", "متخصص في تحليل البيانات 📊", "مبدع في الإدارة المالية 💰"],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});

// زر العودة للأعلى
var backToTop = document.getElementById("back-to-top");
window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};
backToTop.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// أكواد حماية المصدر: منع النقر بزر الماوس الأيمن، الاختصارات والنسخ وتحديد النصوص
(function() {
  "use strict";
  document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
  }, false);

  document.addEventListener("keydown", function(e) {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C" || e.key === "J")) ||
      (e.ctrlKey && (e.key === "U" || e.key === "u"))
    ) {
      e.preventDefault();
    }
  }, false);

  document.addEventListener("selectstart", function(e) {
    e.preventDefault();
  }, false);

  document.addEventListener("copy", function(e) {
    e.preventDefault();
  }, false);

  // محاولة كشف فتح أدوات المطور
  setInterval(function() {
    if (window.outerWidth - window.innerWidth > 160 || window.outerHeight - window.innerHeight > 160) {
      document.body.innerHTML = "<h1 style='text-align:center;color:red;margin-top:20%;'>🚨 تم الكشف عن محاولة فحص الكود! 🚨</h1>";
    }
  }, 1000);

  console.log("%c تحذير: استخدام أدوات المطور قد يكشف عن الكود الخاص بك!", "color: red; font-size: 16px; font-weight: bold;");
})();
