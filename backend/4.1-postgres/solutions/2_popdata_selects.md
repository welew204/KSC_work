# Challenge 3

Selecting data from database, first without any filtering, then just for
Bulgaria:

        =>         SELECT * FROM popdata;
        =>         SELECT * FROM popdata WHERE name = 'Bulgaria';
        name   | code | year |   population    
        ----------+------+------+-----------------
        Bulgaria | BGR  | 2006 | 7601022.0000000
        Bulgaria | BGR  | 2016 | 7127822.0000000
        (2 rows)


Getting only the "code" from teh database for Bulgaria but nothing else:

        =>         SELECT code FROM popdata WHERE name = 'Bulgaria';
        code 
        ------
        BGR
        BGR
        (2 rows)



Doing the same as above, but removing the duplicate entries from the data that
comes back:


        =>         SELECT DISTINCT code FROM popdata WHERE name = 'Bulgaria';
        code 
        ------
        BGR
        (1 row)



Getting info on the least populated countries:

        =>         SELECT * FROM popdata ORDER BY population LIMIT 5;
        name  | code | year |  population   
        --------+------+------+---------------
        Nauru  | NRU  | 2006 | 10101.0000000
        Tuvalu | TUV  | 2006 | 10137.0000000
        Tuvalu | TUV  | 2016 | 11097.0000000
        Nauru  | NRU  | 2016 | 13049.0000000
        Palau  | PLW  | 2006 | 20012.0000000
        (5 rows)




Same as above, but getting info on the top 5 most populous entries in the
popdata table:

        =>         SELECT * FROM popdata ORDER BY population DESC LIMIT 5;
            name      | code | year |     population     
        ---------------+------+------+--------------------
        China         | CHN  | 2016 | 1378665000.0000000
        India         | IND  | 2016 | 1324171354.0000000
        China         | CHN  | 2006 | 1311020000.0000000
        India         | IND  | 2006 | 1161977719.0000000
        United States | USA  | 2016 |  323127513.0000000
        (5 rows)




Now, using "offset 5" we skip over 5 entries, then by using "limit 5" we get
the next 5 entries (after having skipped 5), for the countries as ordered by
their population (in ascending order):



        =>         SELECT * FROM popdata ORDER BY population LIMIT 5 OFFSET 5;
                name           | code | year |  population   
        --------------------------+------+------+---------------
        Palau                    | PLW  | 2016 | 21503.0000000
        British Virgin Islands   | VGB  | 2006 | 23905.0000000
        Turks and Caicos Islands | TCA  | 2006 | 27642.0000000
        St. Martin (French part) | MAF  | 2006 | 28414.0000000
        San Marino               | SMR  | 2006 | 29614.0000000
        (5 rows)



Finally, in 2 lines, we get the 5-10 most populated countries in 2006:

        =>         SELECT * FROM popdata WHERE year = 2006
        ->         ORDER BY population DESC LIMIT 5 OFFSET 5;
                name        | code | year |    population     
        --------------------+------+------+-------------------
        Pakistan           | PAK  | 2006 | 157093993.0000000
        Bangladesh         | BGD  | 2006 | 145368004.0000000
        Russian Federation | RUS  | 2006 | 143049528.0000000
        Nigeria            | NGA  | 2006 | 142614094.0000000
        Japan              | JPN  | 2006 | 127854000.0000000
        (5 rows)





# Challenge 4

Now, we get information only on Bulgaria or Hungary:


        =>         SELECT * FROM popdata WHERE name = 'Bulgaria' OR name = 'Hungary';
        name   | code | year |    population    
        ----------+------+------+------------------
        Bulgaria | BGR  | 2006 |  7601022.0000000
        Bulgaria | BGR  | 2016 |  7127822.0000000
        Hungary  | HUN  | 2006 | 10071370.0000000
        Hungary  | HUN  | 2016 |  9817958.0000000
        (4 rows)


Now only Bulgaria, but in the year 2006, using AND:

        =>         SELECT * FROM popdata WHERE year = 2006 AND name = 'Bulgaria';
        name   | code | year |   population    
        ----------+------+------+-----------------
        Bulgaria | BGR  | 2006 | 7601022.0000000
        (1 row)



This one is tricky. It might seem similar to the previous ones, but it will in
fact return ALL data from 2006, and then also any data for Bulgaria, resulting
in LOTS of data being returned, and Bulgaria being listed extra:

        SELECT * FROM popdata WHERE year = 2006 OR name = 'Bulgaria';



Now we look for Bulgaria in 2006, or Hungary in any year. This is because of
order of operations, the "AND" comes before the "OR":


        =>         SELECT * FROM popdata WHERE year = 2006
        ->             AND name = 'Bulgaria' OR name = 'Hungary';
        name   | code | year |    population
        ----------+------+------+------------------
        Bulgaria | BGR  | 2006 |  7601022.0000000
        Hungary  | HUN  | 2006 | 10071370.0000000
        Hungary  | HUN  | 2016 |  9817958.0000000
        (3 rows)



Using parenthesis to override the default order of operations, we specify what
we intended with the previous one, that the OR should be grouped separate from
the AND. This results in getting information on Bulgaria OR Hungary, in the
year 2006:

        =>
        =>         SELECT * FROM popdata WHERE year = 2006
        ->             AND (name = 'Bulgaria' OR name = 'Hungary');
        name   | code | year |    population
        ----------+------+------+------------------
        Bulgaria | BGR  | 2006 |  7601022.0000000
        Hungary  | HUN  | 2006 | 10071370.0000000
        (2 rows)




Finally, using an IN clause with a list, we can do the same thing as above.
Under the hood, the database will likely end up doing roughly the same thing,
so there's likely no speed improvements or anything here, however the syntax is
often more convenient:

        =>         SELECT * FROM popdata WHERE year = 2006
        ->         AND name IN ('Bulgaria', 'Hungary');
        name   | code | year |    population
        ----------+------+------+------------------
        Bulgaria | BGR  | 2006 |  7601022.0000000
        Hungary  | HUN  | 2006 | 10071370.0000000
        (2 rows)



This query is getting more complicated -- here we are getting 2006 for Bulgaria
and 2016 for Hungary, using parenthesis to group the expressions:

        =>         SELECT * FROM popdata WHERE
        ->             (year = 2006 AND name = 'Bulgaria')
        ->             OR
        ->             (year = 2016 AND name = 'Hungary');
        name   | code | year |   population
        ----------+------+------+-----------------
        Bulgaria | BGR  | 2006 | 7601022.0000000
        Hungary  | HUN  | 2016 | 9817958.0000000
        (2 rows)



Now we use BETWEEN to select things that are alphabetically "sandwiched"
between the two values. Very useful for pagination:

        =>         SELECT * FROM popdata WHERE year = 2006
        ->             AND name BETWEEN 'Bulgaria' AND 'Cameroon';
            name     | code | year |    population
        --------------+------+------+------------------
        Bulgaria     | BGR  | 2006 |  7601022.0000000
        Burkina Faso | BFA  | 2006 | 13829177.0000000
        Burundi      | BDI  | 2006 |  7675338.0000000
        Cabo Verde   | CPV  | 2006 |   480795.0000000
        Cambodia     | KHM  | 2006 | 13474489.0000000
        Cameroon     | CMR  | 2006 | 17899562.0000000
        (6 rows)



Another example of BETWEEN. In this example it shows that the values don't have
to be values in the database, they can also just be letters. This is useful if
you are making an encyclopedia-style index to browse by first letter:


        =>         SELECT * FROM popdata WHERE year = 2006
        ->             AND name BETWEEN 'U' AND 'Y';
                name          | code | year |    population
        -----------------------+------+------+-------------------
        Uganda                | UGA  | 2006 |  29550662.0000000
        Ukraine               | UKR  | 2006 |  46787750.0000000
        United Arab Emirates  | ARE  | 2006 |   5242032.0000000
        United Kingdom        | GBR  | 2006 |  60846820.0000000
        United States         | USA  | 2006 | 298379912.0000000
        Uruguay               | URY  | 2006 |   3331043.0000000
        Uzbekistan            | UZB  | 2006 |  26488250.0000000
        Vanuatu               | VUT  | 2006 |    214634.0000000
        Venezuela, RB         | VEN  | 2006 |  27239168.0000000
        Vietnam               | VNM  | 2006 |  83311200.0000000
        Virgin Islands (U.S.) | VIR  | 2006 |    107700.0000000
        West Bank and Gaza    | PSE  | 2006 |   3406334.0000000





# Challenge 5


1. Write SQL code to get all information on Uruguay.


        SELECT * FROM popdata WHERE name = 'Uruguay';


2. Write SQL code to get the population of South Africa in 2006.


        SELECT population FROM popdata
        WHERE name = 'South Africa'
        AND year = 2006;



3. Write SQL code to get only the names of all countries with more than 10
million people in 2016.


        SELECT name FROM popdata
        WHERE population > 1000000
        AND year = 2006;



4. Write SQL code to get only the names of countries that have between 50
million and 100 million people in 2016, and order them alphabetically by them
by country code.


        SELECT DISTINCT code FROM popdata
        WHERE population > 50000000
        AND population < 100000000
        AND year = 2016;


