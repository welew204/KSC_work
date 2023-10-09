// Solution


let attendeeCount = 0;
function incrementAttendees() {
    console.log('-- invoking attendees');
    attendeeCount++;
    console.log('incrementing:', attendeeCount);

    let span = document.querySelector('#attendees');
    console.log('span is:', span);
    span.textContent = attendeeCount;
}

let presenterCount = 0;
function incrementPresenters() {
    presenterCount++;
    let span = document.querySelector('#presenters');
    span.textContent = presenterCount;
}

function sayWrongAnswer() {
    console.log('Wrong answer getting clickeD!');
    
    let elem = document.querySelector('#q1buttons');
    elem.textContent = 'Wrong. Correct answer: Sacramento';
}

function sayRightAnswer() {
    console.log('right answer getting clickeD!');
    
    let elem = document.querySelector('#q1buttons');
    elem.textContent = 'Correct';
}




function addItem() {
    console.log('add item getting clickeD!');
    
    let inputElem = document.querySelector('#new-todo-item');
    console.log('input elem:', inputElem);
    let inputVal = inputElem.value;
    console.log('input val:', inputVal);
    
    let elem = document.querySelector('#todo-list');
    console.log('elem is:', elem);
    
    let li = document.createElement('li');
    li.textContent = inputVal;
    console.log(li);
    elem.appendChild(li);
    
    inputElem.value = '';
}






