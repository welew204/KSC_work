Lightning Project Planning with Python
--------------------------------------

This goal of this activity will be to get practice planning and divvying up
work, and reading specifications to figure out the work necessary in a short
amount of time.

- Pick one of the two following challenges: a static site generator for books,
  or a real-estate data processing applications. (Details are included below.)

- Choose which task to begin with.

--------------------------------------------------------------------------

Hints:

- You will likely not have time to finish the entire application in one
  sitting. Instead, your goal should be to at least finish planning and
  brainstorming, and at least start work on one of the different pieces.

- Pseudocode and state diagrams will be your friends.

- Don't worry about properly setting up git etc -- that can take too much time.

--------------------------------------------------------------------------


BOOK STATIC SITE GENERATOR
--------------------------

Create a static site generator that inputs a book's text from Project
Gutenberg, and generates a chapter-by-chapter HTML version of that text.  An
example of the text is provided (`great_expectations.txt`)

- Task 1: Front-end work! Do this first if you want more practice with
  HTML and CSS. Using HTML, CSS, Bootstrap, etc, design a nice looking
  page to display text. Keep in mind time limits and limitations of the
  application.
    - Planning hint: Think of ways to begin work on this before you've finished
      the other parts. For example, just using hard-coded text to test it at
      first.

- Task 2: Input "parser". Parsing is taking an input file (string) and
  transforming it into data structures such as lists or dicts. Write code that
  inputs text from a file, "parses" it into appropriate data types (for
  example, you might consider using a "list" of strings to store the
  paragraphs).
    - Planning hint: If starting with this task, start by print the data
      structure to the terminal to double check the data is getting passed
      correctly.

- Task 3: Output templating. Templating is combining data in variables
  with strings to generate HTML and CSS, essentially "prettifying" the
  data. Your goal is to write code that takes the data from Task 2, and
  the HTML from Task 1, and transforms it into assembled HTML pages.
    - Planning hint: Think of ways you can work on this before the other tasks
      are done. For example, write code that loops through test data, and
      outputs "h2" and "p" tags as needed.



--------------------------------------------------------------------------


REAL-ESTATE DATA STATISTICS
---------------------------

Your goal is to make a data reading application that loads data from a
CSV file.  There is an example CSV file provided to use.

- Task 1: UI. Write functions or code that have menus that ask the user what
  they want to do. You'll be using loops and "inputs" to construct a text-based
  menu.
    - Planning hint: Think of ways you can work on this before the other tasks
      are done. For example, create placeholder functions for the other
      functionality that get filled in later -- maybe use "pass" as the
      placeholder!

- Task 2: Input parser. Write a function to read in data from a CSV file,
  "parse it", and put it into an appropriate data type, such as a list or dict.
    - Planning hint: Before you work on the other portions of this project,
      just print the data structure to the terminal to double check the data is
      getting passed correctly.

- Task 3: Data crunching. Write a functions that take in a list of data, and
  determines max, min, mean, mode, median, and other such statistics for the
  data. Use Google to learn how to do these different statistical operations on
  data using Python 3, and look for easier solutions for each.
    - Planning hint: Think of ways you can work on this before the other tasks
      are done. For example, write code that operates on test or example data.

