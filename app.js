const questionStore = require('./questions');
const generateQuestionPaper = require('./questionPaperGenerator');

const totalMarks = 100;
const percentages = {
  Easy: 20,
  Medium: 50,
  Hard: 30,
};

const questionPaper = generateQuestionPaper(totalMarks, percentages, questionStore);
console.log('Question Paper:', questionPaper);
