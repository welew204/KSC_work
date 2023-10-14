console.log("running js file");
current_quote = "";
current_gif_url = "";

function quoteGrab() {
  fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes").then((result) =>
    result.json().then((qt) => {
      //console.log(qt);
      current_quote = qt;
      //console.log(current_quote);
      render();
    })
  );
}
function gifGrab() {
  search_term = "Ron Swanson";
  fetch(
    `http://api.giphy.com/v1/gifs/search?q=${search_term
      .toLowerCase()
      .split(" ")
      //.join("+")}&api_key=4wfuhxPiOnZFeKvPu1F3xFpdc3EmPPo3&limit=5`
      .join("+")}&api_key=CsuJz7ih730ReIxBHNH3vfVpETev9ukb&limit=5`
  )
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      current_gif_url = data.data[0].embed_url;
    });
}

function render() {
  let quote_container = document.querySelector("#quote-container");
  let quote_block = document.createElement("h3");
  let gif_block = document.createElement("img");
  console.log(current_gif_url);
  gif_block.src = current_gif_url;
  gif_block.alt = "can;'t load it...";
  quote_block.textContent = current_quote;
  quote_container.appendChild(quote_block);
  quote_container.appendChild(gif_block);
}

quoteGrab();
gifGrab();
//render();
