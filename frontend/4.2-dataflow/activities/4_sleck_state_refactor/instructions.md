# Sleck State Refactor

- Get started as before: either `npm install`, or copying a previous
  `node_modules`, then running the server with `npm run start`


Challenge #1: Fix adding new messages
-----------------------------------------------------------------

The NewMesssage component is not being used correctly. You can't even type into
it. Can you fix it? (The solution is simple, but the concept is tricky!)

- Stuck? Check out hints.md



Challenge #2: Lift state for ChannelSelector
-----------------------------------------------------------------

Now, you are tasked with the (very realistic, but tricky) task of moving state
up to a parent component, also known as "lifting state". This is one of the
most common refactoring tasks you'll do in React.

This is tricky, as it will require several changes to several files.  This will
largely involve converting the references to "state" at the component level
into references to "props", and then moving that state along with the functions
needed to modify it to the App component, before finally passing down the state
AND the functions needed to modify it via props to the child components.

- Stuck? Hints in hints.md



Challenge #3: Show current channel at top of page
-----------------------------------------------------------------

Now that the state's in the right spot, we'll need to pass the currently
selected channel down to the Nav component

- Stuck? Hints in hints.md



Challenge #4: Lifting state: ChatMessage stars
-----------------------------------------------------------------

Your goal now is to lift the star state. Move the star-setting state to the App
Component, so that you can eventually count the total number of stars that were
applied in the Nav.

- You'll have to more or less completely rethink the star setting logic. This
  is because we need to store if the message is starred or not at the "app"
  level, which requires keeping track of it for all messages in one spot.
- There are a lot of approaches to this. One approach is to use an array where
  we store the index of which chat messages have been starred. This is the
  approach the solution takes, as does hints.md

- Stuck? Probably! Lots of code hints in hints.md



Challenge #5: Count the total stars in the Nav component
-----------------------------------------------------------------

You've made it this far! Now make it so that the App component passes down the
total star count to the Nav component.

- Stuck? Hints in hints.md



Bonus Challenge: Implement Channel Logic
---------------------------------------------------

1. Separate out the different channels into separate arrays in state.

2. Optionally render each array depending on which one is selected.

3. When a message is sent, optionally show that message in one channel or
another.

(Solution in separate file)



Bonus Challenge: Comprehension
---------------------------------------------------

- Can you understand what this code does, and what code it could replace?

        setStars(
          stars.includes(indexOfMessage) ?
            stars.filter(i => i !== indexOfMessage) :
            stars.concat([indexOfMessage])
        );

