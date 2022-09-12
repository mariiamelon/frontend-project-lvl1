import readlineSync from "readline-sync";
console.log('Welcome to the Brain Games!');
export const userName = readlineSync.question("May I have your name? ");
console.log(`Hello, ${userName}!`);

const calcRules = 'What is the result of the expression?';


const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  

export const gameCalculation = () => {
    
    console.log(calcRules);

    for (let i = 0; i < 3; i += 1) {
        const mathOperator = ['+', '-', '*'];
  const sign = mathOperator[getRandomInt(3)];
    const num1 = getRandomInt(100);
    const num2 = getRandomInt(100);
    const makeCalculation = `${num1} ${sign} ${num2}`;
    let result = 0;
        switch (sign) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
      case '*':
      result = num1 * num2;
      break;
    default:
      result = null;
      return result;
  }
  
    console.log(`Question: ${makeCalculation}`);
    const answer = readlineSync.question("Your answer: ")

    const rightAnswer = result;
    
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