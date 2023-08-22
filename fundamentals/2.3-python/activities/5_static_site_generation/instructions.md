Challenge 1
------------

- Try out the HTML in your browser. See how you can smoothly click around?

- Inspect these 3 HTML pages. Explain in your own words what you see in the
  HTML code. Observe the things that overlap, and the things that change
  between the three pages.

### My answer:
*each page has all the same 'frame' content, but varies in what is 'featured' based on the link clicked; 
also, each html code changes to reflect what the 'active' link is, by setting the links to class='active' for 
proper styling*

- Your goal is to combine the parts that overlap into one or more files
  "template" files, and the parts that are different into "content" files.

- Discuss a strategy on how you might extricate the HTML code that is in common
  between all the files and a strategy to store them in different files.

### My Answer:
*Well, until I have variables available for my site (using JS or React) I'll 
need to just split the code up into sections that are either the same across all
instances (aka, templates) and sections that should change for each view (aka, content)*


Challenge 2
------------

- Start splitting up the files according to the strategy you have devised. This
  should be done "manually" in your editor, by selecting parts of them and
  putting them in new files.

- Like a Bob Ross painting, lets start by painting in broad strokes! Discuss in
  your own words the behavior of the code. Write in your text editor or by hand
  in simple English steps to take, as though the computer could understand
  simple English commands instead of Python and you were giving the computer
  instructions.
  
  ### My answer:
  - first, open all neccessary ingredients (from template, from content), and save as variables
  - generate a new string with the combined template and content desired for the static page
  - write this new string to a new html file

- Note: Writing in simple English the behavior of a computer program is called
  "pseudocode". We'll get more practice with this later!


Challenge 3
------------

- Start writing the actual Python code. Your first goal is to write a Python
  script that will re-combine only a single HTML file.  For now, don't worry
  about page titles, or the "active" class on links.

- Tips for writing code:
    - When starting a new file, always start with a `print('hello world')`
      (feel free to mix up the message!)
    - Always make one change at a time, and test. Never try to make too many
      changes at once.
    - If you made a change, and the code file stops working (e.g. your first
      print("hello world") stops working), then stop immediately and figure out
      how your last change broke your file, and try to fix it. Don't ignore or
      a mistake --- that's just building on mistakes, and you'll just get even
      more lost!

- Hints: Stuck? Peak at the hints at the end of this file.




Challenge 4
------------

- Finish your Python script, so that it works with all three pages.

- Prove that it works: Change the `<style>` tag for all pages with a single
  change.

- As before, don't worry about page titles, or the "active" class on links.
# DONE


Bonus Challenge
----------------

The following Bonus Challenges are beyond what we have taught in Python, and
include concepts that we will only teach later. Only spend time on them if you
are looking for a greater challenge!

See if you can modify the script to respect page titles, and "active" classes
on links. This can be very challenging! Experiment with the following code to
get a clue:

    from string import Template
    some_string = 'Hi ${name}, how are you?'
    template = Template(some_string)
    print(template.safe_substitute(name='Ash Ketchum'))

If done correctly, you can write it so there is only a single HTML template
file, instead of a top and bottom.




Advanced Bonus Challenge
-------------------------

Experiment with the following code, and see if you can write code to generate
100 HTML pages, each that use the Bob Ross formatting, but just display a
single number in `<h1></h1>` tags.

    for x in range(100):
        print(x)

Can you get them to each link to the next page, from page 1 to page 100?







Python Code Hints
-------------------------


    # Clue 1: How read in a file into a variable
    file_text = open('file_one.html').read()


    # Clue 2: To read in another file at the same time as the first file, be sure
    # to store it in a variable with a different name!
    second_file_text = open('some_other_file.html').read()


    # Clue 3: How to combine together two variables that contain text:
    combined_text = some_variable + another_variable


    # Clue 4: How to write a variable into a file
    open('output_filename', 'w+').write(some_variable_with_combined_text)

