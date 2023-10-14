Getting started instructions
---------------------------------------------------------

- Open up this directory in your Terminal.  Note while using React, your
  terminal must be in the same directory as the `package.json` (e.g., if
  you do `ls`, you will see `package.json`, `src`, etc).

- Install React + dependencies to create the `node_modules`:

    npm install

- If this takes way too long, then instead consider copying the `node_modules`
  directory from the previous activity. You can do this from your file browser,
  or by using a shell command in the format of:
    `cp -r ../PREV_DIR_NAME/node_modules .`

- Then get started by running:

    npm run start

- Edit src/App.js to continue the activity





Challenge #1: HINT
---------------------------------------------------------

- This will let you debug that it is indeed getting clicked and has access to
  the username that was typed-in.


      function onSubmit() {
          console.log('Getting clicked!', username);
          // TODO fill me in
      }


Challenge #2: HINT
---------------------------------------------------------

Code snippet:

      fetch('https://api.github.com/users/janeqhacker/repos')
        .then(response => response.json())
        .then(data => {
          console.log('data came back', data);
        });

- For now, just console.log the result.

- You will know its working if by clicking the onSubmit it shows repo JSON
  information into the console


Challenge #3: HINT
---------------------------------------------------------


- Generic example code of setting data

      const exampleStuff = [
        {name: 'Test A', description: 'Test description'},
        {name: 'Test B', description: 'Test description'},
      ];
      setResults(exampleStuff);


- All of this, should be done in the last .then() callback. However, you should
  not be using the "harcoded" `exampleStuff` at all, it's provided as purely an
  example. Instead you should be using the actual data coming back from the API



Challenge #4: HINT
---------------------------------------------------------


    const url = `https://api.github.com/users/${username}/repos`;
    fetch(url)



Bonus Challenge #1: HINT
---------------------------------------------------------

Will require syntax like:

    <a href={'http://github.com/' + variableName + '/'}>Linky link</a>



Bonus Challenge #3: HINT
---------------------------------------------------------

1. Code clues:

      let time = 3 * 1000; // in milliseconds, 1/1000s of a second
      let previousTimeout = null;
      function debounceExample() {
        clearTimeout(previousTimeout);
        previousTimeout = setTimeout(() => {
            // The thing you want to debounce
            console.log('getting debounced!!');
        }, time);
      }

2. Hint 2: If you run into an issue where the last key you press "isn't getting
picked up", this is because setting state is asynchronous.
  - One way to solve this is to pass the new username value as an argument. Can
    you figure this out?
  - A better way to solve this is with useEffect, which we will cover later.


Terminology:

- **Debouncing** is when the UI waits a little bit for activity to stop before
  it does something (such as a request)
- **Throttling** is when the UI has a maximum number of times it will update in
  a certain amount of time. Similar to debouncing, but with a big difference:
  debouncing is for things you want to happen once, throttling is for things
  you don't want to happen too often.

Some blog posts worth reading:

- <https://davidwalsh.name/javascript-debounce-function>
- <https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf>

The example solution has a "custom written" debounced search as indicated by
the hint above. However, you might like to read this for a tutorial on how to
use the `throttle-debounce` NPM package to add denouncing to your React app's
events:
- <https://blog.revathskumar.com/2016/02/reactjs-using-debounce-in-react-components.html>
