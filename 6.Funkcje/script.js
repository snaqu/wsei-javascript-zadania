// Zadanie 1

function works() {
  console.log('Udało się');
}

works();

// Zadanie 2

function showParam(param) {
  console.log(param);
}

showParam('działa');

// Zadanie 3

function returnTable(table) {
  return table;
}

returnTable([]);

// Zadanie 4

function logString(value) {
  let counter = 0;

  let interval = setInterval(() => {
    console.log(value);

    counter++;

    if (counter === 5) {
      clearInterval(interval);
      return console.log('Koniec');
    }
  }, 3000);
}

logString('sampleString');
