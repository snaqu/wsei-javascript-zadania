// Zadanie 1

// 1.

document.querySelector('#test-event').addEventListener('click', (e) => {
  console.log('e', e);
});

// 2.

document.addEventListener('mousemove', (e) => {
  // console.log(e);
})

// 3.

document.querySelector('#test-event').addEventListener('mouseover', (e) => {
  console.log('e', e);
});

// 4.

document.addEventListener('keypress', (e) => {
  // console.log('e', e);
});

// 5.

document.addEventListener('scroll', (e) => {
  console.log('e', e);
});

// 6.

document.querySelector('#input-test').addEventListener('input', (e) => {
  // console.log('e', e);
});

// Zadanie 2
document.querySelector('#ex2').addEventListener('click', (e) => {
  document.querySelector('#span-ex2').innerHTML = e.target.getAttribute('data-text');
});


// Zadanie 3

const ex3 = document.querySelector('#ex3');

ex3.addEventListener('mouseover', (e) => { e.target.style.backgroundColor = 'blue'; });
ex3.addEventListener('mouseout', (e) => { e.target.style.backgroundColor = 'red'; });

// Zadanie 4

document.querySelector('#input-test').addEventListener('input', (e) => {
  const value = e.target.value;

  document.querySelector('#ex3-err').innerHTML = /\d/.test(value) ? "Nie możesz wpisywać liczb" : '';
})

// Zadanie 5
let counter = 0;

const ex5 = document.querySelector('#ex5');

document.querySelector('#ex5-button').addEventListener('click', () => {
  counter++;
  ex5.innerHTML = counter;

  if (counter === 10) {
    ex5.innerHTML = 0;
    counter = 0;
  }
});

// Zadanie 6
window.addEventListener('scroll', () => {
  document.body.style.backgroundColor = window.scrollY > 200 ? 'red' : 'white';
});

// Zadanie 7

const calculatorNumbers = document.querySelectorAll('.calculator-numbers');
const calculatorButtons = document.querySelectorAll('.calculator-button');
const calculatorInput = document.querySelector('#calculator-input');
let calculations = [];
let result = '';
let shouldClear = false;

calculatorNumbers.forEach((item) => {
  item.addEventListener('click', (e) => {
    const value = e.target.getAttribute('data-value');
    if (shouldClear) {
      calculatorInput.value = '';
      calculations = [];
      shouldClear = false;
    }
    const number = calculatorInput.value + value;

    calculatorInput.value = number;
    result += value;
  });
})

calculatorButtons.forEach((item) => {
  item.addEventListener('click', (e) => {
    const value = e.target.getAttribute('data-value');
    const number = calculatorInput.value + value;
    calculatorInput.value = number;

    calculations.push(result);
    calculations.push(value);
    result = '';

    if (value === '=') {
      const calculationsResult = calculations;
      calculationsResult.pop();

      calculatorInput.value = eval(calculationsResult.join(' '));
      shouldClear = true;
    }
  });
})
