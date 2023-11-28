// This demo demonstrates tricky situations with async code

console.log('DEMO 1 - Before');

simufetch('/demo1.json', (err, data) => {
  console.log('DEMO 1 - Finished ');
});

console.log('DEMO 1 - After');


simufetch('/demo2.json', (err, data) => {
  console.log('DEMO 2 - Finished');
});

console.log('DEMO 2 - After');



const listOfAPIs = ['/api/thing.json', '/api/2/data.json'];

for (const url of listOfAPIs) {
  simufetch(url, (err, data) => {
    console.log(url, '- Finished');
  });
}

console.log('Once we are done with ALL of them...?')

























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


