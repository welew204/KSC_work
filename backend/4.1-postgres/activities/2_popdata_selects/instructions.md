SQL Syntax note: In this curriculum, we write all SQL keywords in ALL CAPS.
However, they are case insensitive, and some can be written in all lower-case.

Challenge 1:
--------------------------

For this first challenge, your goal is to connect to a database on Heroku. If
you already know how, go ahead and do it. Otherwise, follow the tips below:

1. Assuming you have already installed Heroku, either create a new Heroku app
to play around with, or re-use an existing app such as the one from last time:

    heroku apps      # see existing apps

    # If no existing apps with postgres you want to use, then create brand new
    heroku create    # create brand-new
    heroku addons:create heroku-postgresql:hobby-dev --app pure-crag-68

2. Connect to your database with the command-line client:

    heroku pg:psql --app pure-crag-68

NOTE: For the these commands, you will need to change "pure-crag-68" to the
similarly random name your app got when you created it.



Challenge 2:
--------------------------

This activity involves querying population data of the countries of the world
in 2016 and 2006.

1. Copy & paste in the commands from the included `population_data.sql` file.
This can be done by opening up that file in your editor, and simply copying and
pasting into your Postgres terminal. This might take a minute to insert all the
data.

2. Read the commands for comprehension. Do you understand the data that is
going into the database, and how the TABLE and INSERT causes this to happen?

NOTE: In most Linux terminals, copy & paste will work, but some students using
macOS terminals encountered glitches with copy & paste, causing syntax errors
and the INSERTs not to populate the database. In this case it's faster to load
your data using a `<` pipe as follows (replacing pure-crag-68 with your app):


    cd population_data
    heroku pg:psql --app pure-crag-68 < population_data.sql



Challenge 3:
--------------------------

Practice with following SELECT and WHERE statements, and understand what each
is doing and why:


        SELECT * FROM popdata;

        SELECT * FROM popdata WHERE year = 2006;

        SELECT * FROM popdata WHERE name = 'Bulgaria';

        SELECT code FROM popdata WHERE name = 'Bulgaria';

        SELECT DISTINCT code FROM popdata WHERE name = 'Bulgaria';
>>>> grabbing 'code' field from 'popdata' table where 'name' is Bulgaria (grab the code for Bulgaria)

        SELECT * FROM popdata ORDER BY population LIMIT 5;
>>>> grabbing bottom 5 population country rows 

        SELECT * FROM popdata ORDER BY population DESC LIMIT 5;
>>>> grabbing TOP 5 population (descending order) country rows 

        SELECT * FROM popdata ORDER BY population LIMIT 5 OFFSET 5;
>>>> grabbing bottom 5-10 population country rows (skip the first 5) 

        SELECT * FROM popdata WHERE year = 2006
>>> popdata from 2006
        ORDER BY population DESC LIMIT 5 OFFSET 5;


HINT: Hit the "Q" button to exit from browsing data.




Challenge 4:
--------------------------

- WHERE clauses can use logical conjunction operators. The conjunction
  operators are just like in Python: AND, OR, and NOT
- WHERE clauses can use the IN operator instead of the equals ("=") operator
  (also like in Python)
- Using parenthesis let you group conditions. Otherwise, order of operations
  applies (just like in Python).
- WHERE clauses can use the BETWEEN operator to look for ranges in numbers or
  strings (very useful for creating dictionary-style pagination, e.g. "Between
  Aardvark and Bee")
- Note: Often, in practice, "OR" and "IN" can do the same thing.

Practice running the following SELECT statements on the country data with
more complex WHERE clauses, and understand what each is doing and why:

        SELECT * FROM popdata WHERE name = 'Bulgaria' OR name = 'Hungary';

        SELECT * FROM popdata WHERE year = 2006 AND name = 'Bulgaria';

        SELECT * FROM popdata WHERE year = 2006 OR name = 'Bulgaria';

        SELECT * FROM popdata WHERE year = 2006
            AND name = 'Bulgaria' OR name = 'Hungary';

        SELECT * FROM popdata WHERE year = 2006
            AND (name = 'Bulgaria' OR name = 'Hungary');

        SELECT * FROM popdata WHERE year = 2006
        AND name IN ('Bulgaria', 'Hungary');

        SELECT * FROM popdata WHERE
            (year = 2006 AND name = 'Bulgaria')
            OR
            (year = 2016 AND name = 'Hungary');

        SELECT * FROM popdata WHERE year = 2006
            AND name BETWEEN 'Bulgaria' AND 'Cameroon';

        SELECT * FROM popdata WHERE year = 2006
            AND name BETWEEN 'U' AND 'Y';





Challenge 5:
--------------------------

Practice using SELECT and WHERE to get the following information:

1. Write SQL code to get all information on Uruguay.

2. Write SQL code to get the population of South Africa in 2006.

3. Write SQL code to get only the names of all countries with more than 10
million people in 2016.
>>>> SELECT name FROM popdata WHERE population > 10000000 AND year = 2016;
4. Write SQL code to get only the names of countries that have between 50
million and 100 million people in 2016, and order them alphabetically by them
by country code.
>>> SELECT name FROM popdata WHERE population BETWEEN 50000000 AND 100000000 ORDER BY code;


Bonus Challenges:
--------------------------------

Have some extra time? Check out the `bonus_instructions.md` for more.

