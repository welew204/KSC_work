// More info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

let exampleString = 'test';

// By default, "this" is the "global" variable
// (in the browser, the global variable is instead the "window" variable)
function example() {
  if (this === global) {
    console.log('this:    equal to "global" variable');
  } else {
    console.log('this:   ', this);
  }
}

console.log('\n1 -------- Default');
example();


// BUT... we can also "bind" this to any other value
console.log('\n2 -------- .bind()');
let boundExample = example.bind(exampleString);
boundExample();

// OR we can get a similar effect by putting it in an object
console.log('\n3 -------- method call');
let person = {
  name: 'Jane',
  age: 37,
  myMethod: example,
};
person.myMethod();


// HOWEVER, very strangely, if we assign that to a variable, then try calling
// it, it becomes unbound again
console.log('\n4 -------- unbound');
let funcVar = person.myMethod;
funcVar()


// Only by "binding" it can we assign it to a variable and it will still be bound
console.log('\n5 -------- bound method');
person.myMethod = person.myMethod.bind(person);
let funcVar2 = person.myMethod;
funcVar2()



// Finally, let's see the difference between old functions and arrow syntax:
// Old functions "reset" this context.
console.log('\n6 -------- function this context');
let person2 = {
  name: 'Alice',
  profession: 'Engineer',
  myFunc: function () {
    if (this === global) {
      console.log('OUTER FUNC: this:    equal to "global" variable');
    } else {
      console.log('OUTER FUNC: this:   ', this);
    }

    let innerFunc = function () {
      if (this === global) {
        console.log('INNER FUNC: this:    equal to "global" variable');
      } else {
        console.log('INNER FUNC: this:   ', this);
      }
    }
    innerFunc();
  },
};
person2.myFunc();



// Arrow functions "fix" this: The word "this" does not get reassigned in inner
// arrow functions
console.log('\n7 -------- arrow function this context');
let person3 = {
  name: 'Bob',
  profession: 'Sales',
  myFunc: function () {
    if (this === global) {
      console.log('OUTER FUNC 2: this:    equal to "global" variable');
    } else {
      console.log('OUTER FUNC 2: this:   ', this);
    }

    let innerFunc = () => {
      if (this === global) {
        console.log('INNER FUNC 2: this:    equal to "global" variable');
      } else {
        console.log('INNER FUNC 2: this:   ', this);
      }
    }
    innerFunc();
  },
};
person3.myFunc();

