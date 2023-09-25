In this activity, we will review grid & transition, and then practice flexbox.

- Note: All changes will be in css/site.css


Challenge #1: Review - Transition review
-------------------------------------------

Presently, the navigation links "snap" to a new background-color. Make it
so that it is a gradual transition, taking half of a second.



Challenge #2: Review - CSS Grid
-------------------------------------------

The Sidebar is in the wrong location. It should be to the left of the main
content. Use grid-column to place the sidebar in the correct location.


Challenge #3: Flexbox Navbar
-------------------------------------------

The navigation bar is a mess. About, Gallery, and Blog should be next to each
other. Use "display: flex" in .Navigation to make its children stack
horizontally.




Challenge #4: Flexbox Navbar tweaks
-------------------------------------------

The navbar still doesn't look quite right, with everything scooted to the left,
and too tall.

1. Make it so that the contents of them are spaced as you see in the mock up.
Hint: Look up the "justify-contents" property

2. Finally, make it so that they are centered vertically.

Hint: Look up the align-items property.

Hint: Good resource: https://css-tricks.com/snippets/css/a-guide-to-flexbox/



Challenge #5: Gallery
-------------------------------------------

The gallery could use a little TLC.

1. Enable flexbox on it

2. Enable flexbox wrapping

3. Make the justification so that the elements are centered but also have space
between them.

4. Finally, adjust the item alignment so that the bottom of the painting images
line up, even the paintings with the "for sale" prices. Hint: This final one
can be done with only 1 line of CSS, setting align-items.

Hint: Good resource: https://css-tricks.com/snippets/css/a-guide-to-flexbox/




Bonus Challenge: CSS 3D transform + animation
----------------------------------------------

Can you make it so when you hover on a Gallery-item, it:

1. Gently "floats" above the other images (use translate3D)
2. Uses "filter" to gradually become higher contrast
3. Gains a shadow that grows at the same rate as the "floating" effect

Hint: For a full 3D effect, set a "perspective" and "perspective-origin".
