This activity is about refactoring code with functions.  Refactoring is taking
code that already works, and rewriting it so that it's expressed differently
(such as more succinctly, or clearly), but behaves the same.


Challenge 1: Function invocation warm-up
----------------------------------------

- To warm up our function invocation syntax skills, open up `challenge_1.py`

- Add invocations to show a scene with buildings, road, buildings, a road
  again, and finally more buildings

- Stuck? See "hints.md" for both the desired output, and more clues



Challenge 2: Refactoring: No variables
---------------------------------------------------------

In this refactoring challenge, we'll practice with some Valentine's Day Cards!
Define & invoke a function to refactor `challenge_2.py`, such that the file is
25 lines of code or less.

- Stuck? See "hints.md" for more hints



Challenge 3: Refactoring: "Input" variables (arguments)
---------------------------------------------------------

This challenge once again involves refactoring into a new function, except this
time we'll need to consider "input" variables, or parameter variables & their
values (arguments).

- Your new function should be called `print_menu`

- Refactor `challenge_3.py` using functions to make the file 25 lines or fewer.

- Stuck? See "hints.md" for more hints



Challenge 4: Refactoring: "Output" variables (return)
---------------------------------------------------------

Again we will refactor code into a new function, except this time we'll only
need to consider an "output" variable. In other words, a variable that must
"escape" the function via a "return statement".

- Your new function should be called `get_measurement`

- Refactor `challenge_4.py` using functions to make the file 25 lines or fewer.

- Hint: Don't get distracted by what the lines of code are doing --- they
  include Python concepts we haven't covered yet. You don't need to understand
  every line of code in order to refactor it into a function.

- Stuck? See "hints.md" for more hints




Challenge 5: Refactoring: Input and output variables
---------------------------------------------------------

Background: The goal of this challenge is to demonstrate that it's possible to
refactor *any* lines of code into a function, no matter how many variables it
needs from code that proceeds it (these get passed in as arguments), or how
many variables are used in code that comes after (these get returned with a
return statement).

- For Challenge 5, combine all that you learned to refactor lines 7-11 of
  `challenge_5.py` into a new function called `budget_animal_for_one_day`

- Hint: This time, the solution won't be any shorter.



Bonus Challenge: Better zoo application
---------------------------------------------------------

In this bonus challenge, we'll get more refactoring practice with the zoo
application, and then make it slightly more sophisticated.

1. Refactor the remaining code in the `zoo_budgeter` function into a new
function called `calculate_days`

2. Continue improving on the code to build an application that will calculate
the food requirements for several different animals. It's up to you how you
want to build this!

- Stuck? Check out the hints.md for an example of how the `zoo_budgeter`
  function might look in the end

