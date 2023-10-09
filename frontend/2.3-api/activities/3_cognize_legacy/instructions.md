Scenario: You landed a job as a front end engineer at a new start-up called
Cognize. You aren't clear on what the company does, but you are given a series
of tasks to improve the homepage.

- This activity will involve editing both the index.html and js/main.js

- All challenges have hints in a separate file.

- NOTE: The code supplied for this activity are not "best practices". For your
  answers, you don't have to "follow" the bad coding patterns, write code as
  we've learned instead.


Challenge #1: Code comprehension & loading the script
------------------------------------------------------

- Code comprehension: Examine the code in the script tags in the HTML file. Can
  you spot the legacy syntax for loop, references to jQuery, and the
  "forbidden" document.write?

- Loading the script:
    1. Add a console.log to the js/main.js file to check if it's being loading.
    2. Hint: It isn't.
    3. Fix it, only continuing to Challenge 2 when you see the console.log




Challenge #2: Try Cognize Button
------------------------------------------------------

When you click the "Try Cognize" button at the top of the page, it's supposed
to invoke the `tryCognize` function, and change text to say "Bé Cognizé".
Unfortunately, it seems to be broken, and may have never worked.  Can you debug
the error, and why it is not changing the text?




Challenge #3: "Accordion" effect
------------------------------------------------------

- The Learn More button is supposed to toggle the visibility of the div with ID
  more-info. This is sometimes called an accordion effect.

1. Create a new function

2. Use an onClick event to trigger this function when the Learn More button is
pressed. Ensure it works before going on. (Hint: Use console.log)

3. Add code to the function to "select" the element with class "Accordion"

4. Add code to the function to add or remove the class "Accordion--collapsed"
on the element. The CSS is already written for this class, you'll only need to
toggle the class.



Challenge #4: Toggle arrow
------------------------------------------------------

Make the text on the button in the previous activity to show alternatively show
the arrow pointing up or pointing down each time it's clicked.

- E.g., It should alternate between "Learn More ↑" and "Learn More ↓"



Bonus Challenge: Legacy jQuery code
------------------------------------------------------

Your boss wants all of the buttons on the page to more effectively berate
potential clients into trying it (whatever that means).

Your boss mentioned that there used to be some legacy jQuery-based code to
display modal dialog boxes when you click on any button on the page, and shows
you an old email with the relevant code, though you suspect some of it might no
longer work. (See hints.md for the "old email")

The jQuery CSS and script tags are already included. Can you figure out how to
incorporate this legacy jQuery?



Advanced Bonus Challenge: Decipher Terrible Legacy Code
------------------------------------------------------

A developer who is no longer with Cognizé wrote code to put logos on the page.

1. Figure where this code is, and see if you can decipher the hideous code.

2. Then rewrite it in a cleaner way. It's okay if it is not 100% the same
behavior, as long as its mostly the same.

(Good luck, you'll need it!)

