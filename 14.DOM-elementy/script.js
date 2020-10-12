// Zadanie 1
const list = document.querySelectorAll('.more-divs');
const result = (list) => [...list].map(({ tagName }) => tagName);
console.log(result(list));

// Zadanie 2
const logElement = ({ innerHTML, outerHTML, className, classList, dataset }) => {
  console.log('innerHTML', innerHTML);
  console.log('outerHTML', outerHTML);
  console.log('className', className);
  console.log('classList', classList);
  console.log('dataset', dataset);
}

const el = document.querySelector('.short-list');
logElement(el);

// Zadanie 3
const getNumbersResult = () => {
  const el = document.querySelector('#datasetCheck');
  const one = Number(el.getAttribute('data-numberone'));
  const two = Number(el.getAttribute('data-numbertwo'));
  const three = Number(el.getAttribute('data-number-three'));

  console.log('sum', one + two + three);
  console.log('difference', one - two - three);
}

getNumbersResult();

// Zadani 4
document.querySelector('#spanText').textContent = 'test';

// Zadanie 5
document.querySelector('#spanText').className = 'test';

// Zadanie 6

const modifyElement = (list) => {
  list.forEach((item) => { console.log('classLoger -> item', item) });
  console.log([...list].join(' + '));

  list.className = '';
  console.log('Usunięto wszystkie klasy');
}

const classesList = document.getElementById('classes').classList;

modifyElement(classesList);

// Zadanie 7
const listItem = document.querySelectorAll('#longList > li');

const assignAttribute = (list) => {
  list.forEach((item) => {
    if (!item.getAttribute('data-test')) {
      item.dataset.text = 'text';
    }
  });
};

assignAttribute(listItem);

// Zadanie 8
const createObject = (string) => {
  return { newClass: string };
}

const newObject = createObject('string_z_parametru');

const assignClassName = ({ newClass }) => {
  const classValue = newClass;
  document.querySelector('#myDiv').className = classValue;
};

assignClassName(newObject);

// Zadanie 9
const assignClass = (number) => {
  const el = document.getElementById('numbers');
  const className = number % 2 === 0 ? 'even' : 'odd';

  el.classList = '';
  el.classList.add(className);
}

assignClass(Math.floor(Math.random() * 10));

// Zadanie 10
const getListChildren = (list) => [...list.children].map((item) => item.innerHTML);

const longList = document.querySelector('#longList');

console.log('getListChildren(longList)', getListChildren(longList));

// Zadanie 11
const changeDataSetValues = (list) => {
  list.forEach((item) => {
    item.dataset.oldValue = item.innerHTML;
    item.innerHTML = Math.floor(Math.random() * 10);
  });
}

const longListItems = document.querySelectorAll('#longList li');

changeDataSetValues(longListItems);
