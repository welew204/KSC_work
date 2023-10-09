function addNew() {
  console.log("Adding a new car.");

  let quantityInput = document.querySelector("#input-quant");
  let quantity = quantityInput.value;
  let makeInput = document.querySelector("#input-make");
  let make = makeInput.value;
  let modelInput = document.querySelector("#input-model");
  let model = modelInput.value;
  let yearInput = document.querySelector("#input-year");
  let year = yearInput.value;
  // TODO: Finish this for Make, Model, and Year

  let newTr = createNewRow(quantity, make, model, year);

  let table = document.querySelector("#data-table");
  table.appendChild(newTr);
}

function createNewRow(quantity, make, model, year) {
  let newTr = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  let td6 = document.createElement("td");

  // TODO: Finish this for Model and Year

  td1.textContent = quantity;
  td2.textContent = make;
  td3.textContent = model;
  td4.textContent = year;
  td5.textContent = "Buy";
  td5.setAttribute("onClick", "buyCar(this)");
  td5.classList.add("Btn");
  td5.classList.add("Btn--buy");
  td6.textContent = "Edit";
  td6.setAttribute("onClick", "showEditModal(this)");
  td6.classList.add("Btn");
  td6.classList.add("Btn--edit");

  newTr.appendChild(td1);
  newTr.appendChild(td2);
  newTr.appendChild(td3);
  newTr.appendChild(td4);
  newTr.appendChild(td5);
  newTr.appendChild(td6);

  return newTr;
}

function buyCar(element) {
  //console.log("Table row:", element.parentElement);
  let quantityTd = element.parentElement.children[0];

  //console.log("Quantity cell:", quantityTd);

  // TODO Change this to update from textContent
  let quantity = quantityTd.textContent;
  quantity = parseInt(quantity) - 1;
  if (quantity === 0) {
    element.parentElement.remove();
  } else {
    quantityTd.textContent = quantity;
  }
}

let currentlyEditedTableRow = null;
function showEditModal(element) {
  let tableRow = element.parentElement;
  console.log("Table row:", tableRow);
  currentlyEditedTableRow = tableRow;

  // TODO Complete
  let quantity = parseInt(tableRow.children[0].textContent);
  let make = tableRow.children[1].textContent;
  let model = tableRow.children[2].textContent;
  let year = tableRow.children[3].textContent;
  let modal_container = document.querySelector(".EditModal-contents");
  console.log(modal_container);
  let modal_form = document.createElement("form");
  //console.log(modal_form);

  let quantity_inp = document.createElement("input");
  let quantity_inp_label = document.createElement("label");
  quantity_inp.value = quantity;
  quantity_inp.setAttribute("id", "edit-quantity-inp");
  quantity_inp_label.textContent = "Quantity";

  let make_inp = document.createElement("input");
  let make_inp_label = document.createElement("label");
  make_inp.value = make;
  make_inp_label.textContent = "Make";
  make_inp.setAttribute("id", "edit-make-inp");

  let model_inp = document.createElement("input");
  let model_inp_label = document.createElement("label");
  model_inp.value = model;
  model_inp_label.textContent = "Model";
  model_inp.setAttribute("id", "edit-model-inp");

  let year_inp = document.createElement("input");
  let year_inp_label = document.createElement("label");
  year_inp.value = year;
  year_inp_label.textContent = "Year";
  year_inp.setAttribute("id", "edit-year-inp");

  let s = document.createElement("button");
  s.textContent = "Save";
  s.setAttribute("onclick", "return saveModal()");
  s.classList.add("pure-button");
  s.classList.add("pure-button-primary");

  modal_container.appendChild(quantity_inp_label);
  modal_container.appendChild(quantity_inp);
  modal_container.appendChild(make_inp_label);
  modal_container.appendChild(make_inp);
  modal_container.appendChild(model_inp_label);
  modal_container.appendChild(model_inp);
  modal_container.appendChild(year_inp_label);
  modal_container.appendChild(year_inp);
  modal_container.appendChild(s);
  //modal_container.appendChild(modal_form);

  // Show the modal:
  let modal = document.querySelector("#edit-modal");
  modal.classList.add("EditModal--visible");
}

function saveModal() {
  console.log(currentlyEditedTableRow);

  console.log(currentlyEditedTableRow);
  // TODO Complete
  let modal_container = document.querySelector(".EditModal-contents");
  let quantity = document.querySelector("#edit-quantity-inp");
  currentlyEditedTableRow.children[0].textContent = quantity.value;
  let make = document.querySelector("#edit-make-inp");
  currentlyEditedTableRow.children[1].textContent = make.value;
  let model = document.querySelector("#edit-model-inp");
  currentlyEditedTableRow.children[2].textContent = model.value;
  let year = document.querySelector("#edit-year-inp");
  currentlyEditedTableRow.children[3].textContent = year.value;
  //console.log(quantity.value);
  modal_container.innerHTML = "";

  // Hide the modal:
  let modal = document.querySelector("#edit-modal");
  modal.classList.remove("EditModal--visible");
}

function sortByColumn(columnNumber) {
  let tableBody = document.querySelector("#data-table > tbody");
  let tableRowsNodeList = tableBody.querySelectorAll("tr");
  let tableRowsArray = Array.from(tableRowsNodeList);

  // TODO: do sort of sorting here & reconstruct the table

  // first I would determine the sorting field selected
  // then, I would sort those values for each row (so all children [3] or whatever)
  // do test on sort order (if first value is prior to last value, assume sorted ascending, sort descending, and VV)
  // tricky part is moving the order of every row BASED on the value of a siungle column
  // I think I would use .map to iterate over every item in an array and sort based on a test function?
}
