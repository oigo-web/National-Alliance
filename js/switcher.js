// SWITCHER====================================================

const btnDarkMode = document.querySelector(".dark-mode-btn");

// 1. Проверка системной темы
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.documentElement.setAttribute("data-theme", "dark");
}

// 2. Проверка сохранённой темы в localStorage
if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark-mode-btn--active");
    document.documentElement.setAttribute("data-theme", "dark");
} else if (localStorage.getItem("darkMode") === "light") {
    btnDarkMode.classList.remove("dark-mode-btn--active");
    document.documentElement.setAttribute("data-theme", "light");
}

// 3. Реакция на смену системной темы
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
    const newColorScheme = event.matches ? "dark" : 'light';

    if (newColorScheme === 'dark') {
        btnDarkMode.classList.add("dark-mode-btn--active");
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("darkMode", "dark");
    } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("darkMode", "light");
    }
});

// 4. Переключатель темы по кнопке
btnDarkMode.onclick = function () {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";

    if (isDark) {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("darkMode", "light");
        btnDarkMode.classList.remove("dark-mode-btn--active");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("darkMode", "dark");
        btnDarkMode.classList.add("dark-mode-btn--active");
    }
}
// ===============================================================
