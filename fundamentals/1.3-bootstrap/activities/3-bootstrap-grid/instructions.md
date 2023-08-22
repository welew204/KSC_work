In this activity, we will be using Bootstrap to style a grid of information
about Shiba Inus.

The goal of this activity is to get your grid looking like the grid found in
clues/shibasolution.jpg


Challenge 1
-----------
# DONE
Wrap the page in a "container". Explanation: Most things in Bootstrap can be
accomplished by adding certain classes to a "div" tag. One such class is
"container" --- which might be better named "page margin" --- which gives the
page a flexible margin that looks good on mobile and desktop. For this first
challenge, put ALL the page content into a "container", using the following
code as a hint:


    <div class="container">
        ...EVERYTHING GOES HERE...
    </div>


Challenge 2
-----------
# DONE
Add "img-fluid" class to all images. Explanation: To prevent oversized images
from taking up the screen, Bootstrap supplies us with the "img-fluid" which
will ensure the image "auto-resizes" such that it doesn't overflow its
boundaries. The first image already has the "img-fluid" class.


Challenge 3
-----------
# DONE
Create the 3x3 grid. Explanation: Bootstrap's main feature is the "grid". There
are a total of 9 paragraphs and images on the page to arrange in a 3x3 grid.

- Hint 1: This is tricky! Use the HTML found in clues/grid.html for clues.
- Hint 2: Examine "clues/shibasolution.jpg" for how it should look in the end.
- Hint 3: The solution has 3 rows, each with 3 columns (a total of 9 columns)


Challenge 4
-----------
# DONE
Note that in the image, the columns aren't all evenly sized. Tweak the widths
of the columns to match the image. Adjust the 2nd and 3rd rows as follows:

* 2nd row, 1st column should have 5/12 width
* 3rd row, 2nd column should have 1/2 width



Bonus Challenge: Responsive Design
-----------------------------------
"Responsive design" is where a website looks good on both mobile and desktop.
Make the Shiba grid responsive in the following way:

- For large screens, it should be more or less the 3x3 grid that we just made
- For medium screens (e.g. tablets), it should have 2 columns of equal width,
  save for the last image, which should be full width.
- For small screens (e.g. phones), the grid should "break down" and the content
  just be stacked

Note: This is tricky, and may require moving and/or removing rows compared to
how you originally had it!

- Hints:
    - Use the format of "col-md-3" to make something 3/12 width for "Medium"
      sized devices and above
    - Use the format of "col-lg-3" to make something 3/12 width for "Large"
      sized devices and above
