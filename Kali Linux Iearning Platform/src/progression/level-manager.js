export class LevelManager {
  constructor(appState) {
    this.appState = appState;
  }

  getLevel() {
    const xp = this.appState.getTotalXP();
    if (xp >= 500) return { label: 'Expert', level: 5 };
    if (xp >= 300) return { label: 'Advanced', level: 4 };
    if (xp >= 150) return { label: 'Proficient', level: 3 };
    if (xp >= 50) return { label: 'Intermediate', level: 2 };
    return { label: 'New', level: 1 };
  }
}
