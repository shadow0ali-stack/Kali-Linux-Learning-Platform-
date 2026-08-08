import { ar } from './ar.js';
import { en } from './en.js';

const translations = { ar, en };

export class TranslationManager {
  static currentLanguage = 'ar';

  static setLanguage(lang) {
    if (translations[lang]) {
      this.currentLanguage = lang;
    }
  }

  static t(key, vars = {}) {
    const parts = key.split('.');
    let value = translations[this.currentLanguage];

    for (const part of parts) {
      if (value && Object.prototype.hasOwnProperty.call(value, part)) {
        value = value[part];
      } else {
        return key;
      }
    }

    let text = typeof value === 'string' ? value : key;
    for (const [name, replacement] of Object.entries(vars)) {
      text = text.replace(new RegExp(`\\{${name}\\}`, 'g'), String(replacement));
    }
    return text;
  }

  static getCurrentLanguage() {
    return this.currentLanguage;
  }
}