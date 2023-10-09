Challenge #1 - Hints
------------------------------------------------------

Hint: The script tag is not getting included.



Challenge #2 - Hints
------------------------------------------------------

Hint: To change the text of a DOM element, it's not ".text", but something
else.



Challenge #3 - Hints
------------------------------------------------------

Hint #1: This one is tricky! Use previous code as a basis for making the
onClick and functions.

Hint #2: Take it just one bit at a time. Use console.log to make sure each part
of it works.

Hint #3: Once the onClick is working, the next step is to select the Accordion
from the page using a querySelector (see previous code, examine the ID of the
Accordion), and put that into a variable.

Hint #4: Once in  a variable (in this case, called someElementVariable), use
something like this to toggle the existence of a class:
someElementVariable.classList.toggle('name-of-class');

(More info here: https://alligator.io/js/classlist/)


C3 Bonus: Can you figure out how it is doing the sliding animation?



Challenge #4 - Hints
------------------------------------------------------

Hint #1: Use querySelector to gain access to the button DOM element

Hint #2: Use an if-statement to check if it currently has the "--collapsed"
class, and if so, set the textContent of the button to be one label. If not,
set it to be the other label.

Hint #3: Use `element.classList.contains('NameOfClass')` to see if a particular
DOM element has a particular class




Bonus Challenge: Hint legacy jQuery code
------------------------------------------------------


      FROM: del@cogni.ze
      TO: rm@cogni.ze
      SUBJECT: jquery code snippets
      BODY:

      ,buttons: {'Yes': function () {
        $('img').effect('slide');
      }}

      $('.button').click(function () {
        $(this).text('Welcome to the Cognizé Family');
        $(this).text('test');
        alert('click')
        $('*').draggable().resizable();
      });
      $dialog.dialog('open');

      $('.dialogcontent').dialog();
      var $dialog = $('.dialogcontent').dialog({
        autoOpen: false
        ,title: "Sales"
        ,show: "shake"
        ,hide: "explode"
      });

