Challenge #2: HINTS
------------------------------------------------------------

- Adding console.log is always a good idea.

  function App () {
    /* ... etc ... */

    console.log('correct guess count:', correctGuessCount);
    return (

    /* ... etc ... */


Challenge #2: HINTS
------------------------------------------------------------

* Step 1 Hint: You'll need to copy the contents of the onCorrectAnswer
  function, and then change every spot where it says of "correct" to say
  "wrong".

* Step 2 Hint: Look in your console.log. Does the "wrongGuessCount" now go up
  every time a wrong answer is guessed?

* Step 3 Hint: Look for the div with the class "Guesses". You'll need to follow
  a similar pattern as the existing code:

        Correct guesses: {correctGuessCount}<br />


Challenge #3: HINTS
------------------------------------------------------------

HINT 1: Use the following syntax for a short-hand "if statement" in JSX:
    {
        answer === 42 ? (
            <p>The answer is 42</p>
        ) : (
            <p>Nope, no answer</p>
        )
    }

HINT 2: Use "null" wherever you don't want any element at all.

Reason we use these: This is rather arbitrarily called the "ternary operator".
It is common in JSX, since JSX templating -- or "interpolation" -- only
supports "expressions" and not statements, meaning if, for, while, are all not
supported within the JSX code.



Challenge #4: HINTS
------------------------------------------------------------

- Hint 1: The if statement should go right above the return

- Hint 2: It should look something like this:

        let total = correctGuessCount + wrongGuessCount;
        if (total > 4) {
          return (
            <h1 className="Header">
                ...
            </h1>
          );
        }



Bonus Challenge #1: Prevent multiples per question
------------------------------------------------------------


- Step 1 Hint

        function onWrongAnswer(questionNumber) {
            console.log('Wrong! question number:', questionNumber);
            // ...
        }

- Step 2 Hint

        <button onClick={() => onWrongAnswer(0)}>1. In a lightning storm</button>
        <button onClick={() => onCorrectAnswer(0)}>2. In a fire</button>
        <button onClick={() => onWrongAnswer(0)}>3. In an omelet</button>
        <button onClick={() => onWrongAnswer(0)}>4. In a frozen cave</button>

- Step 3 Hint

        const [questionsAnswered, setQuestionsAnswered] = useState({});

- Step 4 Hint: This is much trickier than the previous steps, since we are
  assigning within an object. Try something like:

    function onCorrectAnswer(questionNumber){
      console.log('Correct!', questionNumber);
      setCorrectGuessCount(correctGuessCount + 1);
      setQuestionsAnswered({
        ...questionsAnswered,
        [questionNumber]: true,
      });
    }


For more information: Google "spread syntax", which allows an iterable like
arrays, strings, or even objects to be expanded into another object, which is
commonly used for cloning and merging data.  We have to use spread syntax when
updating because updating a state variable in a function always replaces it
instead of merging it.



Bonus Challenge #2: HINTS
------------------------------------------------------------

Hint: Make sure you conditionally render .Question-options, otherwise you might
get the following error:

        Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag


