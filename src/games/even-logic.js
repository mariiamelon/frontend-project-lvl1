import readlineSync from "readline-sync";
console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question("May I have your name? ");
console.log(`Hello, ${userName}!`);

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

  export const gamePlay = () => {
    console.log(gameRules);
    for (let i = 1; i <= 3; i += 1) {
    const number = getRandomInt(100);
    console.log('Question: ', number);
    const answer = readlineSync.question("Your answer: ")
  
    const rightEven = (number % 2 === 0 && answer === 'yes');
    const rightnotEven = (number % 2 !== 0 && answer === 'no');
  
    if (rightEven === true || rightnotEven === true) {
      console.log('Correct!');
    } else {
      const opposite = (answer === 'yes' ? 'no' : 'yes');
      const errorMessage = `'${answer}' is wrong answer ;(. Correct answer was '${opposite}'. \n Let's try again, ${userName}!`;
      console.log(errorMessage);
      return errorMessage;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  };
