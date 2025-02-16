// 🚨 تعطيل كليك يمين
document.addEventListener("contextmenu", (event) => event.preventDefault());

// 🚨 منع فتح أدوات المطورين (DevTools)
document.addEventListener("keydown", (event) => {
    if (
        event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && ["I", "C", "J"].includes(event.key)) || 
        (event.ctrlKey && event.key === "U")
    ) {
        event.preventDefault();
    }
});

// 🚨 كشف تغيير حجم النافذة (لمنع فحص الكود)
setInterval(() => {
    if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
        document.body.innerHTML = "<h2 style='text-align:center;color:red;'>🚨 محاولة فحص الكود تم كشفها! 🚨</h2>";
    }
}, 1000);

// 🚨 تحذير عند محاولة الوصول إلى Console
console.log("%c 🚨 تحذير: محاولة الوصول إلى الكود!", "color: red; font-size: 20px; font-weight: bold;");

// 🚨 تعطيل تحديد النص والنسخ
document.addEventListener("selectstart", (event) => event.preventDefault());
document.addEventListener("copy", (event) => event.preventDefault());
