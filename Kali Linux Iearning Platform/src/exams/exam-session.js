export class ExamSession {
  constructor({ type, stageId, theoretical, practical }) {
    this.type = type;
    this.stageId = stageId;
    this.theoretical = theoretical;
    this.practical = practical;
    this.startedAt = Date.now();
    this.endedAt = null;
    this.result = null;
  }
}
