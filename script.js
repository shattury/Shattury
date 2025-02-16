document.addEventListener("DOMContentLoaded", function() {
    // منع زر الفأرة الأيمن
    document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });

    // منع فتح أدوات المطورين والاختصارات المعروفة
    document.addEventListener("keydown", function(event) {
        if (
            event.ctrlKey && (event.key === "u" || event.key === "s" || event.key === "c" || event.key === "j") || 
            event.key === "F12" || 
            (event.ctrlKey && event.shiftKey && event.key === "I")
        ) {
            event.preventDefault();
        }
    });

    // منع فتح أدوات المطورين عبر الفحص التلقائي
    setInterval(function() {
        if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
            document.body.innerHTML = "<h2 style='text-align:center;color:red;'>تم اكتشاف محاولة فحص الكود! 🚨</h2>";
        }
    }, 1000);

    // حماية حقوق الملكية
    console.log("%c جميع الحقوق محفوظة لحسام شطوري © 2025", "color: yellow; font-size: 16px; font-weight: bold;");
});
