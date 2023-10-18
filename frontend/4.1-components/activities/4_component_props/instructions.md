# Component Props

Getting started: Same as before, either copy in a `node_modules` directory, or
do `npm install` (whatever is fastest and works), then do: `npm run start`



Challenge #1: Understanding the Button & Card components
--------------------------------------------------------

1. Code Comprehension: Examine the code in src/App.js for how the Button and
Card components are imported then used

2. Code Comprehension: Examine the code for them in src/components/Button/ and
src/components/Card/ can you explain how this code is working?



Challenge #2: Extra buttons
--------------------------------------------------------

In the spot reserved below everything, add two more buttons with text Button
4 and Button 5, which each console.log something else when clicked. Make Button
5 of type "gray".



Challenge #3: Add code for "primary" button
--------------------------------------------------------

There is already CSS written for another button type. Along with "gray" there
is CSS written for a "primary" button type. By inferring how the "gray" button
works, can you modify the Button to also support the "primary" button look?



Challenge #4: New component: Boxed text
--------------------------------------------------------

1. Create a brand new component called BoxedText. It should display text in a
box. Don't over think the styling, just use the following:


        .BoxedText {
          border: 3px groove gray;
          padding: 3px;
          color: black;
          background: rgba(255, 255, 255, 0.5);
        }

2. Use it to display a few paragraphs.

3. Add an optional prop that will make it either dark-on-light or
light-on-dark.



Challenge #5: Optional button on Card
--------------------------------------------------------

Components can use other components! This concept is called "composition".

1. Add an optional property for Card that is "buttonText"

2. If specified, it should show a button with the given text at the bottom of
the Card

3. Add a "onButtonClick" property to Card that is passed down to the Button,
providing access to that Button's click event to App.js



Challenge #6: Card counter
--------------------------------------------------------

Use the additions you made in Challenge 4 to create a Card near the bottom that
has a counter which increments every time you click on it. The state should be
stored in App.js, nowhere else.


Hint: You'll likely have to change your React import to also include useState:

    import React, { useState } from 'react';



Advanced Challenge:
--------------------------------------------------------

Write a modal component that appears when a button is clicked. It should gray
out everything behind it. Keep the "state" at the top level.

