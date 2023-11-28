/* To run this file, use: node 2_async_challenge.js */


/* Challenge 1: */
simuread('challenge1.txt', (err, data) => {
  // happens AFTER everything because async :(
  console.log('Challenge 1 --------------------------');
  console.log('C1 - Finished reading challenge1.txt');
  console.log('C1 - Read: ', data);
});


/* Challenge 2 */
simuread('challenge2-part1.txt', (err, data) => {
  console.log('Challenge 2 --------------------------');
  console.log('C2 - Read: ', data);
  simuread('challenge2-part2.txt', (err, data) => {
    console.log('C2 - Read: ', data);
  });
});


/* Challenge 3 */

let count = 0;
simuread('C3-FIRST.txt', (err, data) => {
  console.log(data);
  count++;
  if (count >= 2) {
    simuread('C3-LAST.txt', (err, data) => {
      console.log(data);
    });
  }
});
simuread('C3-FIRST.txt', (err, data) => {
  console.log(data);
  count++;
  if (count >= 2) {
    simuread('C3-LAST.txt', (err, data) => {
      console.log(data);
    });
  }
});


/* Challenge 4 */
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



/* Challenge 5
  you must always read from a "1" before you read from its "2". However, you
  should be reading from a1, b1, c1 simultaneously.

  When you are done, print out the -->Challenge 5<-- at the end
*/
const c5filenames = ['C5-a1', 'C5-a2', 'C5-b1', 'C5-b2', 'C5-c1', 'C5-c2'];


const t1files = ['C5-a1', 'C5-b1', 'C5-c1'];
const t2files = ['C5-a2', 'C5-b2', 'C5-c2'];
function tierOne() {
  let count = 0;
  for (const fn of t1files) {
    simuread(fn, (err, data) => {
      console.log('C5 - 1', data);

      count++;
      if (count >= 3) {
        tierTwo();
      }
    });
  }
}

function tierTwo() {
  let count = 0;
  for (const fn of t2files) {
    simuread(fn, (err, data) => {
      console.log('C5 - 2', data);

      count++;
      if (count >= 3) {
        done();
      }
    });
  }
}

function done() {
  console.log('-->Challenge 5<--');
}

tierOne();








/*
  This is function intended to simulate reading from a file.
  It uses JavaScript's setTimeout to cause something to take a little bit of
  time.
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
