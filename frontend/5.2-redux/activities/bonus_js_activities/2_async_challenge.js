/*
    This activity is intended to give you more practice with using Callbacks.

    "simuread" is a function written to simulate reading from a file. It is
    very similar to the actual interface found in Node for reading from a file.
    The logic and syntax also resembles a lot of async operations you will
    encounter when developing React (and Node) applications.

    To run this file, use:
      node 2_async_challenge.js
*/



console.log('Challenge 1 --------------------------');
/*
  Challenge 1:
  Predict what will happen when you run this file. What order will the
  console.log statements occur, and why?

  Run it, and see if you are right.
*/
console.log('C1 - Before challenge');
simuread('challenge1.txt', (err, data) => {
  // Got data back
  console.log('C1 - Finished reading challenge1.txt');
  console.log('C1 - Read: ', data);
});
console.log('C1 - After challenge');


console.log('Challenge 2 --------------------------');
/*
  Challenge 2: Uncomment and modify the following code to print out part1
  followed by part2, consistently every time this is run
*/

/*
simuread('challenge2-part1.txt', (err, data) => {
  console.log('C2 - Read: ', data);
});
simuread('challenge2-part2.txt', (err, data) => {
  console.log('C2 - Read: ', data);
});
*/


/*
  Challenge 3: Same as above, but your ownly goal is to get C3-LAST to always
  print out after FIRST1 and FIRST2. FIRST1 and FIRST2 can be in any order.

  Hint: Use a "callback counter", and only when it gets to 2, then do the
  C3-LAST.
*/

/*
simuread('C3-FIRST1.txt', (err, data) => {
});
simuread('C3-FIRST2.txt', (err, data) => {
});
simuread('C3-LAST.txt', (err, data) => {
});
*/


/*
  Challenge 4: Time for the dreaded for-loop! Your task is to call
  checkChallenge4Data only after you have looped through all the files.
*/
const filenames = ['C4-a', 'C4-b', 'C4-c', 'C4-d', 'C4-e', 'C4-f'];
const fileData = {};
for (const filename of filenames) {
  simuread(filename, (err, data) => {
    // Need to do something....
    fileData[filename] = data;
  });
}

checkChallenge4Data();


/*
  Challenge 5: Now, you must "simuread" from all these files, with one catch:
  you must always read from a "1" before you read from its "2". However, you
  should be reading from a1, b1, c1 simultaneously.

  When you are done, print out the -->Challenge 5<-- at the end
*/
const c5filenames = ['C5-a1', 'C5-a2', 'C5-b1', 'C5-b2', 'C5-c1', 'C5-c2'];

console.log('-->Challenge 5<--');


/* If you are finished with more time, feel free to go to the next activity, or
** check out the "Bonus JS activity" which is a mini-quiz testing JS gotcha
** code comprehension */








/*
  PAY NO ATTENTION TO EVERYTHING BELOW HERE

  This is function intended to simulate reading from a file.  It uses
  JavaScript's setTimeout to cause something to take a little bit of time.
*/
function simuread(file, callback) {
  const data = `[[[[${file} contents]]]]`;
  const err = null;
  setTimeout(() => {
    callback(err, data);
  }, Math.random() * 2000);
}


function checkChallenge4Data () {
  console.log('Challenge 4 is over:');
  if ((new Set(Object.keys(fileData))).size === 6 &&
        (new Set(Object.values(fileData))).size === 6) {
    // All keys and values are distinct
    console.log('Success 4: Success, populated');
  } else {
    console.log('Challenge 4: Failure, not populated');
  }
}
