import { QuestionSelector } from './question-selector.js';
import { ExamGrader } from './exam-grader.js';
import { ExamSession } from './exam-session.js';
import { QuestionBank } from '../data/questions/index.js';

export class ExamEngine {
  constructor() {
    this.selector = new QuestionSelector(QuestionBank);
    this.grader = new ExamGrader();
    this.session = null;
  }

  createExam({ type, stageId }) {
    let selected = null;
    if (type === 'midterm') {
      selected = this.selector.buildMidterm();
    } else if (type === 'final') {
      selected = this.selector.buildFinal();
    } else {
      selected = this.selector.buildPhaseExam(stageId);
    }

    this.session = new ExamSession({
      type,
      stageId,
      theoretical: selected.theoretical,
      practical: selected.practical
    });

    return this.session;
  }

  submitAnswers(theoryAnswers, practicalResults) {
    if (!this.session) return null;
    const result = this.grader.grade(this.session, theoryAnswers, practicalResults);
    this.session.result = result;
    this.session.endedAt = Date.now();
    return result;
  }
}
