export class StageController {
  constructor(appState) {
    this.appState = appState;
  }

  setStage(stageId) {
    this.appState.setCurrentPhase(stageId);
  }
}
