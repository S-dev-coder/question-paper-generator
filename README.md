# Question Paper Generator
This Node.js application generates a question paper based on given criteria such as difficulty levels and total marks.

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/question-paper-generator.git
   cd question-paper-generator
Install dependencies:
npm install
Usage
To generate a question paper, modify the parameters in app.js:
totalMarks: Total marks for the question paper.
percentages: Object specifying the distribution of marks for different difficulty levels.
Run the application:
node app.js
~~ The generated question paper will be displayed in the console.

Files
question.js: Defines the Question class.
questions.js: Stores sample questions.
distribution.js: Calculates the distribution of marks.
questionPaperGenerator.js: Generates the question paper based on criteria.
shuffle.js: Utility function to shuffle arrays.
app.js: Entry point to test the application.

Additional Notes
Extend the application to handle edge cases and user input for customization.
Add error handling for scenarios like insufficient questions or marks.
Modify the application to read questions from a file or database.


@ Feel free to contribute and expand the functionality of this Question Paper Generator
