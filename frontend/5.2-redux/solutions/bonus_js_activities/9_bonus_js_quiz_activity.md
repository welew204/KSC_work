Comprehension Challenge: asynchronous
-------------------------------

1. What is a callback function?
    - A function that is passed as an argument to another function, with the
      intention of it getting invoked after a certain task has been completed

2. What pattern of code can you use to process a list in order, if the
"processing" you must do is asynchronous?
    - You can use a counter that counts the number of times we've processed
      items, incrementing it with each callback, and using that to index into
      the list

3. What code can you use to cause an arbitrary number of asynchronous
operations to happen, and wait for whichever one finishes last to continue?
    - We can use a counter that counts the number of callbacks that have
      returned, with an if statement checking if it has reached the end, and
      only once it's reached the end we will call another function that
      represents the continuation of the program


    /* From Challenge 4 in Async Challenge */
    const filenames = ['C4-a', 'C4-b', 'C4-c', 'C4-d', 'C4-e', 'C4-f'];
    const fileData = {};
    let c4count = 0; // c4 count... sounds dangerous :o
    for (const filename of filenames) {
        simuread(filename, (err, data) => {
            // Need to do something....
            fileData[filename] = data;

            // Increment the count, and only call if got to the end of the files
            c4count++;
            if (c4count >= filenames.length) {
                checkChallenge4Data();
            }
        });
    }




4. When is a callback synchronous? When is it asynchronous? (hint: Although
most popular for asynchronous operations, they can technically be either!)
    - A synchronous callback is called without delay, or during "the current
      run of the JavaScript event loop". For example, the argument to "map"
      could be considered a synchronous callback.

    // Synchronous
    const lst = [1, 2, 3];
    lst.map((item) => {
        console.log(item);
    });

    // Asynchronous
    setTimeout(() => {
        console.log("It's been a minute!");
    }, 60);



5. How can you write your own function that requires a callback?
    - Simply define your function with a parameter, traditionally called
      "callback", that you call when you are done with whatever asynchronous
      operation you are intending to do.

    function beenAMinute(callback) {
        setTimeout(() => {
            callback();
        }, 60);
    }



6. How can you write your own function that uses promises?
    - Return a "new Promise" object, with the callback being called within the
      callback you pass to that object

    // Using "official" built-in Promise system
    function beenAMinute() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 60);
        });
    }

    // Using a "home-made" Promise system
    function beenAMinute() {
        return {
            then: (resolve) => {
                setTimeout(() => {
                    resolve();
                }, 60);
            },
        };
    }




Comprehension Challenge: functions
-------------------------------

1. What does it mean for functions to be "first class citizens"?

    - Functions can be passed as arguments, and/or stored in variables.

2. What's the difference between an anonymous function in a variable and a
named function in a variable? (Hint: Check out "stack traces")

    - Named functions have their name attached to the function value itself,
      and the name of the function will show up in stack traces when errors
      occur. The only syntax for named functions is:

        function namedFunc() {
            // etc
        }

        // In this case, actualName will be the name attached to the function,
        // while variableName might be forgotten
        const variableName = function actualName() {
            // etc
        }

    - Anonymous functions in a variable will unfortunately not get the name
      attached to them in the case of a stack trac:

        const anonFunc = () => {
            // etc
        }


3. When do you need to use parenthesis in an arrow function around the
parameter field?

    - If there is exactly 1 parameter, no more, no less

4. What is destructuring in parameter lists? How can you use it?

    - Destructuring allows you "deconstruct" objects or arrays when passed as
      parameters. Examples:

      function distance([x, y]) {
        return x*x + y*y;
      }

      const coords = [10, 3];
      distance(coords);


5. What does the "splat" operator do when defining a functions parameters?

    - "Splat" operator lets you "scoop up" extra arguments that are passed to a
      function at invocation time, in addition to some finite number of named
      parameters. For example:

      function example(a, b, ...everythingElse) {
        // etc.
      }
      example(10, 12, 15, 100);




Comprehension Challenge: this
-------------------------------

1. Can you explain what "bind" does?

    - Attach an object to the execution context of a function, such that within
      that function the word "this" refers to that object.


      function whoAmI() {
        console.log(this.name);
      }

      const info = {
        name: 'Hasan',
      };

      const boundWhoAmI = whoAmI.bind(info);
      boundWhoAmI();



2. What is "this" when in an unbound function in node? In the browser?
    - In node it becomes the "process" global variable
    - In the browser it becomes the "window" global variable

3. How do arrow functions differ w.r.t. execution context (e.g. "this")?
    - Arrow functions the "this" never gets "rebound" to the global window or
      process variable.


