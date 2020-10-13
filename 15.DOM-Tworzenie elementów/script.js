const rootElement = document.querySelector('#root');
rootElement.style.backgroundColor = 'gray';

// Zadanie 1
const el = document.createElement('div');
el.textContent = 'To jest nowy element';
rootElement.append(el);

// Zadanie 2
const el1 = document.createElement('ul');
el1.id = 'zad2-list';
const arr1 = ['jabłko', 'banan', 'śliwka', 'gruszka', 'winogrono', 'ananas'];

arr1.forEach((item) => {
  const li = document.createElement('li');
  li.innerHTML = item;
  el1.append(li);
});

rootElement.append(el1);

// Zadanie 3

const el1List = document.querySelector('#zad2-list');
const filteredList = [...el1List.children].filter((_, key) => key % 2);
el1List.innerHTML = '';
filteredList.forEach((item) => el1List.appendChild(item));

// Zadanie 4

const button = document.createElement('button');
button.id = "zad4-button";
button.textContent = 'Click me';
rootElement.append(button);

document.querySelector('#zad4-button').addEventListener('click', (e) => {
  e.target.remove();
});

// Zadanie 5

const createDiv = (number) => {
  for (let i = 0; i < number; i++) {
    const div = document.createElement('div');
    div.textContent = `to jest div numer ${i + 1}`;
    rootElement.append(div);
  }
}

createDiv(Math.floor(Math.random() * 10));

// Zadanie 6

const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
const span1 = document.createElement('span');
const span2 = document.createElement('span');

const spanText = 'to jest span';
const divText = 'to jest div';

div1.textContent = divText;
span1.textContent = spanText;
div3.textContent = divText;
div2.append(div3);
span2.textContent = spanText;

rootElement.append(div1);
rootElement.append(span1);
rootElement.append(div2);
rootElement.append(span2);

// Zadanie 7
const sampleList = document.createElement('ul');
const sampleList2 = document.createElement('ul');
const sampleButton = document.createElement('button');
const sampleButton2 = document.createElement('button');
const sampleArray = ['jabłko', 'banan', 'śliwka', 'gruszka', 'winogrono', 'ananas'];
const buttonText = 'Move element';

sampleArray.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = item;
  sampleList.append(li);
});

sampleList.className = 'sampleList';
sampleList2.className = 'sampleList';

sampleButton.textContent = buttonText;
sampleButton.className = 'sampleButton';
sampleButton2.textContent = buttonText;
sampleButton2.className = 'sampleButton';

rootElement.append(sampleList);
rootElement.append(sampleButton);
rootElement.append(sampleList2);
rootElement.append(sampleButton2);

const buttons = document.querySelectorAll('.sampleButton');
const lists = document.querySelectorAll('.sampleList');

[...buttons].forEach((item, key) => {
  item.addEventListener('click', () => {
    const [first, second] = lists;
    const lastElementSecondList = second.lastElementChild;
    const lastElementFirstList = first.lastElementChild;

    if (key === 1 && lastElementSecondList) {
      first.appendChild(lastElementSecondList);
    } else if (lastElementFirstList) {
      second.appendChild(lastElementFirstList);
    }
  })
})

// Zadanie 8

const form8 = document.createElement('form');
const input8 = document.createElement('input');
const button8 = document.createElement('button');

form8.textContent = 'element, tekst, kolor i liczbę powtórzeń';
button8.textContent = 'Dodaj';

form8.append(input8);
form8.append(button8);
rootElement.append(form8);

button8.addEventListener('click', (e) => {
  e.preventDefault();
  const [element, text, color, count] = input8.value.split(' ');

  for (i = 0; i < count; i++) {
    const el = document.createElement(element);
    el.textContent = text;
    el.style.color = color;
    rootElement.append(el);
  }

  input8.value = '';
});

// Zadanie 9

const createDeleteButton = () => {
  const button = document.createElement('button');
  button.textContent = 'Delete';
  button.className = 'delBtn';

  return button;
}

const deleteButtons = document.querySelectorAll('.delBtn');

[...deleteButtons].forEach((item) => {
  item.addEventListener('click', (e) => {
    console.log('e', e);
    e.target.previousElementSibling.remove();
    e.target.remove();
  })
});

const form = document.createElement('form');
form.id = "mainForm";

const appendFormField = (value) => {
  const wrapper = document.createElement('div');
  const input = document.createElement('input');
  const deleteBtn = createDeleteButton();

  input.placeholder = value;
  input.name = value;
  wrapper.style.padding = '8px 0';

  wrapper.appendChild(input);
  wrapper.appendChild(deleteBtn);
  form.append(wrapper);
};

const generateSampleFields = () => {
  const sampleFields = ['name', 'surname', 'age', 'children'];
  sampleFields.forEach((item) => {
    appendFormField(item);
  });

  const submitButton = document.createElement('button');
  const newInput = document.createElement('button');
  const buttonWrapper = document.createElement('div');

  newInput.id = 'addNew';
  newInput.textContent = 'Add new';
  submitButton.textContent = 'Create';

  submitButton.type = 'submit';
  form.style.padding = '24px 0';

  buttonWrapper.append(newInput);
  buttonWrapper.append(submitButton);
  form.prepend(buttonWrapper);
  rootElement.append(form);
};

generateSampleFields();

document.querySelector('#addNew').addEventListener('click', (e) => {
  e.preventDefault();
  const value = prompt('name');
  appendFormField(value);
});

const mainForm = document.querySelector('#mainForm');

mainForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const dataObj = Object.fromEntries(formData.entries());

  const table = document.createElement('table');
  const row1 = document.createElement('tr');
  const row2 = document.createElement('tr');

  Object.keys(dataObj).forEach((item) => {
    const keyName = document.createElement('th');
    const keyValue = document.createElement('th');

    keyName.textContent = item;
    keyValue.textContent = dataObj[item];
    keyValue.className = 'tableValue';
    row1.append(keyName);
    row2.append(keyValue);
  })

  table.append(row1);
  table.append(row2);
  rootElement.append(table);

  mainForm.reset();
});

// Zadanie 10

const capitalizeFirstLetter = (value) => value.charAt(0).toUpperCase() + value.slice(1);
const capitalizeButton = document.createElement('button');
capitalizeButton.textContent = 'capitalize all table values';

rootElement.append(capitalizeButton);

capitalizeButton.addEventListener('click', () => {
  const tableValues = document.querySelectorAll('.tableValue');

  [...tableValues].forEach((item) => {
    item.innerHTML = capitalizeFirstLetter(item.innerHTML);
  });
})

// Zadanie 11

const getNumberSumFromString = (word) => {
  const numbers = Array.from(word.replace(/[^0-9]/g, ''));
  const sum = numbers.reduce((acc, item) => acc + Number(item), 0);
  const multiply = numbers.reduce((acc, item) => acc * Number(item), 1);

  for (let i = 0; i < sum; i++) {
    const div = document.createElement('div');
    div.textContent = multiply;
    rootElement.append(div);
  }
}

getNumberSumFromString('soifjes34 fefs 234 grg 4dfsefj9 32');

// Zadanie 12

function checkStringWords(sampleString) {
  const main = {
    sampleString,
    checkString() {
      if (this.sampleString.includes('Ala')) {
        this.sampleString = sampleString.replace('Ala', 'Ola');
      } else {
        const block = document.createElement('div');
        block.textContent = 'Słowo Ala nie występuje w tekście';
        rootElement.append(block);
      }
    }
  }

  main.checkString();
}

checkStringWords('Ala testowa osoba');

// Zadanie 13

const changeToLength = (arr) => arr.map((item) => item.length);
const sumOfAllValues = (arr) => arr.reduce((acc, item) => acc + item, 0);
const averageOfNumbers = (sum, length) => (sum / length).toFixed(1);

const sampleArray3 = ['awdaw', 'dwadwad', 'awdwdfdsfesf', 'fesfvfdgrd', 'esf'];
const length = changeToLength(sampleArray3);
const sum = sumOfAllValues(length);
const average = averageOfNumbers(sum, sampleArray.length);

// Zadanie 14

const user = {
  name: '',
  surname: '',
  age: ''
}

const setNewValuesToUser = (name, surname, age) => {
  user.name = name;
  user.nameLength = name.length;
  user.surname = surname;
  user.surnameLength = surname.length;
  user.age = age;
  user.ageLength = age.length;

  if (name.length > 5 || surname.length > 5 || age.length > 5) {
    const button = document.createElement('button');
    button.innerText = 'reset user object';
    rootElement.append(button);

    button.addEventListener('click', () => {
      user.name = '';
      user.nameLength = 0;
      user.surname = '';
      user.surnameLength = 0;
      user.age = '';
      user.ageLength = 0;
    });
  }
}

setNewValuesToUser('Tom', 'Hanksawdwd', '43');
