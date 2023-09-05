Bonus Challenges: CRUD for Books in Reading Lists
-------------------------------------------------

Right now, the reading lists are kind of useless: They are only titles, with no
books associated. We want to make them actually lists of books to read. We can
do this by finishing the "reading list" concept by associating reading lists
with Books. This will involve re-doing all 4 CRUD operations, but this time for
books "in" a reading list.

- Note: The view-functions for this have all been started in
  `bonus_activity_views.py`, and they are all set up with urls and templates.

- There are code hints for each of these challenges in `code_hints.md`, so
  check that first before you look at the solution or solution video.



Bonus Challenge 1: R in CRUD
-------------------------------------------------

The "R in CRUD" is done for you, with the view and the template being already
completed, but there are no links to this page yet.

- Can you explain how this function works?

- Can you successfully add a link from the page that lists all the Book Lists
  to this page, so that when you click on the title of a Book List it will take
  you to this "details" page?



Bonus Challenge 2: C in CRUD
-------------------------------------------------

Finish the `reading_list_create_book` view, such that it associates books with
the reading list in which it is created.


Bonus Challenge 3: D in CRUD
-------------------------------------------------

Finish the `reading_list_delete_book` view.



Bonus Challenge 4: U in CRUD
-------------------------------------------------

Finish the `reading_list_update_book` view.


----------------------

No code hints are provided for the following:

Advanced Bonus Challenge: Track ownership
------------------------------------------

Let's add a little security. Keep track of who added which book and/or reading
list using the `create_username` field, and prevent other users from editing
them.



Advanced Bonus Challenge: DRY out forms
------------------------------------------

Notice how a lot of the form templates are almost identical. Can you come up
with a way to reuse templates to make the code more DRY?


Advanced Bonus Challenge: Voting
------------------------------------------

- Voting on something: Which of the 4 CRUD operations is that? Typically it's
  "Update" (update vote count total) and/or "Create" (create a vote item in
  database to track each and every vote to prevent double-voting).
- Add a voting feature, to allow you to vote up and down books and/or reading
  lists.
- To prevent abuse of this feature make it so that users can only vote
  every X seconds. Use "sessions" for this:
    https://docs.djangoproject.com/en/3.0/topics/http/sessions/


Advanced Bonus Challenge: API integration
------------------------------------------

In "helpers.py" there is already code to fetch the cover of a book from the
open library API. Can you figure out how to use this code to save book cover
URLs when books are getting added?

Note: Don't do this EVERY time a book is DISPLAYED, or you'll end up sending so
many requests you could hit a rate-limit.

