Complete the movie catalog and search system.

Note: If you want fewer hints, without the incremental "challenge" system,
check follow the `harder_instructions.md`

To get this going:

        # Run at top level in one terminal:
        python3 server.py
        # Run in another terminal (or tab):
        cd client
        npm install  # or copy node_modules
        npm run start


Challenge 1: Complete MovieDetails
----------------------------------------------------------------------

For this challenge, complete the MovieDetails component. It's being used
correctly, you will need to show all the movie details.

- Stuck? Check out hints.md



Challenge 2: Complete fetch
----------------------------------------------------------------------

The fetch code is partially complete, but needs more work.

First, use console.log to show the data returned by the API. Identify the
*array* in this data, and then write code to access it and put it into the
state variable already created for you.

- Stuck? Check out hints.md



Challenge 3: Map the movies
----------------------------------------------------------------------

Once you are confirming that you are setting your API data correctly (using
either console.log or React Dev Tools), add a .map to your JSX to visually show
all the movies on the page.

You know you're done when you see a bunch of movie details!

- Stuck? Check out hints.md



Challenge 4: Search functionality
----------------------------------------------------------------------

Your next challenge is to implement search functionality. The search box at the
top of the is complete, but the button doesn't do anything. Start by creating a
function (e.g. doSearch) and attaching it as an onClick to the button.

- Stuck? Check out hints.md



Challenge 5: Fetch for search
----------------------------------------------------------------------

1. Add "fetch" to your new search function.
2. Start by hardcoding the search URL, like: `/api/search/shrek`.
3. Same next steps as before: a) Use a console.log to identify the data you
need, b) do a set state with that data
4. Finally, once its working for the hard-coded URL, change it to use what was
typed in (by concatenating the relevant state variable)

- Stuck? Check out hints.md



Bonus Challenge: Add Movies
----------------------------------------------------------------------

For this bonus challenge, we want to create a form at the bottom of this page
that allows users to save new movie details.

- To speed this up, a lot of code is given to you in hints.md
- Do you understand this code? Can you use it to create the add movie form?



Bonus Challenge: Loading state
----------------------------------------------------------------------

Add loading functionality, so whenever you are refreshing data it says
"Loading..." until the new data comes in. This will likely require creating a
new state variable, and adding some conditional logic in the JSX.

