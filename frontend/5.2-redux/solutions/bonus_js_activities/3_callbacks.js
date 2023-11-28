/*
    To run this file, use:
      node 3_callbacks.js
*/

const hasRead = {}; // ignore me!


/* Challenge 1: */

function challenge1(data, callback) {
  console.log('Challenge 1 --------------------------');
  console.log('Challenge 1: Got data', data);
  callback();
}

challenge1('C1 - start', () => {
  console.log('C1 - is over');
});





/* Challenge 2: */
function challenge2(extraData, callback) {
  simuread('challenge2.txt', (err, data) => {
    callback(data + extraData); // breaks if uncomments
  });
}


challenge2('<EXTRA>', (receivedData) => {
  if (receivedData === '[[[[challenge2.txt contents]]]]<EXTRA>') {
    console.log('Challenge 2 complete!');
  } else {
    console.log('Challenge 2 failed');
  }
});



/* Challenge 3 */
function challenge3(file1, file2, callback) {
  let count = 0;
  simuread(file1, (err, data) => {
    count++;
    if (count >= 2) {
      callback();
    }
  });
  simuread(file2, (err, data) => {
    count++;
    if (count >= 2) {
      callback();
    }
  });
}

challenge3('c3a', 'c3b', () => {
  if (hasRead.c3a && hasRead.c3b) {
    console.log('Challenge 3 success!');
  } else {
    console.log('Challenge 3 failed!');
  }
})


/* Challenge 4: */
function challenge4(arr, callback) {
  let count = 0;
  for (const filename of arr) {
    simuread(filename, (err, data) => {
      // Increment the count, and call if got to the end of the files
      count++;
      if (count >= arr.length) {
        callback();
      }
    });
  }
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
*/


/* Challenge 4 BONUS */
function challenge4promises(arr) {
  let count = 0;
  return {
    then: (callback) => {
      for (const filename of arr) {
        simuread(filename, (err, data) => {
          // Increment the count, and call if got to the end of the files
          count++;
          if (count >= arr.length) {
            callback();
          }
        });
      }
    }
  }
}

challenge4promises(['A', 'B', 'C', 'D', 'E', 'F', 'G'])
  .then(() => {
    if (hasRead.A && hasRead.B && hasRead.C && hasRead.D && hasRead.E &&
        hasRead.F && hasRead.G) {
      console.log('Challenge 4 promises success!');
    } else {
      console.log('Challenge 4 promises failed!');
    }
  })






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

