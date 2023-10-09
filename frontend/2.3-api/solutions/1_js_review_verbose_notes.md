### JavaScript terminology

- JavaScript
    - The third language of the web after HTML & CSS, defines behavior & modifies DOM
- dev tools console
    - Debugging available in Chrome/Chromium Dev tools, and also Firefox has an equivalent
    - Where we see console.log
    - It lets inspect the DOM of the page
    - Confirms that JavaScript is working
    - Keep this open at all times while working on JS!
- script tag
    - Includes JS in an HTML document
    - Link JS files
    - Always need closing tags
- DOM
    - Tree-like structure that HTML turns into when interpreted by the browser
    - Visible in the inspect panel
    - Manipulated by JavaScript
    - Not "saved" -- e.g. only is the current representation
    - Modified with CSS via ::before and ::after
    - Current state of the document
- DOM manipulation
    - JavaScript modifies the DOM
    - ANYTHING you want to do with JavaScript will probably require DOM manipulation
    - No DOM manipulations = console.log's ONLY
    - Use variety of DOM traversal & manipulations methods below
- DOM tree
    - CS Tree concept that is used when modelling the DOM
    - "Family tree"-style terminology
    - Parent, child, sibling, ancestor, descendent


### JavaScript types and functions

- object
    - Defined with curly braces e.g. {}
    - In practice, used the same as other key-value pairs containers types
        - Much like "dict" in Python, or hash maps in perl/ruby
    - Technically different, since they can only have string keys, and also have other features
    - Useful data structure for associate strings with other data
    - Access properties with dot notation
        - a = {b: 3}
        - console.log(a.b);
    - Requires quotes around string keys (aka property names) that have spaces or unusual characters

- array
    - Sequential data type for JavaScript
    - Uses square brackets to create
    - Useful for sequential data, collections of objects, etc.
    - Access values with integer index (numbering starts at 0)
        - a = ['x', 'y', 'z']
        - console.log(a[0]) // x

- strings
    - Text data in JavaScript
    - Double or single quotes both do the same thing
    - Behave similar to any other programming language's string types
    - Can be templated with backtick ``
    - Single/double quote stings don't allow templating OR multiple lines
    
document.querySelector
    - Access ("traverse") the DOM to get a particular element that matches a certain CSS selector
    - Only will return a single element
    - If not found, will return null
    - We always need to get a reference to a DOM element before we start manipulating it
    - Exmaple:
        - let elem = document.querySelector('#top-bar');
    - ANY CSS selector will also work with this, including pseudo-classes
    - "singular"
        
document.querySelectorAll
    - "plural"
    - Returns ALL matching elements with given CSS selector
    - Returns something very similar to an Array called a "NodeList"
    - Exmaple:
        - let allLargeButtons = document.querySelectorAll('.LargeBtn');
        - // loop through it, etc
        
document.createElement
    - Create new DOM element out of "thin air"
    - Can make div, p, a, etc -- any HTML tag can be created this way
    - Doesn't add to DOM, must explicitly do that in another step (e.g. with appendChild)
    - exmaple:
        - let newPTag = document.createElement('p');
        
element.innerHTML
    - Allows setting of HTML on an element
    - Use with caution if adding user data to element, because
        - ANY HTML can be inserted tihs way
    - Example:
        - newPTag.innerHTML = 'This <strong>way</strong> is the <em>right way</em>.';
    
element.textContent
    - Add text to an element
    - newPTag.textContent = 'This way is the right way.'
    - Does not support HTML
        - newPTag.textContent = 'Add italics with code that looks like: <em>this</em>';

- element.value
    - "just for forms"
    - Get contents of inputs, selects, and textareas
    - Get what users type into forms
    - Set the current value of what is being typed into a form
    - Example:
        - HTML: <input type="text" value="jqhacker" placeholder="Username" />
        - let value = inputElem.value;
        - inputElem.value = '...'

- element.onclick
    - One way to attach an onclick on an element
    - Allows us to have a function get invoked whenever a user clicks on this DOM element
    - Example:
        - inputElem.onclick = () => { doSomethingelse(); }

- element.appendChild
    - Adds a DOM element to the DOM
    - Useful when paired with createElement to actually add those elements to the DOM after creation

- element.children
    - Array-like object of children within an element
    - All the "children" in the DOM of any element
    - can be looped through, or accessed with indices
    - example:
        - let div = document.query..... // etc
        - let childAt2Index = div.children[2];
        - for (let child of div.children) { //etc


### JavaScript syntax

- ===
    - equality operator, check to see if the two are different
    - Don't use ==, it's a "loose equality" that's confusing & useless
- let
    - Define variables in our code
    - Scoped by code block... e.g. when defined in {} it will be trapped there (if, for, function etc)
    - Only need to define the variable once, then can be used after that without let
- const
    - Identical to let, except variables declared with const can never be reassigned
    - Example:
        - const a = 3;
        - a = b + 10; // ERROR
        - const arr = [1, 2];
        - arr.push(3); // OK
        - arr = [5, 6]; // ERROR

- if
    - Allows code to be conditionally executed based on a conditoin
    - Supports else, else if

- &&
    - "And" conjunction
    - Allows multiple conditions to be in an if or a while
    - BOTH conditions must be met for the total condition to be met
- ||
    - "Or" conjunction
    - Allows multiple conditions to be in an if or a while
    - ONE or BOTH conditions must be met for the || conditions to be met
- function
    - Declares a function
    - can be given a certain name
    - supports default arguments (like Python), but not keyword or named arguments (unlike Python)
    - Example:
        function nameOfFunction(a, b, c='defualt value') {/* etc */ }
    - Is an expression, meaning it can be defined in any context
    - Example:
        let nameOfFunction = function (a, b, c='defualt value') {  }
- for...of
    - Define a for loop through an iterator in JS
    - Works on any iterable type, e.g. Array, Objects, Object.entries, NodeLists, etc
    - Replaces just about ALL previous for loops in JS
    - Allows us to loop through data, processing each item or DOM element individually

