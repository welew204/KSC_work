///////////////////////////////////////// Trivia Clue


// USING HTML:
/*
<div class="Question" id="q5">
    <h3>What was the legendary Benedictine monk who invented champagne?</h3>
    <div class="Question-answer" id="q5answer"></div>
    <button onClick="
        document.querySelector('#q5answer').textContent = 'Wrong!';
        document.querySelector('#q5').classList.remove('Question--correct');
        document.querySelector('#q5').classList.add('Question--wrong');
    ">Duff</button>
    <button onClick="
        document.querySelector('#q5answer').textContent = 'Wrong!';
        document.querySelector('#q5').classList.remove('Question--correct');
        document.querySelector('#q5').classList.add('Question--wrong');
    ">Sir Fizzy Sparkles</button>
    <button onClick="
        document.querySelector('#q5answer').textContent = 'Right!';
        document.querySelector('#q5').classList.remove('Question--wrong');
        document.querySelector('#q5').classList.add('Question--correct');
    ">Dom Perignon</button>
    <button onClick="
        document.querySelector('#q5answer').textContent = 'Wrong!';
        document.querySelector('#q5').classList.remove('Question--correct');
        document.querySelector('#q5').classList.add('Question--wrong');
    ">Don Spumante de Frizzante</button>
</div>
*/

// Example of converting to HTML function to be called
function setWrong() {
  document.querySelector('#q5answer').textContent = 'Wrong!';
  document.querySelector('#q5').classList.remove('Question--correct');
  document.querySelector('#q5').classList.add('Question--wrong');
}
/////////////////////////////////////////





///////////////////////////////////////// COUNTER CLUE
let lettuceCount = 0;

function buyLettuce() {
  console.log('okay lettuce is getting clicked');
  lettuceCount++;

  let lettuceCountSpan = document.querySelector('#lettuce-count');
  lettuceCountSpan.textContent = lettuceCount;
}
/////////////////////////////////////////





///////////////////////////////////////// TODO APP CLUE
let todoItems = ['Work on homework', 'Eat'];
function render() {
    let div = document.querySelector('#todo-list');
    div.innerHTML = '';
    for (let item of todoItems) {
        let p = document.createElement('p');
        p.textContent = item;
        div.appendChild(p);
    }
}
function addItem() {
    var value = document.querySelector('#todo-input').value;
    todoItems.push(value);
    input.value = '';
    render();
}
/////////////////////////////////////////





