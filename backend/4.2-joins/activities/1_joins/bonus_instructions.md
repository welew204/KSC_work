Start with `instructions.md`


Bonus Challenge
--------------------------

More SQL to get practice with!  Practice running the following SELECT
statements on the city & company data with increasingly complex functions, and
analyze in your own words what each is doing and why:


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



