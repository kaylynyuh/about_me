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
    alert('Correct!');
  } else {
    alert('Wrongo! Maybe next time.');
  }

var answer2 = prompt('Do I know how to longboard?').toLowerCase();
  if (answer2 === 'yes' || answer2 === 'y') {
    alert('Of course she does!')
  } else {
    alert('Wrong, my friend. Dead wrong.');
  }
