// What is a callback, exactly?

// Sometimes, we will have to write our own functions that are async
function getDataForID(idNumber, callback) {
  const url = '/api/' + idNumber + '/demo1.json';
  simufetch(url, (err, data) => {
    console.log('fetch finished, calback time!');

    callback(data);
  });
}

getDataForID(10, (results) => {
  console.log('For 10:', results);
});

getDataForID(15, (results) => {
  console.log('For 15:', results);
});



































/*
  PAY NO ATTENTION TO EVERYTHING BELOW HERE

  This is function intended to simulate sending a request.  It uses
  JavaScript's setTimeout to cause something to take a little bit of time.
*/
function simufetch(file, callback) {
  const data = `[[[[${file} response]]]]`;
  const err = null;
  setTimeout(() => {
    callback(err, data);
  }, Math.random() * 2000);
}


