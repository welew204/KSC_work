# Weather Dashboard Part 2

Get started as before: either `npm install`, or copying a previous
`node_modules`, then running the server with `npm run start`



Challenge #1: console.log with useEffect
------------------------------------------------------------

To get warmed up with useEffect, add the following above the return:


        useEffect(() => {
            console.log('useEffect with []');
        }, []);
        useEffect(() => {
            console.log('useEffect with no args');
        });
        console.log('rerendering');


Also, update the `import` line at the top of your file to import `useEffect`:

        import React, { useState, useEffect } from 'react';


Before looking at the console, can you guess in when these messages will be
shown, and in which order? Check the console and confirm.

- Stuck? Check out hints.md



Challenge #2: Fixing mistakes
------------------------------------------------------------

The code has some new mistakes. The syntax is wrong for actually displaying the
data as was intended, instead, it literally says "weatherResult" in a few
spots. Fix it so it shows the right data.

- Stuck? Check out hints.md



Challenge #3: fetch on first load
------------------------------------------------------------

Add another useEffect to cause "doFetch" to happen upon first viewing the page,
instead of having to click a refresh button.

- Hint: This can be done in 1 line.

- Stuck? Check out hints.md



Challenge #4: useEffect with localStorage
------------------------------------------------------------

- Background: `localStorage` is a form of client-side persistence, or a way for
  you to use JavaSript to tell the browser to save a value, even if you refresh
  or revisit the page. In this activity we'll use this to make the page
  "remember" the last thing you typed in. It has limited uses "in the wild", as
  it is on a per-browser & per-computer basis, but it is still good to know.

1. Create a new useEffect that is "activated" when the `searchBox` variable
gets changed. Start with just a console.log to ensure that is working

2. Add code within this to store the value to localStorage. Example:

        localStorage.setItem('weathersearch', searchBox);

3. Add code to the top of the function, above the state variable definitions,
that retrieves the value of localStorage. Example:

        let prevSearch = localStorage.getItem('weathersearch');
        console.log('previous search was:', prevSearch);

4. Modify the useState definition of searchBox to use `prevSearch` variable as
the initial default state value.

5. Finally, add an "if" to allow a "default" value of `"Oakland, California"`,
if there has been nothing stored in localStorage previously

- Stuck? Check out hints.md

- Bonus: Check out the hint on passing a function as the default. This allows
  us to have the "prevSearch" code only run once as a performance optimization.



Challenge #5: Loading spinner
------------------------------------------------------------

Add a loading spinner to your page. This is an animation that shows when the
page is loading, but then goes away once it is fully loaded. ADd it to the

HINT: The CSS for a loading spinner is already included for you. All you need
to do is create a div with the className="loader" to take advantage of it.
The
JSX to conditionally show the loading spinner based on the state "isLoading" is
as such:

- Now you want to conditionally display the spinner when you are sending a
  request using fetch, but then hide the loading spinner when the response
  comes back.
- Hint: You will need to modify isLoading to show or hide the spinner
- Hint: This will require the use of setIsLoading



Bonus Challenge #1: Custom classes state
------------------------------------------------------------

(Note: Continued from a previous activity. If you already did this, then skip
to the next, which is a refactor.)

Here is some code:

    const appClasses = ['App'];
    const desc = description.toLowerCase();
    if (desc.includes('clear')) {
      appClasses.push('App--clear');
    } else if (desc.includes('cloud')) {
      appClasses.push('App--cloud');
    }
    const classes = appClasses.join(' ')

1. Code comprehension: Explain in your own words what it is doing.
2. Incorporate it to such that it adds extra classes to the .App div.
3. The CSS is already written for 'App--storm' and 'App--rain' also. Expand
this code to detect those weather conditions also.


Bonus Challenge #2: Refactor to helper function
------------------------------------------------------------

Once you get Challenge 1 working in the App function, get practice refactoring
code into functions, as follows:

- Refactor this to be in a separate function defined above the App function
- This function should only have `description` as its only parameter
- It should return the combined classes?
- Add an invocation of function in the App function to generate & use the class



Extra Bonus Challenge: Advanced UI for Searching
------------------------------------------------------------

Instead of always displaying the refresh/search button, add a new button near
the location header that "turns on" the ability to edit it.  Try out the
solution with "npm run start" within the `solutions/2_weather_useeffect/` and
observe the behavior. Now, try implementing it yourself, with a combination of
JS & CSS:

1. It should only appear when you hover over the location
    - Hint: can be done purely with CSS

2. When clicked, it should "toggle" the "edit-ability" of the title.
    - This, in practice, means replacing the text with an input that can be
      changed. When "confirmed", it should then search for the new input and
      update the data in the weather dashboard.

