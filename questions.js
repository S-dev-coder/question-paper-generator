const Question = require('./question');

const questionStore = [
  new Question("What is the capital of France?", "Geography", "World Capitals", "Easy", 5),
  new Question("Solve: 2x + 5 = 15", "Mathematics", "Algebra", "Medium", 10),
  new Question("Who wrote 'To Kill a Mockingbird'?", "Literature", "Famous Authors", "Medium", 8),
  new Question("What is the powerhouse of the cell?", "Biology", "Cell Biology", "Easy", 6),
  new Question("Explain Newton's First Law of Motion.", "Physics", "Mechanics", "Hard", 12),
  // Add more questions...
];

module.exports = questionStore;
