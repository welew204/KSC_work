# Sleck Componentization

- Get started as before: either `npm install`, or copying a previous
  `node_modules`, then running the server with `npm run start`



Challenge #1: Code comprehension
------------------------------------------------------------

The first challenge involves reading the code of this app. Describe in your own
words the answers to the following questions:

1. Can you list all child components being used?
2. Can you find where the code for each component is?
3. Can you pick out what parts of App.js that could be potentially refactored
into new components? How small can we make App.js?



Challenge #2: Incorporate ChannelSelector
------------------------------------------------------------

A component to replace the "ChannelSelector", to the left, is already finished.
However, it's not being used. Write the code to import it into App.js, and then
replace the "hard-coded" ChannelSelector div in App.js with this new component.

- Stuck? Check out hints.md



Challenge #3: Break off ChatArea
------------------------------------------------------------

App.js is still "too big" --- there's more "componentization" to be done.  The
app is presently mostly contained in one component. Refactor it into smaller
components. This is a decent chunk of work in this challenge.

- For this challenge, "break off" the ChatArea JSX into a brand new component

- Hint: The only prop it will need is "messages"

- Stuck? Check out hints.md



Challenge #4: Break apart ChatArea
------------------------------------------------------------

Now, it's time to even further refactor the ChatArea component that we just
made, breaking it apart into even smaller components.

* Create a ChatMessage component. Move the code to display a single message
  into this component. Hook up props as necessary to keep it working.

* CSS Refactor: Refactor the CSS to refer to a new CSS class ChatMessage, to
  stay consistent with naming.

* Move SVGs as necessary to tidy things up.



Challenge #5: Break off NewMessage
------------------------------------------------------------

Refactor the new message bar at the bottom into a new NewMessage component.



Challenge #6: Adding "star" feature
------------------------------------------------------------

Add the necessary state and functions to the ChatMessage component such that
when you click on the "star", it will show it as filled in versus empty.

- Stuck? Check out hints.md



Code Comprehension Challenge Questions:
------------------------------------------------------------

1. How might you add the feature of displaying a count of the total number of
starred messages, up in the nav-bar?

2. How might you show the current channel at the top of the page?

Hint: It's hard or even impossible without moving where state is stored.
