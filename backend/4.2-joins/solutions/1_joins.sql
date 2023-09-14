-- All of the challenges are solved here in comments.

-- Challenge 1

-- 
-- List of relations
-- Schema |          Name          |   Type   |     Owner      
-- --------+------------------------+----------+----------------
-- public | cities                 | table    | nujpfwggqgeirz
-- public | cities_id_seq          | sequence | nujpfwggqgeirz
-- public | company_records        | table    | nujpfwggqgeirz
-- public | company_records_id_seq | sequence | nujpfwggqgeirz
-- public | states                 | table    | nujpfwggqgeirz



-- Challenge 2

-- Get all data from states
SELECT * FROM states;

-- Get higher population states (greater than 3 million)
SELECT * FROM states WHERE population > 3000000;

-- Get higher population cities (greater than 1 million)
SELECT * FROM cities WHERE population > 1000000;

-- Get all cities named Phoenix
SELECT * FROM cities WHERE name = 'Phoenix';

-- Get all cities within a bounding box around the "San Francisco Bay Area"
-- in Northern California
SELECT * FROM cities WHERE latitude > 37.20 AND latitude < 38.19 AND
longitude > -122.67 AND longitude < -121.72;

-- Get all the companies that raised more than 100m
SELECT * FROM company_records WHERE raised_amount > 100000000;


-- Notice how columns can include table name to be extra precise:
SELECT company_records.name
FROM company_records
WHERE
    company_records.employee_count > 100 AND
    company_records.seed_round = 'a';



------------------------------------------------------------------------------




-- Challenge 5:

-- Write a SELECT DISTINCT statement to get the name of a companies with more
-- than 100 employees, and the city they were founded in, along with the
-- population of that city.

-- 1. ...including companies that do not match with a city.
-- Uses LEFT JOIN
SELECT DISTINCT company_records.name, cities.name, cities.population
FROM company_records
LEFT JOIN cities
ON
    company_records.city = cities.name
WHERE
    company_records.employee_count > 100;


-- 2. ...excluding companies that do not match with a city.
-- Uses INNER JOIN
SELECT DISTINCT company_records.name, cities.name, cities.population
FROM company_records
INNER JOIN cities
ON
    company_records.city = cities.name
WHERE
    company_records.employee_count > 100;




-- Write a SELECT DISTINCT statement to get the name of a companies with more
-- than 100 employees, and the city they were founded in, AND the name and
-- population of the state they were founded in, alphabetically ordered by
-- city name
-- ...alphabetically ordered by city name.
SELECT DISTINCT
    company_records.name,
    cities.name,
    cities.population,
    states.name,
    states.population
FROM company_records
INNER JOIN cities
ON
    company_records.city = cities.name
INNER JOIN states
ON
    company_records.state_id = states.id
WHERE
    company_records.employee_count > 100
ORDER BY
    cities.name;


-- Write a SELECT DISTINCT statement to get only the name of companies (not any
-- other information) founded in the San Francisco Bay Area
SELECT DISTINCT company_records.name
FROM company_records
INNER JOIN cities
ON
    company_records.city = cities.name
WHERE
    cities.latitude > 37.20 AND cities.latitude < 38.19 AND
    cities.longitude > -122.67 AND cities.longitude < -121.72;








--Bonus Challenge
--------------------------



-- This gets all the cities in the SF Bay Area, and orders them by the total
-- number of companies founded in them, displaying both that and population
SELECT
    cities.name,
    MAX(cities.population) AS city_population,
    COUNT(DISTINCT company_records.name) AS total_companies
FROM company_records
INNER JOIN cities ON company_records.city = cities.name
WHERE
    cities.latitude > 37.20 AND cities.latitude < 38.19 AND
    cities.longitude > -122.67 AND cities.longitude < -121.72
GROUP BY cities.name
ORDER BY total_companies DESC;



-- Get cities, states, and the total number of companies founded for each city
-- (with at least 1 company)
SELECT
    cities.name,
    MAX(cities.population) AS city_population,
    MAX(states.name) AS state,
    COUNT(DISTINCT company_records.name) AS total_companies
FROM company_records
INNER JOIN cities ON company_records.city = cities.name
INNER JOIN states ON company_records.state_id = states.id
GROUP BY cities.name
ORDER BY total_companies DESC;



SELECT
    MAX(states.name) AS state,
    COUNT(DISTINCT cities.name) AS total_cities,
    SUM(company_records.raised_amount) AS total_money_raised,
    COUNT(DISTINCT company_records.name) AS total_companies
FROM company_records
INNER JOIN cities ON company_records.city = cities.name
INNER JOIN states ON company_records.state_id = states.id
GROUP BY states.name
ORDER BY total_money_raised DESC;



