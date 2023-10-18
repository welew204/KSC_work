# React State Recipes

This "recipe" cheat sheet is to provide a long list of common operations that
you might want to do on more complicated data types such as Arrays or Objects.
These operations are more complicated to perform than you might think: React
forbids directly modifying them, instead we must use the setter function to
replace it with a brand new version that resembles the previous version, except
with the necessary changes made.

# Table of Contents

- Simple: Updating Numbers, Strings, Booleans, etc
- Arrays: Adding something to an array
- Arrays: Deleting from an array based on index
- Arrays: Deleting from an array based on filter condition
- Arrays: Moving from one array to another
- Objects: Adding a new property (key)
- Objects: Adding a property (key) based on a variable


Simple: Updating Numbers, Strings, Booleans, etc
------------------------------------------------------------

With simple types, you can set the state variable directly with the new value:

    const [age, setAge] = useState(0);
    const [name, setName] = useState('');
    const [ready, isReady] = useState(false);

    // Somewhere else...
    setAge(35);
    setName('Jane Q Hacker');
    setReady(true);



Arrays: Adding something to an array
------------------------------------------------------------

If you have an array as a state variable, and want to add something to it ---
"push" in JavaScript --- then use the spread syntax:


    const [arr, setArr] = useState(['a', 'b']);

    // Somewhere else....
    let item = 'c';
    setArr([         // update "arr" with this array:
      ...arr,        // - Include existing values of "arr"
      item,          // - And finally include the "item" value
    ]);



Arrays: Deleting from an array based on index
------------------------------------------------------------

If you have an array as a state variable, and want to remove an element based
on that element's index, then use the spread syntax combined with the slice
method:

    const [arr, setArr] = useState(['a', 'b']);

    // Somewhere else....
    let index = 1;             // We want to remove "b"
    setArr([                   // Update "arr" with this new array:
      ...arr.slice(0, index),  // - Include everying up until "b"
      ...arr.slice(index + 1), // - And everything after "b"
    ]);



Arrays: Deleting from an array based on condition
------------------------------------------------------------

Using filter, we can exclude from an array based on a condition.

    const [arr, setArr] = useState(['abc', 'b', 'd', 'efg']);

    // Somewhere else....
    setArr(arr.filter(          // Update "arr" with this new array:
      item => item.length === 1 // - Only include strings with length 1
    ));




Arrays: Moving from one array to another
------------------------------------------------------------

If you have two arrays, and want to remove an element from one, and then push
that element to another, you will need to combine the above two techniques:


    const [arrA, setArrA] = useState(['a', 'b']);
    const [arrB, setArrB] = useState(['c', 'd']);

    // Somewhere else....
    let index = 1;             // We want to remove "b" from arrA and move to arrB
    let item = arrA[index];    // Get the item we want to move

    setArrA([                  // Update "arrA" with this new array:
      ...arrA.slice(0, index), // - Include everying up to "b"
      ...arrA.slice(index + 1),// - And everything after "b"
    ]);

    setArrB([                  // Update "arrB" with this new array:
      ...arrB,                 // - Include existing values of "arrB"
      item,                    // - And finally include the "item" value
    ]);



Objects: Adding or modifying a property
------------------------------------------------------------

We can use "..." (spread) syntax to add a new property to an object, and/or
modify an existing one. Note: If you want to remove, consider using the same
recipe, except "null" as a placeholder instead of removing.


    const [obj, setObj] = useState({name: 'Kim', age: 40});

    // Somewhere else....
    let lang = 'JS'; // We want to update "skill" to be JS
    let newAge = 41; // We want to update "age" to be 41
    setObj({         // Update "obj" with this new object:
      ...obj,        // - Include existing values of "obj"
      age: newAge,   // - Modify age to be older
      skill: lang,   // - And finally include the new value
    });



Objects: Modifying a property based on a variable
------------------------------------------------------------

Like before, except the name of the property (e.g. the key) is also stored in a
variable, in addition to the value;


    const [obj, setObj] = useState({name: 'Kim', age: 40});

    // Somewhere else....
    let prop = 'age'; // The prop we want to update is 'age'
    let newVal = 41;  // The new value we want is 41
    setObj({          // Update "obj" with this new object:
      ...obj,         // - Include existing values of "obj"
      [prop]: newVal, // - Modify age to be older
    });



