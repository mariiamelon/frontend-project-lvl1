import readlineSync from "readline-sync";
import { getRandomInt } from '/Users/dynkinamaria/hexlet-code/src/index.js';
console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question("May I have your name? ");
console.log(`Hello, ${userName}!`);

const gcdRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (x) => {
    if (x <= 2) {
        return 'yes';
    }
for (let i = 1; i < x; i += 1) {
    if (x % i === 0) {
        return 'no';
    } else {
        return 'yes';
    }
}
}


export const primeGame = () => {
    
    console.log(gcdRules);

    for (let i = 0; i < 3; i += 1) {
    const num1 = getRandomInt(100);

    console.log(`Question: ${num1}`);
    const answer = readlineSync.question("Your answer: ")
    const rightAnswer = isPrime(num1);
    if (answer === rightAnswer) {
        console.log('Correct!');

    } else {
        const errorMessage = `'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. \n Let's try again, ${userName}!`;
        console.log(errorMessage);
        return errorMessage;
    }
}
console.log(`Congratulations, ${userName}!`);
};