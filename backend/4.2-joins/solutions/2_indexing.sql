-- Challenge 1:

EXPLAIN SELECT name, funded_date, raised_amount
FROM company_records
WHERE name = 'Facebook';
--                            QUERY PLAN                            
-- -----------------------------------------------------------------
--  Seq Scan on company_records  (cost=0.00..25.10 rows=7 width=22)
--    Filter: ((name)::text = 'Facebook'::text)
-- (2 rows)


EXPLAIN ANALYZE SELECT name, funded_date, raised_amount
FROM company_records
WHERE name = 'Facebook';
--                                                 QUERY PLAN                                                 
-- -----------------------------------------------------------------------------------------------------------
--  Seq Scan on company_records  (cost=0.00..25.10 rows=7 width=22) (actual time=0.030..0.214 rows=7 loops=1)
--    Filter: ((name)::text = 'Facebook'::text)
--    Rows Removed by Filter: 1449
--  Planning Time: 0.042 ms
--  Execution Time: 0.226 ms
-- (5 rows)

-- CREATE INDEX name_index ON company_records (name);
-- CREATE INDEX

EXPLAIN SELECT name, funded_date, raised_amount
FROM company_records
WHERE name = 'Facebook';

--                                QUERY PLAN                                
-- -------------------------------------------------------------------------
--  Bitmap Heap Scan on company_records  (cost=2.07..10.80 rows=7 width=22)
--    Recheck Cond: ((name)::text = 'Facebook'::text)
--    ->  Bitmap Index Scan on name_index  (cost=0.00..2.07 rows=7 width=0)
--          Index Cond: ((name)::text = 'Facebook'::text)
-- (4 rows)
-- 

EXPLAIN ANALYZE SELECT name, funded_date, raised_amount
FROM company_records
WHERE name = 'Facebook';
--                                                     QUERY PLAN                                                     
-- -------------------------------------------------------------------------------------------------------------------
--  Bitmap Heap Scan on company_records  (cost=2.07..10.80 rows=7 width=22) (actual time=0.071..0.074 rows=7 loops=1)
--    Recheck Cond: ((name)::text = 'Facebook'::text)
--    Heap Blocks: exact=1
--    ->  Bitmap Index Scan on name_index  (cost=0.00..2.07 rows=7 width=0) (actual time=0.062..0.062 rows=7 loops=1)
--          Index Cond: ((name)::text = 'Facebook'::text)
--  Planning Time: 0.112 ms
--  Execution Time: 0.103 ms
-- (7 rows)





-- - Reflection question:
--     - What different types of "scans" did you encounter after running these
--       commands?
--             ANSWER: You probably encounter Seq Scan, B Tree, and/or Heap Scan
--     - Did adding the index improve the speed? Why or why not?
--             ANSWER:
--               - If it did improve speed, the obvious reason is because it
--                 could use the index to speed up the look-up
--               - Sometimes it might NOT improve speed. This is because the
--                 data size is so small, it's so fast to begin with, and just
--                 random fluctuations with the DB / computer / etc can make
--                 a bigger difference. It might only make sense >10000 rows



---------------------------------------



-- Challenge 2:

EXPLAIN ANALYZE SELECT * FROM cities WHERE name = 'Graham';
--------------------------------------------------------------------------------------------------
-- Seq Scan on cities  (cost=0.00..38.30 rows=1 width=34) (actual time=0.272..0.407 rows=2 loops=1)
--    Filter: ((name)::text = 'Graham'::text)
--    Rows Removed by Filter: 3226
-- Planning time: 0.228 ms
-- Execution time: 0.429 ms
-- (5 rows)

-- This means that it took ~0.6 ms total to run, and that it did a
-- "sequential scan" to find the necessary data






-- Challenge 3:

CREATE INDEX name_index ON cities (name);

EXPLAIN ANALYZE SELECT * FROM cities WHERE name = 'Graham';
-- Index Scan using name_index on cities  (cost=0.06..4.06 rows=1 width=34) (actual time=0.029..0.036 rows=2 loops=1)
-- Index Cond: ((name)::text = 'Graham'::text)
-- Planning time: 0.130 ms
-- Execution time: 0.074 ms
-- (4 rows)

-- This means that it took ~0.2 ms total to run, and that it did a
-- "Index Scan" to find the necessary data. The execution itself was nearly an
-- order of magnitude faster.




-- Advanced Bonus Challenges

-- Seq scan is linear
-- Index is using a "B-Tree" which permits binary search


-- Advanced Challenge

-- 1. ~0.5 second

-- 2. ~2000 users or queries per second (at most, just solely based on this)

-- 3. In real life, the datasets are usually larger and more complex, which
-- means for 300,000 items in the database it would fully crash the system with
-- only 20 simultaneous users

