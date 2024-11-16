const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculate(question) {
  
  const regex = /What is (\d+) (plus|minus|multiplied by|divided by) (\d+)\?/;
  const match = question.match(regex);

  if (match) {
    const num1 = parseInt(match[1], 10);
    const operator = match[2];
    const num2 = parseInt(match[3], 10);

    let result;
    switch (operator) {
      case 'plus':
        result = num1 + num2;
        break;
      case 'minus':
        result = num1 - num2;
        break;
      case 'multiplied by':
        result = num1 * num2;
        break;
      case 'divided by':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          return 'Error';
        }
        break;
      default:
        return 'Invalid operation';
    }

    return `${num1} ${operator} ${num2} is ${result}`;
  } 
}

rl.question('Please enter a question: ', (question) => {
  const answer = calculate(question);
  console.log(answer);
  rl.close();
});
