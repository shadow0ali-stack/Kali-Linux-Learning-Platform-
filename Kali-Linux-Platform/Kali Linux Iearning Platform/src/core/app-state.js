import { STORAGE_SCHEMA } from '../storage/storage-schema.js';

export class AppState {
  constructor({ storage, commandRegistry, stageRegistry, questionBank, initialVFS }) {
    this.storage = storage;
    this.commandRegistry = commandRegistry;
    this.stageRegistry = stageRegistry;
    this.questionBank = questionBank;
    this.initialVFS = initialVFS;

    this.state = {
      currentPhase: 'phase1',
      totalXP: 0,
      mastered: {},
      achievements: {},
      stats: {
        testsCompleted: 0,
        totalScore: 0,
        bestScore: 0,
        bestStreak: 0,
        currentStreak: 0,
        totalTrainingTime: 0,
        testHistory: [],
        phaseMastery: {}
      },
      phaseTests: {},
      midtermPassed: false,
      finalPassed: false,
      vfs: null,
      darkMode: false,
      language: 'ar'
    };
  }

  async loadState() {
    const saved = await this.storage.loadAll();
    if (saved) {
      Object.keys(STORAGE_SCHEMA).forEach((key) => {
        if (saved[key] !== undefined) {
          this.state[key] = saved[key];
        }
      });
    }

    if (!this.state.vfs) {
      this.state.vfs = JSON.parse(JSON.stringify(this.initialVFS));
    }

    this.stageRegistry.getAllStages().forEach((stage) => {
      if (!this.state.mastered[stage.id]) this.state.mastered[stage.id] = [];
      if (!this.state.stats.phaseMastery[stage.id]) this.state.stats.phaseMastery[stage.id] = 0;
    });

    await this.saveState();
  }

  async saveState() {
    const data = {};
    Object.keys(STORAGE_SCHEMA).forEach((key) => {
      data[key] = this.state[key];
    });
    await this.storage.saveAll(data);
  }

  getState() { return this.state; }
  updateState(updates) { this.state = { ...this.state, ...updates }; return this.saveState(); }
  getCurrentPhase() { return this.state.currentPhase; }
  setCurrentPhase(phase) { this.state.currentPhase = phase; return this.saveState(); }
  getTotalXP() { return this.state.totalXP; }
  addXP(amount) { this.state.totalXP += amount; return this.saveState(); }
  getMastered(phase) { return this.state.mastered[phase] || []; }
  setMastered(phase, list) { this.state.mastered[phase] = list; return this.saveState(); }
  getAchievements() { return this.state.achievements; }
  setAchievements(ach) { this.state.achievements = ach; return this.saveState(); }
  getStats() { return this.state.stats; }
  setStats(stats) { this.state.stats = stats; return this.saveState(); }
  getVFS() { return this.state.vfs; }
  setVFS(vfs) { this.state.vfs = vfs; return this.saveState(); }
  getDarkMode() { return this.state.darkMode; }
  setDarkMode(value) { this.state.darkMode = value; return this.saveState(); }
  getLanguage() { return this.state.language; }
  setLanguage(lang) { this.state.language = lang; return this.saveState(); }
}
