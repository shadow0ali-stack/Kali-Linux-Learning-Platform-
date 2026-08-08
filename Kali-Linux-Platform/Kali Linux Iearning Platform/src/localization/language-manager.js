import { TranslationManager } from './translation-manager.js';
import { LocalStorage } from '../storage/local-storage.js';

export class LanguageManager {
  static getCurrentLanguage() {
    const saved = LocalStorage.get('language') || LocalStorage.get('appLang');
    return saved || TranslationManager.getCurrentLanguage();
  }

  static setLanguage(lang) {
    if (lang === 'ar' || lang === 'en') {
      TranslationManager.setLanguage(lang);
      LocalStorage.set('language', lang);
      LocalStorage.set('appLang', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
      window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }
  }

  static toggleLanguage() {
    const current = this.getCurrentLanguage();
    const next = current === 'ar' ? 'en' : 'ar';
    this.setLanguage(next);
  }
}