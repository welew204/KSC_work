Bonus Challenges
------------------------

1. Alerts are annoying and bad UI. Improve the "receipt" functionality to use
HTML to display the receipt, such as replacing the main content area with the
receipt contents.
    - Hint: document.querySelector('.MainContent').innerHTML = 'test';

2. DRY out the HTML. Rewrite it to generate the available product items HTML
from a list (array) within JavaScript.
    - Hint: You'll need to use for loops and create elements. Use what you
      learned in the ToDo application for this.
    - Hint: To save you time, here's an array already made for you:

        let items = [
          {
            title: "Lettuce",
            description: "Lettuce deliver the finest leaves to you.",
            cost: 5,
            item: "Leaf of Lettuce",
          },
          {
            title: "Tomato",
            description: "Some same tomato, some say tomahto, we say buy them from us.",
            cost: 10,
            item: "Tomato",
          },
          {
            title: "Oats",
            description: "Some same tomato, some say tomahto, we say buy them from us.",
            cost: 8,
            item: "Oat Grain",
          },
        ];



3. DRY out the JavaScript. Refactor your JavaScript functions to support an
arbitrary number of items.
    - e.g. no more buyTomato, buyLettuce, etc but instead a versatile "buyItem"
    - You'll need to store the "shopping cart" count in a brand new object

4. Display a "Next Customer" button on the "receipt" page that will somehow
reset the app with everything at 0 again, to allow another customer to be "rung
up" with items. (Hint: The easiest way is to refresh the page!)
