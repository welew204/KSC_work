These challenges (bar the "Extra Challenges" at the bottom) require no new
features, simply familiarizing oneself with the code presented.

Challenge 1:
-------------------

1. Get this code running! This time feel free to reuse the previous
virtualenv shell.

2. Examine (without change), the new "models.py" file. Compare it to the
previous structure of the dogs. Can you explain why we have our Model stored
like this?
>> oooo it's a Python class! Inheriting from a django class 'models.Model', 
with each field/key in the item built as CharField or IntField (so defining the type of data to be stored)

3. Do the thing you do with new projects: Add a print to every single
view, to better explore and understand the code.


Challenge 2:
-------------------

Install "SQLite Browser", a free software, cross-platform tool
for editing SQLite databases.

- Ubuntu Linux:
    - Install via CLI:
        - sudo apt install sqlitebrowser
    - ALTERNATIVELY, install via GUI:
        - Go to the Software Center, search for SQLite
        - Install the software entitled: "DB Browser for SQLite"
- macOS:
    - Go to the DB Browser website: https://sqlitebrowser.org/
    - Download & install the Mac .dmg file



Challenge 3:
-------------------

- Practice adding dogs via the website, and seeing the results in the DB
  Browser.

- Tip: You'll have to hit the "refresh" button to see the result



Challenge 4:
-------------------

- Now, try editing dogs in the DB Browser, and see the change in the browser.
  Only edit name for now.

- This is trickier: Make sure you both "Apply" each column change, AND save
  ("commit") the DB in general.

- Warning: SQL Browser doesn't try to "correct" or fix the data you enter!
  Editing data like this "in real life" is very discouraged. If you enter
  certain garbage data, you can make Django mad and refuse to read it.


Extra Challenges
----------------

No solutions for these, just some suggested further early research into Models
and QuerySets as time permits. We'll be covering this in depth later, but it
doesn't hurt to get in a sneak peak:

- https://docs.djangoproject.com/en/2.1/ref/models/querysets/

- Look up the various methods you can use to get data other than "all":
    - `filter`
    - `exclude`
    - `order_by`

- Can you make dogs in only certain circumstances appear in the results? Or in
  a different ordering?

- Can you distinguish between the following other methods:
    - `get`
    - `create`
    - `get_or_create`

