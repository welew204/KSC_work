This activity is to ensure you have Node installed, set up, and
understand how to create and run JavaScript files using Node.js


Challenge 1
------------------------------------

Ensure you have node installed by running the following command:

    node --version

If you get "command not found", you can install it with:

    Ubuntu Linux:
        sudo apt-get install nodejs
    macOS:
        brew install node

NOW, make sure you can do some basic math with node. Run:

    node

to enter an interactive prompt. Type

    console.log("Hello world!")           <hit enter>
    3 + 5                                 <hit enter>

to see JavaScript working!

IMPORTANT: Use Ctrl+D to exit. Whenever you see the "> " that means you are in
a node prompt, NOT a Bash or zsh prompt. Just like the Python ">>> " prompt, the only
use of this is for immediately running code snippets, or use like a calculator.
It is NOT useful for typical development.


Challenge 2
------------------------------------

1. With your text editor, save a new file called "helloworld.js" in some
directory.

2. Write in the file a "console.log" saying "Hello Node World!".

3. With a terminal, go to that directory, and run it using:

    node helloworld.js


Challenge 3
------------------------------------

Node.js has a slightly different flavor of JavaScript than the browser.  It
does NOT have access to "window" or "document" (because there is no DOM). It
DOES have access to a global variable called "process", along with a function
called "require". This variable has various information about the operating
system, the file being executed, along with a lot of not very useful stuff. By
using console.log(process), can you console.log out in your helloworld.js the
following information?

1. The version of node that is running.

2. The name that node calls your operating system (hint: look for "platform")

3. An array containing the command-line arguments used with node ("argv")




Bonus Challenges:
------------------------------------

- Write code that loops through the environmental variables, printing the name
and value of each one. (Hint: Google how to access environmental variables (or
"env" variables) from Node.js)

- Get more practice with JavaScript for loops: Look up Object.keys,
Object.values, and Object.entries. Can you do a for-of loop using Object.entries
to loop through the environmental variables and their values concisely?

