// Bilingual i18n Translation Engine for IEEE NTC Yachay Tech

export function getCurrentLanguage(): 'es' | 'en' {
  if (typeof window === 'undefined') return 'es';
  const saved = localStorage.getItem('ntc_lang');
  return (saved === 'en' || saved === 'es') ? saved : 'es';
}

export function setLanguage(lang: 'es' | 'en') {
  if (typeof window === 'undefined') return;
  localStorage.setItem('ntc_lang', lang);
  document.documentElement.lang = lang;

  // 1. Update all language toggle buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // 2. Direct data-attribute text replacement
  const textAttr = `data-i18n-${lang}`;
  document.querySelectorAll(`[${textAttr}]`).forEach((el) => {
    const val = el.getAttribute(textAttr);
    if (val !== null && val !== undefined) {
      el.textContent = val;
    }
  });

  // 3. Direct data-attribute HTML replacement
  const htmlAttr = `data-i18n-html-${lang}`;
  document.querySelectorAll(`[${htmlAttr}]`).forEach((el) => {
    const val = el.getAttribute(htmlAttr);
    if (val !== null && val !== undefined) {
      el.innerHTML = val;
    }
  });

  // 4. Input placeholders & aria-labels
  const placeholderAttr = `data-i18n-placeholder-${lang}`;
  document.querySelectorAll(`[${placeholderAttr}]`).forEach((el) => {
    const val = el.getAttribute(placeholderAttr);
    if (val) (el as HTMLInputElement).placeholder = val;
  });

  const ariaAttr = `data-i18n-aria-${lang}`;
  document.querySelectorAll(`[${ariaAttr}]`).forEach((el) => {
    const val = el.getAttribute(ariaAttr);
    if (val) el.setAttribute('aria-label', val);
  });
}

export function initI18n() {
  if (typeof window === 'undefined') return;
  
  const currentLang = getCurrentLanguage();
  setLanguage(currentLang);

  // Bind click handlers to language toggle buttons
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetLang = (btn.getAttribute('data-lang') || 'es') as 'es' | 'en';
      setLanguage(targetLang);
    });
  });
}
