// Section List
var QUIZ_SECTIONS = document.querySelectorAll(".quiz-section");

// Start
const START_SECTION = document.getElementById("start");
const START_BTN = document.getElementById("start-button");

// Quiz Questions
const QUIZ_SECTION = document.getElementById("quiz-questions");
const TIME_REMAINING = document.getElementById("time-remaining");
const QUESTION = document.getElementById("question");
const CHOICES = document.getElementById("choices");
const CHOICE_STATUSES = document.querySelectorAll(".choice-status");
const CORRECT = document.getElementById("correct");
const WRONG = document.getElementById("wrong");

// End Quiz 
const END_SECTION = document.getElementById("end");
const END_TITLE = document.getElementById("end-title");
const SCORE = document.getElementById("score");
const INITIALS_INPUT = document.getElementById("initials");
const SUBMIT_SCORE = document.getElementById("submit-score");
const ERROR_MESSAGE = document.getElementById("error-message");

// Questions Element
class Question {
    constructor(question, choices, indexOfCorrectChoice) {
      this.question = question;
      this.choices = choices;
      this.indexOfCorrectChoice = indexOfCorrectChoice;
    }
  }
  const QUESTION_1 = new Question("Commonly used data types DO NOT include: ", 
    ["Strings", "Booleans", "Alerts", "Numbers"], 2);
  const QUESTION_2 = new Question("The condition in an if / else statement is enclosed within ____.", 
    ["Quotes", "Curly brackets", "Parentheses", "Square brackets"], 2);
  const QUESTION_3 = new Question("Arrays in JavaScript can be used to store ____.", 
    ["Numbers and Strings", "Other arrays", "Booleans", "All of the above"], 3);
  const QUESTION_4 = new Question("String values must be enclosed within _____ when being assigned to variables.", 
    ["Commas", "Curly brackets", "Quotes", "Parentheses"], 2);
  const QUESTION_5 = new Question("A very useful tool used during development and debugging for printing content to the debugger is: ", 
    ["JavaScript", "Terminal/Bash", "For Loops", "console.log"], 3);
  const QUESTION_LIST = [QUESTION_1, QUESTION_2, QUESTION_3, QUESTION_4, QUESTION_5];
  
  let currentQuestion = 0;
  
  let totalTime = 60;
  let totalTimeInterval;
  let choiceStatusTimeout; 
  
  /******** EVENT LISTENERS ********/ 
  START_BTN.addEventListener('click', startGame);
  CHOICES.addEventListener('click', processChoice);
  SUBMIT_SCORE.addEventListener('submit', processInput);