function addNew() {
  /*
    Add new button was clicked! Get the data that needs to be added element,
    use the createNewRow function to make a new TR element, then add that add
    that new TR element to the table Body.
  */
  console.log('Adding a new car.')

  let quantityInput = document.querySelector('#input-quant');
  let quantity = quantityInput.value;
  let make = document.querySelector('#input-make').value;
  let model = document.querySelector('#input-model').value;
  let year = document.querySelector('#input-year').value;

  let newTr = createNewRow(quantity, make, model, year);

  let tableBody = document.querySelector('#data-table > tbody');
  tableBody.appendChild(newTr);
}


function createNewRow(quantity, make, model, year) {
  /*
    Given a quantity, make, model, and year, create a brand new TR (table row)
    element, and return it.
  */
  let newTr = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  let td3 = document.createElement('td');
  let td4 = document.createElement('td');
  let td5 = document.createElement('td');
  let td6 = document.createElement('td');
  td1.textContent = quantity;
  td2.textContent = make;
  td3.textContent = model;
  td4.textContent = year;
  td5.textContent = 'Buy';
  td5.classList.add('Btn', 'Btn--buy');
  td5.onclick = () => buyCar(td5);
  td6.textContent = 'Edit';
  td6.classList.add('Btn', 'Btn--info');
  td6.onclick = () => showEditModal(td6);

  newTr.appendChild(td1);
  newTr.appendChild(td2);
  newTr.appendChild(td3);
  newTr.appendChild(td4);
  newTr.appendChild(td5);
  newTr.appendChild(td6);
  return newTr;
}

function buyCar(element) {
  /*
    Take the quantity data in the table that corresponds to the row that
    "element" resides in (the thing getting clicked on), subtract 1 from it,
    then put it back into the table.

    If we are at 0, delete the entire row.
  */
  console.log('Table row:', element.parentElement);
  console.log('Quantity cell:', element.parentElement.children[0]);
  let quantityTd = element.parentElement.children[0];
  let quantity = quantityTd.textContent;
  quantity--;
  if (quantity < 1) {
    // Nothing left!
    element.parentElement.remove();
  }
  quantityTd.textContent = quantity;
}


let currentlyEditedTableRow = null;
function showEditModal(element) {
  /*
    Take the data in the table that corresponds to the row that "element"
    resides in (the thing getting clicked on), and then put it into the modal.
  */
  let tableRow = element.parentElement;
  console.log('Table row:', tableRow);

  currentlyEditedTableRow = tableRow;

  // In 2 steps:
  let makeTd = tableRow.children[1];
  let make = makeTd.textContent;
  // Or condensed into 1 step each:
  let model = tableRow.children[2].textContent;
  let year = tableRow.children[3].textContent;

  // In 2 steps
  let makeInput = document.querySelector('#modal-make');
  makeInput.value = make;
  // Or condensed into 1 step each:
  document.querySelector('#modal-model').value = model;
  document.querySelector('#modal-year').value = year;

  let modal = document.querySelector('#edit-modal');
  modal.classList.add('InfoModal--visible');
}

function saveModal() {
  /*
    Take contents from the modal, and save it back to the table.
  */
  let newMake = document.querySelector('#modal-make').value;
  let newModel = document.querySelector('#modal-model').value;
  let newYear = document.querySelector('#modal-year').value;
  // In 2 steps
  let makeTd = currentlyEditedTableRow.children[1];
  makeTd.textContent = newMake;

  // Or condensed into 1 step each:
  currentlyEditedTableRow.children[2].textContent = newModel;
  currentlyEditedTableRow.children[3].textContent = newYear;

  // And hide the modal:
  let modal = document.querySelector('#edit-modal');
  modal.classList.remove('InfoModal--visible');
}


function sortByColumn(columnNumber) {
  let tableBody = document.querySelector('#data-table > tbody');
  let tableRowsNodeList = tableBody.querySelectorAll('tr');
  let tableRowsArray = Array.from(tableRowsNodeList);

  /*
    Comparison functions are a feature of sorting. They must return 1, 0, or -1
    depending on if one value is greater, equal, or less than the other value.
    They allow us to sort arbitrary types of data (in this case, DOM elements)
    in an array.
  */
  function comparisonFunction(rowA, rowB) {
    // Get the relevant tds
    let tdA = rowA.children[columnNumber];
    let tdB = rowB.children[columnNumber];
    // Get the relevant values, and convert to lowercase (so that "A" doesn't
    // come after "z")
    let valueA = tdA.textContent;
    let valueB = tdB.textContent;
    let valueALower = valueA.toLowerCase();
    let valueBLower = valueB.toLowerCase();

    // Finally, compare the strings alphabetical order, and return the
    // indicated number so that the sort happens correctly
    if (valueALower < valueBLower) {
      return -1;
    } else if (valueALower > valueBLower) {
      return 1;
    } else {
      return 0;
    }
  }


  // Do a "sort" on tableRowsArray using the specified custom comparison
  // function
  tableRowsArray.sort(comparisonFunction);

  // Clear contents, and rebuild contents from array
  tableBody.innerHTML = '';
  for (let row of tableRowsArray) {
    tableBody.appendChild(row);
  }
}

