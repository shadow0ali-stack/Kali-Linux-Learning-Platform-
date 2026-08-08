import { EventBus } from './event-bus.js';
import { ModuleRegistry } from './module-registry.js';
import { AppState } from './app-state.js';

export class Application {
  constructor({ storage, translation, language, commandRegistry, stageRegistry, questionBank, initialVFS }) {
    this.storage = storage;
    this.translation = translation;
    this.language = language;
    this.commandRegistry = commandRegistry;
    this.stageRegistry = stageRegistry;
    this.questionBank = questionBank;
    this.initialVFS = initialVFS;

    this.eventBus = new EventBus();
    this.moduleRegistry = new ModuleRegistry();
    this.appState = new AppState({
      storage: this.storage,
      commandRegistry: this.commandRegistry,
      stageRegistry: this.stageRegistry,
      questionBank: this.questionBank,
      initialVFS: this.initialVFS
    });
  }

  async start() {
    await this.appState.loadState();

    const savedLanguage = this.language.getCurrentLanguage() || this.appState.getLanguage() || 'ar';
    this.language.setLanguage(savedLanguage);
    this.translation.setLanguage(savedLanguage);
    this.appState.setLanguage(savedLanguage);

    const { AppController } = await import('../controllers/app-controller.js');
    this.controller = new AppController({
      appState: this.appState,
      eventBus: this.eventBus,
      moduleRegistry: this.moduleRegistry,
      translation: this.translation,
      language: this.language,
      storage: this.storage
    });

    this.controller.init();
    console.log('🚀 Application started.');
  }
}
