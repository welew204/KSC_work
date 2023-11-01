Component Style Library

This activity is the inverse of the previous activity. Once again, you will
work in the realistic scenario of a component library or style-guideline. This
time, however, the situation is reversed: The App.js that shows off the
components is already written for you, now you must be working on writing the
components themselves.

- NOTE: You should ONLY be modifying `components/` for this activity (don't
  change App.js, except for a final bonus challenge)

- Get started as before: either `npm install`, or copying a previous
  `node_modules`, then running the server with `npm run start`


Challenge #1: Button
---------------------------------------------------------------------

Jump into the Button component source-code.

1. Use the clue provided in the source code to get the text to display

2. You'll need to attach the click event so that the counter works.

Remember: When using the shorthand syntax like we are doing here, it's "props",
not "props"!




Challenge #2: FieldSet
---------------------------------------------------------------------

This one will require quite a bit more props than the previous one. When done
correctly, you should be able to type into it, the name you enter should show
in "Name entered:", and it show the placeholder text, the label text, and the
legend text, kind of like:

    Name entered: jane

     ============================
    | Personal Information        |
      First Name
    |  ----------------------     |
      | jane                 |
    |  ----------------------     |
     ============================




Challenge #3: Tabs
---------------------------------------------------------------------

Now, implement the Tab list component. This will require use of ".map" to loop.


Challenge #4: Tab selected
---------------------------------------------------------------------

Make it so that the selected tab is shown as selected, and the click events
work such that when clicking on a tab it changes to that tab.



Challenge #5: LengthSelectorInput
---------------------------------------------------------------------

Create a new component called LengthSelectorInput.  The goal of this challenge
is to practice making a novel component from scratch, "according to a spec".

In the end, it should look a little like this:

            ----------------------------------------------
            |   [-] 10 [+]  [Type text...       ]        |
            ----------------------------------------------

1. It should have "+" and "-" buttons that count up and down

2. The number should default to 10

3. Next to this "number selector", there should be an HTML input

4. If the length of the text in the input is greater than the number, give the
entire box a red background. Otherwise, it should have a white background.



Bonus Challenge #1: TagList
---------------------------------------------------------------------

Tag list components are the type of component you might see on an application
such as Instagram where you can tag photos.  Make a tag list component, which
displays all the tags such that each tag has a button that can delete that tag,
and has an input box and a button to add new tags.

Hint: This one is especially tricky. You will want to use class syntax for it,
as it will need its own state: One of the few situations like this.



Bonus Challenge #2: Tabs after TagList
---------------------------------------------------------------------

Add code to make a set of tabs appear after the tag list that track the
contents of the tag list. In other words, adding a new tag will add a new tab.



Bonus Research Challenge: Learn about PropTypes
---------------------------------------------------------------------

Library Research Challenge: Research "PropTypes" -- how might this have helped
this activity and the previous activity?

