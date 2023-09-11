
Challenge 2:
--------------------------


We can do that by running this SQL, either in one line as:

        CREATE TABLE users (id INT, username VARCHAR(300));


Or more often separated into multiple lines, as such:

        CREATE TABLE users (
            id INT,
            username VARCHAR(300)
        );



Challenge 3:
--------------------------



        DATABASE=> SELECT * from users;
         id |  username
        ----+-------------
          1 | janeqhacker
        (1 row)


        => INSERT INTO users (id, username) VALUES (2, 'admin');
        INSERT 0 1
        => INSERT INTO users (id, username) VALUES (3, 'dolanduck');
        INSERT 0 1
        => INSERT INTO users (id, username) VALUES (4, 'dril');
        INSERT 0 1


        => SELECT * FROM users;
         id |  username
        ----+-------------
          1 | janeqhacker
          2 | admin
          3 | dolanduck
          4 | dril
        (4 rows)


Challenge 4:
--------------------------

        => ALTER TABLE users ADD bio VARCHAR(255);

        => SELECT * FROM users;

         id |  username   | bio
        ----+-------------+-----
          1 | janeqhacker |
          2 | admin       |
          3 | dolanduck   |
          4 | dril        |
        (4 rows)



Challenge 5:
--------------------------



        => UPDATE users SET bio = 'v cool' WHERE id = 4;

        => SELECT * FROM users;

         id |  username   |  bio   
        ----+-------------+--------
          1 | janeqhacker | 
          2 | admin       | 
          3 | dolanduck   |   
          4 | dril        | v cool


