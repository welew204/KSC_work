Challenge 1:
-------------------

Get this code running. You should see a site that might coincidentally
resemble a popular social network when it is fully working. Refer to the
steps from previous activities if you get stuck.

Generally, it requires three steps to use Pipenv:

    pipenv --python 3
    pipenv shell
    pipenv install django

Then, finally:

    python manage.py migrate
    python manage.py runserver

(If not using Pipenv, make sure to use python3)

Get familiar with the site and code base:

- Click around a little, until you understand the app.
- Add one or more print statement.
- Note that the login functionality is intentionally non-functional (the final
  bonus objective is to fix it).
- To "login" as a user, just sign up for a new user using the given form.




Challenge 2:
-------------------

Code comprehension time! Explain in your own words the following:

- Examine `faceboop/urls.py`. Note `<the_username>` in brackets. Now, look at
  the `wall/views.py`. Can you explain how the parameter of the `user_feed`
  view relates to the `<the_username>` of the urls.py path?  Experiment with
  typing different URLs in the browser. Can you establish corresponding
  behavior?

- Examine the commented code in `user_feed`. Can you explain what it will do
  when you uncomment it?
>> this now corresponds the url param with an actual user registered (so now just putting in a punk url won't change the ui -- it errors instead)


Challenge 3:
-------------------

- Add a print statement to the `user_feed` view.

- Uncomment the code provided in the `user_feed` view. Examine the feed.html
  template.

- By ONLY changing code in the `user_feed` view, can you make the template
  display the expected information about the user?

- HINT #1: Try the following print statements as a clue in your view code,
  after the assignment to the user variable:

    print(user.username)
    print(user.first_name)

- HINT #2: Look in the template to see what variables its expecting. For
  example, it is expecting `fname` to be `user.first_name`


Challenge 4:
-------------------

Visit the page: http://localhost:8000/city/Oakland/

Your goal is to make the code modifications necessary for it to say 'The Great
City of "Oakland"' on this page, reflecting whatever city is in the URL.

Hints:

- Examine the `view_city` view, and corresponding code in `urls.py`. Use the
  same pattern established in the previous challenge to get the city name
  displayed by the template.
- There is no City model or anything like that. Don't over-think this.  Our
  goal is only to get it to say the above message at that URL.
- You'll need to change both views.py AND urls.py
- The template already exists. Read it to figure out the correct context
  variable based on what the user typed in the URL address bar (the `city_name`
  URL parameter)


Challenge 5:
-------------------

- Context: The URL parameters can be of a couple different types. By default,
  if there is no `:` between the `<>` brackets, it is a string type of any
  combination of characters (including spaces). There are two other notable
  types, "int" and "slug". "Int" is for integer numbers, and "slug" is just
  like the default, except it ensures `dash-separated-strings-like-this`, which
  is good for article titles (called "slugs" in the publishing business).
    - More information is here: <https://docs.djangoproject.com/en/3.0/topics/http/urls/#captured-parameters>
    - Examples:
        - `<slug:article_name>`   -- this is for a "slug" type
        - `<int:id_number>`       -- for an integer in a URL

- Using this knowledge, make an new URL and view, that accepts the ID number of
  a user, instead of the username, but otherwise behaves the same as the view
  we dealt with in the previous challenges.





### Bonus Challenges are found in `bonus_instructions.md`

