import { LocalStorage } from './local-storage.js';
import { STORAGE_SCHEMA } from './storage-schema.js';

export class StorageManager {
  static loadAll() {
    const result = {};
    Object.keys(STORAGE_SCHEMA).forEach((key) => {
      const value = LocalStorage.get(key);
      if (value !== null) result[key] = value;
    });
    return result;
  }

  static saveAll(data) {
    Object.entries(data).forEach(([key, value]) => {
      if (Object.prototype.hasOwnProperty.call(STORAGE_SCHEMA, key)) {
        LocalStorage.set(key, value);
      }
    });
  }

  static resetAll() {
    Object.keys(STORAGE_SCHEMA).forEach((key) => LocalStorage.remove(key));
  }
}
