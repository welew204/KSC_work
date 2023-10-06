function addNew() {
  console.log('Adding a new car.')

  let quantityInput = document.querySelector('#input-quant');
  let quantity = quantityInput.value;
  // TODO: Finish this for Make, Model, and Year

  let newTr = createNewRow(quantity, 'TODO', 'TODO', 'TODO');

  let table = document.querySelector('#data-table');
  table.appendChild(newTr);
}


function createNewRow(quantity, make, model, year) {
  let newTr = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');

  // TODO: Finish this for Model and Year

  td1.textContent = quantity;
  td2.textContent = make;

  newTr.appendChild(td1);
  newTr.appendChild(td2);

  return newTr;
}

function buyCar(element) {
  console.log('Table row:', element.parentElement);
  let quantityTd = element.parentElement.children[0];
  console.log('Quantity cell:', quantityTd);

  // TODO Change this to update from textContent
  let quantity = 4;

  quantityTd.textContent = quantity;
}


let currentlyEditedTableRow = null;
function showEditModal(element) {
  let tableRow = element.parentElement;
  console.log('Table row:', tableRow);
  currentlyEditedTableRow = tableRow;

  // TODO Complete

  // Show the modal:
  let modal = document.querySelector('#edit-modal');
  modal.classList.add('EditModal--visible');
}

function saveModal() {
  // TODO Complete
  // Hide the modal:
  let modal = document.querySelector('#edit-modal');
  modal.classList.remove('EditModal--visible');
}


function sortByColumn(columnNumber) {
  let tableBody = document.querySelector('#data-table > tbody');
  let tableRowsNodeList = tableBody.querySelectorAll('tr');
  let tableRowsArray = Array.from(tableRowsNodeList);


  // TODO: do sort of sorting here & reconstruct the table
}

