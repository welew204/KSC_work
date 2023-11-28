# Brello - with Redux

This is initially a code comprehension activity. The goal is to get a feel for
how the different parts of Redux fit together with React.



Challenge #1: Getting started
--------------------------------------

1. Copy the node modules directory from a previous activity into this
directory. Then, install react, redux and redux-toolkit to get going:

        npm install redux react-redux @reduxjs/toolkit

2. ALTERNATIVELY, simply do an "npm install" to install everything you need
from scratch:

        npm install

3. Finally, get it started by running:

        npm run start

4. Install Redux DevTools for Chrome(ium) (and/or Firefox):

        <https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd>



Challenge #2: Generate events & time travel
--------------------------------------

*Code comprehension.*

1. Bring up Redux DevTools

2. Poke around a bit. Move tasks from one column to another. Can you see how
the state (store) is getting changed, and every time you move a task it
generates a moveTask event?

3. Try going "back in time", either using the slider, or by click on a past
event and hitting "JUMP".



Challenge #3: Examine the code
--------------------------------------

*Code comprehension.*

Now that you've seen how "actions" get generated in the Redux DevTools when you
do stuff, spend some time looking over the code. See if you can explain in your
own words what each part of the code does.

1. Identify the code that defines the actions. (Hint: It's in reducers)

2. Identify the code that dispatches these actions. (Hint: It's in components)



Challenge #4: Modifying default state
--------------------------------------

This challenge will actually involve changing code.  Modify the default state
to include the following object:

        {
          title: "Learn MERN",
          points: 8,
          phase: 0,
          id: 4,
          text: 'A lot of coders seem to like it',
        },


HINT: Put this right after the other objects found in src/reducers/tasks.js,
before the end of the array (e.g. before the `],`)



Challenge #5: Adding "complete" action
--------------------------------------

Now that you've examined how actions fit together with the App component code,
it's time to create some brand new functionality.

1. Create a brand new action that will instantly move a given task into the
last column (phase 3, or "Forget about it")

2. Uncomment the extra button (check mark) found in components/Task/Task.js

3. Finish the function and event in Dashboard.js that invokes this action.

Hints:

- For step 1, examine the other action reducers for clues. It will resemble
  move forward or move backward, except it will always "go to" phase 3
- For step 2, the button is already hooked up to an event for you, you just
  need to uncomment it
- For step 3, follow the same pattern as the other functions: Create the
  action, then  dispatch it. It will be 2 lines in total



Challenge #6: Adding "copy" action
--------------------------------------

Now that you've made a new action that's similar to previous actions, try
making one from scratch: A "copy" action.

1. Create a brand new action that will duplicate the given action. The new
action should start in phase 0, but have the same points, title, and text.

2. Uncomment the extra button for "Copy" found in components/Task/Task.js if
you haven't already. Note that this time there is not yet a function in
Dashboard.js being properly passed down as a prop.

3. Create a new function in Dashboard.js, and pass it down as a prop just as
the other functions are passed down

- Hint: This is tough, but can be completed by carefully following the same
  pattern you see in the other reducers.




Bonus Comprehension Questions
--------------------------------------

- Why might you want to have more than one file in the reducers directory?
  (e.g., more than one "store state slice")

- Examine the mapStateToProps functions in Dashboard (and EditTask). What do
  these do? What else could you put here?

- What are the advantages of keeping state & state modification separate from
  components?

- Want to dive deeper into these questions, including pros and cons of using
  Redux? Check out Dan Abramov's influential blog post called "You Might Not
  Need Redux":
    - <https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367>

Note: In the next "instagrim" activity, the top two questions will be
"answered" with more customized code.

