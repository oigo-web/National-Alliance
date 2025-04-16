const setLanguage = async (lang) => {
  const res = await fetch(`lang/${lang}.json`);
  const data = await res.json();

  for (const key in data) {
    const element = document.querySelector(`[data-i18n="${key}"]`);
    if (element) {
      element.textContent = data[key];
    }
  }

  localStorage.setItem('lang', lang);
};

// Автоматическая загрузка при входе
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem('lang') || 'tg';
  setLanguage(lang);

  document.querySelectorAll("[data-lang]").forEach((el) => {
    el.addEventListener("click", () => {
      setLanguage(el.getAttribute("data-lang"));
    });
  });
});
