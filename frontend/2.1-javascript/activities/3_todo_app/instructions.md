In this activity,  we'll build the classic "To-Do" application in JavaScript.
You will be building it in a step-by-step in main.js, mostly from scratch!

HINTS: To get you started, each challenge has commented-out hint code.


Challenge #1: Code Comprehension
-------------------------------------------

1. Code comprehension: Examine the existing code. Find each console.log and
confirm when/how they get invoked with your dev console.

2. Add a new console.log or change the existing console.logs to confirm you are
editing the right file and understand its structure




Challenge #2: document.querySelector
-------------------------------------------

In the render function, use document.querySelector to fetch / gain access to
the div with ID "todo-list", and then console.log it.



Challenge #3: document.createElement
-------------------------------------------

In the render function, using document.createElement and appendChild, add a
paragraph tag with the word "Todo List" to the div with ID "todo-list".



Challenge #4: For loops
-------------------------------------------

Use a "for loop" to through the todoItems, console.logging each one.



Challenge #5: Displaying To-Do list
-------------------------------------------

Time to combine your code to actually show the To-Do list!

Combine the code you created in Challenge #3 and Challenge #4, such that you
are adding each of the items in the todoItems array as a new p tag.



Challenge #6: push
-------------------------------------------

Now, add code to "push" (append to the end) of the todoItems array when the
"Add" button is clicked. For now, just have the new string be "New todo item".



Challenge #7: re-render
-------------------------------------------

- Add a function invocation to the `function addItem`, so that the list gets
  re-rendered with the new list item appear on the screen every time you click
  the "Add" button.

- Modify `function render`, so that it clears the todo-list before adding the
  new paragraph tags.



Challenge #8: complete
-------------------------------------------

Modify the addItem function as necessary until it is fully working, actually
taking data that the user entered into the form and adding it to the ToDo list.



Bonus Challenge: Deletion
-------------------------------------------

Implement a button with the text "X", appended to each paragraph tag in the
list, such that clicking it will clear that item from the list & rerender.
This requires several changes in the code. Code hints are included below
if/when you get stuck.


HINTS:

1. Step 1: Creating a new button:

        let something = document.createElement('button');
        something.textContent = 'X';
        somethingElse.appendChild(something);


2. Step 2: Attaching a onClick event in JS:


        SOME_VARIABLE_NAME_GOES_HERE.onclick = () => {
            console.log('some code');
            console.log('will go here');
        };

3. Step 3: Look up code online how to remove an item from an array.
Unfortunately, there is nothing as simple as a ".remove()" method, meaning this
will take a couple steps.

