COPY states (id, name, abbreviation, population)
FROM 'states.csv' DELIMITER ',' CSV HEADER;

COPY cities (name, population, latitude, longitude)
FROM 'cities.csv' DELIMITER ',' CSV HEADER;

COPY company_records (
    slug, name, employee_count, category, city,
    state_id, funded_date, raised_amount, currency, seed_round
)
FROM 'company_records.csv' DELIMITER ',' CSV HEADER;
