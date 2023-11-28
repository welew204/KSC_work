This is a tough quiz on some of the stranger subtleties of JavaScript!

Almost all have solutions with code snippet examples in the solutions
directory.  Some of these also have examples in the demos directories, others
might require extra research.



Comprehension Challenge: asynchronous
-------------------------------

1. What is a callback function?

2. What pattern of code can you use to process a list in order, if the
"processing" you must do is asynchronous?

3. What code can you use to cause an arbitrary number of asynchronous
operations to happen, and wait for whichever one finishes last to continue?

4. When is a callback synchronous? When is it asynchronous? (hint: Although
most popular for asynchronous operations, they can technically be either!)

5. How can you write your own function that requires a callback?

6. How can you write your own function that uses promises?



Comprehension Challenge: functions
-------------------------------

1. What does it mean for functions to be "first class citizens"?

2. What's the difference between an anonymous function in a variable and a
named function in a variable? (Hint: Check out "stack traces")

3. When do you need to use parenthesis in an arrow function around the
parameter field?

4. What is destructuring in parameter lists? How can you use it?

5. What does the "spread" syntax do when defining a functions parameters?



Comprehension Challenge: this
-------------------------------

1. Can you explain what "bind" does?

2. What is "this" when in an unbound function in node? In the browser?

3. How do arrow functions differ w.r.t. execution context (e.g. "this")?



Bonus Comprehension Challenge: async / await
-------------------------------

Async + await is a new set of syntax added to JavaScript to detangle callbacks
and promises, and avoid "callback hell". It allows us to write asynchronous
code that *appears* synchronous, massively simplifying our lives.  While it's
still fairly new and not a lot of libraries support it, slowly and surely, it's
catching on!

Read the MDN article describing the new syntax:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

Advantages of async/await syntax:
- Easier to read -- no more callback hell, things generally go top to bottom
- You can use possibly more familiar constructs like for-loops and return
  without any special concerns


