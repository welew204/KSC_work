let triviaQuestions = [
    {
        question: 'What is the capital of the state of California?',
        choices: [
            'San Francisco',
            'Oakland',
            'Sacramento',
            'Los Angeles',
        ],
        correctAnswer:  'Sacramento',
    },
    {
        question: 'What is the capital of the state of Washington?',
        choices: [
            'Seattle',
            'Spokane',
            'Redmond',
            'Olympia',
        ],
        correctAnswer:  'Olympia',
    },
    {
        question: 'What is the capital of the state of New York?',
        choices: [
            'Albany',
            'Yonkers',
            'Buffalo',
            'New York City',
        ],
        correctAnswer:  'Albany',
    },
];

let triviaRight = 0;
let triviaWrong = 0;

function buildTriviaQuestions() {
    let outputElem = document.querySelector('#trivia-questions');
    for (let {question, correctAnswer, choices} of triviaQuestions) {     
        let header = document.createElement('h3');
        header.textContent = question;

        let p = document.createElement('p');

        for (let choice of choices) {
            let button = document.createElement('button');
            button.textContent = choice;
            button.onclick = () => {
                if (choice === correctAnswer) {
                    p.textContent = 'Correct';
                    triviaRight++;
                } else {
                    p.textContent = 'Wrong. Correct answer: ' + correctAnswer;
                    triviaWrong++;
                }
                let total = triviaRight + triviaWrong;
                p.textContent += ` (${triviaRight}/${total} correct)`;
            };
            p.appendChild(button);
        }
        
        outputElem.appendChild(header);
        outputElem.appendChild(p);
    }
}
buildTriviaQuestions();


// Alternate versions: To try out, swap out buildTriviaQuestions with one of
// the following:
function buildTriviaQuestionsInnerHtml() {
    let outputElem = document.querySelector('#trivia-questions');
    let number = 0;
    for (let questionInfo of triviaQuestions) {
        console.log('question:', questionInfo);
        let choice0 = questionInfo.choices[0];
        let choice1 = questionInfo.choices[1];
        let choice2 = questionInfo.choices[2];
        let choice3 = questionInfo.choices[3];
        let correctAnswer = questionInfo.correctAnswer;
        outputElem.innerHTML += `
            <h5>${questionInfo.question}</h5>
            <p id="q${number}buttons">
                <button onClick="reportAnswer(${number}, '${choice0}')">A) ${choice0}</button>
                <button onClick="reportAnswer(${number}, '${choice1}')">B) ${choice1}</button>
                <button onClick="reportAnswer(${number}, '${choice2}')">C) ${choice2}</button>
                <button onClick="reportAnswer(${number}, '${choice3}')">D) ${choice3}</button>
            </p>
        `;
        number++;
    }
}



// Alternate versions: To try out, swap out buildTriviaQuestions with one of
// the following:
function buildTriviaQuestionsCreateElement1() {
    let outputElem = document.querySelector('#trivia-questions');
    let number = 0;
    for (let questionInfo of triviaQuestions) {
        let currentNumber = number;
        console.log('question:', questionInfo);
        let question = questionInfo.question;
        let header = document.createElement('h3');
        header.textContent = question;
        let p = document.createElement('p');
        p.id = 'q' + number + 'buttons';

        for (let choice of questionInfo.choices) {
            let button = document.createElement('button');
            button.textContent = choice;
            button.onclick = () => {
                reportAnswer(currentNumber, choice);
            };
            p.appendChild(button);
        }

        outputElem.appendChild(header);
        outputElem.appendChild(p);

        number++;
    }
}

function reportAnswer(questionNum, answerGiven) {
    console.log('report answer here!!', questionNum);
    let questionInfo = triviaQuestions[questionNum];
    let correctAnswer = questionInfo.correctAnswer;
    console.log('current question being answered:', questionInfo);

    let id = 'q' + questionNum + 'buttons';
    let elem = document.querySelector('#' + id);
    if (answerGiven === correctAnswer) {
        elem.textContent = 'Correct';
        triviaRight++;
    } else {
        elem.textContent = 'Wrong. Correct answer: ' + correctAnswer;
        triviaWrong++;
    }

    console.log('right:', triviaRight);
    console.log('wrong:', triviaWrong);

    let total = triviaRight + triviaWrong;
    elem.textContent += ` (${triviaRight}/${total} correct)`;
}


