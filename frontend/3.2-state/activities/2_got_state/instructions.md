Game of Thrones Trivia, Part 2
------------------------------------------------------------

Getting started:

- Open up this directory in your Terminal.  Note while using React, your
  terminal must be in the same directory as the `package.json` (e.g., if you do
  `ls`, you will see `package.json`, `src`, etc).

- Install React + dependencies to create the `node_modules`:

    npm install

- If this takes way too long, then instead consider copying the `node_modules`
  directory from the previous activity. You can do this from your file browser,
  or by using a shell command in the format of: `cp -r
  ../PREV_DIR_NAME/node_modules .`

- Then get started by running:

    npm run start

- Edit src/App.js to continue the activity


Challenge #1: console.log
------------------------------------------------------------

- Add a console.log above the "return" to report the `correctGuessCount` every
  time your component is rendered. Observe that clicking on correct answers
  makes this number go up.

- Note: This is a great debugging technique in general. Consider always adding
  console.log(s) for your state variables to your App function when working
  with React. Very useful for debugging!



Challenge #2: Add wrong answer counter
------------------------------------------------------------

See something wrong? When we click on a wrong answer, it doesn't
increment the wrong answer counter. We need to increment incorrect every
time a user clicks on an incorrect answer.

- Step 1: Add to the onWrongAnswer function similar code to the onCorrectAnswer
  function, to make the wrongGuessCount increment every time they guess an
  answer incorrectly. Start with a console.log

- Step 2: Confirm it is working using the console.log from the previous
  challenge. You can see the "correctGuessCount" logged as an object in your
  state. What can you add to the console log to make sure the incorrect
  guesses?

- Step 3: Add it to the guesses box so it shows in the bottom right

- Stuck? Look at hints.md



Challenge #3: Conditional rendering
------------------------------------------------------------

If the correctGuessCount exceeds 4, you should include a message in an h2 tag
within the .Guesses div, that says "Good job!"

- HINT:

    {
        answer === 42 ? (<p>The answer is 42</p>) : (<p>Nope, no answer</p>)
    }

- Stuck? This hint is further explained in hints.md



Challenge #4: Show Quiz Results
------------------------------------------------------------

We want the quiz to eventually "end" and show the user their score.

- Add code to return different HTML if they have given at least 5 answers
  (whether wrong or right, i.e.  answered each question)
- For example, if they got 3 correct, the entire page should be replaced with:

        <h1 className="Header">
            You got 3/5 correct! Good job.
        </h1>

- Hint: This could be an if-statement, above the return in the App function

- Stuck? This hint is further explained in hints.md

------------------

Check out `bonus_instructions.md` for more challenges!
