General Hints

- Hint: Copy just the Python code. Don't copy the backticks (that's just for
  Markdown formatting). Don't introduce extra indentation or it won't run.

- If it helps, feel free to leave the SQLite file open while you run them, to
  see the DB data that is getting queried.

- If it helps, feel free to keep the models.py open so you remember what fields
  exist on each model

- Exit with Ctrl+D

- Don't get your prompts mixed-up: You can't run Bash or zsh commands while you are in
  a Python prompt, and vice-versa.

- Note that this is mostly for learning & testing. That said, it can also be
  used in lieu of SQL on production servers. For example, you can run:
    - `heroku run python manage.py shell`
    - This will run the same prompt interface, but connected to the same DB as
      your Heroku server, allowing you to query (and modify!) data on the
      Postgres database, except using the Django ORM interface in lieu of the
      Postgres prompt
