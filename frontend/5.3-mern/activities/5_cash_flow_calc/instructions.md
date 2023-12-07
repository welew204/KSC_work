# Cash Flow Calc

This is an example project built the React Mern Prototyping Starter.  This is
will be a useful example starter project for your projects.  The full version
and instructions are available at:

- <https://github.com/kickstartcoding/react-mern-prototyping-starter>
- <https://github.com/kickstartcoding/cashflowcalc>

In this activity, we'll learn how to use a randomized hex to create a useful
"log-in free" application, that is somewhat secure for certain purposes, purely
through the hex being hard to guess.


Challenge #1: Getting going
-----------------------------------------------------------------

This project was started using the `react-mern-prototyping-starter`. That means
to get going with it you'll have to do the same steps: 1) Create the .env.local
file, 2) install the backend, and 3) install the frontend

1. Leave the frontend React installation going in a separate terminal in the
background, since it will take the longest by far. To NPM install frontend:

        cd client
        npm install

2. Create a file called ".env.local" in this directory, that contains your
credentials. Inside the file, add something similar to the following code,
however, with everything in the quotes being the actual connection string for a
MongoDB Atlas database cluster:

        export MONGODB_URI='mongodb://USERNAME:PASSWORD@something.com:1234/DBNAME'

3. NPM install the backend:

        npm install

4. Use the included "run.sh" Bash script to launch (assuming both front and
back is installed by now):

        bash run.sh

If you get connection errors, then 1) check your MONGODB URI connection string
in the .env.local file, and also 2) check that your MongoDB Atlas account
allows connections from your IP address.



Challenge #2: Code comprehension
-----------------------------------------------------------------

- Examine the two functions at the top of server.js. This function 1) checks
  that the collection is what we expect, and 2) generates a random hex code (7
  digits, much like YouTube or Imgur) for every new document.
    - It's invoked with each of the routes below.
    - While this isn't "super secure" for anything important, it is good enough
      for a basic no-login-required app, just based on the fact that these 7
      digits are hard to guess!

- In the client/src/component/pages directory, examine the two "pages"
  components: `LandingPage` and `CashFlow`

- LandingPage - The homepage. In Challenge 3, we'll be adding two new behaviors
  when Start is clicked:
    - Send a POST request to generate a new document
    - Redirect to the page for that document, based on the hex code
- CashFlow - The main page of the app, which showing a single Cash Flow Chart.
  In Challenge 4-5, we'll be adding two new behaviors:
    - Use a PUT request to "auto-save" the document to the DB as you make
      changes, based on the hex code
    - Use a GET request to retrieve the saved version of the document from the
      DB upon subsequent visits, based on the hex code



Challenge #3: POST to create new document
-----------------------------------------------------------------

Open up the LandingPage JavaScript file.

- Use a POST request to create a new document when the Start

- Hint: fetch('/api/mongodb/cashflow/', fetchOptions)

- Stuck? Check out hints.md



Challenge #4: PUT to "auto-save" document
-----------------------------------------------------------------

Open up the CashFlow page JavaScript file.
.
- Use a PUT request to save the data to the backend as changes are made

- The "debouncing" code is done for you, which will only make it "auto-save"
  every few seconds, whenever changes are made

- Hint:

        fetch('/api/mongodb/cashflow/?hex=' + hex, fetchOptions)

- Stuck? Check out hints.md



Challenge #5: GET to load document
-----------------------------------------------------------------

Open up the CashFlow page JavaScript file.

- Use a GET request to retrieve the data from the backend in subsequent visits

- You'll need to use the "hex" to retrieve the right one.

- Hint:

        fetch('/api/mongodb/cashflow/?hex=' + hex, fetchOptions)

- Stuck? Check out hints.md




Bonus Challenge: Error handling and notify
-----------------------------------------------------------------

- Any time fetch sends a request, it could result in an error, for example, if
  the server is down, or the user is disconnected from the internet. This is
  where the ".catch" feature of Promises (callbacks using .then syntax) becomes
  useful.

- Already installed is `react-notify-toast`, a package that shows a little
  notification at the top of the screen. Presently its used when you click the
  copy-to-clipboard button next to Print.

- Research both these concepts, or examine the code in hints.md

- Can you incorporate it into all the different fetch's to make the app "fail
  gracefully" if the internet connection goes down?

- Bonus #1: Consider adding a redirect back to the homepage, to handle 404's.
- Bonus #2: Use notify to give users a nice welcoming message after hitting the
  "Start" button
- Bonus #3: Prevent "Start" from getting "double-clicked" during slow
  connections with a state variable.

