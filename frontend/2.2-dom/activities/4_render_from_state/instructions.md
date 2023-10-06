Challenge #1
-------------------------------------------

- Console.log: Do the first thing you do in JavaScript (hint console.log, in
  all the functions!)

- Code Comprehension: Once you confirm this is working, explain in your own
  words what a "template literal" is, and how it functions in the code.



Challenge #2
-------------------------------------------

- Challenge 2 & 3 will involve filling out the "updateStateFromInputs()"
  function to do what it's name implies (correctly set the "state variables"
  based on the data the user entered.)

- Start by setting the "name" variable equal to the user-entered string in the
  "#name" input -- commented-out hints are provided for you



Challenge #3
-------------------------------------------

Rinse & repeat for all the inputs, so that the state variables get fully "set
up" with each of the input's values before rendering.



Challenge #4
-------------------------------------------

Modify the HTML as necessary to use the "onKeyUp" event so that the adlib
updates as you type.

Hint: onKeyUp is another event (just like onClick), except it is activated when
a text input is being typed in.



Challenge #5
-------------------------------------------

- In HTML, create a dropdown allowing you to select one of 3 adlib formats.

- Add JavaScript necessary to populate a global state variable when the
  drop-down is selected.

- Alternate formats:

        <ol>
            <li>Thank you for purchasing  ${name}'s Signature Collection
            ${noun}!</li>
            <li>To begin assembly of your ${noun}, start by applying
            ${largeNumber} screws with a ${familyName}-style screwdriver.</li>
            <li>Then, travel to ${country}, and find the largest ${sillyNoun},
            and use the remaining ${largeNumber} of screws to attach it to
            the ${noun}.</li>
            <li>When complete, your ${noun} should look extremely
            ${adjective}.</li>
        </ol>


        Hi Instructors,<br />
        I will be unable to submit homework today. I have come down with a case
        of "${sillyNoun} syndrome" after injesting a ${noun} and have a
        horribly ${adjective} liver. We have made an appointment with Dr.
        ${familyName}, who is the world's greatest expert on ${sillyNoun}
        syndrome and has ${largeNumber} degrees in sciencing from ${country}
        University. Dr. ${familyName} will send you all the information you
        need.  Thank you!<br />
        Thanks, <br />
        ${name}


Code hints (will require modification):


        <!-- HTML hint: -->
        <select id="formats">
            <option value="uni">University</option>
            <option value="hw">Homework Excuse</option>
            <option value="wash">Washing Instructions</option>
        </select>


        // JavaScript hint:
        if (selectedFormat === 'uni') {
            // Do something
        } else if (selectedFormat === 'hw') {
            // Do something else
        }







Advanced Bonus Challenge: DRY it up!
-------------------------------------------

Can you do it more DRYly? Think of ways to refactor it to make it more dry, and
support an arbitrary number of fields AND an arbitrary number of formats. If
you have time, write pseudcode for this.

(No solution provided.)

