let name = '';
let noun = '';
let adjective = '';
let largeNumber = '';
let familyName = '';
let sillyNoun = '';

// Added new global variable for which one was selected
let selectedFormat = 'uni';

function render() {

    /* Challenge #1: */
    console.log('rerendering');

    updateStateFromInputs();

    /* Challenge #5 */
    let results;
    if (selectedFormat === 'uni') {
        results = `
            <p>Dear ${name},</p>
            <p>Congratulations on your acceptance to the University of ${noun}
            Science of ${sillyNoun} program! Our Department of ${sillyNoun} Studies
            has been rated the most ${adjective} of all universities in ${country}.
            In order to graduate, you will be expected to maintain a GPA of
            ${largeNumber} and never say anything bad about Professor
            ${familyName}.</p>
            <p>PS: We're all fans of ${sillyNoun}-ball here, also. Go ${noun}s!</p>
        `;
    } else if (selectedFormat === 'hw') {
        results = `
            Hi Instructors,<br />
            I will be unable to submit homework today. I have come down with a case
            of "${sillyNoun} syndrome" after injesting a ${noun} and have a
            horribly ${adjective} liver. We have made an appointment with Dr.
            ${familyName}, who is the world's greatest expert on ${sillyNoun}
            syndrome and has ${largeNumber} degrees in sciencing from ${country}
            University. Dr. ${familyName} will send you all the information you
            need.  Thank you!<br />
            Thanks, <br />
            ${name}
        `;
    } else {
        results = `
            <ol>
                <li>Thank you for purchasing a ${name} Signature Collection
                ${noun}!</li>
                <li>To begin assembly of your ${noun}, start by applying
                ${largeNumber} screws with a ${familyName}-style screwdriver.</li>
                <li>Then, travel to ${country}, and find the largest
                ${sillyNoun}, and use the remaining ${largeNumber} screws to
                attach it to the ${noun}.</li>
                <li>When complete, your ${noun} should look extremely
                ${adjective}.</li>
            </ol>
        `;
    }


    let output = document.querySelector('#output');
    output.innerHTML = results;
}

function updateStateFromInputs() {
    /* Challenge #2: */
    let nameInput = document.querySelector('#name');

    /* Challenge #3: */
    let nounInput = document.querySelector('#noun');

    /* Challenge #3: */
    name = nameInput.value;
    noun = nounInput.value;
    adjective = document.querySelector('#adjective').value;
    largeNumber = document.querySelector('#large-number').value;
    familyName = document.querySelector('#family-name').value;
    country = document.querySelector('#country').value;
    sillyNoun = document.querySelector('#silly-noun').value;

    /* Challenge #5 */
    selectedFormat = document.querySelector('#formats').value;
}

