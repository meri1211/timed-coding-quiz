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