Step 1:
--------------------------

In this activity we will be dealing with much bigger data-sets.

Connect to your database with the commandline client, or re-use your old
connection from previous activities (replacing pure-crag-68 with your app
name):

    heroku pg:psql --app pure-crag-68



Step 2:
--------------------------

NOTE: Loading the data may take a while! Use this time to read up on Challenge
3 and beyond (or even for project work).

1. Setup your tables by just copying & pasting the "schema.sql" file into
your Postgres prompt. This can be done by just opening up that file in your
text editor and copying it over.
    - To confirm they were created, use the \d command to describe the tables.

2. Load your data using the other SQL files. As before, you can just copy &
paste the contents of that file into your SQL prompt; however, you might
instead want to use file redirection (see below).
    - Note: With some macOS terminals, copying & pasting the SQL file can cause
      errors. Instead, you should use the alternative file redirection
      technique below.
    - Whichever method you choose, it might take a few minutes


- Alternative way to load SQL:
    - As a more clever (and reliable) alternative to copy & paste, use
      file redirection to "pipe" the data directly from a file, as such:

        heroku pg:psql --app pure-crag-68 < cities.sql
        heroku pg:psql --app pure-crag-68 < states.sql
        heroku pg:psql --app pure-crag-68 < company_records.sql

    - Tips:
        - This should be done from your shell (that is, Bash or zsh), NOT Postgres prompt
        - Make sure you change pure-crag-68 to the name of your app
        - Ensure you're in the right directory, next to the relevant .sql files



