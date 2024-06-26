'use strict';

// const a = 'jonas';
// first();
//
// function first() {
//   const b = 'Hello';
//   console.log(a);
//   second();
//
//   function second() {
//     const c = 'hi';
//     console.log(b);
//     var d = 'I am var';
//   }
//   return;
// }

// // scopes only have access to variables inside it's scope, not outer scope!
// console.log('executing functions');
// console.log(addNum(1, 2));
// // addFunc(2, 2);
//
// function addNum(a, b) {
//   return a + b;
// }
//
// const addFunc = function (a, b) {
//   return a + b;
// };
//
// var addVar = () => {
//   console.log('delete all');
// };
//
// // this keyword
// console.log(this);
//
// // simple functions get their own this keyword. so it'll log undefinded to the console
// const calcAge = function (birthYear) {
//   console.log(2024 - birthYear);
//   console.log(this);
// };
//
// // arrow keyword doesn't get its own this. so it will log the window to console
// const calcAgeArrow = birthYear => {
//   console.log(2024 - birthYear);
//   console.log(this);
// };
//
// calcAge(1998); // logs age and undefined
// calcAgeArrow(1998); // logs age and window
//
// const baxti = {
//   name: 'Baxtiyor',
//   year: 1998,
//   calcAge: function () {
//     console.log('this:', this);
//     console.log(2024 - this.year);
//   },
// };
// baxti.calcAge(); // logs the baxti object
//
// const maftuna = {
//   year: 1999,
// };
//
// maftuna.calcAge = baxti.calcAge; // this is called method borrowing
// maftuna.calcAge();
//
// const f = baxti.calcAge;
// f(); // undefined. because there is not owner of this function anymore, It's just a reugalar function call


'use strict';
// const jonas = {
//     firstName: 'Jonas',
//     year: 1998,
//     calcAge: function () {
//         console.log(2024 - this.year)
//     },
//
//     greet: () => console.log(`hey ${this.firstName}`)
// }
//
//
// jonas.calcAge() // 26'use strict';
// // const jonas = {
// //     firstName: 'Jonas',
// //     year: 1998,
// //     calcAge: function () {
// //         console.log(2024 - this.year)
// //     },
// //
// //     greet: () => console.log(`hey ${this.firstName}`)
// // }
// //
// //
// // jonas.calcAge() // 26
// // jonas.greet() // undefined
//
// // arguments keyword
// // const addExpr = function (a, b) {
// //     console.log( arguments);
// //     return a + b;
// // };
// // addExpr(2, 5);
// // addExpr(2, 5, 8, 12);
//
// var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
// };
// addArrow(2, 5, 8);
//
//
// // Objects VS Primitives
// jonas.greet() // undefined

// arguments keyword
// const addExpr = function (a, b) {
//     console.log( arguments);
//     return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);


// Objects VS Primitives
// Primitive types
let lastName = 'Akhatov'
let oldLastName = lastName
lastName = 'Knonimkulov'

console.log(lastName, oldLastName) // Khonimkulov, Akhatov // because the two
// variables are stored as 2 elements in the memory

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2) // copies jessica2 object and
// assigns a new object from it and merges them
jessicaCopy.lastName = 'Davis'

jessicaCopy.family.push('Leo')
jessicaCopy.family.push('Alex')

console.log('Before marriage Jessica:', jessica2)
console.log('After marriage Jessica:', jessicaCopy) // both objects would
// have the same items in family array because
// the shallow copy (Object.assign()) works only in the first level