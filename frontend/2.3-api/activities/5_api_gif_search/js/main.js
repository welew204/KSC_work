// Do the activity here!
console.log("loaded the ish");

function doFetch() {
  console.log("doing ze FETCH");
  fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

function displayOutput() {
  console.log("displaying ze OUTPUT");
}
