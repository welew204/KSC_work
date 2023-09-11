-- Challenge 3:
-- --------------------------

-- 1

SELECT ROUND(SUM(population) / 1000) AS total_k_2016
FROM popdata WHERE year = 2016;


-- 2

SELECT
    ROUND(AVG(population) / 1000 / 1000) AS average_population_mil,
    ROUND(MAX(population) / 1000 / 1000) AS most_populous_mil
FROM popdata WHERE year = 2016;


-- 3

SELECT ROUND(STDDEV(population) / 1000 / 1000)
FROM popdata WHERE year = 2016;



-- Challenge 4:
-- --------------------------

-- 1

SELECT year, ROUND(SUM(population) / 1000) AS total_k
FROM popdata GROUP BY year;


-- 2

SELECT
    year,
    ROUND(AVG(population) / 1000 / 1000) AS average_population_mil,
    ROUND(MAX(population) / 1000 / 1000) AS most_populous_mil
FROM popdata GROUP BY year;


-- 3

SELECT year, ROUND(STDDEV(population) / 1000 / 1000) as standarddev
FROM popdata GROUP BY year;






-- Challenge 5:
-- --------------------------


SELECT name,
    ROUND(AVG(population) / 1000 / 1000, 2) AS averagepop
FROM popdata
GROUP BY name
ORDER BY averagepop DESC;





-- Advanced Bonus Challenge
-- --------------------------


-- Highest to lowest growth
SELECT
    (pop2016.population - pop2006.population)
    AS growth, pop2016.name
FROM
    popdata pop2016
INNER JOIN
    popdata pop2006
ON pop2016.code = pop2006.code
WHERE pop2016.year = 2016
AND pop2006.year = 2006
ORDER BY growth DESC;


-- Growth as percentage
SELECT
    round((pop2016.population - pop2006.population) / pop2006.population * 100, 1)
    AS growth_percentage, pop2016.name
FROM
    popdata pop2016
INNER JOIN
    popdata pop2006
ON pop2016.code = pop2006.code
WHERE pop2016.year = 2016
AND pop2006.year = 2006
ORDER BY growth_percentage DESC;

