# Old School Grid

For this Bonus Challenge, practice your CSS skills by making your own
"old-school" grid system from scratch. You'll be "re-implementing" a fictional
"Boopstrap" grid, a grid system similar to the original Bootstrap v1.

- Note: This activity is intended to build up your knowledge of how CSS
  frameworks are built, but *is not* the correct way to do things! We'll learn
  that soon, with Grid and Flexbox. For now, we'll use the old hack of using
  "float: left" for our grid.

- Note: If you've never used a grid system (such as Bootstrap's grid) this
  exercise might lack context. If so, feel free to read up on Bootstrap's
  (modern) grid here: <https://getbootstrap.com/docs/4.5/layout/grid/>


Steps:

1. First, see if you can understand the existing HTML & CSS code
2. Second, fill in the TODO's in the CSS with what you think might go there
3. If successful, you should see a layout like the mockup.png
4. Finally, finish the media query, to make your grid system "responsive", or
make all the columns with "md" in the class name "collapse" on smaller screens
(e.g. they should only behave as columns for screens larger than 960px)


Hints:

- Do not change the HTML for this activity.
- Boostrap has a "Base 12" column system. Every column gets a percentage based
  the number in its name, as a fraction of 12 (e.g. 3/12, 5/12, 12/12 and so
  on, with 1/12 being the narrowest, and 12/12 being a full width)
- A "container" has already been implemented for you, but commented out, with a
  max-width and auto margins (causing it to be centered -- another older hack!)
- Boostrap has a "Base 12" column system. The percentages can be calculated by
  the following math: `100 / 12 * number` (e.g. 3 is then 100 / 12 * 3)
- You might want to round down , to prevent columns from being too wide and
  overflowing (Pixel rounding: The curse of the old-school grids!)
- To make the "md" columns appear to "collapse" on smaller devices, make them full width
  (100%) on those devices

