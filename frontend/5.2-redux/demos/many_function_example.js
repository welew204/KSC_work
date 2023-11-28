// Functions and the many ways to write them
let res;

// Named function
function exampleFunc (a, b) {
  let sum = a + b;
  return sum / 100;
}
res = exampleFunc(10, 30);
console.log('1', res);

// Named function in variable
let varName = function exampleFunc (a, b) {
  let sum = a + b;
  return sum / 100;
}
res = varName(10, 30);
console.log('2', res);

// Anonymous function in variable
let exampleF = function (a, b) {
  let sum = a + b;
  return sum / 100;
}
res = exampleF(10, 30);
console.log('3', res);


// Anonymous arrow function in variable
let eF4 = (a, b) => {
  let sum = a + b;
  return sum / 100;
}
res = eF4(10, 30);
console.log('4', res);


// Anonymous arrow function in a variable,
// with implicit return
let eF5 = (a, b) => (a + b) / 100;
res = eF5(10, 30);
console.log('5', res);


// Anonymous single parameter with implicit
// return (we can omit parenthesis)
let eF6 = a => (a + a) / 100;
res = eF6(10);
console.log('5', res);

