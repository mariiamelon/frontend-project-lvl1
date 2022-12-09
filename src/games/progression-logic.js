import {getRandomInt, newGame} from '/Users/dynkinamaria/hexlet-code/src/index.js';


const gameRules = 'What number is missing in the progression?';

const makeProgression = (num, step) => {
  let progression = [];
    for (let i = 0; i < 10; i += 1) {
      const current = num + i * step;
      progression.push(current);
      }
      return progression
    };

    const progressionWidthHiddenElement = (progression, element) => {
      const newArr = progression.slice(0);
      const newElement = element;
      newArr[newElement] = '..';
      return newArr.join(' ');
    };

const gameQuestionAnswer = () => {
  const num = getRandomInt(100);
  const randomHiddenNumber = getRandomInt(10);
  const randomStep = getRandomInt(10);
  const progression = makeProgression(num, randomStep);
  const question = progressionWidthHiddenElement(progression, randomHiddenNumber);
  const preAnswer = num + (randomStep * randomHiddenNumber);
  const answer = preAnswer.toString();
  return [question, answer];
 };
      
export const brainProgression = () => newGame(gameRules, gameQuestionAnswer);
