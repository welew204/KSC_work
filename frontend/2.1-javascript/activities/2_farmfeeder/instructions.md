Challenge 1: console.log
--------------------------------------

As a matter of good habits, add a console.log to the js/main.js file and
confirm it in your browser console. E.g.: console.log('Hello Farm World!')



Challenge 2: feedPig
--------------------------------------
1. Code comprehension: Copy the following feedPig code into the JS file, and
Explain in your own words what the code is supposed to do.

      let pigFedCount = 0;
      function feedPig() {
          console.log("Pig is getting fed.");
          pigFedCount++; // increment pigFedCount
          let span = document.querySelector('#pig-eaten');
          span.textContent = pigFedCount;
      }


2. Add an onClick attribute on the pig image to call feedPig to the pig image.
  - Hint: You will need to use code like onClick="feedPig()" in the HTML code.



Challenge 3: feedHorse
--------------------------------------

Now it's time to allow feeding of the horse. Copy & paste the code for the pig,
but modify it so that it can it keeps track of a new "horseFedCount".

Hint #1: You will need to modify both the HTML and the JavaScript for this
challenge.

Hint #2: Don't worry about being DRY for now. Just replace pig with horse.



Challenge 4: Horse feeding limit
--------------------------------------

Horses can only eat so much before they get full. Modify your code from
Challenge 3 prevent the horse "fed count" from exceeding 10.

Hint: Use an "if-statement"



Challenge 5: Overfed alert
--------------------------------------

Horses don't like being overfed. If the horse is getting over fed, make the
page display an alert saying "Stop feeding me, I'm full!".



Challenge 6: Goat
--------------------------------------

Repeat Challenge 3, except for the goat. As before, don't worry about DRY.



Challenge 7: Goat thievery
--------------------------------------

The goat is the hungriest of them all, and steals food from the other animals.
Whenever the goat is fed, halve the number of times each of the other animals
were fed (rounding down).


----------------------------------------------------------------------------


Bonus Challenge #1: DRY out functions
--------------------------------------

Time to DRY things out! Identify patterns in your code, and refactor it to be
more DRY.

Hint: A logical thing to DRY out is the DOM updating code. You might want to
move that into it's own function called "render" and have that be called at the
end of each of the event functions.



Bonus Challenge #2: setInterval
--------------------------------------

- To make this game challenging, it's time for the animals to continually
  increase in hunger.
- Modify this game so that all the counters start at 10, and tick down rapidly
  using setInterval
- If any of them get to 0, that animal "starves", and the player loses.
- When you lose, you should display somehow "You lose".


- Hint: setInterval causes the given code to repeat, ad infinitum. Here's some
  code to get you going:


      setInterval(() => {
          console.log('ticking...');
          // Add code here to tick down everything & rerender
      }, 1000);



Bonus Challenge #3: Sound
--------------------------------------

Look up online how to play sound effects. Make it so that when you feed an
animal, it plays the eating MP3 sound effect included with this activity.

