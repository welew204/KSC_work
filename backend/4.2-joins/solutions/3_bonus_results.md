Example results for the Postgis activity:


        => 
        =>         SELECT ST_MakeLine(
        (>             ARRAY[
        (>                 ST_MakePoint(37.8044557, -122.2713563),
        (>                 ST_MakePoint(37.7792768, -122.4192704),
        (>                 ST_MakePoint(37.3438502, -121.8831349)
        (>             ]
        (>         );
                                                            st_makeline                                                     
        --------------------------------------------------------------------------------------------------------------------
        010200000003000000574A8567F8E642401184D0E65D915EC009449957BFE34240930B8453D59A5EC08DDC894803AC4240335D3E4885785EC0
        (1 row)

        => 
        =>         CREATE TABLE test_roads (
        (>             road_name VARCHAR(127),
        (>             linestring GEOMETRY
        (>         );
        CREATE TABLE
        => 
        =>         INSERT INTO test_roads (road_name, linestring)
        ->         VALUES (
        (>             'The Great SF Bay Highway',
        (>             ST_MakeLine(ARRAY[
        (>                 ST_MakePoint(37.8044557, -122.2713563),
        (>                 ST_MakePoint(37.7792768, -122.4192704),
        (>                 ST_MakePoint(37.3438502, -121.8831349)])
        (>         );
        INSERT 0 1
        =>         INSERT INTO test_roads (road_name, linestring)
        ->         VALUES (
        (>             'The Chicagoland Express',
        (>             ST_MakeLine(ARRAY[
        (>                 ST_MakePoint(41.8755546,-87.6244212),
        (>                 ST_MakePoint(43.0349931,-87.922497),
        (>                 ST_MakePoint(42.2713945,-89.093966)])
        (>         );
        INSERT 0 1
        =>         SELECT
        ->             road_name,
        ->             ST_Length(linestring) as length
        ->         FROM test_roads;
                road_name         |       length       
        --------------------------+--------------------
        The Great SF Bay Highway | 0.8407209390288826
        The Chicagoland Express  | 2.5955053033322892
        (2 rows)



Final table results:

                road_name         |                                                     linestring                                                     
        --------------------------+--------------------------------------------------------------------------------------------------------------------
        The Great SF Bay Highway | 010200000003000000574A8567F8E642401184D0E65D915EC009449957BFE34240930B8453D59A5EC08DDC894803AC4240335D3E4885785EC0
        The Chicagoland Express  | 010200000003000000626E522C12F04440763B5684F6E755C0F70A66A77A8445401F6ADB300AFB55C03AE8120EBD224540E63BF889034656C0


                   name            |   pop   |        road_name         
        ---------------------------+---------+--------------------------
        Chicago                   | 2705.0k | The Chicagoland Express
        San Jose                  | 971.0k  | The Great SF Bay Highway
        San Francisco             | 816.0k  | The Great SF Bay Highway
        Milwaukee                 | 597.0k  | The Chicagoland Express
        Oakland                   | 396.0k  | The Great SF Bay Highway
        Fremont                   | 217.0k  | The Great SF Bay Highway
        Rockford                  | 151.0k  | The Chicagoland Express
        Hayward                   | 147.0k  | The Great SF Bay Highway
        Sunnyvale                 | 143.0k  | The Great SF Bay Highway
        Santa Clara               | 118.0k  | The Great SF Bay Highway
        Elgin                     | 109.0k  | The Chicagoland Express
        Kenosha                   | 99.0k   | The Chicagoland Express
        San Mateo                 | 98.0k   | The Great SF Bay Highway
        Waukegan                  | 88.0k   | The Chicagoland Express
        San Leandro               | 85.0k   | The Great SF Bay Highway
        Racine                    | 78.0k   | The Chicagoland Express
        Lake Forest               | 78.0k   | The Chicagoland Express
        Redwood City              | 78.0k   | The Great SF Bay Highway
        Mountain View             | 75.0k   | The Great SF Bay Highway
        Evanston                  | 74.0k   | The Chicagoland Express
        Alameda                   | 74.0k   | The Great SF Bay Highway
        San Ramon                 | 73.0k   | The Great SF Bay Highway
        Waukesha                  | 70.0k   | The Chicagoland Express
        Union City                | 70.0k   | The Great SF Bay Highway
        Union City                | 67.0k   | The Great SF Bay Highway
        Milpitas                  | 67.0k   | The Great SF Bay Highway
        St. Charles               | 66.0k   | The Chicagoland Express
        Palo Alto                 | 65.0k   | The Great SF Bay Highway
        South San Francisco       | 64.0k   | The Great SF Bay Highway
        Janesville                | 63.0k   | The Chicagoland Express
        West Allis                | 60.0k   | The Chicagoland Express
        Des Plaines               | 58.0k   | The Chicagoland Express
        Bartlett                  | 57.0k   | The Chicagoland Express

