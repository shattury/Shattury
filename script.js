document.addEventListener("DOMContentLoaded", function() {
    // منع النسخ
    document.addEventListener("contextmenu", function(event) {
        event.preventDefault();
    });

    document.addEventListener("keydown", function(event) {
        if (event.ctrlKey && (event.key === "u" || event.key === "s" || event.key === "c")) {
            event.preventDefault();
        }
    });

    // حماية حقوق الملكية
    console.log("%c جميع الحقوق محفوظة لحسام شطوري © 2025", "color: yellow; font-size: 16px; font-weight: bold;");
});
