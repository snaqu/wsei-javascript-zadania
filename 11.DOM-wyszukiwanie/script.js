// Zadanie 1

const allListElements = document.querySelectorAll('.list');
console.log('allListElements', allListElements);

// Zadanie 2

const getElementByTagName = (tagName) => {
  return document.getElementsByTagName(tagName);
}

const allListItems = getElementByTagName('li');
console.log('allListItems', allListItems);

// Zadanie 3

const list = document.querySelector('#list');
console.log('list', list);

// Zadanie 4

const logElementsInConsole = (elements) => {
  console.log(elements);
};

const allUlItems = document.getElementsByTagName('ul');
const allSpans = document.getElementsByTagName('span');
const allSpansInDiv = document.querySelectorAll('div.list span');
const allSpansInDivWithId = document.querySelectorAll('div#spans span')

const computedElements = [...allListItems, ...allUlItems, ...allSpans, ...allSpansInDiv, ...allSpansInDivWithId];

logElementsInConsole(computedElements);
