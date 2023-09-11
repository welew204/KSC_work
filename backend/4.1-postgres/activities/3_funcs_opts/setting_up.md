Activity Introduction:

This activity is a continuation of the previous activity, covering more
advanced SQL functions and operations.

If you have just been doing the previous activity, then there is no need to
set-up. Otherwise, follow the instructions found in the previous activities
first two challenges in order to get going.

The previous instructions are copied below for your convenience:


------------------



# Step 1

1. Assuming you have already installed Heroku, either create a new Heroku app
to play around with, or re-use an existing app such as the one from last time:

    heroku apps      # see existing apps

    # If no existing apps with postgres you want to use, then create brand new
    heroku create    # create brand-new
    heroku addons:create heroku-postgresql:hobby-dev --app pure-crag-68

2. Connect to your database with the command-line client:

    heroku pg:psql --app pure-crag-68

NOTE: For the these commands, you will need to change "pure-crag-68" to the
similarly random name your app got when you created it.


# Step 2

This activity involves querying population data of the countries of the world
in 2016 and 2006.

1. Copy & paste in the commands from the included `population_data.sql` file.
This can be done by opening up that file in your editor, and simply copying and
pasting into your Postgres terminal. This might take a minute to insert all the
data.

2. Read the commands for comprehension. Do you understand the data that is
going into the database, and how the TABLE and INSERT causes this to happen?

NOTE: In most Linux terminals, copy & paste will work, but some students using
macOS terminals encountered glitches with copy & paste, causing syntax errors
and the INSERTs not to populate the database. In this case it's faster to load
your data using a `<` pipe as follows (replacing pure-crag-68 with your app):


    cd population_data
    heroku pg:psql --app pure-crag-68 < population_data.sql



# Step 3

Confirm you have successfully loaded the data by viewing it as such:


        SELECT * FROM popdata;

