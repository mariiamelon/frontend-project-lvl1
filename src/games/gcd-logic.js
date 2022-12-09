import {newGame, getRandomInt} from '/Users/dynkinamaria/hexlet-code/src/index.js';

const gameRules = 'Find the greatest common divisor of given numbers';

const nod = (num1, num2) => (!num2 ? num1 : nod(num2, num1 % num2));

const gameQuestionAnswer = () => {
    const num1 = getRandomInt(100);
    const num2 = getRandomInt(100);
    const question = `${num1} ${num2}`;
    const preAnswer = nod(num1, num2);
    const answer = preAnswer.toString();
    return [question, answer];
   };
        
export const brainGcd = () => newGame(gameRules, gameQuestionAnswer);