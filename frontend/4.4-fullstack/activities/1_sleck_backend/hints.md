- **NOTE:** The testing "backend" we are developing against is intentionally
  slow. It takes 1.5 seconds for every request.

Challenge #1: HINT
----------------------

- This has both back-end code (written in Node.js variant of JavaScript --
  although this could have just as well have been written in Python, or any
  other language) and a front-end (written in React)

- You must get both the React server AND the Node.js server running at once --
  typically this is done in separate terminal windows or separate terminal
  tabs.

- The "server.js" file is node.js code for running a server that keeps track of
  messages. In real life, this would be a full Django or Express project, but
  for this activity, it's just a very simple server script with no
  dependencies.  To run it, type the following:

            node server.js

- The client/ directory contains the react code. In a separate terminal, get
  your node modules set up (via copying, or `npm install`), then get the
  frontend started by running:

            npm run start

- You will know everything is working when the messages contained in server.js
  are displayed in the frontend. You should visit localhost:3000 to see
  everything (while leaving the backend server to be running "behind the
  scenes" at localhost:3001).



Challenge #2: HINT
------------------

- Put this after we send the message:

    refreshMessages()



Challenge #4: HINT
------------------

- Hint #1: The fetch might look like this:

        fetch('/get-stars/')

- Hint #2: The setState might look like this:

              setStars(data);


- Hint #3: Altogether, it might look like:

        function refreshStars() {
          fetch('/get-stars/')
            .then(response => response.json())
            .then(data => {
              console.log('receiving star data!', data);
              setStars(data);
            });
        }




Challenge #5: HINT
------------------

- Hint #1: If hardcoded, the fetch might look like this:

      fetch('/toggle-star/2')


- Hint #2: Unhardcoded, the fetch might look like this:

      fetch('/toggle-star/' + indexOfMessage)


- Hint #3: All together, it might look like:

      function toggleStar(indexOfMessage) {
        fetch('/toggle-star/' + indexOfMessage, {method: "POST"})
          .then(response => response.json())
          .then(data => {
            // TODO: Do something here...
          });
      }


- Hint #4: You'll need to call refreshStars() when the data comes back, to
  reload and see the new data from the API

