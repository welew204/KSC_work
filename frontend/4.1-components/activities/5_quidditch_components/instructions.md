# Quidditch Componentization

Getting started: Same as before, either copy in a `node_modules` directory, or
do `npm install` (whatever is fastest and works), then do: `npm run start`



Challenge #1: Plan some components
--------------------------------------------------------

1. Can you identify some repetitive elements on the screen? What could you
transform into components?
>>>>> player cards
>>>>> sections
>>>>> buttons on cards

2. Sketch this out, and formulate this plan in pseudocode
>>>> build section, card, button components




Challenge #2: Move the static content into new component
--------------------------------------------------------

When refactoring a large, single component app, the easiest thing to break
apart into a new components are parts of the page that don't change. Since
these don't change, you won't have to worry about props.

1. Can you identify some part of this app you could break into a new component?

(Answer: The "header" at the top is fixed.)

2. Create a components directory, like before. Also like before, create a new
component called "Nav", with a Nav.js and Nav.css file. Likely it will be
easiest to copy and rename from previous activities.

3. Copy the "App-header" code into this new Nav.js file.

4. Modify the App.js to use this new code.



Challenge #3: Refactor Nav to properly isolate CSS
--------------------------------------------------------

Now, let's fix the CSS. Move all related CSS from App-header into a ".Nav"
class. Then make your new component also use a .Nav class.



Challenge #4: Create a Character
--------------------------------------------------------

Now, it's time to tackle the core of this exercise: Refactor the "Character"
cards to be their own Component.

If done correctly, you should be able to list Characters as such:


          <Character
            info={chosenKeeper}
            onButtonClick={removeKeeper}
            buttonText={"Remove"} />


1. Your first task will be to create the Character component, using the
same pattern you've used thus far, that accepts those three arguments
(info, onButtonClick, and buttonText).

2. Don't try to do everything at once. First just make a basic component,
get it displaying somewhere in your app such as at the top, then try
modifying it and adding complexity.



Challenge #5: Complete refactor
--------------------------------------------------------

Now, refactor the rest of the Quidditch app to use this Character
component.



Advanced Challenge
--------------------------------------------------------

Use the advanced solution from the previous activity as a reference, create a
new component that handles adding and removing characters from one team
position.

(No solution provided.)
