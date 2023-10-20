
Challenge #2: Fix book display
----------------------


- Hint #1: One of the missing props is "release". Consider "hardcoding"
  release={1999} just to make sure you are adding it in the right place (which
  should be before the  "/>"). Once you get the hardcoded version working,
  think about replacing the 1999 with something else.

- Hint #2: The other missing prop is called "cover".

- Hint #3: The data you need to supply to the BookInfo will come from the
  "info" object. Examine it using Dev Tools to figure out the name of the
  properties you need to access.





Challenge #3: Fix BoxSelector usage
----------------------

- Hint #1: The changes are the same as if you are implementing an "input" in
  React: You need to "hook up" a state variable to this component.

- Hint #2: Change the selectedValue prop on BoxSelector, and the
  changeBookSelection function to correctly select the different books

- Hint #3: This will require creating a new state variable, and updating the
  changeBookSelection function to modify that state variable.

- Hint #4: Here's a code hint for the new state variable:

        const [selectedBook, setSelectedBook] = useState('Frankenstein');



Challenge #4: hint
----------------------

- We need to only show the book where the name of the book matches the
  selectedBook state variable. This is tricky! There are a few ways to do this.

- One way might be to add a ? : style "if statement" to the loop that shows the
  books, to only show the book that has the name that is currently selected.

- Another might be with filter, which lets us limit or "filter" what items in
  an array get shown. Here's a clue to get going with this:

        Object.entries(bookData)
            .filter(([name, info]) => /* some  */)
            .map(([name, info]) => /* etc rest of code ... */

- The word CONDITION should be replaced with a condition using "name" and
  "selectedBook"

- Explanation of the map/filter syntax:

        const obj = {a: 3, b:5}; // define an object (since bookData is an object)
        const objAsArray = Object.entries(obj); // converts to array
        console.log(objAsArray); // [ ['a', 3], ['b', 5] ]
        // Then, we combine this fact with a shortcut function syntax for map /
        // filter which can "explode" each small inner array into separate
        // variables.  ([name, info]) => extracts the left and the right values
        // of each inner array







Bonus Challenge #2: BookCarousel component
-----------------------------------

As a hint, here is a code snippet that could be incorporated into the
BookCarousel component's function:

    const name = props.value;
    const info = props.data[name];
    if (!info) {
      // If nothing is selected, show a "..." for loading
      return (
        <p>Loading...</p>
      );
    }

