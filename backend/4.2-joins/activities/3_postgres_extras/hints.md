


Challenge 4: Full-text search
----------------------------------

        CREATE TABLE test_articles (
            article_text TEXT,
            tsv TSVECTOR
        );


- Explanation:
    - This creates a new table with two columns, `article_text` (of type TEXT)
      and `tsv` (of type `TSVECTOR`)
    - The `article_text` is a column that will hold the "text" of the articles
      we want to search through
    - The `tsv` column is a special column that will hold the "search-able
      text", using the `TSVECTOR` special column type to permit full-text
      search



        INSERT INTO test_articles (article_text)
        SELECT
            name || ', a ' || category || ' start-up headquartered in ' ||
            city || ' with ' || employee_count || ' employees, raised ' ||
            raised_amount || ' in ' || currency || ' during its Series ' ||
            UPPER(seed_round) || ' funding round, on ' || funded_date
        FROM
            company_records;


- Explanation:
    - The "SELECT" is a "subquery", retrieving data from the company data
      table. When combined with INSERT, it allows us to move data from one
      table into another.
    - The `||` is a "string concatenation" operator (much like Python's plus
      operator), allowing us to assemble strings together into a single testing
      sentence.




        UPDATE test_articles
        SET tsv = TO_TSVECTOR('english', article_text);


- Explanation:
    - Updates every single "tsv" column to include the "TSVECTOR" version of
      the text.
    - The TSVECTOR is a sorted list of distinct "lexemes", which are words that
      have been normalized to merge different variants of the same word.
    - Sorting and duplicate-elimination are done by the "TO_TSVECTOR" function.
    - Note how common English articles like "the" are often excluded





5. Now, examine the final version of `test_articles`:


        SELECT * FROM test_articles;




Bonus Challenge: Postgis
--------------------------

#### Troubleshooting

- This bonus challenge involves Postgres "extensions" that are typically
  pre-installed with PostgreSQL, but might not be available if you set things
  up locally. Use this to see what features are installed:

        SELECT * FROM pg_available_extensions ORDER BY "name";


- **Troubleshooting:** If you get an error like:

        HINT:  No function matches the given name and argument types. You might
        need to add explicit type casts.

- That means you either don't have Postgis installed and/or enabled, OR you
  made a typo somewhere in function name or in the values passed to the
  function


As an FYI, this was the SQL used to get get the cities larger than 300000 in
the SF bay area, and Chicago-area:

        SELECT
            name,
            POINT(latitude, longitude),
            POINT(latitude, longitude) <-> POINT(37.8044, -122.2712) AS distance
        FROM cities
        WHERE
            population > 300000
        ORDER BY distance ASC LIMIT 3;



        SELECT
            name,
            POINT(latitude, longitude),
            POINT(latitude, longitude) <-> POINT(41.88, -87.63) AS distance
        FROM cities
        WHERE
            population > 150000
        ORDER BY distance ASC LIMIT 3;


