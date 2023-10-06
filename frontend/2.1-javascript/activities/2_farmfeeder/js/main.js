// JavaScript code goes here!
console.log(
  "computers suck, but this file just ran! ...",
  "frontend/2.1-javascript/activities/2_farmfeeder/js/main.js"
);
let horseFedCount = 0;
const horseSpan = document.createElement("span");
let body = document.querySelector("body");
function feedHorse() {
  console.log("Horse is getting fed.");
  if (horseFedCount < 10) {
    horseFedCount++; // increment horseFedCount
    horseSpan.textContent = "Horse got fed this many times:" + horseFedCount;
    body.appendChild(horseSpan);
  } else {
    let horseDone = document.createElement("h1");
    horseDone.textContent = "I'm FULLLL! Stop feeding me.";
    body.append(horseDone);
  }
}
let goatFedCount = 0;
const goatSpan = document.createElement("span");

function feedGoat() {
  console.log("Goat is getting fed.");
  goatFedCount++; // increment goatFedCount
  goatSpan.textContent = "Goat got fed this many times:" + goatFedCount;
  body.appendChild(goatSpan);
  if (goatFedCount > 10) {
    horseFedCount = Math.floor(horseFedCount / 2);
    horseSpan.textContent = "Horse got fed this many times:" + horseFedCount;
  }
}
