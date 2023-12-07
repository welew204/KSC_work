This guide assumes you set up a MongoDB Atlas database, as explained in the
React MERN Prototyping Starter guide below:

<https://github.com/kickstartcoding/react-mern-prototyping-starter/blob/master/mongodb_atlas_guide.md>


- It might look something like this:

    const MONGODB_URI = 'mongodb+srv://DB_USER:PASSWORD@cluster0-udki0.mongodb.net/test'
    const MONGODB_DATABASE = 'test';

- Except, `DB_USER` should be replaced with your database user, `PASSWORD`
  should be replaced with your password, `test` should be replaced with your
  database name. It's possible also that `cluster0-udki0.mongodb.net` will be
  replaced with the info from the MongoDB Atlas Guide.

- This is the same string available at the end of the MongoDB Atlas Guide for
  connecting your MERN backend.

- If the connection string has a '?' close to the end (like GET parameters),
  delete it any everything that follows it

- Hint: You might want to change the `MONGODB_DATABASE` variable to point the
  database you used for a previous activity, if you did not use
  `classactivity`.

- Hint: If you don't remember how to get back to the connection method, then do
  the following:

1. Log back into your MongoDB Atlas account
2. Click the `CONNECT` gray button underneath your "cluster" name.
3. Click a green button called `Choose a connection method`
4. Click the `Connect Your Application` button
5. Copy the `Connection String Only`

