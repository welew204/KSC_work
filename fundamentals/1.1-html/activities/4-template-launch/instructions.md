ACTIVITY: Template Launch
-------------------------------------

**How to do activities**

- This activity, like all other activities in this course, is divided into a
  series of challenges.

- Give yourself a time-limit: If you are following online, or in class, use the
  time suggested. Otherwise, set a 10 or 15 minute timer. Your goal is to
  finish as many challenges as you can within a certain amount of time.

- Focus first on the first challenges. Do them one at a time.

- If you run out of time -- which you probably will -- skip to the next
  activity. Later, such as the next day, set aside time to return to activities
  to review concepts at a slower pace and dive deeper.

- Remember: Focus first on breadth, then on depth. Sometimes the best thing to
  do is to move on!


-------------------------------------



Challenge #1: Pick a template
-----------------------------

Time for us to launch our made-up "unicorn" company by quickly creating a site,
based on a customized free template!

1. Pick a nice looking free template or theme for your made-up company from one
of the following websites:
    - Start Bootstrap: https://startbootstrap.com
    - Bootstrap Made: https://bootstrapmade.com/
    - Templates.co: https://templates.co/

2. Download the zip file and extract it

3. Open up the HTML file in both your browser and preferred text editor


Note:

- If you are having a hard time choosing, the template that the example
  solution used is included in the "example-template" directory (folder).


Challenge #2: Adding content
-----------------------------

Your goal now is to replace all the placeholder text & content with relevant
content for your "unicorn" start-up

1. In your browser, look through the page, identifying where there is
placeholder text that you'll

2. Go back to your text-editor,  Using Control+F (on Linux) or Command+F (on
macOS), find the parts of the code that correspond to the parts of the page
that you want to replace

3. Replace the text of the template with your company's info.

4. Repeat this process, until your template has been sufficiently filled up
with real content.


Note: Not sure what content to use? Feel free to use "FizzBuzz Cloud":


    FizzBuzz Cloud Technologies
    Languages in use: Python, JavaScript
    Frameworks: Django, React.js
    Database: PostgreSQL



Challenge #3: Adding more
--------------------------------

- Adding a logo or other images, such as ones from previous activities,
  possibly replacing existing logos or images in the template (hint below)

- Expanding your website to two pages
    1. Copy index.html into a new file (perhaps called `about.html`)
    2. Modify your links in your template to refer to the new file (hint below)
    3. Change the content on this new page, possibly deleting large amounts of
    the page

- Try out comments! Add human-language comments to code you change, or comment
  out large parts of the page that no longer are relevant. (hint below)



Code hints:


    <!--
        This is comment.
        Below is how to include an image in the same directory:
    -->
    <img src="./myimage.jpg" />

    <!--
        And below is how to link to another HTML page in the same directory:
    -->
    <a href="./about.html">Click here for About</a>



Challenge #4: Launching
--------------------------------

Finally, let's launch to GitHub.

1. Create a new repository (repo) on GitHub
    - Follow the same step as before

2. Click on the `[Add file]` dropdown and then click `[Upload files]`
    - Likely near `[Create new file]` and the `[Clone or download v]` buttons)

3. Find the directory (folder) that you were working on in your file browser
    - Don't go into the directory, just find it
    - e.g. Finder on macOS

4. Drag and drop the entire directory (folder) containing your site into the
Upload Files page on GitHub

5. Click the green `[Commit changes]` button at the bottom

6. Publish the site with GitHub pages
    - Follow the same steps as before

Congratulations, you've launched your unicorn!


Hints:

If it doesn't show your page right away, you may have to navigate to a
different URL. For example, if the following is the URL it gives you:

        https://janeqhacker.github.io/launch-unicorn/

And your templated page is under a directory called `template-page/`, then you
may need to instead visit the following URL:

        https://janeqhacker.github.io/launch-unicorn/template-page/index.html


Example solution launched:

        https://janeqhacker.github.io/fizzbuzz-cloud-technologies/


Bonus Challenge: Cleaning up
--------------------------------

Most template zip archives you download are filled with unnecessary files. The
easiest way to "clean up" your directory (folder) is by trial-and-error:
Deleting files and seeing if stuff still works.

- Look through the various directories, one by one deleting files.
    - Be ready to "undo" any deletion, so consider moving to "Trash", or just
      moving to another directory, instead of deleting
- After deleting a file, refresh your page.
    - Does it seem okay? If so, the file you deleted was unnecessary.
    - If it changes or break, then undo your last action!

Consider doing this BEFORE you upload for fewer files to upload!

Stuff that probably can be deleted:

- README.md file
- All `.json` files
- Any `scss` directory
- Any `.js` file at the top level directory
- `.css.map` files
- Any duplicate `.css` file not in use, e.g. without `.min.css`

Stuff that maybe can be deleted:

- `.js` files in general -- some of these might be in use, but might not be
  necessary. Try deleting them and see what happens!

