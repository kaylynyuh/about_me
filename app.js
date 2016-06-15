'use strict';

var userName = prompt('Greetings! What is your name?');
alert('Welcome ' + userName + ', glad you\'re here!');

/*if (user is corret) {
  tell them so
} else {
  tell them they're wrong
}*/

var answer1 = prompt('Do I listen to Avenged Sevenfold?').toLowerCase();
  if (answer1 === 'yes' || answer1 === 'y') {
    alert('Surprsingly, correct!');
  } else {
    alert('Wrongo! Maybe next time.');
  }

var answer2 = prompt('Do I know how to longboard?').toLowerCase();
  if (answer2 === 'yes' || answer2 === 'y') {
    alert('Correct! Way to be.')
  } else {
    alert('Wrong, my friend.');
  }

var answer3 = prompt('Do I have a cat obsession?').toLowerCase();
  if (answer3 === "yes" || answer3 === 'y') {
    alert('You can bet your sweet ass I do')
  } else {
    alert('Wrongo.');
  }

var answer4 = prompt('Is my favorite color black? If that is even considered a color...').toLowerCase()
  if (answer4 === "yes" || answer4 === 'y') {
    alert('Right you are! The only color that matches my soul.')
  } else {
    alert('Incorrect. Haven\'t you seen my clothes?')
  }

var answer5 = prompt('Do I know how to play the flute?').toLowerCase()
  if (answer5 === "yes" || answer5 === 'y'){
    alert('Oddly enough, yes! You\'re right. It\'s a gift.')
  } else {
    alert('Wrong again my friend.')
  }
