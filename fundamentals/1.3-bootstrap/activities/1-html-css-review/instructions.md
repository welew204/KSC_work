Challenge 1
--------------
Link the sitestyles.css file to the index.html file.
(Check the hint at the bottom of this file if you forgot the syntax.)
# DONE

Challenge 2
--------------
Change the background of the page from "gray" to "lightgreen"
# DONE

Challenge 3
--------------
Make all the p tags have a text color of "darkblue".
# DONE

Challenge 4
--------------
Make the div with the class "infobox" have a "darkblue" background and
a text color of "white", and a padding of 20px;
# DONE

Challenge 5
--------------
Time to create a new class!

1. Define a brand new class called "fancy-text". To speed things along in this
activity, feel free to copy and paste from the "Challenge 5: Hint 1" below.

2. Create both an h1 tag and a p tag that use that class (Hint 2 below)
# DONE

Challenge 6
--------------
Look up a font on Google Fonts (example, Monoton) and make the H1 tag have
that font.
# DONE (used 'Tilt Prism' font)


Bonus Challenge 1
--------------
Use "float: right" along with a width, height, and padding (use pixels) to make
the div with the class "infobox" be to float to the right of everything else.


Bonus Challenge 2
-----------------
Create from scratch an "ERROR" box style at the bottom. It should have
bright colors such as red or yellow, light text, a border, and anything
you might want to make it stand-out.


Bonus Challenge 3
-----------------

- Try adding a few emojis to your HTML. It might not work right away. You'll
  need to enable Unicode or UTF-8 to allow emojis (along with many non-Latin
  based alphabets). Research how to get it to work.

    - Hint: There's a hint at the end of this file of something you need to add
      to the head to allow emojis / unicode!

- Research the "::before" pseudo-element to make every paragraph start with an
  emoji using CSS.



-----------------------

# HINTS!

- Challenge 1 hint:


    <link rel="stylesheet" href="./sitestyles.css" />


- Challenge 5 hints:

    - **Hint 1:** Use the following styles for the class:

            background: linear-gradient(to bottom, #a9e4f7 0%, #0fb4e7 100%);
            font-weight: bold;
            font-style: italic;
            font-variant: small-caps;
            line-height: 1.1em;
            letter-spacing: 1px;
            padding: 5px;
            margin: 5px;
            margin-top: 20px;

    - **Hint 2:**
        - You'll use something like `class="fancy-text"` as an attribute to attach
        the class to your new tag
        - Feel free to use the dog-related dummy text as example content


(Bonus Challenge 3 hint: `<meta charset="UTF-8" />`)
