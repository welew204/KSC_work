This activity is a continuation of the previous activity, covering more
advanced SQL functions and operations.  If you have just been doing the
previous activity, start with Challenge 1.  Otherwise, check out
`setting_up.md` which is the set-up instructions from the previous activity.


Challenge 1:
--------------------------

For this challenge, to quote Ricky Ricardo, "You've got some EXPLAINing to do!"


1. Try this query:

        SELECT name, funded_date, raised_amount
        FROM company_records
        WHERE slug = 'facebook';

2. Now try EXPLAINing it:

        EXPLAIN SELECT name, funded_date, raised_amount
        FROM company_records
        WHERE slug = 'facebook';

3. Notice especially the `Seq Scan on company_records`.

4. Now try running the following a few times, taking special note of the
"Execution Time" in milliseconds that it reports back:

        EXPLAIN ANALYZE SELECT name, funded_date, raised_amount
        FROM company_records
        WHERE slug = 'facebook';


5. Now, try creating an index, and repeating the previous commands:

        CREATE INDEX slug_index ON company_records (slug);

        EXPLAIN SELECT name, funded_date, raised_amount
        FROM company_records
        WHERE slug = 'facebook';

        EXPLAIN ANALYZE SELECT name, funded_date, raised_amount
        FROM company_records
        WHERE slug = 'facebook';


- Reflection questions:
    - The output of EXPLAIN and EXPLAIN ANALYZE are very messy and technical
      with regards to the inner workings of Postgres, but the most important
      thing is if it used an index or not.
    - What different types of "scans" did you encounter after running these
      commands?
    - Did adding the index improve the speed? Why or why not?


Tip: Try running the following to check your indices:


        SELECT indexname, indexdef FROM pg_indexes
        WHERE tablename = 'company_records';




Challenge 2:
--------------------------

Now take what we learned in Challenge 1 and apply it to the cities table:

1. Write a query to find all cities named 'Graham'

2. Use EXPLAIN to show how Postgres would perform that query. Notice
especially the "Seq Scan on cities".

3. Now try the more thorough EXPLAIN ANALYZE to time the operation.

4. Can you say in your own words what this EXPLAIN is saying?



Challenge 3:
--------------------------

1. Now it's time to improve the query speed. Add an index to the cities table
that will improve the speed of the previous query you wrote (that is, for
cities named 'Graham').

2. Use `\d cities` and/or the "FROM pg_indexes" command above to ensure the
index was correctly made.

3. Rerun your EXPLAIN ANALYZE query. What does the new results tell you about
how fast this query is?



- **Bonus** Try this out to "explain the EXPLAIN", or reformat it's output:
    - https://explain.depesz.com/



Advanced Challenges:
--------------------------

- If you happen to have done any Computer Science, or have taken our "Code
  Unplugged Workshop":
    - Which search algorithm do you think the database is using for each of
      these queries? (Hint: They are two that we talk about.)
    - What is the Big O of each of these search queries?

- Think about the EXPLAIN ANALYZE again, from before you added the index. When
  writing this exercise, it took about ~0.5 ms to execute with the index.
  Assume only 1 query can be made at a time, and if multiple queries were
  attempted they have to "wait in line".
    - If 1000 users make this query (or in reality, visit a page that must make
      this query first), how long would it take for the last user to get the
      information back?
    - How many users per second would it take to cause the server to never be
      able to fulfill all the requests?
    - Note that this is a very small dataset (~3000) compared to most real
      databases. It's common for there to be 100x that amount of rows in real
      databases. So, assuming there is a dataset that is 300,000 and that the
      time scales linearly (e.g. 100x more data means 100x slower), building
      off of #2, how many un-indexed queries per second would "crash" the
      entire system?
    - NOTE: With all of these, many factors can go into slowness, so this is
      more for "back of the napkin" calculations that illustrate the challenges
      of scaling, but should not be considered precise numbers.

