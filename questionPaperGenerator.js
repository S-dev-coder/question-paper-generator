const calculateDistribution = require('./distribution');

function generateQuestionPaper(totalMarks, percentages, questionStore) {
  const distribution = calculateDistribution(totalMarks, percentages);
  const questionPaper = [];
  const marksAllocated = { Easy: 0, Medium: 0, Hard: 0 };

  // Sort questionStore by difficulty for better distribution handling
  questionStore.sort((a, b) => a.difficulty.localeCompare(b.difficulty));

  questionStore.forEach(question => {
    if (marksAllocated[question.difficulty] < distribution[question.difficulty]) {
      questionPaper.push(question);
      marksAllocated[question.difficulty] += question.marks;
    }
  });

  return questionPaper;
}

module.exports = generateQuestionPaper;
