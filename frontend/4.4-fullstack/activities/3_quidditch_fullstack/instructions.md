# Quidditch Backend Refactor

Complete the Quidditch team management system, on your own!

For this challenge we won't give you any hints. The backend is written for you,
and the front-end is complete from a user's perspective, but it's not connected
to the backend -- the state is being changed, but is making no API calls.

- Your goal is this:
    - When you add players to a position, it should be saved in the backend.
    - A good place to start is to change the code from using the (incomplete)
      JSON file to fetching the players from the backend.

- Hints:

    - There are LOTS of "TODOs" in the code. These tell you what to do.
    - For simplicity, we won't worry about making the "removing" functionality
      work. The backend will already keep track of the maximum number for each
      position and remove as needed. Don't worry about removing specific
      players --- the resulting behavior does change a bit with this refactor.
    - The original version is missing a few players in each position. You'll
      know you've loaded it correctly from the backend, because the characters
      will be restored.
    - No need to look at or edit the Python files
    - You'll want to get rid of the "Remove" button entirely.


- To get this going:


        # Run at top level in one terminal:
        python3 server.py
        # Run in another terminal (or tab):
        cd client
        npm install  # or copy node_modules
        npm run start



----------------------------------------------------


# Broad hints:

1. Think about previous activities. What sort of steps should you always take
first when approaching a new challenge?

2. What is a good, intermediate goal to set for yourself?

3. Think about applying each of the following tools:
    - Pseudocode
    - State-diagrams (VERY useful for React! It's why we learned them)
    - Component wireframe (not as useful here)

4. There is a API server. Try visiting it with your browser. Poke at it. What
can you deduce? The code for it is very short, see if you can figure out the
routes that it is expecting, even though you have never coded using this
framework (bottle) before.

5. MOST IMPORTANTLY, start experimenting and writing code! Don't just stare at
it. Change something, experiment, and see what happens. Just be careful to not
change too much at once, and always have your finger on the "undo" button :)

