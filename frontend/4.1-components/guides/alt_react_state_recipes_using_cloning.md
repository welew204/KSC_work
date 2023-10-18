Don't start here, instead look at `react_state_recipes`. This one is an older
one that's included just in case you want to see another way to do it.

- This "alt" guide shows another set of techniques that people use to modify
  React state. Instead of using "spread" (the ... technique), it uses .slice()
  to duplicate the array or object before modification.

- If you're curious, see discussion and MANY different solutions to one such
  problem (removing an element from an array within state) here:
  - <https://stackoverflow.com/questions/29527385/>

- Use these techniques to "copy" parts of the state, and modify those copies.

- There is no one right way to do it: Use whichever technique works and makes
  the most sense to you.


For these examples, consider the following state:

    const state, setState = useState({
      arrayA: [],
      arrayB: [],
      obj: {},
      name: "Jane Q Hacker",
      occupation: "coder",
    });


# Changing a simple, flat value in the state

```
// Most of the time, you can set the state directly
setState({
  name: 'Jane Q Hacker',
  occupation: null,
  age: 35,
});
```

# Adding something to an array

If you have an array, and want to add something to it -- "push" in
JavaScript -- then you need to copy that array ("slice" in JavaScript),
push to the copy, and then do a setState replacing the old array with
the new modified copy.

```
let data = 'test';      // as an example, adding a string
const arr = state.arr.slice();      // duplicating array
arr.push(data);
setState({
  arr: arr,
});
```


# Deleting from an array

If you have an array, and want to remove an element from it based on
index, you will need to copy the array ("slice" in JavaScript), remove
it -- "splice" in JavaScript --- and then do a setState replacing the
old array with the new modified copy.

```
let index = 5; // as an example, moving item in the 5th slot
const arr = state.arr.slice();       // duplicating array
arr.splice(index, 1); // removing the item from the "clone"
setState({
  arr: arr,
});
```



# Moving an item from one array to another


If you have two arrays, and want to remove an element from one, and then
push that element to another, you will need to copy both arrays, remove
it from one (slice) and then put it in the other (push), then setState
with both copies.

```
let index = 5; // as an example, moving item in the 5th slot
const arrayA = state.arrayA.slice(); // duplicating array
const arrayB = state.arrayB.slice(); // duplicating array

const item = arrayA[index];  // accessing the item from index 5
arrayA.splice(index, 1); // removing the item from 
arrayB.push(item);       // adding the item
setState({
  arrayA: arrayA,        // update arrayA & arrayB
  arrayB: arrayB,
});
```


# Modifying an object


If you have an object, and want to add, delete, or modify a key/value
within that object in any way, you will need to first duplicate the
array (can use Object.assign), modify the duplicate, then do a setState
to make the duplicate replace the original.

```
const obj = Object.assign({}, state.obj); // duplicating object
obj.exampleKey = 'new value';  // set key "exampleKey" to value "new value"
setState({
  obj: obj,
});
```

