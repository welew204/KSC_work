-- Creates a table to hold all states
CREATE TABLE states (
    id INTEGER PRIMARY KEY,
    name VARCHAR(32) NOT NULL,
    abbreviation VARCHAR(2) NOT NULL,
    population INTEGER NOT NULL
);

-- Creates a table to hold all cities, with an auto-generated ID field
CREATE TABLE cities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    population INTEGER NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
);

-- Creates a table to hold all the company records, with an auto-generated ID
-- field, and a state_id that references the states table
CREATE TABLE company_records (
    id SERIAL PRIMARY KEY,
    slug VARCHAR(64),
    name VARCHAR(64) NOT NULL,
    employee_count INTEGER,
    category VARCHAR(32),
    city VARCHAR(32),
    state_id INTEGER REFERENCES states (id) NOT NULL,
    funded_date VARCHAR(32),
    raised_amount INTEGER,
    currency VARCHAR(6),
    seed_round VARCHAR(32)
);

