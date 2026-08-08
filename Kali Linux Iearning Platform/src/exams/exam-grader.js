export class ExamGrader {
  grade(session, theoryAnswers = {}, practicalResults = []) {
    const theoryCount = session.theoretical.length || 0;
    const practicalCount = session.practical.length || 0;

    let theoryScore = 0;
    let theoryCorrect = 0;
    let theoryWrong = 0;

    session.theoretical.forEach((question) => {
      const answer = theoryAnswers[question.id];
      if (!answer) {
        theoryWrong += 1;
        return;
      }
      if (answer === question.correct) {
        theoryCorrect += 1;
        theoryScore += 5;
      } else {
        theoryWrong += 1;
      }
    });

    let practicalScore = 0;
    let practicalCorrect = 0;
    let practicalWrong = 0;
    session.practical.forEach((question, index) => {
      const answer = practicalResults[index];
      if (question.validator(answer || '')) {
        practicalCorrect += 1;
        practicalScore += 60 / Math.max(1, practicalCount);
      } else {
        practicalWrong += 1;
      }
    });

    const total = theoryScore + practicalScore;
    const finalScore = Math.min(100, Math.max(0, total));
    const evaluation = this.evaluate(finalScore);

    return {
      theoryScore,
      practicalScore,
      totalScore: finalScore,
      finalScore,
      theoryCorrect,
      theoryWrong,
      practicalCorrect,
      practicalWrong,
      evaluation,
      success: finalScore >= 70,
      theoryCount,
      practicalCount,
      timeMs: Date.now() - session.startedAt,
      percentage: Math.round(finalScore)
    };
  }

  evaluate(score) {
    if (score >= 90) return { label: 'ممتاز', code: 'excellent' };
    if (score >= 80) return { label: 'جيد جداً', code: 'very-good' };
    if (score >= 70) return { label: 'جيد', code: 'good' };
    return { label: 'ضعيف', code: 'weak' };
  }
}
