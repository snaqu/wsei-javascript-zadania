// Zadanie 1

const car = {};

car.name = 'Lambo';
car.engine = 4.4;
car.wheels = 18;

console.log('car', car);

// Zadanie 2

car.changeName = (name) => {
  car.name = name;
};

car.changeName('ferrari');

console.log('car', car);

// Zadanie 3

const obj3 = {
  sum: 0,
  sumNumbers: function (numbers) {
    this.sum = numbers.reduce((acc, item) => acc + item, 0);
  },
};

obj3.sumNumbers([1, 2, 3]);

console.log('obj3.sum', obj3.sum);

// Zadanie 4

const car2 = {
  name: 'BMW',
  age: 12,
  engine: '4.4',
  color: 'blue',
  isNew: true,
};

Object.keys(car2).forEach((item) => {
  console.log(`${item}: ${car2[item]}`);
})

// Zadanie 5

car2.wheels = {
  small: 11,
  medium: 14,
  big: 17,
};

Object.keys(car2.wheels).forEach((item) => {
  console.log('item', item);
})

// Zadanie 6

car2.brand = 'VW';
car2.hello = () => console.log('hello');

car2.hello();
