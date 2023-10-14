Start with `instructions.md`

These bonus challenges can be done in any order, and have hints in hints.md



Bonus Challenges #1: Construct a link in JSX
---------------------------------------------------------

Make the `URL: github.com/.../` actually be a clickable link to their user
profile.



Bonus Challenge #2: Fix the "unique key" warning
---------------------------------------------------------

See if you can figure out how to correctly fix React's unique key warning. This
won't affect anything in this example, but in very large lists can affect
performance.



Bonus Challenge #3: Search-as-you-type, debounced
---------------------------------------------------------

1. Implement "search as you type" (essentially, invoke the needed function(s)
in the onChange event, and delete the search button.)

2. This generates too many fetches! It many situations it could even get your
API key blocked very quickly. In reality, we want it to only search when they
STOP typing. This concept is called "debouncing".

3. Research this "debouncing" concept

4. Use "setTimeout" to implement debouncing on your search-as-you-type feature,
only searching when they pause typing for at least half a second

