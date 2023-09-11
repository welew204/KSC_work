Don't start here: Start in instructions.md.



# Introduction

Background: "Subqueries" are a feature of SQL that lets you execute one query
and use its results to filter in another query. These queries can be both on
the same table, or more often spanning more than one table.

Let's get practice with subqueries. The best way to understand a subquery is
with an example. We have another (very tiny) dataset to practice this,
consisting of half (A-D) of the 2018 FIFA World Cup groups:

- Group A. Uruguay. Russia. Saudi Arabia. Egypt.
- Group B. Spain. Portugal. IR Iran. Morocco.
- Group C. France. Denmark. Peru. Australia.
- Group D. Croatia. Argentina. Nigeria. Iceland.


# Bonus Challenges

1. Paste in the following code to create & populate a new table:



        DROP TABLE IF EXISTS worldcup;
        CREATE TABLE worldcup (
            country_code VARCHAR(3) NOT NULL,
            group_letter VARCHAR(1) NOT NULL
        );

        INSERT INTO worldcup (country_code, group_letter)
        VALUES
            ('URY', 'A'), ('RUS', 'A'), ('SAU', 'A'), ('EGY', 'A'),
            ('ESP', 'B'), ('PRT', 'B'), ('IRN', 'B'), ('MAR', 'B'),
            ('FRA', 'C'), ('DNK', 'C'), ('PER', 'C'), ('AUS', 'C'),
            ('HRV', 'D'), ('ARG', 'D'), ('NGA', 'D'), ('ISL', 'D');



2. Now, practice doing the following SQL queries that include "subqueries",
getting data from the "popdata" table based on the countries presence (or lack
thereof) in the "worldcup" table:


        SELECT * FROM popdata WHERE YEAR = 2016 AND
            code IN (SELECT country_code FROM worldcup);

        SELECT * FROM popdata WHERE YEAR = 2016 AND
            code IN (
                SELECT country_code FROM worldcup
                WHERE group_letter = 'B'
            );



3. Now, practice going "the other way" -- find data in "worldcup" based on
subqueries coming from population data:


        SELECT * FROM worldcup WHERE
            country_code IN (
                SELECT code FROM popdata WHERE year = 2016
                ORDER BY population DESC LIMIT 10
            );

        SELECT * FROM worldcup WHERE
            country_code IN (
                SELECT code FROM popdata WHERE year = 2016
                AND population < 10000000
            );


4. Have more time, and want more practice? Research use of ANY and ALL. These
are very similar to IN, except even more flexible when used with subqueries.


