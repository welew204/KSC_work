React Guide
====================

The purpose of this guide is to explain with code snippet examples the most
common tasks you will do with React, especially when converting "plain HTML"
into React JSX code.


Tips for transferring HTML
-------------------------------

1. Only grab what's within body -- if you are writing `<body>` or `<head>` tags
in your JSX you are doing something wrong!

2. If you absolutely need to add stuff to the head (such as the title, or to
include 3rd party CSS such as Google Fonts), then open up public/index.html to
add the stuff there.

3. While not required, it's best to put your JSX in parenthesis, on a new line



Adding images
-------------------------------

For images that are local (such as icons, logos, etc), you should put
them in your src/ directory.

    import myKittens from './kittens.jpg';

    // Later on...
    return (
        <img src={myKittens} alt="Cute kittens" />
    );

If you put your images in a directory called "images/" (which is a
reasonable thing to do), then you will have to change only your import,
as such:

    import myKittens from './images/kittens.jpg';


Adding CSS
-------------------------------

CSS also should be in your src/ directory. For example, if you have a
file called "my-styles.css" in your src/ directory:

      import './my-styles.css'

If you put it in a "css" directory, then write:

      import './css/my-styles.css';


NOTE: Images and other files mentioned in the CSS must have relative paths that
work in the new placement of the CSS. In other words, to reference a background
image in the same directory, you should do:

      background-image: url('./somanykittens.jpg');


Common Gotchas
-------------------------------

HTML can generally be added as-is to JSX, with a few changes:

### 1. Self-closing tags

While HTML will tolerate unclosed tags, such as

    <img src="i.png">
    <br>
    <hr>

The stricter version of HTML employed by JSX does not (XHTML). You must include
the "/>" for any self-closing tag (img, br, hr). The above would look like:

    <img src="i.png" />
    <br />
    <hr />

This one sometimes generates confusing error messages, so be careful!


### 2. class attribute gets renamed

The attribute `class` becomes `className`: The newer versions of React will
auto-correct this for you (previous ones would just fail), but it's still
considered incorrect and will cause warnings. Instead of doing:

      <div class="ExampleClass"></div>

You should do:

      <div className="ExampleClass"></div>


### 3. style attribute becomes JavaScript objects with camelCase

React makes it easier to embed style. Instead of:

      <div style="height: 30px; background-color: blue"></div>

You should do:

      <div style={{height: "30px", backgroundColor: "blue"}}></div>


### 4. onClick attribute becomes JavaScript function

React lets you add onClick (and onMouseOver, onChange, etc) events with ease,
but you will need to use function syntax. So instead of:

      <div onClick="myFunction()"></div>

You should do:

      <div onClick={myFunction}></div>
Or:

      <div onClick={() => myFunction()}></div>

However, you should probably NEVER do:

      <div onClick={myFunction()}></div>

As this will run the function when the div is getting rendered, NOT on the
click event (this might even cause an infinite loop).





Attaching Click Events
-------------------------------

To attach click events to JSX, use a "() =>" syntax (arrow function syntax):

      <button onClick={() => { console.log('I got clicked!'); }} />

It's cleaner to put your events as functions. To do this, write something like:

    function App () {
        function gotClicked() {
            console.log('I got clicked!');
        }
        return (
            <button onClick={gotClicked} />
        );
    }


If your function requires arguments, then do the following:

    function App () {
        function gotClicked(letter, number) {
            console.log('got clicked with info:', letter, number);
        }
        return (
            <button onClick={() => gotClicked('a', 3)} />
        );
    }



Attaching onChange Events
-------------------------------

To access data from an input, you must attach an onChange event. The data can
be found (somewhat arbitrarily) in event.target.value

        function onMessageChange(event) {
          let newValue = event.target.value;
          console.log('I got changed to:', newValue);
        }

        return (
          <input onChanged={onMessageChange} />
        );


