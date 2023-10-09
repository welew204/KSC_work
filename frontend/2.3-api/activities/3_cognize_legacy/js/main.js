accordion_toggle = false;
console.log("accordion toggle equalin...", accordion_toggle);

let tryCognize = function () {
  console.log("fartin away");
  let element = document.querySelector("#top-title");
  element.textContent = "Bé Cognizé";
};

function toggle_learn_more() {
  console.log("Learning MOROORE!");
  let accordion = document.querySelector(".Accordion");
  let mi_button = document.querySelector("#more-info-button");
  console.log(accordion);
  if (accordion_toggle === true) {
    accordion.classList.remove("Accordion--collapsed");
    mi_button.textContent = "Learn More ↑";
  } else {
    accordion.classList.add("Accordion--collapsed");
    mi_button.textContent = "Learn More ↓";
  }
  accordion_toggle = !accordion_toggle;
  console.log("accordion toggle equalin...", accordion_toggle);
}
