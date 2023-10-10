/*
    This 90s music themed activity is intended to both get you used to using
    node.js, and give you more practice with JavaScript syntax.
*/


console.log('Challenge 1 --------------------------');
/*
    Right now, this for..of loop will loop through every letter of the song
    lyrics. Rewrite the code to replace the string with an array of strings, so
    that it will console.log each phrase of the lyrics on a separate line.
    
    Hint 1: Don't over think it: Just replace the lyrics contents with an array.
    Hint 2: const is the same as let, but it prohibits re-assignment
*/

const lyrics = "Hey now, you're an all-star, get your game on, go play";
for (const lyric of lyrics) {
    //console.log(lyric);
}


console.log('Challenge 2 --------------------------');
/*
    Write an if statement that checks both that ableToTouchThis is false, AND
    that the "time" variable is equal to "hammer".
    
    Hint: Example code is provided as a hint, but lacking the condition
*/
const ableToTouchThis = false;
const time = 'hammer';

/*
if (????) {
    console.log("Can't touch this.");
    console.log("Stop! Hammer time.");
}
*/



console.log('Challenge 3 --------------------------');
/*
    Modify the object called barbieGirl such that the if statement prints "Come
    on Barbie, let's go party!".

    Hint: ONLY modify the object that barbieGirl is being assigned to.
*/
const barbieGirl = {
};

if (barbieGirl.world === 'barbie' &&
        barbieGirl.life === 'plastic' &&
        barbieGirl.canBrushHair) {
    console.log("Come on Barbie, let's go party!");
} else {
    console.log("Challenge 3 broken...");
}




console.log('Challenge 4 --------------------------');
/*
  The following is a while loop. Modify it so that it repeats 5 times.
*/
let timesHit = 0;
while (false) { // <-- change this line
    console.log("Hit me baby one more time");
    // <-- add code here
}


console.log('Challenge 5 --------------------------');
/*
  Context: Node uses the "CommonJS" JavaScript variant to import other code.
  This is done via invoking a function named "require".
    
  Instructions:
    1. Look up the node documentation for "os": https://nodejs.org/api/os.html
    2. Write code to console.log the name of the first CPU on your computer

  NOTE: ComonJS might be switched in future versions to the "ESM" import
  syntax, similar to the JSX-variant syntax used in React and others.
  See: https://nodejs.org/api/esm.html for more information.
*/
const os = require('os');



console.log('Challenge 6 --------------------------');
/*
  Context: A "callback" is what we call a function that is passed as an
  argument while invoking another function, to be invoked when that other
  function finishes whatever it has to do, such as fetching from an API. They
  are one of the more difficult concepts of JS, as compared to other languages.

  Instructions: Add console.log to log out the "err" and the "data".
    1. Can you figure out what each of these arguments contains?
    2. Can you modify the code to cause "err" to not be null?

  HINT 1: Because callbacks are invoked only later, the output will be after
  everything else.

  HINT 2: fs.readFile is how we access data in the harddrive.
*/
const fs = require('fs');
function callback(err, data) {
    console.log('Baby got (call) back');
}
fs.readFile('c6.txt', 'utf-8', callback);


console.log('Challenge 7 --------------------------');
/*
  Context: Modern JavaScript has a class syntax for Object Oriented Programming
   
  Instructions:
    1. Add a new property to the User class for "email".
    2. Make it so that Alanis's email to be "ironic@dontchathink.com", adding
    console logs as necessary to confirm it is working
    3. Call the logIn method, also adding console logs as necessary to confirm
    it is working
*/
class User {
    constructor(username) {
        this.username = username;
        this.isLoggedIn = false;
    }
    logIn() {
        this.isLoggedIn = true;
    }
}

const user = new User('alanis');
// console.log('Alanis's username is:', user.username);



console.log('Challenge 8 --------------------------');
/*
  Rewrite Challenge 6 using lambda function syntax (aka "arrow function"):
      (a, b, c) => {              function (a, b, c) {
        // contents                 // contents
      }                           }

  Stuck? See node documentation on FS for clues, as all their examples use this:
  https://nodejs.org/api/fs.html
*/

