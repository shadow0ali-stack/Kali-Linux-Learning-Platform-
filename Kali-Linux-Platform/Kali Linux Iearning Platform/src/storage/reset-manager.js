import { StorageManager } from './storage-manager.js';
import { STORAGE_SCHEMA } from './storage-schema.js';

export class ResetManager {
  static resetVFSOnly(initialVFS) {
    const state = StorageManager.loadAll();
    state.vfs = JSON.parse(JSON.stringify(initialVFS));
    StorageManager.saveAll(state);
    return state;
  }

  static fullReset(initialVFS) {
    StorageManager.resetAll();
    const defaults = {};
    Object.keys(STORAGE_SCHEMA).forEach((key) => {
      defaults[key] = typeof STORAGE_SCHEMA[key] === 'object' && !Array.isArray(STORAGE_SCHEMA[key]) ? JSON.parse(JSON.stringify(STORAGE_SCHEMA[key])) : STORAGE_SCHEMA[key];
    });
    defaults.vfs = JSON.parse(JSON.stringify(initialVFS));
    StorageManager.saveAll(defaults);
    return defaults;
  }
}
