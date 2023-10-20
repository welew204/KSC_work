# Lord of the Rings componentization

- This is an activity in refactoring, by splitting larger App.js files into
  separate components. The end result will look the same, but have neater,
  DRYer code.

- Get started as before: either `npm install`, or copying a previous
  `node_modules`, then running the server with `npm run start`


Challenge #1: console.log, and observe likely component
------------------------------------------------------------

- Add a console.log to make sure you are editing the right file

- Look closely at the code. Explain in your own words the following:
    - Do you see repetition? What is the repeated unit?
    - What properties or content change for each repetition?
        - e.g. Are their "slots" that need content that change each time?
        - Whatever changes gives you a clue as to what "props" you will need to
          write for your component



Challenge #2: Create CharacterCard component
------------------------------------------------------------

1. Create a directory called "components" in "src"

2. Create a directory called CharacterCard within "src/components", and a file
called CharacterCard.js
    - For your convenience, in the "example code" directory is a reference
      component, the "Pig" component from a previous activity
    - To get the image tag working, you may have to copy over the import and
      change the path (OR, feel free to work on getting it working only in the
      next challenge, and just delete the img tag for now)

3. Copy over HTML code from Frodo (or another character) to the new file

Note: For now, just copy it over as-is. Next step is thinking about props.




Challenge #3: Add props & use in App.js
------------------------------------------------------------

Using the React feature of "props", add in necessary props to make
CharacterCard be reusable by App.js for each of the 4 characters, and then add
references to CharacterCard within App.js.

- Stuck? Check out hints.md



Challenge #4: Move CharacterCard CSS to your new directory
------------------------------------------------------------

1. Create a new CharacterCard.css file next to your CharacterCard.js file

2. Import it in your CharacterCard.js file with code similar to:

    import './CharacterCard.css'

3. Copy over all the CharacterCard related CSS from your App.css file to your
new file



Challenge #5: Refactor CharacterCardGroup
------------------------------------------------------------

- Follow steps 1-4 to create a new component called  CharacterCardGroup. It
  should be comparatively much simpler than CharacterCard.

- Stuck? Check out hints.md



------------------------------------------------------------


# Bonus Challenge #1: Refactor

* Move the data of the characters into an array of objects

* Use .map to loop through this data, including the Character components as
  necessary

Hint: To "transform" all the properties of an object into props of a component
use the following syntax:

    <ComponentName {...obj} />

# Bonus Challenge #2: Separate data

`export default` is the keyword that allows allows other files to `import` the
given file.  Whatever object, function, or class has `export default` will be
what the other file gets when it does an "import".

- Move the array from bonus challenge #1 to a separate JS file

- Import the new file in App.js

(Solutions to these challenges found in "AppBonusSolution.js")

# Advanced Bonus Challenge

If you still have more time, consider doing one of the following (no solutions
provided):

- When the app loads, it should add the data to state
- Look up Drag and Drop (or more specifically, sortable), and make it so you
  can re-arrange the characters
- Create a form to add more characters
- Add a delete button
