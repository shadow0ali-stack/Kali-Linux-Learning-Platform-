export class ExamController {
  constructor(appState) {
    this.appState = appState;
  }

  runExam({ type = 'phase', stageId = 'phase1' } = {}) {
    return { type, stageId, status: 'ready' };
  }
}
