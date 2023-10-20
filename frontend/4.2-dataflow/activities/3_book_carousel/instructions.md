# Book Carousel Components

- In this activity you'll be building a "carousel" for book information.  This
  is an activity to strengthen your skill passing state and events between
  components.

- NOTE: You should ONLY be editing App.js for the (non-bonus) challenges!

- Get started as before: either `npm install`, or copying a previous
  `node_modules`, then running the server with `npm run start`



Challenge #1: console.log
------------------------------------------------------------

To begin this activity, add console.log's in key locations to better understand
what the existing code is doing:

1. Uncomment the two console.log's already written for you in the "then" of the
fetch, so you can inspect the data coming back from the JSON file / API.

2. Add a console.log's to the top of the changeBookSelection function.  It
should output also the contents of the "newBookSelection" parameter variable.



Challenge #2: Fix book display
------------------------------------------------------------

To get practice "passing down" props, complete the code that loops through the
books to correctly display the "release date" and the "cover" of each book.

- You know that you're done with this step when you see all 3 covers and
  release dates displayed.
- Lots of good hints in hints.md if/when you get stuck!



Challenge #3: Fix BoxSelector usage
----------------------

The BoxSelector component is complete. However, it is not being used correctly
by the App component in App.js. When it is working correctly, the selected box
will highlight, and display the text that you selected.

- Lots of good hints in hints.md if/when you get stuck!



Challenge #4: Finish carousel
----------------------

Now that you have the box selector fixed, make it so that it ONLY displays the
cover of the book selected (not the others)

- Note: Good hints in hints.md if/when you get stuck!



Bonus Challenge: BookCarousel component
----------------------

Refactor this code so that all the "carousel" logic is into a brand new
component called BookCarousel.  Usage of the component should be as follows:

    <BookCarousel
        data={/* an object in the form of the JSON */}
        value="Frankenstein"
        onChange={changeBookSelection}
    />


The BookCarousel component should in turn use BookInfo and BoxSelector, such
that App.js doesn't need to use (or import) either of these.





Bonus Challenge #2: BookCarousel component
-----------------------------------

Once you've completed the first Bonus Challenge, try refactoring to no longer
have a ".map" loop in this component (if you still have one), and adding a
"loading" message if no book information is supplied.

- Note: Good hints in hints.md if/when you get stuck!


Advanced Bonus Challenge: GenericCarousel
-----------------------------------

As a different approach, write a generic carousel component that uses
BoxSelector but not BookInfo, to which you can supply any number of children
via props.children. In other words, the following should work to display a
carousel of 2 BookInfo and 1 plain paragraph:


    <GenericCarousel
        onChange={changeBookSelection}>

        <BookInfo title="Frankenstein" author="Mary Shelley" />
        <BookInfo title="The Time Machine" author="HG Wells" />
        <p>Email me if you want to join my book club!</p>

    </GenericCarousel>


- For the sake of this activity, it's okay to not display the title of the
  selected book below the squares -- just a number is fine, e.g. 1 2 3 etc.

- It's also fine to have the GenericCarousel store in it's own state which book
  is selected, as long as it still has the onChange event to let that state
  "escape" this component back to the parent



