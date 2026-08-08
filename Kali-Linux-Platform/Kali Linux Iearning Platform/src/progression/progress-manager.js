export class ProgressManager {
  constructor(appState) {
    this.appState = appState;
  }

  getPhaseProgress(stageId) {
    const mastered = this.appState.getMastered(stageId) || [];
    const commands = Object.values(this.appState.commandRegistry.getByStage(stageId));
    return {
      mastered: mastered.length,
      total: commands.length,
      percent: commands.length ? Math.round((mastered.length / commands.length) * 100) : 0
    };
  }
}
