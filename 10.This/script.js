// Zadanie 1
class Person {
  constructor(name, surname, age, country, city, meal = []) {
    this.name = name,
    this.surname = surname,
    this.age = age,
    this.country = country,
    this.city = city,
    this.meal = meal;
  }

  personInfo() {
    console.log(this.name, this.surname, this.age.this.country, city, this.city);
  }

  addAge() {
    this.age++;
  }
}

const firstPerson = new Person('Tom', 'Hanks', 99, 'Poland', 'Kraków', ['frytki']);
const secondPerson = new Person('Jacek', 'Żakowski', 54, 'Poland', 'Warszawa', ['Burger', 'Cola', 'Chipsy']);

console.log('firstPerson', firstPerson.age);
console.log('secondPerson', secondPerson.age);

firstPerson.addAge();
secondPerson.addAge();

console.log('firstPerson', firstPerson.age);
console.log('secondPerson', secondPerson.age);

// Zadanie 2
Person.prototype.addMeal = function (meal) {
  this.meal.push(meal);
};
Person.prototype.logMeals = function () {
  console.log('Person.prototype.logMeals -> this.meal', this.meal);
};

secondPerson.logMeals();
secondPerson.addMeal('Pizza');
secondPerson.logMeals();

// Zadanie 3
const calc = {
  input(a, b) {
    this.a = a;
    this.b = b;
  },
  sum() {
    console.log(this.a + this.b);
  },
  subtract() {
    console.log(this.a - this.b);
  },
  multiply() {
    console.log(this.a * this.b);
  },
  divide() {
    const result = this.b === 0 ? 'do not divide by 0' : this.a / this.b;

    console.log(result);
  }
};

calc.input(20, 10);
calc.sum();
calc.subtract();
calc.multiply();
calc.divide();

// Zadanie 4

class Ladder {
  constructor(height) {
    this.height = height;
    this.currentPosition = 0;
  }

  goUp(steps) {
    for (let i = 0; i < steps; i++) {
      if (this.currentPosition === this.height) {
        console.log('You are on top')

        return;
      }

      this.currentPosition++;
      console.log('Ladder -> goUp -> this.currentPosition', this.currentPosition);
    }
  }

  goDown(steps) {
    for (let i = 0; i < steps; i++) {
      if (this.currentPosition === 0) {
        console.log('You are on floor');

        return;
      }

      this.currentPosition--;

      console.log('Ladder -> goDown -> this.currentPosition', this.currentPosition);
    }
  }

  showPosition() {
    console.log('Ladder -> showPosition -> this.currentPosition', this.currentPosition);
  }
}

const ladder1 = new Ladder(33);
ladder1.goUp(10);
ladder1.goDown(3);
ladder1.goUp(44);
ladder1.showPosition();
