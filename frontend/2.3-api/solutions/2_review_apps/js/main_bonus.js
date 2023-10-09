let counters = [
    {
        title: 'Meeting attendees',
        counterName: 'attendees',
    },
    {
        title: 'Meeting presenters',
        counterName: 'presenters',
    },
    {
        title: 'Meeting observers',
        counterName: 'observers',
    },
    {
        title: 'Agenda items',
        counterName: 'agenda',
    },
];

let countData = {};

function setupCountersDom() {
    let div = document.querySelector('#meeting-counters');
    for (let counterInfo of counters) {
        let title = counterInfo.title;
        let counterName = counterInfo.counterName;
        countData[counterName] = 0;
        div.innerHTML += `
            <p>
                ${title}: <span id="${counterName}">0</span>
                <button onClick="incrementValue('${counterName}', 1)">+1</button>
                <button onClick="incrementValue('${counterName}', 10)">+10</button>
                <button onClick="incrementValue('${counterName}', 100)">+100</button>
            </p>
        `;
    }
}
setupCountersDom();

function incrementValue(counterName, incrementAmount) {
    let span = document.querySelector('#' + counterName);
    countData[counterName] += incrementAmount;
    span.textContent = countData[counterName];
}

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


