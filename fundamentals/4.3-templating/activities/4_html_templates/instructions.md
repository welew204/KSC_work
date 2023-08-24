This is a bigger activity which involves using Jinja in a very realistic
context: Rendering data into a HTML document!

**NOTE:** You will not have to modify the Python file at all for this activity.
Instead you will only be modifying a Jinja HTML template file.

Setup
-----

1. First, create a new pipenv environment here:
    pipenv --python 3

2. Install the necessary dependencies (presently, just Jinja2):
    pipenv shell
    pipenv install jinja2

3. Now, run the script. Make sure it generates an output.html. Open the
output.html file. You want eventually for this to be a formatted version of the
Alice in Wonderland book. Presently, it's lacking a lot.

4. Examine (without modification) the build.py file, and the "wonderland.json"
file. Can you understand what you are looking at?

5. Follow these challenges to complete challenge. None of these challenges will
require modifying the Python source code or the JSON file.


Challenge 1:
------------
Change the template to include the book's author and title, correctly
formatted, by including context variables with the {{ }} syntax. The
title is already included, but is formatted poorly.

Hint: Try the following to transform the title into the right case:

    {{ book_title|title }}


Challenge 2:
------------

Generate the table of contents. It should list each chapter name. For now, the
list of chapter names does not have to be clickable.


Challenge 3:
------------

Loop through the chapters, outputting h1 HTML elements for each chapter header.


Challenge 4:
------------

Add the chapter count above the table of contents.


Challenge 5
-----------

Loop through the contents of each chapter, outputting each paragraph
underneath it's chapter.




Bonus challenges
-----------------

- Bonus 1: Add a horizontal rule between all chapters. Hint: You will need to
  use "loop.last" -- look this up!

- Bonus 2: Make the first paragraph of each chapter be a "blockquote" instead
  of a p tag. Hint: You will need to use "loop.first" -- look this up!

- Bonus 3: Make it so that when you click on a title in the table of contents,
  the browser will scroll down to that chapter. This can be done by using HTML
  "fragments" (aka "hash" fragments). Hint:

    <a href="#chapter1">Chapter 1</a>
    <h1 id="chapter1">Chapter 1</h1>

Read more at MDN:
https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#Document_fragments


