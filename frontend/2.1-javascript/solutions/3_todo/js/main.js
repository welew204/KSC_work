let todoItems = [
    'Work on homework',
    'Eat',
    'Do more homework',
    'Stay up late with more coding',
];

function render() {
    // Challenge #2
    let div = document.querySelector('#todo-list');

    div.innerHTML = ''; // (Challenge #7)

    // Challenge #3
    // let paragraph = document.createElement('p');
    // paragraph.textContent = "Todo List";
    // div.appendChild(p);

    // Loop through the todoItems, so that you are adding each of the items in
    // the todoItems array as a new p tag.
    for (let item of todoItems) {
        let paragraph = document.createElement('p');
        paragraph.textContent = item;

        div.appendChild(paragraph);

        // Bonus challenge:
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.onclick = () => {
            // Sadly there is no "remove" method on JavaScript arrays (can only
            // remove by index), which means more complex code is necessary to
            // remove an element
            let index = todoItems.indexOf(item);
            todoItems.splice(index, 1);

            render(); // rerender based on array
        };
        paragraph.appendChild(deleteButton);
    }
}

function addItem() {
    console.log('add item button getting clicked');
    let input = document.querySelector('#todo-input');
    console.log('The input element:', input);
    let value = input.value;
    console.log('The value entered:', value);

    todoItems.push(value); // Challenge #8

    render(); // Challenge #7
    input.value = ''; // Clear the input every time
}

render();
