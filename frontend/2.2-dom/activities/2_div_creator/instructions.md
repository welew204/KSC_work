Challenge #1
----------------------------------------------------------------

The JavaScript code is not correctly embedded or "inline" in the HTML this
time, it's in a separate JS file.

1. Add console.log to js/main.js, so you know when it gets included

2. Add a "script tag" in the index.html file, right before the `</body>`
closing tag which is the traditional location for script tags.
    - Hint: `<script src="...SOMETHING GOES HERE..."></script>`

- Tip: If your browser ever isn't "picking up changes" that you make in JS, try
  "Hard Refresh" with Control+Shift+R (Linux) or Cmd+Shift+R (macOS)

NOTE: Only continue from this challenge when you see the "console.log" you
added in the terminal, confirming you are including the JS file correctly.


Challenge #2
----------------------------------------------------------------

Debugging time! There is a typo preventing the comment adding function from
running when you click the Add Comment button. Can you spot it & fix it?

NOTE: Only continue from this challenge when you see the "Adding a comment"
"console.log" in the terminal, confirming the function is executing.



Challenge #3
----------------------------------------------------------------

Make the new comment div be in a color of your choice (such as "green" or
"tomato").

- Hint #1: `newCommentDiv.style.color = 'SOMETHING GOES HERE';`
- Hint #2: For more documentation on this, check this out:
- <https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style>


Challenge #4
----------------------------------------------------------------

Get the value of the "Color" input, and make the foreground color of the new
comment be the color entered there instead of a hard-coded style as before.

Hint: You'll have to change the code you wrote for Challenge #3, to use code
similar to retrieving the value of textArea



Challenge #5
----------------------------------------------------------------

Add code to clear the textarea after you submit each comment.



Bonus Challenges
----------------------------------------------------------------

- Add a new input for background-color, just like you have one for color, to
  allow customization of the background color of each element.
- Make it so that newlines in your textarea get converted into separate
  paragraphs (e.g. so that "enter"  works) Hint: The easiest way might involve
  splitting by "\n" and then combining with `<p>` tags, and using innerHTML of
  the commentDiv
- Improve the color input(s) in one of two ways:
    - Easier: Check out the "color" input type:
    - <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color>
    - Harder: Make both of the color inputs be a "multiple choice" select
    - <https://www.w3schools.com/tags/tag_select.asp>

