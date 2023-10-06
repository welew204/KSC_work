Challenge #1
------------------------------------------------
1. The console.log at the top is o ensure you are editing the right file and
that it is "picking up on changes" when you refers (if it isn't, try "Hard
Refresh" with Control+Shift+R or Cmd+Shift+R on mac)

2. The console.log in render should look just like you see with recordItem
3. The console.log in the for loop could look like:
    console.log('New div is:', newDiv););););`



Challenge #2 - Hints
------------------------------------------------

- This takes a fairly short change on 1 line
- The existing line that says "textContent" is where it is currently adding in
  the name to the red boxes
- Use "+" to "concatenate" more values together




Challenge #3 - Hints
------------------------------------------------

See how "few" hints you can use of the following:

- Hint 1:

        newDiv.style.width = '300px';


- Hint 2:

        let length = 100 * 5;

- Hint 3:

        newDiv.style.width = length + 'px';

- Hint 4:

        let length = 100 * powerLevel;



Challenge #4 - Hints
------------------------------------------------

1. Clearing an input:

        SOMETHING_GOES_HERE.value = '';

2. Checking for valid input:

        if (SOME_VARIABLE_IS_HERE === '') {
            console.log('invalid input, dont do it!')
        } else {
            console.log('valid input, add it to the list!')
        }

- Note: To make your code shorter, consider using `return` to exit a function
  prematurely, in an if-statement



Bonus Challenge - Hints
------------------------------------------------

- `powerLevel / highest` will give the proportion you want... you just need to
  then multiply it by another number such as 500px to "stretch" it out of the
  decimal range, so that if the highest is 10, power level 6 will be 300px.
