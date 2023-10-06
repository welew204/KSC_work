let todoItems = [
  "Work on homework",
  "Eat",
  "Do more coding",
  "Stay up late with even more coding",
];

function render() {
  console.log("render getting invoked --> hi boo");

  // Challenge #2 HINT:

  let div = document.querySelector("#todo-input");
  div.value = "";
  console.log(div);

  // Challenge #3 HINT:
  let list = document.querySelector("#todo-list");
  list.innerHTML = "";

  // Challenge #4 HINT:

  for (let item of todoItems) {
    let paragraph = document.createElement("p");
    console.log("for loop item:", item);
    paragraph.textContent = item;
    list.appendChild(paragraph);
  }
}

function addItem() {
  console.log("add item button getting clicked");
  let input = document.querySelector("#todo-input");
  console.log("The input element:", input);
  let value = input.value;
  console.log("The value entered:", value);
  todoItems.push(value);
  console.log("...DONE adding item to list....");
  render();

  // Challenge #6 HINT:
  // todoItems.push('Testing, testing, 123...')
  // console.log('To-do items after push:', todoItems);

  // Challenge #7 HINT:
  // Hint #1: To invoke the render function, use: render()
  // Hint #2: Clear an element like: div.innerHTML = '';

  // Challenge #8 HINT:
  // Look at the console.log output with "value" and "input" for clues!
}

render();
