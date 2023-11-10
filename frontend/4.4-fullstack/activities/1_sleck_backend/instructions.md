# Full Stack: State from Server

This time it's DIFFERENT to get going than previous activities. This is because
we have a full-stack application, with a Node backend and React frontend.

- In one terminal window or tab, run the Node.js backend server:

            node server.js

- In a separate terminal window or tab, run the React server with the usual:

            cd client
            npm install # (or copy over node_modules)
            npm run start

- Stuck? Check out hints.md



Challenge #1: Getting started
----------------------------------------------------------------------

Once you have it running, answer the following comprehension questions:

1. Look inside of client/package.json:
    - Do you see the line that says "proxy"?
    - This is what tells React to "proxy" (ie "relay" or "forward") API
      requests to the backend on localhost:3001

2. Examine the source code for client/src/App.js:
    - Can you identify where it retrieves data from the server?
    - Can you identify where it sends data to the server?
    - How does the "Loading" message work?



Challenge #2: Refreshing after sending messages
----------------------------------------------------------------------

Right now, if you send a new message, it will appear only if you hit "refresh"
on your browser. Fix it so that it will "auto-refresh".

Hint: This only requires 1 addition.

- Stuck? Check out hints.md



Challenge #3: Learn the stars API
----------------------------------------------------------------------

Learn through experimentation how the Stars API works:

1. In your browser, try going to http://localhost:3001/get-stars/ -- this is the
"stars" API from our server

2. Now, try going to http://localhost:3001/toggle-star/3

3. In your browser, go again to http://localhost:3001/get-stars/ -- see how one
star got "toggled"?



Challenge #4: Load stars from backend
----------------------------------------------------------------------

Now, use what you learned about the backend API to cause the stars array to be
loaded from the server instead of only existing in the frontend.

Hint: Same logic as refreshMessages: Still store stars in state, but loaded
from the backend with a fetch, instead.

- Stuck? Check out hints.md



Challenge #5: Update stars on backend
----------------------------------------------------------------------

Replace the existing state manipulation regarding stars with fetch calls to
this backend.

Hint: The "toggleStars" logic will need to be deleted and replaced with a
fetch to the "toggle-star" endpoint you explored in Challenge 3.

- Stuck? Check out hints.md



Bonus Comprehension Challenge: Faster speed
----------------------------------------------------------------------

The testing backend we are developing against is intentionally slow. It takes
1.5 seconds for every request. While this is slow, it's not unheard of: The
round-trip time of requests could easily take  a full 1.5 seconds depending on
your connection speed and location of the server (e.g. it could take much
longer if the server is on another continent).

- What are changes to the frontend that could improve the *apparent* speed of
  the application?

- What are changes to the backend that could be made to allow for fewer
  requests?



Bonus Comprehension Challenge: Channels pseudocode
----------------------------------------------------------------------

- How might you expand this application so that it works with different chat
  channels (e.g. different "group chats" or threads of conversation)?

- Think of all the changes that are necessary in the following:
    - App.js
        - What UI changes have to be made to make the channel selector work?
        - What new "fetches" would have to be added?
        - How would the fetch for the mesages change? How would the stars
          change?
    - Backend server
        - What new data has to be stored?

- How might you want to refactor the data structure around stars, messages,
  etc, to be more natural? If you are familiar with backend programming: What
  database changes would be necessary?

- Don't actually try implementing this, but do try to write some pseudocode or
  express in your own words what you think would be necessary to support this
  feature.



Bonus Comprehension Challenge: Real-time applications
----------------------------------------------------------------------

- Right now, you have to refresh to see new messages appear. How might you make
  this a real-time chat application?
- For this advanced challenge, just do the research into what technologies
  you'd have to add.

- Hint: Look up "WebSockets"
    - WebSockets allow for a "two-way TCP stream" to be opened up between the
      browser and the server, so the server can "push" data to the client
      without the client first requesting it.
    - This breaks the "everything is requests" rule! It's one of the few
      exceptions, as it's not a request/response stucture, but instead a 2-way
      channel of communication, where the server can send data to the client
      unprompted.

