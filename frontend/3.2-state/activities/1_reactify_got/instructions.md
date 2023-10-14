# Game of Thrones Trivia

For this challenge, you will be transforming a plain HTML page with a CSS file
and some onClick events into a react powered app.

The plain HTML page is in the "legacy/" directory. Go ahead and open it to see
how it should work.


Challenge #1: Getting started
----------------------

1. If you don't have a React app already created somewhere, or don't mind
waiting as you start fresh, then create one now:


    npx create-react-app reactify-got

2. NOTE: If `create-react-app` takes too long, consider in the future copying
the `node_modules` directory from your a previous react app into this
directory, and go from here. Get use to this process since you will be doing it
often in this class and classes to come!

3. Once ready, use the following to get your react server running:


    cd reactify-got
    npm run start

4. Now, open up changing src/App.js in your editor. Change some wording to
ensure your changes are getting picked up.

5. Finally, keep the "guides/react_tasks.md" file open for tips on how to do
each of the next challenges.


Challenge #2: Transfer the HTML
----------------------

Your second challenge is transferring the HTML. This can be done in a big ol'
copy & paste from the HTML file in the "legacy/" directory.

If things go poorly, refer to the guide for some gotchas.



Challenge #3: Transfer the CSS & background image
----------------------

Next tricky thing is to fix the CSS and background image. Note that the other
images are all using direct URLs with "http", which means nothing needs to be
changed with these.

- Copy & paste the CSS into "App.css".

- Copy the background image into the "src/" directory

- Getting an error about not finding the background image? If so, you will have
  to modify the CSS file (line 33) to make sure it points to where you put the
  image.

- Alternatively: You can just copy over the directories into src/ and then add
  a new line to import it in App.js



Challenge #4: Fixing the onClick events
----------------------

Replace the onClick events with the React versions to get them working again.


**Hint:**


    <button onClick="alert('Wrong')">1. Weirwood</button>

becomes


    <button onClick={() => alert('Wrong')}>1. Weirwood</button>


(Note the "=>" arrow function)



Bonus Challenge #1: DRY out the onClick events
----------------------

1. Create functions called onCorrectAnswer and onWrongAnswer.

2. Make those functions do the alert


Bonus Challenge #2:
----------------------

The goal is to count the correct answers.  Add above render() but below
the line that starts with "function App()":


    const [correctAnswers, setCorrectAnswers] = useState(0);

Then add code to make it add a correct answer:


    setCorrectAnswers(correctAnswers + 1);

on every correct answer.

Finally, show this in a box somewhere on the page. For this, you'll need
something like:


    <div>{correctAnswers}</div>

----------------------
Bonus Challenge #3:

Repeat #2, but for incorrect answers.

