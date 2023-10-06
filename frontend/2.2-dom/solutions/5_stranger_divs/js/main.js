console.log('Stranger divs time');

// Array that contains all the data
let powerLevels = [
    [5, 'Jane'],
    [3, 'Kali'],
];

function render() {
    console.log('---------- rendering!')
    // Fetch the div from the page
    let resultsDiv = document.querySelector('#results');

    // Clear anything that might be in the div
    resultsDiv.innerHTML = '';

    // Loop through the array of information
    for (let powerLevelInfo of powerLevels) {

        // Grab the powerLevel and name of each test subject
        let powerLevel = powerLevelInfo[0];
        let name = powerLevelInfo[1];

        // Create a new div that contains this information
        let newDiv = document.createElement('div');

        // Give that div the class TestSubject, and fill in text with the name
        newDiv.classList.add('TestSubject');

        // Challenge 2:
        newDiv.textContent = name + ' - ' + powerLevel;

        // Challenge 3:
        newDiv.style.width = powerLevel * 100 + 'px';

        // Add the div to the page
        console.log('made a new div:', newDiv)
        resultsDiv.appendChild(newDiv);
    }
}

function recordItem() {
    console.log('-------- recordItem');

    // Fetch the inputs from the page (and console.log for debugging)
    let nameInput = document.querySelector('#name-input');
    let powerInput = document.querySelector('#power-input');
    console.log('Inputs:', nameInput, powerInput);

    // Get the value of the inputs (and console.log for debugging)
    let name = nameInput.value;
    let powerLevel = powerInput.value;
    console.log('Values:', name, powerLevel);

    // Challenge 4:
    if (name === '') {
        return; // End the function, prevent an empty input
    }

    // Push the new info onto the array & rerender
    let pair = [powerLevel, name];
    powerLevels.push(pair);
    render();

    // Challenge 4:
    powerInput.value = '';
    nameInput.value = '';
}

render();
