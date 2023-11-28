# Brello

- Time to put EVERYTHING together for a full React + Python powered CRUD app!
  The backend is written for you, and the core of the front-end is also
  written. You need to flesh it out into a full CRUD application.

- Getting started: Run the backend: `python3 server.py`

- In another terminal (or tab), run the React front-end: `cd` into the
  `client/` directory, and either do `npm install` to do a fresh install, or
  copy over a previous `node_modules`. Then run: `npm run start`



Challenge #0: Code Comprehension
-----------------------------------------------------

React is hard, and there are a lot of "moving parts" that go into a more
complicated app like this. A vital skill is reading code and understanding
what it does in simple terminology, or your own words.

- Look in App (client/src/App.js) -- Can you explain in your own words how the
  "Route" and the "Link" works from React Router? If you were to add a new
  page, how would you go about it?

- Look in Dashboard (client/src/components/pages/Dashboard/Dashboard.js) -- Can
  you identify what is in the state? What does the "moveTask" method do? How do
  each of the 3 columns display (note: the 4th one is incomplete)

- Use React Dev Tools -- can you explain how the state gets modified when a
  task is moved from one column to another?



Challenge #1: Show the final phase
-----------------------------------------------------

The 4th column is incomplete. Update the Dashboard page to loop through the
state, displaying the final phase.

Examine the code for the previous phases -- all that's necessary is adding
similar code in the final column.



Challenge #2: Read tasks from the backend
-----------------------------------------------------

Presently, all the tasks are "hard-coded" into the state. This is good for
testing, but in a real application, we will want to store the tasks on the
back-end (such as in a database).

For Challenge 2, make modifications to read in the tasks from the backend API.

Hint: You'll need to use fetch to make a GET request to "/api/all"

* Stuck? More hints in hints.md



Challenge #3: Write code to Create a new task, in CreateTask
-----------------------------------------------------

On the CreateTask page we need to implement the submit feature of creating
tasks. Right now, clicking the button does nothing. We need to write the code
that occurs when you click the button, and then sends the data to the server.

Hint: You'll need to send a POST request to /api/create/ to save the data.

* Stuck? More hints in hints.md



Challenge #4: Implement phase "Update" in dashboard
-----------------------------------------------------

Whenever the user changes the phase of a task (e.g. moves a task between
columns), you want the change to be reflected in the backend, so other users
can see it. This requires an Update (CRUD operation) to the backend.

Hint: Like before, except a PUT request to /api/12/update/ (where 12 is the id)

* Stuck? More hints in hints.md



Challenge #5: Implement delete
-----------------------------------------------------

The last CRUD operation we have to implement is DELETE. The API URL is like the
last one, except for "delete" instead of "update".

- Without reading any hints (at first), can you think of the steps you might
  use to build a Delete button functionality?

- Add Delete button functionality

* Stuck? More hints in hints.md



Bonus Challenge #1: Form validation
-----------------------------------------------------

Presently you can submit "blank" tasks in the Create Task page.

- Keep this invalid form submissions from happening by checking for a blank
  title input before doing the submit POST request.

- You can give feedback to the user by adding an "error" state -- if it is in
  that state, show a message on the page saying "You can't submit a blank
  form."



Bonus Challenge #2: Task Edit Page
-----------------------------------------------------

* Create a brand new page for editing tasks.

* This will require creating a Route with an :id in the path so that it knows
  which path to edit. For example,

    <Route path="/task/:id" component={EditTask} />

* In the EditTask page, you will need to use the URL parameter's id (accessible
  from `props.match.params.id`) to do all required GET and PUT requests.
  You can copy some of the code used to make the GET and PUT requests from the
  previous activities.

* You will need to create several forms for this. Maybe start with just one
  editable field, such as title, to get that working before you try them all.

* Finally, you will want to create a Link to "Edit Task" on every task on the
  Dashboard page



Bonus Challenge #3: Map & reduce
-----------------------------------------------------

Display total points above each column (phase) using map and reduce.

Hint 1: First use "map" to convert each array into just numbers, then use
reduce to sum up each column

Hint 2: Stuck with what to search for online? Try "sum an object property in an
array in JavaScript" and try those examples


Code Architecture Questions
-----------------------------------------------------

1. How might we better refactor this code? E.g. In what spots is it not DRY?

2. Are we fetching duplicate data anywhere? How could we fix this problem?

