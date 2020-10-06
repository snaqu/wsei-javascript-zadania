// Zadanie 1

const buz = document.querySelector('#buz');
const baz = document.querySelector('#baz');
const foo = document.querySelector('#foo');

console.log(buz.parentElement);
console.log(baz.previousElementSibling);
console.log(foo.children);
console.log(foo.parentNode);
console.log(foo.firstChild);
console.log(foo.children[Math.floor(foo.children.length / 2)]);

// Zadanie 2

const logTextFromSquare = (element) => {
  element.addEventListener('click', () => {
    const text = element.querySelector('div div div div div:nth-child(2) div div');

    console.log('logTextFromSquare -> text.innerHTML', text.innerHTML);
  });
};

logTextFromSquare(document.querySelector('#ex2'));

// Zadanie 3

const buttons = document.querySelectorAll('#ex3 div button');

buttons.forEach((item) => {
  item.addEventListener('click', () => {
    const span = item.nextElementSibling;

    span.style = span.offsetLeft === 0 ? "display: block;" : "display: none;";
  });
})

// Zadanie 4

buttons.forEach((item) => {
  item.addEventListener('click', () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const parent = item.parentElement;

    parent.style = `background-color: ${randomColor};`;
  });
})

// Zadanie 5

const coloredBlocks = document.querySelectorAll('#ex5 div');
const listItems = document.querySelectorAll('#ex5 li');

// 1
// coloredBlocks.forEach((item) => {
//   item.addEventListener('mouseover', () => {
//     const parentBackground = item.style.backgroundColor;

//     listItems[0].style = `background-color: ${parentBackground};`
//   });
// })

// 2
// coloredBlocks.forEach((item) => {
//   item.addEventListener('mouseover', () => {
//     const parentBackground = item.style.backgroundColor;

//     listItems[listItems.length - 1].style = `background-color: ${parentBackground};`
//   });
// })

// 3
// coloredBlocks.forEach((item) => {
//   item.addEventListener('mouseover', () => {
//     const parentBackground = item.style.backgroundColor;

//     listItems.forEach((_, key) => {
//       if (key % 2 !== 0) {
//         listItems[key].style = `background-color: ${parentBackground};`
//       }
//     })

//   });
// })

// 4
// coloredBlocks.forEach((item) => {
//   item.addEventListener('mouseover', () => {
//     const parentBackground = item.style.backgroundColor;

//     listItems.forEach((_, key) => {
//       if (key % 2 === 0) {
//         listItems[key].style = `background-color: ${parentBackground};`
//       }
//     })

//   });
// })

// 5
coloredBlocks.forEach((item) => {
  item.addEventListener('mouseover', () => {
    const parentBackground = item.style.backgroundColor;
    item.parentElement.style = `background-color: ${parentBackground};`
  });
})

// Zadanie 6

const wrapper = document.getElementById('ex6');
console.log('wrapper', wrapper);

// 1
const one = wrapper.firstElementChild.firstElementChild.firstElementChild;

// 2
const two = wrapper.firstElementChild.parentElement.firstElementChild.firstElementChild.nextSibling.parentElement;

// 3
const three = wrapper.parentElement.firstElementChild.parentElement.children.item(1).firstElementChild.firstElementChild.firstElementChild;
