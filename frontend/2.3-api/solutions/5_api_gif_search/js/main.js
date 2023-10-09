let apiData = [];

function render() {
    let output = document.querySelector('#output');
    output.innerHTML = '';

    for (let gif of apiData) {
        let image = document.createElement('img');
        image.setAttribute('src', gif.images.preview_gif.url);
        output.appendChild(image);

        // An example of adding a click event:
        image.onclick = () => alert(`Titled: ${gif.title}`);
    }
}


function doFetch() {
    let element = document.querySelector('#search');
    let searchTerm = element.value;
    fetch('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + searchTerm)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            apiData = data.data;
            render();
        });
}

