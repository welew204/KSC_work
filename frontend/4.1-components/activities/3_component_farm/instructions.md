# Component Farm

Getting started: Same as before, either copy in a `node_modules` directory, or
do `npm install` (whatever is fastest and works), then do: `npm run start`



Challenge #1: Three Little Pigs
--------------------------------------------------------

Do you see the code in src/App.js that displays the pig? Add two more pigs to
the page by duplicating that code.



Challenge #2: Give the pig a button
--------------------------------------------------------

Modify the Pig component to have a button. You can use the following code:

        <button>Feed me</button>

For now, the button won't do anything.



Challenge #3: Create a goat component
--------------------------------------------------------

Time to make a new component!

1. Duplicate the src/components/Pig as src/components/Goat

2. In this new directory, rename the Pig.js and the Pig.css as Goat.js and
Goat.css

3. Import the Goat element in your src/App.js

4. Look in the "activity farm images" directory for an image of a goat

5. Add the Goat to your App.js, so you can see the goat on the page!


Challenge #4: Enhance the "Inventory" component
--------------------------------------------------------

The Stew, Fish, and Wheat components are already written for you. Add them to
the "Inventory" component. Confirm you can see the various food items in the
lower-right hand corner.

Hint: You will need to import them using a relative path. When using App.js,
"./components/" meant components since App.js was adjacent to the components
directory. Now, you will have to "go up one" to get to components, with "../"



Challenge #5: Turn the "feed me" button into a counter
--------------------------------------------------------

Referencing code you've done in the past for this course to make a "counter" in
React, turn the "Feed me" button under the pig into a counter that counts the
number of times the pig has been fed. Note how it shows it for all the pigs.

Hint: You'll likely have to change your React import to also include useState:

        import React, { useState } from 'react';



Bonus Challenges
--------------------------------------------------------

These bonus challenges don't involve coding, but instead all involve
researching conventions and code comprehension. If you have extra time, dive
into this for some relevant and hopefully thought provoking research!



### React CSS Techniques

With the approach in this course, as long as we follow "BEM" naming convention
principles, we won't run into conflicts between CSS of different components.
That said, we are still only using plain CSS to stay "agnostic" (not picking a
side). However, there are a lot of different approaches to combine CSS with
components. Here are a few blog posts that explore different ways to style
React components:

- <https://codeburst.io/4-four-ways-to-style-react-components-ac6f323da822>
- <https://blog.bitsrc.io/5-ways-to-style-react-components-in-2019-30f1ccc2b5b>
- <https://medium.com/@dmitrynozhenko/9-ways-to-implement-css-in-react-js-ccea4d543aa3>
- <https://www.sitepoint.com/react-components-styling-options/>



### Components Code Comprehension Questions

- How can you use the "componentization" to process to DRY out any JSX? Can you
  formulate a series of steps?

- Presently your "Feed me" counter is "stuck" in the Pig. That is to say, no
  other component can access it since it's private to that component. How does
  that limit us, e.g. are the pros and cons of this? (Note: The opposite of
  this is "lifting state up", a concept we will cover later.)

- Speaking of later, if you have even more time, get exposure to a future
  topic. Look up "React props". Can you pseudocode how you might use "props" to
  DRY out this code to have a FarmAnimal component that can be fed, and can be
  of different types?

