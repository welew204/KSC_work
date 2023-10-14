Start with instruction.md before attempting these!


Bonus Challenge #1: Prevent multiples per question
------------------------------------------------------------

Presently we aren't storing anywhere in the state whether or not we have
answered a particular question, which means we can try it multiple times.
That's no good.

NOTE: This still won't be super DRY. That's okay for now.

- Step 1 - Add a parameter to each of the functions onWrongAnswer and
  onCorrectAnswer called `questionNumber`. Add or modify the console.log inside
  these functions to also output value of questionNumber, for debugging.

- Step 2 - See where we invoke the functions in the JSX? Add in arguments 0, 1,
  2, 3, and 4, to each of the 5 questions, respectively.
    - NOTE: To add in arguments, you'll need to use the arrow function syntax
    - e.g. `() => onWrongAnswer(1)`

- Step 3 - State variables can hold any type of data. Add a new variable to
  state called "questionsAnswered". It should start as an empty object. Add a
  console.log above your return to check it's value.

- Step 4 - Add code to both onWrongAnswer and onCorrectAnswer such it updates
  the questionsAnswered object to be true for that number.
    - In the end, your questionsAnswered state variable might end up looking
      something like: { 0: true, 2: true, 4: true }
    - This one will likely requires some new syntax, so see the two hints
      below, and/or also check hints.md

- Step 4 HINT 1: There's a syntactic trick for modifying a single attribute of
  an object that is a state variable. As a clue, look at the following syntax:

        setNameOfStateVariable({
            ...nameOfStateVariable,
            nameOfNewProperty: 'New property',
        });


- Step 4 HINT 2: If you want to get the value of a variable and use that as the
  key (property name) of an object, this also requires another syntax:

        setNameOfStateVariable({
            ...nameOfStateVariable,
            [variableThatHoldsThePropertyName]: true,
        });

- Still stuck? Look at hints.md for further hints



Bonus Challenge #2: Prevent multiples per question
------------------------------------------------------------

Now that you modify the state to record when they answer a trivia question, you
need to "lock" that question, and show the explanatory text. Use the
"conditional rendering" technique to show the explanatory text while hiding the
buttons.


Bonus Challenge #3: Show "right" or "wrong"
------------------------------------------------------------

In addition to removing the options, show if the question was answered
correctly or incorrectly. For example, replace the buttons with Correct!  or
Wrong! when they answer.

Hint: This is challenging, and will require changes to how you are modifying
the state.


-----------------------------


Extra: Conditionally add CSS classes
------------------------------------------------------------

CSS transition effects and React are a match made in heaven. Take a look at the
App.css and examine the styling for Question-explanation.  Notice there is some
commented out code. Uncomment it.

Can you make it so that it will conditionally add classes such that it "fades
in"?

(No solution included since it conflicts with previous ones.)



Extra: Fully DRY
------------------------------------------------------------

We'll get to idiomatic ways to loop soon, but can you figure out how to DRY
this out to store the questions in an array and loop through them?

Write pseudocode for how you might approach this task of DRYing-out the code.


