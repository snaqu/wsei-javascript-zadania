// Zadanie 1

let counter = 0;

let interval = setInterval(() => {
  console.log(`Cześć po raz ${counter}`);
  counter++;

  if (counter === 15) {
    clearInterval(interval);
  }
}, 3000);

// Zadanie 2

const sampleArray = Array(5).fill(Math.floor(Math.random() * 100));

setTimeout(() => {
  console.log(sampleArray);
  let counter = 0;

  let sampleInterval = setInterval(() => {
    console.log(sampleArray[counter]);
    counter++;

    if (counter === sampleArray.length) {
      clearInterval(sampleInterval);
    }
  }, 1000);
}, 2000);

