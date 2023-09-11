Challenge 1:
--------------------------

For this first challenge, your goal is to install any necessary software you
need, then create a database on Heroku, and connect to it.

1. Installation (only need to do once)
    * Ubuntu Linux:
        `sudo apt-get install postgresql-client`
    * macOS:
        `brew install postgres`

2. Creating a new Heroku Postgres Database (need once per database):

        # Create a new Heroku app to play around with:
        heroku create

        # Provision for that app a new Postgres Database (free "hobby" tier):
        heroku addons:create heroku-postgresql:hobby-dev --app pure-crag-68

3. Connect to your database with the commandline client:

        heroku pg:psql --app pure-crag-68

NOTE: For the these last commands, you will need to change "pure-crag-68" to
the similarly random name your app got when you created it.



Challenge 2:
--------------------------

- Background: SQL databases store their data in "tables". To store data, we'll
  need to CREATE a table, with VARCHAR (string) and INT (integer) columns.

- SQL reminder: Remember to end your statements with semicolons! It's easy to
  forget, and Postgres will simply think you are continuing your previous
  statement and keep on accepting input. (Look for the "=>" prompt!)

Time to get SQLing! Once you are logged into your Postgres DB, it's time to
make your first table.

1. Start by running the `\d` command to see existing tables (aka relations). If
you are just starting, there won't be much to see:


    \d


2. Now, your goal is to make a table of users. Run the SQL command necessary to
make a user table with an "id" field (type "INT", an integer) and a "username"
field (type "VARCHAR(100)", a string up to 100 length). Either use your
cheatsheet, or check out `hints.md` for the syntax:


             users          
        | ---- | ------------- |
        | id   | username      |


3. Once you have made the "users" table, once again use `\d` to see it. Also,
get practice using `\d users` to see details on it.

    \d
    \d users






Challenge 3:
--------------------------

- Background: Using INSERT we can add rows to tables. Using SELECT we can check
  what's in a table.

For the second challenge, it's time to get some practice with INSERTs.  Add the
data, and practice querying it.

1. To INSERT one row:

        INSERT INTO users (id, username) VALUES (1, 'janeqhacker');


2. To check our work:

        SELECT * FROM users;

3. Rinse and repeat, for all of the following data:


|      | users         |
| ---- | ------------- |
| id   | username      |
|  1   |  janeqhacker  |
|  2   |  admin        |
|  3   |  dolanduck    |
|  4   |  dril         |



Challenge 4:
--------------------------

- Background: ALTER modifies existing tables, allowing the adding of removing
  of columns, or modification of column properties.

1. Here's an example of ALTER syntax:

        ALTER TABLE customers ADD discount INT;

2. Using this example, add a "bio" column to "users" (a VARCHAR of length 255)

3. Confirm you added the column using either `\d` or `SELECT * FROM users;`



Challenge 5:
--------------------------

- Background: UPDATE allows altering existing rows.

1. Here's an example of UPDATE syntax:

        UPDATE customers SET discount = 10 WHERE name = 'joaquin';

2. Using this example, give one or more of the users "bio" text of your choice.

3. Confirm you added the data with `SELECT * FROM users;`




Challenge 6:
--------------------------

- Background: INSERT supports adding multiple rows at once. Apostrophes are
  escaped by doubling them.

More SQL practice. Try creating a new table called "tweets", and inserting the
following data. For extra practice, try doing more than one row at at once with
a single INSERT by comma separating the parenthesis of the values.

|      | tweets   |                    |
| ---- | -------- | ------------------ |
| id   | user_id  | text               |
|  1   |  1       |  h4ck th3 pl4n37   |
|  2   |  4       |  no                |
|  3   |  3       |  hi i'm dolan      |
|  4   |  3       |  gooby pls         |


- HINT: Having trouble adding text with an apostrophe? In Postgres SQL syntax,
  use "double quotes" to include a single quote in a string, e.g.: ''




Bonus Challenge
--------------------------

Get more CREATE and INSERT practice by recreating the following data:


|      | accounts      |
| ----:|---------------|
| id   | username      |
|  1   |  morticia     |
|  2   |  gomez        |
|  3   |  unc_fester   |
|  4   |  wednesday    |


|      | photos   |                    |
| ----:|---------:|--------------------|
| id   | user_id  | photo              |
|  1   |  1       |  /ph/fa29aec3.jpg  |
|  2   |  3       |  /ph/3aec49ef.jpg  |
|  3   |  4       |  /ph/63dd3fc0.jpg  |
|  4   |  3       |  /ph/b3759be4.jpg  |


|      | tags       |            |
| ----:|-----------:| ---------- |
| id   | photo_id   | text       |
|  1   |  1         |  nofilter  |
|  2   |  1         |  deadtome  |
|  3   |  3         |  nofilter  |

