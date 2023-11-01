Component Library

- NOTE: You should ONLY be modifying App.js for this activity.

- This activity practices using an existing component library and passing
  props. It also gives practice with the Object Oriented Programming syntax.

- Get started as before: either `npm install`, or copying a previous
  `node_modules`, then running the server with `npm run start`



Challenge #1: Counter Button
---------------------------------------------------------------

Use the Button component to display a button that has the text "Click to
increment". This Button should increments the counter using the method
onButtonClick that has already been written for you

- Stuck? Check out hints.md



Challenge #2: Counter Button #2
---------------------------------------------------------------

Create a brand new counter exactly like above, except it should say "Click me",
and be it should increment a separate counter.

- Stuck? Check out hints.md



Challenge #3: Use the Modal component
---------------------------------------------------------------

Your next challenge is to use a modal component. A "modal dialog" is one of
those annoying boxes that pop up and block the rest of the page. It should have
the title of "Modal example", and the contents of the "Modal ipsum" placeholder
text supplied.

Like the Button component, it is already written for you, but you will need to
write the code to use it.  This will require adding methods, state, and JSX to
the App.js component in order to use the Modal.

- Hint: Start with making it always show, using this prop: visible={true}
- Stuck? Check out hints.md


Challenge #4: Use the Dropdown component
---------------------------------------------------------------

Your next challenge is to use a Dropdown component. Like the Modal component,
it is already written for you, but you will need to add the necessary methods
and state to App.js to use it. Like before, you will need to look at its source
code and deduce what props and extra code might be needed to get it to toggle a
simple message saying "Dropdown contents".

Hint: It will not only require use of the component within the JSX, but also
additions of state, and methods to modify that state.



Challenge #5: Move the second button into the dropdown
---------------------------------------------------------------

1. Move the second counter into the dropdown, such that it is displayed when
the dropdown is toggled

2. Add a paragraph tag that shows the total of the second counter

Hint: This is just practice moving around code, don't over think it! It might
be more straightforward than the previous challenges.



Bonus Challenge: Component Conversion
---------------------------------------------------------------

For this bonus challenge, test your knowledge of the different syntaxes by
one-by-one converting all the components (including App) into the newer Hooks
syntax (the one we typically use, with functions and not class).

(Solution included in separate directory: `src_bonus_solution/`)
