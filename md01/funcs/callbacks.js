// Callbacks

// São funções que são passadas para outra função como parametro

const sum = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

// Isso ainda não é uma callback
const calculator = (operator, num1, num2) => {
  if (operator === "+") {
    return sum(num1, num2);
  } else if (operator === "-") {
    return sub(num1, num2);
  }
};

console.log(calculator("+", 2, 4));

// Com callback:

// const calculatorCallback = (callback, num1, num2) => callback(num1, num2);

// console.log(calculatorCallback(sum, 10, 20));

function calculatorCallback(dinossauro, num1, num2) {
  const resultCallback = dinossauro(num1, num2);

  return `O resultado da sua operação é ${resultCallback}`;
}

calculatorCallback(sum, 10, 20);
calculatorCallback(sub, 50, 25);
