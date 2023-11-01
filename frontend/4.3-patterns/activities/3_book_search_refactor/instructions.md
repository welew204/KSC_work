# Book Search Component Refactor Challenge

For this activity, we'll get practice refactoring apps into components, and try
two different approaches of distributing state. Instead of being broken down
into challenges, it's broken down into two stages to practice two different
types of component refactoring in React:

1. Keeping state in App, but refactoring the JSX into stateless components
2. Refactoring some state and functions into a new component

- Stuck? Check out the end of this document for a some tips.



Stage 1 - Refactor into stateless components
--------------------------------------------------------

Let's start with a very clear refactor. Make 3 new components, SearchBox,
Paginator (display the page buttons and current page number), and Books (show
the resulting book list). These three components should be stateless --- all
the state manipulation should remain in App.js.

- By the end of this refactor, the App.js will look something like this:


        /* ... snip ... */
        function App() {
          /* ... snip ... */
          /* (All the state / functions / fetch / etc remain untouched) */
          /* ... snip ... */
          return (
            <div className="App">
              <div className="BookSearcher">
                <SearchBox
                  onQueryChange={onQueryChange}
                  onSearch={onSearch}
                  query={query} />
                <Paginator
                  incrementPage={incrementPage}
                  decrementPage={decrementPage}
                  page={page}
                  totalPages={totalPages} />
              </div>
              <Books
                isLoading={isLoading}
                books={books} />
            </div>
          );
        }
        export default App;




Stage 2 - Distributing state
--------------------------------------------------------

Let's get practice now with having two stateful components. Our goal is to
further simplify the App component to have only the "isLoading" and "books"
state variables. To do this, we'll create a new component BookSearcher that
will have all the other state variables.

- When this stage is completed, the App component will look something like
  this:


        /* ... snip ... */
        function App() {
          const [books, setBooks] = useState([]);
          const [isLoading, setIsLoading] = useState(false);

          function booksUpdated(newBookList) {
            setIsLoading(false);
            setBooks(newBookList);
          }

          function searchStarted() {
            setIsLoading(true);
          }

          return (
            <div className="App">
              <BookSearcher
                  onBookListUpdated={booksUpdated}
                  onSearchStart={searchStarted} />
              <Books
                isLoading={isLoading}
                books={books} />
            </div>
          );
        }
        export default App;



Tip: How to refactor into components
--------------------------------------------------------

1. Copy & paste an existing component directory (always better to start with
something instead of having "blank file" syndrome!)

2. Name it in CamelCase whatever the name of the component will be -- for
example, SearchBox or BookSearcher.

3. Rename the CSS and JS files, and rename all references in each to your new
component name.

4. Move over the JSX code from the parent component into this child component.
Data that the child component needs should be "passed as a prop" (e.g.,
assigned with an attribute in the parent, and then accessed with
props.nameOfProp in the child component)

5. Import the child component in the parent component, and use it in lieu of
the JSX it replaces.

6. Finally, move over the CSS into the child component directory.

7. If the child component is not stateless, you may also have to copy over
functions or state from the App component into the newly created child
component.

