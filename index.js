let readlineSync = require('readline-sync');
let chalk = require('chalk');


// User Introduction
let userName = readlineSync.question('To play the game, enter your name - ');
console.log('Hello 👋 ' + chalk.yellow.bold(userName) + ", Let's begin.");
console.log('-----------\n');


// Question list
let questionsList = [
  {
    question: "Who is my favorite superhero? ",
    answer: "Spiderman"
  },
  {
    question: "What is the name of my favorite Rock band? ",
    answer: "Royal Blood"
  },
  {
    question: "Where do i live? ",
    answer: "Thane"
  },
  {
    question: "What is my favorite sport? ",
    answer: "Football"
  },
  {
    question: "Who is my favorite football player? ",
    answer: "Messi"
  },
  {
    question: "What is my favorite programming language? ",
    answer: "JavaScript"
  }
]


// Highscore
let highScore = {
    name: 'Pratik',
    score: 40
}


let score = 0;
// game function
function game(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    score = score + 10;
    console.log('You typed - "' + chalk.blue(userAnswer) + '"');
    console.log(chalk.greenBright('You are correct.'));
    console.log('Score: ' + score);
    console.log('-----------\n');
  } else {
    console.log('You typed - "' + chalk.blue(userAnswer) + '"');
    console.log(chalk.red('You are wrong.'));
    console.log('Score: ' + score);
    console.log('-----------\n');
  }
}


// Looping Question list
for (let i=0; i<questionsList.length; i=i+1) {
  game(questionsList[i].question, questionsList[i].answer);
}


// Output
console.log('🔥 Game Over 🔥\n');
console.log('-----------');
console.log('Your final score is ' + score);
console.log('Current highscore is ' + chalk.blueBright(highScore.score) + ' by ' + chalk.yellow(highScore.name) + '.');
console.log('-----------\n');


// Checking if highscore is broken.
if (score>highScore.score) {
  console.log('Congrats ' + chalk.yellow(userName) + ', You broke the highscore 🎊🥳🎊.\nSend me a screenshot to add your name to the Highscore list.\n')
}