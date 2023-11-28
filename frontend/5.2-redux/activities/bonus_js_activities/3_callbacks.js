/*
    This activity is a continuation of the previous activity. This time, you
    will be writing more functions.

    To run this file, use:
      node 3_callbacks.js
*/

const hasRead = {}; // ignore me!


/*
  Challenge 1:

  - Examine the following code. Can you tell what it is doing? What function(s)
    are being defined? What are the parameters and arguments involved?

  - Predict what will happen when you run this file. What order will the
    console.log statements occur, and why? Run this file with node, and see if
    you are right.

  - What will happen if you uncomment the line called 'callback'? Uncomment the
    callback() line, and again see if you are right.
*/

function challenge1(data, callback) {
  console.log('Challenge 1 --------------------------');
  console.log('Challenge 1: Got data', data);

  // callback();
}

challenge1('C1 - start', () => {
  console.log('C1 - is over');
});





/*
  Challenge 2:
  - Our goal with challenge2 is to call a callback, sending back data that was
    "obtained" from simuread

  - Now, only by modifying challenge2, cause this to print out "Challenge 2
    complete!" by running the callback that was passed in.
*/
function challenge2(extraData, callback) {
  simuread('challenge2.txt', (err, data) => {

    // Do something here...

  });

  // callback(data + extraData); // breaks if uncomments
  callback(); // also not working :(
}


challenge2('<EXTRA>', (receivedData) => {
  if (receivedData === '[[[[challenge2.txt contents]]]]<EXTRA>') {
    console.log('Challenge 2 complete!');
  } else {
    console.log('Challenge 2 failed');
  }
});



/*
  Challenge 3:
  Repeat of Challenge 3 of the previous activity. This time, you are
  designing your code to use callbacks.

  - Hint #1: Only modify  challenge3 function

  - Hint #2: Use a "callback counter", and only when it gets to 2 do you use
    the callback.
*/
function challenge3(file1, file2, callback) {
  simuread(file1, (err, data) => {
  });
  simuread(file2, (err, data) => {
  });

  callback();
}

challenge3('c3a', 'c3b', () => {
  if (hasRead.c3a && hasRead.c3b) {
    console.log('Challenge 3 success!');
  } else {
    console.log('Challenge 3 failed!');
  }
})




/*
  Challenge 4:
  Repeat of Challenge 4 from the previous. Write a function that given an
  array, it loops through the array, reading all the files, then calls the
  callback when done.

  - Hint #1: Only modify the contents of the challenge4 function. Don't touch
    the code below it.
  - Hint #2: Use a "callback counter"
*/
function challenge4(arr, callback) {
  simuread(arr[0], (err, data) => {
    // Need to do something....
  });

  callback();
}




challenge4(['a', 'b', 'c', 'd', 'e', 'f', 'g'], () => {
  if (hasRead.a && hasRead.b && hasRead.c && hasRead.d && hasRead.e &&
  hasRead.f && hasRead.g) {
    console.log('Challenge 4 success!');
  } else {
    console.log('Challenge 4 failed!');
  }
})


/*

  ADVANCED BONUS CHALLENGE
 
  Read up on Promise syntax.
  - Can you implement your own?
  - Can you rewrite challenge 4 to use the promise syntax instead?

  Hint: Do little to nothing in the function body, instead returning an object.
*/


/* If you are finished with more time, feel free to go to the next activity, or
** check out the "Bonus JS activity" which is a mini-quiz testing JS gotcha
** code comprehension */






/*
  This is function intended to simulate reading from a file.
  It uses JavaScript's setTimeout to cause something to take a little bit of
  time.
*/
function simuread(file, callback) {
  const data = `[[[[${file} contents]]]]`;
  const err = null;
  setTimeout(() => {
    hasRead[file] = true;
    callback(err, data);
  }, Math.random() * 2000);
}

