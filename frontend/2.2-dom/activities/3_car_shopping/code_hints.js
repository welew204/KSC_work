/////////////////// Challenge 2
// (These hints will require tweaks!)
let quantity = NAME_OF_VARIABLE_HOLDING_TD.textContent // how to get contents
NAME_OF_VARIABLE--; // how to decrement
////////////////////////////////////////////////




/////////////////// Challenge 3
if (quantity < 1) {
  element.parentElement.remove();
}
////////////////////////////////////////////////



/////////////////// Challenge 4
// In 2 steps:
let makeTd = tableRow.children[1];
let make = makeTd.textContent;
// Or condensed into 1 step each
let model = tableRow.children[2].textContent;

// In 2 steps
let makeInput = document.querySelector('#modal-make');
makeInput.value = make;
// Or condensed into 1 step each:
document.querySelector('#modal-model').value = model;
////////////////////////////////////////////////


/////////////////// Challenge 5
currentlyEditedTableRow.children[0].textContent = 'TESTING TESTING123';
////////////////////////////////////////////////


/////////////////// Challenge 6
td5.textContent = 'Buy';
td5.classList.add('Btn', 'Btn--buy');
td5.onclick = () => showEditModal(td5);
////////////////////////////////////////////////


/////////////////// Bonus Challenge
function comparisonFunction(rowA, rowB) {
  let tdA = rowA.children[columnNumber];
  let tdB = rowB.children[columnNumber];
  let valueA = tdA.textContent;
  let valueB = tdB.textContent;
  let valueALower = valueA.toLowerCase();
  let valueBLower = valueB.toLowerCase();
  if (valueALower < valueBLower) {
    return -1;
  } else if (valueALower > valueBLower) {
    return 1;
  } else {
    return 0;
  }
}


// Clear contents, and rebuild from array
tableBody.innerHTML = '';
for (let row of tableRowsArray) {
  tableBody.appendChild(row);
}


// Ensure new rows get added to the table Body instead of the table itself
// (this goes in addNew()):
let tableBody = document.querySelector('#data-table > tbody');
tableBody.appendChild(newTr);
