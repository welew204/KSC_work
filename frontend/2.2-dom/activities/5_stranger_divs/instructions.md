Welcome to Hawkins National Laboratory. We're excited to have you part of the
team. Here we do highly valuable experiments to determine power-level of
subjects.

This application lets us record the power-level of each of our experimental
subjects. It's missing some features, which is where you come in.

Hint: You will ONLY need to edit main.js


Challenge #1
------------------------------------------------

This first challenge is a code understanding challenge. To better explore the
existing code, add some console.log statements.

1. Add a console.log at the top of the file
2. Add one to the top of the render function
3. Add a console.log to output each new div that is created in the for loop.

- Stuck? See hints.md


Challenge #2
------------------------------------------------

Presently, the red boxes don't show power level. Modify the code so that they
show both the name and power level, as such:

    JANE - 5
    KALI - 3

- Stuck? See hints.md


Challenge #3
------------------------------------------------

We want each red-box width to reflect the power level of the test subject,
forming a sort of graph. Make it so that each "power level" is "worth" 100px,
so the width of a power level 1 test subject should be 100px, and power level 5
test subject should be 500px.

- Stuck? See hints.md



Challenge #4
------------------------------------------------

Improve the usability of the application.

1. Clear the inputs after every time you submit.

2. Prevent "empty" inputs from being submitted

- Stuck? See hints.md



Bonus Challenge
------------------------------------------------

Background: As the experiments have been going on, the power levels have been
getting bigger and bigger. To accommodate for this, make the widths
proportional to the largest one.

1. Determine the "highest power level". Create a new global state variable
called "highest" which starts at 5, and then write an "if statement" every time
a new item is added that conditionally also sets the highest (if a "new
highest" has been found).

2. Add some code in render to display the highest somehow (maybe start with
just a console.log) to

3. Use some math for determining the pixel width.

- Stuck? See hints.md



Advanced Bonus Challenge 1
---------------------------

Look up online better ways to find a maximum in an Array with JavaScript.  Can
you implement it in a "one-liner"?


Advanced Bonus Challenge 2
---------------------------

- Look at "map" and "forEach" from the previous activity, `1_syntax_warmup.html`

- Can you use these to rewrite the for-loop to a) transform the list into DOM
  elements, and then b) add those DOM elements, as "chained together" Array
  methods?

- Once you get them "chained", can you use .filter to only show entries that
  have a power level over 5?

- Add a new input that lets you control the minimum power level, e.g. filter
  which bars are visible based on a minimum (and have it "auto-rerender" when
  you change it).

For more information on this somewhat common practice of Array method
"chaining", here is a tutorial:

https://codeburst.io/javascript-learn-to-chain-map-filter-and-reduce-acd2d0562cd4

