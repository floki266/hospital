document.addEventListener("DOMContentLoaded", function () {
    var countdown = 3; // الوقت بالثواني

    function hideWelcomeScreens() {
        var welcomeScreenArabic = document.getElementById("welcomeScreenArabic");
        var welcomeScreenEnglish = document.getElementById("welcomeScreenEnglish");

        welcomeScreenArabic.style.display = "none";
        welcomeScreenEnglish.style.display = "none";
    }

    // إخفاء واجهة الترحيب بعد 3 ثوانٍ
    setTimeout(hideWelcomeScreens, countdown * 1000);

    // إظهار المحتوى المناسب بناءً على اللغة
    function showContent(language) {
        var contentArabic = document.querySelector('.content-arabic');
        var contentEnglish = document.querySelector('.content-english');

        if (language === 'arabic') {
            contentArabic.style.display = 'block';
            contentEnglish.style.display = 'none';
            document.getElementById("welcomeScreenArabic").style.display = 'block';
            document.getElementById("welcomeScreenEnglish").style.display = 'none';
        } else if (language === 'english') {
            contentArabic.style.display = 'none';
            contentEnglish.style.display = 'block';
            document.getElementById("welcomeScreenArabic").style.display = 'none';
            document.getElementById("welcomeScreenEnglish").style.display = 'block';
        }
    }

    // التبديل إلى المحتوى العربي
    window.showArabic = function () {
        showContent('arabic');
    };

    // التبديل إلى المحتوى الإنجليزي
    window.showEnglish = function () {
        showContent('english');
    };

    // تعيين اللغة الافتراضية عند تحميل الصفحة
    showContent('arabic');
});

// تبديل حالة القائمة المنسدلة
function toggleMenu() {
    const menu = document.querySelector('.list');
    const menuBtn = document.querySelector('.menu-btn');
    menu.classList.toggle('active'); // تبديل إظهار وإخفاء القائمة  
    menuBtn.classList.toggle('active'); // تبديل حالة زر القائمة  
}

// إظهار المحتوى العربي
function showArabic() {
    document.querySelector('.content-arabic').style.display = 'block';
    document.querySelector('.content-english').style.display = 'none';
    hideWelcomeScreens(); // إخفاء واجهة الترحيب بعد التبديل
}

// إظهار المحتوى الإنجليزي
function showEnglish() {
    document.querySelector('.content-arabic').style.display = 'none';
    document.querySelector('.content-english').style.display = 'block';
    hideWelcomeScreens(); // إخفاء واجهة الترحيب بعد التبديل
}

// تبديل حالة القائمة المنسدلة  

function toggleMenu() {
    const menu = document.querySelector('.list');
    const menuBtn = document.querySelector('.menu-btn');
    menu.classList.toggle('active'); // تبديل إظهار وإخفاء القائمة  
    menuBtn.classList.toggle('active'); // تبديل حالة زر القائمة  
}