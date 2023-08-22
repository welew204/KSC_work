Challenge 1: HINTS
----------------------------------------

- Hint #1: Your goal is to add invocations such that the following scene is
  printed to the terminal when the file is run:


            /--\  ______  /--\
            |  | | o o o| |  |
            |__| |[] o o| |__|
            ----------------------
            -  -  -  -  -  -  -  -
            ----------------------
            /--\  ______  /--\
            |  | | o o o| |  |
            |__| |[] o o| |__|
            ----------------------
            -  -  -  -  -  -  -  -
            ----------------------
            /--\  ______  /--\
            |  | | o o o| |  |
            |__| |[] o o| |__|


- Hint #2: The solution includes with `print_buildings()`, at the bottom.

- Hint #3: Make sure the code you add is unindented (i.e., OUTSIDE the
  functions). You do not want to add any code "inside" the functions, as you
  are writing the invocations ("activations") for the functions, not modifying
  the definition of the functions.

- Hint #4: In the end, the file is about 15 lines of code total


Challenge 2: HINT
---------------------------------------------------------

- Hint #1: Identify the repetitive code (e.g. the heart print statements), put
  that into a function, then invoke in the place of the original set of print
  statements. You should leave the code that doesn't repeat out of the function
  (e.g. the print statements which include the names)

- Hint #2: Feel free to use the code from Challenge 1 as a reference, as
  although the "text-based art" is different, it still consists of function
  definitions and invocations, which this challenge is all about also.

- Hint #3: You won't need "parameter variables" for this challenge (although
  its possible to use them).

- Hint #4: In the end, the file is about 23 lines of code total


Challenge 3: HINT
---------------------------------------------------------


- Hint #1: Don't get distracted by what the lines of code are doing --- they
  include Python concepts we haven't covered yet. You don't need to understand
  every line of code in order to refactor it into a function.

- Hint #2:
    - Like before, you'll want to identify the repetitive code, put that into a
      function, replacing the original code with the invocation of that
      function, and leaving the code that doesn't repeat intact (e.g. the title
      and list of menu items)
    - However, this time you'll also need to include parameters for your
      function, and arguments for your invocation, since it will require input
      variables (aka "parameters") to be passed to it (aka "arguments")
    - Check out the section in the refactoring guide titled "Input"

- Hint #3: You will (typically) never include a function in another function.
  Make sure all your functions are defined "at the top level" (outside of the
  main function)

- Hint #4: What part of the code changes? What stays the same? The part that
  changes between each invocation should go into the "arguments" for the
  invocations.

- Hint #5: Your invocation might look like: `print_menu(title, items)`

- Hint #6: In the end, the file is about 21 lines of code total


Challenge 4: HINT
---------------------------------------------------------


- Hint #1: Don't get distracted by what the lines of code are doing --- they
  include Python concepts we haven't covered yet. You don't need to understand
  every line of code in order to refactor it into a function.

- Hint #2: Identify the repetitive code, put that into a function, the invoke
  the function around the code that doesn't repeat (e.g. the print statements
  describing the different types of measurements.)
    - This time there doesn't need to be any parameters, just "output values"
      (aka "return values")
    - Check out the section in the refactoring guide titled "Output"

- Hint #3: You will (typically) never include a function in another function.
  Make sure all your functions are defined "at the top level" (outside of the
  main function)

- Hint #4: What part of the code changes? What stays the same?

- Hint #5: Part of the solution: `bust = get_measurement()`

- Hint #6: This one is longer. In the end, the file is about 32 lines of code


Challenge 5: HINT
---------------------------------------------------------

- The solution won't be any shorter -- this refactor is purely about getting
  practice moving code and passing values using return and arguments.




Bonus Challenge: HINT
---------------------------------------------------------

Here's how the `zoo_budgeter` function might look:


        def zoo_budgeter():
            print('--- ZOO FOOD BUDGET ---')
            animal_name = ''
            grand_total = 0
            while True: # Infinite loop, relies on "break" to stop
                print('Animal name?    (enter "quit" to stop)')
                animal_name = input('Name: ')
                if animal_name == 'quit':
                    break
                food_quantity = budget_animal_for_one_day(animal_name)
                total_pounds = calculate_days(food_quantity)
                grand_total = grand_total + total_pounds
            print('Grand total:', total_pounds)

