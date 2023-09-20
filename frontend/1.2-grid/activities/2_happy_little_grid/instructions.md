Challenge 1
----------------------

1. Refer to the `mockup_part_1.png` solution image provided.

2. Draw on a piece of paper or a drawing program a simple wireframe where you
think the grid should be.

HINT: Include in your grid the margins between the side of the page and the
content. These will just be grid cells that we won't put anything into.



Challenge 2
----------------------

- For this challenge, start with the files in the `part_1` directory

Create the main grid for the .Container element. Think about the width of each
column and height of each row. You'll be editing the css/site.css file.

HINT: You'll have to start with:

        .Container {
            display: grid;
        }



Challenge 3
----------------------

- Continue with the `part_1` directory

Make the .Navigation, .Sidebar, and .MainContent start at the correct columns
and rows and occupy the correct number of columns and rows.




Challenge 4
----------------------

- Switch to the `part_2` directory for this challenge

- Refer to the `mockup_part_2.png` mockup image

Take a look at the blog page. Now, style the blog page so that each image is to
the left of the header, and the summary is below the header (also to the right
of the image), as such:

         ____
        |    | HEADER
        |____| Summary text

        Make the images 100x100px.



Bonus Challenges 1-3: CSS functions
---------------------------------

Background: CSS functions permit more complicated operations on CSS values,
including arithmatic and even simple max/min operations in the case of grid.

Learn about the following CSS functions:

1. minmax -- permits "clamped" values for CSS grids
    - <https://developer.mozilla.org/en-US/docs/Web/CSS/minmax>
2. calc -- can perform any arithmatic on CSS values
    - <https://developer.mozilla.org/en-US/docs/Web/CSS/calc>



Bonus Challenge #1: minmax
---------------------------------

Can you use the "minmax" function to make it "responsive design"?

- Try to make it such that the margins get "used up" as the window is resized
  to be smaller, and when less than 600px (for example), it will not have
  margins whatsoever but take up the full width of the browser.

- Hint: This can be done without needing the use of media queries!
- Hint: Code hint found at the end



Bonus Challenge #2: calc
---------------------------------

This is unrelated to grid, but another nice CSS function is "calc". Let's
practice using "calc" to make a "sticky footer". A sticky footer is a footer
that stays at the bottom of the screen, even on pages that are too short.
file:///home/michaelb/projects/kc-frontend/frontend/1.2-grid/solutions/2_happy_little_grid/index.html
To get you going, here's some styling for the .Footer div:

        .Footer {
            background: lightgray;
            height: 2em;
            padding-top: 5px;
            text-align: center;
        }

- Hints:
    - `100vh` means "100% of the view height" (incidentally: 100vw is for width)
    - You'll want to use calc to get the height of the browser minus the 2em
      (for the footer), and use that for `min-height`
    - Hint: Code hint found at the end



Bonus Challenge #3: calc + variables
---------------------------------

1. Once you get it working with a hard-coded 2em, can you refactor it to use a
  CSS variable such that the footer height is adjustable in one spot?

2. This one is extra tricky: CSS variables don't have to be defined at :root,
they can be defined in any class. Make it so that the footer smoothly expands
in size on hover.



Bonus Challenge #4: grid template areas
---------------------------------

1. Practice with `grid-template-areas` by creating named areas on the
.Container for your grid
2. Then, use `grid-area` on the children to "slot" them in the right locations,
replacing the `grid-row` and `grid-column` properties.





------------------------



**Bonus Challenge Code Hints:**

- calc(100vh - 2em)
- minmax(auto, 600px)
- calc(100vh - var(--footer-height))
