import {newGame, getRandomInt} from '../index.js';
//console.log('Welcome to the Brain Games!');
//export const userName = readlineSync.question("May I have your name? ");
//console.log(`Hello, ${userName}!`);

//const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

//export const getRandomInt = (max) => {
  //return Math.floor(Math.random() * max);
//};

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const gameQuestionAnswer = () => {
  const question = getRandomInt(100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export const brainEven = () => newGame(gameRules, gameQuestionAnswer);