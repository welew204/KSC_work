Start with instructions.md


Bonus Challenge: Postgis
--------------------------

- Background: Up until now, we've been using standard SQL to query for "boxes"
  of locations based on longitude and latitude. This technique only supports
  rectangles. Also, we've been using Postgres's mighty distance `<->` operator,
  which works great in limited circumstances, but real geographic distances are
  actually a lot more complicated to compute (E.g. it won't handle the
  international dateline). If you want a custom shape, or true, correct
  handling of GIS data, or distance-based queries such as "give me the 20
  nearest coffee shops along this route" you'll need to use the Postgres add-on
  "Postgis".

Extensions are enabled with the oddly named `CREATE EXTENSION` command. Start
by enabling the "Postgis" extension:

        CREATE EXTENSION Postgis;

Now, let's do something complicated: We'll make a "Line String", a geographic
type that is used for storing the layout of roads on maps. We'll make an
"imaginary" road that connects the city centers of the largest cities of the SF
Bay Area (San Francisco, Oakland, and San Jose):


        SELECT ST_MakeLine(
            ARRAY[
                ST_MakePoint(37.8044557, -122.2713563),
                ST_MakePoint(37.7792768, -122.4192704),
                ST_MakePoint(37.3438502, -121.8831349)
            ]
        );


See that messy output? That's the "Line String" we made. However, this didn't
save the output, it just showed the result. Let's create a table for our roads:


        CREATE TABLE test_roads (
            road_name VARCHAR(127),
            linestring GEOMETRY
        );



Now let's add two roads: This imaginary California road, along with another
imaginary road that connects several cities near Chicago:


        INSERT INTO test_roads (road_name, linestring)
        VALUES (
            'The Great SF Bay Highway',
            ST_MakeLine(ARRAY[
                ST_MakePoint(37.8044557, -122.2713563),
                ST_MakePoint(37.7792768, -122.4192704),
                ST_MakePoint(37.3438502, -121.8831349)])
        );

        INSERT INTO test_roads (road_name, linestring)
        VALUES (
            'The Chicagoland Express',
            ST_MakeLine(ARRAY[
                ST_MakePoint(41.8755546,-87.6244212),
                ST_MakePoint(43.0349931,-87.922497),
                ST_MakePoint(42.2713945,-89.093966)])
        );



Now, let's retrieve the "roads" from the database, and examine the total length
(in fractions of latitude / longitude degrees):

        SELECT
            road_name,
            ST_Length(linestring) as length
        FROM test_roads;


Let's try doing another thing with our "roads". We'll see which cities are
nearby them, or more specifically, within "their bounding box". Postgis uses
the overlap operator (`&&`) to do this:

        SELECT
            cities.name,
            ROUND(cities.population / 1000, 1) || 'k' as pop,
            test_roads.road_name
        FROM test_roads
        INNER JOIN cities
        ON
            ST_Point(cities.latitude, cities.longitude) && test_roads.linestring
        ORDER BY cities.population DESC;


This final query shows us the name cities and population (in thousands) of the
cities contained within each of these "road" networks, in order of population.

Summary: These geometry-based queries are useful: You can use this sort of
query to find stores, people, homes, etc in any arbitrary shape. Combining this
sort of query with a lot more other Postgis features is how applications such
as Google Maps might be implemented.  This only barely scratches the surface of
what Postgres / Postgis can do. Hopefully this challenge gave you an idea of
what goes into geometric / geographic databases, and how mapping applications
might be built!






Bonus Challenge: Signalling
------------------------------

- Postgres supports "signalling" between database connections. While not
  directly related to storing data, or directly useful to database users, this
  is used in more advanced server set-ups to build something called a "Job
  queue" system.

If you want to play around with it, try the following:

1. In one terminal, run:

    LISTEN mytestchannel;

2. In another Postgres terminal on the same database, run:

    NOTIFY mytestchannel;

3. Back in the first terminal, run ANY command (a "no-op" command you might try
would be `SELECT True;`, or even just a semicolon by itself `;`)

It should say something like:

        Asynchronous notification "mytestchannel" received from server process
        with PID 22460.



So, this is a "bonus challenge" since it's not directly useful as is. The main
use of this is for building "job queues", where multiple machines communicate
with each other in order to maintain long-running processes, such as converting
video formats or other media (converting uploaded video can take hours).  All
uses of this are fairly advanced, but perhaps interesting to think about. A
library that uses it for this is here:

- <https://github.com/gavinwahl/django-postgres-queue>


