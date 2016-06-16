'use strict';

var correctAnswers = 0;
var totalQuestions = 7;

var userName = prompt('Greetings! What is your name?');
console.log(userName + ' started the guessing game!');
alert('Welcome ' + userName + ', glad you\'re here!');

var answer1 = prompt('Does Kaylyn listen to Avenged Sevenfold?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
  console.log(userName + ' answered correctly!');
  correctAnswers++;
  alert('Surprsingly, correct!');
} else {
  console.log(userName + ' answered incorrectly!');
  alert('Wrongo! Maybe next time.');
}

var answer2 = prompt('Does Kaylyn know how to longboard?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'y') {
  console.log(userName + ' answered correctly!');
  correctAnswers++;
  alert('Correct! Way to be.');
} else {
  console.log(userName + ' answered incorrectly!');
  alert('Wrong, my friend.');
}

var answer3 = prompt('Does Kaylyn have a candy addiction?').toLowerCase();
if (answer3 === 'yes' || answer3 === 'y') {
  console.log(userName + ' answered correctly!');
  correctAnswers++;
  alert('Right you are!');
} else {
  console.log(userName + ' answered incorrectly!');
  alert('Wrongo.');
}

var answer4 = prompt('Is her favorite color black? If that is even considered a color...').toLowerCase();
if (answer4 === 'yes' || answer4 === 'y') {
  console.log(userName + ' answered correctly!');
  correctAnswers++;
  alert('Right you are! The only color that matches her soul.');
} else {
  console.log(userName + ' answered incorrectly!');
  alert('Incorrect. Haven\'t you seen her clothes?');
}

var answer5 = prompt('Does Kaylyn know how to play the flute?').toLowerCase();
if (answer5 === 'yes' || answer5 === 'y'){
  console.log(userName + ' answered correctly!');
  correctAnswers++;
  alert('Oddly enough, yes! You\'re right. It\'s a gift.');
} else {
  console.log(userName + ' answered incorrectly!');
  alert('Wrong again my friend.');
}

var rightNumber = 22;
var counter = 0;
var maxGuesses = 4;

while (counter < maxGuesses) {
  var input = parseInt(prompt('Guess a number between 1 and 50... Don\'t be scared! You\'re probably wrong anyway.'));
  if (input === rightNumber){
    correctAnswers++;
    alert('Correct! Totes Amaze.');
    break;
  }
  else if (input < rightNumber){
    alert('Too Low!');
    counter++;
  }
  else if (input > rightNumber){
    alert('Too High!');
    counter++;
  }
}

var states = ['Washington', 'Oregon', 'California', 'Hawaii', 'Alaska', 'New York'];
var counter = 0;
var rightAnswer = false;
var maxGuesses = 6;

guess_loop:
while (counter < maxGuesses) {
  state_loop:
  for (var i = 0; i < states.length; i++) {
    var userInput = prompt('Can you guess one of my favorite states?');
    if (userInput === states[i]) {
      rightAnswer = true;
      break state_loop;
    }
    else {
      counter++;
      alert ('Try again my friend');
    }
  }
  if (rightAnswer) {
    alert('Way to be!');
    correctAnswers++;
    break guess_loop;
  }
}

// provide different message depending on results
if (correctAnswers >= 5) {
  var message = 'Way to be!';
}
else {
  var message = 'Better luck next time!';
}

alert ('You got ' + correctAnswers + ' out of ' + totalQuestions + ' correct, ' + userName + '. ' + message);
