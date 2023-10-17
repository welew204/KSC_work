Weather Dashboard
----------------------

Getting started:

- Open up this directory in your Terminal.  Note while using React, your
  terminal must be in the same directory as the `package.json` (e.g., if you do
  `ls`, you will see `package.json`, `src`, etc).

- Install React:

    npm install

- NOTE: If installing React takes way too long, then copy the `node_modules`
  directory from the previous activity. The easiest way is to do it in your
  file browser (or finder, if you are on macOS). Alternatively, the shell
  command might be like: `cp -r ../PREV_DIR_NAME/node_modules .`

- Get started by running:

    npm run start

- Edit src/App.js to continue the activity



Challenge #1: console.log & testing "hard-coded" dummy data
-------------------------------------------------------------------------

1. Adding console.log is always a good idea. Add one to the doFetch function.

2. Now, uncomment the setWeatherResult invocation to enable some "hard-coded"
dummy API test data given. Try it out.

3. Code comprehension: Can you explain in your own words how this test data is
getting included, and where it is being displayed?



Challenge #2: Implement fetch
-------------------------------------------------------------------------

Using previous activities and handouts or cheat-sheets as a guide, add in:

- A "fetch" to the doFetch function to retrieve weather data from the API

- For now: Just console.log the result, and keep the location "hard-coded"

- HINT: The URL, including an API Key, is provided here. You'll have to
  combine the 3 lines into 1 single line URL:

        http://api.openweathermap.org/data/2.5/weather
        ?q=Oakland,California
        &appid=0de82b6b4ba5d843dac44bbee4d02543

- Feel free to change the hard-coded location to be your city

- Stuck? Hints in hints.md



Challenge #3: Update state after fetch
-------------------------------------------------------------------------

- Update the state after the fetch, so you can see the results in the app

- The data has to be slightly transformed before it is usable. The code to
  transform the API data into a useful form is already written, except its
  being used in the test data

- If done correctly, the current (real) weather for the hard-coded location
  should be shown when the "refresh" button is clicked.

- Stuck? Hints in hints.md



Challenge #4: Search box
-------------------------------------------------------------------------

Time to "un-hardcode", and add the ability to search for different locations!

1. Uncomment the search box input at the bottom of the page (in the JSX)

2. Finish the code necessary (an onChange event, a function, etc) to be able to
type in new locations.

- Stuck? Hints in hints.md



Challenge #5: Search box
-------------------------------------------------------------------------

Update your fetch code to utilize the data from the search box, allowing the
user to search for any location.

- Stuck? Hints in hints.md



Challenge #6: Handle 404s
-------------------------------------------------------------------------

Experiment with API, and write the code to gracefully handle 404 errors. This
will likely involve adding an if-statement within the callback (the "then" of
the fetch) to check if the expected data is coming back.

- Example: When the user enters a non-existent location, have it show "Not
  found." as the location

- Stuck? Hints in hints.md



Bonus Challenges
---------------------------------------------

The following challenges are about code comprehension:

1. It's annoying to have to hit refresh. Why can't we put the fetch in the
function above the return? What would happen? Try it out.

2. What would it had looked like if we had each API data item as a separate
state variable, instead of having a single object-type state variable to store
the API data? What are the pro's and cons of this approach? (Code example in
hints.md)

3. Write pseudocode to conditionally add the following classes based on the
weather "description" to the App div.
  - That is, if the description includes the word on the left, then the App div
    should also have the class on the right:

      clear    App--clear
      storm    App--storm
      cloud    App--cloud
      rain     App--rain

  - When you are done with the pseudocode, check out hints.md to see a partial
    solution. Do you understand the logic behind this code? Can you finish this
    code and integrate this into the application?


