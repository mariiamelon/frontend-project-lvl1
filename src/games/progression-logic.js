import readlineSync from "readline-sync";
import { getRandomInt } from '/Users/dynkinamaria/hexlet-code/src/index.js';
console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question("May I have your name? ");
console.log(`Hello, ${userName}!`);

const progressionRules = 'What number is missing in the progression?';


export const gameProgression = () => {
    
    console.log(progressionRules);

    for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(100);
    let progression = [];
    for (let i = 1; i < 10; i += 1) {
        const current = num1 * i;
        progression.push(current);
      }
    const hiddenNumber = getRandomInt(10);
  progression[hiddenNumber] = '..';
  const answerProgression = progression.join('  ');
    console.log(`Question: ${answerProgression}`);
    const answer = readlineSync.question("Your answer: ")
    const rightAnswer = progression[1] - progression[0] + progression[hiddenNumber - 1];
    if (answer === rightAnswer.toString()) {
        console.log('Correct!');

    } else {
        const errorMessage = `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \n Let's try again, ${userName}!`;
        console.log(errorMessage);
        return errorMessage;
    }
}
console.log(`Congratulations, ${userName}!`);
};