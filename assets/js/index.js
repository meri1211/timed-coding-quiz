// Created an array of objects containing the questions, answers and correct answer.
let quizQuestions = [
  {
    question: "Who created JavaScript?",
    answers: ["1. Brendan Eich", "2. Dennis Ritchie", "3. James Gosling"],
    correctOption: "1. Brendan Eich",
  },
  {
    question: "A boolean is ...?",
    answers: ["1. True or False", "2. A number", "3. An event handler"],
    correctOption: "1. True or False",
  },
  {
    question: "In JavaScript, arrays are...",
    answers: ["1. A list of items", "2. A function", "3. A method"],
    correctOption: "1. A list of items",
  },
  {
    question: "In JS, an object is written with...?",
    answers: ["1. Square brackets", "2. Curly braces", "3. Parentheses"],
    correctOption: "2. Curly braces",
  },
  {
    question: "The name:value pairs in JavaScript objects are called...",
    answers: ["1. Properties", "2. Parameters", "3. Arguments"],
    correctOption: "1. Properties",
  },
];

console.log(quizQuestions[0].answers);

console.log(quizQuestions);

//Created variables containing the ids of the elements, so that we can grab them with JS.
let questionTitle = document.querySelector("#question-title");
let choicesDiv = document.querySelector("#choices");
let startButton = document.querySelector("#start");
let submitButton = document.querySelector("#submit");
let timeCountEl = document.querySelector("#time");
let endScreenDiv = document.querySelector("#end-screen");
let questionsDiv = document.querySelector("#questions");
let finalScore = document.querySelector("#final-score");
let userName = document.querySelector("#initials");
let userData;
let answer;
let timer = 75;
let currentQuestionIndex = 0;
let score = 0;
let optionButton;
let answers = [];
let currentQuestion;
let questions = [];
let timerInterval;

// Added an event listener to the start button so that when it's clicked, the div with the #start-screen is hidden and the div with the id #questions is revealed.
startButton.addEventListener("click", function (event) {
  if (event.target.matches("#start")) {
    document.querySelector("#start-screen").setAttribute("class", "hide");
    document.querySelector("#questions").classList.remove("hide");
    timeCountEl.textContent = timer;
    // used setInterval to decrement the timer
    timerInterval = setInterval(function () {
      timer--;
      timeCountEl.innerText = timer;
      if (timer === 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }
});

showQuestion();
// Show quiz questions and answer options depending on the current question.
function showQuestion() {
  for (let i = 0; i < quizQuestions.length; i++) {
    currentQuestion = quizQuestions[currentQuestionIndex];
    console.log(currentQuestion);
    questionTitle.innerText = currentQuestion.question;
    choicesDiv.innerHTML = "";
    currentQuestion.answers.forEach((answer) => {
      optionButton = document.createElement("button");
      optionButton.innerText = answer;
      optionButton.classList.add("btn");
      choicesDiv.appendChild(optionButton);
    });
  }
}

// Added event listener on the div containing the buttons.
choicesDiv.addEventListener("click", function (e) {
    //event delegation
    // Check if answer is correct
    let answerClicked = e.target.innerText;
    console.log(answerClicked);
    if (answerClicked === quizQuestions[currentQuestionIndex].correctOption) {
      alert("Correct!");
    } else {
      alert("Incorrect! You lose 15 sec.");
      timer - 15;
    }
    currentQuestionIndex++;
    showQuestion();
    if (currentQuestionIndex == 4 || timer == 0) {
      clearInterval(timerInterval);
      endScreenDiv.classList.remove("hide");
      questionsDiv.setAttribute("class", "hide");
      // Final score equals seconds left.
      finalScore.textContent = timer;
    }
  });
