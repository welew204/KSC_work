# Brello - with Redux

Unlike the previous activity, this is using a more "vanilla" set-up of Redux,
resembling the Redux set-up of many companies "in the wild" more closely than
we would if we only used redux-toolkit

Getting started: Same as previous activities.


Challenge #1: Generate events & time travel
------------------------------------------------------------------

As before, try out "time travel" with this activity.

1. Bring up Redux DevTools

2. Poke around a bit. Move tasks from one column to another. Can you see how
the state (store) is getting changed, and every time you move a task it
generates a MOVE_TASK event?

3. Try going "back in time", either using the slider, or by click on a past
event and hitting "JUMP".



Challenge #2: Finish "test delete" function
------------------------------------------------------------------

Look at how move functionality is implemented. In the delete dashboard, try to
copy it to generate then dispatch a "delete" action. For now, it will only
delete item with ID 3.



Challenge #3: Hook up real delete link
------------------------------------------------------------------

Every task already has a trash-can "link" that should delete that element.

1. Look at the "connect" code at the bottom of the Dashboard.js. Can you
understand what it is doing?

2. Do something similar for the DashboardColumn component

3. Finish the onDelete function on the DashboardColumn component to dispatch the
appropriate event to delete elements




Challenge #4: Finish the CreateTask page
------------------------------------------------------------------

Now, apply these same techniques to finish the CreateTask page. This should
dispatch an event that creates a new task. Examine the available action
creators and reducers to understand how to dispatch such an event.




Challenge #5: Add "edit task" functionality
------------------------------------------------------------------

Modify the CreateTask page to also support editing a task.

Hint #1: This will require creating a new route (the link is already there, so
match that path up!)

Hint #2: It's easiest to modify the existing CreateTask to check for the
existence of a this.props.match.params.id parameter, and conditionally behave
one way or the other based on what it gets from that.

Hint #3: Title is intentionally missing (see next challenge)



Challenge #6: Fix title for editing tasks
------------------------------------------------------------------

Presently, you are unable to edit title of tasks using the action creators and
reducers available. Modify both to be able to edit the title of tasks.



Code Comprehension Challenge:
------------------------------------------------------------------

1. Look at the reducers. What is happening with the .map and .filter functions?
Why are they done this way?

2. How would you change it so that new tasks get added to the "Did it already"
column?

3. How would you add new fields to the Task object?

4. Where do you think the server would fit into this system?

