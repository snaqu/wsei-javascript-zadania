// Zadanie 1

const firstNumber = 342;
const secondNumber = 563;

if (firstNumber > secondNumber) {
  console.log('firstNumber', firstNumber);
} else {
  console.log('secondNumber', secondNumber);
}

// Zadanie 2

const firstNumber1 = 342;
const secondNumber1 = 563;
const thirdNumber1 = 324324;

if (firstNumber1 > secondNumber1 && firstNumber1 > thirdNumber1) {
  console.log('firstNumber1', firstNumber1);
} else if (secondNumber1 > firstNumber1 && secondNumber1 > thirdNumber1) {
  console.log('secondNumber1', secondNumber1);
} else {
  console.log('thirdNumber1', thirdNumber1);
}

// Zadanie 3

for (let i = 0; i < 10; i++) {
  console.log('Lubię JavaScript');
}

// Zadanie 4

let result = 0;

for (let i = 0; i < 10; i++) {
  result += i;
}

console.log('result', result);

// Zadanie 5

const n = 23;

for (let i = 0; i <= n; i++) {
  console.log(i % 2 === 0 ? `${i} parzysta` : `${i} nieparzysta`);
}

// Zadanie 6

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 5; j++) {
    console.log("i= " + i + ", j= " + j);
  }
}

// Zadanie 7

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

// Zadanie 8

// a
for (let i = 1; i <= 5; i++) {
  console.log(Array(i).fill('*').join(''));
}

// b
for (let i = 1; i <= 5; i++) {
  const result = [];

  for (let j = i; j < 5; j++) {
    result.push(' ');
  }

  for (let k = 0; k < (2 * i - 1); k++) {
    const valueToPush = k % 2 === 0 ? '*' : ' ';
    result.push(valueToPush);
  }

  console.log(result.join(''));
}

// c

for (i = 1; i <= 5; i++) {
  const result = [];

  for (let j = i; j < 5; j++) {
    result.push(" ");
  }

  for (let j = 1; j <= (2 * i - 1); j++) {
    result.push("*");
  }

  console.log(result.join(''));
}

// d

const samplePattern = ['*', '1', '2', '3', '4'];
const patternLogs = [];

samplePattern.forEach((_, i) => {
  const currentPattern = samplePattern;
  currentPattern[i] = '*';
  const result = currentPattern.join('');

  patternLogs.push(result);
  console.log(result);
});

console.log(Array(samplePattern.length).fill('-').join(''));

patternLogs.reverse().forEach((element) => console.log(element));

// e

for (let i = 1; i <= 5; i++) {
  const result = [];

  for (let j = i; j < 5; j++) {
    result.push(' ');
  }

  for (let k = 0; k < (2 * i - 1); k++) {
    const valueToPush = k % 2 === 0 ? '*' : ' ';
    result.push(valueToPush);
  }

  console.log(result.join(''));
}

for (let i = 0; i < 3; i++) {
  const result = [];

  for (let j = 0; j < 4; j++) {
    result.push(' ');
  }

  result.push('*');

  console.log(result.join(''));
}
