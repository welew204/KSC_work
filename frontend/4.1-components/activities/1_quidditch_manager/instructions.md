Quidditch Management

Context:

- Quidditch is a fictional sport from the Harry Potter book series. A quidditch
  team has 7 players, each having one of 4 positions: 3 Chasers, 2 Beaters, 1
  Keeper, and 1 Seeker.
- This application is intended to allow you to pick different players and
  assemble a team. Presently, it only works for the "Keeper" position.


Getting started: Same as before, either copy in a `node_modules` directory, or
do `npm install` (whatever is fastest and works), then do: `npm run start`



Challenge #1: console.log & React Dev Tools
--------------------------------------------------------

1. Add console.logs to the onChooseKeeper and removeKeeper functions.
Ensure you understand when they are getting activated.

2. Bring up React Dev Tools: Observe the state changes occurring when
choosing or removing Keepers.

Hint: When adding a console.log to a function, you can always place it on it's
own line directly after the definition of the function, e.g. the opening part
that ends with "{"



Challenge #2: Implement the starting Seeker position
--------------------------------------------------------

Now that you are more familiar with how the Keeper code works, add in code
necessary to allow choosing a starting Seeker.

1. Show the Seeker roster using a `.map` loop (as was done with the
Keeper roster).

2. Add a new function for selecting a Seeker. Confirm it is working using
console.log and/or React Dev Tools

3. Have it display the current starting seeker.

4. Add a new function for removing the current starting seeker.



Challenge #3: Implementing "add" chaser code
--------------------------------------------------------

Chaser code will be much trickier, since there can be more than one chaser.
This means we will need to move the characters from one array to another. This
is a tricky process to do correctly in React.

See the  `guides/react_state_recipes.md` for example code snippets (recipes) on
how you might do this. This code, like all other setState code, goes in the
functions that get triggered from events.

1. Create the .map code to display possible chasers. As before, attatch
to each button a new onChooseChaser function much like you did for the
previous ones. With a console.log, ensure the function is getting invoked
with the index of the player you clicked on.

2. Modify the onChooseChaser function to move the element from the
availableChasers array into the chosenChasers array, both being within the
state (see guide). Use React Dev Tools and/or console.log to verify it is
working.

3. Modify the JSX to display all the seekers you have selected, using the .map
syntax, similar to what you used in previous activities.



Challenge #4: Implement the "remove" chaser code
--------------------------------------------------------

1. As with onChooseChaser before, attach to each button a new onChooseChaser
function much like you did for the previous ones. With a console.log, ensure
the function is getting invoked with the index of the player you clicked on.

2. The removeChaser function should do the opposite as the other, moving it
from the "chosenChasers" array to the "availableChasers" array.



Challenge #5: Implement the Beater management code
--------------------------------------------------------

Rinse and repeat: Repeat Challenges #3-#4 to implement Beaters.



Advanced Bonus Challenges
--------------------------------------------------------

There's a lot of room for DRYing this application out.  Can you perform one or
more of these refactors & UX improvements?

- Refactoring improvements
    * Instead of moving items from one array to another, change it to keep the
      rosters constant (unmodified from the JSON), and only shuffle the
      character from one array to another.

    * DRY it out! Move the rendering of a position to a flexible function that
      can render any position.

- UX improvements
    * Limit the Beater and Chaser positions based the limit for teams (2
      Beaters, 3 Chasers)

    * Keep showing all the characters for all positions, but just gray out the
      "Choose" button when already selected.

