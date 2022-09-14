import readlineSync from "readline-sync";
import { getRandomInt } from '/Users/dynkinamaria/hexlet-code/src/index.js';
console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question("May I have your name? ");
console.log(`Hello, ${userName}!`);

const gcdRules = 'Find the greatest common divisor of given numbers';


export const gameGcd = () => {
    
    console.log(gcdRules);

    for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(100);
    const num2 = getRandomInt(100);
    const nod = (num1, num2) => (!num2 ? num1 : nod(num2, num1 % num2));
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question("Your answer: ")
    const rightAnswer = nod(num1, num2);
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