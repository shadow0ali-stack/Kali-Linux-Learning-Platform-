import { AchievementManager } from '../progression/achievement-manager.js';
import { LevelManager } from '../progression/level-manager.js';
import { ProgressManager } from '../progression/progress-manager.js';
import { ExamEngine } from '../exams/exam-engine.js';
import { TerminalEngine } from '../terminal/terminal-engine.js';
import { UIManager } from '../ui/ui-manager.js';

export class AppController {
  constructor({ appState, eventBus, translation, language, storage }) {
    this.appState = appState;
    this.eventBus = eventBus;
    this.translation = translation;
    this.language = language;
    this.storage = storage;
    this.examEngine = new ExamEngine();
    this.terminalEngine = new TerminalEngine(appState);
    this.achievementManager = new AchievementManager(appState);
    this.levelManager = new LevelManager(appState);
    this.progressManager = new ProgressManager(appState);
    this.uiManager = new UIManager({
      appState,
      translation,
      language,
      examEngine: this.examEngine,
      terminalEngine: this.terminalEngine,
      progressManager: this.progressManager,
      achievementManager: this.achievementManager,
      levelManager: this.levelManager,
      controller: this
    });
  }

  init() {
    this.uiManager.init();
    this.eventBus.emit('app:ready', this.appState.getState());
  }
}
