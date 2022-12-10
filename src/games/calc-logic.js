import { newGame, getRandomInt } from '../index.js';

const gameRules = 'What is the result of the expression?';

const mathOperator = ['+', '-', '*'];

export const gameCalculation = (num1, sign, num2) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`operation ${sign} is not supported`);
  }
};

const gameQuestionAnswer = () => {
  const sign = mathOperator[getRandomInt(3)];
  const num1 = getRandomInt(100);
  const num2 = getRandomInt(100);
  const question = `${num1} ${sign} ${num2}`;
  const preAnswer = gameCalculation(num1, sign, num2);
  const answer = preAnswer.toString();
  return [question, answer];
};

const brainCalc = () => newGame(gameRules, gameQuestionAnswer);
export default brainCalc;
