This is an open ended activity, with code hints included below. Test out the
solution to understand the behavior.

You can feel free to implement the functionality in any order, OR you can
follow the recommended order in the form of the following challenges.

Challenge 1: Add car
-------------------------------------------

Implement the "Add" car functionality. When completed, you should be able to
click the blue "Add" button and see the correct details of the new car show up
in the table.

- Hint #1: `addNew()` is only partially complete. Currently, the first input
  ('quantity') is being successfully inserted into the table's DOM. Follow the
  same pattern for the "#input-make", "#input-model", and "#input-year"

- Hint #2: `createNewRow()` is only partially complete. Currently, it only
  creates 2 TD elements, to show the first two values (quantity and make).
  Complete it to include model and year.

- Hint #3: Ignore the Buy and Edit buttons for new cars for now -- save that
  for Challenge #6



Challenge 2: Buy car
-------------------------------------------

Implement the "Buy" car functionality. This should do the following logic:

1. Get the quantity table data cell of the current row (done for you)

2. Get the number itself from the cell (not done, currently just sets to 4)

3. Subtract 1 from that quantity (not done)

4. Update the table to have the new quantity in the correct spot (done for you)



Challenge 3: Buy last car
-------------------------------------------

Add to the "Buy" car feature so that if you hit 0 for quantities of cars, it
will remove that row.

- Hint: Use an `if` statement, and the DOM method `.remove()`
- Still stuck? Code hint available in `code_hints.js`



Challenge 4: Show edit modal
-------------------------------------------

Start work on the Edit Modal (shown when click "Edit").

- Begin by getting the relevant HTML and putting it in the modal (already
  written for you in the `code_hints.html`)
- Then, use the `code_hints.js` hint as a starting point to start populating
  the modal with data from the relevant table row.




Challenge 5: Save edit modal
-------------------------------------------

Finish work on the Edit Modal: Finish the saveModel so that it will take data
from the modal inputs and put it back in the row.

Hint: Similar to Challenge 4, but "in reverse"




Challenge 6: Add Buy & Edit buttons
-------------------------------------------

Now, finish the "Buy" and "Edit" buttons for newly added cars.

- Code hint for Buy available in `code_hints.js`


Bonus Challenge
-------------------------------------------

If you want an extra challenge, try adding the "sort" functionality. This
allows clicking on a table header and re-constructing the table to be sorted in
order by one of the 4 columns.

A "comparison" function is provided for you in the `code_hints.js`



