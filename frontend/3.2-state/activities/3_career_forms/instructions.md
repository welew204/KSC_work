# Career Assignment Office

Getting started (same as before):

- Open up this directory in your Terminal.  Note while using React, your
  terminal must be in the same directory as the `package.json` (e.g., if you do
  `ls`, you will see `package.json`, `src`, etc).

- Install React + dependencies to create the `node_modules`:

    npm install

- If this takes way too long, then instead consider copying the `node_modules`
  directory from the previous activity. You can do this from your file browser,
  or by using a shell command in the format of:
    `cp -r ../PREV_DIR_NAME/node_modules .`

- Then get started by running:

    npm run start

- Edit src/App.js to continue the activity



Challenge #1: console.log & React Dev Tools
-------------------------------------------------------------

- Adding console.log is always a good idea. Add one to the onNameChange
  function, right after we declare the "value" variable.

- Code comprehension: Using console.log and/or React Dev Tools to investigate
  the state & explain in your own words how the "Name" input is functioning.

- Stuck? Check out hints.md



Challenge #2: Implementing Date of Birth
-------------------------------------------------------------

Using a similar technique you see to name, make it so that date of birth can be
modified and the state gets updated.

1. Create a new function. This requires copy & pasting the onNameChange one. For
now, just make sure `console.log` works.

2. Modify the HTML to have an `onChange` event that will call that function.

3. Test that the `onChange` event is working, e.g. triggering the function.

4. Modify the function to set the state of the application.

- Stuck? Check out hints.md



Challenge #3: Implementing Most Recent Position
-------------------------------------------------------------

Rinse and repeat, except for the next field, which is a textarea.

Hint: The value attribute wasn't done for you this time. You'll have to set the
value, also, to ensure it "gets" whatever is typed in.



Challenge #4: Add brand new input for degrees earned
-------------------------------------------------------------

For this challenge, you are are going to be creating a new input + functions
from scratch.

1. Create a new function

2. Create a new default variable with the useState hook

3. Create a input or textarea hooked up to both the function and the state



Challenge #5: Checkboxes
-------------------------------------------------------------

Make the checkboxes functional. This is tricky, since it requires setting the
value of a state variable that is an object, which requires a couple extra
hoops to jump through.

HINT:

      let newValue = 'testing 123';
      setNameOfObject({
        ...nameOfObject,
        nameOfProperty: newValue;
      });

- Stuck? More hints in: hints.md



Challenge #6: Salary Calculator
-------------------------------------------------------------

- Make the salary calculator perform the math equation as you type it in.

- As with previous activities this will require creating new functions and
  state variables.

- Stuck? Hints in hints.md


Challenge #7: Robot checker
-------------------------------------------------------------

Examine the final two boxes.

1. Hook up functions, state, and events such that typing a number in the box
will compare the operation to a result, and make the boxes turn either red or
green based on if they are correct or not.

2. Once you get it working, see if you can write it more succinctly with
anonymous arrow functions within the JSX itself (e.g. without any extra
functions). This is might not be the most maintainable way to do it, but
sometimes is expedient.

- Stuck? Hints in hints.md



Bonus Challenge #1: DRY checkboxes
-------------------------------------------------------------

All those checkbox functions aren't too DRY, are they? Wondering if you can
make a more generalized function to do this? Well, the answer is you can!

1. Add "name" properties to each of the checkboxes that corresponds to the
property that it's changing in the state.
2. Create a new function (ie `onCheckboxChange`) for ALL their onChange events.
3. In the new function, access the name property with the following code:

        const name = ev.target.name;

4. Finally, use this name property to selectively update the interests object.

- Stuck? Check out hints.md



Bonus Challenge #2: Form results
-------------------------------------------------------------

Add a "submit" button to the end that shows the "form" results when
clicked. This will cause the form to disappear, and instead a results
page to show (such as being rendered in a separate function.)

The submit button should only show if both robot checker are correct.


# Further Reading

<https://reactwithhooks.netlify.app/docs/forms.html>

