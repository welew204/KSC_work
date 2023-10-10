The Lord of the React

For your first dip into React, you will be "react-ifying" an HTML page with a
CSS file and some image files. In real life development teams, this will be a
very common task.


Challenge #1: Create a blank React app
----------------------------------------------------

Assuming you have node + npm + npx good to go (see the Create React App guide),
go to some spot where you like to do work, and create a new blank React app for
this activity with a command like:

        npx create-react-app lotr-activity

This will take a few seconds. Then, cd into your new project and run:

        npm run start

If all went well, you should see Welcome to React, along with a playfully
rotating logo!



Challenge #2: Hello World react edits
----------------------------------------------------

Everything starts with src/App.js. Go into that file, and make some basic text
edits where you see the JSX HTML. Verify the change auto-reloads your browser.



Challenge #3: Transfer the HTML
----------------------------------------------------

Next step is to copy all the Lord of the Rings character bios and information
and paste it into your new React project.

1. Open the `4_lotr/index.html` file. Copy the outer div of the index.html file
(the one starting with `<div id="wrapper">`).

2. Delete the contents of the `<div></div>` in the src/App.js file.

3. Paste the HTML form the index.html file in to the src/App.js file.

4. If done correctly, the text (without any styling) will show in the browser.



Challenge #4: Transfer the CSS & images
----------------------------------------------------

Your react page needs to get the CSS.

1. Copy the `4_lotr/main.css` file from the activity into the src/ directory of
your React project

2. Copy the images/ directory into the src/ directory of your React project.

3. Add an "import" line to your `src/App.js` file to include the main.css (see
the existing CSS import line to give you an idea of what to do)

If done correctly, the page should now be styled.



Challenge #5: Correcting the images
----------------------------------------------------

Background: React + Webpack is kind of like magic with images. You can import
a show images as though they were code.

1. Import each of the 4 images (Frodo, Gandalf, Aragorn, Legolas)
    - Hint: Using the "import logo from ..." code as a syntax reference.
2. Once imported, modify the HTML (JSX) to show the images you imported.
    - Hint: Using the `<img src={logo} />` code as a syntax reference

At the end of this challenge, you should have recreated the page!

-----------

HINT: Here's how to import Frodo:

        import frodo from './images/thumbs/frodo.jpg';

And here's how to use Frodo in JSX:

        <img src={frodo} />


Bonus Challenge #1: Clean up warnings
----------------------------------------------------

1. A little "gotcha" with JSX is that the HTML attribute "class", is called
className, to avoid confusion with the JavaScript concept of class. React is
forgiving enough to fix this, but not without warnings.
    - Change all of your "class=" into "className=" to get rid of this warning.

2. Delete the references to "logo".

3. Add alt tags to all images for more accessible design.


Bonus Challenge #2: Interpolation
----------------------------------------------------

Put Legolas's bio into a variable defined in the App function and before the
return() in order to have it be interpolated into the JSX with curly-braces.

