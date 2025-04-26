function loadLanguage(lang) {
    fetch(`lang/${lang}.json`)
    .then(response => response.json())
    .then(data => {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const keys = element.getAttribute('data-i18n').split('.');
            let text = data;
            keys.forEach(key => {
                text = text[key];
            });
            element.innerHTML = text;
        });
        localStorage.setItem('language', lang);
    });
}

// При загрузке страницы восстанавливаем язык
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'tg'; // <-- Здесь по умолчанию TG!
    loadLanguage(savedLang);
});
