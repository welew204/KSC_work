// To-Do LIST:
var todoItems = [
    'Buy milk (almond)',
    'Buy beer',
    'Work on homework',
];

function renderTodoList() {
    let elem = document.querySelector('#todo-list');
    elem.innerHTML = '';
    for (let item of todoItems) {
        let li = document.createElement('li');
        li.textContent = item;

        let button = document.createElement('button');
        button.textContent = 'X';
        button.onclick = () => {
            todoItems.splice(todoItems.indexOf(item), 1);
            renderTodoList();
            let strVersionOfArr = JSON.stringify(todoItems);
            localStorage.setItem('todolist', strVersionOfArr);
        }
        li.appendChild(button);

        elem.appendChild(li);
    }
}

function todoListRenderFirst() {
    let oldTodoList = localStorage.getItem('todolist');
    if (oldTodoList) {
        todoItems = JSON.parse(oldTodoList);
    }
    renderTodoList();
}

function addItem() {
    let inputElem = document.querySelector('#new-todo-item');
    let inputVal = inputElem.value;
    todoItems.push(inputVal);
    renderTodoList();
    inputElem.value = '';

    let strVersionOfArr = JSON.stringify(todoItems);
    localStorage.setItem('todolist', strVersionOfArr);
}


todoListRenderFirst();

