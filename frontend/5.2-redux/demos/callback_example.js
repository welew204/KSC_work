/* Using "return" */
function doStuffReturn(a, b) {
  // Just a silly example of
  // adding and multiplying,
  // but it could be anything.
  let sum = a + b;
  let product = a * b;
  return product - sum;
}

let val = doStuffReturn(10, 5);
console.log('The val:', val);




/* Using "callback" */
function doStuffCB(a, b, cb) {
  let sum = a + b;
  let product = a * b;
  cb(product - sum);
}


// Functions are "first class
// citizens", so we can put
// them into variables
let myCallback = function (res) {
  console.log('The results:', res);
};

doStuffCB(10, 5, myCallback);

// (or... Using newer "arrow" syntax)
let myCallback2 = (res) => {
  console.log('The results:', res);
};

// OR... Just defining the
// function exactly where
// it is used, instead of
// using a variable
doStuffCB(10, 5, (res) => {
  console.log('The results:', res);
});







/* Using a "Promise-style callback" */
function doStuffPromise(a, b) {
  return {
    then: (hollaback) => {
      let sum = a + b;
      let product = a * b;
      hollaback(product - sum);
    },
  };
}

doStuffPromise(10, 5)
  .then((res) => {
    console.log('Results:', res);
  });


