
// Solution 2: The typo was "addComent" instead of "addComment"
function addComment() {
  console.log('Adding a comment.')

  // Retrieve the textarea & the text the user entered, from the DOM
  let textArea = document.querySelector('#comment-textarea');
  console.log('Text area:', textArea);
  let commentText = textArea.value;
  console.log('Getting comment text', commentText);

  // Create a new div for the new message we will be making
  let newCommentDiv = document.createElement('div');

  // Solution #3
  //newCommentDiv.style.color = 'tomato';

  // Solution #4
  let colorInput = document.querySelector('#comment-color');
  console.log('Color:', colorInput);
  let colorText = colorInput.value;
  console.log('Getting comment text', colorText);
  newCommentDiv.style.color = colorText;

  newCommentDiv.textContent = commentText;
  console.log(newCommentDiv);

  let commentSectionDiv = document.querySelector('.CommentSection');
  console.log('Comment section div:', commentSectionDiv);
  commentSectionDiv.append(newCommentDiv);

  // Solution #5
  textArea.value = '';
}

/* Bonus Challenge solution in separate file */
