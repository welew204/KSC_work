let holidayData = null;
let gifData = null;


function render() {
    let output = document.querySelector('#output');
    output.innerHTML = '';

    for (let gif of gifData) {
        let image = document.createElement('img');
        image.setAttribute('src', gif.images.preview_gif.url);
        output.appendChild(image);
    }
}


function doFetch(searchTerm) {
    fetch('http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + searchTerm)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            gifData = data.data;
            render();
        });
}

function makeTd(content) {
    // Helper function that makes a new TD element, and sets some content
    let td = document.createElement('td');
    td.append(content);
    return td;
}

function renderHoliday() {
    let output = document.querySelector('#holidayOutput');
    output.innerHTML = '';


    for (let holiday of holidayData) {
        let tr = document.createElement('tr');

        // Make country flag image
        let image = document.createElement('img');
        image.src = `https://www.countryflags.io/${holiday.countryCode}/shiny/64.png`
        tr.appendChild(makeTd(image));

        tr.appendChild(makeTd(holiday.date));
        tr.appendChild(makeTd(holiday.localName));

        // For a simpler solution:
        // tr.appendChild(makeTd(holiday.countryCode));

        let gifSearch = document.createElement('button');
        gifSearch.textContent = 'Search';
        gifSearch.onclick = () => {
          doFetch(holiday.localName);
        };

        tr.appendChild(makeTd(gifSearch));
        output.appendChild(tr);
    }
}


function doFetchHoliday() {
    //fetch('/data/holidays_us.json')

    // Get country code from drop down
    let countryCodeInput = document.querySelector('#countries');
    let countryCode = countryCodeInput.value;

    fetch(`/data/holidays_${countryCode}.json`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            holidayData = data;
            renderHoliday();
        });
}


doFetchHoliday();
