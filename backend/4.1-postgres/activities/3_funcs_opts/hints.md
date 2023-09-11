Challenge 1:
--------------------------

HINTS:

Here is the structure of summing a column:

        SELECT SUM (cost) AS totalcost
        FROM expenses
        WHERE category = 'Dining';

- In this example, the name of the column being summed is "cost", the table
  name is "expenses", and the WHERE clause limits which rows we are selecting
  (as it did in previous examples).
- "totalcost" is something that was just made up, and will be printed out back
  at us with the resulting data (think of it like a temporary variable).
- Change "WHERE category = 'Dining';" to 'GROUP BY category;' for summing all
  categories.



Challenge 4:
--------------------------

- Hint #1:
    - Unlike previous ones, we want to see EVERY country
    - In other words, the output will somewhat resemble the output of

        SELECT name, population FROM popdata;

- Hint #2:
    - We were grouping by year before. This time we will need to group by a
      different column in order to produce the average for each country
