// JavaScript code goes here!
console.log('Hello Farm World!')

// Setting initial feeding count to 0
let pigFedCount = 0;

// Creating a new function called feedPig
function feedPig() {
  // Logging to the debug console
  console.log("Pig is getting fed.");

  pigFedCount++; // increment pigFedCount

  // Fetching from the document the span with ID #pig-eaten
  let span = document.querySelector('#pig-eaten');
  span.textContent = pigFedCount;

  // render(); // DRY refactor instead of previous two lines
}

let horseFedCount = 0;
function feedHorse() {
  // Logging to the debug console
  console.log("Horse is getting fed.");

  if (horseFedCount > 9) {
    // Use an if-statement to prevent the horse "fed count" from
    // exceeding 10.
    alert("Stop feeding me, I'm full!");
    return; // end function prematurely with an if statement
  }


  horseFedCount++; // increment horseFedCount

  // Fetching from the document the span with ID #horse-eaten
  let span = document.querySelector('#horse-eaten');
  span.textContent = horseFedCount;


  // render(); // DRY refactor instead of previous two lines
}


let goatFedCount = 0;
function feedGoat() {
  // Logging to the debug console
  console.log("Horse is getting fed.");

  goatFedCount++; // increment goatFedCount

  // Uh oh, the goat is hungry and will eat all the stuff
  horseFedCount = Math.floor(horseFedCount / 2);
  pigFedCount = Math.floor(pigFedCount / 2);

  // Use this function to rerender all of the fed counts
  render();

  // Playing sound effect
  // new Audio('sounds/eating.mp3').play();
}

function render() {
  // Fetching from the document the span with ID #goat-eaten
  document.querySelector('#pig-eaten').textContent = pigFedCount;
  document.querySelector('#horse-eaten').textContent = horseFedCount;
  document.querySelector('#goat-eaten').textContent = goatFedCount;
}



pigFedCount = 10;
horseFedCount = 10;
goatFedCount = 10;
render();
    /*
// Bonus:
setInterval(() => {
    if (pigFedCount < 1) {
        alert('The pig died. Oinnnnk');
        return;
    }
    if (horseFedCount < 1) {
        alert('The horse died. Neighhh');
        return;
    }
    if (goatFedCount < 1) {
        alert('The goat died. Bahhh');
        return;
    }

    pigFedCount--;
    horseFedCount--;
    goatFedCount--;
    render();
}, 1000);
*/
