Getting started instructions are same as before. Check out hints.md if you are
stuck.


Challenge #1: console.log
---------------------------------------------------------

Console.log is always a good idea. Add a console.log one to the onSubmit
function that shows the username which was typed in.

- Stuck? Check out hints.md



Challenge #2: Implementing fetch
---------------------------------------------------------

Using previous activities and your handouts or cheatsheets as a guide, add in a
"fetch" to the onSubmit function to the GitHub API, and console.log the results.

- Hardcode the URL (you can use <https://api.github.com/users/janeqhacker/repos>)

- Stuck? Check out hints.md



Challenge #3: Update state after fetch
---------------------------------------------------------

Update the results state variable with data from the API.

- Hint: This code belongs in the last .then() callback of fetch.

- Stuck? Check out hints.md



Challenge #4: Using input username
---------------------------------------------------------

If you haven't already, modify the fetch to generate the API url based on the
username that was entered.  If you do it correctly, it should list all the
repos for the GitHub profile you typed in!

- Stuck? Check out hints.md



Challenge #5: Add a loading state
---------------------------------------------------------

A common pattern is to display a "spinner" (GIF or other image that spins) when
you are loading data.

1. Create a new state variable called `isLoading`. Set it to be `true` when you
first "kick off" the fetch. Set it to be `false`, the response is received.

2. Make the loading GIF (presently commented out) only appear when the
isLoading is `true`



Bonus Challenges
---------------------------------------------------------

See `bonus_instructions.md`

