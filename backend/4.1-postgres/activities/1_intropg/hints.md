General tips:

- Getting confused? Remember Ctrl+C to stop whatever command you are typing.

- Still confused? The psql prompt often ends with something like
  "::DATABASE=>". Look closely at your prompt. Do you see something else there,
  such as "->" or "'>" or "(>"? If you see ANYTHING other than "=>", that means
  Postgres thinks you are still typing out a command from before. This means
  you probably forgot to close a parenthesis, close a quote, or most likely,
  forgot a semicolon. Either finish your previous command (e.g., type a ;), or
  better yet, just Ctrl+C and start over.

- Finding the interface frustrating? Consider typing in your text editor and
  just copying commands over. That's often way easier!  Plus, you can get
  syntax highlighting if you set the filetype to be SQL.

- Troubleshooting: Are you getting an error like this when you use \d? If so,
  it means your Postgres version might be old. It's probably ignitable, if it's
  not too annoying.


        ERROR:  column c.relhasoids does not exist
        LINE 1: ...riggers, c.relrowsecurity, c.relforcerowsecurity, c.relhasoi...




Challenge 2 Hints
--------------------------


We can do that by running this SQL, either in one line as:

        CREATE TABLE users (id INT, username VARCHAR(300));

Or more often separated into multiple lines, as such:

        CREATE TABLE users (
            id INT,
            username VARCHAR(300)
        );


If done correctly, you should see something like:


                    List of relations
        Schema |   Name   | Type  |     Owner
        --------+----------+-------+----------------
        public | users    | table | xlncgabjtgkfrj
        (1 row)

You can also try out `SELECT * FROM users;`


