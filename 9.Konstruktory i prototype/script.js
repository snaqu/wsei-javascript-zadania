// Zadanie 1

function Person(name, surname, age, country, city, language) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.country = country;
  this.city = city;
  this.language = language;

}

Person.prototype.changeAge = function (newAge) {
  this.age = newAge;
}

Person.prototype.changeCity = function (newCity) {
  this.city = newCity;
}

const tom = new Person('Tom', 'Hanks', 43, 'UK', 'Liverpool', 'English');
const angie = new Person('angie', 'schwarz', 43, 'CZE', 'Praga', 'Czeski');
const jan = new Person('jan', 'błachowicz', 30, 'PL', 'Kraków', 'Polski');
const kate = new Person('kate', 'lorem', 65, 'USA', 'Waszyngton', 'English');
const bruce = new Person('bruce', 'ipsum', 53, 'CHE', 'Liverpool', 'Szwajcarski');

jan.changeAge(34);

bruce.changeCity('Stafa')

// Zadanie 2

function Calculator() {
  this.result = null;
  this.history = [];
}

Calculator.prototype = {
  setResultAndHistory: function (result) {
    this.result = result;
    this.history.push(result);
  },
  add: function (a, b) {
    this.setResultAndHistory(a + b);
  },
  subtract: function (a, b) {
    this.setResultAndHistory(a - b);
  },
  divide: function (a, b) {
    this.setResultAndHistory(a / b);
  },
  multiply: function (a, b) {
    this.setResultAndHistory(a * b);
  },
  getHistory: function () {
    console.log(this.history);
  },
  clearHistory: function () {
    this.history = [];
  },
}

const calc1 = new Calculator();
const calc2 = new Calculator();

calc1.subtract(10, 5);
calc1.getHistory();
calc1.add(103, 345);
calc1.divide(100, 10);
calc1.multiply(50, 34);
calc1.getHistory();
calc1.clearHistory();
calc1.getHistory();

calc2.subtract(3410, 345);
calc2.getHistory();
calc2.add(10343, 34345);
calc2.divide(10230, 10);
calc2.multiply(51230, 3434);
calc2.getHistory();
calc2.clearHistory();
calc2.getHistory();

// Zadanie 3

class Game {
  randomNUmber() {
    Game.prototype.timer = setInterval(() => {
      Game.prototype.number = Math.round(Math.random() * 10);
    }, 1000);
  }

  checkNumber() {
    Game.prototype.timeCheck = setInterval(() => {
      if (Game.prototype.number > 5) {
        clearInterval(this.timer);
        clearInterval(this.timeCheck);
      }
    }, 1000);
  }
}

const firstGame = new Game;
const secondGame = new Game;
firstGame.randomNUmber();
secondGame.checkNumber();
