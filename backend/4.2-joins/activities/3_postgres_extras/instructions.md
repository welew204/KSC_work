This activity is a continuation of the previous activity, covering more
advanced SQL functions and operations.  If you have just been doing the
previous activity, start with Challenge 1.  Otherwise, check out
`setting_up.md` which is the set-up instructions from the previous activity.

- The goal of this activity is a survey of different Postgres-specific
  features. While we won't cover any of these features in depth in this
  activity, the goal is familiarity in case you need them in the future.

- This is an advanced activity! We survey some very complicated features of
  Postgres. None of these will be immediately applicable in homework or
  projects, and possibly not that common in day-to-day work as a backend
  engineer, but are good to be aware of none-the-less.



Challenge 1: Backslash
--------------------------

For this challenge, we'll practice more Postgres (Psql client) commands.

- Postgres specific terms:
    - backslash command -- the assortment of Postgres-specific commands that
      start with a backslash (e.g. `\d`)
    - Schema -- tables can be further organized, and grouped together into a
      "schema". By default, all your tables are in the "public" schema.

For challenge 1, practice each of the following useful tools:

1. \? - This shows a "help" screen and lists the (dizzying) selection of
"backslash commands" that Postgres supports. (Q to exit)

2. \h - This shows a "help" screen for all SQL commands (Q to exit).

3. \H - This toggles "HTML" mode, making the output be HTML tables instead of
text tables (try `SELECT * FROM states` after you enable this)

4. \g file.txt - Use this command to save the results of the last query you
just did to a file.

5. \i myfile.sql - Use this to load SQL commands from a local file.  This is
often more convenient than copy & paste or the redirection technique we
used before.


- Example: Try combining \g and \H to dump large amounts of data into an HTML
  file for easier viewing:

    SELECT * FROM cities;
    \H
    \g all_the_cities.html




Challenge 2: Set queries
--------------------------

- Background: We already have learned about condition conjunctions like OR, AND
  as ways to build more complicated WHERE clauses, and JOINs to combine tables.
  Postgres is unusual among SQL databases for additional ways to combine SELECT
  queries. In this challenge, we'll get practice with UNION, INTERSECT, and
  EXCEPT -- while not necessary, they can be nice to know.

- Postgres docs: <https://www.postgresql.org/docs/13/queries-union.html>

- UNION combines SELECT queries, showing data from both
- INTERSECT shows only the intersection (e.g. what's in common) between two
  queries, while EXCEPT subtracts one query from another

Practice with following combined SELECT statements, and discuss what each is
doing and why it is behaving this way:



    -- Combine around San Francisco with cities around New York
    (
        SELECT * FROM cities WHERE latitude > 37.20 AND latitude < 38.19 AND
        longitude > -122.67 AND longitude < -121.72
    )
    UNION
    (
        SELECT * FROM cities WHERE latitude > 40.1 AND latitude < 41.2 AND
        longitude > -74.1 AND longitude < -73.2
    );


    -- Show only cities near San Francisco that exist in company records
    (
        SELECT name FROM cities WHERE latitude > 37.20 AND latitude < 38.19
        AND longitude > -122.67 AND longitude < -121.72
    )
    INTERSECT
    (
        SELECT city FROM company_records
    );


    -- Show only cities near SF that don't exist in the company records




Challenge 3: Geometry
--------------------------

- Background: Postgres is unusual compared to other SQL databases as it comes
  equipped with a variety of geometric operators and types. One we will use now
  is the `<->` distance operator, which finds the distance between two POINT
  datatypes.

- SQL & Postgres concepts: `<->` (distance operator), `POINT` (datatype for
  2D point in space), `AS` (temporarily names something)

Practice with following combined SELECT statements. Each one "builds" on the
previous. Discuss what each is doing and why it is behaving this way:


        SELECT
            name,
            population,
            latitude,
            longitude
        FROM cities
        ORDER BY latitude ASC LIMIT 15;

        SELECT
            name,
            population,
            POINT(latitude, longitude)
        FROM cities
        ORDER BY latitude ASC LIMIT 15;

        SELECT
            name,
            population,
            POINT(latitude, longitude) <-> POINT(37.8044, -122.2712)
        FROM cities
        ORDER BY latitude ASC LIMIT 15;

        SELECT
            name,
            population,
            POINT(latitude, longitude) <-> POINT(37.8044, -122.2712) AS distance
        FROM cities
        ORDER BY distance ASC LIMIT 15;



- Can you understand how the final SELECT is using the `<->` operator to find
  the 15 nearest cities to Oakland?
- Note: Latitude and longitude of Oakland, CA: `37.8044° N`, `122.2712° W`

- BONUS: If you live in the US, look up the latitude and longitude of your
  city, and use this code to find nearby cities. If you don't live here,
  consider picking a US city, such as Miami.






Challenge 4: Full-text search
----------------------------------

- Background: Search-engine style search is called "full-text search". The
  difference between this search and what we have done so far is it is that
  full-text search is imprecise, allowing for different variations on words,
  and then ranking based on how close of a match it finds. This is involves
  some very tricky math! Luckily for us, Postgres is unique in that it comes
  with full-text search data types built-in. Otherwise, we'd have to use a
  separate database for the full text search.

- SQL & Postgres concepts: `TSVECTOR` (a special datatype to hold text that you
  want to be imprecisely searched), and `WEBSEARCH_TO_TSQUERY` and
  `TO_TSVECTOR` (Postgres helper functions that convert into this special
  format)

Practice by running the following statements. Consider what each is doing and
why it is behaving this way.


1. To practice full-text search, we need text data. Create a new table:

        CREATE TABLE test_articles (
            article_text TEXT,
            tsv TSVECTOR
        );

2. Now let's populate it with some testing data from our company records table:


        INSERT INTO test_articles (article_text)
        SELECT
            name || ', the ' || category || ' start-up headquartered in ' ||
            city || ' with ' || employee_count || ' employees, raised ' ||
            raised_amount || ' in ' || currency || ' during its Series ' ||
            UPPER(seed_round) || ' funding round, on ' || funded_date
        FROM
            company_records;


3. Examine our handiwork:


        SELECT * FROM test_articles;


4. Finally, we'll need fill the "TSVECTOR" column with the "search vector"
converted version of the text. This permits us to do full-text searches:

        UPDATE test_articles
        SET tsv = TO_TSVECTOR(article_text);


5. Now, examine the final version of `test_articles`:

        SELECT * FROM test_articles;


Phew, that was a lot of work. Let's practice searching through this new table.
Using the `@@` operator and `TO_TSQUERY`, we can perform "full text search" on
this the tsv column:

        -- Search for text with the word "spring"
        SELECT article_text FROM test_articles
        WHERE tsv @@ TO_TSQUERY('spring');

        -- Note that we can search for "headquarters" and find instead
        -- "headquartered" since Postgres understands English word roots
        -- (different languages can be configured also)
        SELECT article_text FROM test_articles
        WHERE tsv @@ TO_TSQUERY('headquarters');

        -- We can search for partial words as well
        SELECT article_text FROM test_articles
        WHERE tsv @@ TO_TSQUERY('event:*');


We can also use `WEBSEARCH_TO_TSQUERY` which provides a more natural syntax,
similar to Google or other popular search engines, where quoted text is "exact
phrases" and everything else will be searched for in a "fuzzy" manner (so that
"raise" will also match "raised", "employee" will also match "employees", in
any order):


        SELECT article_text FROM test_articles
        WHERE tsv @@ WEBSEARCH_TO_TSQUERY('raise "palo alto" employee');





Challenge 5:
--------------------------

- Background: Postgres is unusual among SQL databases for its selection of
  different data types, usually only found as features in NoSQL or
  document-based databases. In this challenge, we'll learn the ARRAY and JSON
  types.


- SQL & Postgres concepts: `@>` (containment operator) `->` (get JSON object
  operator), `->>` (get JSON object and convert to string operator)


1. Let's create a new table called `test_types` to get some practice with this:

        CREATE TABLE test_types (
            numbers INT ARRAY,
            misc_data JSON
        );


2. Now, let's put two rows of data into it:

        INSERT INTO test_types (numbers, misc_data)
        VALUES (
            ARRAY[3, 7, 11, 100],
            '{"success": false, "data": {"results": "Stuff"}}'
        );

        INSERT INTO test_types (numbers, misc_data)
        VALUES (
            ARRAY[3, 7, 100],
            '{"success": true, "message": "Example"}'
        );



3. And see our results:

        SELECT * FROM test_types;


Wanna go further? Check out the following operators letting us
"peak" into the arrays and json data types in our WHERE clauses:


        -- Check for rows that contain an array with 3
        SELECT * FROM test_types
        WHERE numbers @> ARRAY[3];

        -- Check for rows that contain an array with both 7 and 11 in sequence
        SELECT * FROM test_types
        WHERE numbers @> ARRAY[7, 11];

        -- Check for rows that have an array with 10 (there are none)
        SELECT * FROM test_types
        WHERE numbers @> ARRAY[10];


        -- Get the value of the message key from misc_data dict (JSON object)
        SELECT misc_data->>'message' FROM test_types;


        -- Get all rows with misc_data column containing {"success": true}
        SELECT * FROM test_types
        WHERE misc_data->>'success' = 'true';


        -- Dig "deep" into misc_data to match nested data in JSON
        SELECT * FROM test_types
        WHERE misc_data->'data'->>'results' = 'Stuff';




- Full assortment of array operators here:
- <https://www.postgresql.org/docs/9.1/functions-array.html>




