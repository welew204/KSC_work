// "State" variables -- global variables we'll update before rendering
let name = "";
let noun = "";
let adjective = "";
let largeNumber = "";
let familyName = "";
let country = "";
let sillyNoun = "";

let selectedFormat = "uni"; // (used in Challenge 5)

function render() {
  //console.log("render HAPPEENIGN");

  let format_selector = document.querySelector("#formats");
  //console.log(format_selector.value);
  selectedFormat = format_selector.value;
  updateStateFromInputs();
  let results = "";
  if (selectedFormat === "uni") {
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
  } else if (selectedFormat === "hw") {
    results = `Hi Instructors,<br />
    I will be unable to submit homework today. I have come down with a case
    of "${sillyNoun} syndrome" after injesting a ${noun} and have a
    horribly ${adjective} liver. We have made an appointment with Dr.
    ${familyName}, who is the world's greatest expert on ${sillyNoun}
    syndrome and has ${largeNumber} degrees in sciencing from ${country}
    University. Dr. ${familyName} will send you all the information you
    need.  Thank you!<br />
    Thanks, <br />
    ${name}`;
  } else if (selectedFormat === "wash") {
    results = `<ol>
    <li>Thank you for purchasing  ${name}'s Signature Collection
    ${noun}!</li>
    <li>To begin assembly of your ${noun}, start by applying
    ${largeNumber} screws with a ${familyName}-style screwdriver.</li>
    <li>Then, travel to ${country}, and find the largest ${sillyNoun},
    and use the remaining ${largeNumber} of screws to attach it to
    the ${noun}.</li>
    <li>When complete, your ${noun} should look extremely
    ${adjective}.</li>
</ol>`;
  }

  let output = document.querySelector("#output");
  output.innerHTML = results;
}

function updateStateFromInputs() {
  //console.log("running UpdateStateFromInputs fnc");

  // Partial hints for Challenge 2:
  let nameInput = document.querySelector("#name");
  //console.log("Name input is:", nameInput.value);
  name = `${nameInput.value}`;

  let nounInput = document.querySelector("#noun");
  noun = `${nounInput.value}`;
  let adjectiveInput = document.querySelector("#adjective");
  adjective = `${adjectiveInput.value}`;
  let largeNumberInput = document.querySelector("#large-number");
  largeNumber = `${largeNumberInput.value}`;
  let familyNameInput = document.querySelector("#family-name");
  familyName = `${familyNameInput.value}`;
  let countryInput = document.querySelector("#country");
  country = `${countryInput.value}`;
  let sillyNounInput = document.querySelector("#silly-noun");
  sillyNoun = `${sillyNounInput.value}`;
}
