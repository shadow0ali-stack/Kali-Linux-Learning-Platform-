export class AchievementManager {
  constructor(appState) {
    this.appState = appState;
    this.templates = [
      { id: 'first-command', name: { ar: 'أول أمر', en: 'First Command' }, xp: 10 },
      { id: 'ten-commands', name: { ar: 'إتقان 10 أوامر', en: 'Master 10 Commands' }, xp: 30 },
      { id: 'first-test', name: { ar: 'اجتياز أول اختبار', en: 'First Test Passed' }, xp: 25 },
      { id: 'midterm', name: { ar: 'اجتياز الاختبار النصفي', en: 'Pass Midterm' }, xp: 50 },
      { id: 'final', name: { ar: 'اجتياز الاختبار النهائي', en: 'Pass Final' }, xp: 75 },
      { id: 'perfect', name: { ar: 'نتيجة 100%', en: '100% Score' }, xp: 100 },
      { id: 'stage-mastered', name: { ar: 'إتقان مرحلة', en: 'Stage Mastered' }, xp: 40 }
    ];
  }

  unlock(achievementId, xp = 0) {
    const current = this.appState.getAchievements();
    if (!current[achievementId]) {
      current[achievementId] = { unlockedAt: Date.now(), xp };
      this.appState.setAchievements(current);
      return true;
    }
    return false;
  }

  checkAll() {
    const state = this.appState.getState();
    const xp = state.totalXP;
    if (xp > 0) this.unlock('first-command', 10);
    if (xp >= 200) this.unlock('ten-commands', 30);
    if ((state.stats && state.stats.testsCompleted) > 0) this.unlock('first-test', 25);
    if (state.midtermPassed) this.unlock('midterm', 50);
    if (state.finalPassed) this.unlock('final', 75);
    if (state.stats && state.stats.bestScore >= 100) this.unlock('perfect', 100);
    return Object.keys(this.appState.getAchievements());
  }
}
