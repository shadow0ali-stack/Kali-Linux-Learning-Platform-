export class QuestionSelector {
  constructor(questionBank) {
    this.questionBank = questionBank;
  }

  shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  selectByType(type, stageId, count) {
    const source = this.questionBank[type].filter((question) => !stageId || question.stage === stageId);
    return this.shuffle(source).slice(0, count);
  }

  buildPhaseExam(stageId) {
    const theoretical = this.selectByType('theoretical', stageId, 8);
    const practical = this.selectByType('practical', stageId, 7);
    return { theoretical, practical };
  }

  buildMidterm() {
    const theoretical = this.selectByType('theoretical', null, 8);
    const practical = this.selectByType('practical', null, 7);
    return { theoretical, practical };
  }

  buildFinal() {
    return this.buildMidterm();
  }
}
