This activity is broken down into 3 challenges. Each challenge is in a separate
directory.



Challenge 1
---------------------

1. Open index.html and style.css in both your editor and browser, in the
`challenge_1` directory

2. Notice how the HTML is plain black and white.

3. Look at style.css ... can you guess what style.css will do?

4. Only by editing index.html, make it "include" style.css using a `<link>` tag

Hint: You will need to use code like the following:

    <link rel="stylesheet" href="./style.css" />



Challenge 2
---------------------

- Exact same pattern as Challenge 1, but now there are 3 style sheets to link,
  scattered into different directories (directory is a fancier word for
  "folder").

- This one is more challenging since you will need to make the HTML code "know
  to look" in the different directories.

- By ONLY editing the HTML file (no moving around files), can you get all 3
  linked to add styling to the three precious metals?

- Go in the order of Platinum, Gold, then Silver

- Use the hints below about "relative file paths" to help you out.


##### Hints

- Use "./" to mean the current directory

- Use "../" to mean "up a directory

- Use "/" to separate directories

Look below for more examples, and ask for help if you get stuck!

##### Examples of "relative file paths"

- ./myfile.css
    - Look in the current directory (that's what the dot "." does)

- ./dirA/dirB/myfile.css
    - Go into the directory named "dirA" in the current directory (relative to
      the HTML file), and then go into the directory called "dirB" WITHIN dirA,
      before finally accessing "myfile.css" within dirB

- ../myfile.css
    - Look "up" or "back" a directory (that's what dot dot or ".." means)

- ../../dirA/dirB/thefile.css
    - Combining the above, here we go "back" two directories, then go into one
      called dirA, then dirB then finally "thefile.css"




Challenge 3
---------------------

Use all these skills combined to get the checkboxes to appear on the
`linking.html` file. This one is tricky too... pay attention to the clue about
ordering!

