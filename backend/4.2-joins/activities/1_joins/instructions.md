Challenge 1:
--------------------------

In this activity we will be dealing with much bigger data-sets.

Connect to your database with the commandline client, or re-use your old
connection from previous activities (replacing pure-crag-68 with your app
name):

    heroku pg:psql --app pure-crag-68


NOTE: Loading the data may take a while! Use this time to read up on Challenge
3 and beyond (or even for project work).

1. Setup your tables by just copying & pasting the "schema.sql" file into
your Postgres prompt. This can be done by just opening up that file in your
text editor and copying it over.
    - To confirm they were created, use the \d command to describe the tables.

2. Load your data using the other SQL files. As before, you can just copy &
paste the contents of that file into your SQL prompt; however, you might
instead want to use file redirection (see below).
    - Note: With some macOS terminals, copying & pasting the SQL file can cause
      errors. Instead, you should use the alternative file redirection
      technique below.
    - Whichever method you choose, it might take a few minutes


- Alternative way to load SQL:
    - As a more clever (and reliable) alternative to copy & paste, use
      file redirection to "pipe" the data directly from a file, as such:

        heroku pg:psql --app pure-crag-68 < cities.sql
        heroku pg:psql --app pure-crag-68 < states.sql
        heroku pg:psql --app pure-crag-68 < company_records.sql

    - Tips:
        - This should be done from your shell (that is, Bash or zsh), NOT Postgres prompt
        - Make sure you change pure-crag-68 to the name of your app
        - Ensure you're in the right directory, next to the relevant .sql files




Challenge 2:
--------------------------

Warm up: Practice the following SELECT statements. Can you explain in your own
words what data is being expressed by each of these?



    SELECT * FROM states;

    SELECT * FROM states WHERE population > 3000000;

    SELECT * FROM cities WHERE population > 1000000;

    SELECT * FROM cities WHERE name = 'Phoenix';

    SELECT * FROM cities WHERE latitude > 37.20 AND latitude < 38.19 AND
    longitude > -122.67 AND longitude < -121.72;

    SELECT * FROM company_records WHERE raised_amount > 100000000;

    -- Notice how columns can include table name to be extra precise:
    SELECT company_records.name
    FROM company_records
    WHERE
        company_records.employee_count > 100 AND
        company_records.seed_round = 'a';





Challenge 3:
--------------------------

Time to get practice with LEFT JOINing! The following SQL statements build on
the last SQL statement from Challenge 2.

Practice running the following SELECT statements on the state & company data
with increasingly complex WHERE and JOIN clauses, and analyze in your own words
what each is doing and why:


    SELECT company_records.name, states.name, states.population
    FROM company_records
    LEFT JOIN states
    ON
        company_records.state_id = states.id
    WHERE
        company_records.employee_count > 100 AND
        company_records.seed_round = 'a';


    SELECT company_records.name, states.name, states.population
    FROM company_records
    LEFT JOIN states
    ON
        company_records.state_id = states.id
    WHERE
        company_records.employee_count > 100 AND
        company_records.seed_round = 'a' AND
        states.population > 9000000;


    SELECT DISTINCT company_records.name, states.name, states.population
    FROM company_records
    INNER JOIN states
    ON
        company_records.state_id = states.id
    WHERE
        states.population < 2000000;



- Comprehension question: What happens if you change all of the above to INNER
  JOIN? Try running some of them this way. Did it do what you predicted?
  (See next challenge for answer)





Challenge 4:
--------------------------

So, LEFT & INNER JOIN behave the same in this situation, because there aren't
any states "missing" in the states table. Let's try the others.

Let's practice contrasting LEFT, RIGHT, OUTER, and INNER joins. Which other two
JOINs do you think might behave the same as each other?

Practice running the following SELECT statements on the state & company data
with increasingly complex WHERE and JOIN clauses, and analyze in your own words
what each is doing and why:


    SELECT DISTINCT company_records.name, states.name, states.population
    FROM company_records
    INNER JOIN states
    ON
        company_records.state_id = states.id
    WHERE
        states.population < 2000000;


    SELECT DISTINCT company_records.name, states.name, states.population
    FROM company_records
    FULL OUTER JOIN states
    ON
        company_records.state_id = states.id
    WHERE
        states.population < 2000000;


    SELECT DISTINCT company_records.name, states.name, states.population
    FROM company_records
    RIGHT JOIN states
    ON
        company_records.state_id = states.id
    WHERE
        states.population < 2000000;




Challenge 5:
--------------------------

Time to write your own queries from scratch! This time we'll be querying the
cities table, in addition to the other tables.

- Write a SELECT DISTINCT statement to get the name of a companies with more
  than 100 employees, and the city they were founded in, along with the
  population of that city...
    1. ...including companies that do not match with a city.
    2. ...excluding companies that do not match with a city.

- Write a SELECT DISTINCT statement to get the name of a companies with more
  than 100 employees, AND the city they were founded in, AND the name and
  population of the state they were founded, alphabetically ordered by city
  name.

- Write a SELECT DISTINCT statement to get only the name of companies (not any
  other information) founded in the San Francisco Bay Area
    - See the Challenge 2 select that uses latitude and longitude for hints
      SELECTs for hints


