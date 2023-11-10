# Build your own plan

In most previous activities, we've given you a set of challenges. For this one,
we won't. Instead you'll have to plan those.

- **Prefer having guided challenges? Use `instructions.md` instead**



### Specification

The final product should do the following:

- Show all movies and the information about them when you first load the page
- Search box functionality: When you hit search, it should use the search API
  to filter which movies are available
- Add movie: Develop a form on the bottom of the page to add movies by using a
  POST request to the API



### Current progress

- The backend is complete: It reads from a JSON file, and exposes "all",
  "search" and "add" as the 3 API functions (and writes new movies to it)
- The CSS is complete
- The frontend JavaScript and logic is incomplete


### What to do

- Get the site running

        # Run at top level in one terminal:
        python3 server.py
        # Run in another terminal (or tab):
        cd client
        npm install  # or copy node_modules
        npm run start

- You've done quite a few "challenge-based" activities so far. What are the
  typical steps?
- Try outlining your own "challenges" or step-by-step plan
    - What's the first thing you do?
    - What's the next? etc

- Stuck? First, check out more hints below. If you're still stuck, just use the
  "instructions.md" file after you've tried making your own step-by-step plan.


--------------------------------


#### Broad hints

1. Think about previous activities. What sort of steps should you always take
first when approaching a new challenge?

2. What is a good, intermediate goal to set for yourself?

3. Think about applying each of the following tools:
    - Pseudocode
    - State-diagrams (VERY useful for React! It's why we learned them)
    - Component wireframe

4. There is a API server. Try visiting it with your browser. Poke at it. What
can you deduce? The code for it is very short, see if you can figure out the
routes that it is expecting, even though you have never coded using this
framework (bottle) before.

5. MOST IMPORTANTLY, start experimenting and writing code! Don't just stare at
it. Change something, experiment, and see what happens. Just be careful to not
change too much at once, and always have your finger on the "undo" button :)


----------

EXAMPLE STEPS

1. Make sure have both python and npm run start running at the same time

2. Start by making some hardcoded data show up

3. Then use console.log to experiment with the API

4. Then ensure state is getting set correctly

5. Finally, add in map code to do a loop properly


