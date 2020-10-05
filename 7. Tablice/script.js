// Zadanie 1

const sampleArray1 = ['1', 23, 'desf'];
console.log('sampleArray1', sampleArray1);

// Zadanie 2

const sampleArray2 = [1, 342, 5345, 253, 123, 'test', false, {}, [], 'lorem'];

// 1. Pierszy i drugi element

console.log('sampleArray2[0]', sampleArray2[0]);
console.log('sampleArray2[1]', sampleArray2[1]);

// 2. Ostatni element
console.log('sampleArray2[sampleArray2.length - 1]', sampleArray2[sampleArray2.length - 1]);

// 3. Wszystkie elementy
sampleArray2.forEach((item) => console.log('item', item));

// 4. Co drugi element

sampleArray2.forEach((item, index) => {
  if (index % 2 !== 0) {
    console.log('item', item);
  }
});

// 5. Wszystkie stringi
console.log(sampleArray2.filter((item) => typeof item === 'string'));

// 6. Wszystkie numbery

console.log(sampleArray2.filter(Number.isFinite));

// Zadanie 3

const arrayWithNumbers = [...Array(50)].map(() => Math.floor(Math.random() * 100));
console.log('arrayWithNumbers', arrayWithNumbers);

// 1. sumę wszystkich elementów

const sum = arrayWithNumbers.reduce((acc, item) => acc + item, 0);
console.log('sum', sum);

// 2. różnicę wszystkich elementów

const difference = arrayWithNumbers.reduce((acc, item) => acc - item, 0);
console.log('difference', difference);

// 3. średnią wszystkich elementów

const avg = arrayWithNumbers.reduce((acc, item) => acc + item, 0) / arrayWithNumbers.length;
console.log('avg', avg);

// 4. elementy parzyste

const evenNumbers = arrayWithNumbers.filter((item) => item % 2 === 0);
console.log('evenNumbers', evenNumbers);

// 5. elementy nieparzyste

const oddNumbers = arrayWithNumbers.filter((item) => item % 2 !== 0);
console.log('oddNumbers', oddNumbers);

// 6. największą liczbę

const maxNumber = Math.max(...arrayWithNumbers);
console.log('maxNumber', maxNumber);

// 7. najmniejszą liczbę

const minNumber = Math.min(...arrayWithNumbers);
console.log('minNumber', minNumber);

// 8. wypisz tablicę od tyłu

const reverseArray = arrayWithNumbers.reverse();
console.log('reverseArray', reverseArray);

// Zadanie 4

const getSumOfNumbers = (arr) => {
  const sum = arr.reduce((acc, item) => acc + item, 0);

  console.log(sum);
};

getSumOfNumbers([1, 2, 3]);

// Zadanie 5

const numberMultipliedByAvg = (arr) => {
  const avg1 = arr.reduce((acc, item) => acc + item, 0) / arr.length;
  const multipliedNumbers = arr.map((item) => item * avg1)

  console.log('numberMultipliedByAvg -> multipliedNumbers', multipliedNumbers);
};

numberMultipliedByAvg([1, 2, 3]);

// Zadanie 6

const avgOfOddNumbers = (arr) => {
  const oddNumbers = arr.filter((item) => item % 2 === 0);
  const avg = oddNumbers.reduce((acc, item) => acc + item, 0) / oddNumbers.length;

  return avg;
};

avgOfOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Zadanie 7

const sortArray = (arr) => arr.sort((a, b) => a - b);

console.log('sortArray([1, 2, 12, 21, 11, 4, 5, 6, 22])', sortArray([1, 2, 12, 21, 11, 4, 5, 6, 22]));

// Zadanie 8

const sumOfIndex = (arr1, arr2) => {
  const sumArr1 = arr1.reduce((acc, _, index) => acc + index, 0);
  const sumArr2 = arr2.reduce((acc, _, index) => acc + index, 0);

  return sumArr1 + sumArr2;
};

console.log('sumOfIndex -> sumOfIndex', sumOfIndex([1, 2, 3], [4, 5, 6, 7]));

// Zadanie 9

const omitArrayByValue = (arr, omit) => arr.filter((item) => item !== omit);

console.log('omitArrayByValue', omitArrayByValue(['lol', 'lorem', 'pig'], 'pig'));

// Zadanie 10

const reverseNumber = (numbers) => numbers.map((item) => -item);

console.log('reverseNumber()', reverseNumber([1, 43, -234, 34, -1, 0, -0, -432]));
