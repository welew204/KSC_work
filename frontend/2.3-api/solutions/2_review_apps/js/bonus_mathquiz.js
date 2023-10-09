let quiz = {
    num1: null,
    num2: null,
    result: null,
    resultRem: null,
    operation: null,
};

// Set to 100 for hard mode!
const DIFFICULTY = 10;

function randint(max) {
    // Generates a random integer up to max
    return Math.floor(Math.random() * max);
}

function randChoice(arr) {
    // Randomly selects an item within the array in arr
    return arr[randint(arr.length)];
}

function randomlyPickNewQuestion() {
    // This generates a new question, updating the global "quiz" variable
    quiz.num1 = randint(DIFFICULTY);
    quiz.num2 = randint(DIFFICULTY);
    quiz.operation = randChoice(['*', '/', '+', '-']);
    quiz.resultRem = null;
    if (quiz.operation === '*') {
        // Get product of the two numbers
        quiz.result = quiz.num1 * quiz.num2;
    } else if (quiz.operation === '/') {
        // Get the quotient (divide + round down)...
        quiz.result = Math.floor(quiz.num1 / quiz.num2);
        // ...and the remainder (% is remainder op)
        quiz.resultRem = quiz.num1 % quiz.num2;
    } else if (quiz.operation === '+') {
        // Get sum of the two numbers
        quiz.result = quiz.num1 + quiz.num2;
    } else {
        // Subtract the two numbers
        quiz.result = quiz.num1 - quiz.num2;
    }
}

function updateDom() {
    let spanNum1 = document.querySelector('#math-operand1');
    let spanNum2 = document.querySelector('#math-operand2');
    let spanOperation = document.querySelector('#math-operation');

    // Hide remainder area
    let remArea = document.querySelector('#math-remainder-area');
    remArea.style.display = 'none';

    spanNum1.textContent = quiz.num1;
    spanNum2.textContent = quiz.num2;
    let opSymbol = quiz.operation;
    // Update operation symbol to use special character for multiplication and
    // division, and show remainder area
    if (opSymbol === '/') {
        opSymbol = '÷';
        remArea.style.display = 'inline';
    } else if (opSymbol === '*') {
        opSymbol = '×';
    }
    spanOperation.textContent = opSymbol;
}


function displayCorrect() {
    let elem = document.querySelector('.Arithmetic');
    elem.classList.remove('Arithmetic--wrong');
    elem.classList.add('Arithmetic--correct');
}

function displayWrong() {
    let elem = document.querySelector('.Arithmetic');
    elem.classList.remove('Arithmetic--correct');
    elem.classList.add('Arithmetic--wrong');
}

function checkAnswer() {
    // This checks if the answer is correct or not
    let resultInput = document.querySelector('#math-result');
    let remInput = document.querySelector('#math-remainder');
    let resAnswer = Number(resultInput.value);

    // If its wrong, show the wrong class and exit immediately
    if (quiz.result !== resAnswer) {
        displayWrong();
        return;
    }

    // If there is a remainder expected for this question (e.g. it is long
    // division), then check that
    if (quiz.resultRem !== null) {
        let remAnswer = Number(remInput.value);
        if (quiz.resultRem !== remAnswer) {
            displayWrong();
            return;
        }
    }

    // If it did not return by now, then it is correct. Change the class,
    // disable the inputs, and generate a new question in 3 seconds.
    displayCorrect();
    resultInput.setAttribute('disabled', 'disabled');
    remInput.setAttribute('disabled', 'disabled');
    setTimeout(() => {
        randomizeNew();
    }, 3 * 1000);
}

function resetElems() {
    // This resets everything for the next question
    let elem = document.querySelector('.Arithmetic');
    elem.classList.remove('Arithmetic--correct');
    elem.classList.remove('Arithmetic--wrong');
    let resultInput = document.querySelector('#math-result');
    resultInput.removeAttribute('disabled');
    resultInput.value = '';

    // Force this input to have focus, so the user can start typing right away
    resultInput.focus();
    let remInput = document.querySelector('#math-remainder');
    remInput.removeAttribute('disabled');
    remInput.value = '';
}


function randomizeNew() {
    resetElems();
    randomlyPickNewQuestion();
    updateDom();
}

randomizeNew();
