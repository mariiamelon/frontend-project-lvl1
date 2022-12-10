import { newGame, getRandomInt } from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const gameQuestionAnswer = () => {
  const question = getRandomInt(100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const brainEven = () => newGame(gameRules, gameQuestionAnswer);
export default brainEven;
