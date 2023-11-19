# Blog

- Get started as before: either `npm install`, or copying a previous
  `node_modules`, then running the server with `npm run start`



Challenge #1: Fixing link to blog
----------------------------------------------------------------------

1. Code Comprehension: Examine how the onAboutClick "link" works.
    - Can you explain what is happening to cause the "About" content to display?
    - Is this a "real link", like the ones used in static pages or multi-page
      apps?
    - Why can't you click  the Back button to the previous "page"?

2. Fill in the onBlogClick function to make it display the Blog "page".



Challenge #2: Adding link to Welcome "page"
----------------------------------------------------------------------

Using the pattern identified in Challenge #1, create a new link titled
"Welcome" that, when clicked, displays the initial "welcome" page



Challenge #3: Create a new Contribute "page"
----------------------------------------------------------------------

Following the same pattern as Challenge #1 & #2, then create a new page
that should contain an H1 tag with the word "Contribute" (any other content
is optional). Add a new link to the navigation bar that causes this page to
be displayed.



Bonus Comprehension Challenges
------------------------------------------------------------

1. **a11y href warnings**: You likely will see a warning like:  "The href
attribute is required for an anchor to be keyboard accessible." It will likely
also include a link that explains it. Research this via the link. What is this
saying? Why is this a problem when developing in React? Can you fix this?

2. **'key' prop warning**: If you haven't already, research up the "Missing
'key' prop for element in array" error, which you likely will be encountering
at this point. Can you figure out what is going on? Can you fix it?



Bonus Refactor Challenge #1: Refactor each page to a function
------------------------------------------------------------

A common pattern is to break apart huge render functions into separate smaller
functions, as such:

    function renderAbout() {
      return (
        <div>
            <h1>About</h1>
            ...etc
        </div>
      )
    }


Within the "real" component function, you can select which function to invoke:

      {page === 'about' ? (
        renderAbout()
      ) : null}



Bonus Refactor Challenge #2: Refactor into a renderContent function
------------------------------------------------------------

Instead of having repetitive and verbose, ternary operators, move the selection
of the page into a single renderContent function, something like this:

    function renderContent(page) {
      if (page === 'about') {
        return renderAbout();
      }
      // ...etc
    }

(This will need to be invoked with the page variable)



Bonus Refactor Challenge #3: Refactor click functions
------------------------------------------------------------

Refactor the click functions into a single function.  This new function should
receive an argument that specifies which page you are linking to.



Bonus Refactor Challenge #4: Refactor blog pages into array
------------------------------------------------------------

Move the blog pages into an array, which you use .map to iterate over rendering
the Article elements.



