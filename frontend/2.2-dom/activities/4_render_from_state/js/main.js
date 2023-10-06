// "State" variables -- global variables we'll update before rendering
let name = '';
let noun = '';
let adjective = '';
let largeNumber = '';
let familyName = '';
let country = '';
let sillyNoun = '';

let selectedFormat = null; // (used in Challenge 5)

function render() {

    updateStateFromInputs();

    let results = `
        <p>Dear ${name},</p>
        <p>Congratulations on your acceptance to the University of ${noun}
        Science of ${sillyNoun} program! Our Department of ${sillyNoun} Studies
        has been rated the most ${adjective} of all universities in ${country}.
        In order to graduate, you will be expected to maintain a GPA of
        ${largeNumber} and never say anything bad about Professor
        ${familyName}.</p>
        <p>PS: We're all fans of ${sillyNoun}-ball here, also. Go ${noun}s!</p>
    `;

    let output = document.querySelector('#output');
    output.innerHTML = results;
}

function updateStateFromInputs() {

    // Partial hints for Challenge 2:
    //let nameInput = document.querySelector('#name');
    //console.log('Name input is:', nameInput.value);
    //name = 'Placeholder name';
}

