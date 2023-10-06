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
    let minPowerLevelInput = document.querySelector('#min-power-level-input');
    let minPowerLevel = Number(minPowerLevelInput.value);

    // Bonus: One liner to get max power-level
    let highest = Math.max(...powerLevels.map(pair => pair[0]));

    resultsDiv.innerHTML = '<p>Highest Power: ' + highest + '</p>';

    // Use map to loop through the array of information
    powerLevels
      .filter(([powerLevel, name]) => powerLevel >= minPowerLevel)
      .map(([powerLevel, name]) => {
        // Create a new div that contains this information
        let newDiv = document.createElement('div');

        // Give that div the class TestSubject, and fill in text with the name
        newDiv.classList.add('TestSubject');
        newDiv.textContent = name + ' - ' + powerLevel;

        let fractionalPowerLevel = powerLevel / highest;
        newDiv.style.width = fractionalPowerLevel * 500 + 'px';
        return newDiv;
      })
      .forEach(div => resultsDiv.appendChild(div));
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

    name = name.trim(); // Remove extraneous whitespace
    if (name === '') {
        return; // End the function, prevent an empty input
    }

    // Push the new info onto the array & rerender
    let pair = [powerLevel, name];
    powerLevels.push(pair);

    render();

    powerInput.value = '';
    nameInput.value = '';
}

render();
