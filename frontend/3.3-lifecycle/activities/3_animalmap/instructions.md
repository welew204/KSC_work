# Animal Management

Get started as before: either `npm install`, or copying a previous
`node_modules`, then running the server with `npm run start`



Challenge #1: console.log
------------------------------------------------------------

The goal of this activity: Create an "animal tracking" software, to track any
number of animals in 5 different categories (cat, cow, dog, pig, rat).

- Adding console.log is always a good start. Add one to the animal adding
  function to show the current value of the "animals" array state variable.

- Observe how adding elements correctly updates the state variable (animals).

- Hint: This is a bigger activity than previous ones! Don't be daunted or
  side-tracked by the quantity of code. Instead take one challenge at a time.

- Stuck? Check hints.md



Challenge #2: Add a .map loop to show all animals
------------------------------------------------------------

Adding animals works, but they aren't being displayed visually. Fix that.
Using existing .map loops as an example, add to the .App-body div a
".map"-style loop to show all the animals.

- Hint 1: Use the following HTML within the .map loop:

        <div className="Animal">
          <img src={IMAGE_GOES_HERE} alt="Animal" />
          <p>{NAME_GOES_HERE} the {TYPE_GOES_HERE}</p>
        </div>

- Hint 2: The ALL-CAPS place-holders above need to be replaced

- Still stuck? Check hints.md for more hints



Challenge #3: Name filter
------------------------------------------------------------

A "Search:" box at the top of the screen is already completed. The intended
functionality of this box is to allow you to filter the animals visible by
their name, in a "search as you type" sort-of-way.

- For Challenge 3, Add a ".filter" before the .map that you just wrote to only
  show animals with a name that contains the text you type into the filter.

- Hint: This code will filter to only show "whiskers":

        animals
          .filter(animal => animal.name.includes('whiskers'))
          .map(animal => (

- Stuck? Check hints.md for more hints



Challenge #4: Animal type dropdown
------------------------------------------------------------

The next feature we'll be building is a "dropdown" select box next to the
search box, that allows the user to select a species of animal from the
available types. Challenges 4 - 6 will be building this feature.

- For this challenge, start by adding this HTML code somewhere near the search
  box HTML, and ensuring it's functional with a console.log:

        <label> Only show:
          <select onChange={onLimitByChange} value={limitBy}>
            <option value="all">all</option>
            <option value="cat">cat</option>
            <option value="dog">dog</option>
          </select>
        </label>



Challenge #5: Map for dropdown
------------------------------------------------------------

Now, update the animal type dropdown to show all the animal types. You can use
the existing animal type selector map as reference code.



Challenge #6: Filter for filterBy
------------------------------------------------------------

Finally, use ".filter" to make the animal category filter work correctly.



Bonus Challenges
------------------------------------------------------------

Check out `bonus_instructions.md` for an additional set of challenges.
