var readlineSync = require("readline-sync");
var userName = readlineSync.question("what is your name?");
var score = 0;
console.log("welcome " + userName + " to how well do you know Mahima?");
//play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Right!");
    score = score + 1;
  } else {
    console.log("Wrong!");
  }
  console.log("current score :", score);
  console.log("   ");
}

var questions = [
  {
    question: "Where do i live?",
    answer: "udhampur",
  },
  {
    question: "Which is my favourite color?",
    answer: "black",
  },
  {
    question: "My favourite sport would be?",
    answer: "cricket",
  },
  {
    question: "Who is my favouirte player ? ",
    answer: "virat kohli",
  },
  {
    question: "My favourite food is?",
    answer: "momos",
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("YAY!YOU SCORED ", score);
