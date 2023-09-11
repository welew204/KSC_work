This activity is a continuation of the previous activity, covering more
advanced SQL functions and operations.  If you have just been doing the
previous activity, start with Challenge 1.  Otherwise, check out
`setting_up.md` which is the set-up instructions from the previous activity.


Challenge 1:
--------------------------

- Background: Most dialects of SQL come with a selection of different
  "functions". These can do operations on columns, reporting summarized or
  manipulated data. We'll cover a few of the most common in this activity.

- Also, as a very useful convenience, you can change how things get labeled
  when reported back, using "AS" (called an "alias")

- Practice with following SELECT statements, and discuss what each is doing and
  why it is behaving this way:


        SELECT SUM(population) FROM popdata WHERE year = 2006;
>> adding up all the populations that are from 2006
        SELECT AVG(population) FROM popdata WHERE year = 2006;
>> avg (mean) of all the populations that are from 2006

        SELECT ROUND(AVG(population)) FROM popdata WHERE year = 2006;
>> avg (mean) of all the populations that are from 2006, rounded

        SELECT ROUND(AVG(population), 2) FROM popdata WHERE year = 2006;
>> avg (mean) of all the populations that are from 2006, rounded to 2 decimals

        SELECT MIN(population), MAX(population) FROM popdata WHERE year = 2006;
>> MIN and MAX vals among the populations that are from 2006

        SELECT MAX(population) / 1000 FROM popdata WHERE year = 2006;
>> MAX val among the populations divided by 1000, in 2006

        SELECT SUM(population) AS totalpop FROM popdata WHERE year = 2006;

        SELECT
            ROUND(AVG(population) / 1000 / 1000) AS average_population_mil,
            ROUND(MAX(population) / 1000 / 1000) AS most_populous_mil
        FROM popdata WHERE year = 2006;


Hint: Confused by these commands? Check out `hints.md` for further
instructional content on this.



Challenge 2:
--------------------------

With the previous commands as examples, practice creating queries to get the
following information:

1. Use a single SQL SELECT statement:
    - Find the total world population in thousands in 2016
    - Labeled as `total_k_2016`
    - Round to 1 decimal place
total_k_2016 
--------------
7413672.9

2. Use a single SQL SELECT statement:
    - Find the average and total population in millions in 2016
    - Labeled as `average_population_mil` and `most_populous_mil`
    - Round to whole numbers

3. Use a single SQL SELECT statement:
    - Find the standard deviation of populations in 2016
    - Use built-in function "STDDEV"
    - Round in millions
 std_dev_population 
--------------------
                134
(1 row)


Challenge 3:
--------------------------

Background: Using GROUP BY, we can run functions based on data in another
column, "grouping by" or aggregating based on another property. In our case, we
use it to use a single query to get information on both 2006 and 2016 at once.

1. Practice with following SELECT statement and discuss what each is doing and
why it is behaving this way:

    SELECT year, ROUND(SUM(population)) AS poptotal
    FROM popdata
    GROUP BY year;

2. Now, repeat Challenge 2, but add in the "GROUP BY" to report back this
information for both 2006 and 2016.



Challenge 4:
--------------------------

Scenario: Time to put all we learned in this activity into more complicated
queries. The goal is to get an estimate of what the population of each country
was between 2006 and 2016. We'll do that by averaging 2006 and 2016 together.

1. Use a single SQL SELECT statement:
    - Report a single number for each country, averaging the populations
      between 2006 and 2016
    - Label as "averagepop"
    - Round 2 decimal places, expressed in millions
    - Sort it in descending order by the average

SELECT name, ROUND(AVG(population)/1000000, 2) AS averagepop FROM popdata GROUP BY name ORDER
 BY averagepop DESC;

Hint: Confused by these commands? Check out `hints.md` for further
instructional content on this.



Advanced Bonus Challenge
------------------------------------------

We'll be covering "JOIN" explicitly in future lessons, but see if you can use
the following tutorial example to create a query that will calculate the
population growth of each country.

http://www.zentut.com/sql-tutorial/sql-self-join/

1. Can order it by absolute growth?

2. Can you calculate and display percentage growth also?


#### Research more functions

Interested in what else you can do with Postgres? Check out the full reference
of all the functions available in the official Postgres documentation:

- <https://www.postgresql.org/docs/current/functions.html>


