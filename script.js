// تفعيل مكتبة AOS لتحريك العناصر عند التمرير
AOS.init({
  duration: 1000,
  once: true
});

// إعداد تأثير الكتابة الآلية باستخدام Typed.js
var typed = new Typed("#typed-text", {
  strings: ["محاسب محترف 💼", "متخصص في تحليل البيانات 📊", "مبدع في الإدارة المالية 💰"],
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

// حماية الكود: منع النقر بزر الماوس الأيمن، النسخ وتحديد النصوص
document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
});
document.addEventListener("keydown", function(e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C" || e.key === "J")) ||
    (e.ctrlKey && (e.key === "U" || e.key === "u"))
  ) {
    e.preventDefault();
  }
});
document.addEventListener("selectstart", function(e) {
  e.preventDefault();
});
document.addEventListener("copy", function(e) {
  e.preventDefault();
});
