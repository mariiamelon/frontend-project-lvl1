import {newGame, getRandomInt} from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
    if (num === 2) {
      return true;
    }
    if (num <= 0 || num === 1) {
      return false;
    }
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const gameQuestionAnswer = () => {
    const question = getRandomInt(100);
    const answer = isPrime(question) ? 'yes' : 'no';
    return [question, answer];
  };

export const primeGame = () => newGame(gameRules, gameQuestionAnswer);