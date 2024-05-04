'use strict';

const a = 'jonas';
first();

function first() {
  const b = 'Hello';
  console.log(a);
  second();

  function second() {
    const c = 'hi';
    console.log(b);
    var d = 'I am var';
  }
  return;
}

// scopes only have access to variables inside it's scope, not outer scope!
console.log('executing functions');
console.log(addNum(1, 2));
// addFunc(2, 2);

function addNum(a, b) {
  return a + b;
}

const addFunc = function (a, b) {
  return a + b;
};

var addVar = () => {
  console.log('delete all');
};

// this keyword
console.log(this);

// simple functions get their own this keyword. so it'll log undefinded to the console
const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};

// arrow keyword doesn't get its own this. so it will log the window to console
const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  console.log(this);
};

calcAge(1998); // logs age and undefined
calcAgeArrow(1998); // logs age and window

const baxti = {
  name: 'Baxtiyor',
  year: 1998,
  calcAge: function () {
    console.log('this:', this);
    console.log(2024 - this.year);
  },
};
baxti.calcAge(); // logs the baxti object

const maftuna = {
  year: 1999,
};

maftuna.calcAge = baxti.calcAge; // this is called method borrowing
maftuna.calcAge();

const f = baxti.calcAge;
f(); // undefined. because there is not owner of this function anymore, It's just a reugalar function call
