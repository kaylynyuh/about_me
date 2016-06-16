'use strict';

var correctAnswers = 0;
var totalQuestions = 7;

var userName = prompt('Greetings! What is your name?');
console.log(userName + ' started the guessing game!');
alert('Welcome ' + userName + ', glad you\'re here!');

function question1() {
  var answer1 = prompt('Does Kaylyn listen to Avenged Sevenfold?').toLowerCase();
  if (answer1 === 'yes' || answer1 === 'y') {
    console.log(userName + ' answered correctly!');
    correctAnswers++;
    alert('Surprsingly, correct!');
  } else {
    console.log(userName + ' answered incorrectly!');
    alert('Wrongo! Maybe next time.');
  }
}

function question2() {
  var answer2 = prompt('Does Kaylyn know how to longboard?').toLowerCase();
  if (answer2 === 'yes' || answer2 === 'y') {
    console.log(userName + ' answered correctly!');
    correctAnswers++;
    alert('Correct! Way to be.');
  } else {
    console.log(userName + ' answered incorrectly!');
    alert('Wrong, my friend.');
  }
}

function question3() {
  var answer3 = prompt('Does Kaylyn have a candy addiction?').toLowerCase();
  if (answer3 === 'yes' || answer3 === 'y') {
    console.log(userName + ' answered correctly!');
    correctAnswers++;
    alert('Right you are!');
  } else {
    console.log(userName + ' answered incorrectly!');
    alert('Wrongo.');
  }
}

function question4() {
  var answer4 = prompt('Is her favorite color black? If that is even considered a color...').toLowerCase();
  if (answer4 === 'yes' || answer4 === 'y') {
    console.log(userName + ' answered correctly!');
    correctAnswers++;
    alert('Right you are! The only color that matches her soul.');
  } else {
    console.log(userName + ' answered incorrectly!');
    alert('Incorrect. Haven\'t you seen her clothes?');
  }
}

<<<<<<< HEAD
var rightNumber = 22;
var counter = 0;
var maxGuesses = 4;

//edit spacing for else ifs, move counters to bottom
while (counter < maxGuesses) {
  var input = parseInt(prompt('Guess a number between 1 and 50... Don\'t be scared! You\'re probably wrong anyway.'));
  if (isNaN(input)) {
    counter++;
    alert ('Please enter a valid number. This counts as a guess.');
  }
  else if (input === rightNumber){
=======
function question5() {
  var answer5 = prompt('Does Kaylyn know how to play the flute?').toLowerCase();
  if (answer5 === 'yes' || answer5 === 'y'){
    console.log(userName + ' answered correctly!');
>>>>>>> 31d1764fc93b264402e9a2b912cb9fea6d69f143
    correctAnswers++;
    alert('Oddly enough, yes! You\'re right. It\'s a gift.');
  } else {
    console.log(userName + ' answered incorrectly!');
    alert('Wrong again my friend.');
  }
}
function question6() {
  var rightNumber = 22;
  var counter = 0;
  var maxGuesses = 4;

  while (counter < maxGuesses) {
    var input = parseInt(prompt('Guess a number between 1 and 50... Don\'t be scared! You\'re probably wrong anyway.'));
    if (isNaN(input)) {
      counter++;
      alert ('Please enter a valid number. This counts as a guess.');
    } else if (input === rightNumber){
      correctAnswers++;
      alert('Correct! Totes Amaze.');
      break;
    } else if (input < rightNumber){
      alert('Too Low!');
      counter++;
    } else if (input > rightNumber){
      alert('Too High!');
      counter++;
    }
  }
}

function question7() {
  var states = ['washington', 'oregon', 'california', 'hawaii', 'alaska', 'new york'];
  var counter = 0;
  var rightAnswer = false;
  var maxGuesses = 6;

  while (counter < maxGuesses) {
    var userInput = prompt('Can you guess one of my favorite states?').toLowerCase();
    for (var i = 0; i < states.length; i++) {
      if (userInput === states[i]) {
        rightAnswer = true;
        break;
      }
    }
    if (rightAnswer) {
      alert('Way to be!');
      correctAnswers++;
      break;
    } else {
      counter++;
      alert ('Try again my friend');
    }
  }
}

function results(){
  // provide different message depending on results
  if (correctAnswers >= 5) {
    var message = 'Way to be!';
  } else {
    var message = 'Better luck next time!';
  }
  alert ('You got ' + correctAnswers + ' out of ' + totalQuestions + ' correct, ' + userName + '. ' + message);
}
question1();
question2();
question3();
question4();
question5();
question6();
question7();
results();
